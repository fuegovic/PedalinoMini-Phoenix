import { f as e } from "./serial-launch-button.js";
var t = function (e, i) {
  return (
    (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }),
    t(e, i)
  );
};
function i(e, i) {
  if ("function" != typeof i && null !== i)
    throw new TypeError(
      "Class extends value " + String(i) + " is not a constructor or null",
    );
  function o() {
    this.constructor = e;
  }
  t(e, i),
    (e.prototype =
      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o()));
}
var o = function () {
  return (
    (o =
      Object.assign ||
      function (e) {
        for (var t, i = 1, o = arguments.length; i < o; i++)
          for (var n in (t = arguments[i]))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }),
    o.apply(this, arguments)
  );
};
function n(e, t, i, o) {
  var n,
    r = arguments.length,
    d =
      r < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, i)) : o;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
    d = Reflect.decorate(e, t, i, o);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (n = e[a]) && (d = (r < 3 ? n(d) : r > 3 ? n(t, i, d) : n(t, i)) || d);
  return r > 3 && d && Object.defineProperty(t, i, d), d;
}
function r(e) {
  var t = "function" == typeof Symbol && Symbol.iterator,
    i = t && e[t],
    o = 0;
  if (i) return i.call(e);
  if (e && "number" == typeof e.length)
    return {
      next: function () {
        return (
          e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
const d = window,
  a =
    d.ShadowRoot &&
    (void 0 === d.ShadyCSS || d.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  s = Symbol(),
  l = new WeakMap();
let c = class {
  constructor(e, t, i) {
    if (((this._$cssResult$ = !0), i !== s))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
      );
    (this.cssText = e), (this.t = t);
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (a && void 0 === e) {
      const i = void 0 !== t && 1 === t.length;
      i && (e = l.get(t)),
        void 0 === e &&
          ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText),
          i && l.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const p = (e, ...t) => {
    const i =
      1 === e.length
        ? e[0]
        : t.reduce(
            (t, i, o) =>
              t +
              ((e) => {
                if (!0 === e._$cssResult$) return e.cssText;
                if ("number" == typeof e) return e;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    e +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                );
              })(i) +
              e[o + 1],
            e[0],
          );
    return new c(i, e, s);
  },
  m = a
    ? (e) => e
    : (e) =>
        e instanceof CSSStyleSheet
          ? ((e) => {
              let t = "";
              for (const i of e.cssRules) t += i.cssText;
              return ((e) =>
                new c("string" == typeof e ? e : e + "", void 0, s))(t);
            })(e)
          : e;
var h;
const u = window,
  f = u.trustedTypes,
  g = f ? f.emptyScript : "",
  b = u.reactiveElementPolyfillSupport,
  x = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? g : null;
          break;
        case Object:
        case Array:
          e = null == e ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      let i = e;
      switch (t) {
        case Boolean:
          i = null !== e;
          break;
        case Number:
          i = null === e ? null : Number(e);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(e);
          } catch (e) {
            i = null;
          }
      }
      return i;
    },
  },
  _ = (e, t) => t !== e && (t == t || e == e),
  v = { attribute: !0, type: String, converter: x, reflect: !1, hasChanged: _ };
let y = class extends HTMLElement {
  constructor() {
    super(),
      (this._$Ei = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$El = null),
      this.u();
  }
  static addInitializer(e) {
    var t;
    this.finalize(),
      (null !== (t = this.h) && void 0 !== t ? t : (this.h = [])).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return (
      this.elementProperties.forEach((t, i) => {
        const o = this._$Ep(i, t);
        void 0 !== o && (this._$Ev.set(o, i), e.push(o));
      }),
      e
    );
  }
  static createProperty(e, t = v) {
    if (
      (t.state && (t.attribute = !1),
      this.finalize(),
      this.elementProperties.set(e, t),
      !t.noAccessor && !this.prototype.hasOwnProperty(e))
    ) {
      const i = "symbol" == typeof e ? Symbol() : "__" + e,
        o = this.getPropertyDescriptor(e, i, t);
      void 0 !== o && Object.defineProperty(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    return {
      get() {
        return this[t];
      },
      set(o) {
        const n = this[e];
        (this[t] = o), this.requestUpdate(e, n, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || v;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (
      (e.finalize(),
      void 0 !== e.h && (this.h = [...e.h]),
      (this.elementProperties = new Map(e.elementProperties)),
      (this._$Ev = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      const e = this.properties,
        t = [
          ...Object.getOwnPropertyNames(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      for (const i of t) this.createProperty(i, e[i]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const e of i) t.unshift(m(e));
    } else void 0 !== e && t.push(m(e));
    return t;
  }
  static _$Ep(e, t) {
    const i = t.attribute;
    return !1 === i
      ? void 0
      : "string" == typeof i
        ? i
        : "string" == typeof e
          ? e.toLowerCase()
          : void 0;
  }
  u() {
    var e;
    (this._$E_ = new Promise((e) => (this.enableUpdating = e))),
      (this._$AL = new Map()),
      this._$Eg(),
      this.requestUpdate(),
      null === (e = this.constructor.h) ||
        void 0 === e ||
        e.forEach((e) => e(this));
  }
  addController(e) {
    var t, i;
    (null !== (t = this._$ES) && void 0 !== t ? t : (this._$ES = [])).push(e),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (i = e.hostConnected) || void 0 === i || i.call(e));
  }
  removeController(e) {
    var t;
    null === (t = this._$ES) ||
      void 0 === t ||
      t.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t]);
    });
  }
  createRenderRoot() {
    var e;
    const t =
      null !== (e = this.shadowRoot) && void 0 !== e
        ? e
        : this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((e, t) => {
        a
          ? (e.adoptedStyleSheets = t.map((e) =>
              e instanceof CSSStyleSheet ? e : e.styleSheet,
            ))
          : t.forEach((t) => {
              const i = document.createElement("style"),
                o = d.litNonce;
              void 0 !== o && i.setAttribute("nonce", o),
                (i.textContent = t.cssText),
                e.appendChild(i);
            });
      })(t, this.constructor.elementStyles),
      t
    );
  }
  connectedCallback() {
    var e;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (e = this._$ES) ||
        void 0 === e ||
        e.forEach((e) => {
          var t;
          return null === (t = e.hostConnected) || void 0 === t
            ? void 0
            : t.call(e);
        });
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    null === (e = this._$ES) ||
      void 0 === e ||
      e.forEach((e) => {
        var t;
        return null === (t = e.hostDisconnected) || void 0 === t
          ? void 0
          : t.call(e);
      });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$EO(e, t, i = v) {
    var o;
    const n = this.constructor._$Ep(e, i);
    if (void 0 !== n && !0 === i.reflect) {
      const r = (
        void 0 !==
        (null === (o = i.converter) || void 0 === o ? void 0 : o.toAttribute)
          ? i.converter
          : x
      ).toAttribute(t, i.type);
      (this._$El = e),
        null == r ? this.removeAttribute(n) : this.setAttribute(n, r),
        (this._$El = null);
    }
  }
  _$AK(e, t) {
    var i;
    const o = this.constructor,
      n = o._$Ev.get(e);
    if (void 0 !== n && this._$El !== n) {
      const e = o.getPropertyOptions(n),
        r =
          "function" == typeof e.converter
            ? { fromAttribute: e.converter }
            : void 0 !==
                (null === (i = e.converter) || void 0 === i
                  ? void 0
                  : i.fromAttribute)
              ? e.converter
              : x;
      (this._$El = n),
        (this[n] = r.fromAttribute(t, e.type)),
        (this._$El = null);
    }
  }
  requestUpdate(e, t, i) {
    let o = !0;
    void 0 !== e &&
      (((i = i || this.constructor.getPropertyOptions(e)).hasChanged || _)(
        this[e],
        t,
      )
        ? (this._$AL.has(e) || this._$AL.set(e, t),
          !0 === i.reflect &&
            this._$El !== e &&
            (void 0 === this._$EC && (this._$EC = new Map()),
            this._$EC.set(e, i)))
        : (o = !1)),
      !this.isUpdatePending && o && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const e = this.scheduleUpdate();
    return null != e && (await e), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Ei &&
        (this._$Ei.forEach((e, t) => (this[t] = e)), (this._$Ei = void 0));
    let t = !1;
    const i = this._$AL;
    try {
      (t = this.shouldUpdate(i)),
        t
          ? (this.willUpdate(i),
            null === (e = this._$ES) ||
              void 0 === e ||
              e.forEach((e) => {
                var t;
                return null === (t = e.hostUpdate) || void 0 === t
                  ? void 0
                  : t.call(e);
              }),
            this.update(i))
          : this._$Ek();
    } catch (e) {
      throw ((t = !1), this._$Ek(), e);
    }
    t && this._$AE(i);
  }
  willUpdate(e) {}
  _$AE(e) {
    var t;
    null === (t = this._$ES) ||
      void 0 === t ||
      t.forEach((e) => {
        var t;
        return null === (t = e.hostUpdated) || void 0 === t
          ? void 0
          : t.call(e);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
      this.updated(e);
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
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    void 0 !== this._$EC &&
      (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)),
      (this._$EC = void 0)),
      this._$Ek();
  }
  updated(e) {}
  firstUpdated(e) {}
};
var w;
(y.finalized = !0),
  (y.elementProperties = new Map()),
  (y.elementStyles = []),
  (y.shadowRootOptions = { mode: "open" }),
  null == b || b({ ReactiveElement: y }),
  (null !== (h = u.reactiveElementVersions) && void 0 !== h
    ? h
    : (u.reactiveElementVersions = [])
  ).push("1.5.0");
const E = window,
  I = E.trustedTypes,
  A = I ? I.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
  C = `lit$${(Math.random() + "").slice(9)}$`,
  S = "?" + C,
  T = `<${S}>`,
  R = document,
  O = (e = "") => R.createComment(e),
  k = (e) => null === e || ("object" != typeof e && "function" != typeof e),
  L = Array.isArray,
  F = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  N = /-->/g,
  D = />/g,
  $ = RegExp(
    ">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)",
    "g",
  ),
  M = /'/g,
  P = /"/g,
  H = /^(?:script|style|textarea|title)$/i,
  z =
    (e) =>
    (t, ...i) => ({ _$litType$: e, strings: t, values: i }),
  B = z(1),
  U = z(2),
  V = Symbol.for("lit-noChange"),
  G = Symbol.for("lit-nothing"),
  j = new WeakMap(),
  W = R.createTreeWalker(R, 129, null, !1),
  X = (e, t) => {
    const i = e.length - 1,
      o = [];
    let n,
      r = 2 === t ? "<svg>" : "",
      d = F;
    for (let t = 0; t < i; t++) {
      const i = e[t];
      let a,
        s,
        l = -1,
        c = 0;
      for (; c < i.length && ((d.lastIndex = c), (s = d.exec(i)), null !== s); )
        (c = d.lastIndex),
          d === F
            ? "!--" === s[1]
              ? (d = N)
              : void 0 !== s[1]
                ? (d = D)
                : void 0 !== s[2]
                  ? (H.test(s[2]) && (n = RegExp("</" + s[2], "g")), (d = $))
                  : void 0 !== s[3] && (d = $)
            : d === $
              ? ">" === s[0]
                ? ((d = null != n ? n : F), (l = -1))
                : void 0 === s[1]
                  ? (l = -2)
                  : ((l = d.lastIndex - s[2].length),
                    (a = s[1]),
                    (d = void 0 === s[3] ? $ : '"' === s[3] ? P : M))
              : d === P || d === M
                ? (d = $)
                : d === N || d === D
                  ? (d = F)
                  : ((d = $), (n = void 0));
      const p = d === $ && e[t + 1].startsWith("/>") ? " " : "";
      r +=
        d === F
          ? i + T
          : l >= 0
            ? (o.push(a), i.slice(0, l) + "$lit$" + i.slice(l) + C + p)
            : i + C + (-2 === l ? (o.push(void 0), t) : p);
    }
    const a = r + (e[i] || "<?>") + (2 === t ? "</svg>" : "");
    if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== A ? A.createHTML(a) : a, o];
  };
class q {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let n = 0,
      r = 0;
    const d = e.length - 1,
      a = this.parts,
      [s, l] = X(e, t);
    if (
      ((this.el = q.createElement(s, i)),
      (W.currentNode = this.el.content),
      2 === t)
    ) {
      const e = this.el.content,
        t = e.firstChild;
      t.remove(), e.append(...t.childNodes);
    }
    for (; null !== (o = W.nextNode()) && a.length < d; ) {
      if (1 === o.nodeType) {
        if (o.hasAttributes()) {
          const e = [];
          for (const t of o.getAttributeNames())
            if (t.endsWith("$lit$") || t.startsWith(C)) {
              const i = l[r++];
              if ((e.push(t), void 0 !== i)) {
                const e = o.getAttribute(i.toLowerCase() + "$lit$").split(C),
                  t = /([.?@])?(.*)/.exec(i);
                a.push({
                  type: 1,
                  index: n,
                  name: t[2],
                  strings: e,
                  ctor:
                    "." === t[1]
                      ? J
                      : "?" === t[1]
                        ? te
                        : "@" === t[1]
                          ? ie
                          : Z,
                });
              } else a.push({ type: 6, index: n });
            }
          for (const t of e) o.removeAttribute(t);
        }
        if (H.test(o.tagName)) {
          const e = o.textContent.split(C),
            t = e.length - 1;
          if (t > 0) {
            o.textContent = I ? I.emptyScript : "";
            for (let i = 0; i < t; i++)
              o.append(e[i], O()),
                W.nextNode(),
                a.push({ type: 2, index: ++n });
            o.append(e[t], O());
          }
        }
      } else if (8 === o.nodeType)
        if (o.data === S) a.push({ type: 2, index: n });
        else {
          let e = -1;
          for (; -1 !== (e = o.data.indexOf(C, e + 1)); )
            a.push({ type: 7, index: n }), (e += C.length - 1);
        }
      n++;
    }
  }
  static createElement(e, t) {
    const i = R.createElement("template");
    return (i.innerHTML = e), i;
  }
}
function Y(e, t, i = e, o) {
  var n, r, d, a;
  if (t === V) return t;
  let s =
    void 0 !== o
      ? null === (n = i._$Co) || void 0 === n
        ? void 0
        : n[o]
      : i._$Cl;
  const l = k(t) ? void 0 : t._$litDirective$;
  return (
    (null == s ? void 0 : s.constructor) !== l &&
      (null === (r = null == s ? void 0 : s._$AO) ||
        void 0 === r ||
        r.call(s, !1),
      void 0 === l ? (s = void 0) : ((s = new l(e)), s._$AT(e, i, o)),
      void 0 !== o
        ? ((null !== (d = (a = i)._$Co) && void 0 !== d ? d : (a._$Co = []))[
            o
          ] = s)
        : (i._$Cl = s)),
    void 0 !== s && (t = Y(e, s._$AS(e, t.values), s, o)),
    t
  );
}
class K {
  constructor(e, t) {
    (this.u = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(e) {
    var t;
    const {
        el: { content: i },
        parts: o,
      } = this._$AD,
      n = (
        null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t
          ? t
          : R
      ).importNode(i, !0);
    W.currentNode = n;
    let r = W.nextNode(),
      d = 0,
      a = 0,
      s = o[0];
    for (; void 0 !== s; ) {
      if (d === s.index) {
        let t;
        2 === s.type
          ? (t = new Q(r, r.nextSibling, this, e))
          : 1 === s.type
            ? (t = new s.ctor(r, s.name, s.strings, this, e))
            : 6 === s.type && (t = new oe(r, this, e)),
          this.u.push(t),
          (s = o[++a]);
      }
      d !== (null == s ? void 0 : s.index) && ((r = W.nextNode()), d++);
    }
    return n;
  }
  p(e) {
    let t = 0;
    for (const i of this.u)
      void 0 !== i &&
        (void 0 !== i.strings
          ? (i._$AI(e, i, t), (t += i.strings.length - 2))
          : i._$AI(e[t])),
        t++;
  }
}
class Q {
  constructor(e, t, i, o) {
    var n;
    (this.type = 2),
      (this._$AH = G),
      (this._$AN = void 0),
      (this._$AA = e),
      (this._$AB = t),
      (this._$AM = i),
      (this.options = o),
      (this._$Cm =
        null === (n = null == o ? void 0 : o.isConnected) || void 0 === n || n);
  }
  get _$AU() {
    var e, t;
    return null !==
      (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) &&
      void 0 !== t
      ? t
      : this._$Cm;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    (e = Y(this, e, t)),
      k(e)
        ? e === G || null == e || "" === e
          ? (this._$AH !== G && this._$AR(), (this._$AH = G))
          : e !== this._$AH && e !== V && this.g(e)
        : void 0 !== e._$litType$
          ? this.$(e)
          : void 0 !== e.nodeType
            ? this.T(e)
            : ((e) =>
                  L(e) ||
                  "function" ==
                    typeof (null == e ? void 0 : e[Symbol.iterator]))(e)
              ? this.k(e)
              : this.g(e);
  }
  O(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), (this._$AH = this.O(e)));
  }
  g(e) {
    this._$AH !== G && k(this._$AH)
      ? (this._$AA.nextSibling.data = e)
      : this.T(R.createTextNode(e)),
      (this._$AH = e);
  }
  $(e) {
    var t;
    const { values: i, _$litType$: o } = e,
      n =
        "number" == typeof o
          ? this._$AC(e)
          : (void 0 === o.el && (o.el = q.createElement(o.h, this.options)), o);
    if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === n)
      this._$AH.p(i);
    else {
      const e = new K(n, this),
        t = e.v(this.options);
      e.p(i), this.T(t), (this._$AH = e);
    }
  }
  _$AC(e) {
    let t = j.get(e.strings);
    return void 0 === t && j.set(e.strings, (t = new q(e))), t;
  }
  k(e) {
    L(this._$AH) || ((this._$AH = []), this._$AR());
    const t = this._$AH;
    let i,
      o = 0;
    for (const n of e)
      o === t.length
        ? t.push((i = new Q(this.O(O()), this.O(O()), this, this.options)))
        : (i = t[o]),
        i._$AI(n),
        o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), (t.length = o));
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for (
      null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, t);
      e && e !== this._$AB;

    ) {
      const t = e.nextSibling;
      e.remove(), (e = t);
    }
  }
  setConnected(e) {
    var t;
    void 0 === this._$AM &&
      ((this._$Cm = e),
      null === (t = this._$AP) || void 0 === t || t.call(this, e));
  }
}
class Z {
  constructor(e, t, i, o, n) {
    (this.type = 1),
      (this._$AH = G),
      (this._$AN = void 0),
      (this.element = e),
      (this.name = t),
      (this._$AM = o),
      (this.options = n),
      i.length > 2 || "" !== i[0] || "" !== i[1]
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = G);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, i, o) {
    const n = this.strings;
    let r = !1;
    if (void 0 === n)
      (e = Y(this, e, t, 0)),
        (r = !k(e) || (e !== this._$AH && e !== V)),
        r && (this._$AH = e);
    else {
      const o = e;
      let d, a;
      for (e = n[0], d = 0; d < n.length - 1; d++)
        (a = Y(this, o[i + d], t, d)),
          a === V && (a = this._$AH[d]),
          r || (r = !k(a) || a !== this._$AH[d]),
          a === G ? (e = G) : e !== G && (e += (null != a ? a : "") + n[d + 1]),
          (this._$AH[d] = a);
    }
    r && !o && this.j(e);
  }
  j(e) {
    e === G
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != e ? e : "");
  }
}
class J extends Z {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(e) {
    this.element[this.name] = e === G ? void 0 : e;
  }
}
const ee = I ? I.emptyScript : "";
class te extends Z {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(e) {
    e && e !== G
      ? this.element.setAttribute(this.name, ee)
      : this.element.removeAttribute(this.name);
  }
}
class ie extends Z {
  constructor(e, t, i, o, n) {
    super(e, t, i, o, n), (this.type = 5);
  }
  _$AI(e, t = this) {
    var i;
    if ((e = null !== (i = Y(this, e, t, 0)) && void 0 !== i ? i : G) === V)
      return;
    const o = this._$AH,
      n =
        (e === G && o !== G) ||
        e.capture !== o.capture ||
        e.once !== o.once ||
        e.passive !== o.passive,
      r = e !== G && (o === G || n);
    n && this.element.removeEventListener(this.name, this, o),
      r && this.element.addEventListener(this.name, this, e),
      (this._$AH = e);
  }
  handleEvent(e) {
    var t, i;
    "function" == typeof this._$AH
      ? this._$AH.call(
          null !==
            (i =
              null === (t = this.options) || void 0 === t ? void 0 : t.host) &&
            void 0 !== i
            ? i
            : this.element,
          e,
        )
      : this._$AH.handleEvent(e);
  }
}
class oe {
  constructor(e, t, i) {
    (this.element = e),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = t),
      (this.options = i);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Y(this, e);
  }
}
const ne = E.litHtmlPolyfillSupport;
null == ne || ne(q, Q),
  (null !== (w = E.litHtmlVersions) && void 0 !== w
    ? w
    : (E.litHtmlVersions = [])
  ).push("2.5.0");
var re, de;
let ae = class extends y {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Dt = void 0);
  }
  createRenderRoot() {
    var e, t;
    const i = super.createRenderRoot();
    return (
      (null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e) ||
        (t.renderBefore = i.firstChild),
      i
    );
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(e),
      (this._$Dt = ((e, t, i) => {
        var o, n;
        const r =
          null !== (o = null == i ? void 0 : i.renderBefore) && void 0 !== o
            ? o
            : t;
        let d = r._$litPart$;
        if (void 0 === d) {
          const e =
            null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n
              ? n
              : null;
          r._$litPart$ = d = new Q(
            t.insertBefore(O(), e),
            e,
            void 0,
            null != i ? i : {},
          );
        }
        return d._$AI(e), d;
      })(t, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var e;
    super.connectedCallback(),
      null === (e = this._$Dt) || void 0 === e || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      null === (e = this._$Dt) || void 0 === e || e.setConnected(!1);
  }
  render() {
    return V;
  }
};
(ae.finalized = !0),
  (ae._$litElement$ = !0),
  null === (re = globalThis.litElementHydrateSupport) ||
    void 0 === re ||
    re.call(globalThis, { LitElement: ae });
const se = globalThis.litElementPolyfillSupport;
null == se || se({ LitElement: ae }),
  (null !== (de = globalThis.litElementVersions) && void 0 !== de
    ? de
    : (globalThis.litElementVersions = [])
  ).push("3.2.0");
const le = (e) => (t) =>
    "function" == typeof t
      ? ((e, t) => (customElements.define(e, t), t))(e, t)
      : ((e, t) => {
          const { kind: i, elements: o } = t;
          return {
            kind: i,
            elements: o,
            finisher(t) {
              customElements.define(e, t);
            },
          };
        })(e, t),
  ce = (e, t) =>
    "method" === t.kind && t.descriptor && !("value" in t.descriptor)
      ? {
          ...t,
          finisher(i) {
            i.createProperty(t.key, e);
          },
        }
      : {
          kind: "field",
          key: Symbol(),
          placement: "own",
          descriptor: {},
          originalKey: t.key,
          initializer() {
            "function" == typeof t.initializer &&
              (this[t.key] = t.initializer.call(this));
          },
          finisher(i) {
            i.createProperty(t.key, e);
          },
        };
function pe(e) {
  return (t, i) =>
    void 0 !== i
      ? ((e, t, i) => {
          t.constructor.createProperty(i, e);
        })(e, t, i)
      : ce(e, t);
}
function me(e) {
  return pe({ ...e, state: !0 });
}
const he =
  ({ finisher: e, descriptor: t }) =>
  (i, o) => {
    var n;
    if (void 0 === o) {
      const o = null !== (n = i.originalKey) && void 0 !== n ? n : i.key,
        r =
          null != t
            ? {
                kind: "method",
                placement: "prototype",
                key: o,
                descriptor: t(i.key),
              }
            : { ...i, key: o };
      return (
        null != e &&
          (r.finisher = function (t) {
            e(t, o);
          }),
        r
      );
    }
    {
      const n = i.constructor;
      void 0 !== t && Object.defineProperty(i, o, t(o)), null == e || e(n, o);
    }
  };
function ue(e) {
  return he({
    finisher: (t, i) => {
      Object.assign(t.prototype[i], e);
    },
  });
}
function fe(e, t) {
  return he({
    descriptor: (i) => {
      const o = {
        get() {
          var t, i;
          return null !==
            (i =
              null === (t = this.renderRoot) || void 0 === t
                ? void 0
                : t.querySelector(e)) && void 0 !== i
            ? i
            : null;
        },
        enumerable: !0,
        configurable: !0,
      };
      if (t) {
        const t = "symbol" == typeof i ? Symbol() : "__" + i;
        o.get = function () {
          var i, o;
          return (
            void 0 === this[t] &&
              (this[t] =
                null !==
                  (o =
                    null === (i = this.renderRoot) || void 0 === i
                      ? void 0
                      : i.querySelector(e)) && void 0 !== o
                  ? o
                  : null),
            this[t]
          );
        };
      }
      return o;
    },
  });
}
function ge(e) {
  return he({
    descriptor: (t) => ({
      async get() {
        var t;
        return (
          await this.updateComplete,
          null === (t = this.renderRoot) || void 0 === t
            ? void 0
            : t.querySelector(e)
        );
      },
      enumerable: !0,
      configurable: !0,
    }),
  });
}
var be;
const xe =
  null !=
  (null === (be = window.HTMLSlotElement) || void 0 === be
    ? void 0
    : be.prototype.assignedElements)
    ? (e, t) => e.assignedElements(t)
    : (e, t) =>
        e.assignedNodes(t).filter((e) => e.nodeType === Node.ELEMENT_NODE);
function _e(e, t, i) {
  let o,
    n = e;
  return (
    "object" == typeof e ? ((n = e.slot), (o = e)) : (o = { flatten: t }),
    i
      ? (function (e) {
          const { slot: t, selector: i } = null != e ? e : {};
          return he({
            descriptor: (o) => ({
              get() {
                var o;
                const n = "slot" + (t ? `[name=${t}]` : ":not([name])"),
                  r =
                    null === (o = this.renderRoot) || void 0 === o
                      ? void 0
                      : o.querySelector(n),
                  d = null != r ? xe(r, e) : [];
                return i ? d.filter((e) => e.matches(i)) : d;
              },
              enumerable: !0,
              configurable: !0,
            }),
          });
        })({ slot: n, flatten: t, selector: i })
      : he({
          descriptor: (e) => ({
            get() {
              var e, t;
              const i = "slot" + (n ? `[name=${n}]` : ":not([name])"),
                r =
                  null === (e = this.renderRoot) || void 0 === e
                    ? void 0
                    : e.querySelector(i);
              return null !== (t = null == r ? void 0 : r.assignedNodes(o)) &&
                void 0 !== t
                ? t
                : [];
            },
            enumerable: !0,
            configurable: !0,
          }),
        })
  );
}
(() => {
  var e, t, i;
  const o = Symbol(),
    n = Symbol(),
    r = Symbol(),
    d = Symbol(),
    a = Symbol(),
    s = Symbol(),
    l = Symbol(),
    c = Symbol(),
    p = Symbol(),
    m = Symbol(),
    h = Symbol(),
    u = Symbol(),
    f = Symbol();
  class g {
    constructor() {
      (this[e] = []), (this[t] = []), (this[i] = new Set());
    }
    destructor() {
      this[p](this[r]);
      const e = this;
      (e[o] = null), (e[r] = null), (e[n] = null);
    }
    get top() {
      const e = this[o];
      return e[e.length - 1] || null;
    }
    push(e) {
      e && e !== this.top && (this.remove(e), this[s](e), this[o].push(e));
    }
    remove(e) {
      const t = this[o].indexOf(e);
      return (
        -1 !== t &&
        (this[o].splice(t, 1), t === this[o].length && this[s](this.top), !0)
      );
    }
    pop() {
      const e = this.top;
      return e && this.remove(e), e;
    }
    has(e) {
      return -1 !== this[o].indexOf(e);
    }
    [((e = o), (t = r), (i = n), s)](e) {
      const t = this[n],
        i = this[r];
      if (!e) return this[p](i), t.clear(), void (this[r] = []);
      const o = this[m](e);
      if (o[o.length - 1].parentNode !== document.body)
        throw Error("Non-connected element cannot be a blocking element");
      this[r] = o;
      const d = this[h](e);
      if (!i.length) return void this[c](o, d, t);
      let a = i.length - 1,
        s = o.length - 1;
      for (; a > 0 && s > 0 && i[a] === o[s]; ) a--, s--;
      i[a] !== o[s] && this[l](i[a], o[s]),
        a > 0 && this[p](i.slice(0, a)),
        s > 0 && this[c](o.slice(0, s), d, null);
    }
    [l](e, t) {
      const i = e[d];
      this[u](e) && !e.inert && ((e.inert = !0), i.add(e)),
        i.has(t) && ((t.inert = !1), i.delete(t)),
        (t[a] = e[a]),
        (t[d] = i),
        (e[a] = void 0),
        (e[d] = void 0);
    }
    [p](e) {
      for (const t of e) {
        t[a].disconnect(), (t[a] = void 0);
        const e = t[d];
        for (const t of e) t.inert = !1;
        t[d] = void 0;
      }
    }
    [c](e, t, i) {
      for (const o of e) {
        const e = o.parentNode,
          n = e.children,
          r = new Set();
        for (let e = 0; e < n.length; e++) {
          const d = n[e];
          d === o ||
            !this[u](d) ||
            (t && t.has(d)) ||
            (i && d.inert ? i.add(d) : ((d.inert = !0), r.add(d)));
        }
        o[d] = r;
        const s = new MutationObserver(this[f].bind(this));
        o[a] = s;
        let l = e;
        const c = l;
        c.__shady && c.host && (l = c.host), s.observe(l, { childList: !0 });
      }
    }
    [f](e) {
      const t = this[r],
        i = this[n];
      for (const o of e) {
        const e = o.target.host || o.target,
          n = e === document.body ? t.length : t.indexOf(e),
          r = t[n - 1],
          a = r[d];
        for (let e = 0; e < o.removedNodes.length; e++) {
          const t = o.removedNodes[e];
          if (t === r)
            return (
              console.info("Detected removal of the top Blocking Element."),
              void this.pop()
            );
          a.has(t) && ((t.inert = !1), a.delete(t));
        }
        for (let e = 0; e < o.addedNodes.length; e++) {
          const t = o.addedNodes[e];
          this[u](t) && (i && t.inert ? i.add(t) : ((t.inert = !0), a.add(t)));
        }
      }
    }
    [u](e) {
      return !1 === /^(style|template|script)$/.test(e.localName);
    }
    [m](e) {
      const t = [];
      let i = e;
      for (; i && i !== document.body; )
        if ((i.nodeType === Node.ELEMENT_NODE && t.push(i), i.assignedSlot)) {
          for (; (i = i.assignedSlot); ) t.push(i);
          i = t.pop();
        } else i = i.parentNode || i.host;
      return t;
    }
    [h](e) {
      const t = e.shadowRoot;
      if (!t) return null;
      const i = new Set();
      let o, n, r;
      const d = t.querySelectorAll("slot");
      if (d.length && d[0].assignedNodes)
        for (o = 0; o < d.length; o++)
          for (
            r = d[o].assignedNodes({ flatten: !0 }), n = 0;
            n < r.length;
            n++
          )
            r[n].nodeType === Node.ELEMENT_NODE && i.add(r[n]);
      return i;
    }
  }
  document.$blockingElements = new g();
})();
var ve = (function () {
  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var o = t[i];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(e, o.key, o);
    }
  }
  return function (t, i, o) {
    return i && e(t.prototype, i), o && e(t, o), t;
  };
})();
function ye(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
!(function () {
  if ("undefined" != typeof window) {
    var e = Array.prototype.slice,
      t = Element.prototype.matches || Element.prototype.msMatchesSelector,
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
      o = (function () {
        function o(e, t) {
          ye(this, o),
            (this._inertManager = t),
            (this._rootElement = e),
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
          ve(o, [
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
                  this._managedNodes.forEach(function (e) {
                    this._unmanageNode(e.node);
                  }, this),
                  (this._observer = null),
                  (this._rootElement = null),
                  (this._managedNodes = null),
                  (this._inertManager = null);
              },
            },
            {
              key: "_makeSubtreeUnfocusable",
              value: function (e) {
                var t = this;
                a(e, function (e) {
                  return t._visitNode(e);
                });
                var i = document.activeElement;
                if (!document.body.contains(e)) {
                  for (var o = e, n = void 0; o; ) {
                    if (o.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                      n = o;
                      break;
                    }
                    o = o.parentNode;
                  }
                  n && (i = n.activeElement);
                }
                e.contains(i) &&
                  (i.blur(),
                  i === document.activeElement && document.body.focus());
              },
            },
            {
              key: "_visitNode",
              value: function (e) {
                if (e.nodeType === Node.ELEMENT_NODE) {
                  var o = e;
                  o !== this._rootElement &&
                    o.hasAttribute("inert") &&
                    this._adoptInertRoot(o),
                    (t.call(o, i) || o.hasAttribute("tabindex")) &&
                      this._manageNode(o);
                }
              },
            },
            {
              key: "_manageNode",
              value: function (e) {
                var t = this._inertManager.register(e, this);
                this._managedNodes.add(t);
              },
            },
            {
              key: "_unmanageNode",
              value: function (e) {
                var t = this._inertManager.deregister(e, this);
                t && this._managedNodes.delete(t);
              },
            },
            {
              key: "_unmanageSubtree",
              value: function (e) {
                var t = this;
                a(e, function (e) {
                  return t._unmanageNode(e);
                });
              },
            },
            {
              key: "_adoptInertRoot",
              value: function (e) {
                var t = this._inertManager.getInertRoot(e);
                t ||
                  (this._inertManager.setInert(e, !0),
                  (t = this._inertManager.getInertRoot(e))),
                  t.managedNodes.forEach(function (e) {
                    this._manageNode(e.node);
                  }, this);
              },
            },
            {
              key: "_onMutation",
              value: function (t, i) {
                t.forEach(function (t) {
                  var i = t.target;
                  if ("childList" === t.type)
                    e.call(t.addedNodes).forEach(function (e) {
                      this._makeSubtreeUnfocusable(e);
                    }, this),
                      e.call(t.removedNodes).forEach(function (e) {
                        this._unmanageSubtree(e);
                      }, this);
                  else if ("attributes" === t.type)
                    if ("tabindex" === t.attributeName) this._manageNode(i);
                    else if (
                      i !== this._rootElement &&
                      "inert" === t.attributeName &&
                      i.hasAttribute("inert")
                    ) {
                      this._adoptInertRoot(i);
                      var o = this._inertManager.getInertRoot(i);
                      this._managedNodes.forEach(function (e) {
                        i.contains(e.node) && o._manageNode(e.node);
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
              set: function (e) {
                this._savedAriaHidden = e;
              },
              get: function () {
                return this._savedAriaHidden;
              },
            },
          ]),
          o
        );
      })(),
      n = (function () {
        function e(t, i) {
          ye(this, e),
            (this._node = t),
            (this._overrodeFocusMethod = !1),
            (this._inertRoots = new Set([i])),
            (this._savedTabIndex = null),
            (this._destroyed = !1),
            this.ensureUntabbable();
        }
        return (
          ve(e, [
            {
              key: "destructor",
              value: function () {
                if (
                  (this._throwIfDestroyed(),
                  this._node && this._node.nodeType === Node.ELEMENT_NODE)
                ) {
                  var e = this._node;
                  null !== this._savedTabIndex
                    ? e.setAttribute("tabindex", this._savedTabIndex)
                    : e.removeAttribute("tabindex"),
                    this._overrodeFocusMethod && delete e.focus;
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
                  var e = this.node;
                  if (t.call(e, i)) {
                    if (-1 === e.tabIndex && this.hasSavedTabIndex) return;
                    e.hasAttribute("tabindex") &&
                      (this._savedTabIndex = e.tabIndex),
                      e.setAttribute("tabindex", "-1"),
                      e.nodeType === Node.ELEMENT_NODE &&
                        ((e.focus = function () {}),
                        (this._overrodeFocusMethod = !0));
                  } else
                    e.hasAttribute("tabindex") &&
                      ((this._savedTabIndex = e.tabIndex),
                      e.removeAttribute("tabindex"));
                }
              },
            },
            {
              key: "addInertRoot",
              value: function (e) {
                this._throwIfDestroyed(), this._inertRoots.add(e);
              },
            },
            {
              key: "removeInertRoot",
              value: function (e) {
                this._throwIfDestroyed(),
                  this._inertRoots.delete(e),
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
              set: function (e) {
                this._throwIfDestroyed(), (this._savedTabIndex = e);
              },
              get: function () {
                return this._throwIfDestroyed(), this._savedTabIndex;
              },
            },
          ]),
          e
        );
      })(),
      r = (function () {
        function i(e) {
          if ((ye(this, i), !e))
            throw new Error(
              "Missing required argument; InertManager needs to wrap a document.",
            );
          (this._document = e),
            (this._managedNodes = new Map()),
            (this._inertRoots = new Map()),
            (this._observer = new MutationObserver(
              this._watchForInert.bind(this),
            )),
            s(e.head || e.body || e.documentElement),
            "loading" === e.readyState
              ? e.addEventListener(
                  "DOMContentLoaded",
                  this._onDocumentLoaded.bind(this),
                )
              : this._onDocumentLoaded();
        }
        return (
          ve(i, [
            {
              key: "setInert",
              value: function (e, t) {
                if (t) {
                  if (this._inertRoots.has(e)) return;
                  var i = new o(e, this);
                  if (
                    (e.setAttribute("inert", ""),
                    this._inertRoots.set(e, i),
                    !this._document.body.contains(e))
                  )
                    for (var n = e.parentNode; n; )
                      11 === n.nodeType && s(n), (n = n.parentNode);
                } else {
                  if (!this._inertRoots.has(e)) return;
                  this._inertRoots.get(e).destructor(),
                    this._inertRoots.delete(e),
                    e.removeAttribute("inert");
                }
              },
            },
            {
              key: "getInertRoot",
              value: function (e) {
                return this._inertRoots.get(e);
              },
            },
            {
              key: "register",
              value: function (e, t) {
                var i = this._managedNodes.get(e);
                return (
                  void 0 !== i ? i.addInertRoot(t) : (i = new n(e, t)),
                  this._managedNodes.set(e, i),
                  i
                );
              },
            },
            {
              key: "deregister",
              value: function (e, t) {
                var i = this._managedNodes.get(e);
                return i
                  ? (i.removeInertRoot(t),
                    i.destroyed && this._managedNodes.delete(e),
                    i)
                  : null;
              },
            },
            {
              key: "_onDocumentLoaded",
              value: function () {
                e
                  .call(this._document.querySelectorAll("[inert]"))
                  .forEach(function (e) {
                    this.setInert(e, !0);
                  }, this),
                  this._observer.observe(
                    this._document.body || this._document.documentElement,
                    { attributes: !0, subtree: !0, childList: !0 },
                  );
              },
            },
            {
              key: "_watchForInert",
              value: function (i, o) {
                var n = this;
                i.forEach(function (i) {
                  switch (i.type) {
                    case "childList":
                      e.call(i.addedNodes).forEach(function (i) {
                        if (i.nodeType === Node.ELEMENT_NODE) {
                          var o = e.call(i.querySelectorAll("[inert]"));
                          t.call(i, "[inert]") && o.unshift(i),
                            o.forEach(function (e) {
                              this.setInert(e, !0);
                            }, n);
                        }
                      }, n);
                      break;
                    case "attributes":
                      if ("inert" !== i.attributeName) return;
                      var o = i.target,
                        r = o.hasAttribute("inert");
                      n.setInert(o, r);
                  }
                }, this);
              },
            },
          ]),
          i
        );
      })();
    if (!Element.prototype.hasOwnProperty("inert")) {
      var d = new r(document);
      Object.defineProperty(Element.prototype, "inert", {
        enumerable: !0,
        get: function () {
          return this.hasAttribute("inert");
        },
        set: function (e) {
          d.setInert(this, e);
        },
      });
    }
  }
  function a(e, t, i) {
    if (e.nodeType == Node.ELEMENT_NODE) {
      var o = e;
      t && t(o);
      var n = o.shadowRoot;
      if (n) return void a(n, t);
      if ("content" == o.localName) {
        for (
          var r = o,
            d = r.getDistributedNodes ? r.getDistributedNodes() : [],
            s = 0;
          s < d.length;
          s++
        )
          a(d[s], t);
        return;
      }
      if ("slot" == o.localName) {
        for (
          var l = o,
            c = l.assignedNodes ? l.assignedNodes({ flatten: !0 }) : [],
            p = 0;
          p < c.length;
          p++
        )
          a(c[p], t);
        return;
      }
    }
    for (var m = e.firstChild; null != m; ) a(m, t), (m = m.nextSibling);
  }
  function s(e) {
    if (!e.querySelector("style#inert-style, link#inert-style")) {
      var t = document.createElement("style");
      t.setAttribute("id", "inert-style"),
        (t.textContent =
          "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n"),
        e.appendChild(t);
    }
  }
})();
var we,
  Ee = {
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
  Ie = {
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
  Ae = {
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
    DIALOG_ANIMATION_OPEN_TIME_MS: 150,
  },
  Ce = (function () {
    function e() {
      this.rafIDs = new Map();
    }
    return (
      (e.prototype.request = function (e, t) {
        var i = this;
        this.cancel(e);
        var o = requestAnimationFrame(function (o) {
          i.rafIDs.delete(e), t(o);
        });
        this.rafIDs.set(e, o);
      }),
      (e.prototype.cancel = function (e) {
        var t = this.rafIDs.get(e);
        t && (cancelAnimationFrame(t), this.rafIDs.delete(e));
      }),
      (e.prototype.cancelAll = function () {
        var e = this;
        this.rafIDs.forEach(function (t, i) {
          e.cancel(i);
        });
      }),
      (e.prototype.getQueue = function () {
        var e = [];
        return (
          this.rafIDs.forEach(function (t, i) {
            e.push(i);
          }),
          e
        );
      }),
      e
    );
  })(),
  Se = (function () {
    function e(e) {
      void 0 === e && (e = {}), (this.adapter = e);
    }
    return (
      Object.defineProperty(e, "cssClasses", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "strings", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "numbers", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.init = function () {}),
      (e.prototype.destroy = function () {}),
      e
    );
  })();
!(function (e) {
  (e.POLL_SCROLL_POS = "poll_scroll_position"),
    (e.POLL_LAYOUT_CHANGE = "poll_layout_change");
})(we || (we = {}));
var Te = (function (e) {
  function t(i) {
    var n = e.call(this, o(o({}, t.defaultAdapter), i)) || this;
    return (
      (n.dialogOpen = !1),
      (n.isFullscreen = !1),
      (n.animationFrame = 0),
      (n.animationTimer = 0),
      (n.escapeKeyAction = Ie.CLOSE_ACTION),
      (n.scrimClickAction = Ie.CLOSE_ACTION),
      (n.autoStackButtons = !0),
      (n.areButtonsStacked = !1),
      (n.suppressDefaultPressSelector = Ie.SUPPRESS_DEFAULT_PRESS_SELECTOR),
      (n.animFrame = new Ce()),
      (n.contentScrollHandler = function () {
        n.handleScrollEvent();
      }),
      (n.windowResizeHandler = function () {
        n.layout();
      }),
      (n.windowOrientationChangeHandler = function () {
        n.layout();
      }),
      n
    );
  }
  return (
    i(t, e),
    Object.defineProperty(t, "cssClasses", {
      get: function () {
        return Ee;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t, "strings", {
      get: function () {
        return Ie;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t, "numbers", {
      get: function () {
        return Ae;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t, "defaultAdapter", {
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
    (t.prototype.init = function () {
      this.adapter.hasClass(Ee.STACKED) && this.setAutoStackButtons(!1),
        (this.isFullscreen = this.adapter.hasClass(Ee.FULLSCREEN));
    }),
    (t.prototype.destroy = function () {
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
    (t.prototype.open = function (e) {
      var t = this;
      (this.dialogOpen = !0),
        this.adapter.notifyOpening(),
        this.adapter.addClass(Ee.OPENING),
        this.isFullscreen &&
          this.adapter.registerContentEventHandler(
            "scroll",
            this.contentScrollHandler,
          ),
        e &&
          e.isAboveFullscreenDialog &&
          this.adapter.addClass(Ee.SCRIM_HIDDEN),
        this.adapter.registerWindowEventHandler(
          "resize",
          this.windowResizeHandler,
        ),
        this.adapter.registerWindowEventHandler(
          "orientationchange",
          this.windowOrientationChangeHandler,
        ),
        this.runNextAnimationFrame(function () {
          t.adapter.addClass(Ee.OPEN),
            t.adapter.addBodyClass(Ee.SCROLL_LOCK),
            t.layout(),
            (t.animationTimer = setTimeout(function () {
              t.handleAnimationTimerEnd(),
                t.adapter.trapFocus(t.adapter.getInitialFocusEl()),
                t.adapter.notifyOpened();
            }, Ae.DIALOG_ANIMATION_OPEN_TIME_MS));
        });
    }),
    (t.prototype.close = function (e) {
      var t = this;
      void 0 === e && (e = ""),
        this.dialogOpen &&
          ((this.dialogOpen = !1),
          this.adapter.notifyClosing(e),
          this.adapter.addClass(Ee.CLOSING),
          this.adapter.removeClass(Ee.OPEN),
          this.adapter.removeBodyClass(Ee.SCROLL_LOCK),
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
            t.adapter.releaseFocus(),
              t.handleAnimationTimerEnd(),
              t.adapter.notifyClosed(e);
          }, Ae.DIALOG_ANIMATION_CLOSE_TIME_MS)));
    }),
    (t.prototype.showSurfaceScrim = function () {
      var e = this;
      this.adapter.addClass(Ee.SURFACE_SCRIM_SHOWING),
        this.runNextAnimationFrame(function () {
          e.adapter.addClass(Ee.SURFACE_SCRIM_SHOWN);
        });
    }),
    (t.prototype.hideSurfaceScrim = function () {
      this.adapter.removeClass(Ee.SURFACE_SCRIM_SHOWN),
        this.adapter.addClass(Ee.SURFACE_SCRIM_HIDING);
    }),
    (t.prototype.handleSurfaceScrimTransitionEnd = function () {
      this.adapter.removeClass(Ee.SURFACE_SCRIM_HIDING),
        this.adapter.removeClass(Ee.SURFACE_SCRIM_SHOWING);
    }),
    (t.prototype.isOpen = function () {
      return this.dialogOpen;
    }),
    (t.prototype.getEscapeKeyAction = function () {
      return this.escapeKeyAction;
    }),
    (t.prototype.setEscapeKeyAction = function (e) {
      this.escapeKeyAction = e;
    }),
    (t.prototype.getScrimClickAction = function () {
      return this.scrimClickAction;
    }),
    (t.prototype.setScrimClickAction = function (e) {
      this.scrimClickAction = e;
    }),
    (t.prototype.getAutoStackButtons = function () {
      return this.autoStackButtons;
    }),
    (t.prototype.setAutoStackButtons = function (e) {
      this.autoStackButtons = e;
    }),
    (t.prototype.getSuppressDefaultPressSelector = function () {
      return this.suppressDefaultPressSelector;
    }),
    (t.prototype.setSuppressDefaultPressSelector = function (e) {
      this.suppressDefaultPressSelector = e;
    }),
    (t.prototype.layout = function () {
      var e = this;
      this.animFrame.request(we.POLL_LAYOUT_CHANGE, function () {
        e.layoutInternal();
      });
    }),
    (t.prototype.handleClick = function (e) {
      if (
        this.adapter.eventTargetMatches(e.target, Ie.SCRIM_SELECTOR) &&
        "" !== this.scrimClickAction
      )
        this.close(this.scrimClickAction);
      else {
        var t = this.adapter.getActionFromEvent(e);
        t && this.close(t);
      }
    }),
    (t.prototype.handleKeydown = function (e) {
      var t = "Enter" === e.key || 13 === e.keyCode;
      if (t && !this.adapter.getActionFromEvent(e)) {
        var i = e.composedPath ? e.composedPath()[0] : e.target,
          o =
            !this.suppressDefaultPressSelector ||
            !this.adapter.eventTargetMatches(
              i,
              this.suppressDefaultPressSelector,
            );
        t && o && this.adapter.clickDefaultButton();
      }
    }),
    (t.prototype.handleDocumentKeydown = function (e) {
      ("Escape" === e.key || 27 === e.keyCode) &&
        "" !== this.escapeKeyAction &&
        this.close(this.escapeKeyAction);
    }),
    (t.prototype.handleScrollEvent = function () {
      var e = this;
      this.animFrame.request(we.POLL_SCROLL_POS, function () {
        e.toggleScrollDividerHeader(), e.toggleScrollDividerFooter();
      });
    }),
    (t.prototype.layoutInternal = function () {
      this.autoStackButtons && this.detectStackedButtons(),
        this.toggleScrollableClasses();
    }),
    (t.prototype.handleAnimationTimerEnd = function () {
      (this.animationTimer = 0),
        this.adapter.removeClass(Ee.OPENING),
        this.adapter.removeClass(Ee.CLOSING);
    }),
    (t.prototype.runNextAnimationFrame = function (e) {
      var t = this;
      cancelAnimationFrame(this.animationFrame),
        (this.animationFrame = requestAnimationFrame(function () {
          (t.animationFrame = 0),
            clearTimeout(t.animationTimer),
            (t.animationTimer = setTimeout(e, 0));
        }));
    }),
    (t.prototype.detectStackedButtons = function () {
      this.adapter.removeClass(Ee.STACKED);
      var e = this.adapter.areButtonsStacked();
      e && this.adapter.addClass(Ee.STACKED),
        e !== this.areButtonsStacked &&
          (this.adapter.reverseButtons(), (this.areButtonsStacked = e));
    }),
    (t.prototype.toggleScrollableClasses = function () {
      this.adapter.removeClass(Ee.SCROLLABLE),
        this.adapter.isContentScrollable() &&
          (this.adapter.addClass(Ee.SCROLLABLE),
          this.isFullscreen &&
            (this.toggleScrollDividerHeader(),
            this.toggleScrollDividerFooter()));
    }),
    (t.prototype.toggleScrollDividerHeader = function () {
      this.adapter.isScrollableContentAtTop()
        ? this.adapter.hasClass(Ee.SCROLL_DIVIDER_HEADER) &&
          this.adapter.removeClass(Ee.SCROLL_DIVIDER_HEADER)
        : this.adapter.addClass(Ee.SCROLL_DIVIDER_HEADER);
    }),
    (t.prototype.toggleScrollDividerFooter = function () {
      this.adapter.isScrollableContentAtBottom()
        ? this.adapter.hasClass(Ee.SCROLL_DIVIDER_FOOTER) &&
          this.adapter.removeClass(Ee.SCROLL_DIVIDER_FOOTER)
        : this.adapter.addClass(Ee.SCROLL_DIVIDER_FOOTER);
    }),
    t
  );
})(Se);
function Re(e) {
  return (
    void 0 === e && (e = window),
    !!(function (e) {
      void 0 === e && (e = window);
      var t = !1;
      try {
        var i = {
            get passive() {
              return (t = !0), !1;
            },
          },
          o = function () {};
        e.document.addEventListener("test", o, i),
          e.document.removeEventListener("test", o, i);
      } catch (e) {
        t = !1;
      }
      return t;
    })(e) && { passive: !0 }
  );
}
function Oe(e, t) {
  return (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(
    e,
    t,
  );
}
const ke = (e) => e.nodeType === Node.ELEMENT_NODE;
function Le(e) {
  return {
    addClass: (t) => {
      e.classList.add(t);
    },
    removeClass: (t) => {
      e.classList.remove(t);
    },
    hasClass: (t) => e.classList.contains(t),
  };
}
const Fe = () => {},
  Ne = {
    get passive() {
      return !1;
    },
  };
document.addEventListener("x", Fe, Ne), document.removeEventListener("x", Fe);
const De = (e = window.document) => {
    let t = e.activeElement;
    const i = [];
    if (!t) return i;
    for (; t && (i.push(t), t.shadowRoot); ) t = t.shadowRoot.activeElement;
    return i;
  },
  $e = (e) => {
    const t = De();
    if (!t.length) return !1;
    const i = t[t.length - 1],
      o = new Event("check-if-focused", { bubbles: !0, composed: !0 });
    let n = [];
    const r = (e) => {
      n = e.composedPath();
    };
    return (
      document.body.addEventListener("check-if-focused", r),
      i.dispatchEvent(o),
      document.body.removeEventListener("check-if-focused", r),
      -1 !== n.indexOf(e)
    );
  };
class Me extends ae {
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
const Pe = (e) => (t, i) => {
    if (t.constructor._observers) {
      if (!t.constructor.hasOwnProperty("_observers")) {
        const e = t.constructor._observers;
        (t.constructor._observers = new Map()),
          e.forEach((e, i) => t.constructor._observers.set(i, e));
      }
    } else {
      t.constructor._observers = new Map();
      const e = t.updated;
      t.updated = function (t) {
        e.call(this, t),
          t.forEach((e, t) => {
            const i = this.constructor._observers.get(t);
            void 0 !== i && i.call(this, this[t], e);
          });
      };
    }
    t.constructor._observers.set(i, e);
  },
  He = 1,
  ze = 3,
  Be = 4,
  Ue =
    (e) =>
    (...t) => ({ _$litDirective$: e, values: t });
let Ve = class {
  constructor(e) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, i) {
    (this._$Ct = e), (this._$AM = t), (this._$Ci = i);
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
};
const Ge = Ue(
    class extends Ve {
      constructor(e) {
        var t;
        if (
          (super(e),
          e.type !== He ||
            "class" !== e.name ||
            (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2)
        )
          throw Error(
            "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.",
          );
      }
      render(e) {
        return (
          " " +
          Object.keys(e)
            .filter((t) => e[t])
            .join(" ") +
          " "
        );
      }
      update(e, [t]) {
        var i, o;
        if (void 0 === this.nt) {
          (this.nt = new Set()),
            void 0 !== e.strings &&
              (this.st = new Set(
                e.strings
                  .join(" ")
                  .split(/\s/)
                  .filter((e) => "" !== e),
              ));
          for (const e in t)
            t[e] &&
              !(null === (i = this.st) || void 0 === i ? void 0 : i.has(e)) &&
              this.nt.add(e);
          return this.render(t);
        }
        const n = e.element.classList;
        this.nt.forEach((e) => {
          e in t || (n.remove(e), this.nt.delete(e));
        });
        for (const e in t) {
          const i = !!t[e];
          i === this.nt.has(e) ||
            (null === (o = this.st) || void 0 === o ? void 0 : o.has(e)) ||
            (i ? (n.add(e), this.nt.add(e)) : (n.remove(e), this.nt.delete(e)));
        }
        return V;
      }
    },
  ),
  je = document.$blockingElements;
class We extends Me {
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
      (this.mdcFoundationClass = Te),
      (this.boundHandleClick = null),
      (this.boundHandleKeydown = null),
      (this.boundHandleDocumentKeydown = null);
  }
  set suppressDefaultPressSelector(e) {
    this.mdcFoundation
      ? this.mdcFoundation.setSuppressDefaultPressSelector(e)
      : (this.initialSupressDefaultPressSelector = e);
  }
  get suppressDefaultPressSelector() {
    return this.mdcFoundation
      ? this.mdcFoundation.getSuppressDefaultPressSelector()
      : this.initialSupressDefaultPressSelector;
  }
  get primaryButton() {
    let e = this.primarySlot.assignedNodes();
    e = e.filter((e) => e instanceof HTMLElement);
    const t = e[0];
    return t || null;
  }
  emitNotification(e, t) {
    const i = new CustomEvent(e, { detail: t ? { action: t } : {} });
    this.dispatchEvent(i);
  }
  getInitialFocusEl() {
    const e = `[${this.initialFocusAttribute}]`,
      t = this.querySelector(e);
    if (t) return t;
    const i = this.primarySlot.assignedNodes({ flatten: !0 }),
      o = this.searchNodeTreesForAttribute(i, this.initialFocusAttribute);
    if (o) return o;
    const n = this.secondarySlot.assignedNodes({ flatten: !0 }),
      r = this.searchNodeTreesForAttribute(n, this.initialFocusAttribute);
    if (r) return r;
    const d = this.contentSlot.assignedNodes({ flatten: !0 });
    return this.searchNodeTreesForAttribute(d, this.initialFocusAttribute);
  }
  searchNodeTreesForAttribute(e, t) {
    for (const i of e)
      if (i instanceof HTMLElement) {
        if (i.hasAttribute(t)) return i;
        {
          const e = i.querySelector(`[${t}]`);
          if (e) return e;
        }
      }
    return null;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Le(this.mdcRoot)), {
      addBodyClass: () => (document.body.style.overflow = "hidden"),
      removeBodyClass: () => (document.body.style.overflow = ""),
      areButtonsStacked: () => this.stacked,
      clickDefaultButton: () => {
        const e = this.primaryButton;
        e && e.click();
      },
      eventTargetMatches: (e, t) => !!e && Oe(e, t),
      getActionFromEvent: (e) => {
        if (!e.target) return "";
        const t = (function (e, t) {
          if (e.closest) return e.closest(t);
          for (var i = e; i; ) {
            if (Oe(i, t)) return i;
            i = i.parentElement;
          }
          return null;
        })(e.target, `[${this.actionAttribute}]`);
        return t && t.getAttribute(this.actionAttribute);
      },
      getInitialFocusEl: () => this.getInitialFocusEl(),
      isContentScrollable: () => {
        const e = this.contentElement;
        return !!e && e.scrollHeight > e.offsetHeight;
      },
      notifyClosed: (e) => this.emitNotification("closed", e),
      notifyClosing: (e) => {
        this.closingDueToDisconnect || (this.open = !1),
          this.emitNotification("closing", e);
      },
      notifyOpened: () => this.emitNotification("opened"),
      notifyOpening: () => {
        (this.open = !0), this.emitNotification("opening");
      },
      reverseButtons: () => {},
      releaseFocus: () => {
        je.remove(this);
      },
      trapFocus: (e) => {
        this.isConnected && (je.push(this), e && e.focus());
      },
      registerContentEventHandler: (e, t) => {
        this.contentElement.addEventListener(e, t);
      },
      deregisterContentEventHandler: (e, t) => {
        this.contentElement.removeEventListener(e, t);
      },
      isScrollableContentAtTop: () => {
        const e = this.contentElement;
        return !!e && 0 === e.scrollTop;
      },
      isScrollableContentAtBottom: () => {
        const e = this.contentElement;
        return (
          !!e && Math.ceil(e.scrollHeight - e.scrollTop) === e.clientHeight
        );
      },
      registerWindowEventHandler: (e, t) => {
        window.addEventListener(e, t, Re());
      },
      deregisterWindowEventHandler: (e, t) => {
        window.removeEventListener(e, t, Re());
      },
    });
  }
  render() {
    const e = { [Ee.STACKED]: this.stacked };
    let t = B``;
    this.heading && (t = this.renderHeading());
    const i = { "mdc-dialog__actions": !this.hideActions };
    return B`
    <div class="mdc-dialog ${Ge(e)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${t}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${Ge(i)}">
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
    return B`
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
        je.remove(this));
  }
  forceLayout() {
    this.mdcFoundation.layout();
  }
  focus() {
    const e = this.getInitialFocusEl();
    e && e.focus();
  }
  blur() {
    if (!this.shadowRoot) return;
    const e = this.shadowRoot.activeElement;
    if (e) e instanceof HTMLElement && e.blur();
    else {
      const e = this.getRootNode(),
        t = e instanceof Document ? e.activeElement : null;
      t instanceof HTMLElement && t.blur();
    }
  }
  setEventListeners() {
    this.boundHandleClick &&
      this.mdcRoot.addEventListener("click", this.boundHandleClick),
      this.boundHandleKeydown &&
        this.mdcRoot.addEventListener("keydown", this.boundHandleKeydown, Re()),
      this.boundHandleDocumentKeydown &&
        document.addEventListener(
          "keydown",
          this.boundHandleDocumentKeydown,
          Re(),
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
n([fe(".mdc-dialog")], We.prototype, "mdcRoot", void 0),
  n([fe('slot[name="primaryAction"]')], We.prototype, "primarySlot", void 0),
  n(
    [fe('slot[name="secondaryAction"]')],
    We.prototype,
    "secondarySlot",
    void 0,
  ),
  n([fe("#contentSlot")], We.prototype, "contentSlot", void 0),
  n([fe(".mdc-dialog__content")], We.prototype, "contentElement", void 0),
  n([fe(".mdc-container")], We.prototype, "conatinerElement", void 0),
  n([pe({ type: Boolean })], We.prototype, "hideActions", void 0),
  n(
    [
      pe({ type: Boolean }),
      Pe(function () {
        this.forceLayout();
      }),
    ],
    We.prototype,
    "stacked",
    void 0,
  ),
  n([pe({ type: String })], We.prototype, "heading", void 0),
  n(
    [
      pe({ type: String }),
      Pe(function (e) {
        this.mdcFoundation.setScrimClickAction(e);
      }),
    ],
    We.prototype,
    "scrimClickAction",
    void 0,
  ),
  n(
    [
      pe({ type: String }),
      Pe(function (e) {
        this.mdcFoundation.setEscapeKeyAction(e);
      }),
    ],
    We.prototype,
    "escapeKeyAction",
    void 0,
  ),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      Pe(function (e) {
        this.mdcFoundation &&
          this.isConnected &&
          (e
            ? (this.setEventListeners(), this.mdcFoundation.open())
            : (this.removeEventListeners(),
              this.mdcFoundation.close(
                this.currentAction || this.defaultAction,
              ),
              (this.currentAction = void 0)));
      }),
    ],
    We.prototype,
    "open",
    void 0,
  ),
  n([pe()], We.prototype, "defaultAction", void 0),
  n([pe()], We.prototype, "actionAttribute", void 0),
  n([pe()], We.prototype, "initialFocusAttribute", void 0);
const Xe = p`.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;
class qe extends We {}
(qe.styles = [Xe]), customElements.define("is-dialog", qe);
var Ye = {
    BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
    FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
    FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
    ROOT: "mdc-ripple-upgraded",
    UNBOUNDED: "mdc-ripple-upgraded--unbounded",
  },
  Ke = {
    VAR_FG_SCALE: "--mdc-ripple-fg-scale",
    VAR_FG_SIZE: "--mdc-ripple-fg-size",
    VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
    VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
    VAR_LEFT: "--mdc-ripple-left",
    VAR_TOP: "--mdc-ripple-top",
  },
  Qe = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
  };
var Ze = ["touchstart", "pointerdown", "mousedown", "keydown"],
  Je = ["touchend", "pointerup", "mouseup", "contextmenu"],
  et = [],
  tt = (function (e) {
    function t(i) {
      var n = e.call(this, o(o({}, t.defaultAdapter), i)) || this;
      return (
        (n.activationAnimationHasEnded = !1),
        (n.activationTimer = 0),
        (n.fgDeactivationRemovalTimer = 0),
        (n.fgScale = "0"),
        (n.frame = { width: 0, height: 0 }),
        (n.initialSize = 0),
        (n.layoutFrame = 0),
        (n.maxRadius = 0),
        (n.unboundedCoords = { left: 0, top: 0 }),
        (n.activationState = n.defaultActivationState()),
        (n.activationTimerCallback = function () {
          (n.activationAnimationHasEnded = !0),
            n.runDeactivationUXLogicIfReady();
        }),
        (n.activateHandler = function (e) {
          n.activateImpl(e);
        }),
        (n.deactivateHandler = function () {
          n.deactivateImpl();
        }),
        (n.focusHandler = function () {
          n.handleFocus();
        }),
        (n.blurHandler = function () {
          n.handleBlur();
        }),
        (n.resizeHandler = function () {
          n.layout();
        }),
        n
      );
    }
    return (
      i(t, e),
      Object.defineProperty(t, "cssClasses", {
        get: function () {
          return Ye;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "strings", {
        get: function () {
          return Ke;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "numbers", {
        get: function () {
          return Qe;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "defaultAdapter", {
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
      (t.prototype.init = function () {
        var e = this,
          i = this.supportsPressRipple();
        if ((this.registerRootHandlers(i), i)) {
          var o = t.cssClasses,
            n = o.ROOT,
            r = o.UNBOUNDED;
          requestAnimationFrame(function () {
            e.adapter.addClass(n),
              e.adapter.isUnbounded() &&
                (e.adapter.addClass(r), e.layoutInternal());
          });
        }
      }),
      (t.prototype.destroy = function () {
        var e = this;
        if (this.supportsPressRipple()) {
          this.activationTimer &&
            (clearTimeout(this.activationTimer),
            (this.activationTimer = 0),
            this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),
            this.fgDeactivationRemovalTimer &&
              (clearTimeout(this.fgDeactivationRemovalTimer),
              (this.fgDeactivationRemovalTimer = 0),
              this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
          var i = t.cssClasses,
            o = i.ROOT,
            n = i.UNBOUNDED;
          requestAnimationFrame(function () {
            e.adapter.removeClass(o),
              e.adapter.removeClass(n),
              e.removeCssVars();
          });
        }
        this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
      }),
      (t.prototype.activate = function (e) {
        this.activateImpl(e);
      }),
      (t.prototype.deactivate = function () {
        this.deactivateImpl();
      }),
      (t.prototype.layout = function () {
        var e = this;
        this.layoutFrame && cancelAnimationFrame(this.layoutFrame),
          (this.layoutFrame = requestAnimationFrame(function () {
            e.layoutInternal(), (e.layoutFrame = 0);
          }));
      }),
      (t.prototype.setUnbounded = function (e) {
        var i = t.cssClasses.UNBOUNDED;
        e ? this.adapter.addClass(i) : this.adapter.removeClass(i);
      }),
      (t.prototype.handleFocus = function () {
        var e = this;
        requestAnimationFrame(function () {
          return e.adapter.addClass(t.cssClasses.BG_FOCUSED);
        });
      }),
      (t.prototype.handleBlur = function () {
        var e = this;
        requestAnimationFrame(function () {
          return e.adapter.removeClass(t.cssClasses.BG_FOCUSED);
        });
      }),
      (t.prototype.supportsPressRipple = function () {
        return this.adapter.browserSupportsCssVars();
      }),
      (t.prototype.defaultActivationState = function () {
        return {
          activationEvent: void 0,
          hasDeactivationUXRun: !1,
          isActivated: !1,
          isProgrammatic: !1,
          wasActivatedByPointer: !1,
          wasElementMadeActive: !1,
        };
      }),
      (t.prototype.registerRootHandlers = function (e) {
        var t, i;
        if (e) {
          try {
            for (var o = r(Ze), n = o.next(); !n.done; n = o.next()) {
              var d = n.value;
              this.adapter.registerInteractionHandler(d, this.activateHandler);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              n && !n.done && (i = o.return) && i.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
          this.adapter.isUnbounded() &&
            this.adapter.registerResizeHandler(this.resizeHandler);
        }
        this.adapter.registerInteractionHandler("focus", this.focusHandler),
          this.adapter.registerInteractionHandler("blur", this.blurHandler);
      }),
      (t.prototype.registerDeactivationHandlers = function (e) {
        var t, i;
        if ("keydown" === e.type)
          this.adapter.registerInteractionHandler(
            "keyup",
            this.deactivateHandler,
          );
        else
          try {
            for (var o = r(Je), n = o.next(); !n.done; n = o.next()) {
              var d = n.value;
              this.adapter.registerDocumentInteractionHandler(
                d,
                this.deactivateHandler,
              );
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              n && !n.done && (i = o.return) && i.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
      }),
      (t.prototype.deregisterRootHandlers = function () {
        var e, t;
        try {
          for (var i = r(Ze), o = i.next(); !o.done; o = i.next()) {
            var n = o.value;
            this.adapter.deregisterInteractionHandler(n, this.activateHandler);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (t = i.return) && t.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        this.adapter.deregisterInteractionHandler("focus", this.focusHandler),
          this.adapter.deregisterInteractionHandler("blur", this.blurHandler),
          this.adapter.isUnbounded() &&
            this.adapter.deregisterResizeHandler(this.resizeHandler);
      }),
      (t.prototype.deregisterDeactivationHandlers = function () {
        var e, t;
        this.adapter.deregisterInteractionHandler(
          "keyup",
          this.deactivateHandler,
        );
        try {
          for (var i = r(Je), o = i.next(); !o.done; o = i.next()) {
            var n = o.value;
            this.adapter.deregisterDocumentInteractionHandler(
              n,
              this.deactivateHandler,
            );
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (t = i.return) && t.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (t.prototype.removeCssVars = function () {
        var e = this,
          i = t.strings;
        Object.keys(i).forEach(function (t) {
          0 === t.indexOf("VAR_") && e.adapter.updateCssVariable(i[t], null);
        });
      }),
      (t.prototype.activateImpl = function (e) {
        var t = this;
        if (!this.adapter.isSurfaceDisabled()) {
          var i = this.activationState;
          if (!i.isActivated) {
            var o = this.previousActivationEvent;
            if (!(o && void 0 !== e && o.type !== e.type))
              (i.isActivated = !0),
                (i.isProgrammatic = void 0 === e),
                (i.activationEvent = e),
                (i.wasActivatedByPointer =
                  !i.isProgrammatic &&
                  void 0 !== e &&
                  ("mousedown" === e.type ||
                    "touchstart" === e.type ||
                    "pointerdown" === e.type)),
                void 0 !== e &&
                et.length > 0 &&
                et.some(function (e) {
                  return t.adapter.containsEventTarget(e);
                })
                  ? this.resetActivationState()
                  : (void 0 !== e &&
                      (et.push(e.target), this.registerDeactivationHandlers(e)),
                    (i.wasElementMadeActive = this.checkElementMadeActive(e)),
                    i.wasElementMadeActive && this.animateActivation(),
                    requestAnimationFrame(function () {
                      (et = []),
                        i.wasElementMadeActive ||
                          void 0 === e ||
                          (" " !== e.key && 32 !== e.keyCode) ||
                          ((i.wasElementMadeActive =
                            t.checkElementMadeActive(e)),
                          i.wasElementMadeActive && t.animateActivation()),
                        i.wasElementMadeActive ||
                          (t.activationState = t.defaultActivationState());
                    }));
          }
        }
      }),
      (t.prototype.checkElementMadeActive = function (e) {
        return (
          void 0 === e || "keydown" !== e.type || this.adapter.isSurfaceActive()
        );
      }),
      (t.prototype.animateActivation = function () {
        var e = this,
          i = t.strings,
          o = i.VAR_FG_TRANSLATE_START,
          n = i.VAR_FG_TRANSLATE_END,
          r = t.cssClasses,
          d = r.FG_DEACTIVATION,
          a = r.FG_ACTIVATION,
          s = t.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var l = "",
          c = "";
        if (!this.adapter.isUnbounded()) {
          var p = this.getFgTranslationCoordinates(),
            m = p.startPoint,
            h = p.endPoint;
          (l = m.x + "px, " + m.y + "px"), (c = h.x + "px, " + h.y + "px");
        }
        this.adapter.updateCssVariable(o, l),
          this.adapter.updateCssVariable(n, c),
          clearTimeout(this.activationTimer),
          clearTimeout(this.fgDeactivationRemovalTimer),
          this.rmBoundedActivationClasses(),
          this.adapter.removeClass(d),
          this.adapter.computeBoundingRect(),
          this.adapter.addClass(a),
          (this.activationTimer = setTimeout(function () {
            e.activationTimerCallback();
          }, s));
      }),
      (t.prototype.getFgTranslationCoordinates = function () {
        var e,
          t = this.activationState,
          i = t.activationEvent;
        return (
          (e = t.wasActivatedByPointer
            ? (function (e, t, i) {
                if (!e) return { x: 0, y: 0 };
                var o,
                  n,
                  r = t.x,
                  d = t.y,
                  a = r + i.left,
                  s = d + i.top;
                if ("touchstart" === e.type) {
                  var l = e;
                  (o = l.changedTouches[0].pageX - a),
                    (n = l.changedTouches[0].pageY - s);
                } else {
                  var c = e;
                  (o = c.pageX - a), (n = c.pageY - s);
                }
                return { x: o, y: n };
              })(
                i,
                this.adapter.getWindowPageOffset(),
                this.adapter.computeBoundingRect(),
              )
            : { x: this.frame.width / 2, y: this.frame.height / 2 }),
          {
            startPoint: (e = {
              x: e.x - this.initialSize / 2,
              y: e.y - this.initialSize / 2,
            }),
            endPoint: {
              x: this.frame.width / 2 - this.initialSize / 2,
              y: this.frame.height / 2 - this.initialSize / 2,
            },
          }
        );
      }),
      (t.prototype.runDeactivationUXLogicIfReady = function () {
        var e = this,
          i = t.cssClasses.FG_DEACTIVATION,
          o = this.activationState,
          n = o.hasDeactivationUXRun,
          r = o.isActivated;
        (n || !r) &&
          this.activationAnimationHasEnded &&
          (this.rmBoundedActivationClasses(),
          this.adapter.addClass(i),
          (this.fgDeactivationRemovalTimer = setTimeout(function () {
            e.adapter.removeClass(i);
          }, Qe.FG_DEACTIVATION_MS)));
      }),
      (t.prototype.rmBoundedActivationClasses = function () {
        var e = t.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(e),
          (this.activationAnimationHasEnded = !1),
          this.adapter.computeBoundingRect();
      }),
      (t.prototype.resetActivationState = function () {
        var e = this;
        (this.previousActivationEvent = this.activationState.activationEvent),
          (this.activationState = this.defaultActivationState()),
          setTimeout(function () {
            return (e.previousActivationEvent = void 0);
          }, t.numbers.TAP_DELAY_MS);
      }),
      (t.prototype.deactivateImpl = function () {
        var e = this,
          t = this.activationState;
        if (t.isActivated) {
          var i = o({}, t);
          t.isProgrammatic
            ? (requestAnimationFrame(function () {
                e.animateDeactivation(i);
              }),
              this.resetActivationState())
            : (this.deregisterDeactivationHandlers(),
              requestAnimationFrame(function () {
                (e.activationState.hasDeactivationUXRun = !0),
                  e.animateDeactivation(i),
                  e.resetActivationState();
              }));
        }
      }),
      (t.prototype.animateDeactivation = function (e) {
        var t = e.wasActivatedByPointer,
          i = e.wasElementMadeActive;
        (t || i) && this.runDeactivationUXLogicIfReady();
      }),
      (t.prototype.layoutInternal = function () {
        var e = this;
        this.frame = this.adapter.computeBoundingRect();
        var i = Math.max(this.frame.height, this.frame.width);
        this.maxRadius = this.adapter.isUnbounded()
          ? i
          : Math.sqrt(
              Math.pow(e.frame.width, 2) + Math.pow(e.frame.height, 2),
            ) + t.numbers.PADDING;
        var o = Math.floor(i * t.numbers.INITIAL_ORIGIN_SCALE);
        this.adapter.isUnbounded() && o % 2 != 0
          ? (this.initialSize = o - 1)
          : (this.initialSize = o),
          (this.fgScale = "" + this.maxRadius / this.initialSize),
          this.updateLayoutCssVars();
      }),
      (t.prototype.updateLayoutCssVars = function () {
        var e = t.strings,
          i = e.VAR_FG_SIZE,
          o = e.VAR_LEFT,
          n = e.VAR_TOP,
          r = e.VAR_FG_SCALE;
        this.adapter.updateCssVariable(i, this.initialSize + "px"),
          this.adapter.updateCssVariable(r, this.fgScale),
          this.adapter.isUnbounded() &&
            ((this.unboundedCoords = {
              left: Math.round(this.frame.width / 2 - this.initialSize / 2),
              top: Math.round(this.frame.height / 2 - this.initialSize / 2),
            }),
            this.adapter.updateCssVariable(o, this.unboundedCoords.left + "px"),
            this.adapter.updateCssVariable(n, this.unboundedCoords.top + "px"));
      }),
      t
    );
  })(Se),
  it = tt;
const ot = Ue(
  class extends Ve {
    constructor(e) {
      var t;
      if (
        (super(e),
        e.type !== He ||
          "style" !== e.name ||
          (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2)
      )
        throw Error(
          "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.",
        );
    }
    render(e) {
      return Object.keys(e).reduce((t, i) => {
        const o = e[i];
        return null == o
          ? t
          : t +
              `${(i = i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase())}:${o};`;
      }, "");
    }
    update(e, [t]) {
      const { style: i } = e.element;
      if (void 0 === this.vt) {
        this.vt = new Set();
        for (const e in t) this.vt.add(e);
        return this.render(t);
      }
      this.vt.forEach((e) => {
        null == t[e] &&
          (this.vt.delete(e),
          e.includes("-") ? i.removeProperty(e) : (i[e] = ""));
      });
      for (const e in t) {
        const o = t[e];
        null != o &&
          (this.vt.add(e), e.includes("-") ? i.setProperty(e, o) : (i[e] = o));
      }
      return V;
    }
  },
);
class nt extends Me {
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
      (this.mdcFoundationClass = it);
  }
  get isActive() {
    return Oe(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (e) => {
        switch (e) {
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
      removeClass: (e) => {
        switch (e) {
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
      updateCssVariable: (e, t) => {
        switch (e) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = t;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = t;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = t;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = t;
            break;
          case "--mdc-ripple-left":
            this.leftPos = t;
            break;
          case "--mdc-ripple-top":
            this.topPos = t;
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
  startPress(e) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(e);
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
  waitForFoundation(e) {
    this.mdcFoundation ? e() : this.updateComplete.then(e);
  }
  update(e) {
    e.has("disabled") && this.disabled && this.endHover(), super.update(e);
  }
  render() {
    const e = this.activated && (this.primary || !this.accent),
      t = this.selected && (this.primary || !this.accent),
      i = {
        "mdc-ripple-surface--accent": this.accent,
        "mdc-ripple-surface--primary--activated": e,
        "mdc-ripple-surface--accent--activated": this.accent && this.activated,
        "mdc-ripple-surface--primary--selected": t,
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
    return B`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ge(i)}"
          style="${ot({ "--mdc-ripple-fg-scale": this.fgScale, "--mdc-ripple-fg-size": this.fgSize, "--mdc-ripple-fg-translate-end": this.translateEnd, "--mdc-ripple-fg-translate-start": this.translateStart, "--mdc-ripple-left": this.leftPos, "--mdc-ripple-top": this.topPos })}"></div>`;
  }
}
n([fe(".mdc-ripple-surface")], nt.prototype, "mdcRoot", void 0),
  n([pe({ type: Boolean })], nt.prototype, "primary", void 0),
  n([pe({ type: Boolean })], nt.prototype, "accent", void 0),
  n([pe({ type: Boolean })], nt.prototype, "unbounded", void 0),
  n([pe({ type: Boolean })], nt.prototype, "disabled", void 0),
  n([pe({ type: Boolean })], nt.prototype, "activated", void 0),
  n([pe({ type: Boolean })], nt.prototype, "selected", void 0),
  n(
    [pe({ type: Boolean })],
    nt.prototype,
    "internalUseStateLayerCustomProperties",
    void 0,
  ),
  n([me()], nt.prototype, "hovering", void 0),
  n([me()], nt.prototype, "bgFocused", void 0),
  n([me()], nt.prototype, "fgActivation", void 0),
  n([me()], nt.prototype, "fgDeactivation", void 0),
  n([me()], nt.prototype, "fgScale", void 0),
  n([me()], nt.prototype, "fgSize", void 0),
  n([me()], nt.prototype, "translateStart", void 0),
  n([me()], nt.prototype, "translateEnd", void 0),
  n([me()], nt.prototype, "leftPos", void 0),
  n([me()], nt.prototype, "topPos", void 0);
const rt = p`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let dt = class extends nt {};
function at(e, t, i) {
  if (void 0 !== t)
    return (function (e, t, i) {
      const o = e.constructor;
      if (!i) {
        const e = `__${t}`;
        if (!(i = o.getPropertyDescriptor(t, e)))
          throw new Error(
            "@ariaProperty must be used after a @property decorator",
          );
      }
      const n = i;
      let r = "";
      if (!n.set) throw new Error(`@ariaProperty requires a setter for ${t}`);
      if (e.dispatchWizEvent) return i;
      const d = {
        configurable: !0,
        enumerable: !0,
        set(e) {
          if ("" === r) {
            const e = o.getPropertyOptions(t);
            r = "string" == typeof e.attribute ? e.attribute : t;
          }
          this.hasAttribute(r) && this.removeAttribute(r), n.set.call(this, e);
        },
      };
      return (
        n.get &&
          (d.get = function () {
            return n.get.call(this);
          }),
        d
      );
    })(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
(dt.styles = [rt]), (dt = n([le("mwc-ripple")], dt));
class st {
  constructor(e) {
    (this.startPress = (t) => {
      e().then((e) => {
        e && e.startPress(t);
      });
    }),
      (this.endPress = () => {
        e().then((e) => {
          e && e.endPress();
        });
      }),
      (this.startFocus = () => {
        e().then((e) => {
          e && e.startFocus();
        });
      }),
      (this.endFocus = () => {
        e().then((e) => {
          e && e.endFocus();
        });
      }),
      (this.startHover = () => {
        e().then((e) => {
          e && e.startHover();
        });
      }),
      (this.endHover = () => {
        e().then((e) => {
          e && e.endHover();
        });
      });
  }
}
const lt = (e) => (null != e ? e : G);
class ct extends ae {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.icon = ""),
      (this.shouldRenderRipple = !1),
      (this.rippleHandlers = new st(
        () => ((this.shouldRenderRipple = !0), this.ripple),
      ));
  }
  renderRipple() {
    return this.shouldRenderRipple
      ? B`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`
      : "";
  }
  focus() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.startFocus(), e.focus());
  }
  blur() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.endFocus(), e.blur());
  }
  render() {
    return B`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${lt(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon ? B`<i class="material-icons">${this.icon}</i>` : ""}
    <span
      ><slot></slot
    ></span>
  </button>`;
  }
  handleRippleMouseDown(e) {
    const t = () => {
      window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
  }
  handleRippleTouchStart(e) {
    this.rippleHandlers.startPress(e);
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
n([pe({ type: Boolean, reflect: !0 })], ct.prototype, "disabled", void 0),
  n([pe({ type: String })], ct.prototype, "icon", void 0),
  n(
    [at, pe({ type: String, attribute: "aria-label" })],
    ct.prototype,
    "ariaLabel",
    void 0,
  ),
  n(
    [at, pe({ type: String, attribute: "aria-haspopup" })],
    ct.prototype,
    "ariaHasPopup",
    void 0,
  ),
  n([fe("button")], ct.prototype, "buttonElement", void 0),
  n([ge("mwc-ripple")], ct.prototype, "ripple", void 0),
  n([me()], ct.prototype, "shouldRenderRipple", void 0),
  n([ue({ passive: !0 })], ct.prototype, "handleRippleMouseDown", null),
  n([ue({ passive: !0 })], ct.prototype, "handleRippleTouchStart", null);
const pt = p`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
class mt extends ct {}
(mt.styles = [pt]), customElements.define("ewt-icon-button", mt);
var ht = { NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch" },
  ut = { NOTCH_ELEMENT_PADDING: 8 },
  ft = {
    NO_LABEL: "mdc-notched-outline--no-label",
    OUTLINE_NOTCHED: "mdc-notched-outline--notched",
    OUTLINE_UPGRADED: "mdc-notched-outline--upgraded",
  },
  gt = (function (e) {
    function t(i) {
      return e.call(this, o(o({}, t.defaultAdapter), i)) || this;
    }
    return (
      i(t, e),
      Object.defineProperty(t, "strings", {
        get: function () {
          return ht;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "cssClasses", {
        get: function () {
          return ft;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "numbers", {
        get: function () {
          return ut;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "defaultAdapter", {
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
      (t.prototype.notch = function (e) {
        var i = t.cssClasses.OUTLINE_NOTCHED;
        e > 0 && (e += ut.NOTCH_ELEMENT_PADDING),
          this.adapter.setNotchWidthProperty(e),
          this.adapter.addClass(i);
      }),
      (t.prototype.closeNotch = function () {
        var e = t.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(e), this.adapter.removeNotchWidthProperty();
      }),
      t
    );
  })(Se);
class bt extends Me {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = gt),
      (this.width = 0),
      (this.open = !1),
      (this.lastOpen = this.open);
  }
  createAdapter() {
    return {
      addClass: (e) => this.mdcRoot.classList.add(e),
      removeClass: (e) => this.mdcRoot.classList.remove(e),
      setNotchWidthProperty: (e) =>
        this.notchElement.style.setProperty("width", `${e}px`),
      removeNotchWidthProperty: () =>
        this.notchElement.style.removeProperty("width"),
    };
  }
  openOrClose(e, t) {
    this.mdcFoundation &&
      (e && void 0 !== t
        ? this.mdcFoundation.notch(t)
        : this.mdcFoundation.closeNotch());
  }
  render() {
    this.openOrClose(this.open, this.width);
    const e = Ge({ "mdc-notched-outline--notched": this.open });
    return B`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
  }
}
n([fe(".mdc-notched-outline")], bt.prototype, "mdcRoot", void 0),
  n([pe({ type: Number })], bt.prototype, "width", void 0),
  n([pe({ type: Boolean, reflect: !0 })], bt.prototype, "open", void 0),
  n([fe(".mdc-notched-outline__notch")], bt.prototype, "notchElement", void 0);
const xt = p`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
let _t = class extends bt {};
var vt, yt;
(_t.styles = [xt]), (_t = n([le("mwc-notched-outline")], _t));
const wt =
  null !==
    (yt =
      null === (vt = window.ShadyDOM) || void 0 === vt ? void 0 : vt.inUse) &&
  void 0 !== yt &&
  yt;
class Et extends Me {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.containingForm = null),
      (this.formDataListener = (e) => {
        this.disabled || this.setFormData(e.formData);
      });
  }
  findFormElement() {
    if (!this.shadowRoot || wt) return null;
    const e = this.getRootNode().querySelectorAll("form");
    for (const t of Array.from(e)) if (t.contains(this)) return t;
    return null;
  }
  connectedCallback() {
    var e;
    super.connectedCallback(),
      (this.containingForm = this.findFormElement()),
      null === (e = this.containingForm) ||
        void 0 === e ||
        e.addEventListener("formdata", this.formDataListener);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      null === (e = this.containingForm) ||
        void 0 === e ||
        e.removeEventListener("formdata", this.formDataListener),
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
        this.mdcRoot.addEventListener("change", (e) => {
          this.dispatchEvent(new Event("change", e));
        });
  }
}
(Et.shadowRootOptions = { mode: "open", delegatesFocus: !0 }),
  n([pe({ type: Boolean })], Et.prototype, "disabled", void 0);
var It = {
    LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
    LABEL_REQUIRED: "mdc-floating-label--required",
    LABEL_SHAKE: "mdc-floating-label--shake",
    ROOT: "mdc-floating-label",
  },
  At = (function (e) {
    function t(i) {
      var n = e.call(this, o(o({}, t.defaultAdapter), i)) || this;
      return (
        (n.shakeAnimationEndHandler = function () {
          n.handleShakeAnimationEnd();
        }),
        n
      );
    }
    return (
      i(t, e),
      Object.defineProperty(t, "cssClasses", {
        get: function () {
          return It;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "defaultAdapter", {
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
      (t.prototype.init = function () {
        this.adapter.registerInteractionHandler(
          "animationend",
          this.shakeAnimationEndHandler,
        );
      }),
      (t.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler(
          "animationend",
          this.shakeAnimationEndHandler,
        );
      }),
      (t.prototype.getWidth = function () {
        return this.adapter.getWidth();
      }),
      (t.prototype.shake = function (e) {
        var i = t.cssClasses.LABEL_SHAKE;
        e ? this.adapter.addClass(i) : this.adapter.removeClass(i);
      }),
      (t.prototype.float = function (e) {
        var i = t.cssClasses,
          o = i.LABEL_FLOAT_ABOVE,
          n = i.LABEL_SHAKE;
        e
          ? this.adapter.addClass(o)
          : (this.adapter.removeClass(o), this.adapter.removeClass(n));
      }),
      (t.prototype.setRequired = function (e) {
        var i = t.cssClasses.LABEL_REQUIRED;
        e ? this.adapter.addClass(i) : this.adapter.removeClass(i);
      }),
      (t.prototype.handleShakeAnimationEnd = function () {
        var e = t.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(e);
      }),
      t
    );
  })(Se);
const Ct = Ue(
  class extends Ve {
    constructor(e) {
      switch (
        (super(e), (this.foundation = null), (this.previousPart = null), e.type)
      ) {
        case He:
        case ze:
          break;
        default:
          throw new Error(
            "FloatingLabel directive only support attribute and property parts",
          );
      }
    }
    update(e, [t]) {
      if (e !== this.previousPart) {
        this.foundation && this.foundation.destroy(), (this.previousPart = e);
        const t = e.element;
        t.classList.add("mdc-floating-label");
        const i = ((e) => ({
          addClass: (t) => e.classList.add(t),
          removeClass: (t) => e.classList.remove(t),
          getWidth: () => e.scrollWidth,
          registerInteractionHandler: (t, i) => {
            e.addEventListener(t, i);
          },
          deregisterInteractionHandler: (t, i) => {
            e.removeEventListener(t, i);
          },
        }))(t);
        (this.foundation = new At(i)), this.foundation.init();
      }
      return this.render(t);
    }
    render(e) {
      return this.foundation;
    }
  },
);
var St = {
    LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
    LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating",
  },
  Tt = (function (e) {
    function t(i) {
      var n = e.call(this, o(o({}, t.defaultAdapter), i)) || this;
      return (
        (n.transitionEndHandler = function (e) {
          n.handleTransitionEnd(e);
        }),
        n
      );
    }
    return (
      i(t, e),
      Object.defineProperty(t, "cssClasses", {
        get: function () {
          return St;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "defaultAdapter", {
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
      (t.prototype.init = function () {
        this.adapter.registerEventHandler(
          "transitionend",
          this.transitionEndHandler,
        );
      }),
      (t.prototype.destroy = function () {
        this.adapter.deregisterEventHandler(
          "transitionend",
          this.transitionEndHandler,
        );
      }),
      (t.prototype.activate = function () {
        this.adapter.removeClass(St.LINE_RIPPLE_DEACTIVATING),
          this.adapter.addClass(St.LINE_RIPPLE_ACTIVE);
      }),
      (t.prototype.setRippleCenter = function (e) {
        this.adapter.setStyle("transform-origin", e + "px center");
      }),
      (t.prototype.deactivate = function () {
        this.adapter.addClass(St.LINE_RIPPLE_DEACTIVATING);
      }),
      (t.prototype.handleTransitionEnd = function (e) {
        var t = this.adapter.hasClass(St.LINE_RIPPLE_DEACTIVATING);
        "opacity" === e.propertyName &&
          t &&
          (this.adapter.removeClass(St.LINE_RIPPLE_ACTIVE),
          this.adapter.removeClass(St.LINE_RIPPLE_DEACTIVATING));
      }),
      t
    );
  })(Se);
const Rt = Ue(
  class extends Ve {
    constructor(e) {
      switch (
        (super(e), (this.previousPart = null), (this.foundation = null), e.type)
      ) {
        case He:
        case ze:
          return;
        default:
          throw new Error(
            "LineRipple only support attribute and property parts.",
          );
      }
    }
    update(e, t) {
      if (this.previousPart !== e) {
        this.foundation && this.foundation.destroy(), (this.previousPart = e);
        const t = e.element;
        t.classList.add("mdc-line-ripple");
        const i = ((e) => ({
          addClass: (t) => e.classList.add(t),
          removeClass: (t) => e.classList.remove(t),
          hasClass: (t) => e.classList.contains(t),
          setStyle: (t, i) => e.style.setProperty(t, i),
          registerEventHandler: (t, i) => {
            e.addEventListener(t, i);
          },
          deregisterEventHandler: (t, i) => {
            e.removeEventListener(t, i);
          },
        }))(t);
        (this.foundation = new Tt(i)), this.foundation.init();
      }
      return this.render();
    }
    render() {
      return this.foundation;
    }
  },
);
var Ot = {
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
  kt = {
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
  Lt = { LABEL_SCALE: 0.75 },
  Ft = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"],
  Nt = ["color", "date", "datetime-local", "month", "range", "time", "week"],
  Dt = ["mousedown", "touchstart"],
  $t = ["click", "keydown"],
  Mt = (function (e) {
    function t(i, n) {
      void 0 === n && (n = {});
      var r = e.call(this, o(o({}, t.defaultAdapter), i)) || this;
      return (
        (r.isFocused = !1),
        (r.receivedUserInput = !1),
        (r.valid = !0),
        (r.useNativeValidation = !0),
        (r.validateOnValueChange = !0),
        (r.helperText = n.helperText),
        (r.characterCounter = n.characterCounter),
        (r.leadingIcon = n.leadingIcon),
        (r.trailingIcon = n.trailingIcon),
        (r.inputFocusHandler = function () {
          r.activateFocus();
        }),
        (r.inputBlurHandler = function () {
          r.deactivateFocus();
        }),
        (r.inputInputHandler = function () {
          r.handleInput();
        }),
        (r.setPointerXOffset = function (e) {
          r.setTransformOrigin(e);
        }),
        (r.textFieldInteractionHandler = function () {
          r.handleTextFieldInteraction();
        }),
        (r.validationAttributeChangeHandler = function (e) {
          r.handleValidationAttributeChange(e);
        }),
        r
      );
    }
    return (
      i(t, e),
      Object.defineProperty(t, "cssClasses", {
        get: function () {
          return kt;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "strings", {
        get: function () {
          return Ot;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "numbers", {
        get: function () {
          return Lt;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "shouldAlwaysFloat", {
        get: function () {
          var e = this.getNativeInput().type;
          return Nt.indexOf(e) >= 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "shouldFloat", {
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
      Object.defineProperty(t.prototype, "shouldShake", {
        get: function () {
          return !this.isFocused && !this.isValid() && !!this.getValue();
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "defaultAdapter", {
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
      (t.prototype.init = function () {
        var e, t, i, o;
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
          for (var n = r(Dt), d = n.next(); !d.done; d = n.next()) {
            var a = d.value;
            this.adapter.registerInputInteractionHandler(
              a,
              this.setPointerXOffset,
            );
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            d && !d.done && (t = n.return) && t.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
        try {
          for (var s = r($t), l = s.next(); !l.done; l = s.next()) {
            a = l.value;
            this.adapter.registerTextFieldInteractionHandler(
              a,
              this.textFieldInteractionHandler,
            );
          }
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            l && !l.done && (o = s.return) && o.call(s);
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
      (t.prototype.destroy = function () {
        var e, t, i, o;
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
          for (var n = r(Dt), d = n.next(); !d.done; d = n.next()) {
            var a = d.value;
            this.adapter.deregisterInputInteractionHandler(
              a,
              this.setPointerXOffset,
            );
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            d && !d.done && (t = n.return) && t.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
        try {
          for (var s = r($t), l = s.next(); !l.done; l = s.next()) {
            a = l.value;
            this.adapter.deregisterTextFieldInteractionHandler(
              a,
              this.textFieldInteractionHandler,
            );
          }
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            l && !l.done && (o = s.return) && o.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.deregisterValidationAttributeChangeHandler(
          this.validationObserver,
        );
      }),
      (t.prototype.handleTextFieldInteraction = function () {
        var e = this.adapter.getNativeInput();
        (e && e.disabled) || (this.receivedUserInput = !0);
      }),
      (t.prototype.handleValidationAttributeChange = function (e) {
        var t = this;
        e.some(function (e) {
          return (
            Ft.indexOf(e) > -1 &&
            (t.styleValidity(!0),
            t.adapter.setLabelRequired(t.getNativeInput().required),
            !0)
          );
        }),
          e.indexOf("maxlength") > -1 &&
            this.setcharacterCounter(this.getValue().length);
      }),
      (t.prototype.notchOutline = function (e) {
        if (this.adapter.hasOutline() && this.adapter.hasLabel())
          if (e) {
            var t = this.adapter.getLabelWidth() * Lt.LABEL_SCALE;
            this.adapter.notchOutline(t);
          } else this.adapter.closeOutline();
      }),
      (t.prototype.activateFocus = function () {
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
      (t.prototype.setTransformOrigin = function (e) {
        if (!this.isDisabled() && !this.adapter.hasOutline()) {
          var t = e.touches,
            i = t ? t[0] : e,
            o = i.target.getBoundingClientRect(),
            n = i.clientX - o.left;
          this.adapter.setLineRippleTransformOrigin(n);
        }
      }),
      (t.prototype.handleInput = function () {
        this.autoCompleteFocus(),
          this.setcharacterCounter(this.getValue().length);
      }),
      (t.prototype.autoCompleteFocus = function () {
        this.receivedUserInput || this.activateFocus();
      }),
      (t.prototype.deactivateFocus = function () {
        (this.isFocused = !1), this.adapter.deactivateLineRipple();
        var e = this.isValid();
        this.styleValidity(e),
          this.styleFocused(this.isFocused),
          this.adapter.hasLabel() &&
            (this.notchOutline(this.shouldFloat),
            this.adapter.floatLabel(this.shouldFloat),
            this.styleFloating(this.shouldFloat),
            this.adapter.shakeLabel(this.shouldShake)),
          this.shouldFloat || (this.receivedUserInput = !1);
      }),
      (t.prototype.getValue = function () {
        return this.getNativeInput().value;
      }),
      (t.prototype.setValue = function (e) {
        if (
          (this.getValue() !== e && (this.getNativeInput().value = e),
          this.setcharacterCounter(e.length),
          this.validateOnValueChange)
        ) {
          var t = this.isValid();
          this.styleValidity(t);
        }
        this.adapter.hasLabel() &&
          (this.notchOutline(this.shouldFloat),
          this.adapter.floatLabel(this.shouldFloat),
          this.styleFloating(this.shouldFloat),
          this.validateOnValueChange &&
            this.adapter.shakeLabel(this.shouldShake));
      }),
      (t.prototype.isValid = function () {
        return this.useNativeValidation
          ? this.isNativeInputValid()
          : this.valid;
      }),
      (t.prototype.setValid = function (e) {
        (this.valid = e), this.styleValidity(e);
        var t = !e && !this.isFocused && !!this.getValue();
        this.adapter.hasLabel() && this.adapter.shakeLabel(t);
      }),
      (t.prototype.setValidateOnValueChange = function (e) {
        this.validateOnValueChange = e;
      }),
      (t.prototype.getValidateOnValueChange = function () {
        return this.validateOnValueChange;
      }),
      (t.prototype.setUseNativeValidation = function (e) {
        this.useNativeValidation = e;
      }),
      (t.prototype.isDisabled = function () {
        return this.getNativeInput().disabled;
      }),
      (t.prototype.setDisabled = function (e) {
        (this.getNativeInput().disabled = e), this.styleDisabled(e);
      }),
      (t.prototype.setHelperTextContent = function (e) {
        this.helperText && this.helperText.setContent(e);
      }),
      (t.prototype.setLeadingIconAriaLabel = function (e) {
        this.leadingIcon && this.leadingIcon.setAriaLabel(e);
      }),
      (t.prototype.setLeadingIconContent = function (e) {
        this.leadingIcon && this.leadingIcon.setContent(e);
      }),
      (t.prototype.setTrailingIconAriaLabel = function (e) {
        this.trailingIcon && this.trailingIcon.setAriaLabel(e);
      }),
      (t.prototype.setTrailingIconContent = function (e) {
        this.trailingIcon && this.trailingIcon.setContent(e);
      }),
      (t.prototype.setcharacterCounter = function (e) {
        if (this.characterCounter) {
          var t = this.getNativeInput().maxLength;
          if (-1 === t)
            throw new Error(
              "MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.",
            );
          this.characterCounter.setCounterValue(e, t);
        }
      }),
      (t.prototype.isBadInput = function () {
        return this.getNativeInput().validity.badInput || !1;
      }),
      (t.prototype.isNativeInputValid = function () {
        return this.getNativeInput().validity.valid;
      }),
      (t.prototype.styleValidity = function (e) {
        var i = t.cssClasses.INVALID;
        if (
          (e ? this.adapter.removeClass(i) : this.adapter.addClass(i),
          this.helperText)
        ) {
          if ((this.helperText.setValidity(e), !this.helperText.isValidation()))
            return;
          var o = this.helperText.isVisible(),
            n = this.helperText.getId();
          o && n
            ? this.adapter.setInputAttr(Ot.ARIA_DESCRIBEDBY, n)
            : this.adapter.removeInputAttr(Ot.ARIA_DESCRIBEDBY);
        }
      }),
      (t.prototype.styleFocused = function (e) {
        var i = t.cssClasses.FOCUSED;
        e ? this.adapter.addClass(i) : this.adapter.removeClass(i);
      }),
      (t.prototype.styleDisabled = function (e) {
        var i = t.cssClasses,
          o = i.DISABLED,
          n = i.INVALID;
        e
          ? (this.adapter.addClass(o), this.adapter.removeClass(n))
          : this.adapter.removeClass(o),
          this.leadingIcon && this.leadingIcon.setDisabled(e),
          this.trailingIcon && this.trailingIcon.setDisabled(e);
      }),
      (t.prototype.styleFloating = function (e) {
        var i = t.cssClasses.LABEL_FLOATING;
        e ? this.adapter.addClass(i) : this.adapter.removeClass(i);
      }),
      (t.prototype.getNativeInput = function () {
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
      t
    );
  })(Se),
  Pt = Mt;
const Ht = {},
  zt = Ue(
    class extends Ve {
      constructor(e) {
        if ((super(e), e.type !== ze && e.type !== He && e.type !== Be))
          throw Error(
            "The `live` directive is not allowed on child or event bindings",
          );
        if (!((e) => void 0 === e.strings)(e))
          throw Error("`live` bindings can only contain a single expression");
      }
      render(e) {
        return e;
      }
      update(e, [t]) {
        if (t === V || t === G) return t;
        const i = e.element,
          o = e.name;
        if (e.type === ze) {
          if (t === i[o]) return V;
        } else if (e.type === Be) {
          if (!!t === i.hasAttribute(o)) return V;
        } else if (e.type === He && i.getAttribute(o) === t + "") return V;
        return (
          ((e, t = Ht) => {
            e._$AH = t;
          })(e),
          t
        );
      }
    },
  ),
  Bt = ["touchstart", "touchmove", "scroll", "mousewheel"],
  Ut = (e = {}) => {
    const t = {};
    for (const i in e) t[i] = e[i];
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
      t,
    );
  };
class Vt extends Et {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = Pt),
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
      (this._validity = Ut()),
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
    const e = new CustomEvent("focus");
    this.formElement.dispatchEvent(e), this.formElement.focus();
  }
  blur() {
    const e = new CustomEvent("blur");
    this.formElement.dispatchEvent(e), this.formElement.blur();
  }
  select() {
    this.formElement.select();
  }
  setSelectionRange(e, t, i) {
    this.formElement.setSelectionRange(e, t, i);
  }
  update(e) {
    e.has("autoValidate") &&
      this.mdcFoundation &&
      this.mdcFoundation.setValidateOnValueChange(this.autoValidate),
      e.has("value") &&
        "string" != typeof this.value &&
        (this.value = `${this.value}`),
      super.update(e);
  }
  setFormData(e) {
    this.name && e.append(this.name, this.value);
  }
  render() {
    const e = this.charCounter && -1 !== this.maxLength,
      t = !!this.helper || !!this.validationMessage || e,
      i = {
        "mdc-text-field--disabled": this.disabled,
        "mdc-text-field--no-label": !this.label,
        "mdc-text-field--filled": !this.outlined,
        "mdc-text-field--outlined": this.outlined,
        "mdc-text-field--with-leading-icon": this.icon,
        "mdc-text-field--with-trailing-icon": this.iconTrailing,
        "mdc-text-field--end-aligned": this.endAligned,
      };
    return B`
      <label class="mdc-text-field ${Ge(i)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(t)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(t, e)}
    `;
  }
  updated(e) {
    e.has("value") &&
      void 0 !== e.get("value") &&
      (this.mdcFoundation.setValue(this.value),
      this.autoValidate && this.reportValidity());
  }
  renderRipple() {
    return this.outlined
      ? ""
      : B`
      <span class="mdc-text-field__ripple"></span>
    `;
  }
  renderOutline() {
    return this.outlined
      ? B`
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
      ? B`
      <span
          .floatingLabelFoundation=${Ct(this.label)}
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
  renderIcon(e, t = !1) {
    return B`<i class="material-icons mdc-text-field__icon ${Ge({ "mdc-text-field__icon--leading": !t, "mdc-text-field__icon--trailing": t })}">${e}</i>`;
  }
  renderPrefix() {
    return this.prefix ? this.renderAffix(this.prefix) : "";
  }
  renderSuffix() {
    return this.suffix ? this.renderAffix(this.suffix, !0) : "";
  }
  renderAffix(e, t = !1) {
    return B`<span class="mdc-text-field__affix ${Ge({ "mdc-text-field__affix--prefix": !t, "mdc-text-field__affix--suffix": t })}">
        ${e}</span>`;
  }
  renderInput(e) {
    const t = -1 === this.minLength ? void 0 : this.minLength,
      i = -1 === this.maxLength ? void 0 : this.maxLength,
      o = this.autocapitalize ? this.autocapitalize : void 0,
      n = this.validationMessage && !this.isUiValid,
      r = this.label ? "label" : void 0,
      d = e ? "helper-text" : void 0,
      a = this.focused || this.helperPersistent || n ? "helper-text" : void 0;
    return B`
      <input
          aria-labelledby=${lt(r)}
          aria-controls="${lt(d)}"
          aria-describedby="${lt(a)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${zt(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${lt(t)}"
          maxlength="${lt(i)}"
          pattern="${lt(this.pattern ? this.pattern : void 0)}"
          min="${lt("" === this.min ? void 0 : this.min)}"
          max="${lt("" === this.max ? void 0 : this.max)}"
          step="${lt(null === this.step ? void 0 : this.step)}"
          size="${lt(null === this.size ? void 0 : this.size)}"
          name="${lt("" === this.name ? void 0 : this.name)}"
          inputmode="${lt(this.inputMode)}"
          autocapitalize="${lt(o)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
  }
  renderLineRipple() {
    return this.outlined
      ? ""
      : B`
      <span .lineRippleFoundation=${Rt()}></span>
    `;
  }
  renderHelperText(e, t) {
    const i = this.validationMessage && !this.isUiValid,
      o = {
        "mdc-text-field-helper-text--persistent": this.helperPersistent,
        "mdc-text-field-helper-text--validation-msg": i,
      },
      n = this.focused || this.helperPersistent || i ? void 0 : "true",
      r = i ? this.validationMessage : this.helper;
    return e
      ? B`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${lt(n)}"
             class="mdc-text-field-helper-text ${Ge(o)}"
             >${r}</div>
        ${this.renderCharCounter(t)}
      </div>`
      : "";
  }
  renderCharCounter(e) {
    const t = Math.min(this.value.length, this.maxLength);
    return e
      ? B`
      <span class="mdc-text-field-character-counter"
            >${t} / ${this.maxLength}</span>`
      : "";
  }
  onInputFocus() {
    this.focused = !0;
  }
  onInputBlur() {
    (this.focused = !1), this.reportValidity();
  }
  checkValidity() {
    const e = this._checkValidity(this.value);
    if (!e) {
      const e = new Event("invalid", { bubbles: !1, cancelable: !0 });
      this.dispatchEvent(e);
    }
    return e;
  }
  reportValidity() {
    const e = this.checkValidity();
    return this.mdcFoundation.setValid(e), (this.isUiValid = e), e;
  }
  _checkValidity(e) {
    const t = this.formElement.validity;
    let i = Ut(t);
    if (this.validityTransform) {
      const t = this.validityTransform(e, i);
      (i = Object.assign(Object.assign({}, i), t)),
        this.mdcFoundation.setUseNativeValidation(!1);
    } else this.mdcFoundation.setUseNativeValidation(!0);
    return (this._validity = i), this._validity.valid;
  }
  setCustomValidity(e) {
    (this.validationMessage = e), this.formElement.setCustomValidity(e);
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
        registerTextFieldInteractionHandler: (e, t) =>
          this.addEventListener(e, t),
        deregisterTextFieldInteractionHandler: (e, t) =>
          this.removeEventListener(e, t),
        registerValidationAttributeChangeHandler: (e) => {
          const t = new MutationObserver((t) => {
            e(((e) => e.map((e) => e.attributeName).filter((e) => e))(t));
          });
          return t.observe(this.formElement, { attributes: !0 }), t;
        },
        deregisterValidationAttributeChangeHandler: (e) => e.disconnect(),
      },
      Le(this.mdcRoot),
    );
  }
  getInputAdapterMethods() {
    return {
      getNativeInput: () => this.formElement,
      setInputAttr: () => {},
      removeInputAttr: () => {},
      isFocused: () =>
        !!this.shadowRoot && this.shadowRoot.activeElement === this.formElement,
      registerInputInteractionHandler: (e, t) =>
        this.formElement.addEventListener(e, t, { passive: e in Bt }),
      deregisterInputInteractionHandler: (e, t) =>
        this.formElement.removeEventListener(e, t),
    };
  }
  getLabelAdapterMethods() {
    return {
      floatLabel: (e) =>
        this.labelElement && this.labelElement.floatingLabelFoundation.float(e),
      getLabelWidth: () =>
        this.labelElement
          ? this.labelElement.floatingLabelFoundation.getWidth()
          : 0,
      hasLabel: () => Boolean(this.labelElement),
      shakeLabel: (e) =>
        this.labelElement && this.labelElement.floatingLabelFoundation.shake(e),
      setLabelRequired: (e) => {
        this.labelElement &&
          this.labelElement.floatingLabelFoundation.setRequired(e);
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
      setLineRippleTransformOrigin: (e) => {
        this.lineRippleElement &&
          this.lineRippleElement.lineRippleFoundation.setRippleCenter(e);
      },
    };
  }
  async getUpdateComplete() {
    var e;
    const t = await super.getUpdateComplete();
    return (
      await (null === (e = this.outlineElement) || void 0 === e
        ? void 0
        : e.updateComplete),
      t
    );
  }
  firstUpdated() {
    var e;
    super.firstUpdated(),
      this.mdcFoundation.setValidateOnValueChange(this.autoValidate),
      this.validateOnInitialRender && this.reportValidity(),
      null === (e = this.outlineElement) ||
        void 0 === e ||
        e.updateComplete.then(() => {
          var e;
          this.outlineWidth =
            (null === (e = this.labelElement) || void 0 === e
              ? void 0
              : e.floatingLabelFoundation.getWidth()) || 0;
        });
  }
  getOutlineAdapterMethods() {
    return {
      closeOutline: () => this.outlineElement && (this.outlineOpen = !1),
      hasOutline: () => Boolean(this.outlineElement),
      notchOutline: (e) => {
        this.outlineElement &&
          !this.outlineOpen &&
          ((this.outlineWidth = e), (this.outlineOpen = !0));
      },
    };
  }
  async layout() {
    await this.updateComplete;
    const e = this.labelElement;
    if (!e) return void (this.outlineOpen = !1);
    const t = !!this.label && !!this.value;
    if ((e.floatingLabelFoundation.float(t), !this.outlined)) return;
    (this.outlineOpen = t), await this.updateComplete;
    const i = e.floatingLabelFoundation.getWidth();
    this.outlineOpen && ((this.outlineWidth = i), await this.updateComplete);
  }
}
n([fe(".mdc-text-field")], Vt.prototype, "mdcRoot", void 0),
  n([fe("input")], Vt.prototype, "formElement", void 0),
  n([fe(".mdc-floating-label")], Vt.prototype, "labelElement", void 0),
  n([fe(".mdc-line-ripple")], Vt.prototype, "lineRippleElement", void 0),
  n([fe("mwc-notched-outline")], Vt.prototype, "outlineElement", void 0),
  n([fe(".mdc-notched-outline__notch")], Vt.prototype, "notchElement", void 0),
  n([pe({ type: String })], Vt.prototype, "value", void 0),
  n([pe({ type: String })], Vt.prototype, "type", void 0),
  n([pe({ type: String })], Vt.prototype, "placeholder", void 0),
  n(
    [
      pe({ type: String }),
      Pe(function (e, t) {
        void 0 !== t && this.label !== t && this.layout();
      }),
    ],
    Vt.prototype,
    "label",
    void 0,
  ),
  n([pe({ type: String })], Vt.prototype, "icon", void 0),
  n([pe({ type: String })], Vt.prototype, "iconTrailing", void 0),
  n([pe({ type: Boolean, reflect: !0 })], Vt.prototype, "disabled", void 0),
  n([pe({ type: Boolean })], Vt.prototype, "required", void 0),
  n([pe({ type: Number })], Vt.prototype, "minLength", void 0),
  n([pe({ type: Number })], Vt.prototype, "maxLength", void 0),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      Pe(function (e, t) {
        void 0 !== t && this.outlined !== t && this.layout();
      }),
    ],
    Vt.prototype,
    "outlined",
    void 0,
  ),
  n([pe({ type: String })], Vt.prototype, "helper", void 0),
  n([pe({ type: Boolean })], Vt.prototype, "validateOnInitialRender", void 0),
  n([pe({ type: String })], Vt.prototype, "validationMessage", void 0),
  n([pe({ type: Boolean })], Vt.prototype, "autoValidate", void 0),
  n([pe({ type: String })], Vt.prototype, "pattern", void 0),
  n([pe({ type: String })], Vt.prototype, "min", void 0),
  n([pe({ type: String })], Vt.prototype, "max", void 0),
  n([pe({ type: String })], Vt.prototype, "step", void 0),
  n([pe({ type: Number })], Vt.prototype, "size", void 0),
  n([pe({ type: Boolean })], Vt.prototype, "helperPersistent", void 0),
  n([pe({ type: Boolean })], Vt.prototype, "charCounter", void 0),
  n([pe({ type: Boolean })], Vt.prototype, "endAligned", void 0),
  n([pe({ type: String })], Vt.prototype, "prefix", void 0),
  n([pe({ type: String })], Vt.prototype, "suffix", void 0),
  n([pe({ type: String })], Vt.prototype, "name", void 0),
  n([pe({ type: String })], Vt.prototype, "inputMode", void 0),
  n([pe({ type: Boolean })], Vt.prototype, "readOnly", void 0),
  n([pe({ type: String })], Vt.prototype, "autocapitalize", void 0),
  n([me()], Vt.prototype, "outlineOpen", void 0),
  n([me()], Vt.prototype, "outlineWidth", void 0),
  n([me()], Vt.prototype, "isUiValid", void 0),
  n([me()], Vt.prototype, "focused", void 0),
  n([ue({ passive: !0 })], Vt.prototype, "handleInputChange", null);
const Gt = p`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
class jt extends Vt {}
(jt.styles = [Gt]), customElements.define("is-textfield", jt);
const Wt = p`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
let Xt = class extends ae {
  render() {
    return B`<span><slot></slot></span>`;
  }
};
(Xt.styles = [Wt]), (Xt = n([le("mwc-icon")], Xt));
class qt extends ae {
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
      (this.rippleHandlers = new st(
        () => ((this.shouldRenderRipple = !0), this.ripple),
      ));
  }
  renderOverlay() {
    return B``;
  }
  renderRipple() {
    const e = this.raised || this.unelevated;
    return this.shouldRenderRipple
      ? B`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>`
      : "";
  }
  focus() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.startFocus(), e.focus());
  }
  blur() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.endFocus(), e.blur());
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
    return B`
      <button
          id="button"
          class="mdc-button ${Ge(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${lt(this.ariaHasPopup)}"
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
        <span class="slot-container ${Ge({ flex: this.expandContent })}">
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
    return B`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
  }
  handleRippleActivate(e) {
    const t = () => {
      window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
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
(qt.shadowRootOptions = { mode: "open", delegatesFocus: !0 }),
  n(
    [at, pe({ type: String, attribute: "aria-haspopup" })],
    qt.prototype,
    "ariaHasPopup",
    void 0,
  ),
  n([pe({ type: Boolean, reflect: !0 })], qt.prototype, "raised", void 0),
  n([pe({ type: Boolean, reflect: !0 })], qt.prototype, "unelevated", void 0),
  n([pe({ type: Boolean, reflect: !0 })], qt.prototype, "outlined", void 0),
  n([pe({ type: Boolean })], qt.prototype, "dense", void 0),
  n([pe({ type: Boolean, reflect: !0 })], qt.prototype, "disabled", void 0),
  n(
    [pe({ type: Boolean, attribute: "trailingicon" })],
    qt.prototype,
    "trailingIcon",
    void 0,
  ),
  n([pe({ type: Boolean, reflect: !0 })], qt.prototype, "fullwidth", void 0),
  n([pe({ type: String })], qt.prototype, "icon", void 0),
  n([pe({ type: String })], qt.prototype, "label", void 0),
  n([pe({ type: Boolean })], qt.prototype, "expandContent", void 0),
  n([fe("#button")], qt.prototype, "buttonElement", void 0),
  n([ge("mwc-ripple")], qt.prototype, "ripple", void 0),
  n([me()], qt.prototype, "shouldRenderRipple", void 0),
  n([ue({ passive: !0 })], qt.prototype, "handleRippleActivate", null);
const Yt = p`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
class Kt extends qt {}
(Kt.styles = [Yt]), customElements.define("is-button", Kt);
class Qt extends ae {
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
    const e = {
        "mdc-circular-progress--closed": this.closed,
        "mdc-circular-progress--indeterminate": this.indeterminate,
      },
      t = 48 + 4 * this.density,
      i = { width: `${t}px`, height: `${t}px` };
    return B`
      <div
        class="mdc-circular-progress ${Ge(e)}"
        style="${ot(i)}"
        role="progressbar"
        aria-label="${lt(this.ariaLabel)}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${lt(this.indeterminate ? void 0 : this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`;
  }
  renderDeterminateContainer() {
    const e = 48 + 4 * this.density,
      t = e / 2,
      i =
        this.density >= -3
          ? 18 + (11 * this.density) / 6
          : 12.5 + (5 * (this.density + 3)) / 4,
      o = 6.2831852 * i,
      n = (1 - this.progress) * o,
      r =
        this.density >= -3
          ? 4 + this.density * (1 / 3)
          : 3 + (this.density + 3) * (1 / 6);
    return B`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${e} ${e}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${t}" cy="${t}" r="${i}"
                  stroke-width="${r}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${t}" cy="${t}" r="${i}"
                  stroke-dasharray="${6.2831852 * i}"
                  stroke-dashoffset="${n}"
                  stroke-width="${r}"></circle>
        </svg>
      </div>`;
  }
  renderIndeterminateContainer() {
    return B`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`;
  }
  renderIndeterminateSpinnerLayer() {
    const e = 48 + 4 * this.density,
      t = e / 2,
      i =
        this.density >= -3
          ? 18 + (11 * this.density) / 6
          : 12.5 + (5 * (this.density + 3)) / 4,
      o = 6.2831852 * i,
      n = 0.5 * o,
      r =
        this.density >= -3
          ? 4 + this.density * (1 / 3)
          : 3 + (this.density + 3) * (1 / 6);
    return B`
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${o}"
                    stroke-dashoffset="${n}"
                    stroke-width="${r}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${o}"
                    stroke-dashoffset="${n}"
                    stroke-width="${0.8 * r}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${o}"
                    stroke-dashoffset="${n}"
                    stroke-width="${r}"></circle>
          </svg>
        </div>`;
  }
  update(e) {
    super.update(e),
      e.has("progress") &&
        (this.progress > 1 && (this.progress = 1),
        this.progress < 0 && (this.progress = 0));
  }
}
n([pe({ type: Boolean, reflect: !0 })], Qt.prototype, "indeterminate", void 0),
  n([pe({ type: Number, reflect: !0 })], Qt.prototype, "progress", void 0),
  n([pe({ type: Number, reflect: !0 })], Qt.prototype, "density", void 0),
  n([pe({ type: Boolean, reflect: !0 })], Qt.prototype, "closed", void 0),
  n(
    [at, pe({ type: String, attribute: "aria-label" })],
    Qt.prototype,
    "ariaLabel",
    void 0,
  );
const Zt = p`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`;
class Jt extends Qt {}
(Jt.styles = [Zt]), customElements.define("is-circular-progress", Jt);
class ei extends ae {
  constructor() {
    super(...arguments),
      (this.value = ""),
      (this.group = null),
      (this.tabindex = -1),
      (this.disabled = !1),
      (this.twoline = !1),
      (this.activated = !1),
      (this.graphic = null),
      (this.multipleGraphics = !1),
      (this.hasMeta = !1),
      (this.noninteractive = !1),
      (this.selected = !1),
      (this.shouldRenderRipple = !1),
      (this._managingList = null),
      (this.boundOnClick = this.onClick.bind(this)),
      (this._firstChanged = !0),
      (this._skipPropRequest = !1),
      (this.rippleHandlers = new st(
        () => ((this.shouldRenderRipple = !0), this.ripple),
      )),
      (this.listeners = [
        {
          target: this,
          eventNames: ["click"],
          cb: () => {
            this.onClick();
          },
        },
        {
          target: this,
          eventNames: ["mouseenter"],
          cb: this.rippleHandlers.startHover,
        },
        {
          target: this,
          eventNames: ["mouseleave"],
          cb: this.rippleHandlers.endHover,
        },
        {
          target: this,
          eventNames: ["focus"],
          cb: this.rippleHandlers.startFocus,
        },
        {
          target: this,
          eventNames: ["blur"],
          cb: this.rippleHandlers.endFocus,
        },
        {
          target: this,
          eventNames: ["mousedown", "touchstart"],
          cb: (e) => {
            const t = e.type;
            this.onDown("mousedown" === t ? "mouseup" : "touchend", e);
          },
        },
      ]);
  }
  get text() {
    const e = this.textContent;
    return e ? e.trim() : "";
  }
  render() {
    const e = this.renderText(),
      t = this.graphic ? this.renderGraphic() : B``,
      i = this.hasMeta ? this.renderMeta() : B``;
    return B`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`;
  }
  renderRipple() {
    return this.shouldRenderRipple
      ? B`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`
      : this.activated
        ? B`<div class="fake-activated-ripple"></div>`
        : "";
  }
  renderGraphic() {
    const e = { multi: this.multipleGraphics };
    return B`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ge(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return B`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return B`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return B`<slot></slot>`;
  }
  renderTwoline() {
    return B`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
  }
  onClick() {
    this.fireRequestSelected(!this.selected, "interaction");
  }
  onDown(e, t) {
    const i = () => {
      window.removeEventListener(e, i), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, i), this.rippleHandlers.startPress(t);
  }
  fireRequestSelected(e, t) {
    if (this.noninteractive) return;
    const i = new CustomEvent("request-selected", {
      bubbles: !0,
      composed: !0,
      detail: { source: t, selected: e },
    });
    this.dispatchEvent(i);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.addEventListener(t, e.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      for (const t of e.eventNames) e.target.removeEventListener(t, e.cb);
    this._managingList &&
      (this._managingList.debouncedLayout
        ? this._managingList.debouncedLayout(!0)
        : this._managingList.layout(!0));
  }
  firstUpdated() {
    const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
}
n([fe("slot")], ei.prototype, "slotElement", void 0),
  n([ge("mwc-ripple")], ei.prototype, "ripple", void 0),
  n([pe({ type: String })], ei.prototype, "value", void 0),
  n([pe({ type: String, reflect: !0 })], ei.prototype, "group", void 0),
  n([pe({ type: Number, reflect: !0 })], ei.prototype, "tabindex", void 0),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      Pe(function (e) {
        e
          ? this.setAttribute("aria-disabled", "true")
          : this.setAttribute("aria-disabled", "false");
      }),
    ],
    ei.prototype,
    "disabled",
    void 0,
  ),
  n([pe({ type: Boolean, reflect: !0 })], ei.prototype, "twoline", void 0),
  n([pe({ type: Boolean, reflect: !0 })], ei.prototype, "activated", void 0),
  n([pe({ type: String, reflect: !0 })], ei.prototype, "graphic", void 0),
  n([pe({ type: Boolean })], ei.prototype, "multipleGraphics", void 0),
  n([pe({ type: Boolean })], ei.prototype, "hasMeta", void 0),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      Pe(function (e) {
        e
          ? (this.removeAttribute("aria-checked"),
            this.removeAttribute("mwc-list-item"),
            (this.selected = !1),
            (this.activated = !1),
            (this.tabIndex = -1))
          : this.setAttribute("mwc-list-item", "");
      }),
    ],
    ei.prototype,
    "noninteractive",
    void 0,
  ),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      Pe(function (e) {
        const t = this.getAttribute("role"),
          i = "gridcell" === t || "option" === t || "row" === t || "tab" === t;
        i && e
          ? this.setAttribute("aria-selected", "true")
          : i && this.setAttribute("aria-selected", "false"),
          this._firstChanged
            ? (this._firstChanged = !1)
            : this._skipPropRequest || this.fireRequestSelected(e, "property");
      }),
    ],
    ei.prototype,
    "selected",
    void 0,
  ),
  n([me()], ei.prototype, "shouldRenderRipple", void 0),
  n([me()], ei.prototype, "_managingList", void 0);
const ti = p`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
let ii = class extends ei {};
(ii.styles = [ti]), (ii = n([le("mwc-list-item")], ii));
var oi = "Unknown",
  ni = "Backspace",
  ri = "Enter",
  di = "Spacebar",
  ai = "PageUp",
  si = "PageDown",
  li = "End",
  ci = "Home",
  pi = "ArrowLeft",
  mi = "ArrowUp",
  hi = "ArrowRight",
  ui = "ArrowDown",
  fi = "Delete",
  gi = "Escape",
  bi = "Tab",
  xi = new Set();
xi.add(ni),
  xi.add(ri),
  xi.add(di),
  xi.add(ai),
  xi.add(si),
  xi.add(li),
  xi.add(ci),
  xi.add(pi),
  xi.add(mi),
  xi.add(hi),
  xi.add(ui),
  xi.add(fi),
  xi.add(gi),
  xi.add(bi);
var _i = 8,
  vi = 13,
  yi = 32,
  wi = 33,
  Ei = 34,
  Ii = 35,
  Ai = 36,
  Ci = 37,
  Si = 38,
  Ti = 39,
  Ri = 40,
  Oi = 46,
  ki = 27,
  Li = 9,
  Fi = new Map();
Fi.set(_i, ni),
  Fi.set(vi, ri),
  Fi.set(yi, di),
  Fi.set(wi, ai),
  Fi.set(Ei, si),
  Fi.set(Ii, li),
  Fi.set(Ai, ci),
  Fi.set(Ci, pi),
  Fi.set(Si, mi),
  Fi.set(Ti, hi),
  Fi.set(Ri, ui),
  Fi.set(Oi, fi),
  Fi.set(ki, gi),
  Fi.set(Li, bi);
var Ni,
  Di,
  $i = new Set();
function Mi(e) {
  var t = e.key;
  if (xi.has(t)) return t;
  var i = Fi.get(e.keyCode);
  return i || oi;
}
$i.add(ai),
  $i.add(si),
  $i.add(li),
  $i.add(ci),
  $i.add(pi),
  $i.add(mi),
  $i.add(hi),
  $i.add(ui);
var Pi = "mdc-list-item--activated",
  Hi = "mdc-list-item",
  zi = "mdc-list-item--disabled",
  Bi = "mdc-list-item--selected",
  Ui = "mdc-list-item__text",
  Vi = "mdc-list-item__primary-text",
  Gi = "mdc-list";
((Ni = {})["" + Pi] = "mdc-list-item--activated"),
  (Ni["" + Hi] = "mdc-list-item"),
  (Ni["" + zi] = "mdc-list-item--disabled"),
  (Ni["" + Bi] = "mdc-list-item--selected"),
  (Ni["" + Vi] = "mdc-list-item__primary-text"),
  (Ni["" + Gi] = "mdc-list");
var ji =
    (((Di = {})["" + Pi] = "mdc-deprecated-list-item--activated"),
    (Di["" + Hi] = "mdc-deprecated-list-item"),
    (Di["" + zi] = "mdc-deprecated-list-item--disabled"),
    (Di["" + Bi] = "mdc-deprecated-list-item--selected"),
    (Di["" + Ui] = "mdc-deprecated-list-item__text"),
    (Di["" + Vi] = "mdc-deprecated-list-item__primary-text"),
    (Di["" + Gi] = "mdc-deprecated-list"),
    Di),
  Wi = {
    ACTION_EVENT: "MDCList:action",
    SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
    ARIA_CHECKED: "aria-checked",
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: "aria-current",
    ARIA_DISABLED: "aria-disabled",
    ARIA_ORIENTATION: "aria-orientation",
    ARIA_ORIENTATION_HORIZONTAL: "horizontal",
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: "aria-selected",
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:
      "\n    ." +
      Hi +
      " button:not(:disabled),\n    ." +
      Hi +
      " a,\n    ." +
      ji[Hi] +
      " button:not(:disabled),\n    ." +
      ji[Hi] +
      " a\n  ",
    DEPRECATED_SELECTOR: ".mdc-deprecated-list",
    FOCUSABLE_CHILD_ELEMENTS:
      "\n    ." +
      Hi +
      " button:not(:disabled),\n    ." +
      Hi +
      " a,\n    ." +
      Hi +
      ' input[type="radio"]:not(:disabled),\n    .' +
      Hi +
      ' input[type="checkbox"]:not(:disabled),\n    .' +
      ji[Hi] +
      " button:not(:disabled),\n    ." +
      ji[Hi] +
      " a,\n    ." +
      ji[Hi] +
      ' input[type="radio"]:not(:disabled),\n    .' +
      ji[Hi] +
      ' input[type="checkbox"]:not(:disabled)\n  ',
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
  },
  Xi = { UNSET_INDEX: -1, TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300 };
const qi = (e, t) => e - t,
  Yi = ["input", "button", "textarea", "select"];
function Ki(e) {
  return e instanceof Set;
}
const Qi = (e) => {
  const t = e === Xi.UNSET_INDEX ? new Set() : e;
  return Ki(t) ? new Set(t) : new Set([t]);
};
class Zi extends Se {
  constructor(e) {
    super(Object.assign(Object.assign({}, Zi.defaultAdapter), e)),
      (this.isMulti_ = !1),
      (this.wrapFocus_ = !1),
      (this.isVertical_ = !0),
      (this.selectedIndex_ = Xi.UNSET_INDEX),
      (this.focusedItemIndex_ = Xi.UNSET_INDEX),
      (this.useActivatedClass_ = !1),
      (this.ariaCurrentAttrValue_ = null);
  }
  static get strings() {
    return Wi;
  }
  static get numbers() {
    return Xi;
  }
  static get defaultAdapter() {
    return {
      focusItemAtIndex: () => {},
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      isFocusInsideList: () => !1,
      isRootFocused: () => !1,
      notifyAction: () => {},
      notifySelected: () => {},
      getSelectedStateForElementIndex: () => !1,
      setDisabledStateForElementIndex: () => {},
      getDisabledStateForElementIndex: () => !1,
      setSelectedStateForElementIndex: () => {},
      setActivatedStateForElementIndex: () => {},
      setTabIndexForElementIndex: () => {},
      setAttributeForElementIndex: () => {},
      getAttributeForElementIndex: () => null,
    };
  }
  setWrapFocus(e) {
    this.wrapFocus_ = e;
  }
  setMulti(e) {
    this.isMulti_ = e;
    const t = this.selectedIndex_;
    if (e) {
      if (!Ki(t)) {
        const e = t === Xi.UNSET_INDEX;
        this.selectedIndex_ = e ? new Set() : new Set([t]);
      }
    } else if (Ki(t))
      if (t.size) {
        const e = Array.from(t).sort(qi);
        this.selectedIndex_ = e[0];
      } else this.selectedIndex_ = Xi.UNSET_INDEX;
  }
  setVerticalOrientation(e) {
    this.isVertical_ = e;
  }
  setUseActivatedClass(e) {
    this.useActivatedClass_ = e;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(e) {
    this.isIndexValid_(e) &&
      (this.isMulti_
        ? this.setMultiSelectionAtIndex_(Qi(e))
        : this.setSingleSelectionAtIndex_(e));
  }
  handleFocusIn(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, 0);
  }
  handleFocusOut(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, -1),
      setTimeout(() => {
        this.adapter.isFocusInsideList() ||
          this.setTabindexToFirstSelectedItem_();
      }, 0);
  }
  handleKeydown(e, t, i) {
    const o = "ArrowLeft" === Mi(e),
      n = "ArrowUp" === Mi(e),
      r = "ArrowRight" === Mi(e),
      d = "ArrowDown" === Mi(e),
      a = "Home" === Mi(e),
      s = "End" === Mi(e),
      l = "Enter" === Mi(e),
      c = "Spacebar" === Mi(e);
    if (this.adapter.isRootFocused())
      return void (n || s
        ? (e.preventDefault(), this.focusLastElement())
        : (d || a) && (e.preventDefault(), this.focusFirstElement()));
    let p,
      m = this.adapter.getFocusedElementIndex();
    if (!(-1 === m && ((m = i), m < 0))) {
      if ((this.isVertical_ && d) || (!this.isVertical_ && r))
        this.preventDefaultEvent(e), (p = this.focusNextElement(m));
      else if ((this.isVertical_ && n) || (!this.isVertical_ && o))
        this.preventDefaultEvent(e), (p = this.focusPrevElement(m));
      else if (a) this.preventDefaultEvent(e), (p = this.focusFirstElement());
      else if (s) this.preventDefaultEvent(e), (p = this.focusLastElement());
      else if ((l || c) && t) {
        const t = e.target;
        if (t && "A" === t.tagName && l) return;
        this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(m, !0);
      }
      (this.focusedItemIndex_ = m),
        void 0 !== p &&
          (this.setTabindexAtIndex_(p), (this.focusedItemIndex_ = p));
    }
  }
  handleSingleSelection(e, t, i) {
    e !== Xi.UNSET_INDEX &&
      (this.setSelectedIndexOnAction_(e, t, i),
      this.setTabindexAtIndex_(e),
      (this.focusedItemIndex_ = e));
  }
  focusNextElement(e) {
    let t = e + 1;
    if (t >= this.adapter.getListItemCount()) {
      if (!this.wrapFocus_) return e;
      t = 0;
    }
    return this.adapter.focusItemAtIndex(t), t;
  }
  focusPrevElement(e) {
    let t = e - 1;
    if (t < 0) {
      if (!this.wrapFocus_) return e;
      t = this.adapter.getListItemCount() - 1;
    }
    return this.adapter.focusItemAtIndex(t), t;
  }
  focusFirstElement() {
    return this.adapter.focusItemAtIndex(0), 0;
  }
  focusLastElement() {
    const e = this.adapter.getListItemCount() - 1;
    return this.adapter.focusItemAtIndex(e), e;
  }
  setEnabled(e, t) {
    this.isIndexValid_(e) &&
      this.adapter.setDisabledStateForElementIndex(e, !t);
  }
  preventDefaultEvent(e) {
    const t = `${e.target.tagName}`.toLowerCase();
    -1 === Yi.indexOf(t) && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e &&
      (this.selectedIndex_ !== Xi.UNSET_INDEX &&
        (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1),
        this.useActivatedClass_ &&
          this.adapter.setActivatedStateForElementIndex(
            this.selectedIndex_,
            !1,
          )),
      t && this.adapter.setSelectedStateForElementIndex(e, !0),
      this.useActivatedClass_ &&
        this.adapter.setActivatedStateForElementIndex(e, !0),
      this.setAriaForSingleSelectionAtIndex_(e),
      (this.selectedIndex_ = e),
      this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const i = ((e, t) => {
      const i = Array.from(e),
        o = Array.from(t),
        n = { added: [], removed: [] },
        r = i.sort(qi),
        d = o.sort(qi);
      let a = 0,
        s = 0;
      for (; a < r.length || s < d.length; ) {
        const e = r[a],
          t = d[s];
        e !== t
          ? void 0 !== e && (void 0 === t || e < t)
            ? (n.removed.push(e), a++)
            : void 0 !== t && (void 0 === e || t < e) && (n.added.push(t), s++)
          : (a++, s++);
      }
      return n;
    })(Qi(this.selectedIndex_), e);
    if (i.removed.length || i.added.length) {
      for (const e of i.removed)
        t && this.adapter.setSelectedStateForElementIndex(e, !1),
          this.useActivatedClass_ &&
            this.adapter.setActivatedStateForElementIndex(e, !1);
      for (const e of i.added)
        t && this.adapter.setSelectedStateForElementIndex(e, !0),
          this.useActivatedClass_ &&
            this.adapter.setActivatedStateForElementIndex(e, !0);
      (this.selectedIndex_ = e), this.adapter.notifySelected(e, i);
    }
  }
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === Xi.UNSET_INDEX &&
      (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(
        e,
        Wi.ARIA_CURRENT,
      ));
    const t = null !== this.ariaCurrentAttrValue_,
      i = t ? Wi.ARIA_CURRENT : Wi.ARIA_SELECTED;
    this.selectedIndex_ !== Xi.UNSET_INDEX &&
      this.adapter.setAttributeForElementIndex(this.selectedIndex_, i, "false");
    const o = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, i, o);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === Xi.UNSET_INDEX && 0 !== e
      ? this.adapter.setTabIndexForElementIndex(0, -1)
      : this.focusedItemIndex_ >= 0 &&
        this.focusedItemIndex_ !== e &&
        this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1),
      this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    "number" == typeof this.selectedIndex_ &&
    this.selectedIndex_ !== Xi.UNSET_INDEX
      ? (e = this.selectedIndex_)
      : Ki(this.selectedIndex_) &&
        this.selectedIndex_.size > 0 &&
        (e = Math.min(...this.selectedIndex_)),
      this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error(
          "MDCListFoundation: Array of index is only supported for checkbox based list",
        );
      if (0 === e.size) return !0;
      {
        let t = !1;
        for (const i of e) if (((t = this.isIndexInRange_(i)), t)) break;
        return t;
      }
    }
    if ("number" == typeof e) {
      if (this.isMulti_)
        throw new Error(
          "MDCListFoundation: Expected array of index for checkbox based list but got number: " +
            e,
        );
      return e === Xi.UNSET_INDEX || this.isIndexInRange_(e);
    }
    return !1;
  }
  isIndexInRange_(e) {
    const t = this.adapter.getListItemCount();
    return e >= 0 && e < t;
  }
  setSelectedIndexOnAction_(e, t, i) {
    if (this.adapter.getDisabledStateForElementIndex(e)) return;
    let o = e;
    if ((this.isMulti_ && (o = new Set([e])), this.isIndexValid_(o))) {
      if (this.isMulti_) this.toggleMultiAtIndex(e, i, t);
      else if (t || i) this.setSingleSelectionAtIndex_(e, t);
      else {
        this.selectedIndex_ === e &&
          this.setSingleSelectionAtIndex_(Xi.UNSET_INDEX);
      }
      t && this.adapter.notifyAction(e);
    }
  }
  toggleMultiAtIndex(e, t, i = !0) {
    let o = !1;
    o = void 0 === t ? !this.adapter.getSelectedStateForElementIndex(e) : t;
    const n = Qi(this.selectedIndex_);
    o ? n.add(e) : n.delete(e), this.setMultiSelectionAtIndex_(n, i);
  }
}
const Ji = (e) => e.hasAttribute("mwc-list-item");
function eo() {
  const e = this.itemsReadyResolver;
  (this.itemsReady = new Promise((e) => (this.itemsReadyResolver = e))), e();
}
class to extends Me {
  constructor() {
    super(),
      (this.mdcAdapter = null),
      (this.mdcFoundationClass = Zi),
      (this.activatable = !1),
      (this.multi = !1),
      (this.wrapFocus = !1),
      (this.itemRoles = null),
      (this.innerRole = null),
      (this.innerAriaLabel = null),
      (this.rootTabbable = !1),
      (this.previousTabindex = null),
      (this.noninteractive = !1),
      (this.itemsReadyResolver = () => {}),
      (this.itemsReady = Promise.resolve([])),
      (this.items_ = []);
    const e = (function (e, t = 50) {
      let i;
      return function (o = !0) {
        clearTimeout(i),
          (i = setTimeout(() => {
            e(o);
          }, t));
      };
    })(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      eo.call(this), e(t);
    };
  }
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.itemsReady, e;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var e;
    const t = null !== (e = this.assignedElements) && void 0 !== e ? e : [],
      i = [];
    for (const e of t)
      Ji(e) && (i.push(e), (e._managingList = this)),
        e.hasAttribute("divider") &&
          !e.hasAttribute("role") &&
          e.setAttribute("role", "separator");
    this.items_ = i;
    const o = new Set();
    if (
      (this.items_.forEach((e, t) => {
        this.itemRoles
          ? e.setAttribute("role", this.itemRoles)
          : e.removeAttribute("role"),
          e.selected && o.add(t);
      }),
      this.multi)
    )
      this.select(o);
    else {
      const e = o.size ? o.entries().next().value[1] : -1;
      this.select(e);
    }
    const n = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(n);
  }
  get selected() {
    const e = this.index;
    if (!Ki(e)) return -1 === e ? null : this.items[e];
    const t = [];
    for (const i of e) t.push(this.items[i]);
    return t;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = null === this.innerRole ? void 0 : this.innerRole,
      t = null === this.innerAriaLabel ? void 0 : this.innerAriaLabel,
      i = this.rootTabbable ? "0" : "-1";
    return B`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${lt(e)}"
          aria-label="${lt(t)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
  renderPlaceholder() {
    var e;
    const t = null !== (e = this.assignedElements) && void 0 !== e ? e : [];
    return void 0 !== this.emptyMessage && 0 === t.length
      ? B`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `
      : null;
  }
  firstUpdated() {
    super.firstUpdated(),
      this.items.length ||
        (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusIn(e, t);
    }
  }
  onFocusOut(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusOut(e, t);
    }
  }
  onKeydown(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e),
        i = e.target,
        o = Ji(i);
      this.mdcFoundation.handleKeydown(e, o, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (-1 === t && (this.layout(), (t = this.getIndexOfTarget(e)), -1 === t))
        return;
      if (this.items[t].disabled) return;
      const i = e.detail.selected,
        o = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, "interaction" === o, i),
        e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items,
      i = e.composedPath();
    for (const e of i) {
      let i = -1;
      if ((ke(e) && Ji(e) && (i = t.indexOf(e)), -1 !== i)) return i;
    }
    return -1;
  }
  createAdapter() {
    return (
      (this.mdcAdapter = {
        getListItemCount: () => (this.mdcRoot ? this.items.length : 0),
        getFocusedElementIndex: this.getFocusedItemIndex,
        getAttributeForElementIndex: (e, t) => {
          if (!this.mdcRoot) return "";
          const i = this.items[e];
          return i ? i.getAttribute(t) : "";
        },
        setAttributeForElementIndex: (e, t, i) => {
          if (!this.mdcRoot) return;
          const o = this.items[e];
          o && o.setAttribute(t, i);
        },
        focusItemAtIndex: (e) => {
          const t = this.items[e];
          t && t.focus();
        },
        setTabIndexForElementIndex: (e, t) => {
          const i = this.items[e];
          i && (i.tabindex = t);
        },
        notifyAction: (e) => {
          const t = { bubbles: !0, composed: !0 };
          t.detail = { index: e };
          const i = new CustomEvent("action", t);
          this.dispatchEvent(i);
        },
        notifySelected: (e, t) => {
          const i = { bubbles: !0, composed: !0 };
          i.detail = { index: e, diff: t };
          const o = new CustomEvent("selected", i);
          this.dispatchEvent(o);
        },
        isFocusInsideList: () => $e(this),
        isRootFocused: () => {
          const e = this.mdcRoot;
          return e.getRootNode().activeElement === e;
        },
        setDisabledStateForElementIndex: (e, t) => {
          const i = this.items[e];
          i && (i.disabled = t);
        },
        getDisabledStateForElementIndex: (e) => {
          const t = this.items[e];
          return !!t && t.disabled;
        },
        setSelectedStateForElementIndex: (e, t) => {
          const i = this.items[e];
          i && (i.selected = t);
        },
        getSelectedStateForElementIndex: (e) => {
          const t = this.items[e];
          return !!t && t.selected;
        },
        setActivatedStateForElementIndex: (e, t) => {
          const i = this.items[e];
          i && (i.activated = t);
        },
      }),
      this.mdcAdapter
    );
  }
  selectUi(e, t = !1) {
    const i = this.items[e];
    i && ((i.selected = !0), (i.activated = t));
  }
  deselectUi(e) {
    const t = this.items[e];
    t && ((t.selected = !1), (t.activated = !1));
  }
  select(e) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
  }
  toggle(e, t) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(e, t);
  }
  onListItemConnected(e) {
    const t = e.target;
    this.layout(-1 === this.items.indexOf(t));
  }
  layout(e = !0) {
    e && this.updateItems();
    const t = this.items[0];
    for (const e of this.items) e.tabindex = -1;
    t &&
      (this.noninteractive
        ? this.previousTabindex || (this.previousTabindex = t)
        : (t.tabindex = 0)),
      this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot) return -1;
    if (!this.items.length) return -1;
    const e = De();
    if (!e.length) return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const i = e[t];
      if (Ji(i)) return this.items.indexOf(i);
    }
    return -1;
  }
  focusItemAtIndex(e) {
    for (const e of this.items)
      if (0 === e.tabindex) {
        e.tabindex = -1;
        break;
      }
    (this.items[e].tabindex = 0), this.items[e].focus();
  }
  focus() {
    const e = this.mdcRoot;
    e && e.focus();
  }
  blur() {
    const e = this.mdcRoot;
    e && e.blur();
  }
}
n([pe({ type: String })], to.prototype, "emptyMessage", void 0),
  n([fe(".mdc-deprecated-list")], to.prototype, "mdcRoot", void 0),
  n([_e("", !0, "*")], to.prototype, "assignedElements", void 0),
  n([_e("", !0, '[tabindex="0"]')], to.prototype, "tabbableElements", void 0),
  n(
    [
      pe({ type: Boolean }),
      Pe(function (e) {
        this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
      }),
    ],
    to.prototype,
    "activatable",
    void 0,
  ),
  n(
    [
      pe({ type: Boolean }),
      Pe(function (e, t) {
        this.mdcFoundation && this.mdcFoundation.setMulti(e),
          void 0 !== t && this.layout();
      }),
    ],
    to.prototype,
    "multi",
    void 0,
  ),
  n(
    [
      pe({ type: Boolean }),
      Pe(function (e) {
        this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
      }),
    ],
    to.prototype,
    "wrapFocus",
    void 0,
  ),
  n(
    [
      pe({ type: String }),
      Pe(function (e, t) {
        void 0 !== t && this.updateItems();
      }),
    ],
    to.prototype,
    "itemRoles",
    void 0,
  ),
  n([pe({ type: String })], to.prototype, "innerRole", void 0),
  n([pe({ type: String })], to.prototype, "innerAriaLabel", void 0),
  n([pe({ type: Boolean })], to.prototype, "rootTabbable", void 0),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      Pe(function (e) {
        var t, i;
        if (e) {
          const e =
            null !==
              (i =
                null === (t = this.tabbableElements) || void 0 === t
                  ? void 0
                  : t[0]) && void 0 !== i
              ? i
              : null;
          (this.previousTabindex = e), e && e.setAttribute("tabindex", "-1");
        } else
          !e &&
            this.previousTabindex &&
            (this.previousTabindex.setAttribute("tabindex", "0"),
            (this.previousTabindex = null));
      }),
    ],
    to.prototype,
    "noninteractive",
    void 0,
  );
const io = p`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
let oo = class extends to {};
(oo.styles = [io]), (oo = n([le("mwc-list")], oo));
var no,
  ro,
  ao = {
    ANCHOR: "mdc-menu-surface--anchor",
    ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
    ANIMATING_OPEN: "mdc-menu-surface--animating-open",
    FIXED: "mdc-menu-surface--fixed",
    IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
    OPEN: "mdc-menu-surface--open",
    ROOT: "mdc-menu-surface",
  },
  so = {
    CLOSED_EVENT: "MDCMenuSurface:closed",
    CLOSING_EVENT: "MDCMenuSurface:closing",
    OPENED_EVENT: "MDCMenuSurface:opened",
    OPENING_EVENT: "MDCMenuSurface:opening",
    FOCUSABLE_ELEMENTS: [
      "button:not(:disabled)",
      '[href]:not([aria-disabled="true"])',
      "input:not(:disabled)",
      "select:not(:disabled)",
      "textarea:not(:disabled)",
      '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    ].join(", "),
  },
  lo = {
    TRANSITION_OPEN_DURATION: 120,
    TRANSITION_CLOSE_DURATION: 75,
    MARGIN_TO_EDGE: 32,
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
    TOUCH_EVENT_WAIT_MS: 30,
  };
!(function (e) {
  (e[(e.BOTTOM = 1)] = "BOTTOM"),
    (e[(e.CENTER = 2)] = "CENTER"),
    (e[(e.RIGHT = 4)] = "RIGHT"),
    (e[(e.FLIP_RTL = 8)] = "FLIP_RTL");
})(no || (no = {})),
  (function (e) {
    (e[(e.TOP_LEFT = 0)] = "TOP_LEFT"),
      (e[(e.TOP_RIGHT = 4)] = "TOP_RIGHT"),
      (e[(e.BOTTOM_LEFT = 1)] = "BOTTOM_LEFT"),
      (e[(e.BOTTOM_RIGHT = 5)] = "BOTTOM_RIGHT"),
      (e[(e.TOP_START = 8)] = "TOP_START"),
      (e[(e.TOP_END = 12)] = "TOP_END"),
      (e[(e.BOTTOM_START = 9)] = "BOTTOM_START"),
      (e[(e.BOTTOM_END = 13)] = "BOTTOM_END");
  })(ro || (ro = {}));
var co = (function (e) {
    function t(i) {
      var n = e.call(this, o(o({}, t.defaultAdapter), i)) || this;
      return (
        (n.isSurfaceOpen = !1),
        (n.isQuickOpen = !1),
        (n.isHoistedElement = !1),
        (n.isFixedPosition = !1),
        (n.isHorizontallyCenteredOnViewport = !1),
        (n.maxHeight = 0),
        (n.openBottomBias = 0),
        (n.openAnimationEndTimerId = 0),
        (n.closeAnimationEndTimerId = 0),
        (n.animationRequestId = 0),
        (n.anchorCorner = ro.TOP_START),
        (n.originCorner = ro.TOP_START),
        (n.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }),
        (n.position = { x: 0, y: 0 }),
        n
      );
    }
    return (
      i(t, e),
      Object.defineProperty(t, "cssClasses", {
        get: function () {
          return ao;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "strings", {
        get: function () {
          return so;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "numbers", {
        get: function () {
          return lo;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "Corner", {
        get: function () {
          return ro;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !1;
            },
            hasAnchor: function () {
              return !1;
            },
            isElementInContainer: function () {
              return !1;
            },
            isFocused: function () {
              return !1;
            },
            isRtl: function () {
              return !1;
            },
            getInnerDimensions: function () {
              return { height: 0, width: 0 };
            },
            getAnchorDimensions: function () {
              return null;
            },
            getWindowDimensions: function () {
              return { height: 0, width: 0 };
            },
            getBodyDimensions: function () {
              return { height: 0, width: 0 };
            },
            getWindowScroll: function () {
              return { x: 0, y: 0 };
            },
            setPosition: function () {},
            setMaxHeight: function () {},
            setTransformOrigin: function () {},
            saveFocus: function () {},
            restoreFocus: function () {},
            notifyClose: function () {},
            notifyClosing: function () {},
            notifyOpen: function () {},
            notifyOpening: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.init = function () {
        var e = t.cssClasses,
          i = e.ROOT,
          o = e.OPEN;
        if (!this.adapter.hasClass(i))
          throw new Error(i + " class required in root element.");
        this.adapter.hasClass(o) && (this.isSurfaceOpen = !0);
      }),
      (t.prototype.destroy = function () {
        clearTimeout(this.openAnimationEndTimerId),
          clearTimeout(this.closeAnimationEndTimerId),
          cancelAnimationFrame(this.animationRequestId);
      }),
      (t.prototype.setAnchorCorner = function (e) {
        this.anchorCorner = e;
      }),
      (t.prototype.flipCornerHorizontally = function () {
        this.originCorner = this.originCorner ^ no.RIGHT;
      }),
      (t.prototype.setAnchorMargin = function (e) {
        (this.anchorMargin.top = e.top || 0),
          (this.anchorMargin.right = e.right || 0),
          (this.anchorMargin.bottom = e.bottom || 0),
          (this.anchorMargin.left = e.left || 0);
      }),
      (t.prototype.setIsHoisted = function (e) {
        this.isHoistedElement = e;
      }),
      (t.prototype.setFixedPosition = function (e) {
        this.isFixedPosition = e;
      }),
      (t.prototype.isFixed = function () {
        return this.isFixedPosition;
      }),
      (t.prototype.setAbsolutePosition = function (e, t) {
        (this.position.x = this.isFinite(e) ? e : 0),
          (this.position.y = this.isFinite(t) ? t : 0);
      }),
      (t.prototype.setIsHorizontallyCenteredOnViewport = function (e) {
        this.isHorizontallyCenteredOnViewport = e;
      }),
      (t.prototype.setQuickOpen = function (e) {
        this.isQuickOpen = e;
      }),
      (t.prototype.setMaxHeight = function (e) {
        this.maxHeight = e;
      }),
      (t.prototype.setOpenBottomBias = function (e) {
        this.openBottomBias = e;
      }),
      (t.prototype.isOpen = function () {
        return this.isSurfaceOpen;
      }),
      (t.prototype.open = function () {
        var e = this;
        this.isSurfaceOpen ||
          (this.adapter.notifyOpening(),
          this.adapter.saveFocus(),
          this.isQuickOpen
            ? ((this.isSurfaceOpen = !0),
              this.adapter.addClass(t.cssClasses.OPEN),
              (this.dimensions = this.adapter.getInnerDimensions()),
              this.autoposition(),
              this.adapter.notifyOpen())
            : (this.adapter.addClass(t.cssClasses.ANIMATING_OPEN),
              (this.animationRequestId = requestAnimationFrame(function () {
                (e.dimensions = e.adapter.getInnerDimensions()),
                  e.autoposition(),
                  e.adapter.addClass(t.cssClasses.OPEN),
                  (e.openAnimationEndTimerId = setTimeout(function () {
                    (e.openAnimationEndTimerId = 0),
                      e.adapter.removeClass(t.cssClasses.ANIMATING_OPEN),
                      e.adapter.notifyOpen();
                  }, lo.TRANSITION_OPEN_DURATION));
              })),
              (this.isSurfaceOpen = !0)));
      }),
      (t.prototype.close = function (e) {
        var i = this;
        if ((void 0 === e && (e = !1), this.isSurfaceOpen)) {
          if ((this.adapter.notifyClosing(), this.isQuickOpen))
            return (
              (this.isSurfaceOpen = !1),
              e || this.maybeRestoreFocus(),
              this.adapter.removeClass(t.cssClasses.OPEN),
              this.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW),
              void this.adapter.notifyClose()
            );
          this.adapter.addClass(t.cssClasses.ANIMATING_CLOSED),
            requestAnimationFrame(function () {
              i.adapter.removeClass(t.cssClasses.OPEN),
                i.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW),
                (i.closeAnimationEndTimerId = setTimeout(function () {
                  (i.closeAnimationEndTimerId = 0),
                    i.adapter.removeClass(t.cssClasses.ANIMATING_CLOSED),
                    i.adapter.notifyClose();
                }, lo.TRANSITION_CLOSE_DURATION));
            }),
            (this.isSurfaceOpen = !1),
            e || this.maybeRestoreFocus();
        }
      }),
      (t.prototype.handleBodyClick = function (e) {
        var t = e.target;
        this.adapter.isElementInContainer(t) || this.close();
      }),
      (t.prototype.handleKeydown = function (e) {
        var t = e.keyCode;
        ("Escape" === e.key || 27 === t) && this.close();
      }),
      (t.prototype.autoposition = function () {
        var e;
        this.measurements = this.getAutoLayoutmeasurements();
        var i = this.getoriginCorner(),
          o = this.getMenuSurfaceMaxHeight(i),
          n = this.hasBit(i, no.BOTTOM) ? "bottom" : "top",
          r = this.hasBit(i, no.RIGHT) ? "right" : "left",
          d = this.getHorizontalOriginOffset(i),
          a = this.getVerticalOriginOffset(i),
          s = this.measurements,
          l = s.anchorSize,
          c = s.surfaceSize,
          p = (((e = {})[r] = d), (e[n] = a), e);
        l.width / c.width > lo.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO &&
          (r = "center"),
          (this.isHoistedElement || this.isFixedPosition) &&
            this.adjustPositionForHoistedElement(p),
          this.adapter.setTransformOrigin(r + " " + n),
          this.adapter.setPosition(p),
          this.adapter.setMaxHeight(o ? o + "px" : ""),
          this.hasBit(i, no.BOTTOM) ||
            this.adapter.addClass(t.cssClasses.IS_OPEN_BELOW);
      }),
      (t.prototype.getAutoLayoutmeasurements = function () {
        var e = this.adapter.getAnchorDimensions(),
          t = this.adapter.getBodyDimensions(),
          i = this.adapter.getWindowDimensions(),
          o = this.adapter.getWindowScroll();
        return (
          e ||
            (e = {
              top: this.position.y,
              right: this.position.x,
              bottom: this.position.y,
              left: this.position.x,
              width: 0,
              height: 0,
            }),
          {
            anchorSize: e,
            bodySize: t,
            surfaceSize: this.dimensions,
            viewportDistance: {
              top: e.top,
              right: i.width - e.right,
              bottom: i.height - e.bottom,
              left: e.left,
            },
            viewportSize: i,
            windowScroll: o,
          }
        );
      }),
      (t.prototype.getoriginCorner = function () {
        var e,
          i,
          o = this.originCorner,
          n = this.measurements,
          r = n.viewportDistance,
          d = n.anchorSize,
          a = n.surfaceSize,
          s = t.numbers.MARGIN_TO_EDGE;
        this.hasBit(this.anchorCorner, no.BOTTOM)
          ? ((e = r.top - s + this.anchorMargin.bottom),
            (i = r.bottom - s - this.anchorMargin.bottom))
          : ((e = r.top - s + this.anchorMargin.top),
            (i = r.bottom - s + d.height - this.anchorMargin.top)),
          !(i - a.height > 0) &&
            e > i + this.openBottomBias &&
            (o = this.setBit(o, no.BOTTOM));
        var l,
          c,
          p = this.adapter.isRtl(),
          m = this.hasBit(this.anchorCorner, no.FLIP_RTL),
          h =
            this.hasBit(this.anchorCorner, no.RIGHT) ||
            this.hasBit(o, no.RIGHT),
          u = !1;
        (u = p && m ? !h : h)
          ? ((l = r.left + d.width + this.anchorMargin.right),
            (c = r.right - this.anchorMargin.right))
          : ((l = r.left + this.anchorMargin.left),
            (c = r.right + d.width - this.anchorMargin.left));
        var f = l - a.width > 0,
          g = c - a.width > 0,
          b = this.hasBit(o, no.FLIP_RTL) && this.hasBit(o, no.RIGHT);
        return (
          (g && b && p) || (!f && b)
            ? (o = this.unsetBit(o, no.RIGHT))
            : ((f && u && p) || (f && !u && h) || (!g && l >= c)) &&
              (o = this.setBit(o, no.RIGHT)),
          o
        );
      }),
      (t.prototype.getMenuSurfaceMaxHeight = function (e) {
        if (this.maxHeight > 0) return this.maxHeight;
        var i = this.measurements.viewportDistance,
          o = 0,
          n = this.hasBit(e, no.BOTTOM),
          r = this.hasBit(this.anchorCorner, no.BOTTOM),
          d = t.numbers.MARGIN_TO_EDGE;
        return (
          n
            ? ((o = i.top + this.anchorMargin.top - d),
              r || (o += this.measurements.anchorSize.height))
            : ((o =
                i.bottom -
                this.anchorMargin.bottom +
                this.measurements.anchorSize.height -
                d),
              r && (o -= this.measurements.anchorSize.height)),
          o
        );
      }),
      (t.prototype.getHorizontalOriginOffset = function (e) {
        var t = this.measurements.anchorSize,
          i = this.hasBit(e, no.RIGHT),
          o = this.hasBit(this.anchorCorner, no.RIGHT);
        if (i) {
          var n = o
            ? t.width - this.anchorMargin.left
            : this.anchorMargin.right;
          return this.isHoistedElement || this.isFixedPosition
            ? n -
                (this.measurements.viewportSize.width -
                  this.measurements.bodySize.width)
            : n;
        }
        return o ? t.width - this.anchorMargin.right : this.anchorMargin.left;
      }),
      (t.prototype.getVerticalOriginOffset = function (e) {
        var t = this.measurements.anchorSize,
          i = this.hasBit(e, no.BOTTOM),
          o = this.hasBit(this.anchorCorner, no.BOTTOM);
        return i
          ? o
            ? t.height - this.anchorMargin.top
            : -this.anchorMargin.bottom
          : o
            ? t.height + this.anchorMargin.bottom
            : this.anchorMargin.top;
      }),
      (t.prototype.adjustPositionForHoistedElement = function (e) {
        var t,
          i,
          o = this.measurements,
          n = o.windowScroll,
          d = o.viewportDistance,
          a = o.surfaceSize,
          s = o.viewportSize,
          l = Object.keys(e);
        try {
          for (var c = r(l), p = c.next(); !p.done; p = c.next()) {
            var m = p.value,
              h = e[m] || 0;
            !this.isHorizontallyCenteredOnViewport ||
            ("left" !== m && "right" !== m)
              ? ((h += d[m]),
                this.isFixedPosition ||
                  ("top" === m
                    ? (h += n.y)
                    : "bottom" === m
                      ? (h -= n.y)
                      : "left" === m
                        ? (h += n.x)
                        : (h -= n.x)),
                (e[m] = h))
              : (e[m] = (s.width - a.width) / 2);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            p && !p.done && (i = c.return) && i.call(c);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (t.prototype.maybeRestoreFocus = function () {
        var e = this,
          t = this.adapter.isFocused(),
          i = this.adapter.getOwnerDocument
            ? this.adapter.getOwnerDocument()
            : document,
          o =
            i.activeElement &&
            this.adapter.isElementInContainer(i.activeElement);
        (t || o) &&
          setTimeout(function () {
            e.adapter.restoreFocus();
          }, lo.TOUCH_EVENT_WAIT_MS);
      }),
      (t.prototype.hasBit = function (e, t) {
        return Boolean(e & t);
      }),
      (t.prototype.setBit = function (e, t) {
        return e | t;
      }),
      (t.prototype.unsetBit = function (e, t) {
        return e ^ t;
      }),
      (t.prototype.isFinite = function (e) {
        return "number" == typeof e && isFinite(e);
      }),
      t
    );
  })(Se),
  po = co;
const mo = {
  TOP_LEFT: ro.TOP_LEFT,
  TOP_RIGHT: ro.TOP_RIGHT,
  BOTTOM_LEFT: ro.BOTTOM_LEFT,
  BOTTOM_RIGHT: ro.BOTTOM_RIGHT,
  TOP_START: ro.TOP_START,
  TOP_END: ro.TOP_END,
  BOTTOM_START: ro.BOTTOM_START,
  BOTTOM_END: ro.BOTTOM_END,
};
class ho extends Me {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = po),
      (this.absolute = !1),
      (this.fullwidth = !1),
      (this.fixed = !1),
      (this.x = null),
      (this.y = null),
      (this.quick = !1),
      (this.open = !1),
      (this.stayOpenOnBodyClick = !1),
      (this.bitwiseCorner = ro.TOP_START),
      (this.previousMenuCorner = null),
      (this.menuCorner = "START"),
      (this.corner = "TOP_START"),
      (this.styleTop = ""),
      (this.styleLeft = ""),
      (this.styleRight = ""),
      (this.styleBottom = ""),
      (this.styleMaxHeight = ""),
      (this.styleTransformOrigin = ""),
      (this.anchor = null),
      (this.previouslyFocused = null),
      (this.previousAnchor = null),
      (this.onBodyClickBound = () => {});
  }
  render() {
    return this.renderSurface();
  }
  renderSurface() {
    const e = this.getRootClasses(),
      t = this.getRootStyles();
    return B`
      <div
          class=${Ge(e)}
          style="${ot(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        ${this.renderContent()}
      </div>`;
  }
  getRootClasses() {
    return {
      "mdc-menu-surface": !0,
      "mdc-menu-surface--fixed": this.fixed,
      "mdc-menu-surface--fullwidth": this.fullwidth,
    };
  }
  getRootStyles() {
    return {
      top: this.styleTop,
      left: this.styleLeft,
      right: this.styleRight,
      bottom: this.styleBottom,
      "max-height": this.styleMaxHeight,
      "transform-origin": this.styleTransformOrigin,
    };
  }
  renderContent() {
    return B`<slot></slot>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Le(this.mdcRoot)), {
      hasAnchor: () => !!this.anchor,
      notifyClose: () => {
        const e = new CustomEvent("closed", { bubbles: !0, composed: !0 });
        (this.open = !1), this.mdcRoot.dispatchEvent(e);
      },
      notifyClosing: () => {
        const e = new CustomEvent("closing", { bubbles: !0, composed: !0 });
        this.mdcRoot.dispatchEvent(e);
      },
      notifyOpen: () => {
        const e = new CustomEvent("opened", { bubbles: !0, composed: !0 });
        (this.open = !0), this.mdcRoot.dispatchEvent(e);
      },
      notifyOpening: () => {
        const e = new CustomEvent("opening", { bubbles: !0, composed: !0 });
        this.mdcRoot.dispatchEvent(e);
      },
      isElementInContainer: () => !1,
      isRtl: () =>
        !!this.mdcRoot && "rtl" === getComputedStyle(this.mdcRoot).direction,
      setTransformOrigin: (e) => {
        this.mdcRoot && (this.styleTransformOrigin = e);
      },
      isFocused: () => $e(this),
      saveFocus: () => {
        const e = De(),
          t = e.length;
        t || (this.previouslyFocused = null),
          (this.previouslyFocused = e[t - 1]);
      },
      restoreFocus: () => {
        this.previouslyFocused &&
          "focus" in this.previouslyFocused &&
          this.previouslyFocused.focus();
      },
      getInnerDimensions: () => {
        const e = this.mdcRoot;
        return e
          ? { width: e.offsetWidth, height: e.offsetHeight }
          : { width: 0, height: 0 };
      },
      getAnchorDimensions: () => {
        const e = this.anchor;
        return e ? e.getBoundingClientRect() : null;
      },
      getBodyDimensions: () => ({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      }),
      getWindowDimensions: () => ({
        width: window.innerWidth,
        height: window.innerHeight,
      }),
      getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
      setPosition: (e) => {
        this.mdcRoot &&
          ((this.styleLeft = "left" in e ? `${e.left}px` : ""),
          (this.styleRight = "right" in e ? `${e.right}px` : ""),
          (this.styleTop = "top" in e ? `${e.top}px` : ""),
          (this.styleBottom = "bottom" in e ? `${e.bottom}px` : ""));
      },
      setMaxHeight: async (e) => {
        this.mdcRoot &&
          ((this.styleMaxHeight = e),
          await this.updateComplete,
          (this.styleMaxHeight = `var(--mdc-menu-max-height, ${e})`));
      },
    });
  }
  onKeydown(e) {
    this.mdcFoundation && this.mdcFoundation.handleKeydown(e);
  }
  onBodyClick(e) {
    if (this.stayOpenOnBodyClick) return;
    -1 === e.composedPath().indexOf(this) && this.close();
  }
  registerBodyClick() {
    (this.onBodyClickBound = this.onBodyClick.bind(this)),
      document.body.addEventListener("click", this.onBodyClickBound, {
        passive: !0,
        capture: !0,
      });
  }
  deregisterBodyClick() {
    document.body.removeEventListener("click", this.onBodyClickBound, {
      capture: !0,
    });
  }
  onOpenChanged(e, t) {
    this.mdcFoundation &&
      (e
        ? this.mdcFoundation.open()
        : void 0 !== t && this.mdcFoundation.close());
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
}
n([fe(".mdc-menu-surface")], ho.prototype, "mdcRoot", void 0),
  n([fe("slot")], ho.prototype, "slotElement", void 0),
  n(
    [
      pe({ type: Boolean }),
      Pe(function (e) {
        this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(e);
      }),
    ],
    ho.prototype,
    "absolute",
    void 0,
  ),
  n([pe({ type: Boolean })], ho.prototype, "fullwidth", void 0),
  n(
    [
      pe({ type: Boolean }),
      Pe(function (e) {
        this.mdcFoundation &&
          !this.absolute &&
          this.mdcFoundation.setFixedPosition(e);
      }),
    ],
    ho.prototype,
    "fixed",
    void 0,
  ),
  n(
    [
      pe({ type: Number }),
      Pe(function (e) {
        this.mdcFoundation &&
          null !== this.y &&
          null !== e &&
          (this.mdcFoundation.setAbsolutePosition(e, this.y),
          this.mdcFoundation.setAnchorMargin({
            left: e,
            top: this.y,
            right: -e,
            bottom: this.y,
          }));
      }),
    ],
    ho.prototype,
    "x",
    void 0,
  ),
  n(
    [
      pe({ type: Number }),
      Pe(function (e) {
        this.mdcFoundation &&
          null !== this.x &&
          null !== e &&
          (this.mdcFoundation.setAbsolutePosition(this.x, e),
          this.mdcFoundation.setAnchorMargin({
            left: this.x,
            top: e,
            right: -this.x,
            bottom: e,
          }));
      }),
    ],
    ho.prototype,
    "y",
    void 0,
  ),
  n(
    [
      pe({ type: Boolean }),
      Pe(function (e) {
        this.mdcFoundation && this.mdcFoundation.setQuickOpen(e);
      }),
    ],
    ho.prototype,
    "quick",
    void 0,
  ),
  n(
    [
      pe({ type: Boolean, reflect: !0 }),
      Pe(function (e, t) {
        this.onOpenChanged(e, t);
      }),
    ],
    ho.prototype,
    "open",
    void 0,
  ),
  n([pe({ type: Boolean })], ho.prototype, "stayOpenOnBodyClick", void 0),
  n(
    [
      me(),
      Pe(function (e) {
        this.mdcFoundation && this.mdcFoundation.setAnchorCorner(e);
      }),
    ],
    ho.prototype,
    "bitwiseCorner",
    void 0,
  ),
  n(
    [
      pe({ type: String }),
      Pe(function (e) {
        if (this.mdcFoundation) {
          const t = "START" === e || "END" === e,
            i = null === this.previousMenuCorner,
            o = !i && e !== this.previousMenuCorner;
          t &&
            (o || (i && "END" === e)) &&
            ((this.bitwiseCorner = this.bitwiseCorner ^ no.RIGHT),
            this.mdcFoundation.flipCornerHorizontally(),
            (this.previousMenuCorner = e));
        }
      }),
    ],
    ho.prototype,
    "menuCorner",
    void 0,
  ),
  n(
    [
      pe({ type: String }),
      Pe(function (e) {
        if (this.mdcFoundation && e) {
          let t = mo[e];
          "END" === this.menuCorner && (t ^= no.RIGHT),
            (this.bitwiseCorner = t);
        }
      }),
    ],
    ho.prototype,
    "corner",
    void 0,
  ),
  n([me()], ho.prototype, "styleTop", void 0),
  n([me()], ho.prototype, "styleLeft", void 0),
  n([me()], ho.prototype, "styleRight", void 0),
  n([me()], ho.prototype, "styleBottom", void 0),
  n([me()], ho.prototype, "styleMaxHeight", void 0),
  n([me()], ho.prototype, "styleTransformOrigin", void 0);
const uo = p`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
let fo = class extends ho {};
(fo.styles = [uo]), (fo = n([le("mwc-menu-surface")], fo));
var go,
  bo = {
    MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
    MENU_SELECTION_GROUP: "mdc-menu__selection-group",
    ROOT: "mdc-menu",
  },
  xo = {
    ARIA_CHECKED_ATTR: "aria-checked",
    ARIA_DISABLED_ATTR: "aria-disabled",
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
    SELECTED_EVENT: "MDCMenu:selected",
    SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus",
  },
  _o = { FOCUS_ROOT_INDEX: -1 };
!(function (e) {
  (e[(e.NONE = 0)] = "NONE"),
    (e[(e.LIST_ROOT = 1)] = "LIST_ROOT"),
    (e[(e.FIRST_ITEM = 2)] = "FIRST_ITEM"),
    (e[(e.LAST_ITEM = 3)] = "LAST_ITEM");
})(go || (go = {}));
var vo = (function (e) {
  function t(i) {
    var n = e.call(this, o(o({}, t.defaultAdapter), i)) || this;
    return (
      (n.closeAnimationEndTimerId = 0),
      (n.defaultFocusState = go.LIST_ROOT),
      (n.selectedIndex = -1),
      n
    );
  }
  return (
    i(t, e),
    Object.defineProperty(t, "cssClasses", {
      get: function () {
        return bo;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t, "strings", {
      get: function () {
        return xo;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t, "numbers", {
      get: function () {
        return _o;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t, "defaultAdapter", {
      get: function () {
        return {
          addClassToElementAtIndex: function () {},
          removeClassFromElementAtIndex: function () {},
          addAttributeToElementAtIndex: function () {},
          removeAttributeFromElementAtIndex: function () {},
          getAttributeFromElementAtIndex: function () {
            return null;
          },
          elementContainsClass: function () {
            return !1;
          },
          closeSurface: function () {},
          getElementIndex: function () {
            return -1;
          },
          notifySelected: function () {},
          getMenuItemCount: function () {
            return 0;
          },
          focusItemAtIndex: function () {},
          focusListRoot: function () {},
          getSelectedSiblingOfItemAtIndex: function () {
            return -1;
          },
          isSelectableItemAtIndex: function () {
            return !1;
          },
        };
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.destroy = function () {
      this.closeAnimationEndTimerId &&
        clearTimeout(this.closeAnimationEndTimerId),
        this.adapter.closeSurface();
    }),
    (t.prototype.handleKeydown = function (e) {
      var t = e.key,
        i = e.keyCode;
      ("Tab" === t || 9 === i) && this.adapter.closeSurface(!0);
    }),
    (t.prototype.handleItemAction = function (e) {
      var t = this,
        i = this.adapter.getElementIndex(e);
      if (!(i < 0)) {
        this.adapter.notifySelected({ index: i });
        var o =
          "true" ===
          this.adapter.getAttributeFromElementAtIndex(i, xo.SKIP_RESTORE_FOCUS);
        this.adapter.closeSurface(o),
          (this.closeAnimationEndTimerId = setTimeout(function () {
            var i = t.adapter.getElementIndex(e);
            i >= 0 &&
              t.adapter.isSelectableItemAtIndex(i) &&
              t.setSelectedIndex(i);
          }, co.numbers.TRANSITION_CLOSE_DURATION));
      }
    }),
    (t.prototype.handleMenuSurfaceOpened = function () {
      switch (this.defaultFocusState) {
        case go.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case go.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case go.NONE:
          break;
        default:
          this.adapter.focusListRoot();
      }
    }),
    (t.prototype.setDefaultFocusState = function (e) {
      this.defaultFocusState = e;
    }),
    (t.prototype.getSelectedIndex = function () {
      return this.selectedIndex;
    }),
    (t.prototype.setSelectedIndex = function (e) {
      if ((this.validatedIndex(e), !this.adapter.isSelectableItemAtIndex(e)))
        throw new Error(
          "MDCMenuFoundation: No selection group at specified index.",
        );
      var t = this.adapter.getSelectedSiblingOfItemAtIndex(e);
      t >= 0 &&
        (this.adapter.removeAttributeFromElementAtIndex(
          t,
          xo.ARIA_CHECKED_ATTR,
        ),
        this.adapter.removeClassFromElementAtIndex(
          t,
          bo.MENU_SELECTED_LIST_ITEM,
        )),
        this.adapter.addClassToElementAtIndex(e, bo.MENU_SELECTED_LIST_ITEM),
        this.adapter.addAttributeToElementAtIndex(
          e,
          xo.ARIA_CHECKED_ATTR,
          "true",
        ),
        (this.selectedIndex = e);
    }),
    (t.prototype.setEnabled = function (e, t) {
      this.validatedIndex(e),
        t
          ? (this.adapter.removeClassFromElementAtIndex(e, zi),
            this.adapter.addAttributeToElementAtIndex(
              e,
              xo.ARIA_DISABLED_ATTR,
              "false",
            ))
          : (this.adapter.addClassToElementAtIndex(e, zi),
            this.adapter.addAttributeToElementAtIndex(
              e,
              xo.ARIA_DISABLED_ATTR,
              "true",
            ));
    }),
    (t.prototype.validatedIndex = function (e) {
      var t = this.adapter.getMenuItemCount();
      if (!(e >= 0 && e < t))
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }),
    t
  );
})(Se);
class yo extends Me {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = vo),
      (this.listElement_ = null),
      (this.anchor = null),
      (this.open = !1),
      (this.quick = !1),
      (this.wrapFocus = !1),
      (this.innerRole = "menu"),
      (this.innerAriaLabel = null),
      (this.corner = "TOP_START"),
      (this.x = null),
      (this.y = null),
      (this.absolute = !1),
      (this.multi = !1),
      (this.activatable = !1),
      (this.fixed = !1),
      (this.forceGroupSelection = !1),
      (this.fullwidth = !1),
      (this.menuCorner = "START"),
      (this.stayOpenOnBodyClick = !1),
      (this.defaultFocus = "LIST_ROOT"),
      (this._listUpdateComplete = null);
  }
  get listElement() {
    return (
      this.listElement_ ||
        (this.listElement_ = this.renderRoot.querySelector("mwc-list")),
      this.listElement_
    );
  }
  get items() {
    const e = this.listElement;
    return e ? e.items : [];
  }
  get index() {
    const e = this.listElement;
    return e ? e.index : -1;
  }
  get selected() {
    const e = this.listElement;
    return e ? e.selected : null;
  }
  render() {
    return this.renderSurface();
  }
  renderSurface() {
    const e = this.getSurfaceClasses();
    return B`
      <mwc-menu-surface
        ?hidden=${!this.open}
        .anchor=${this.anchor}
        .open=${this.open}
        .quick=${this.quick}
        .corner=${this.corner}
        .x=${this.x}
        .y=${this.y}
        .absolute=${this.absolute}
        .fixed=${this.fixed}
        .fullwidth=${this.fullwidth}
        .menuCorner=${this.menuCorner}
        ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
        class=${Ge(e)}
        @closed=${this.onClosed}
        @opened=${this.onOpened}
        @keydown=${this.onKeydown}>
      ${this.renderList()}
    </mwc-menu-surface>`;
  }
  getSurfaceClasses() {
    return { "mdc-menu": !0, "mdc-menu-surface": !0 };
  }
  renderList() {
    const e = "menu" === this.innerRole ? "menuitem" : "option",
      t = this.renderListClasses();
    return B`
      <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class=${Ge(t)}
          .itemRoles=${e}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>`;
  }
  renderListClasses() {
    return { "mdc-deprecated-list": !0 };
  }
  createAdapter() {
    return {
      addClassToElementAtIndex: (e, t) => {
        const i = this.listElement;
        if (!i) return;
        const o = i.items[e];
        o &&
          ("mdc-menu-item--selected" === t
            ? this.forceGroupSelection && !o.selected && i.toggle(e, !0)
            : o.classList.add(t));
      },
      removeClassFromElementAtIndex: (e, t) => {
        const i = this.listElement;
        if (!i) return;
        const o = i.items[e];
        o &&
          ("mdc-menu-item--selected" === t
            ? o.selected && i.toggle(e, !1)
            : o.classList.remove(t));
      },
      addAttributeToElementAtIndex: (e, t, i) => {
        const o = this.listElement;
        if (!o) return;
        const n = o.items[e];
        n && n.setAttribute(t, i);
      },
      removeAttributeFromElementAtIndex: (e, t) => {
        const i = this.listElement;
        if (!i) return;
        const o = i.items[e];
        o && o.removeAttribute(t);
      },
      getAttributeFromElementAtIndex: (e, t) => {
        const i = this.listElement;
        if (!i) return null;
        const o = i.items[e];
        return o ? o.getAttribute(t) : null;
      },
      elementContainsClass: (e, t) => e.classList.contains(t),
      closeSurface: () => {
        this.open = !1;
      },
      getElementIndex: (e) => {
        const t = this.listElement;
        return t ? t.items.indexOf(e) : -1;
      },
      notifySelected: () => {},
      getMenuItemCount: () => {
        const e = this.listElement;
        return e ? e.items.length : 0;
      },
      focusItemAtIndex: (e) => {
        const t = this.listElement;
        if (!t) return;
        const i = t.items[e];
        i && i.focus();
      },
      focusListRoot: () => {
        this.listElement && this.listElement.focus();
      },
      getSelectedSiblingOfItemAtIndex: (e) => {
        const t = this.listElement;
        if (!t) return -1;
        const i = t.items[e];
        if (!i || !i.group) return -1;
        for (let o = 0; o < t.items.length; o++) {
          if (o === e) continue;
          const n = t.items[o];
          if (n.selected && n.group === i.group) return o;
        }
        return -1;
      },
      isSelectableItemAtIndex: (e) => {
        const t = this.listElement;
        if (!t) return !1;
        const i = t.items[e];
        return !!i && i.hasAttribute("group");
      },
    };
  }
  onKeydown(e) {
    this.mdcFoundation && this.mdcFoundation.handleKeydown(e);
  }
  onAction(e) {
    const t = this.listElement;
    if (this.mdcFoundation && t) {
      const i = e.detail.index,
        o = t.items[i];
      o && this.mdcFoundation.handleItemAction(o);
    }
  }
  onOpened() {
    (this.open = !0),
      this.mdcFoundation && this.mdcFoundation.handleMenuSurfaceOpened();
  }
  onClosed() {
    this.open = !1;
  }
  async getUpdateComplete() {
    await this._listUpdateComplete;
    return await super.getUpdateComplete();
  }
  async firstUpdated() {
    super.firstUpdated();
    const e = this.listElement;
    e &&
      ((this._listUpdateComplete = e.updateComplete),
      await this._listUpdateComplete);
  }
  select(e) {
    const t = this.listElement;
    t && t.select(e);
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
  getFocusedItemIndex() {
    const e = this.listElement;
    return e ? e.getFocusedItemIndex() : -1;
  }
  focusItemAtIndex(e) {
    const t = this.listElement;
    t && t.focusItemAtIndex(e);
  }
  layout(e = !0) {
    const t = this.listElement;
    t && t.layout(e);
  }
}
n([fe(".mdc-menu")], yo.prototype, "mdcRoot", void 0),
  n([fe("slot")], yo.prototype, "slotElement", void 0),
  n([pe({ type: Object })], yo.prototype, "anchor", void 0),
  n([pe({ type: Boolean, reflect: !0 })], yo.prototype, "open", void 0),
  n([pe({ type: Boolean })], yo.prototype, "quick", void 0),
  n([pe({ type: Boolean })], yo.prototype, "wrapFocus", void 0),
  n([pe({ type: String })], yo.prototype, "innerRole", void 0),
  n([pe({ type: String })], yo.prototype, "innerAriaLabel", void 0),
  n([pe({ type: String })], yo.prototype, "corner", void 0),
  n([pe({ type: Number })], yo.prototype, "x", void 0),
  n([pe({ type: Number })], yo.prototype, "y", void 0),
  n([pe({ type: Boolean })], yo.prototype, "absolute", void 0),
  n([pe({ type: Boolean })], yo.prototype, "multi", void 0),
  n([pe({ type: Boolean })], yo.prototype, "activatable", void 0),
  n([pe({ type: Boolean })], yo.prototype, "fixed", void 0),
  n([pe({ type: Boolean })], yo.prototype, "forceGroupSelection", void 0),
  n([pe({ type: Boolean })], yo.prototype, "fullwidth", void 0),
  n([pe({ type: String })], yo.prototype, "menuCorner", void 0),
  n([pe({ type: Boolean })], yo.prototype, "stayOpenOnBodyClick", void 0),
  n(
    [
      pe({ type: String }),
      Pe(function (e) {
        this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(go[e]);
      }),
    ],
    yo.prototype,
    "defaultFocus",
    void 0,
  );
const wo = p`mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
let Eo = class extends yo {};
(Eo.styles = [wo]), (Eo = n([le("mwc-menu")], Eo));
var Io = ["input", "button", "textarea", "select"],
  Ao = function (e) {
    var t = e.target;
    if (t) {
      var i = ("" + t.tagName).toLowerCase();
      -1 === Io.indexOf(i) && e.preventDefault();
    }
  };
function Co(e, t) {
  for (var i = new Map(), o = 0; o < e; o++) {
    var n = t(o).trim();
    if (n) {
      var r = n[0].toLowerCase();
      i.has(r) || i.set(r, []),
        i.get(r).push({ text: n.toLowerCase(), index: o });
    }
  }
  return (
    i.forEach(function (e) {
      e.sort(function (e, t) {
        return e.index - t.index;
      });
    }),
    i
  );
}
function So(e, t) {
  var i,
    o = e.nextChar,
    n = e.focusItemAtIndex,
    r = e.sortedIndexByFirstChar,
    d = e.focusedItemIndex,
    a = e.skipFocus,
    s = e.isItemAtIndexDisabled;
  return (
    clearTimeout(t.bufferClearTimeout),
    (t.bufferClearTimeout = setTimeout(function () {
      !(function (e) {
        e.typeaheadBuffer = "";
      })(t);
    }, Xi.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS)),
    (t.typeaheadBuffer = t.typeaheadBuffer + o),
    (i =
      1 === t.typeaheadBuffer.length
        ? (function (e, t, i, o) {
            var n = o.typeaheadBuffer[0],
              r = e.get(n);
            if (!r) return -1;
            if (
              n === o.currentFirstChar &&
              r[o.sortedIndexCursor].index === t
            ) {
              o.sortedIndexCursor = (o.sortedIndexCursor + 1) % r.length;
              var d = r[o.sortedIndexCursor].index;
              if (!i(d)) return d;
            }
            o.currentFirstChar = n;
            var a,
              s = -1;
            for (a = 0; a < r.length; a++)
              if (!i(r[a].index)) {
                s = a;
                break;
              }
            for (; a < r.length; a++)
              if (r[a].index > t && !i(r[a].index)) {
                s = a;
                break;
              }
            if (-1 !== s)
              return (o.sortedIndexCursor = s), r[o.sortedIndexCursor].index;
            return -1;
          })(r, d, s, t)
        : (function (e, t, i) {
            var o = i.typeaheadBuffer[0],
              n = e.get(o);
            if (!n) return -1;
            var r = n[i.sortedIndexCursor];
            if (0 === r.text.lastIndexOf(i.typeaheadBuffer, 0) && !t(r.index))
              return r.index;
            var d = (i.sortedIndexCursor + 1) % n.length,
              a = -1;
            for (; d !== i.sortedIndexCursor; ) {
              var s = n[d],
                l = 0 === s.text.lastIndexOf(i.typeaheadBuffer, 0),
                c = !t(s.index);
              if (l && c) {
                a = d;
                break;
              }
              d = (d + 1) % n.length;
            }
            if (-1 !== a)
              return (i.sortedIndexCursor = a), n[i.sortedIndexCursor].index;
            return -1;
          })(r, s, t)),
    -1 === i || a || n(i),
    i
  );
}
function To(e) {
  return e.typeaheadBuffer.length > 0;
}
var Ro = {
    ACTIVATED: "mdc-select--activated",
    DISABLED: "mdc-select--disabled",
    FOCUSED: "mdc-select--focused",
    INVALID: "mdc-select--invalid",
    MENU_INVALID: "mdc-select__menu--invalid",
    OUTLINED: "mdc-select--outlined",
    REQUIRED: "mdc-select--required",
    ROOT: "mdc-select",
    WITH_LEADING_ICON: "mdc-select--with-leading-icon",
  },
  Oo = {
    ARIA_CONTROLS: "aria-controls",
    ARIA_DESCRIBEDBY: "aria-describedby",
    ARIA_SELECTED_ATTR: "aria-selected",
    CHANGE_EVENT: "MDCSelect:change",
    HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
    LABEL_SELECTOR: ".mdc-floating-label",
    LEADING_ICON_SELECTOR: ".mdc-select__icon",
    LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
    MENU_SELECTOR: ".mdc-select__menu",
    OUTLINE_SELECTOR: ".mdc-notched-outline",
    SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
    SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
    VALUE_ATTR: "data-value",
  },
  ko = { LABEL_SCALE: 0.75, UNSET_INDEX: -1, CLICK_DEBOUNCE_TIMEOUT_MS: 330 },
  Lo = (function (e) {
    function t(i, n) {
      void 0 === n && (n = {});
      var r = e.call(this, o(o({}, t.defaultAdapter), i)) || this;
      return (
        (r.disabled = !1),
        (r.isMenuOpen = !1),
        (r.useDefaultValidation = !0),
        (r.customValidity = !0),
        (r.lastSelectedIndex = ko.UNSET_INDEX),
        (r.clickDebounceTimeout = 0),
        (r.recentlyClicked = !1),
        (r.leadingIcon = n.leadingIcon),
        (r.helperText = n.helperText),
        r
      );
    }
    return (
      i(t, e),
      Object.defineProperty(t, "cssClasses", {
        get: function () {
          return Ro;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "numbers", {
        get: function () {
          return ko;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "strings", {
        get: function () {
          return Oo;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !1;
            },
            activateBottomLine: function () {},
            deactivateBottomLine: function () {},
            getSelectedIndex: function () {
              return -1;
            },
            setSelectedIndex: function () {},
            hasLabel: function () {
              return !1;
            },
            floatLabel: function () {},
            getLabelWidth: function () {
              return 0;
            },
            setLabelRequired: function () {},
            hasOutline: function () {
              return !1;
            },
            notchOutline: function () {},
            closeOutline: function () {},
            setRippleCenter: function () {},
            notifyChange: function () {},
            setSelectedText: function () {},
            isSelectAnchorFocused: function () {
              return !1;
            },
            getSelectAnchorAttr: function () {
              return "";
            },
            setSelectAnchorAttr: function () {},
            removeSelectAnchorAttr: function () {},
            addMenuClass: function () {},
            removeMenuClass: function () {},
            openMenu: function () {},
            closeMenu: function () {},
            getAnchorElement: function () {
              return null;
            },
            setMenuAnchorElement: function () {},
            setMenuAnchorCorner: function () {},
            setMenuWrapFocus: function () {},
            focusMenuItemAtIndex: function () {},
            getMenuItemCount: function () {
              return 0;
            },
            getMenuItemValues: function () {
              return [];
            },
            getMenuItemTextAtIndex: function () {
              return "";
            },
            isTypeaheadInProgress: function () {
              return !1;
            },
            typeaheadMatchItem: function () {
              return -1;
            },
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.getSelectedIndex = function () {
        return this.adapter.getSelectedIndex();
      }),
      (t.prototype.setSelectedIndex = function (e, t, i) {
        void 0 === t && (t = !1),
          void 0 === i && (i = !1),
          e >= this.adapter.getMenuItemCount() ||
            (e === ko.UNSET_INDEX
              ? this.adapter.setSelectedText("")
              : this.adapter.setSelectedText(
                  this.adapter.getMenuItemTextAtIndex(e).trim(),
                ),
            this.adapter.setSelectedIndex(e),
            t && this.adapter.closeMenu(),
            i || this.lastSelectedIndex === e || this.handleChange(),
            (this.lastSelectedIndex = e));
      }),
      (t.prototype.setValue = function (e, t) {
        void 0 === t && (t = !1);
        var i = this.adapter.getMenuItemValues().indexOf(e);
        this.setSelectedIndex(i, !1, t);
      }),
      (t.prototype.getValue = function () {
        var e = this.adapter.getSelectedIndex(),
          t = this.adapter.getMenuItemValues();
        return e !== ko.UNSET_INDEX ? t[e] : "";
      }),
      (t.prototype.getDisabled = function () {
        return this.disabled;
      }),
      (t.prototype.setDisabled = function (e) {
        (this.disabled = e),
          this.disabled
            ? (this.adapter.addClass(Ro.DISABLED), this.adapter.closeMenu())
            : this.adapter.removeClass(Ro.DISABLED),
          this.leadingIcon && this.leadingIcon.setDisabled(this.disabled),
          this.disabled
            ? this.adapter.removeSelectAnchorAttr("tabindex")
            : this.adapter.setSelectAnchorAttr("tabindex", "0"),
          this.adapter.setSelectAnchorAttr(
            "aria-disabled",
            this.disabled.toString(),
          );
      }),
      (t.prototype.openMenu = function () {
        this.adapter.addClass(Ro.ACTIVATED),
          this.adapter.openMenu(),
          (this.isMenuOpen = !0),
          this.adapter.setSelectAnchorAttr("aria-expanded", "true");
      }),
      (t.prototype.setHelperTextContent = function (e) {
        this.helperText && this.helperText.setContent(e);
      }),
      (t.prototype.layout = function () {
        if (this.adapter.hasLabel()) {
          var e = this.getValue().length > 0,
            t = this.adapter.hasClass(Ro.FOCUSED),
            i = e || t,
            o = this.adapter.hasClass(Ro.REQUIRED);
          this.notchOutline(i),
            this.adapter.floatLabel(i),
            this.adapter.setLabelRequired(o);
        }
      }),
      (t.prototype.layoutOptions = function () {
        var e = this.adapter.getMenuItemValues().indexOf(this.getValue());
        this.setSelectedIndex(e, !1, !0);
      }),
      (t.prototype.handleMenuOpened = function () {
        if (0 !== this.adapter.getMenuItemValues().length) {
          var e = this.getSelectedIndex(),
            t = e >= 0 ? e : 0;
          this.adapter.focusMenuItemAtIndex(t);
        }
      }),
      (t.prototype.handleMenuClosing = function () {
        this.adapter.setSelectAnchorAttr("aria-expanded", "false");
      }),
      (t.prototype.handleMenuClosed = function () {
        this.adapter.removeClass(Ro.ACTIVATED),
          (this.isMenuOpen = !1),
          this.adapter.isSelectAnchorFocused() || this.blur();
      }),
      (t.prototype.handleChange = function () {
        this.layout(),
          this.adapter.notifyChange(this.getValue()),
          this.adapter.hasClass(Ro.REQUIRED) &&
            this.useDefaultValidation &&
            this.setValid(this.isValid());
      }),
      (t.prototype.handleMenuItemAction = function (e) {
        this.setSelectedIndex(e, !0);
      }),
      (t.prototype.handleFocus = function () {
        this.adapter.addClass(Ro.FOCUSED),
          this.layout(),
          this.adapter.activateBottomLine();
      }),
      (t.prototype.handleBlur = function () {
        this.isMenuOpen || this.blur();
      }),
      (t.prototype.handleClick = function (e) {
        this.disabled ||
          this.recentlyClicked ||
          (this.setClickDebounceTimeout(),
          this.isMenuOpen
            ? this.adapter.closeMenu()
            : (this.adapter.setRippleCenter(e), this.openMenu()));
      }),
      (t.prototype.handleKeydown = function (e) {
        if (!this.isMenuOpen && this.adapter.hasClass(Ro.FOCUSED)) {
          var t = Mi(e) === ri,
            i = Mi(e) === di,
            o = Mi(e) === mi,
            n = Mi(e) === ui;
          if (
            !(e.ctrlKey || e.metaKey) &&
            ((!i && e.key && 1 === e.key.length) ||
              (i && this.adapter.isTypeaheadInProgress()))
          ) {
            var r = i ? " " : e.key,
              d = this.adapter.typeaheadMatchItem(r, this.getSelectedIndex());
            return d >= 0 && this.setSelectedIndex(d), void e.preventDefault();
          }
          (t || i || o || n) && (this.openMenu(), e.preventDefault());
        }
      }),
      (t.prototype.notchOutline = function (e) {
        if (this.adapter.hasOutline()) {
          var t = this.adapter.hasClass(Ro.FOCUSED);
          if (e) {
            var i = ko.LABEL_SCALE,
              o = this.adapter.getLabelWidth() * i;
            this.adapter.notchOutline(o);
          } else t || this.adapter.closeOutline();
        }
      }),
      (t.prototype.setLeadingIconAriaLabel = function (e) {
        this.leadingIcon && this.leadingIcon.setAriaLabel(e);
      }),
      (t.prototype.setLeadingIconContent = function (e) {
        this.leadingIcon && this.leadingIcon.setContent(e);
      }),
      (t.prototype.getUseDefaultValidation = function () {
        return this.useDefaultValidation;
      }),
      (t.prototype.setUseDefaultValidation = function (e) {
        this.useDefaultValidation = e;
      }),
      (t.prototype.setValid = function (e) {
        this.useDefaultValidation || (this.customValidity = e),
          this.adapter.setSelectAnchorAttr("aria-invalid", (!e).toString()),
          e
            ? (this.adapter.removeClass(Ro.INVALID),
              this.adapter.removeMenuClass(Ro.MENU_INVALID))
            : (this.adapter.addClass(Ro.INVALID),
              this.adapter.addMenuClass(Ro.MENU_INVALID)),
          this.syncHelperTextValidity(e);
      }),
      (t.prototype.isValid = function () {
        return this.useDefaultValidation &&
          this.adapter.hasClass(Ro.REQUIRED) &&
          !this.adapter.hasClass(Ro.DISABLED)
          ? this.getSelectedIndex() !== ko.UNSET_INDEX &&
              (0 !== this.getSelectedIndex() || Boolean(this.getValue()))
          : this.customValidity;
      }),
      (t.prototype.setRequired = function (e) {
        e
          ? this.adapter.addClass(Ro.REQUIRED)
          : this.adapter.removeClass(Ro.REQUIRED),
          this.adapter.setSelectAnchorAttr("aria-required", e.toString()),
          this.adapter.setLabelRequired(e);
      }),
      (t.prototype.getRequired = function () {
        return "true" === this.adapter.getSelectAnchorAttr("aria-required");
      }),
      (t.prototype.init = function () {
        var e = this.adapter.getAnchorElement();
        e &&
          (this.adapter.setMenuAnchorElement(e),
          this.adapter.setMenuAnchorCorner(ro.BOTTOM_START)),
          this.adapter.setMenuWrapFocus(!1),
          this.setDisabled(this.adapter.hasClass(Ro.DISABLED)),
          this.syncHelperTextValidity(!this.adapter.hasClass(Ro.INVALID)),
          this.layout(),
          this.layoutOptions();
      }),
      (t.prototype.blur = function () {
        this.adapter.removeClass(Ro.FOCUSED),
          this.layout(),
          this.adapter.deactivateBottomLine(),
          this.adapter.hasClass(Ro.REQUIRED) &&
            this.useDefaultValidation &&
            this.setValid(this.isValid());
      }),
      (t.prototype.syncHelperTextValidity = function (e) {
        if (this.helperText) {
          this.helperText.setValidity(e);
          var t = this.helperText.isVisible(),
            i = this.helperText.getId();
          t && i
            ? this.adapter.setSelectAnchorAttr(Oo.ARIA_DESCRIBEDBY, i)
            : this.adapter.removeSelectAnchorAttr(Oo.ARIA_DESCRIBEDBY);
        }
      }),
      (t.prototype.setClickDebounceTimeout = function () {
        var e = this;
        clearTimeout(this.clickDebounceTimeout),
          (this.clickDebounceTimeout = setTimeout(function () {
            e.recentlyClicked = !1;
          }, ko.CLICK_DEBOUNCE_TIMEOUT_MS)),
          (this.recentlyClicked = !0);
      }),
      t
    );
  })(Se);
const Fo = (e = {}) => {
  const t = {};
  for (const i in e) t[i] = e[i];
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
    t,
  );
};
class No extends Et {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = Lo),
      (this.disabled = !1),
      (this.outlined = !1),
      (this.label = ""),
      (this.outlineOpen = !1),
      (this.outlineWidth = 0),
      (this.value = ""),
      (this.name = ""),
      (this.selectedText = ""),
      (this.icon = ""),
      (this.menuOpen = !1),
      (this.helper = ""),
      (this.validateOnInitialRender = !1),
      (this.validationMessage = ""),
      (this.required = !1),
      (this.naturalMenuWidth = !1),
      (this.isUiValid = !0),
      (this.fixedMenuPosition = !1),
      (this.typeaheadState = {
        bufferClearTimeout: 0,
        currentFirstChar: "",
        sortedIndexCursor: 0,
        typeaheadBuffer: "",
      }),
      (this.sortedIndexByFirstChar = new Map()),
      (this.menuElement_ = null),
      (this.listeners = []),
      (this.onBodyClickBound = () => {}),
      (this._menuUpdateComplete = null),
      (this.valueSetDirectly = !1),
      (this.validityTransform = null),
      (this._validity = Fo());
  }
  get items() {
    return (
      this.menuElement_ || (this.menuElement_ = this.menuElement),
      this.menuElement_ ? this.menuElement_.items : []
    );
  }
  get selected() {
    const e = this.menuElement;
    return e ? e.selected : null;
  }
  get index() {
    const e = this.menuElement;
    return e ? e.index : -1;
  }
  get shouldRenderHelperText() {
    return !!this.helper || !!this.validationMessage;
  }
  get validity() {
    return this._checkValidity(this.value), this._validity;
  }
  render() {
    const e = {
        "mdc-select--disabled": this.disabled,
        "mdc-select--no-label": !this.label,
        "mdc-select--filled": !this.outlined,
        "mdc-select--outlined": this.outlined,
        "mdc-select--with-leading-icon": !!this.icon,
        "mdc-select--required": this.required,
        "mdc-select--invalid": !this.isUiValid,
      },
      t = this.label ? "label" : void 0,
      i = this.shouldRenderHelperText ? "helper-text" : void 0;
    return B`
      <div
          class="mdc-select ${Ge(e)}">
        <input
            class="formElement"
            name="${this.name}"
            .value="${this.value}"
            hidden
            ?disabled="${this.disabled}"
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${lt(t)}
            aria-required=${this.required}
            aria-describedby=${lt(i)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined ? this.renderOutline() : this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        ${this.renderMenu()}
      </div>
      ${this.renderHelperText()}`;
  }
  renderMenu() {
    const e = this.getMenuClasses();
    return B`
      <mwc-menu
        innerRole="listbox"
        wrapFocus
        class=" ${Ge(e)}"
        activatable
        .fullwidth=${!this.fixedMenuPosition && !this.naturalMenuWidth}
        .open=${this.menuOpen}
        .anchor=${this.anchorElement}
        .fixed=${this.fixedMenuPosition}
        @selected=${this.onSelected}
        @opened=${this.onOpened}
        @closed=${this.onClosed}
        @items-updated=${this.onItemsUpdated}
        @keydown=${this.handleTypeahead}>
      ${this.renderMenuContent()}
    </mwc-menu>`;
  }
  getMenuClasses() {
    return {
      "mdc-select__menu": !0,
      "mdc-menu": !0,
      "mdc-menu-surface": !0,
      "mdc-select__menu--invalid": !this.isUiValid,
    };
  }
  renderMenuContent() {
    return B`<slot></slot>`;
  }
  renderRipple() {
    return this.outlined
      ? G
      : B`
      <span class="mdc-select__ripple"></span>
    `;
  }
  renderOutline() {
    return this.outlined
      ? B`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`
      : G;
  }
  renderLabel() {
    return this.label
      ? B`
      <span
          .floatingLabelFoundation=${Ct(this.label)}
          id="label">${this.label}</span>
    `
      : G;
  }
  renderLeadingIcon() {
    return this.icon
      ? B`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`
      : G;
  }
  renderLineRipple() {
    return this.outlined
      ? G
      : B`
      <span .lineRippleFoundation=${Rt()}></span>
    `;
  }
  renderHelperText() {
    if (!this.shouldRenderHelperText) return G;
    const e = this.validationMessage && !this.isUiValid;
    return B`
        <p
          class="mdc-select-helper-text ${Ge({ "mdc-select-helper-text--validation-msg": e })}"
          id="helper-text">${e ? this.validationMessage : this.helper}</p>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Le(this.mdcRoot)), {
      activateBottomLine: () => {
        this.lineRippleElement &&
          this.lineRippleElement.lineRippleFoundation.activate();
      },
      deactivateBottomLine: () => {
        this.lineRippleElement &&
          this.lineRippleElement.lineRippleFoundation.deactivate();
      },
      hasLabel: () => !!this.label,
      floatLabel: (e) => {
        this.labelElement && this.labelElement.floatingLabelFoundation.float(e);
      },
      getLabelWidth: () =>
        this.labelElement
          ? this.labelElement.floatingLabelFoundation.getWidth()
          : 0,
      setLabelRequired: (e) => {
        this.labelElement &&
          this.labelElement.floatingLabelFoundation.setRequired(e);
      },
      hasOutline: () => this.outlined,
      notchOutline: (e) => {
        this.outlineElement &&
          !this.outlineOpen &&
          ((this.outlineWidth = e), (this.outlineOpen = !0));
      },
      closeOutline: () => {
        this.outlineElement && (this.outlineOpen = !1);
      },
      setRippleCenter: (e) => {
        if (this.lineRippleElement) {
          this.lineRippleElement.lineRippleFoundation.setRippleCenter(e);
        }
      },
      notifyChange: async (e) => {
        if (!this.valueSetDirectly && e === this.value) return;
        (this.valueSetDirectly = !1),
          (this.value = e),
          await this.updateComplete;
        const t = new Event("change", { bubbles: !0 });
        this.dispatchEvent(t);
      },
      setSelectedText: (e) => (this.selectedText = e),
      isSelectAnchorFocused: () => {
        const e = this.anchorElement;
        if (!e) return !1;
        return e.getRootNode().activeElement === e;
      },
      getSelectAnchorAttr: (e) => {
        const t = this.anchorElement;
        return t ? t.getAttribute(e) : null;
      },
      setSelectAnchorAttr: (e, t) => {
        const i = this.anchorElement;
        i && i.setAttribute(e, t);
      },
      removeSelectAnchorAttr: (e) => {
        const t = this.anchorElement;
        t && t.removeAttribute(e);
      },
      openMenu: () => {
        this.menuOpen = !0;
      },
      closeMenu: () => {
        this.menuOpen = !1;
      },
      addMenuClass: () => {},
      removeMenuClass: () => {},
      getAnchorElement: () => this.anchorElement,
      setMenuAnchorElement: () => {},
      setMenuAnchorCorner: () => {
        const e = this.menuElement;
        e && (e.corner = "BOTTOM_START");
      },
      setMenuWrapFocus: (e) => {
        const t = this.menuElement;
        t && (t.wrapFocus = e);
      },
      focusMenuItemAtIndex: (e) => {
        const t = this.menuElement;
        if (!t) return;
        const i = t.items[e];
        i && i.focus();
      },
      getMenuItemCount: () => {
        const e = this.menuElement;
        return e ? e.items.length : 0;
      },
      getMenuItemValues: () => {
        const e = this.menuElement;
        if (!e) return [];
        return e.items.map((e) => e.value);
      },
      getMenuItemTextAtIndex: (e) => {
        const t = this.menuElement;
        if (!t) return "";
        const i = t.items[e];
        return i ? i.text : "";
      },
      getSelectedIndex: () => this.index,
      setSelectedIndex: () => {},
      isTypeaheadInProgress: () => To(this.typeaheadState),
      typeaheadMatchItem: (e, t) => {
        if (!this.menuElement) return -1;
        const i = {
            focusItemAtIndex: (e) => {
              this.menuElement.focusItemAtIndex(e);
            },
            focusedItemIndex: t || this.menuElement.getFocusedItemIndex(),
            nextChar: e,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            skipFocus: !1,
            isItemAtIndexDisabled: (e) => this.items[e].disabled,
          },
          o = So(i, this.typeaheadState);
        return -1 !== o && this.select(o), o;
      },
    });
  }
  checkValidity() {
    const e = this._checkValidity(this.value);
    if (!e) {
      const e = new Event("invalid", { bubbles: !1, cancelable: !0 });
      this.dispatchEvent(e);
    }
    return e;
  }
  reportValidity() {
    const e = this.checkValidity();
    return (this.isUiValid = e), e;
  }
  _checkValidity(e) {
    const t = this.formElement.validity;
    let i = Fo(t);
    if (this.validityTransform) {
      const t = this.validityTransform(e, i);
      i = Object.assign(Object.assign({}, i), t);
    }
    return (this._validity = i), this._validity.valid;
  }
  setCustomValidity(e) {
    (this.validationMessage = e), this.formElement.setCustomValidity(e);
  }
  async getUpdateComplete() {
    await this._menuUpdateComplete;
    return await super.getUpdateComplete();
  }
  async firstUpdated() {
    const e = this.menuElement;
    if (
      (e &&
        ((this._menuUpdateComplete = e.updateComplete),
        await this._menuUpdateComplete),
      super.firstUpdated(),
      (this.mdcFoundation.isValid = () => !0),
      (this.mdcFoundation.setValid = () => {}),
      this.mdcFoundation.setDisabled(this.disabled),
      this.validateOnInitialRender && this.reportValidity(),
      !this.selected)
    ) {
      !this.items.length &&
        this.slotElement &&
        this.slotElement.assignedNodes({ flatten: !0 }).length &&
        (await new Promise((e) => requestAnimationFrame(e)),
        await this.layout());
      const e = this.items.length && "" === this.items[0].value;
      if (!this.value && e) return void this.select(0);
      this.selectByValue(this.value);
    }
    this.sortedIndexByFirstChar = Co(
      this.items.length,
      (e) => this.items[e].text,
    );
  }
  onItemsUpdated() {
    this.sortedIndexByFirstChar = Co(
      this.items.length,
      (e) => this.items[e].text,
    );
  }
  select(e) {
    const t = this.menuElement;
    t && t.select(e);
  }
  selectByValue(e) {
    let t = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].value === e) {
        t = i;
        break;
      }
    }
    (this.valueSetDirectly = !0),
      this.select(t),
      this.mdcFoundation.handleChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners) e.target.removeEventListener(e.name, e.cb);
  }
  focus() {
    const e = new CustomEvent("focus"),
      t = this.anchorElement;
    t && (t.dispatchEvent(e), t.focus());
  }
  blur() {
    const e = new CustomEvent("blur"),
      t = this.anchorElement;
    t && (t.dispatchEvent(e), t.blur());
  }
  onFocus() {
    this.mdcFoundation && this.mdcFoundation.handleFocus();
  }
  onBlur() {
    this.mdcFoundation && this.mdcFoundation.handleBlur();
    const e = this.menuElement;
    e && !e.open && this.reportValidity();
  }
  onClick(e) {
    if (this.mdcFoundation) {
      this.focus();
      const t = e.target.getBoundingClientRect();
      let i = 0;
      i = "touches" in e ? e.touches[0].clientX : e.clientX;
      const o = i - t.left;
      this.mdcFoundation.handleClick(o);
    }
  }
  onKeydown(e) {
    const t = Mi(e) === mi,
      i = Mi(e) === ui;
    if (i || t) {
      const o = t && this.index > 0,
        n = i && this.index < this.items.length - 1;
      return (
        o ? this.select(this.index - 1) : n && this.select(this.index + 1),
        e.preventDefault(),
        void this.mdcFoundation.openMenu()
      );
    }
    this.mdcFoundation.handleKeydown(e);
  }
  handleTypeahead(e) {
    if (!this.menuElement) return;
    const t = this.menuElement.getFocusedItemIndex(),
      i = ke(e.target) ? e.target : null;
    !(function (e, t) {
      var i = e.event,
        o = e.isTargetListItem,
        n = e.focusedItemIndex,
        r = e.focusItemAtIndex,
        d = e.sortedIndexByFirstChar,
        a = e.isItemAtIndexDisabled,
        s = "ArrowLeft" === Mi(i),
        l = "ArrowUp" === Mi(i),
        c = "ArrowRight" === Mi(i),
        p = "ArrowDown" === Mi(i),
        m = "Home" === Mi(i),
        h = "End" === Mi(i),
        u = "Enter" === Mi(i),
        f = "Spacebar" === Mi(i);
      i.altKey ||
        i.ctrlKey ||
        i.metaKey ||
        s ||
        l ||
        c ||
        p ||
        m ||
        h ||
        u ||
        (f || 1 !== i.key.length
          ? f &&
            (o && Ao(i),
            o &&
              To(t) &&
              So(
                {
                  focusItemAtIndex: r,
                  focusedItemIndex: n,
                  nextChar: " ",
                  sortedIndexByFirstChar: d,
                  skipFocus: !1,
                  isItemAtIndexDisabled: a,
                },
                t,
              ))
          : (Ao(i),
            So(
              {
                focusItemAtIndex: r,
                focusedItemIndex: n,
                nextChar: i.key.toLowerCase(),
                sortedIndexByFirstChar: d,
                skipFocus: !1,
                isItemAtIndexDisabled: a,
              },
              t,
            )));
    })(
      {
        event: e,
        focusItemAtIndex: (e) => {
          this.menuElement.focusItemAtIndex(e);
        },
        focusedItemIndex: t,
        isTargetListItem: !!i && i.hasAttribute("mwc-list-item"),
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        isItemAtIndexDisabled: (e) => this.items[e].disabled,
      },
      this.typeaheadState,
    );
  }
  async onSelected(e) {
    this.mdcFoundation || (await this.updateComplete),
      this.mdcFoundation.handleMenuItemAction(e.detail.index);
    const t = this.items[e.detail.index];
    t && (this.value = t.value);
  }
  onOpened() {
    this.mdcFoundation &&
      ((this.menuOpen = !0), this.mdcFoundation.handleMenuOpened());
  }
  onClosed() {
    this.mdcFoundation &&
      ((this.menuOpen = !1), this.mdcFoundation.handleMenuClosed());
  }
  setFormData(e) {
    this.name && null !== this.selected && e.append(this.name, this.value);
  }
  async layout(e = !0) {
    this.mdcFoundation && this.mdcFoundation.layout(),
      await this.updateComplete;
    const t = this.menuElement;
    t && t.layout(e);
    const i = this.labelElement;
    if (!i) return void (this.outlineOpen = !1);
    const o = !!this.label && !!this.value;
    if ((i.floatingLabelFoundation.float(o), !this.outlined)) return;
    (this.outlineOpen = o), await this.updateComplete;
    const n = i.floatingLabelFoundation.getWidth();
    this.outlineOpen && (this.outlineWidth = n);
  }
  async layoutOptions() {
    this.mdcFoundation && this.mdcFoundation.layoutOptions();
  }
}
n([fe(".mdc-select")], No.prototype, "mdcRoot", void 0),
  n([fe(".formElement")], No.prototype, "formElement", void 0),
  n([fe("slot")], No.prototype, "slotElement", void 0),
  n([fe("select")], No.prototype, "nativeSelectElement", void 0),
  n([fe("input")], No.prototype, "nativeInputElement", void 0),
  n([fe(".mdc-line-ripple")], No.prototype, "lineRippleElement", void 0),
  n([fe(".mdc-floating-label")], No.prototype, "labelElement", void 0),
  n([fe("mwc-notched-outline")], No.prototype, "outlineElement", void 0),
  n([fe(".mdc-menu")], No.prototype, "menuElement", void 0),
  n([fe(".mdc-select__anchor")], No.prototype, "anchorElement", void 0),
  n(
    [
      pe({ type: Boolean, attribute: "disabled", reflect: !0 }),
      Pe(function (e) {
        this.mdcFoundation && this.mdcFoundation.setDisabled(e);
      }),
    ],
    No.prototype,
    "disabled",
    void 0,
  ),
  n(
    [
      pe({ type: Boolean }),
      Pe(function (e, t) {
        void 0 !== t && this.outlined !== t && this.layout(!1);
      }),
    ],
    No.prototype,
    "outlined",
    void 0,
  ),
  n(
    [
      pe({ type: String }),
      Pe(function (e, t) {
        void 0 !== t && this.label !== t && this.layout(!1);
      }),
    ],
    No.prototype,
    "label",
    void 0,
  ),
  n([me()], No.prototype, "outlineOpen", void 0),
  n([me()], No.prototype, "outlineWidth", void 0),
  n(
    [
      pe({ type: String }),
      Pe(function (e) {
        if (this.mdcFoundation) {
          const t = null === this.selected && !!e,
            i = this.selected && this.selected.value !== e;
          (t || i) && this.selectByValue(e), this.reportValidity();
        }
      }),
    ],
    No.prototype,
    "value",
    void 0,
  ),
  n([pe()], No.prototype, "name", void 0),
  n([me()], No.prototype, "selectedText", void 0),
  n([pe({ type: String })], No.prototype, "icon", void 0),
  n([me()], No.prototype, "menuOpen", void 0),
  n([pe({ type: String })], No.prototype, "helper", void 0),
  n([pe({ type: Boolean })], No.prototype, "validateOnInitialRender", void 0),
  n([pe({ type: String })], No.prototype, "validationMessage", void 0),
  n([pe({ type: Boolean })], No.prototype, "required", void 0),
  n([pe({ type: Boolean })], No.prototype, "naturalMenuWidth", void 0),
  n([me()], No.prototype, "isUiValid", void 0),
  n([pe({ type: Boolean })], No.prototype, "fixedMenuPosition", void 0),
  n([ue({ capture: !0 })], No.prototype, "handleTypeahead", null);
const Do = p`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select__menu::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}}@media screen and (forced-colors: active)and (forced-colors: active),screen and (-ms-high-contrast: active)and (forced-colors: active){.mdc-select__menu::before{border-color:CanvasText}}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
class $o extends No {}
($o.styles = [Do]), customElements.define("is-select", $o);
class Mo extends ei {}
(Mo.styles = [ti]), customElements.define("is-list-item", Mo);
const Po = [
  "I".charCodeAt(0),
  "M".charCodeAt(0),
  "P".charCodeAt(0),
  "R".charCodeAt(0),
  "O".charCodeAt(0),
  "V".charCodeAt(0),
  1,
];
var Ho, zo;
!(function (e) {
  (e[(e.CURRENT_STATE = 1)] = "CURRENT_STATE"),
    (e[(e.ERROR_STATE = 2)] = "ERROR_STATE"),
    (e[(e.RPC = 3)] = "RPC"),
    (e[(e.RPC_RESULT = 4)] = "RPC_RESULT");
})(Ho || (Ho = {})),
  (function (e) {
    (e[(e.READY = 2)] = "READY"),
      (e[(e.PROVISIONING = 3)] = "PROVISIONING"),
      (e[(e.PROVISIONED = 4)] = "PROVISIONED");
  })(zo || (zo = {}));
const Bo = {
  0: "NO_ERROR",
  1: "INVALID_RPC_PACKET",
  2: "UNKNOWN_RPC_COMMAND",
  3: "UNABLE_TO_CONNECT",
  254: "TIMEOUT",
  255: "UNKNOWN_ERROR",
};
class Uo extends Error {
  constructor() {
    super("Port is not ready");
  }
}
const Vo = (e) =>
  "[" +
  e
    .map((e) =>
      ((e, t = 2) => {
        let i = e.toString(16).toUpperCase();
        return i.startsWith("-")
          ? "-0x" + i.substring(1).padStart(t, "0")
          : "0x" + i.padStart(t, "0");
      })(e),
    )
    .join(", ") +
  "]";
class Go extends EventTarget {
  constructor(e, t) {
    if (
      (super(),
      (this.port = e),
      (this.logger = t),
      (this.error = 0),
      null === e.readable)
    )
      throw new Error("Port is not readable");
    if (null === e.writable) throw new Error("Port is not writable");
  }
  async initialize(e = 1e3) {
    var t;
    if (
      (this.logger.log("Initializing Improv Serial"),
      this._processInput(),
      await ((t = 1e3), new Promise((e) => setTimeout(e, t))),
      void 0 === this._reader)
    )
      throw new Uo();
    try {
      await new Promise(async (t, i) => {
        setTimeout(() => i(new Error("Improv Wi-Fi Serial not detected")), e),
          await this.requestCurrentState(),
          t(void 0);
      }),
        await this.requestInfo();
    } catch (e) {
      throw (await this.close(), e);
    }
    return this.info;
  }
  async close() {
    this._reader &&
      (await new Promise((e) => {
        this._reader.cancel(),
          this.addEventListener("disconnect", e, { once: !0 });
      }));
  }
  async requestCurrentState() {
    let e;
    try {
      await new Promise(async (t, i) => {
        this.addEventListener("state-changed", t, { once: !0 });
        (e = this._sendRPCWithResponse(2, [])),
          e.catch((e) => {
            this.removeEventListener("state-changed", t), i(e);
          });
      });
    } catch (e) {
      throw (
        ((this._rpcFeedback = void 0),
        new Error(`Error fetching current state: ${e}`))
      );
    }
    if (this.state !== zo.PROVISIONED) return void (this._rpcFeedback = void 0);
    const t = await e;
    this.nextUrl = t[0];
  }
  async requestInfo(e) {
    const t = await this._sendRPCWithResponse(3, [], e);
    this.info = { firmware: t[0], version: t[1], name: t[3], chipFamily: t[2] };
  }
  async provision(e, t, i) {
    const o = new TextEncoder(),
      n = o.encode(e),
      r = o.encode(t),
      d = [n.length, ...n, r.length, ...r],
      a = await this._sendRPCWithResponse(1, d, i);
    this.nextUrl = a[0];
  }
  async scan() {
    const e = (await this._sendRPCWithMultipleResponses(4, [])).map(
      ([e, t, i]) => ({ name: e, rssi: parseInt(t), secured: "YES" === i }),
    );
    return (
      e.sort((e, t) =>
        e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase()),
      ),
      e
    );
  }
  _sendRPC(e, t) {
    this.writePacketToStream(Ho.RPC, [e, t.length, ...t]);
  }
  async _sendRPCWithResponse(e, t, i) {
    if (this._rpcFeedback)
      throw new Error(
        "Only 1 RPC command that requires feedback can be active",
      );
    return await this._awaitRPCResultWithTimeout(
      new Promise((i, o) => {
        (this._rpcFeedback = { command: e, resolve: i, reject: o }),
          this._sendRPC(e, t);
      }),
      i,
    );
  }
  async _sendRPCWithMultipleResponses(e, t, i) {
    if (this._rpcFeedback)
      throw new Error(
        "Only 1 RPC command that requires feedback can be active",
      );
    return await this._awaitRPCResultWithTimeout(
      new Promise((i, o) => {
        (this._rpcFeedback = {
          command: e,
          resolve: i,
          reject: o,
          receivedData: [],
        }),
          this._sendRPC(e, t);
      }),
      i,
    );
  }
  async _awaitRPCResultWithTimeout(e, t) {
    return t
      ? await new Promise((i, o) => {
          const n = setTimeout(() => this._setError(254), t);
          e.finally(() => clearTimeout(n)), e.then(i, o);
        })
      : await e;
  }
  async _processInput() {
    this.logger.debug("Starting read loop"),
      (this._reader = this.port.readable.getReader());
    try {
      let e,
        t = [],
        i = 0;
      for (;;) {
        const { value: o, done: n } = await this._reader.read();
        if (n) break;
        if (o && 0 !== o.length)
          for (const n of o) {
            if (!1 === e) {
              10 === n && (e = void 0);
              continue;
            }
            if (!0 === e) {
              t.push(n),
                t.length === i &&
                  (this._handleIncomingPacket(t), (e = void 0), (t = []));
              continue;
            }
            if (10 === n) {
              t = [];
              continue;
            }
            if ((t.push(n), 9 !== t.length)) continue;
            if (
              ((e = "IMPROV" === String.fromCharCode(...t.slice(0, 6))), !e)
            ) {
              t = [];
              continue;
            }
            i = 9 + t[8] + 1;
          }
      }
    } catch (e) {
      this.logger.error("Error while reading serial port", e);
    } finally {
      this._reader.releaseLock(), (this._reader = void 0);
    }
    this.logger.debug("Finished read loop"),
      this.dispatchEvent(new Event("disconnect"));
  }
  _handleIncomingPacket(e) {
    const t = e.slice(6),
      i = t[0],
      o = t[1],
      n = t[2],
      r = t.slice(3, 3 + n);
    if (
      (this.logger.debug("PROCESS", {
        version: i,
        packetType: o,
        packetLength: n,
        data: Vo(r),
      }),
      1 !== i)
    )
      return void this.logger.error("Received unsupported version", i);
    let d = t[3 + n],
      a = 0;
    for (let t = 0; t < e.length - 1; t++) a += e[t];
    if (((a &= 255), a === d))
      if (o === Ho.CURRENT_STATE)
        (this.state = r[0]),
          this.dispatchEvent(
            new CustomEvent("state-changed", { detail: this.state }),
          );
      else if (o === Ho.ERROR_STATE) this._setError(r[0]);
      else if (o === Ho.RPC_RESULT) {
        if (!this._rpcFeedback)
          return void this.logger.error(
            "Received result while not waiting for one",
          );
        const e = r[0];
        if (e !== this._rpcFeedback.command)
          return void this.logger.error(
            `Received result for command ${e} but expected ${this._rpcFeedback.command}`,
          );
        const t = [],
          i = r[1];
        let o = 2;
        for (; o < 2 + i; )
          t.push(String.fromCodePoint(...r.slice(o + 1, o + r[o] + 1))),
            (o += r[o] + 1);
        "receivedData" in this._rpcFeedback
          ? t.length > 0
            ? this._rpcFeedback.receivedData.push(t)
            : (this._rpcFeedback.resolve(this._rpcFeedback.receivedData),
              (this._rpcFeedback = void 0))
          : (this._rpcFeedback.resolve(t), (this._rpcFeedback = void 0));
      } else this.logger.error("Unable to handle packet", t);
    else this.logger.error(`Received invalid checksum ${d}. Expected ${a}`);
  }
  async writePacketToStream(e, t) {
    const i = new Uint8Array([...Po, e, t.length, ...t, 0, 0]);
    (i[i.length - 2] = 255 & i.reduce((e, t) => e + t, 0)),
      (i[i.length - 1] = 10),
      this.logger.debug("Writing to stream:", Vo(new Array(...i)));
    const o = this.port.writable.getWriter();
    await o.write(i);
    try {
      o.releaseLock();
    } catch (e) {
      console.error("Ignoring release lock error", e);
    }
  }
  _setError(e) {
    (this.error = e),
      e > 0 &&
        this._rpcFeedback &&
        (this._rpcFeedback.reject(Bo[e] || `UNKNOWN_ERROR (${e})`),
        (this._rpcFeedback = void 0)),
      this.dispatchEvent(
        new CustomEvent("error-changed", { detail: this.error }),
      );
  }
}
const jo = U`
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
    />
  </svg>
`;
let Wo = class extends ae {
  constructor() {
    super(...arguments),
      (this.logger = console),
      (this._state = "CONNECTING"),
      (this._busy = !1),
      (this._hasProvisioned = !1),
      (this._showProvisionForm = !1),
      (this._selectedSsid = null);
  }
  render() {
    var e, t;
    if (!this.port) return B``;
    let i,
      o = !1;
    return (
      "ERROR" === this._state
        ? (i = this._renderMessage(
            "⚠️",
            `An error occurred. ${this._error}`,
            !0,
          ))
        : this._client && "CONNECTING" !== this._state
          ? this._showProvisionForm
            ? this._busy
              ? ((i = this._renderProgress("Provisioning")), (o = !0))
              : void 0 === this._ssids
                ? ((i = this._renderProgress("Scanning for networks")),
                  (o = !0))
                : (i = this._renderImprovReady())
            : this._client.state === zo.PROVISIONING
              ? ((i = this._renderProgress("Provisioning")), (o = !0))
              : this._client.state === zo.PROVISIONED ||
                  this._client.state === zo.READY
                ? ([i, o] = this._renderImprovDashboard())
                : (i = this._renderMessage(
                    "⚠️",
                    `Unexpected state: ${this._state} - ${this._client.state}`,
                    !0,
                  ))
          : ((i = this._renderProgress("Connecting")), (o = !0)),
      B`
      <is-dialog
        open
        .heading=${null === (t = null === (e = this._client) || void 0 === e ? void 0 : e.info) || void 0 === t ? void 0 : t.name}
        scrimClickAction
        @closed=${this._handleClose}
        .hideActions=${o}
        >${i}</is-dialog
      >
    `
    );
  }
  _renderProgress(e) {
    return B`
      <div class="center">
        <div>
          <is-circular-progress
            active
            indeterminate
            density="8"
          ></is-circular-progress>
        </div>
        ${e}
      </div>
    `;
  }
  _renderMessage(e, t, i) {
    return B`
      <div class="center">
        <div class="icon">${e}</div>
        ${t}
      </div>
      ${
        i &&
        B`
        <is-button
          slot="primaryAction"
          dialogAction="ok"
          label="Close"
        ></is-button>
      `
      }
    `;
  }
  _renderImprovReady() {
    var e;
    let t;
    switch (this._client.error) {
      case 3:
        t = "Unable to connect";
        break;
      case 0:
        break;
      case 2:
        null !== this._ssids && (t = "Unknown RPC command");
        break;
      case 254:
        t = "Timeout";
        break;
      default:
        t = `Unknown error (${this._client.error})`;
    }
    const i =
      null === (e = this._ssids) || void 0 === e
        ? void 0
        : e.find((e) => e.name === this._selectedSsid);
    return B`
      <div>
        Enter the credentials of the Wi-Fi network that you want your device to
        connect to.
      </div>
      ${t ? B`<p class="error">${t}</p>` : ""}
      ${
        null !== this._ssids
          ? B`
            <is-select
              fixedMenuPosition
              label="Network"
              @selected=${(e) => {
                const t = e.detail.index;
                this._selectedSsid =
                  t === this._ssids.length ? null : this._ssids[t].name;
              }}
              @closed=${(e) => e.stopPropagation()}
            >
              ${this._ssids.map(
                (e, t) => B`
                  <is-list-item .selected=${i === e} value=${t}>
                    ${e.name}
                  </is-list-item>
                `,
              )}
              <is-list-item .selected=${!i} value="-1">
                Join other…
              </is-list-item>
            </is-select>
            <ewt-icon-button @click=${this._updateSsids}>
              ${jo}
            </ewt-icon-button>
          `
          : ""
      }
      ${
        i
          ? ""
          : B`
              <is-textfield label="Network Name" name="ssid"></is-textfield>
            `
      }
      ${
        !i || i.secured
          ? B`
              <is-textfield
                label="Password"
                name="password"
                type="password"
              ></is-textfield>
            `
          : ""
      }
      <is-button
        slot="primaryAction"
        label="Connect"
        @click=${this._provision}
      ></is-button>
      ${
        this._client.state === zo.PROVISIONED
          ? B`
            <is-button
              slot="secondaryAction"
              label="Back"
              @click=${this._toggleShowProvisionForm}
            ></is-button>
          `
          : B`
            <is-button
              slot="secondaryAction"
              dialogAction="close"
              label="Cancel"
            ></is-button>
          `
      }
    `;
  }
  _renderImprovDashboard() {
    var e, t;
    return [
      B`
      <div class="device-info">
        Software: ${null === (e = this._client.info) || void 0 === e ? void 0 : e.firmware}/${null === (t = this._client.info) || void 0 === t ? void 0 : t.version}
      </div>
      ${
        this._hasProvisioned
          ? B`
            <div class="center">
              <div class="icon">${"🎉"}</div>
              Provisioned!
            </div>
          `
          : ""
      }
      <div class="dashboard-buttons">
        ${
          void 0 === this._client.nextUrl
            ? ""
            : B`
              <div>
                <a
                  target="_blank"
                  href=${this._client.nextUrl}
                  class="has-button"
                >
                  <is-button label="Visit Device"></is-button>
                </a>
              </div>
            `
        }
        <div>
          <is-button
            .label=${this._client.state === zo.READY ? "Connect to Wi-Fi" : "Change Wi-Fi"}
            @click=${this._toggleShowProvisionForm}
          ></is-button>
        </div>
        <div>
          <is-button label="Close" dialogAction="close"></is-button>
        </div>
      </div>
    `,
      !0,
    ];
  }
  async _toggleShowProvisionForm() {
    (this._showProvisionForm = !this._showProvisionForm),
      (this._hasProvisioned = !1);
  }
  async _updateSsids() {
    const e = this._ssids;
    let t;
    (this._ssids = void 0), (this._busy = !0);
    try {
      t = await this._client.scan();
    } catch (e) {
      return (
        void 0 === this._ssids &&
          ((this._ssids = null), (this._selectedSsid = null)),
        void (this._busy = !1)
      );
    }
    e
      ? this._selectedSsid &&
        !t.find((e) => e.name === this._selectedSsid) &&
        (this._selectedSsid = t[0].name)
      : (this._selectedSsid = t.length ? t[0].name : null),
      (this._ssids = t),
      (this._busy = !1);
  }
  async _provision() {
    var e;
    this._busy = !0;
    try {
      await this._client.provision(
        null === this._selectedSsid
          ? this._inputSSID.value
          : this._selectedSsid,
        (null === (e = this._inputPassword) || void 0 === e
          ? void 0
          : e.value) || "",
        3e4,
      ),
        (this._hasProvisioned = !0),
        (this._showProvisionForm = !1);
    } catch (e) {
      console.log(e);
    } finally {
      this._busy = !1;
    }
  }
  willUpdate(e) {
    super.willUpdate(e),
      e.has("_showProvisionForm") &&
        this._showProvisionForm &&
        this._updateSsids();
  }
  updated(e) {
    let t;
    super.updated(e),
      e.has("port") && this.port && this._connect(),
      e.has("_ssids") && void 0 !== this._ssids
        ? (t = this._selectSSID)
        : e.has("_selectedSsid") &&
          null === this._selectedSsid &&
          (t = this._inputSSID),
      t && t.updateComplete.then(() => t.focus());
  }
  async _connect() {
    let e;
    try {
      e = new Go(this.port, this.logger);
    } catch (e) {
      return (
        (this._state = "ERROR"),
        void (this._error = e.message || e || "Unknown error")
      );
    }
    e.addEventListener("state-changed", () => {
      (this._state = "IMPROV-STATE"), this.requestUpdate();
    }),
      e.addEventListener("error-changed", () => this.requestUpdate());
    try {
      await e.initialize();
    } catch (e) {
      return (
        (this._state = "ERROR"),
        void (this._error = this.learnMoreUrl
          ? B`
            Unable to detect Improv service on connected device.
            <a href=${this.learnMoreUrl} target="_blank"
              >Learn how to resolve this</a
            >
          `
          : e.message)
      );
    }
    e.addEventListener("disconnect", () => {
      (this._state = "ERROR"), (this._error = "Disconnected");
    }),
      e.nextUrl && this.requestUpdate(),
      (this._client = e);
  }
  async _handleClose() {
    var t;
    const i = { improv: !1, provisioned: !1 };
    this._client &&
      ((i.improv = !0),
      (i.provisioned = this._client.state === zo.PROVISIONED),
      await (null === (t = this._client) || void 0 === t ? void 0 : t.close()),
      (this._client = void 0)),
      e(this, "closed", i),
      this.parentNode.removeChild(this);
  }
};
(Wo.styles = p`
    :host {
      --mdc-dialog-max-width: 390px;
      --mdc-theme-primary: var(--improv-primary-color, #03a9f4);
      --mdc-theme-on-primary: var(--improv-on-primary-color, #fff);
    }
    ewt-icon-button {
      position: absolute;
      right: 4px;
      top: 10px;
    }
    is-textfield,
    is-select {
      display: block;
      margin-top: 16px;
    }
    .center {
      text-align: center;
    }
    is-circular-progress {
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
    is-list-item[value="-1"] {
      border-top: 1px solid #ccc;
    }
    .dashboard-buttons {
      margin: 16px 0 -16px -8px;
    }
    .dashboard-buttons div {
      display: block;
      margin: 4px 0;
    }
  `),
  n([pe()], Wo.prototype, "port", void 0),
  n([me()], Wo.prototype, "_state", void 0),
  n([me()], Wo.prototype, "_client", void 0),
  n([me()], Wo.prototype, "_busy", void 0),
  n([me()], Wo.prototype, "_error", void 0),
  n([me()], Wo.prototype, "_hasProvisioned", void 0),
  n([me()], Wo.prototype, "_showProvisionForm", void 0),
  n([me()], Wo.prototype, "_selectedSsid", void 0),
  n([me()], Wo.prototype, "_ssids", void 0),
  n([fe("is-select")], Wo.prototype, "_selectSSID", void 0),
  n([fe("is-textfield[name=ssid]")], Wo.prototype, "_inputSSID", void 0),
  n(
    [fe("is-textfield[name=password]")],
    Wo.prototype,
    "_inputPassword",
    void 0,
  ),
  (Wo = n([le("improv-wifi-serial-provision-dialog")], Wo));
