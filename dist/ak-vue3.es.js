var Ot = Object.defineProperty;
var Dt = (i, l, t) => l in i ? Ot(i, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[l] = t;
var he = (i, l, t) => (Dt(i, typeof l != "symbol" ? l + "" : l, t), t);
import { defineComponent as U, reactive as ie, provide as ce, onMounted as ne, openBlock as v, createElementBlock as b, normalizeClass as L, unref as D, renderSlot as J, inject as le, ref as R, computed as F, watch as q, normalizeStyle as X, createCommentVNode as M, createElementVNode as $, mergeProps as re, withModifiers as se, Fragment as Q, renderList as oe, createBlock as Z, withCtx as te, createTextVNode as de, toDisplayString as K, toRefs as Le, withDirectives as ae, vShow as fe, nextTick as ge, onBeforeUnmount as ye, vModelText as _e, createVNode as ue, withKeys as et, Transition as be, markRaw as ve, resolveDynamicComponent as Pe, h as Se, normalizeProps as Ae, resolveComponent as Ye, onUnmounted as Ke, guardReactiveProps as Et, useSlots as Re, createApp as pt } from "vue";
import We from "axios";
const x = "ak", gt = /* @__PURE__ */ U({
  __name: "Form",
  props: {
    rules: { default: () => ({}) },
    showMessage: { type: Boolean, default: !0 },
    modelValue: { default: () => ({}) },
    trigger: { default: "change" },
    labelWidth: {},
    required: { type: Boolean, default: !0 },
    size: {},
    disabled: { type: Boolean }
  },
  setup(i, { expose: l }) {
    const t = i, e = ie({
      defaultValue: ""
      // 用于保存所有表单元素初始值
    }), s = [];
    ce(`${x}FormProps`, t), ce(`${x}GetFormItemFields`, (g) => {
      s.push(g);
    });
    const d = (g, y) => {
      y !== "reset" && (e.defaultValue = JSON.stringify(g)), Object.assign(t.modelValue, g);
    }, r = () => {
      d(JSON.parse(e.defaultValue), "reset"), s && s.forEach((g) => {
        g.clear();
      });
    }, h = (g) => {
      s && s.forEach((y) => {
        g ? g.indexOf(y.prop) !== -1 && y.clear() : y.clear();
      });
    }, f = (g) => {
      const y = [];
      let k = s;
      return g && g.length > 0 && (k = s.filter((C) => g.indexOf(C.prop) !== -1)), new Promise((C, w) => {
        k.forEach((a) => {
          a.validate().then(() => {
            y.push("true"), c();
          }).catch((o) => {
            y.push(o), c();
          });
        });
        const c = () => {
          if (y.length === k.length) {
            const a = y.filter((o) => o !== "true");
            a.length > 0 ? w(a) : C(t.modelValue);
          }
        };
      });
    };
    return ne(() => {
      d(t.modelValue);
    }), l({ validate: f, clearValidate: h, resetForm: r }), (g, y) => (v(), b("form", {
      class: L(`${D(x)}-form`)
    }, [
      J(g.$slots, "default")
    ], 2));
  }
}), Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Form: gt
}, Symbol.toStringTag, { value: "Module" })), tt = {
  digits: /^[0-9]*[1-9][0-9]*$/,
  // 正整数
  number: /^\d+(\.\d+)?$/,
  // 带小数
  mobile: /^1[3|4|5|7|8]\d{9}$/,
  // 手机
  mail: /^[a-z0-9A-Z._%-]+@([a-z0-9A-Z-]+\.)+[a-zA-Z]{2,4}$/,
  tel: /^0\d{2,3}-\d{7,8}$/,
  // 电话020-00000
  fax: /^(\d{3,4})?[-]?\d{7,8}$/
};
function lt(i) {
  const l = Function;
  return new l("return " + i)();
}
const $e = function(i) {
  return /^\s*$/g.test(i);
}, Me = function(i, l, t) {
  return t === "rule" ? lt(l).test(i) : tt[l] === void 0 ? "undefined" : lt(tt[l]).test(i);
}, Pt = function(i, l) {
  for (let t = 0, e = l.length; t < e; t++) {
    const s = l[t];
    switch (s.type) {
      case "required":
        if ($e(i) || i === !1)
          return s.msg;
        break;
      case "digits":
      case "number":
      case "mobile":
      case "mail":
      case "tel":
      case "fax":
        if (!$e(i) && !Me(i, s.type))
          return s.msg;
        break;
      case "phone":
        if (!$e(i) && !(Me(i, "mobile") || Me(i, "tel")))
          return s.msg;
        break;
      case "maxLength":
        if (!$e(i) && parseInt(i.length) > parseInt(s.len))
          return s.msg;
        break;
      case "minLength":
        if (!$e(i) && parseInt(i.length) < parseInt(s.len))
          return s.msg;
        break;
      case "rule":
        if (!$e(i) && !Me(i, s.rule, "rule"))
          return s.msg;
        break;
      case "fn":
        if (!s.validator(i))
          return s.msg;
        break;
    }
  }
  return !0;
}, ke = (i) => {
  const l = le(`${x}FormProps`, {});
  return l && l.disabled ? !0 : i;
}, Nt = {
  key: 0,
  class: "prepend"
}, Rt = ["value", "type", "disabled"], zt = {
  key: 1,
  class: "append"
}, Ht = {
  key: 2,
  class: "prefix-icon"
}, jt = { class: "suffix-icon" }, Ft = ["onClick"], Ge = /* @__PURE__ */ U({
  __name: "Input",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 },
    type: { default: "text" },
    clear: { type: Boolean, default: !1 },
    showEye: { type: Boolean, default: !1 },
    prefixIcon: { default: "" },
    suffixIcon: { default: "" },
    width: { default: "" },
    size: { default: "" }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = R(), d = R(!1), r = F(() => ke(e.disabled)), h = F(() => d.value ? "text" : e.type), f = (o) => {
      t("blur", o);
      const { value: n } = o.target;
      a(n, "blur");
    }, g = (o) => {
      t("focus", o);
      const { value: n } = o.target;
      a(n, "focus");
    }, y = (o) => {
      const { value: n } = o.target;
      t("update:modelValue", n), a(n, "change");
    }, k = () => {
      t("update:modelValue", ""), t("change", "");
    }, C = () => {
      s.value.focus();
    }, w = () => {
      s.value.blur();
    };
    q(
      () => e.modelValue,
      (o) => {
        a(o, "mounted");
      }
    );
    const c = le(`${x}ControlChange`, ""), a = (o, n) => {
      c && c(o, n);
    };
    return ne(() => {
      a(e.modelValue, "mounted");
    }), l({ blur: w, focus: C }), (o, n) => (v(), b("div", {
      class: L({
        [D(x) + "-form-input"]: !0,
        "input-prepend": o.$slots.prepend,
        "input-append": o.$slots.append
      }),
      style: X({ width: o.width })
    }, [
      o.$slots.prepend ? (v(), b("div", Nt, [
        J(o.$slots, "prepend")
      ])) : M("", !0),
      $("input", re({ autocomplete: "off" }, o.$attrs, {
        ref_key: "inputEl",
        ref: s,
        value: o.modelValue,
        type: h.value,
        class: {
          disabled: r.value,
          [D(x) + "-input-control"]: !0,
          "has-prefix": o.$slots.prefix || o.prefixIcon,
          [o.size]: o.size
        },
        disabled: r.value,
        onInput: y,
        onFocus: g,
        onBlur: f
      }), null, 16, Rt),
      o.$slots.append ? (v(), b("div", zt, [
        J(o.$slots, "append")
      ])) : M("", !0),
      o.$slots.prefix || o.prefixIcon ? (v(), b("span", Ht, [
        o.prefixIcon ? (v(), b("i", {
          key: 0,
          class: L([o.prefixIcon])
        }, null, 2)) : M("", !0),
        J(o.$slots, "prefix")
      ])) : M("", !0),
      $("span", jt, [
        J(o.$slots, "suffix"),
        o.suffixIcon ? (v(), b("i", {
          key: 0,
          class: L([o.suffixIcon])
        }, null, 2)) : M("", !0),
        o.clear && o.modelValue ? (v(), b("i", {
          key: 1,
          class: "icon-close",
          onClick: se(k, ["stop"])
        }, null, 8, Ft)) : M("", !0),
        o.modelValue && o.showEye && o.type === "password" ? (v(), b("i", {
          key: 2,
          class: L({ "icon-eye-close": d.value, "icon-eye": !d.value }),
          onClick: n[0] || (n[0] = se((p) => d.value = !d.value, ["stop"]))
        }, null, 2)) : M("", !0)
      ])
    ], 6));
  }
}), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Input: Ge
}, Symbol.toStringTag, { value: "Module" })), Ut = /* @__PURE__ */ $("span", { class: "radio-inner" }, null, -1), Yt = {
  key: 0,
  class: "radio-text"
}, Kt = ["innerHTML"], Je = /* @__PURE__ */ U({
  __name: "Radio",
  props: {
    disabled: { type: Boolean, default: !1 },
    value: { type: [String, Boolean, Number] },
    modelValue: { type: [String, Boolean, Number] },
    label: {}
  },
  emits: ["update:modelValue", "change"],
  setup(i, { emit: l }) {
    const t = i, e = F(() => ke(t.disabled)), s = F(() => {
      let h;
      return t.value ? h = t.value === t.modelValue : h = !!t.modelValue, h;
    }), d = le(`${x}ControlChange`, ""), r = () => {
      if (e.value)
        return;
      const h = t.value || !0;
      l("change", h), l("update:modelValue", h), d && d(h, "change");
    };
    return q(
      () => t.modelValue,
      (h) => {
        d && d(h, "mounted");
      }
    ), ne(() => {
      d && d(t.modelValue, "mounted");
    }), (h, f) => (v(), b("label", {
      class: L({
        disabled: e.value,
        checked: s.value,
        [D(x) + "-radio"]: !0
      }),
      onClick: r
    }, [
      $("span", null, [
        Ut,
        h.$slots.default ? (v(), b("span", Yt, [
          J(h.$slots, "default")
        ])) : M("", !0),
        h.label ? (v(), b("span", {
          key: 1,
          class: "radio-text",
          innerHTML: h.label
        }, null, 8, Kt)) : M("", !0)
      ])
    ], 2));
  }
}), mt = /* @__PURE__ */ U({
  __name: "RadioGroup",
  props: {
    modelValue: {},
    options: {},
    optionsKey: { default: () => ({ label: "label", value: "value" }) },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(i, { emit: l }) {
    const e = R(i.modelValue), s = (d, r) => {
      l("update:modelValue", d), l("change", d, r);
    };
    return (d, r) => (v(), b("div", {
      class: L(`${D(x)}-radio-group`)
    }, [
      (v(!0), b(Q, null, oe(d.options, (h, f) => (v(), Z(Je, {
        key: f,
        modelValue: e.value,
        "onUpdate:modelValue": r[0] || (r[0] = (g) => e.value = g),
        value: h[d.optionsKey.value],
        disabled: d.disabled || h.disabled,
        onChange: (g) => s(g, h)
      }, {
        default: te(() => [
          de(K(h[d.optionsKey.label]), 1)
        ]),
        _: 2
      }, 1032, ["modelValue", "value", "disabled", "onChange"]))), 128))
    ], 2));
  }
}), Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Radio: Je,
  RadioGroup: mt
}, Symbol.toStringTag, { value: "Module" })), Jt = {
  key: 0,
  class: "checkbox-text"
}, Zt = ["textContent"], Ve = /* @__PURE__ */ U({
  __name: "Checkbox",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: {},
    modelValue: { type: [String, Boolean, Array] },
    value: {},
    beforeChange: {}
  },
  emits: ["update:modelValue", "change"],
  setup(i, { emit: l }) {
    const t = i, e = F(() => ke(t.disabled)), s = F(() => {
      let f;
      return t.value ? typeof t.modelValue == "object" ? f = t.modelValue.indexOf(t.value) !== -1 : f = t.value === t.modelValue : f = !!t.modelValue, f;
    }), d = le(`${x}ControlChange`, ""), r = () => {
      if (t.beforeChange && !t.beforeChange() || e.value)
        return;
      let f;
      s.value ? typeof t.modelValue == "object" ? f = t.modelValue.filter((g) => g !== t.value) : f = !1 : t.value ? typeof t.modelValue == "object" ? (f = t.modelValue, f.push(t.value)) : f = t.value : f = !t.modelValue, l("change", f), l("update:modelValue", f), h(f, "change");
    };
    q(
      () => t.modelValue,
      (f) => {
        d && d(t.modelValue, "mounted"), h(f, "mounted");
      }
    ), ne(() => {
      h(t.modelValue, "mounted");
    });
    const h = (f, g) => {
      d && d(f, g);
    };
    return (f, g) => (v(), b("label", {
      class: L({
        [D(x) + "-checkbox"]: !0,
        checked: s.value,
        disabled: e.value
      }),
      onClick: r
    }, [
      $("span", null, [
        $("span", {
          class: L(["checkbox-inner icon-check", { checked: s.value }])
        }, null, 2),
        f.$slots.default ? (v(), b("span", Jt, [
          J(f.$slots, "default")
        ])) : (v(), b("span", {
          key: 1,
          class: "checkbox-text",
          textContent: K(f.label)
        }, null, 8, Zt))
      ])
    ], 2));
  }
}), ht = /* @__PURE__ */ U({
  __name: "Group",
  props: {
    options: { default: () => [] },
    optionsKey: { default: () => ({ label: "label", value: "value" }) },
    modelValue: { default: () => [] },
    name: {},
    max: { default: 0 },
    min: { default: 0 },
    disabled: { type: Boolean },
    beforeChange: {}
  },
  emits: ["update:modelValue", "change"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = R(e.modelValue);
    q(
      () => e.modelValue,
      (C) => {
        s.value = C;
      }
    );
    const { optionsKey: d } = Le(e), r = d.value.value, h = R({}), f = (C) => {
      const w = C.length;
      h.value = {}, w >= e.max && e.max > 0 ? e.options.forEach((c, a) => {
        C.indexOf(c[r]) === -1 && (h.value[a] = !0);
      }) : w <= e.min && e.min > 0 ? e.options.forEach((c, a) => {
        C.indexOf(c[r]) !== -1 && (h.value[a] = !0);
      }) : (e.min > 0 || e.max > 0) && e.options.forEach((c, a) => {
        h.value[a] = !1;
      });
    }, g = (C, w) => {
      f(C), t("update:modelValue", C), t("change", C, w);
    };
    return l({ toggleSelect: (C) => {
      const w = e.modelValue;
      h.value = {}, e.options && e.options.forEach((a, o) => {
        const n = a[r];
        if (C)
          (!a.disabled || e.modelValue.includes(n)) && (e.max > 0 ? w.length < e.max ? c(n) : h.value[o] = !0 : c(n));
        else if (!a.disabled) {
          const p = e.modelValue.indexOf(n);
          p !== -1 && (e.min > 0 ? w.length > e.min ? w.splice(p, 1) : h.value[o] = !0 : w.splice(p, 1));
        }
      });
      function c(a) {
        w.includes(a) || w.push(a);
      }
      t("update:modelValue", w);
    }, getValue: () => e.options.filter((C) => e.modelValue.indexOf(C[r]) !== -1) }), (C, w) => (v(), b("div", {
      class: L(`${D(x)}-checkbox-group`)
    }, [
      (v(!0), b(Q, null, oe(C.options, (c, a) => (v(), Z(Ve, {
        key: a,
        modelValue: s.value,
        "onUpdate:modelValue": w[0] || (w[0] = (o) => s.value = o),
        value: c[D(d).value],
        label: c[D(d).label] || c[D(d).value],
        disabled: C.disabled || h.value[a] || c.disabled,
        class: L(c.class),
        "before-change": C.beforeChange,
        onChange: (o) => g(o, c)
      }, null, 8, ["modelValue", "value", "label", "disabled", "class", "before-change", "onChange"]))), 128))
    ], 2));
  }
}), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Checkbox: Ve,
  CheckboxGroup: ht
}, Symbol.toStringTag, { value: "Module" })), Ne = /* @__PURE__ */ U({
  __name: "Tag",
  props: {
    type: { default: "" },
    closable: { type: Boolean, default: !1 },
    color: { default: "" },
    borderColor: { default: "" },
    bgColor: { default: "" },
    size: { default: "" }
  },
  emits: ["click", "close"],
  setup(i, { emit: l }) {
    const t = R(!0), e = () => {
      t.value = !1, l("close");
    }, s = () => {
      l("click");
    };
    return (d, r) => ae((v(), b("span", {
      class: L({
        [`${D(x)}-tag`]: !0,
        ["tag-" + d.type]: d.type,
        ["tag-" + d.size]: d.size
      }),
      style: X({ background: d.bgColor, borderColor: d.borderColor, color: d.color }),
      onClick: s
    }, [
      J(d.$slots, "default"),
      d.closable ? (v(), b("i", {
        key: 0,
        class: "icon-close",
        onClick: e
      })) : M("", !0)
    ], 6)), [
      [fe, t.value]
    ]);
  }
}), Ue = () => document.documentElement.scrollTop || document.body.scrollTop, Be = (i) => {
  const l = i.getBoundingClientRect(), t = l.top + (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0), e = l.left + (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0), s = i.offsetWidth, d = i.offsetHeight;
  return { left: e, top: t, width: s, height: d };
}, Oe = () => {
  const i = document.documentElement.clientWidth || document.body.clientWidth, l = document.documentElement.clientHeight || document.body.clientHeight;
  return { width: i, height: l };
}, vt = (i) => {
  const l = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight), t = document.createElement("div");
  t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t);
  const e = t.offsetWidth - t.clientWidth;
  return document.body.removeChild(t), i ? { hasScroll: l, width: e } : e;
}, yt = (i, l = "") => !!i.className.match(new RegExp("(\\s|^)" + l + "(\\s|$)")), ot = (i, l = "") => {
  yt(i, l) || (i.className ? i.className += " " + l : i.className += l);
}, He = (i, l = "") => {
  yt(i, l) && (i.className = i.className.replace(
    new RegExp("(\\s|^)" + l + "(\\s|$)"),
    ""
  ));
}, Qt = ["readonly", "placeholder", "disabled"], qt = ["readonly", "placeholder", "disabled"], el = ["placeholder"], tl = { key: 0 }, ll = ["textContent"], ol = { key: 1 }, nl = ["textContent"], al = ["onClick"], sl = {
  key: 2,
  class: "input"
}, il = ["disabled", "placeholder", "onKeyup"], rl = ["readonly", "placeholder", "disabled", "onKeyup"], ul = { class: "group-icon" }, Ie = /* @__PURE__ */ U({
  __name: "SelectDown",
  props: {
    modelValue: {},
    width: {},
    multiple: { type: Boolean, default: !1 },
    collapseTags: { type: Boolean, default: !1 },
    clear: { type: Boolean, default: !1 },
    filterable: { type: Boolean, default: !1 },
    size: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    direction: { default: 0 },
    downClass: { default: "" },
    downStyle: {},
    appendToBody: { type: Boolean, default: !1 },
    downHeight: { default: 0 },
    icon: { default: "arrow" },
    fixedIcon: { type: Boolean },
    isRange: { type: Boolean, default: !1 },
    rangeSeparator: { default: "To" },
    endPlaceholder: {}
  },
  emits: ["update:modelValue", "blur", "toggleClick", "clear", "delete", "input", "focus", "keyupEnter"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = R(), d = R(), r = ie({
      valueLabel: R(JSON.parse(JSON.stringify(e.modelValue || []))),
      visible: !1,
      appendStyle: {
        top: "",
        minWidth: "",
        bottom: "",
        left: ""
      },
      direction2: e.direction,
      stopPropagation: !1,
      searchValueM: ""
      // 多选输入框的值
    });
    q(
      () => e.modelValue,
      (u) => {
        r.valueLabel = JSON.parse(JSON.stringify(u));
      }
    );
    const h = F(() => ke(e.disabled)), f = F(() => {
      const u = [`${x}-input-control`];
      return e.size && u.push(e.size), h.value && u.push("disabled"), u.join(" ");
    }), g = (u) => {
      h.value || (r.visible = !0, ge(() => {
        V(u), _();
      }), t("toggleClick", r.visible, u), r.stopPropagation = !0, setTimeout(() => {
        r.stopPropagation = !1;
      }, 50));
    }, y = (u) => {
      r.visible && !e.filterable && (w(u), u.stopPropagation());
    }, k = (u) => {
      r.valueLabel.splice(u, 1), c(), t("delete", u);
    }, C = (u) => {
      r.valueLabel = [], c(), t("clear"), u.stopPropagation();
    }, w = (u) => {
      r.visible && !r.stopPropagation && (u && t("toggleClick", !1, u), r.visible = !1, r.searchValueM = "");
    }, c = () => {
      t("update:modelValue", r.valueLabel);
    }, a = (u, S, T) => {
      if (e.filterable) {
        if (e.isRange) {
          t(S, r.valueLabel, T), c();
          return;
        }
        const { value: z } = u.target;
        t(S, z), c();
      }
    }, o = (u, S) => {
      a(u, "input", S);
    }, n = (u, S) => {
      a(u, "blur", S);
    }, p = (u, S) => {
      a(u, "focus", S);
    }, m = (u) => {
      const { value: S } = u.target;
      t("keyupEnter", S);
    }, _ = () => {
      const u = Be(s.value);
      if (e.appendToBody) {
        const S = Oe();
        r.appendStyle = {
          bottom: "auto",
          minWidth: u.width + "px",
          left: u.left + "px",
          top: u.top + u.height + 8 + "px"
        }, r.direction2 === 2 && (r.appendStyle.top = "auto", r.appendStyle.bottom = S.height - u.top + "px");
      } else
        r.appendStyle.top = u.height + 8 + "px", r.appendStyle.bottom = "auto", r.direction2 === 2 && (r.appendStyle.top = "auto", r.appendStyle.bottom = u.height + 8 + "px");
    }, V = (u) => {
      if (e.direction === 0) {
        r.direction2 = e.direction;
        const S = document.documentElement.clientHeight || document.body.clientHeight, T = u.clientY, z = e.downHeight || d.value.offsetHeight || 0;
        z > S - T && T > z && (r.direction2 = 2);
      }
    }, I = F(() => e.downHeight ? {
      "max-height": e.downHeight + "px",
      "overflow-y": "auto"
    } : {}), O = F(() => Object.assign({}, r.appendStyle, e.downStyle || {}));
    return ne(() => {
      ge(() => {
        document.addEventListener("click", w), e.appendToBody && document.body.appendChild(d.value);
      });
    }), ye(() => {
      document.removeEventListener("click", w), e.appendToBody && d.value && document.body.removeChild(d.value);
    }), l({ slideUp: w, setValue: (u) => {
      r.valueLabel = JSON.parse(JSON.stringify(u));
    } }), (u, S) => (v(), b("div", {
      ref_key: "el",
      ref: s,
      class: L({
        "is-down": r.visible,
        [D(x) + "-select-down"]: !0,
        disabled: h.value
      }),
      style: X({ width: u.width }),
      onClick: g
    }, [
      $("div", {
        class: "select-control",
        onClick: y
      }, [
        u.isRange ? (v(), b("div", {
          key: 0,
          class: L(["select-range", f.value])
        }, [
          ae($("input", {
            "onUpdate:modelValue": S[0] || (S[0] = (T) => r.valueLabel[0] = T),
            readonly: !u.filterable,
            placeholder: u.placeholder,
            disabled: h.value,
            onInput: S[1] || (S[1] = (T) => o(T, 0)),
            onFocus: S[2] || (S[2] = (T) => p(T, 0)),
            onBlur: S[3] || (S[3] = (T) => n(T, 0))
          }, null, 40, Qt), [
            [_e, r.valueLabel[0]]
          ]),
          $("span", null, K(u.rangeSeparator), 1),
          ae($("input", {
            "onUpdate:modelValue": S[4] || (S[4] = (T) => r.valueLabel[1] = T),
            readonly: !u.filterable,
            placeholder: u.endPlaceholder,
            disabled: h.value,
            onInput: S[5] || (S[5] = (T) => o(T, 1)),
            onFocus: S[6] || (S[6] = (T) => p(T, 1)),
            onBlur: S[7] || (S[7] = (T) => n(T, 1))
          }, null, 40, qt), [
            [_e, r.valueLabel[1]]
          ])
        ], 2)) : u.multiple ? (v(), b("div", {
          key: 1,
          class: L([f.value, "multiple-text"])
        }, [
          $("ul", { placeholder: u.placeholder }, [
            u.collapseTags ? (v(), b(Q, { key: 0 }, [
              r.valueLabel.length > 0 ? (v(), b("li", tl, [
                $("span", {
                  textContent: K(r.valueLabel[0])
                }, null, 8, ll),
                $("i", {
                  class: "icon-error",
                  onClick: S[8] || (S[8] = se((T) => k(0), ["stop"]))
                })
              ])) : M("", !0),
              r.valueLabel.length > 1 ? (v(), b("li", ol, [
                ue(Ne, {
                  size: "mini",
                  type: "info"
                }, {
                  default: te(() => [
                    de(" +" + K(r.valueLabel.length), 1)
                  ]),
                  _: 1
                })
              ])) : M("", !0)
            ], 64)) : (v(!0), b(Q, { key: 1 }, oe(r.valueLabel, (T, z) => (v(), b("li", { key: z }, [
              $("span", {
                textContent: K(T)
              }, null, 8, nl),
              $("i", {
                class: "icon-error",
                onClick: se((Y) => k(z), ["stop"])
              }, null, 8, al)
            ]))), 128)),
            u.filterable ? (v(), b("li", sl, [
              ae($("input", {
                "onUpdate:modelValue": S[9] || (S[9] = (T) => r.searchValueM = T),
                type: "text",
                disabled: h.value,
                placeholder: r.valueLabel.length === 0 ? u.placeholder : "",
                onInput: o,
                onFocus: p,
                onBlur: n,
                onKeyup: et(m, ["enter"])
              }, null, 40, il), [
                [_e, r.searchValueM]
              ])
            ])) : M("", !0)
          ], 8, el)
        ], 2)) : ae((v(), b("input", {
          key: 2,
          "onUpdate:modelValue": S[10] || (S[10] = (T) => r.valueLabel[0] = T),
          readonly: !u.filterable,
          placeholder: u.placeholder,
          class: L(f.value),
          disabled: h.value,
          onInput: o,
          onFocus: p,
          onBlur: n,
          onKeyup: et(m, ["enter"])
        }, null, 42, rl)), [
          [_e, r.valueLabel[0]]
        ]),
        $("span", ul, [
          u.clear && u.modelValue.length > 0 ? (v(), b("i", {
            key: 0,
            class: "icon-close",
            title: "清空",
            onClick: C
          })) : M("", !0),
          $("i", {
            class: L({ down: r.visible && !u.fixedIcon, [`icon-${u.icon}`]: !0 })
          }, null, 2)
        ])
      ]),
      ue(be, {
        name: r.direction2 === 2 ? "slide-toggle-top" : "slide-toggle"
      }, {
        default: te(() => [
          ae($("div", {
            ref_key: "selectDown",
            ref: d,
            class: L({
              [D(x) + "-select-down-pane"]: !0,
              [u.downClass]: u.downClass,
              top: r.direction2 === 2
            }),
            style: X(O.value),
            onClick: S[11] || (S[11] = se(() => {
            }, ["stop"]))
          }, [
            $("div", {
              style: X(I.value),
              class: "scroll-pane"
            }, [
              J(u.$slots, "default")
            ], 4),
            $("span", {
              class: L(["down-arrow", { "is-range": u.isRange }])
            }, null, 2)
          ], 6), [
            [fe, r.visible]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 6));
  }
}), cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SelectDown: Ie
}, Symbol.toStringTag, { value: "Module" })), dl = { class: "calendar-head" }, fl = /* @__PURE__ */ U({
  __name: "ControlHead",
  props: {
    activePanel: {},
    value: {},
    type: {},
    position: { default: "left" }
  },
  emits: ["change"],
  setup(i, { emit: l }) {
    const t = i, e = F(() => t.value.getFullYear()), s = F(() => t.value.getMonth()), d = (g) => {
      let y = 1;
      t.activePanel === "year" && (y = 10), g === 0 && (y = -y);
      const k = new Date(t.value.setFullYear(e.value + y));
      l("change", k);
    }, r = (g) => {
      let y = 1;
      g === 0 && (y = -y);
      const k = new Date(t.value.setMonth(s.value + y));
      l("change", k);
    }, h = (g) => {
      l("change", g);
    }, f = (g) => !(t.type.includes("Range") && (t.position === "left" && g || t.position === "right" && !g));
    return (g, y) => (v(), b("div", dl, [
      f(0) ? (v(), b("a", {
        key: 0,
        class: "calendar-prev-year",
        onClick: y[0] || (y[0] = (k) => d(0))
      }, "«")) : M("", !0),
      g.activePanel === "day" ? (v(), b("a", {
        key: 1,
        class: "calendar-prev-month",
        onClick: y[1] || (y[1] = (k) => r(0))
      }, "‹")) : M("", !0),
      $("span", null, [
        $("a", {
          class: "calendar-year-select",
          onClick: y[2] || (y[2] = (k) => h("year"))
        }, K(g.activePanel === "year" ? `${e.value - 2}年－${e.value + 8}年` : `${e.value}年`), 1),
        g.activePanel === "day" ? (v(), b("a", {
          key: 0,
          class: "calendar-year-month",
          onClick: y[3] || (y[3] = (k) => h("month"))
        }, K(s.value + 1) + "月", 1)) : M("", !0)
      ]),
      g.activePanel === "day" ? (v(), b("a", {
        key: 2,
        class: "calendar-next-month",
        onClick: y[4] || (y[4] = (k) => r(1))
      }, "›")) : M("", !0),
      f(0) ? (v(), b("a", {
        key: 3,
        class: "calendar-next-year",
        onClick: y[5] || (y[5] = (k) => d(1))
      }, "»")) : M("", !0)
    ]));
  }
}), pl = ["onClick"], gl = /* @__PURE__ */ U({
  __name: "YearMonth",
  props: {
    value: {},
    defaultDate: {},
    disabledDate: {},
    pane: { default: "year" }
  },
  emits: ["update:modelValue", "click"],
  setup(i, { emit: l }) {
    const t = i, e = R(t.defaultDate);
    q(
      () => t.defaultDate,
      () => {
        e.value = t.defaultDate;
      }
    );
    const s = F(() => {
      let f = [];
      if (t.pane === "year") {
        const g = t.value.getFullYear();
        for (let y = g - 4; y <= g + 7; y++)
          f.push(y.toString());
      } else
        t.pane === "month" && (f = [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ]);
      return f;
    }), d = (f) => t.disabledDate && t.disabledDate(f, t.pane), r = (f, g) => {
      let y = new Date(f);
      const k = new Date(e.value);
      let C = f === k.getFullYear().toString();
      const w = /* @__PURE__ */ new Date();
      let c = y.getFullYear() === w.getFullYear();
      if (t.pane === "month") {
        y = new Date(t.value.getFullYear(), g), t.value.getFullYear() === k.getFullYear() && (C = g === k.getMonth());
        const a = t.value.getFullYear();
        c = w.getFullYear().toString() + w.getMonth() === a.toString() + g;
      }
      return {
        "calendar-date-today": c,
        // 当年或当前月
        "calendar-date-select": C,
        "calendar-date-disabled": d(y)
        // 不能选择的
      };
    }, h = (f, g) => {
      let y = new Date(parseInt(f), t.value.getMonth());
      t.pane === "month" && (y = new Date(t.value.getFullYear(), g)), d(y) || (e.value = y.getTime(), l("click", y));
    };
    return (f, g) => (v(), b("div", {
      class: L({
        "calendar-year": f.pane === "year",
        "calendar-months": f.pane === "month"
      })
    }, [
      (v(!0), b(Q, null, oe(s.value, (y, k) => (v(), b("a", {
        key: y,
        class: L(r(y, k)),
        onClick: (C) => h(y, k)
      }, K(y), 11, pl))), 128))
    ], 2));
  }
}), ml = { class: "calendar-days" }, hl = /* @__PURE__ */ $("div", { class: "calendar-week" }, [
  /* @__PURE__ */ $("a", null, "日"),
  /* @__PURE__ */ $("a", null, "一"),
  /* @__PURE__ */ $("a", null, "二"),
  /* @__PURE__ */ $("a", null, "三"),
  /* @__PURE__ */ $("a", null, "四"),
  /* @__PURE__ */ $("a", null, "五"),
  /* @__PURE__ */ $("a", null, "六")
], -1), vl = { class: "calendar-list" }, yl = ["onClick"], bl = ["textContent"], kl = {
  key: 0,
  class: "calendar-time"
}, wl = { class: "calendar-time-input" }, Cl = /* @__PURE__ */ U({
  __name: "Day",
  props: {
    value: {},
    defaultDate: {},
    type: {},
    disabledDate: {},
    innerText: {},
    index: {}
  },
  emits: ["click"],
  setup(i, { emit: l }) {
    const t = i;
    q(
      () => t.value,
      () => {
        h(t.value), t.defaultDate !== -1 && (d.value = t.defaultDate);
      }
    );
    const e = R([]), s = R({ hours: "", minutes: "", seconds: "" }), d = R(t.defaultDate), r = (c) => `${c}`.padStart(2, "0"), h = (c) => {
      const a = [], o = c.getFullYear(), n = c.getMonth(), p = new Date(o, n, 1);
      p.setDate(0);
      let m = p.getDate(), V = p.getDay() + 1;
      for (; V > 0; )
        a.push({
          d: m - V + 1,
          y: n > 0 ? o : o - 1,
          // 0为1月，即上一年
          m: n > 0 ? n - 1 : 11,
          p: !0
        }), V--;
      p.setMonth(p.getMonth() + 2, 0), m = p.getDate();
      for (let I = 1; I <= m; I++)
        a.push({
          d: I,
          y: o,
          m: n
        });
      for (let I = 1; a.length < 42; I++)
        a.push({
          d: I,
          y: n < 11 ? o : o + 1,
          m: n < 11 ? n + 1 : 0,
          n: !0
        });
      e.value = a, s.value = {
        hours: r(c.getHours()),
        minutes: r(c.getMinutes()),
        seconds: r(c.getSeconds())
      };
    };
    h(t.value);
    const f = (c) => t.disabledDate && t.disabledDate(c, "day"), g = (c) => {
      const a = new Date(c.y, c.m, c.d), o = new Date(d.value).toDateString();
      return {
        "calendar-date-out": c.p || c.n,
        // 非当前月
        "calendar-date-today": a.toDateString() === (/* @__PURE__ */ new Date()).toDateString(),
        // 今天的
        "calendar-date-select": a.toDateString() === o,
        // 选中的
        "calendar-date-disabled": f(a)
        // 不能选择的
      };
    }, y = (c) => {
      const a = new Date(
        c.y,
        c.m,
        c.d,
        parseInt(s.value.hours, 10),
        parseInt(s.value.minutes, 10),
        parseInt(s.value.seconds, 10)
      );
      f(a) || (d.value = a.getTime(), t.type === "datetime" || l("click", { date: a }));
    }, k = (c) => {
      const a = new Date(c.y, c.m, c.d);
      return t.innerText && t.innerText(a);
    }, C = () => {
      let c = t.value;
      d.value !== -1 && (c = new Date(d.value)), l("click", { date: c, type: "confirm" });
    }, w = (c, a) => {
      const { value: o } = c.target;
      let n = t.value;
      d.value !== -1 && (n = new Date(d.value));
      const p = parseInt(o, 10);
      a === "hours" && p < 24 && n.setHours(p), a === "minutes" && p < 59 && n.setMinutes(p), a === "seconds" && p < 59 && n.setSeconds(p), d.value = n.getTime(), l("click", { date: n });
    };
    return (c, a) => (v(), b("div", ml, [
      hl,
      $("div", vl, [
        (v(!0), b(Q, null, oe(e.value, (o, n) => (v(), b("a", {
          key: n,
          class: L([g(o)]),
          onClick: (p) => y(o)
        }, [
          $("span", null, [
            de(K(o.d) + " ", 1),
            k(o) ? (v(), b("i", {
              key: 0,
              textContent: K(k(o))
            }, null, 8, bl)) : M("", !0)
          ])
        ], 10, yl))), 128))
      ]),
      c.type === "datetime" || c.type === "datetimeRange" ? (v(), b("div", kl, [
        $("div", wl, [
          ae($("input", {
            "onUpdate:modelValue": a[0] || (a[0] = (o) => s.value.hours = o),
            type: "text",
            maxlength: "2",
            onInput: a[1] || (a[1] = (o) => w(o, "hours")),
            oninput: "value=value.replace(/[^\\d]/g,'')",
            onfocus: "this.select()"
          }, null, 544), [
            [
              _e,
              s.value.hours,
              void 0,
              { number: !0 }
            ]
          ]),
          de(": "),
          ae($("input", {
            "onUpdate:modelValue": a[2] || (a[2] = (o) => s.value.minutes = o),
            type: "text",
            maxlength: "2",
            onInput: a[3] || (a[3] = (o) => w(o, "minutes")),
            oninput: "value=value.replace(/[^\\d]/g,'')",
            onfocus: "this.select()"
          }, null, 544), [
            [
              _e,
              s.value.minutes,
              void 0,
              { number: !0 }
            ]
          ]),
          de(": "),
          ae($("input", {
            "onUpdate:modelValue": a[4] || (a[4] = (o) => s.value.seconds = o),
            type: "text",
            maxlength: "2",
            onInput: a[5] || (a[5] = (o) => w(o, "seconds")),
            oninput: "value=value.replace(/[^\\d]/g,'')",
            onfocus: "this.select()"
          }, null, 544), [
            [
              _e,
              s.value.seconds,
              void 0,
              { number: !0 }
            ]
          ])
        ]),
        t.type === "datetime" || t.type === "datetimeRange" && t.index === 1 ? (v(), b("a", {
          key: 0,
          class: "btn-time",
          onClick: C
        }, "确定")) : M("", !0)
      ])) : M("", !0)
    ]));
  }
}), _l = { class: "calendar-body" }, bt = /* @__PURE__ */ U({
  __name: "DatePicker",
  props: {
    modelValue: {},
    placeholder: {},
    endPlaceholder: {},
    clear: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    type: { default: "date" },
    format: {},
    valueFormat: {},
    appendToBody: { type: Boolean },
    downClass: {},
    downStyle: {},
    readonly: { type: Boolean, default: !0 },
    direction: { default: 0 },
    width: {},
    disabledDate: {},
    innerText: {},
    size: {},
    isRange: { type: Boolean },
    rangeSeparator: { default: "To" }
  },
  emits: ["update:modelValue", "change"],
  setup(i, { emit: l }) {
    const t = i, e = R(), s = R(), d = R([]), r = t.type.includes("Range"), h = R([]), f = R("day"), g = R([]), y = le(`${x}ControlChange`, ""), k = (u) => `${u}`.padStart(2, "0"), C = F(() => {
      let u = "";
      if (t.format)
        u = t.format;
      else
        switch (t.type) {
          case "year":
            u = "y";
            break;
          case "month":
          case "monthRange":
            u = "y-MM";
            break;
          case "date":
          case "dateRange":
            u = "y-MM-dd";
            break;
          case "datetime":
          case "datetimeRange":
            u = "y-MM-dd hh:mm:ss";
            break;
        }
      return u;
    }), w = () => {
      t.type === "year" || t.type === "month" ? f.value = t.type : t.type === "monthRange" ? f.value = "month" : f.value = "day";
    }, c = (u, S) => {
      if (S === "timestamp")
        return u.getTime().toString();
      const T = u.getMonth() + 1, z = u.getDate(), Y = u.getHours(), A = u.getMinutes(), P = u.getSeconds(), W = {
        y: u.getFullYear(),
        M: T,
        MM: k(T),
        d: z,
        dd: k(z),
        h: Y,
        hh: k(Y),
        m: A,
        mm: k(A),
        s: P,
        ss: k(P),
        w: u.getDay()
      };
      return S.replace(/(y|MM|M|dd|d|hh|h|mm|m|ss|s|w)/g, (B) => {
        const E = W[B];
        return B === "w" ? ["日", "一", "二", "三", "四", "五", "六"][E] : E;
      });
    }, a = (u) => {
      const S = new Date(u);
      if (S.toString() !== "Invalid Date")
        return S;
      if (!/[^\d]/g.test(u)) {
        const z = new Date(parseInt(u, 10));
        if (z.toString() !== "Invalid Date")
          return z;
      }
      const T = new Date(u == null ? void 0 : u.replace(/['年'|'月']/g, "-").replace("日", ""));
      return T.toString() !== "Invalid Date" ? T : (console.warn("无效时间:" + u), !1);
    }, o = (u) => {
      const S = u || t.modelValue;
      let T = /* @__PURE__ */ new Date(), z = new Date(
        (/* @__PURE__ */ new Date()).setMonth(T.getMonth() + 1)
      );
      if (t.type === "monthRange" && (z = new Date(
        (/* @__PURE__ */ new Date()).setFullYear(T.getFullYear() + 1)
      )), h.value = [], d.value = [], r) {
        if (typeof S == "object" && (S == null ? void 0 : S.length) === 2) {
          const Y = a(S[0]), A = a(S[1]);
          if (Y && A) {
            T = Y, z = A;
            const P = c(Y, C.value), W = c(A, C.value);
            d.value = [P, W], h.value = [Y.getTime(), A.getTime()];
          }
        }
        s.value = [T, z];
      } else {
        if (typeof S == "string" && S) {
          const Y = a(S);
          if (Y) {
            T = Y;
            const A = c(Y, C.value);
            d.value = [A], h.value = [Y.getTime()];
          }
        }
        s.value = [T];
      }
    };
    q(
      () => t.modelValue,
      () => {
        o();
      }
    ), ne(() => {
      w(), o();
    });
    const n = (u) => {
      u.length === 2 ? u[0] > u[1] ? V([u[1], u[0]]) : V([u[0], u[1]]) : u.length;
    }, p = (u, S) => {
      if (r)
        if (t.type === "datetimeRange")
          if (u.type === "confirm") {
            let T = /* @__PURE__ */ new Date();
            g.value.length !== 0 && (T = g.value[g.value.length - 1]), n([T, u.date]);
          } else
            S === 0 && g.value.push(u.date);
        else
          g.value.push(u.date), n(g.value);
      else
        V([u.date]);
    }, m = (u, S) => {
      typeof S == "string" && !r ? f.value = S : typeof S == "object" && (r ? u === 0 ? s.value[0] = S : u === 1 && (s.value[1] = S) : s.value = [S]);
    }, _ = (u) => {
      u || (w(), o()), g.value = [];
    }, V = (u) => {
      let S = [], T = "";
      if (s.value = u, r) {
        if ((u == null ? void 0 : u.length) === 2) {
          const z = c(u[0], C.value), Y = c(u[1], C.value);
          if (S = [z, Y], T = [z, Y], t.valueFormat) {
            const A = c(u[0], t.valueFormat), P = c(u[1], t.valueFormat);
            T = [A, P];
          }
        }
      } else
        (u == null ? void 0 : u.length) === 1 && (T = c(u[0], C.value), S = [T], t.valueFormat && (T = c(u[0], t.valueFormat)));
      d.value = S, l("update:modelValue", T), l("change", T, r ? u : u[0] || ""), y && y(T), e.value.slideUp();
    }, I = (u, S) => {
      if (t.readonly || !u)
        return;
      const T = a(u);
      T && V(r ? S === 1 ? [s.value[0], T] : [T, s.value[1]] : [T]);
    }, O = () => {
      t.clear && V([]);
    }, H = (u, S) => {
      if (t.type === f.value)
        V([S]);
      else if (t.type === "monthRange")
        g.value.push(S), n(g.value);
      else {
        let T = "";
        f.value === "year" && (T = "month"), f.value === "month" && (T = "day"), T && (f.value = T), s.value[u] = S;
      }
    };
    return (u, S) => (v(), Z(D(Ie), {
      ref_key: "selectDown",
      ref: e,
      placeholder: u.placeholder,
      endPlaceholder: u.endPlaceholder,
      size: u.size,
      disabled: u.disabled,
      width: u.width,
      clear: u.clear,
      "append-to-body": u.appendToBody,
      filterable: !u.readonly,
      direction: u.direction,
      "down-class": u.downClass,
      "down-style": u.downStyle,
      icon: "date",
      fixedIcon: !0,
      "model-value": d.value,
      rangeSeparator: u.rangeSeparator,
      isRange: D(r),
      onClear: O,
      onBlur: I,
      onToggleClick: _
    }, {
      default: te(() => [
        $("div", {
          class: L({ [`${D(x)}-date-picker`]: !0 }),
          onClick: S[0] || (S[0] = se(() => {
          }, ["stop"]))
        }, [
          (v(!0), b(Q, null, oe(s.value, (T, z) => (v(), b("div", {
            key: z,
            class: "calendar"
          }, [
            ue(fl, {
              type: u.type,
              activePanel: f.value,
              value: T,
              position: z === 0 ? "left" : "right",
              onChange: (Y) => m(z, Y)
            }, null, 8, ["type", "activePanel", "value", "position", "onChange"]),
            $("div", _l, [
              f.value === "day" ? (v(), Z(Cl, {
                key: 0,
                value: T,
                "default-date": h.value[z] || -1,
                pane: f.value,
                onClick: (Y) => p(Y, z),
                type: u.type,
                index: z,
                disabledDate: u.disabledDate,
                innerText: u.innerText
              }, null, 8, ["value", "default-date", "pane", "onClick", "type", "index", "disabledDate", "innerText"])) : (v(), Z(gl, {
                key: 1,
                value: T,
                "default-date": h.value[z] || -1,
                pane: f.value,
                disabledDate: u.disabledDate,
                onClick: (Y) => H(z, Y)
              }, null, 8, ["value", "default-date", "pane", "disabledDate", "onClick"]))
            ])
          ]))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["placeholder", "endPlaceholder", "size", "disabled", "width", "clear", "append-to-body", "filterable", "direction", "down-class", "down-style", "model-value", "rangeSeparator", "isRange"]));
  }
}), Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DatePicker: bt
}, Symbol.toStringTag, { value: "Module" })), Vl = ["title", "onClick", "innerHTML"], Tl = {
  key: 0,
  class: "select-empty-options"
}, Ze = /* @__PURE__ */ U({
  __name: "Select",
  props: {
    modelValue: {},
    multiple: { type: Boolean },
    filterable: { type: Boolean },
    downHeight: { default: 200 },
    multipleLimit: {},
    options: { default: () => [] },
    optionsKey: { default: () => ({ label: "label", value: "value" }) },
    beforeChange: {},
    async: { type: Boolean },
    emptyText: { default: "无数据" },
    allowCreate: { type: Boolean }
  },
  emits: ["update:modelValue", "change", "limitChange", "clear", "delete", "input", "focus", "blur", "toggleClick"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = R(), d = ie({
      checked: [],
      // 所有已选择的集合
      keywords: "",
      setFirst: !1,
      // 手动选择改变选项时，在watch时不触发setFirstText事件
      tempChecked: ""
    }), r = R(
      JSON.parse(JSON.stringify(e.options))
    );
    q(
      () => e.modelValue,
      () => {
        C();
      }
    ), q(
      () => e.options,
      () => {
        r.value = JSON.parse(JSON.stringify(e.options)), C();
      }
    );
    const { optionsKey: h } = Le(e), f = h.value.label, g = h.value.value, y = (u) => {
      if (!e.filterable)
        return;
      const S = r.value.filter((T) => T[f] === u && !T.disabled);
      if (S.length > 0) {
        let T = !1;
        d.checked.forEach((z) => {
          z[f] === S[0][f] && (T = !0);
        }), T || (d.checked.push(S[0]), m(S[0]));
      }
      s.value.setValue(V.value), d.keywords = "", setTimeout(() => {
        r.value.forEach((T) => {
          delete T._disabled;
        });
      }, 500), t("blur", u);
    }, k = (u) => {
      e.filterable && (d.keywords = u, e.async || r.value.forEach((S) => {
        S._disabled = S[f].indexOf(u) === -1;
      }), d.setFirst = !0, t("input", u));
    }, C = () => {
      if (!d.setFirst && (d.setFirst = !1, e.modelValue && r.value && r.value.length > 0)) {
        d.checked = [], typeof e.modelValue == "object" ? e.modelValue.forEach((u) => {
          d.checked.push({
            [f]: u,
            [g]: u
          });
        }) : d.checked.push({
          [f]: e.modelValue,
          [g]: e.modelValue
        });
        for (let u = 0; u < r.value.length; u++) {
          const S = r.value[u], T = c(S);
          if (e.multiple) {
            if (typeof e.modelValue == "object") {
              const z = e.modelValue.indexOf(T);
              z !== -1 && d.checked.splice(z, 1, S);
            }
          } else if (T === e.modelValue) {
            d.checked.splice(0, 1, S);
            break;
          }
        }
      }
    }, w = (u) => {
      const S = c(u);
      if (e.multiple) {
        if (typeof e.modelValue == "object")
          return e.modelValue.indexOf(S) !== -1;
      } else
        return S === e.modelValue;
    }, c = (u) => u[g] === void 0 ? u[f] : u[g], a = (u, S) => {
      if (!u.disabled) {
        if (e.beforeChange && !e.beforeChange(u)) {
          n(), S && S.stopPropagation();
          return;
        }
        const T = c(u);
        if (e.multiple) {
          if (e.multipleLimit && e.multipleLimit > 0 && e.multipleLimit <= d.checked.length)
            return t("limitChange", e.modelValue), !1;
          let z = -1;
          d.checked.forEach((Y, A) => {
            c(Y) === T && (z = A);
          }), z !== -1 ? d.checked.splice(z, 1) : d.checked.push(u), m(u);
        } else
          d.checked = [u], n(), m(u);
      }
      S && S.stopPropagation();
    }, o = (u) => {
      if (e.multiple && typeof e.modelValue == "object")
        if (u)
          d.tempChecked = JSON.stringify(e.modelValue);
        else {
          const S = JSON.parse(d.tempChecked);
          let T = !0;
          console.log(JSON.stringify(e.modelValue)), S.forEach((z) => {
            e.modelValue.indexOf(z) === -1 && (T = !1);
          }), T || t("delete", -1);
        }
      t("toggleClick", u);
    }, n = () => {
      s.value.slideUp();
    }, p = le(`${x}ControlChange`, ""), m = (u, S = !0) => {
      d.setFirst = S;
      let T = [];
      d.checked.forEach((z) => {
        T.push(c(z));
      }), e.multiple || (T = T[0] || ""), t("update:modelValue", T), p && p(T), t("change", T, u);
    }, _ = (u) => {
      if (d.keywords && e.filterable) {
        const S = new RegExp(`${d.keywords}`, "gi");
        return u.replace(S, "<b>$&</b>");
      } else
        return u;
    }, V = F(() => d.checked.map((u) => u[f])), I = () => {
      d.checked = [], m(), t("clear");
    }, O = (u) => {
      d.checked.splice(u, 1), m(), t("delete", u);
    };
    ce(`${x}GetChildOption`, (u) => {
      r.value.push(u);
    });
    const H = (u) => {
      if (!e.allowCreate)
        return !1;
      const S = r.value.filter(
        (T) => T[f].includes(u)
      );
      if (S && S.length > 0)
        a(S[0], "");
      else {
        const T = {
          [f]: u,
          [g]: u
        };
        d.checked = [u], r.value.push(T), m(T);
      }
    };
    return ne(() => {
      C();
    }), l({ slideUp: n }), (u, S) => (v(), Z(D(Ie), re(u.$props, {
      ref_key: "selectDownEl",
      ref: s,
      "before-change": "",
      options: "",
      optionskey: "",
      "model-value": V.value,
      onClear: I,
      onDelete: O,
      onInput: k,
      onBlur: y,
      onToggleClick: o,
      onKeyupEnter: H
    }), {
      default: te(() => [
        $("ul", {
          class: L(`${D(x)}-select`)
        }, [
          (v(!0), b(Q, null, oe(r.value, (T, z) => ae((v(), b("li", {
            key: z,
            class: L({
              disabled: T.disabled,
              active: w(T),
              [T.class]: T.class
            }),
            title: T[D(h).label],
            onClick: (Y) => a(T, Y),
            innerHTML: _(T[D(h).label])
          }, null, 10, Vl)), [
            [fe, !T._disabled]
          ])), 128)),
          r.value.length === 0 ? (v(), b("p", Tl, K(u.emptyText), 1)) : M("", !0)
        ], 2),
        J(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["model-value"]));
  }
}), $l = U({
  props: {
    value: String,
    label: String,
    disabled: Boolean,
    className: String
  },
  setup(i) {
    const l = le(`${x}GetChildOption`, "");
    ne(() => {
      l && l({
        label: i.label,
        value: i.value,
        disabled: i.disabled,
        className: i.className
      });
    });
  },
  render() {
    return null;
  }
}), xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Option: $l,
  Select: Ze
}, Symbol.toStringTag, { value: "Module" })), Bl = { class: "switch-text" }, kt = /* @__PURE__ */ U({
  __name: "Switch",
  props: {
    modelValue: { type: [String, Number, Boolean], default: !1 },
    disabled: { type: Boolean, default: !1 },
    activeColor: {},
    closeColor: {},
    activeValue: {},
    closeValue: {},
    beforeChange: {},
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(i, { emit: l }) {
    const t = i, e = le(`${x}ControlChange`, ""), s = F(() => t.activeValue ? t.modelValue === t.activeValue : t.modelValue), d = F(() => {
      let g = {};
      return t.modelValue && t.activeColor && (g = {
        borderColor: t.activeColor,
        backgroundColor: t.activeColor
      }), !t.modelValue && t.closeColor && (g = {
        borderColor: t.closeColor,
        backgroundColor: t.closeColor
      }), g;
    }), r = F(() => ke(t.disabled)), h = () => {
      if (!r.value) {
        if (t.beforeChange && !t.beforeChange())
          return;
        let g;
        s.value ? t.closeValue ? g = t.closeValue : g = !1 : t.activeValue ? g = t.activeValue : g = !0, l("update:modelValue", g), l("change", g), f(g);
      }
    }, f = (g, y) => {
      e && e(g, y);
    };
    return q(
      () => t.modelValue,
      (g) => {
        f(g, "mounted");
      }
    ), ne(() => {
      f(t.modelValue, "mounted");
    }), (g, y) => (v(), b("span", {
      class: L({
        [D(x) + "-switch"]: !0,
        "switch-checked": s.value,
        disabled: r.value,
        [g.size]: g.size
      }),
      style: X(d.value),
      onClick: h
    }, [
      $("i", {
        class: L(`${D(x)}-switch-inner`)
      }, null, 2),
      $("span", Bl, [
        s.value ? J(g.$slots, "open", { key: 0 }) : J(g.$slots, "close", { key: 1 })
      ])
    ], 6));
  }
}), Il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Switch: kt
}, Symbol.toStringTag, { value: "Module" })), Al = {};
function wt(i, l = 500) {
  let t;
  return function(...e) {
    t && clearTimeout(t), t = setTimeout(() => {
      i.apply(this, e);
    }, l);
  };
}
const Ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  debounce: wt,
  default: Al
}, Symbol.toStringTag, { value: "Module" })), Ol = ["value", "disabled", "maxlength"], Dl = {
  key: 0,
  class: "input-count"
}, Ct = /* @__PURE__ */ U({
  __name: "Textarea",
  props: {
    modelValue: { default: "" },
    autoHeight: { type: Boolean, default: !0 },
    width: { default: "100%" },
    height: { default: "80px" },
    disabled: { type: Boolean, default: !1 },
    maxlength: {},
    showWordLimit: { type: Boolean },
    maxHeight: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: l }) {
    const t = i, e = R(t.modelValue);
    q(
      () => t.modelValue,
      (o) => {
        e.value = o;
      }
    );
    const s = R(2), d = R(), r = R(t.height), h = R(t.autoHeight ? "hidden" : ""), f = F(() => ke(t.disabled)), g = F(() => ({
      width: t.width,
      height: r.value,
      minHeight: t.height,
      maxHeight: t.maxHeight,
      overflow: h.value
    })), y = wt(() => {
      if (t.autoHeight) {
        const o = d.value.scrollHeight + s.value;
        r.value = o + "px", o > parseInt(t.maxHeight || "") && (h.value = "auto");
      }
    }), k = () => {
      s.value = d.value.offsetHeight - d.value.clientHeight;
    }, C = (o) => {
      const { value: n } = o.target;
      c(n), y();
    }, w = le(`${x}ControlChange`, ""), c = (o) => {
      l("update:modelValue", o), a(o);
    };
    ne(() => {
      k(), a(t.modelValue, "mounted");
    });
    const a = (o, n) => {
      w && w(o, n);
    };
    return q(
      () => t.modelValue,
      (o) => {
        a(o, "mounted");
      }
    ), (o, n) => (v(), b("div", {
      class: L([`${D(x)}-textarea`])
    }, [
      $("textarea", re({
        ref_key: "textareaEl",
        ref: d
      }, o.$attrs, {
        value: e.value,
        class: { [`${D(x)}-input-control`]: !0, disabled: f.value },
        style: g.value,
        disabled: f.value,
        maxlength: o.maxlength,
        onInput: C
      }), null, 16, Ol),
      o.showWordLimit && o.maxlength ? (v(), b("span", Dl, K(e.value.length) + "/" + K(o.maxlength), 1)) : M("", !0)
    ], 2));
  }
}), El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Textarea: Ct
}, Symbol.toStringTag, { value: "Module" })), Ml = { class: "time-picker" }, Pl = ["onClick"], nt = /* @__PURE__ */ U({
  __name: "Pane",
  props: {
    position: { default: "start" },
    time: {},
    disabledTime: {}
  },
  emits: ["click"],
  setup(i, { emit: l }) {
    const t = i, e = [
      {
        max: 24,
        type: "h"
      },
      {
        max: 60,
        type: "m"
      },
      {
        max: 60,
        type: "s"
      }
    ], s = {
      h: {},
      m: {},
      s: {}
    }, d = (g) => `${g}`.padStart(2, "0"), r = (g, y) => {
      let k = !1;
      return t.disabledTime && (k = t.disabledTime(
        Object.assign({}, t.time, { a: g }),
        y
      ), s[y][g] = k), {
        active: t.time && t.time[y] === g,
        disabled: k
      };
    }, h = (g, y, k) => {
      typeof t.disabledTime == "function" && setTimeout(() => {
        const C = s[y] || {};
        if (C[g]) {
          let w = 60;
          Object.keys(C).forEach((c) => {
            C[c] || parseInt(c) < w && (w = parseInt(c));
          }), w = w === 60 ? 0 : w, k[y] = w, y === "m" && h(k.s, "s", k), l("click", k);
        }
      }, 500);
    }, f = (g, y, k) => {
      const C = JSON.parse(JSON.stringify(t.time)), { className: w } = k.target;
      if (w.indexOf("disabled") === -1) {
        switch (y) {
          case "h":
            C.h = g, h(C.m, "m", C);
            break;
          case "m":
            C.m = g, h(C.s, "s", C);
            break;
          case "s":
            C.s = g;
            break;
        }
        l("click", C);
      }
    };
    return (g, y) => (v(), b("div", Ml, [
      (v(), b(Q, null, oe(e, (k, C) => $("ul", { key: C }, [
        (v(!0), b(Q, null, oe(k.max, (w) => (v(), b("li", {
          key: w,
          class: L(r(w - 1, k.type)),
          onClick: (c) => f(w - 1, k.type, c)
        }, K(d(w - 1)), 11, Pl))), 128))
      ])), 64))
    ]));
  }
}), _t = /* @__PURE__ */ U({
  __name: "TimePicker",
  props: {
    modelValue: {},
    disabledTime: {},
    filterable: { type: Boolean },
    isRange: { type: Boolean }
  },
  emits: ["update:modelValue", "blur", "clear"],
  setup(i, { emit: l }) {
    const t = i, e = R(), s = (o) => `${o}`.padStart(2, "0"), d = (o) => `${s(o.h)}:${s(o.m)}:${s(o.s)}`, r = (o) => {
      const n = o == null ? void 0 : o.split(":");
      return (n == null ? void 0 : n.length) === 3 ? {
        h: parseInt(n[0]) < 23 ? parseInt(n[0]) : 23,
        m: parseInt(n[1]) < 59 ? parseInt(n[1]) : 59,
        s: parseInt(n[2]) < 59 ? parseInt(n[2]) : 59
      } : o;
    }, h = le(`${x}ControlChange`, ""), f = F(() => {
      let o = [];
      return t.isRange ? t.modelValue && t.modelValue.length === 2 && (o = [r(t.modelValue[0]), r(t.modelValue[1])]) : t.modelValue && (o = [r(t.modelValue.toString())]), o;
    }), g = F(() => {
      let o = [];
      return t.isRange ? t.modelValue && t.modelValue.length === 2 && (o = [
        d(f.value[0]),
        d(f.value[1])
      ]) : t.modelValue && (o = [d(f.value[0])]), o;
    }), y = (o) => {
      const n = /* @__PURE__ */ new Date();
      return {
        h: o ? n.getHours() + 1 : n.getHours(),
        m: n.getMinutes(),
        s: n.getSeconds()
      };
    }, k = (o) => {
      o && (!t.modelValue || t.modelValue && t.modelValue.length === 0) && w(y(), y(!0));
    }, C = (o, n) => {
      if (t.isRange) {
        let p = f.value[0], m = f.value[1];
        o === "start" ? p = n : o === "end" && (m = n), w(p, m);
      } else
        w(n);
    }, w = (o, n) => {
      let p = d(o);
      if (t.isRange) {
        n || (n = o);
        const m = o.h * 3600 + o.m * 60 + o.s, _ = n.h * 3600 + n.m * 60 + n.s;
        m > _ ? p = [d(n), d(o)] : p = [d(o), d(n)];
      }
      l("update:modelValue", p), h && h(p);
    }, c = () => {
      l("update:modelValue", ""), l("clear"), h && h("");
    }, a = (o) => {
      if (t.filterable)
        if (!o)
          c();
        else {
          let n = [r(o.toString())];
          t.isRange && (n = [r(o[0]), r(o[1])]);
          let p = !1;
          for (const m in n) {
            const _ = n[m];
            if (typeof _ == "object" && typeof t.disabledTime == "function") {
              const V = ["h", "m", "s"];
              for (const I in V)
                if (p = t.disabledTime(
                  Object.assign({}, _, { a: _.h }),
                  V[I]
                ), p)
                  break;
            }
            if (p)
              break;
          }
          if (!p) {
            w(n[0], n[1]), l("blur", o);
            return;
          }
          e.value.setValue(g.value);
        }
    };
    return (o, n) => (v(), Z(D(Ie), re(o.$props, {
      ref_key: "selectDownEl",
      ref: e,
      disabledtime: "",
      "model-value": g.value,
      onClear: c,
      onBlur: a,
      onToggleClick: k
    }), {
      default: te(() => [
        $("div", {
          class: L({ [`${D(x)}-time-picker`]: !0, "is-range": o.isRange })
        }, [
          ue(nt, {
            key: "start",
            time: f.value[0],
            disabledTime: o.disabledTime,
            onClick: n[0] || (n[0] = (p) => C("start", p))
          }, null, 8, ["time", "disabledTime"]),
          o.isRange ? (v(), Z(nt, {
            key: "end",
            time: f.value[1],
            disabledTime: o.disabledTime,
            onClick: n[1] || (n[1] = (p) => C("end", p))
          }, null, 8, ["time", "disabledTime"])) : M("", !0)
        ], 2)
      ]),
      _: 1
    }, 16, ["model-value"]));
  }
}), Nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TimePicker: _t
}, Symbol.toStringTag, { value: "Module" })), Rl = ["onClick"], St = /* @__PURE__ */ U({
  __name: "TimeSelect",
  props: {
    modelValue: {},
    start: { default: "09:00" },
    end: { default: "18:00" },
    step: { default: "00:30" },
    minTime: { default: "" },
    maxTime: { default: "" },
    downHeight: { default: 200 }
  },
  emits: ["update:modelValue", "change", "clear"],
  setup(i, { emit: l }) {
    const t = i, e = le(`${x}ControlChange`, ""), s = (a, o) => {
      let n = a;
      return o === "h" ? (a < 0 && (n = 0), a > 24 && (n = 24)) : (a < 0 && (n = 0), a > 59 && (n = 59)), n;
    }, d = (a) => {
      const o = (a || "").split(":");
      if (o.length >= 2) {
        const n = s(Number.parseInt(o[0], 10)), p = n === 24 ? 0 : s(Number.parseInt(o[1], 10));
        return {
          hours: n,
          minutes: p
        };
      } else if (a && a.indexOf(":") === -1)
        throw new Error(`${a} 不是有效的时间格式`);
      return null;
    }, r = (a) => `${f(a.hours)}:${f(a.minutes)}`, h = (a, o) => {
      const n = a.minutes + a.hours * 60, p = o.minutes + o.hours * 60;
      return n === p ? 0 : n > p ? 1 : -1;
    }, f = (a) => `${a}`.padStart(2, "0"), g = (a, o) => {
      const n = {
        hours: a.hours,
        minutes: a.minutes
      };
      return n.minutes += o.minutes, n.hours += o.hours, n.hours += Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n;
    }, y = F(() => {
      const a = [];
      let o = d(t.start);
      const n = d(t.end), p = d(t.step), m = d(t.minTime), _ = d(t.maxTime);
      if (o && n && p)
        for (; h(o, n) <= 0; ) {
          let V = !1;
          m && h(o, m) < 0 && (V = !0), _ && h(_, o) < 0 && (V = !0), a.push({
            value: r(o),
            disabled: V
          }), o = g(o, p);
        }
      return a;
    }), k = R([]);
    t.modelValue && (k.value = [t.modelValue]);
    const C = R();
    q(
      () => t.modelValue,
      (a) => {
        a ? k.value = [t.modelValue] : k.value = [];
      }
    );
    const w = (a) => {
      a.disabled || (k.value = [a.value], C.value.slideUp(), l("update:modelValue", a.value), l("change", a.value), e && e(a.value));
    }, c = () => {
      k.value = [], l("update:modelValue", ""), l("clear"), e && e("");
    };
    return (a, o) => (v(), Z(D(Ie), re(a.$props, {
      ref_key: "selectDown",
      ref: C,
      "model-value": k.value,
      onClear: c
    }), {
      default: te(() => [
        $("ul", {
          class: L(`${D(x)}-select`)
        }, [
          (v(!0), b(Q, null, oe(y.value, (n, p) => (v(), b("li", {
            key: p,
            class: L({ disabled: n.disabled, active: n.value === a.modelValue }),
            onClick: se((m) => w(n), ["stop"])
          }, K(n.value), 11, Rl))), 128))
        ], 2)
      ]),
      _: 1
    }, 16, ["model-value"]));
  }
}), zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TimeSelect: St
}, Symbol.toStringTag, { value: "Module" })), Vt = /* @__PURE__ */ U({
  __name: "Field",
  props: {
    data: {},
    type: { default: "input" },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: l }) {
    const t = i, e = R(), s = () => {
      var r;
      t.modelValue !== void 0 ? e.value = t.modelValue : e.value = (r = t.data) == null ? void 0 : r.value;
    };
    q(
      () => t.modelValue,
      () => {
        s();
      }
    ), q(
      () => e.value,
      (r) => {
        l("update:modelValue", r);
      }
    ), s();
    const d = F(() => {
      switch (t.type) {
        case "radio":
          return ve(mt);
        case "checkbox":
          return ve(ht);
        case "datePicker":
          return ve(bt);
        case "select":
          return ve(Ze);
        case "switch":
          return ve(kt);
        case "textarea":
          return ve(Ct);
        case "timePicker":
          return ve(_t);
        case "timeSelect":
          return ve(St);
        default:
          return ve(Ge);
      }
    });
    return (r, h) => (v(), Z(Pe(d.value), re({
      modelValue: e.value,
      "onUpdate:modelValue": h[0] || (h[0] = (f) => e.value = f)
    }, r.data), null, 16, ["modelValue"]));
  }
}), Hl = ["textContent"], Ce = /* @__PURE__ */ U({
  __name: "FormItem",
  props: {
    className: {},
    label: {},
    labelVisible: { type: Boolean, default: !1 },
    prop: {},
    required: { type: Boolean, default: !0 },
    verify: {},
    rules: { default: () => [] },
    showMessage: { type: Boolean, default: !0 },
    trigger: { default: "change" },
    labelWidth: {},
    size: {},
    error: { default: "" },
    type: { default: "" },
    data: {},
    modelValue: {}
  },
  emits: ["update:modelValue", "change"],
  setup(i, { expose: l, emit: t }) {
    var n;
    const e = i, s = le(`${x}FormProps`, {});
    let d;
    s != null && s.rules && e.prop && s.rules[e.prop] && (d = s.rules[e.prop]);
    let r = [...e.rules];
    ((n = e.rules) == null ? void 0 : n.length) === 0 && !e.verify && d && (r = [...d]);
    const h = (p, m) => {
      const _ = e[p];
      return _ === m && s && Object.keys(s).length > 0 ? s[p] : _;
    }, f = ie({
      errorTips: "",
      // 有值时表示校验没通过有错误信息
      iconType: "",
      // 提示类型，
      rules2: r,
      trigger2: h("trigger", "change"),
      messageShow: h("showMessage", !0),
      controlValue: "",
      // 组件的值，改变事件时*/
      formSize: e.size ? e.size : s && s.size
    }), g = (p) => {
      p && (f.errorTips = p, f.iconType = "icon-failure");
    };
    if (g(e.error), q(
      () => e.error,
      (p) => {
        g(p);
      }
    ), e.verify) {
      const p = {
        required: "必填字段",
        mobile: "手机号格式不正确",
        tel: "电话号码不正确",
        mail: "请输入正确邮箱",
        digits: "必须为正整数",
        number: "必须为数字",
        phone: "请输入固话或手机"
      };
      e.verify.split(",").forEach((_) => {
        f.rules2.push({
          type: _,
          msg: p[_]
        });
      });
    }
    const y = F(() => {
      let p = !1;
      return h("required", !0) && f.rules2 && f.rules2.length > 0 && f.rules2.forEach((_) => {
        if (_.type === "required")
          return p = !0, !1;
      }), p;
    }), k = F(() => {
      const p = h("labelWidth", void 0);
      return p ? {
        width: p
      } : null;
    }), C = (p) => {
      let m = p;
      return p === void 0 && (m = f.controlValue), new Promise((_, V) => {
        if (e.error)
          V(f.errorTips);
        else if (f.rules2) {
          const I = Pt(m, f.rules2);
          I === !0 ? (f.errorTips = "", f.iconType = "icon-success", _(f.controlValue)) : (f.errorTips = I, f.iconType = "icon-failure", V(f.errorTips));
        } else
          _(f.controlValue), console.log("没有校验规则通过");
      });
    }, w = (p) => {
      let m = "";
      f.rules2.forEach((_) => {
        _.type === "tips" && (m = _.msg);
      }), m && !p && (f.errorTips = m, f.iconType = "icon-tips");
    }, c = () => {
      f.errorTips = "", f.iconType = "";
    }, a = le(`${x}GetFormItemFields`, ""), o = () => {
      (f.rules2.length > 0 || e.error) && a && a({
        validate: C,
        clear: c,
        prop: e.prop || `prop${(/* @__PURE__ */ new Date()).getTime()}`
        // 当有prop时随机添加一个
      });
    };
    return ce(`${x}ControlChange`, (p, m) => {
      e.type && t("update:modelValue", p), (m === "change" || !m) && t("change", p), f.controlValue = p, m !== "mounted" && (m === "focus" ? w(p) : f.trigger2 === "blur" ? m === "blur" && C(p).catch((_) => {
        console.log(_);
      }) : C(p).catch((_) => {
        console.log(_);
      }));
    }), ne(() => {
      o();
    }), l({ validate: C, clearTips: c }), (p, m) => (v(), b("div", {
      class: L({
        className: p.className,
        [D(x) + "-form-item-error"]: f.errorTips !== "",
        [D(x) + "-form-item"]: !0,
        ["form-item-" + f.formSize]: f.formSize
      })
    }, [
      p.label || p.$slots.label ? ae((v(), b("label", {
        key: 0,
        class: L({ required: y.value, [D(x) + "-form-label"]: !0 }),
        style: X(k.value)
      }, [
        J(p.$slots, "label", {}, () => [
          de(K(p.label), 1)
        ])
      ], 6)), [
        [fe, !p.labelVisible]
      ]) : M("", !0),
      $("div", {
        class: L(`${D(x)}-form-box`)
      }, [
        e.type ? (v(), Z(Vt, {
          key: 0,
          type: e.type,
          data: e.data,
          modelValue: e.modelValue
        }, null, 8, ["type", "data", "modelValue"])) : M("", !0),
        J(p.$slots, "default"),
        f.iconType && f.messageShow && (f.rules2 && f.rules2.length > 0 || p.error) ? (v(), b(Q, { key: 1 }, [
          f.errorTips === "" ? (v(), b("div", {
            key: 0,
            class: L(`${D(x)}-form-tips ${f.iconType}`)
          }, null, 2)) : (v(), b("div", {
            key: 1,
            class: L(`${D(x)}-form-tips`)
          }, [
            $("i", {
              class: L([f.iconType])
            }, null, 2),
            $("span", {
              textContent: K(f.errorTips)
            }, null, 8, Hl)
          ], 2))
        ], 64)) : M("", !0)
      ], 2),
      J(p.$slots, "other")
    ], 2));
  }
}), jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Field: Vt,
  FormItem: Ce
}, Symbol.toStringTag, { value: "Module" })), at = U({
  props: {
    slots: [Object, String]
  },
  // @ts-ignore
  setup(i) {
    return () => [Se("div", {}, i.slots)];
  }
}), Fl = ["onClick"], Wl = { key: 0 }, Ul = ["onClick"], Yl = { key: 1 }, Kl = {
  key: 0,
  class: "tabs-content"
}, Tt = /* @__PURE__ */ U({
  __name: "Tabs",
  props: {
    modelValue: { default: "tab-1" },
    beforeLeave: {},
    showContent: { type: Boolean, default: !0 },
    tabPosition: { default: "top" },
    closable: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(i, { emit: l }) {
    const t = i, e = R(t.modelValue), s = (_, V) => {
      if (!_.disabled) {
        if (t.beforeLeave && !t.beforeLeave(_))
          return console.log("阻止点击"), !1;
        e.value = _.name || "tab-" + (V + 1), l("change", _, V), l("update:modelValue", e.value);
      }
    }, d = R([]);
    ce(`${x}ChildrenList`, (_) => {
      d.value.push(_);
    });
    const r = (_, V) => _.name ? _.name === e.value : e.value === "tab-" + (V + 1), h = () => {
      d.value.forEach((_) => {
        _.name === t.modelValue && (e.value = _.name);
      });
    }, f = R(), g = R(), y = R(), k = R(!1), C = R(0), w = R(), c = R(!0), a = R(!1), o = F(() => ({
      transform: `translateX(-${C.value}px)`
    })), n = () => {
      ge(() => {
        if (["top", "bottom"].includes(t.tabPosition)) {
          const _ = f.value.offsetWidth, V = g.value.offsetWidth;
          k.value = _ <= V, w.value = _;
        }
      });
    }, p = (_) => {
      if (["top", "bottom"].includes(t.tabPosition)) {
        const V = y.value.offsetWidth, I = Math.abs(V - 100), O = g.value.offsetWidth;
        let H = 0;
        if (_) {
          if (a.value)
            return;
          c.value = !1, a.value = !1, H = C.value + I, H > O - V && (H = O - V, a.value = !0);
        } else {
          if (c.value)
            return;
          a.value = !1, c.value = !1, H = C.value - I, H < 0 && (H = 0, c.value = !0);
        }
        C.value = H;
      }
    }, m = (_, V) => {
      V && d.value.splice(_, 1);
    };
    return q(
      () => t.tabPosition,
      (_) => {
        ["left", "right"].includes(_) ? (C.value = 0, w.value = 0) : n();
      }
    ), ne(() => {
      h(), n(), window.addEventListener("resize", n, !1);
    }), ye(() => {
      window.removeEventListener("resize", n, !1);
    }), (_, V) => (v(), b("div", {
      class: L(`${D(x)}-tabs ${_.tabPosition}`),
      ref_key: "tabsEl",
      ref: f
    }, [
      J(_.$slots, "default"),
      $("div", {
        class: "tabs-nav",
        style: X({ width: w.value ? w.value + "px" : "" })
      }, [
        J(_.$slots, "leftExtra"),
        k.value ? (v(), b("a", {
          key: 0,
          class: L(["tabs-prev icon-arrow", { disabled: c.value }]),
          onClick: V[0] || (V[0] = (I) => p(0))
        }, null, 2)) : M("", !0),
        $("div", {
          class: "tabs-scroll",
          ref_key: "tabsScrollEl",
          ref: y
        }, [
          $("div", {
            class: "tabs-tab",
            ref_key: "tabsTabEl",
            ref: g,
            style: X(o.value)
          }, [
            (v(!0), b(Q, null, oe(d.value, (I, O) => {
              var H, u;
              return v(), b("div", {
                key: O,
                class: L(["tabs-item", {
                  disabled: I.disabled,
                  active: r(I, O)
                }]),
                onClick: (S) => s(I, O)
              }, [
                I.label ? (v(), b("span", Wl, [
                  de(K(I.label) + " ", 1),
                  I.closable || _.closable ? (v(), b("i", {
                    key: 0,
                    class: "icon-close",
                    onClick: se((S) => m(O, I.closable || _.closable), ["stop"])
                  }, null, 8, Ul)) : M("", !0)
                ])) : (H = I.slots) != null && H.label ? (v(), b("span", Yl, [
                  ue(D(at), {
                    slots: (u = I.slots) == null ? void 0 : u.label()
                  }, null, 8, ["slots"])
                ])) : M("", !0)
              ], 10, Fl);
            }), 128))
          ], 4)
        ], 512),
        k.value ? (v(), b("a", {
          key: 1,
          class: L(["tabs-next icon-arrow", { disabled: a.value }]),
          onClick: V[1] || (V[1] = (I) => p(1))
        }, null, 2)) : M("", !0),
        J(_.$slots, "rightExtra")
      ], 4),
      J(_.$slots, "content"),
      _.showContent ? (v(), b("div", Kl, [
        (v(!0), b(Q, null, oe(d.value, (I, O) => ae((v(), b("div", { key: O }, [
          ue(D(at), {
            slots: I.slots
          }, null, 8, ["slots"])
        ], 512)), [
          [fe, r(I, O)]
        ])), 128))
      ])) : M("", !0)
    ], 2));
  }
}), $t = U({
  name: "TabPane",
  props: {
    className: String,
    label: String,
    name: String,
    disabled: Boolean,
    closable: Boolean
  },
  setup(i, { slots: l }) {
    const t = le(`${x}ChildrenList`);
    t && t(Object.assign({}, i, { slots: l }));
  },
  render() {
    return null;
  }
}), Gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TabPane: $t,
  Tabs: Tt
}, Symbol.toStringTag, { value: "Module" })), Xe = We.create({
  baseURL: {}.VITE_APP_URL,
  // api的base_url
  //baseURL: 'http://localhost:3001/api', // api的base_url
  timeout: 6e3,
  // request timeout
  headers: {}
});
Xe.interceptors.request.use(
  (i) => i,
  (i) => {
    Promise.reject(i);
  }
);
Xe.interceptors.response.use(
  (i) => i.data.code === 0 ? Promise.reject(i) : i,
  (i) => Promise.reject(i)
);
const Jl = ["innerHTML"], Zl = /* @__PURE__ */ U({
  __name: "AutoForm",
  props: {
    modelValue: {},
    data: { default: () => [] },
    formData: { default: () => ({}) },
    dict: { default: () => ({}) }
  },
  emits: ["update:modelValue", "change"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = R(), d = ie({
      formValue: Object.assign({}, e.modelValue),
      urlLink: {}
    }), r = (a) => new Promise((o, n) => {
      s.value.validate(a).then(() => {
        o(d.formValue);
      }).catch((p) => {
        n(p);
      });
    }), h = () => {
      s.value.resetForm();
    }, f = (a, o) => {
      a.forEach((n) => {
        var p;
        switch (n.type) {
          case "div":
            f(n.list);
            break;
          case "tabs":
            n.columns.forEach((m) => {
              f(m.list);
            });
            break;
          case "text":
            break;
          case "component":
            d.formValue[n.name] = n.control.value;
            break;
          default:
            if (o === "dict") {
              const m = C(((p = n.config) == null ? void 0 : p.optionsKey) ?? n.name);
              m && (n.control.options = m);
            } else {
              if (n.config && n.config.url) {
                const m = g(n.config.url);
                m && (d.urlLink[m] = n);
              }
              k(n);
            }
            break;
        }
      });
    }, g = (a) => {
      const o = new RegExp("(?<=\\${)(.*?)(?=})", "g"), n = a.match(o);
      return n && n[0];
    };
    q(
      () => d.formValue,
      (a) => {
        t("update:modelValue", a);
      },
      { deep: !0 }
    ), q(
      () => e.dict,
      () => {
        f(e.data, "dict");
      },
      { deep: !0 }
    );
    const y = (a, o) => {
      t("change", a, o), d.urlLink[o] && c(d.urlLink[o], !0);
    }, k = (a) => {
      var o, n;
      if (["radio", "checkbox", "select"].includes(a.type))
        if (a.config && a.config.url)
          c(a);
        else {
          const p = C(((o = a.config) == null ? void 0 : o.optionsKey) ?? a.name);
          ((n = a.control.options) == null ? void 0 : n.length) === 0 && p && (a.control.options = p);
        }
      return a.control;
    }, C = (a) => {
      if (a === !1)
        return [];
      const o = e.dict[a];
      if (o && Object.prototype.toString.call(o) === "[object Object]") {
        const n = [];
        for (const p in o)
          n.push({
            label: o[p],
            value: p
          });
        return n;
      }
      return o;
    }, w = (a, o) => {
      var m, _;
      const n = (m = a.config) == null ? void 0 : m.linkValue, p = (_ = a.config) == null ? void 0 : _.linkResult;
      if (n) {
        const I = new Function("$", `return (${n})`)(d.formValue);
        return p === "disabled" ? (e.data[o].control.disabled = I, !0) : I;
      }
      return !0;
    }, c = (a, o) => {
      const { url: n, method: p = "post", params: m = {}, afterResponse: _ } = a.config, V = g(n);
      let I = n, O = m;
      if (V) {
        I = n.replace("${" + V + "}", d.formValue[V]);
        const u = n.split("?")[1].split("&");
        let S = "";
        if (u)
          for (const T in u)
            u[T].includes("${" + V + "}") && (S = u[T].split("=")[0]);
        O = Object.assign({}, m, { [S]: d.formValue[V] });
      }
      const H = window.sessionStorage.getItem(a.name);
      H && !o ? a.control.options = JSON.parse(H) : Xe({
        method: p,
        url: I,
        data: O,
        params: p === "get" ? m : {}
      }).then((u) => {
        let S = u.data.data;
        typeof _ == "function" && (S = _(S)), a.control.options = S, window.sessionStorage.setItem(a.name, JSON.stringify(S));
      }).catch((u) => {
        typeof _ == "function" && _(u, "catch"), a.control.options = [];
      });
    };
    return ne(() => {
      f(e.data);
    }), l({ validate: r, resetForm: h }), (a, o) => (v(), Z(D(gt), re(a.formData, {
      ref_key: "autoFormEl",
      ref: s
    }), {
      default: te(() => [
        (v(!0), b(Q, null, oe(a.data, (n, p) => (v(), b(Q, { key: p }, [
          w(n, p) ? (v(), b(Q, { key: 0 }, [
            n.type === "tabs" ? (v(), Z(D(Tt), Ae(re({ key: 0 }, n.tabs)), {
              default: te(() => [
                (v(!0), b(Q, null, oe(n.columns, (m, _) => (v(), Z(D($t), {
                  key: `pane${_}`,
                  label: m.tabPane.label
                }, {
                  default: te(() => [
                    (v(!0), b(Q, null, oe(m.list, (V, I) => (v(), b(Q, { key: I }, [
                      V.type === "component" ? (v(), Z(D(Ce), Ae(re({ key: 0 }, V.formItem)), {
                        default: te(() => [
                          (v(), Z(Pe(V.component), re({
                            modelValue: d.formValue[V.name],
                            "onUpdate:modelValue": (O) => d.formValue[V.name] = O
                          }, V.control, {
                            onChange: (O) => y(O, V.name)
                          }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"]))
                        ]),
                        _: 2
                      }, 1040)) : (v(), Z(D(Ce), re({ key: 1 }, V.formItem, {
                        type: V.type,
                        modelValue: d.formValue[V.name],
                        "onUpdate:modelValue": (O) => d.formValue[V.name] = O,
                        data: V.control,
                        onChange: (O) => y(O, V.name)
                      }), null, 16, ["type", "modelValue", "onUpdate:modelValue", "data", "onChange"]))
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 2
            }, 1040)) : n.type === "div" ? (v(), b("div", re({ key: 1 }, n.control, { class: "div-row" }), [
              (v(!0), b(Q, null, oe(n.list, (m, _) => (v(), b(Q, { key: _ }, [
                m.type === "component" ? (v(), Z(D(Ce), Ae(re({ key: 0 }, m.formItem)), {
                  default: te(() => [
                    (v(), Z(Pe(m.component), re({
                      modelValue: d.formValue[m.name],
                      "onUpdate:modelValue": (V) => d.formValue[m.name] = V
                    }, m.control, {
                      onChange: (V) => y(V, m.name)
                    }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"]))
                  ]),
                  _: 2
                }, 1040)) : (v(), Z(D(Ce), re({ key: 1 }, m.formItem, {
                  type: m.type,
                  modelValue: d.formValue[m.name],
                  "onUpdate:modelValue": (V) => d.formValue[m.name] = V,
                  data: m.control,
                  onChange: (V) => y(V, m.name)
                }), null, 16, ["type", "modelValue", "onUpdate:modelValue", "data", "onChange"]))
              ], 64))), 128))
            ], 16)) : n.type === "text" ? (v(), b("div", re({
              key: 2,
              class: "form-title",
              innerHTML: n.name
            }, n.control), null, 16, Jl)) : n.type === "component" ? (v(), Z(D(Ce), Ae(re({ key: 3 }, n.formItem)), {
              default: te(() => [
                (v(), Z(Pe(n.component), re({
                  modelValue: d.formValue[n.name],
                  "onUpdate:modelValue": (m) => d.formValue[n.name] = m
                }, n.control, {
                  onChange: (m) => y(m, n.name)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"]))
              ]),
              _: 2
            }, 1040)) : (v(), Z(D(Ce), re({ key: 4 }, n.formItem, {
              modelValue: d.formValue[n.name],
              "onUpdate:modelValue": (m) => d.formValue[n.name] = m,
              type: n.type,
              data: n.control,
              onChange: (m) => y(m, n.name)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "type", "data", "onChange"]))
          ], 64)) : M("", !0)
        ], 64))), 128))
      ]),
      _: 1
    }, 16));
  }
}), Xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoForm: Zl
}, Symbol.toStringTag, { value: "Module" })), Ql = ["onClick"], ql = ["textContent"], eo = /* @__PURE__ */ U({
  __name: "BackTop",
  props: {
    text: { default: "返回顶部" },
    height: { default: 200 },
    bottom: { default: 30 },
    right: { default: 30 }
  },
  emits: ["click"],
  setup(i, { emit: l }) {
    const t = i, e = R(!1), s = R();
    let d = null;
    const r = () => {
      g();
      function g() {
        const y = Ue();
        y > 0 && (d = window.requestAnimationFrame(g), window.scrollTo(0, y - y / 5));
      }
      l("click");
    }, h = () => {
      d && window.cancelAnimationFrame(d);
    };
    ne(() => {
      ge(() => {
        document.body.appendChild(s.value), window.addEventListener("scroll", f), document.addEventListener("click", h);
      });
    }), ye(() => {
      window.removeEventListener("scroll", f), document.removeEventListener("click", h), s.value && s.value.parentNode && s.value.parentNode.removeChild(s.value);
    });
    const f = () => {
      e.value = Ue() > t.height;
    };
    return (g, y) => (v(), b("div", {
      ref_key: "element",
      ref: s,
      class: L(`${D(x)}-back-top`),
      style: X({
        right: g.right + "px",
        bottom: g.bottom + "px",
        opacity: e.value ? 1 : 0,
        visibility: e.value ? "visible" : "hidden"
      }),
      onClick: se(r, ["stop"])
    }, [
      $("a", {
        href: "javascript:",
        class: "icon-top",
        textContent: K(g.text)
      }, null, 8, ql)
    ], 14, Ql));
  }
}), to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BackTop: eo
}, Symbol.toStringTag, { value: "Module" })), lo = /* @__PURE__ */ U({
  __name: "Badge",
  props: {
    value: {},
    dot: { type: Boolean, default: !1 },
    max: { default: 99 },
    type: { default: "danger" }
  },
  setup(i) {
    const l = i, t = F(() => typeof l.value == "number" && !isNaN(l.value) && l.value > l.max ? l.max + "+" : l.value), e = F(() => l.value && l.dot);
    return (s, d) => (v(), b("span", {
      class: L({ [D(x) + "-badge"]: !0, dot: e.value, [s.type]: !0 })
    }, [
      J(s.$slots, "default"),
      $("sup", null, K(t.value), 1)
    ], 2));
  }
}), oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Badge: lo
}, Symbol.toStringTag, { value: "Module" })), no = { class: "breadcrumb clearfix" }, ao = ["textContent"], so = /* @__PURE__ */ U({
  __name: "Breadcrumb",
  props: {
    data: {},
    separator: { default: ">" }
  },
  setup(i) {
    return (l, t) => {
      const e = Ye("router-link");
      return v(), b("div", no, [
        (v(!0), b(Q, null, oe(l.data, (s, d) => (v(), b(Q, null, [
          s.href ? (v(), Z(e, {
            key: d,
            class: L({ "last-child": l.data.length === d + 1 }),
            to: s.href
          }, {
            default: te(() => [
              de(K(s.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "to"])) : (v(), b("span", {
            key: `span${d}`,
            textContent: K(s.title)
          }, null, 8, ao)),
          l.data.length > d + 1 ? (v(), b("span", {
            key: d + 100,
            class: "separator"
          }, K(l.separator), 1)) : M("", !0)
        ], 64))), 256))
      ]);
    };
  }
}), io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Breadcrumb: so
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
var st;
(function(i) {
  i.pop = "pop", i.push = "push";
})(st || (st = {}));
var it;
(function(i) {
  i.back = "back", i.forward = "forward", i.unknown = "";
})(it || (it = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var rt;
(function(i) {
  i[i.aborted = 4] = "aborted", i[i.cancelled = 8] = "cancelled", i[i.duplicated = 16] = "duplicated";
})(rt || (rt = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const ro = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function xt() {
  return le(ro);
}
const uo = ["type", "disabled"], co = ["href"], De = /* @__PURE__ */ U({
  __name: "Button",
  props: {
    type: { default: "" },
    size: { default: "" },
    routerTo: { default: "" },
    href: { default: "" },
    icon: { default: "" },
    round: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    nativeType: { default: "" },
    width: { default: "" },
    name: { default: "" },
    loading: { type: Boolean, default: !1 },
    plain: { type: Boolean },
    circle: { type: Boolean }
  },
  emits: ["click"],
  setup(i, { emit: l }) {
    const t = i, e = le(`${x}GroupConfig`, {}), s = le(`${x}BtnClick`, ""), d = F(() => t.loading ? !0 : ke(e.disabled || t.disabled) || !1), r = R(t.width || e.width), h = F(() => {
      const k = t.size || e.size || "";
      return {
        [`${x}-btn`]: !0,
        "is-round": t.round || e.round,
        [`${x}-btn-` + t.type]: t.type,
        disabled: d.value,
        [k]: k,
        "is-plain": t.plain || e.plain,
        "is-circle": t.circle || e.plain
      };
    }), f = F(() => t.routerTo ? xt().resolve({ path: t.routerTo }).href : t.href ? t.href : null), g = (k) => {
      d.value || (l("click", k), s && s(k, t.name));
    }, y = F(() => t.loading ? "loading" : t.icon);
    return (k, C) => k.nativeType ? (v(), b("button", re({ key: 0 }, k.$attrs, {
      type: k.nativeType,
      class: h.value,
      disabled: d.value,
      style: { width: r.value },
      onClick: g
    }), [
      y.value ? (v(), b("i", {
        key: 0,
        class: L(`icon-${[y.value]} ${D(x)}-icon`)
      }, null, 2)) : M("", !0),
      J(k.$slots, "default")
    ], 16, uo)) : (v(), b("a", re({ key: 1 }, k.$attrs, {
      class: h.value,
      href: d.value ? null : f.value,
      style: { width: r.value },
      onClick: g
    }), [
      y.value ? (v(), b("i", {
        key: 0,
        class: L(`icon-${[y.value]} ${D(x)}-icon`)
      }, null, 2)) : M("", !0),
      J(k.$slots, "default")
    ], 16, co));
  }
}), fo = /* @__PURE__ */ U({
  __name: "ButtonGroup",
  props: {
    size: { default: "" },
    round: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    width: { default: "" },
    plain: { type: Boolean }
  },
  emits: ["click"],
  setup(i, { emit: l }) {
    const t = i;
    return ce(`${x}GroupConfig`, t), ce(`${x}BtnClick`, (e, s) => {
      t.disabled || l("click", e, s);
    }), (e, s) => (v(), b("div", {
      class: L({ [`${D(x)}-btn-group`]: !0 })
    }, [
      J(e.$slots, "default")
    ], 2));
  }
}), po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: De,
  ButtonGroup: fo
}, Symbol.toStringTag, { value: "Module" })), go = {
  name: "ItemList",
  props: {
    childItem: Object,
    styleCls: Object,
    className: String
  },
  render() {
    const i = ["carousel-slide"], l = this.childItem.className;
    return l && i.push(l), this.className && i.push(this.className), Se(
      "div",
      {
        class: i.join(" "),
        style: this.styleCls
      },
      [J(this.childItem.slots, "default")]
    );
  }
}, mo = {
  key: 0,
  class: "direction-nav"
}, ho = {
  key: 1,
  class: "control-nav"
}, vo = ["onClick"], yo = /* @__PURE__ */ U({
  __name: "Carousel",
  props: {
    loop: { type: Boolean },
    move: { default: 1 },
    itemWidth: {},
    itemHeight: {},
    active: { default: 1 },
    duration: { default: 500 },
    showTime: { default: 3e3 },
    autoPlay: { type: Boolean },
    pauseOnHover: { type: Boolean, default: !0 },
    controlNav: { type: Boolean, default: !0 },
    directionNav: { type: Boolean, default: !0 },
    showNumber: { default: 1 },
    direction: { default: "h" },
    type: { default: "" }
  },
  emits: ["slideBefore", "slideAfter"],
  setup(i, { emit: l }) {
    const t = i, e = ie({
      children: [],
      index: t.active,
      // 从1开始
      width: 0,
      duration2: 0,
      // timer: 0, // 控制自动播放
      maxMove: 0,
      isAnimation: !1,
      moveDirection: 0,
      // 移动方向1右-1左
      defaultMove: 0
      // 初始移动位置
    });
    ce(`${x}ChildrenList`, e.children);
    const s = R(), d = F(() => {
      const m = e.children.length;
      let _ = e.width, V = "translateX";
      const I = ie({
        width: ""
      });
      if (t.direction === "v" ? (_ = t.itemHeight, V = "translateY") : I.width = m * _ + "px", _ && m > 0) {
        const O = -_ * t.move;
        let H = O * e.moveDirection;
        if (t.loop)
          H += O;
        else if (H = O * (e.index - 1), t.direction === "h") {
          const u = s.value.offsetWidth - m * _;
          H < u && (H = u);
        }
        return Object.assign(
          {
            overflow: "hidden",
            transform: `${V}(${H}px)`,
            transition: `transform ${e.duration2}ms`
          },
          I
        );
      } else
        return {};
    }), r = F(() => {
      const m = ie({
        "overflow-x": "hidden",
        height: "",
        "overflow-y": ""
      });
      return e.width && Object.assign(m, { width: e.width * t.showNumber + "px" }), t.direction === "v" && (t.itemHeight && (m.height = t.itemHeight * t.showNumber + "px"), m["overflow-y"] = "hidden"), m;
    }), h = () => {
      let m = 0;
      !t.loop && t.showNumber > 1 && (m = Math.ceil(t.showNumber / t.move) - 1), e.maxMove = Math.ceil((e.children.length - m) / t.move), t.loop && e.children.length >= t.move && y(-1);
    }, f = (m) => {
      if (!e.isAnimation) {
        if (m === 1)
          if (e.maxMove > e.index)
            e.index++;
          else if (t.loop)
            e.index = 1;
          else
            return;
        else if (e.index > 1)
          e.index--;
        else if (t.loop)
          e.index = e.maxMove;
        else
          return;
        e.isAnimation = !0, l("slideBefore", e.index), e.moveDirection = m, e.duration2 = t.duration, g(m);
      }
    }, g = (m) => {
      setTimeout(() => {
        t.loop && (e.moveDirection = 0, e.duration2 = 0, y(m)), e.isAnimation = !1, l("slideAfter", e.index);
      }, t.duration);
    }, y = (m, _) => {
      if (!t.loop)
        return;
      const V = _ || t.move;
      if (m === 1) {
        const I = e.children.slice(0, V);
        e.children.splice(0, V), I.forEach((O) => {
          e.children.push(O);
        });
      } else {
        const I = e.children.slice(e.children.length - V);
        for (let O = I.length; O > 0; O--)
          e.children.unshift(I[O - 1]);
        e.children.splice(e.children.length - V);
      }
    }, k = (m) => {
      m > e.index ? y(1, m - e.index) : y(-1, e.index - m), e.index = m;
    };
    let C = 0;
    const w = () => {
      t.autoPlay && (C = setInterval(() => {
        f(1);
      }, t.showTime));
    }, c = () => {
      t.pauseOnHover && t.autoPlay && clearInterval(C);
    }, a = () => {
      w();
    }, o = (m) => {
      if (t.type === "card") {
        const _ = { 3: 2, 5: 3, 7: 4 };
        let V = _[t.showNumber] - 2 + e.index, I = 0;
        t.loop && (V = _[t.showNumber] + e.moveDirection, I = _[t.showNumber]);
        let O = "";
        return V === m && (O = "big-size"), I === m && (O += " normal-size"), O;
      }
    }, n = () => {
      t.itemWidth ? e.width = t.itemWidth : e.width = s.value.offsetWidth / t.showNumber;
    }, p = () => {
      n();
    };
    return ne(() => {
      h(), ge(() => {
        n();
      }), w(), window.addEventListener("resize", p);
    }), Ke(() => {
      window.removeEventListener("resize", p), e.children = [];
    }), (m, _) => (v(), b("div", {
      ref_key: "domEl",
      ref: s,
      class: L({
        [D(x) + "-carousel"]: !0,
        vertical: m.direction === "v",
        [m.type]: m.type
      }),
      onMouseleave: a,
      onMouseover: c
    }, [
      $("div", {
        class: "carousel-container",
        style: X(r.value)
      }, [
        J(m.$slots, "default"),
        $("div", {
          style: X(d.value),
          class: "carousel-transform clearfix"
        }, [
          (v(!0), b(Q, null, oe(e.children, (V, I) => (v(), Z(go, {
            key: `item${I}`,
            "child-item": V,
            "class-name": o(I),
            "style-cls": { width: e.width + "px", height: m.itemHeight + "px" }
          }, null, 8, ["child-item", "class-name", "style-cls"]))), 128))
        ], 4)
      ], 4),
      m.directionNav ? (v(), b("div", mo, [
        $("a", {
          class: L(["carousel-prev", { disabled: !m.loop && e.index <= 1 }]),
          onClick: _[0] || (_[0] = (V) => f(-1))
        }, null, 2),
        $("a", {
          class: L(["carousel-next", { disabled: !m.loop && e.index >= e.maxMove }]),
          onClick: _[1] || (_[1] = (V) => f(1))
        }, null, 2)
      ])) : M("", !0),
      m.controlNav ? (v(), b("div", ho, [
        (v(!0), b(Q, null, oe(e.maxMove, (V) => (v(), b("a", {
          key: V,
          href: "javascript:",
          class: L({ "control-nav-active": e.index === V }),
          onClick: (I) => k(V)
        }, K(V), 11, vo))), 128))
      ])) : M("", !0)
    ], 34));
  }
}), bo = U({
  name: "CarouselItem",
  props: {
    className: String
  },
  setup(i, { slots: l }) {
    const t = le(`${x}ChildrenList`);
    return t.push({
      slots: l,
      props: i
    }), {
      childrenList: t
    };
  },
  render() {
    return null;
  }
}), ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Carousel: yo,
  CarouselItem: bo
}, Symbol.toStringTag, { value: "Module" })), wo = {
  key: 1,
  viewBox: "0 0 50 50",
  class: "loading-svg"
}, Co = /* @__PURE__ */ $("circle", {
  class: "svg-path",
  cx: "25",
  cy: "25",
  r: "20",
  fill: "none"
}, null, -1), _o = [
  Co
], xe = /* @__PURE__ */ U({
  __name: "Loading",
  props: {
    text: {},
    background: {},
    spinner: {},
    lock: { type: Boolean },
    el: { default: () => ({}) },
    zIndex: {},
    modelValue: { type: Boolean, default: !1 }
  },
  setup(i, { expose: l }) {
    const t = i, e = ie({
      visible: t.modelValue,
      scrollbarWidth: 17
    });
    return q(
      () => t.modelValue,
      (r) => {
        e.visible = r;
      }
    ), ne(() => {
      ge(() => {
        e.scrollbarWidth = vt();
      });
    }), l({ close: () => {
      e.visible = !1, t.lock && (document.body.style.overflow = "", document.body.style.paddingRight = "");
    }, open: () => {
      e.visible = !0, t.lock && (document.body.style.overflow = "hidden", document.body.style.paddingRight = e.scrollbarWidth + "px");
    } }), (r, h) => (v(), Z(be, {
      name: `${D(x)}-loading-fade`
    }, {
      default: te(() => [
        ae($("div", {
          style: X({ backgroundColor: r.background || "", "z-index": r.zIndex }),
          class: L({
            "no-background": r.background === "none",
            [D(x) + "-loading-full"]: !r.el,
            [D(x) + "-loading"]: !0
          })
        }, [
          $("div", {
            class: L(`${D(x)}-loading-spinner`)
          }, [
            r.spinner ? (v(), b("i", {
              key: 0,
              class: L([r.spinner, [D(x) + "-icon-rotate"]])
            }, null, 2)) : (v(), b("svg", wo, _o)),
            r.text ? (v(), b("p", {
              key: 2,
              class: L(`${D(x)}-loading-text`)
            }, K(r.text), 3)) : M("", !0)
          ], 2)
        ], 6), [
          [fe, e.visible]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), So = { key: 0 }, Vo = {
  key: 1,
  class: "empty-text"
}, To = ["onClick"], $o = {
  key: 0,
  class: "icon-hook"
}, xo = {
  key: 4,
  class: "icon-arrow"
}, Bo = /* @__PURE__ */ U({
  __name: "Cascader",
  props: {
    modelValue: { default: () => [] },
    multiple: { type: Boolean },
    filterable: { type: Boolean },
    downClass: {},
    options: { default: () => [] },
    optionsKey: { default: () => ({ label: "label", value: "value" }) },
    showAllLevels: { type: Boolean, default: !0 },
    emptyText: { default: "暂无数据" },
    lazy: { type: Boolean },
    lazyLoad: {},
    checkAny: { type: Boolean }
  },
  emits: ["update:modelValue", "change", "input"],
  setup(i, { emit: l }) {
    const t = i, e = ie({
      downDataList: [],
      // 下拉面板的数据
      showLabel: [],
      // 用于展示的值，格式化后显示于输入框的值
      checked: [],
      // 用来判断点击选中状态
      multipleChecked: [],
      // 多选时，用于临时保存勾选的值
      loadingId: "",
      // 异步加载时用于显示加载状态
      timer: 0,
      lazyOptions: t.options
    }), { downDataList: s, loadingId: d, showLabel: r } = Le(e), { optionsKey: h } = Le(t), f = h.value.label, g = h.value.value, y = R(), k = R(t.modelValue.join(","));
    q(
      () => t.options,
      (A) => {
        e.lazyOptions = A, t.filterable && T("`");
      }
    );
    const C = F(() => {
      const A = x + "-cascader-down";
      return t.downClass ? t.downClass + " " + A : A;
    }), w = F(() => {
      const A = [];
      return t.lazy ? P(e.lazyOptions, {}) : P(t.options, {}), A;
      function P(W, B) {
        W.forEach((E) => {
          const N = JSON.parse(JSON.stringify(E));
          delete N.children, delete N._fullLabel, delete N._fullValue;
          const j = E.children && (E.children.length > 0 || t.lazy);
          E._fullLabel = B.fullLabel ? B.fullLabel + "," + E[f] : "", E._fullValue = B.fullValue ? B.fullValue + "," + E[g] : "", A.push(
            Object.assign({}, N, {
              tid: B.parentId,
              hasChild: j,
              fullLabel: E._fullLabel,
              fullValue: E._fullValue
            })
          ), j && P(E.children, {
            parentId: E[g],
            fullLabel: E._fullLabel || E[f],
            fullValue: E._fullValue || E[g]
          });
        });
      }
    }), c = () => {
      if (t.modelValue && t.modelValue.length > 0) {
        e.showLabel = [], t.modelValue.forEach((A) => {
          e.showLabel.push(A.replace(/,/g, "/"));
        });
        for (let A = 0; A < t.modelValue.length; A++)
          w.value.forEach((P) => {
            if (P.fullValue && P.fullValue === t.modelValue[A]) {
              let W = P.fullLabel || P[f];
              if (!t.showAllLevels) {
                const B = W.lastIndexOf(",");
                W = W.substr(B + 1);
              }
              e.showLabel.splice(A, 1, W.replace(/,/g, "/"));
            }
          });
      } else
        e.showLabel = [];
    };
    q(
      () => t.modelValue,
      () => {
        c();
      }
    ), c();
    const a = (A) => w.value.filter((P) => P.tid === A), o = le(`${x}ControlChange`, ""), n = (A) => {
      l("update:modelValue", A), l("change", A), y.value.slideUp(), o && o(A);
    }, p = () => {
      e.downDataList = [];
      const A = a();
      A && A.length > 0 && e.downDataList.push(A);
      const P = t.modelValue[0];
      if (P && P.length > 0) {
        const W = P.split(",");
        for (let B = 0; B < W.length - 1; B++) {
          const E = a(W[B]);
          E && E.length > 0 && e.downDataList.push(E);
        }
      }
    }, m = (A) => {
      if (A)
        e.checked = t.modelValue.join(",").split(","), t.checkAny && (e.checked = JSON.parse(JSON.stringify(t.modelValue))), t.lazy && w.value.length === 0 ? Y() : p(), t.multiple && (e.multipleChecked = JSON.parse(JSON.stringify(t.modelValue)));
      else if (t.multiple)
        n(e.multipleChecked);
      else if (t.checkAny) {
        let P = [];
        k.value && (P = [k.value]), n(P);
      }
    }, _ = (A, P, W) => {
      if (!t.multiple && W.target.className === "checked" || A.disabled)
        return;
      e.downDataList.splice(P + 1, e.downDataList.length - P + 1);
      const B = a(A[g]);
      B && B.length > 0 ? e.downDataList.push(B) : ((!t.multiple && !t.lazy || !A.hasChild) && (t.checkAny || n([A.fullValue || A[g]])), t.lazy && (e.loadingId = A[g], Y(A, "childrenClick"))), t.multiple || (e.checked = (A.fullValue || A[g]).split(","));
    }, V = (A, P) => {
      if (t.checkAny)
        return e.checked.indexOf(A.fullValue || A[g]) !== -1;
      const W = e.checked.indexOf(A[g]);
      if (t.multiple && A.hasChild && W !== -1 && P) {
        const B = a(A[g]);
        let E = !0;
        if (B.forEach((N) => {
          e.checked.indexOf(N[g]) === -1 && (E = !1);
        }), E)
          return !0;
        A.someSelect = !0;
      } else
        return W !== -1;
    }, I = () => {
      e.checked = [], n([]);
    }, O = (A, P) => {
      const W = e.checked.indexOf(A);
      P ? W === -1 && e.checked.push(A) : W !== -1 && e.checked.splice(W, 1);
    }, H = (A, P) => {
      const W = e.multipleChecked.indexOf(A);
      P && W === -1 && e.multipleChecked.push(A), !P && W !== -1 && e.multipleChecked.splice(W, 1);
    }, u = (A, P) => {
      if (A.disabled)
        return;
      let W = A[g];
      t.checkAny ? W = A.fullValue || A[g] : E(A, P), O(W, P), A.hasChild && !t.checkAny ? B(A, P) : H(A.fullValue || A[g], P);
      function B(N, j) {
        a(N[g]).forEach((ee) => {
          O(ee[g], j), ee.hasChild ? B(ee, j) : H(ee.fullValue, j);
        });
      }
      function E(N, j) {
        const G = a(N.tid);
        let ee = !0, pe = !1;
        j && (pe = !0), G.forEach((we) => {
          e.checked.indexOf(we[g]) === -1 ? ee = !1 : pe = !0, we.someSelect && (pe = !0);
        });
        const me = w.value.filter((we) => we[g] === N.tid);
        me && me.length > 0 && (O(me[0][g], ee), ee ? me[0].someSelect = !1 : me[0].someSelect = pe, me[0].tid && E(me[0], j));
      }
    }, S = (A) => {
      const P = JSON.parse(JSON.stringify(t.modelValue));
      P.splice(A, 1), n(P);
    }, T = (A) => {
      e.downDataList = [];
      const P = [];
      w.value.forEach((W) => {
        !W.hasChild && (W.fullLabel.indexOf(A) !== -1 || A === "`") && P.push({
          [f]: W.fullLabel.replace(/,/g, "/"),
          [g]: W.fullValue,
          fullLabel: W.fullLabel,
          fullValue: W.fullValue
        });
      }), A || P.splice(0, P.length), e.downDataList.push(P);
    }, z = (A) => {
      clearTimeout(e.timer), e.timer = setTimeout(() => {
        t.lazy || T(A), l("input", A);
      }, 500);
    }, Y = async (A, P) => {
      if (!t.lazyLoad)
        return;
      if (await W(A, P), !P && t.modelValue.length > 0) {
        const E = t.modelValue[0];
        if (E && E.length > 0) {
          const N = E.split(",");
          for (let j = 0; j < N.length - 1; j++) {
            const G = { [g]: N[j] };
            await W(G, P);
          }
        }
      }
      async function W(E, N) {
        t.lazyLoad && t.lazyLoad(E, (j) => {
          if (!j || j && j.length === 0) {
            n([E.fullValue || E[g]]), e.loadingId = "";
            return;
          }
          if (!E)
            e.lazyOptions = j;
          else {
            if (E.hasChild = !0, B(e.lazyOptions, E, j), N) {
              const G = a(E[g]);
              G && G.length > 0 && e.downDataList.push(G);
            }
            e.loadingId = "";
          }
          N || p();
        });
      }
      function B(E, N, j) {
        E.forEach((G) => {
          let ee = !1;
          G[g] === N[g] && (G.children = j, ee = !0), !ee && G.children && B(G.children, N, j);
        });
      }
    };
    return (A, P) => (v(), Z(D(Ie), re(A.$props, {
      ref_key: "selectDownEl",
      ref: y,
      "down-class": C.value,
      options: [],
      "options-key": "",
      lazyload: "",
      class: { [`${D(x)}-cascader`]: !0 },
      "model-value": D(r),
      onClear: I,
      onDelete: S,
      onInput: z,
      onToggleClick: m
    }), {
      default: te(() => [
        A.lazy && D(s).length === 0 ? (v(), b("p", So, [
          ue(xe, {
            "model-value": !0,
            text: "加载中",
            background: "#fff"
          })
        ])) : D(s).length === 0 ? (v(), b("ul", Vo, [
          $("li", null, K(A.emptyText), 1)
        ])) : M("", !0),
        (v(!0), b(Q, null, oe(D(s), (W, B) => (v(), b("ul", {
          key: B,
          onClick: P[3] || (P[3] = se(() => {
          }, ["stop"]))
        }, [
          (v(!0), b(Q, null, oe(W, (E) => (v(), b("li", {
            key: E[D(h).label],
            class: L({ checked: V(E), disabled: E.disabled }),
            onClick: (N) => _(E, B, N)
          }, [
            !E.hasChild && !A.multiple && !A.checkAny ? (v(), b("i", $o)) : M("", !0),
            A.checkAny && !A.multiple ? (v(), Z(D(Je), {
              key: 1,
              modelValue: k.value,
              "onUpdate:modelValue": P[0] || (P[0] = (N) => k.value = N),
              value: E.fullValue || E.value,
              onClick: P[1] || (P[1] = se(() => {
              }, ["stop"]))
            }, null, 8, ["modelValue", "value"])) : M("", !0),
            A.multiple ? (v(), Z(D(Ve), {
              key: 2,
              disabled: E.disabled,
              "model-value": V(E, !0),
              class: L({ "some-select": E.someSelect }),
              onChange: (N) => u(E, N),
              onClick: P[2] || (P[2] = se(() => {
              }, ["stop"]))
            }, null, 8, ["disabled", "model-value", "class", "onChange"])) : M("", !0),
            $("a", null, K(E[D(h).label]), 1),
            A.lazy && E[D(h).value] === D(d) ? (v(), Z(xe, {
              key: W[D(h).label],
              class: "loading",
              background: "#fff",
              "model-value": !0
            })) : M("", !0),
            E.hasChild ? (v(), b("i", xo)) : M("", !0)
          ], 10, To))), 128))
        ]))), 128))
      ]),
      _: 1
    }, 16, ["down-class", "class", "model-value"]));
  }
}), Io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Cascader: Bo
}, Symbol.toStringTag, { value: "Module" })), Ao = /* @__PURE__ */ U({
  __name: "Collapse",
  props: {
    modelValue: { default: () => [] },
    accordion: { type: Boolean }
  },
  emits: ["change"],
  setup(i, { emit: l }) {
    const t = i, e = (s) => {
      l("change", s);
    };
    return ce(`${x}ChangePanel`, e), ce(
      `${x}Props`,
      ie({
        modelValue: t.modelValue,
        accordion: t.accordion
      })
    ), (s, d) => (v(), b("div", {
      class: L(`${D(x)}-collapse`)
    }, [
      J(s.$slots, "default")
    ], 2));
  }
}), ut = "0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out", Lo = {
  onBeforeEnter(i) {
    const l = i;
    l.style.transition = ut, l.dataset && (l.dataset.oldPaddingTop = l.style.paddingTop, l.dataset.oldPaddingBottom = l.style.paddingBottom), l.style.height = "0", l.style.paddingTop = "0", l.style.paddingBottom = "0";
  },
  onEnter(i) {
    const l = i;
    l.dataset.oldOverflow = l.style.overflow, l.style.transitionProperty = "all", l.scrollHeight !== 0 ? (l.style.height = l.scrollHeight + "px", l.style.paddingTop = l.dataset.oldPaddingTop || "", l.style.paddingBottom = l.dataset.oldPaddingBottom || "") : (l.style.height = "", l.style.paddingTop = l.dataset.oldPaddingTop || "", l.style.paddingBottom = l.dataset.oldPaddingBottom || ""), l.style.overflow = "hidden";
  },
  onAfterEnter(i) {
    const l = i;
    l.style.transition = "", l.style.height = "", l.style.overflow = l.dataset.oldOverflow || "";
  },
  onBeforeLeave(i) {
    const l = i;
    l.dataset && (l.dataset.oldPaddingTop = l.style.paddingTop, l.dataset.oldPaddingBottom = l.style.paddingBottom, l.dataset.oldOverflow = l.style.overflow), l.style.height = l.scrollHeight + "px", l.style.overflow = "hidden";
  },
  onLeave(i) {
    const l = i;
    l.style.transitionProperty = "all", l.scrollHeight !== 0 && (l.style.transition = ut, l.style.height = "0", l.style.paddingTop = "0", l.style.paddingBottom = "0");
  },
  onAfterLeave(i) {
    const l = i;
    l.style.transition, l.style.height = "", l.style.overflow = l.dataset.oldOverflow || "", l.style.paddingTop = l.dataset.oldPaddingTop || "", l.style.paddingBottom = l.dataset.oldPaddingBottom || "";
  }
}, Oo = {
  functional: !0,
  setup() {
    return {
      collapseTransitionProps: Lo
    };
  }
}, Do = (i, l) => {
  const t = i.__vccOpts || i;
  for (const [e, s] of l)
    t[e] = s;
  return t;
};
function Eo(i, l, t, e, s, d) {
  return v(), Z(be, Ae(Et(e.collapseTransitionProps)), {
    default: te(() => [
      J(i.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Qe = /* @__PURE__ */ Do(Oo, [["render", Eo]]), Mo = /* @__PURE__ */ U({
  __name: "Panel",
  props: {
    name: {}
  },
  setup(i) {
    const l = i, t = Re(), e = l.name || Math.random().toString(36).substr(2, 8), s = le(`${x}Props`), d = le(`${x}ChangePanel`), r = F(() => s.modelValue.indexOf(e) !== -1), h = (f) => {
      if (f === 1 && t.trigger)
        return;
      const g = s.modelValue, y = g.indexOf(e);
      s.accordion ? y !== -1 ? g.splice(y, 1) : g.splice(y, 1, e) : y !== -1 ? g.splice(y, 1) : g.push(e), d && d(r.value);
    };
    return ne(() => {
    }), (f, g) => (v(), b("div", {
      class: L([{ active: r.value }, "collapse-panel"])
    }, [
      $("div", {
        class: "collapse-title",
        onClick: g[1] || (g[1] = (y) => h(1))
      }, [
        $("i", {
          class: L(["icon-arrow arrow", { down: r.value }])
        }, null, 2),
        J(f.$slots, "default"),
        f.$slots.trigger ? (v(), b("span", {
          key: 0,
          onClick: g[0] || (g[0] = (y) => h())
        }, [
          J(f.$slots, "trigger")
        ])) : M("", !0)
      ]),
      ue(Qe, null, {
        default: te(() => [
          ae($("div", {
            ref: "content",
            class: L([{ active: r.value }, "collapse-content"])
          }, [
            J(f.$slots, "content")
          ], 2), [
            [fe, r.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), Po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Collapse: Ao,
  CollapsePanel: Mo
}, Symbol.toStringTag, { value: "Module" })), No = /* @__PURE__ */ U({
  __name: "Sidebar",
  props: {
    modelValue: {},
    sideBarHeight: {}
  },
  emits: ["update:modelValue"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = R(0);
    q(
      () => e.sideBarHeight,
      () => {
        g();
      }
    );
    const d = (y) => {
      const k = e.sideBarHeight, C = y.pageY - s.value;
      document.onmousemove = (w) => {
        let c = w.pageY - C;
        c >= k && (c = k), c <= 0 && (c = 0), r(c, k);
      }, document.onmouseup = () => {
        document.onmousemove = null, document.onmouseup = null;
      }, y.stopPropagation();
    }, r = (y, k) => {
      s.value = y;
      const C = k / 6;
      let w = [];
      y <= k / 6 ? w = [255, f(y, C, 0), 0] : y <= k * 2 / 6 ? w = [255 - f(y, C, 1), 255, 0] : y <= k * 3 / 6 ? w = [0, 255, f(y, C, 2)] : y <= k * 4 / 6 ? w = [0, 255 - f(y, C, 3), 255] : y < k * 5 / 6 ? w = [f(y, C, 4), 0, 255] : y <= k * 6 / 6 && (w = [255, 0, 255 - f(y, C, 5)]);
      const c = {
        r: w[0],
        g: w[1],
        b: w[2]
      };
      t("update:modelValue", c);
    }, h = (y) => {
      const k = e.sideBarHeight;
      r(y.offsetY, k), d(y);
    }, f = (y, k, C) => {
      const w = (y - k * C) / k * 255;
      return parseInt(w.toString());
    }, g = () => {
      const { r: y, g: k, b: C } = e.modelValue;
      let w = 0;
      const c = e.sideBarHeight / 6;
      y === 255 && C === 0 && (w = k / 255 * c), k === 255 && C === 0 && (w = (y / 255 + 1) * c), k === 255 && y === 0 && (w = (C / 255 + 2) * c), C === 255 && y === 0 && (w = (k / 255 + 3) * c), C === 255 && k === 0 && (w = (y / 255 + 4) * c), y === 255 && k === 0 && (w = (C / 255 + 5) * c), s.value = w;
    };
    return l({ calcTop: g }), (y, k) => (v(), b("div", {
      class: "color-slider",
      onMousedown: h
    }, [
      $("span", {
        class: "color-slier-thumb",
        style: X({ top: s.value + "px" }),
        onMousedown: d
      }, null, 36)
    ], 32));
  }
}), Ro = /* @__PURE__ */ $("div", { class: "color-white-panel" }, null, -1), zo = /* @__PURE__ */ $("div", { class: "color-block-panel" }, null, -1), Ho = ["onMousedown"], jo = /* @__PURE__ */ U({
  __name: "Panel",
  props: {
    bgColor: {},
    showColor: {}
  },
  setup(i, { expose: l }) {
    const t = i, e = R(), s = ie({
      style: {
        left: 0,
        top: 0
      },
      panelBgInfo: {
        w: 0,
        x: 0,
        y: 0,
        h: 0
      }
      // 颜色面板的信息left,top,width,height
    }), d = F(() => {
      const { r: C, g: w, b: c } = t.bgColor;
      return `rgba(${C}, ${w}, ${c})`;
    });
    q(
      () => t.bgColor,
      () => {
        k();
      }
    );
    const r = (C) => {
      if (C.target.className === "color-cursor")
        return;
      const { offsetX: w, offsetY: c } = C, { w: a } = s.panelBgInfo;
      s.style = {
        left: w,
        top: c
      };
      const o = a - w;
      h(o, c), g(C), C.stopPropagation();
    }, h = (C, w) => {
      const { w: c, h: a } = s.panelBgInfo, o = JSON.parse(JSON.stringify(t.bgColor));
      for (const n in o) {
        const p = o[n];
        o[n] = ((255 - p) * C + p * c) / c;
      }
      f(C, w, c, a, o);
    }, f = (C, w, c, a, o) => {
      for (const n in o) {
        const p = o[n], m = (a - w) * p / a;
        t.showColor[n] = parseInt(m.toString());
      }
    }, g = (C) => {
      console.log("_onMouseDown");
      const { w, h: c } = s.panelBgInfo, a = C.pageX - s.style.left, o = C.pageY - s.style.top;
      document.onmousemove = (n) => {
        const { pageX: p, pageY: m } = n;
        let _ = p - a, V = m - o;
        _ <= 0 && (_ = 0), _ >= w && (_ = w), V <= 0 && (V = 0), V >= c && (V = c), s.style = {
          left: _,
          top: V
        };
        const I = w - _;
        h(I, V);
      }, document.onmouseup = () => {
        document.onmousemove = null, document.onmouseup = null;
      }, C.stopPropagation();
    }, y = () => {
      const C = e.value.offsetWidth, w = e.value.offsetHeight;
      s.panelBgInfo.w = C, s.panelBgInfo.h = w;
      const { r: c, g: a, b: o } = t.showColor, n = Math.max(c, a, o);
      let m = Math.min(c, a, o) / n * C;
      n === 0 && (m = 0);
      const _ = w - n / 255 * w;
      s.style.left = C - m, s.style.top = _;
    }, k = () => {
      const { w: C } = s.panelBgInfo, { left: w, top: c } = s.style;
      h(C - w, c);
    };
    return l({ calcXY: y }), (C, w) => (v(), b("div", {
      ref_key: "el",
      ref: e,
      class: "color-panel",
      style: X({ background: d.value }),
      onMousedown: r
    }, [
      Ro,
      zo,
      $("div", {
        class: "color-cursor",
        style: X({ left: s.style.left + "px", top: s.style.top + "px" }),
        onMousedown: se(g, ["stop"])
      }, null, 44, Ho)
    ], 36));
  }
}), Fo = { class: "color-picker-content" }, Wo = { class: "color-picker-control" }, Uo = { class: "color-input" }, Yo = ["value"], Ko = ["innerHTML"], Go = /* @__PURE__ */ U({
  __name: "ColorPicker",
  props: {
    modelValue: { default: "#fff" },
    format: { default: "hex" },
    text: { default: "确定" }
  },
  emits: ["change", "update:modelValue"],
  setup(i, { emit: l }) {
    const t = i, e = R(), s = R(), d = R(), r = ie({
      visible: !1,
      bgColor: {
        // 侧栏颜色
        r: null,
        g: null,
        b: null
      },
      showColor: {
        // 实际显示的颜色
        r: null,
        g: null,
        b: null
      },
      sideBarHeight: 0
    }), h = F(() => {
      if (r.showColor.r === null)
        return;
      let a;
      if (t.format === "hex")
        a = y();
      else {
        const { r: o, g: n, b: p } = r.showColor;
        a = `rgb(${o},${n},${p})`;
      }
      return a = a && a.replace(/\s+/g, ""), a;
    }), f = (a) => {
      let o = a ? a.target.value : t.modelValue;
      o = o.replace(/\s+/g, "");
      let n;
      o[0] === "#" ? n = g(o) : (o = o.replace(/[a-zA-Z()]/g, ""), n = o.split(",")), !(!n || n.length !== 3 && n.length !== 4) && (r.showColor.r = C(n[0]), r.showColor.g = C(n[1]), r.showColor.b = C(n[2]), k(a));
    }, g = (a) => {
      const o = a.replace("#", "");
      if (o.length !== 3 && o.length !== 6 || /[^0-9a-f]/g.test(o))
        return;
      const n = [];
      for (let p = 0; p < o.length; p++) {
        let m = parseInt(o[p].toString() + o[p], 16);
        o.length === 6 && p % 2 === 0 ? (m = parseInt(o[p].toString() + o[p + 1], 16), n.push(m)) : o.length === 3 && n.push(m);
      }
      return n;
    }, y = () => {
      let a = "#";
      for (const o in r.showColor) {
        if (o === "a")
          continue;
        if (r.showColor[o] === null)
          return;
        let n = parseInt(r.showColor[o]).toString(16);
        n.length === 1 && (n += n), a += n;
      }
      return a;
    }, k = (a) => {
      const { r: o, g: n, b: p } = r.showColor, m = [
        { name: "r", value: o },
        { name: "g", value: n },
        { name: "b", value: p }
      ];
      m.sort((O, H) => H.value - O.value);
      const _ = m[0].value, V = m[1].value, I = m[2].value;
      m[1].value = (I - V) * _ / (I - _), m[2].value = 0, m[0].value = 255, m[1].value = 255 * m[1].value / _, I === _ && (m[1].value = 0), m.forEach((O) => {
        r.bgColor[O.name] = O.value;
      }), a && (s.value.calcTop(), d.value.calcXY());
    }, C = (a) => (a > 255 && (a = 255), a < 0 && (a = 0), a), w = (a) => {
      console.log(a), r.visible = !1, l("update:modelValue", h.value), l("change", h.value), a.stopPropagation();
    }, c = (a) => {
      e.value.contains(a.target) ? (r.visible = !0, ge(() => {
        r.sideBarHeight = e.value.querySelector(".color-slider").offsetHeight, d.value.calcXY();
      })) : r.visible = !1;
    };
    return ne(() => {
      ge(() => {
        r.sideBarHeight = e.value.querySelector(".color-slider").offsetHeight, f();
      }), document.addEventListener("click", c);
    }), ye(() => {
      document.removeEventListener("click", c);
    }), (a, o) => (v(), b("div", {
      ref_key: "el",
      ref: e
    }, [
      J(a.$slots, "default"),
      ue(be, { name: "slide-toggle" }, {
        default: te(() => [
          ae($("div", {
            class: L(`${D(x)}-color-picker`),
            onClick: o[1] || (o[1] = se(() => {
            }, ["stop"]))
          }, [
            $("div", Fo, [
              ue(No, {
                ref_key: "sidebar",
                ref: s,
                modelValue: r.bgColor,
                "onUpdate:modelValue": o[0] || (o[0] = (n) => r.bgColor = n),
                "side-bar-height": r.sideBarHeight
              }, null, 8, ["modelValue", "side-bar-height"]),
              ue(jo, {
                ref_key: "panel",
                ref: d,
                "bg-color": r.bgColor,
                "show-color": r.showColor
              }, null, 8, ["bg-color", "show-color"])
            ]),
            $("div", Wo, [
              $("div", Uo, [
                $("input", {
                  type: "text",
                  class: L(`${D(x)}-input-control`),
                  value: h.value,
                  onChange: f
                }, null, 42, Yo)
              ]),
              $("div", {
                class: "color-confirm",
                onClick: w,
                innerHTML: a.text
              }, null, 8, Ko)
            ])
          ], 2), [
            [fe, r.visible]
          ])
        ]),
        _: 1
      })
    ], 512));
  }
}), Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ColorPicker: Go
}, Symbol.toStringTag, { value: "Module" })), ct = 500, qe = /* @__PURE__ */ U({
  __name: "Dialog",
  props: {
    zIndex: { default: 999 },
    modelValue: { type: Boolean, default: !1 },
    title: {},
    content: {},
    appendToBody: { type: Boolean, default: !0 },
    top: {},
    width: {},
    height: {},
    center: {},
    modal: { type: Boolean, default: !0 },
    closeModal: { type: Boolean, default: !0 },
    lockScroll: { type: Boolean, default: !1 },
    className: { default: "" },
    showClose: { type: Boolean, default: !0 },
    confirm: {},
    cancel: {},
    callback: {},
    move: { type: Boolean, default: !1 },
    autoClose: { default: 0 },
    closeTips: { default: "S秒后自动关闭" },
    beforeClose: {},
    animation: { default: "fade" },
    isAlert: { type: Boolean },
    remove: {},
    icon: { default: 0 },
    close: {}
  },
  emits: ["update:modelValue"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = R(), d = R(), r = R(), h = ie({
      autoTime: e.autoClose,
      // 自动关闭时间
      visible: e.modelValue,
      // 控制窗口显示隐藏
      left: "",
      top: e.top,
      moveFlag: !1,
      scrollbar: {},
      isDestroy: !1
    });
    let f = 0;
    q(
      () => e.modelValue,
      (o) => {
        h.visible = o, o && y(), a(o);
      }
    );
    const g = F(() => {
      let o = e.icon;
      switch (e.icon) {
        case 1:
          o = "success";
          break;
        case 2:
          o = "failure";
          break;
        case 3:
          o = "tips";
          break;
      }
      return o;
    }), y = () => {
      e.autoClose > 0 && (h.autoTime = e.autoClose, f = window.setInterval(() => {
        h.autoTime > 1 ? h.autoTime-- : (e.callback && e.callback(), C());
      }, 1e3));
    }, k = () => {
      h.visible = !0, y(), a(!0);
    }, C = () => {
      h.visible = !1, e.autoClose && window.clearInterval(f), e.isAlert && e.remove && window.setTimeout(() => {
        e.remove && e.remove();
      }, ct), t("update:modelValue", !1), a(!1), typeof e.close == "function" && window.setTimeout(() => {
        e.close && e.close();
      }, ct);
    };
    l({ open: k, close: C });
    const w = (o) => {
      if (!e.closeModal && o === "modal")
        return !1;
      if (!e.autoClose && o === "confirm" && e.callback)
        return e.callback(C), console.log(console), !1;
      if (e.beforeClose && !e.beforeClose(o, C))
        return !1;
      C();
    }, c = (o) => {
      if (e.move && d.value) {
        h.moveFlag = !1;
        const n = Be(d.value), p = o.pageX - n.left, m = o.pageY - n.top, _ = Ue();
        h.moveFlag = !0, document.onmousemove = (V) => {
          if (h.moveFlag) {
            let I = V.pageX - p, O = V.pageY - m - _;
            const H = Oe(), u = r.value.offsetHeight, S = r.value.offsetWidth;
            I <= 0 ? I = 0 : I > H.width - S && (I = H.width - S), O <= 0 ? O = 0 : O > H.height - u && (O = H.height - u), h.left = I + "px", h.top = O + "px";
          }
          return !1;
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, h.moveFlag = !1;
        };
      }
    }, a = (o) => {
      if (e.lockScroll) {
        const { hasScroll: n, width: p } = h.scrollbar;
        n && o && (document.body.style.overflow = "hidden", document.body.style.paddingRight = p + "px"), !o && n && (document.body.style.overflow = "", document.body.style.paddingRight = "");
      }
    };
    return ne(() => {
      ge(() => {
        e.appendToBody && s.value && document.body.appendChild(s.value), e.lockScroll && (h.scrollbar = vt(!0));
      });
    }), ye(() => {
      e.appendToBody && s.value.parentNode && s.value.parentNode.removeChild(s.value), f && window.clearInterval(f);
    }), (o, n) => (v(), Z(be, { name: o.animation }, {
      default: te(() => [
        ae($("div", {
          ref_key: "el",
          ref: s,
          class: L({
            [`${D(x)}-dialog-modal`]: !0,
            modal: !o.modal,
            center: o.center
          }),
          style: X({ zIndex: o.zIndex }),
          onClick: n[4] || (n[4] = (p) => w("modal"))
        }, [
          $("div", {
            ref_key: "dialogEl",
            ref: r,
            class: L({
              [D(x) + "-dialog"]: !0,
              [o.className]: o.className,
              [D(x) + "-dialog-isAlert"]: o.isAlert
            }),
            style: X({
              width: o.width,
              top: h.top,
              left: h.left,
              "transition-duration": h.moveFlag ? "0s" : ""
            }),
            onClick: n[3] || (n[3] = se(() => {
            }, ["stop"]))
          }, [
            o.showClose ? (v(), b("a", {
              key: 0,
              class: L(`${D(x)}-dialog-close icon-close`),
              onClick: n[0] || (n[0] = (p) => w("close"))
            }, null, 2)) : M("", !0),
            o.autoClose > 0 ? (v(), b("div", {
              key: 1,
              class: L(`${D(x)}-dialog-auto-close`)
            }, [
              $("span", null, K(o.closeTips.replace("S", h.autoTime.toString())), 1)
            ], 2)) : M("", !0),
            o.title || o.$slots.title ? (v(), b("div", {
              key: 2,
              ref_key: "headEl",
              ref: d,
              class: L({ [`${D(x)}-dialog-header`]: !0, move: o.move }),
              onMousedown: c
            }, [
              o.title ? (v(), b(Q, { key: 0 }, [
                de(K(o.title), 1)
              ], 64)) : J(o.$slots, "title", { key: 1 })
            ], 34)) : M("", !0),
            o.content || o.$slots.default ? (v(), b("div", {
              key: 3,
              style: X({ height: o.height }),
              class: L({
                [D(x) + "-dialog-alert"]: o.isAlert,
                [D(x) + "-dialog-content"]: !0
              })
            }, [
              o.icon ? (v(), b("i", {
                key: 0,
                class: L([{ ["icon-" + g.value]: o.icon }])
              }, null, 2)) : M("", !0),
              o.content ? (v(), b("div", {
                key: 1,
                class: L([D(x) + "-dialog-text"])
              }, K(o.content), 3)) : J(o.$slots, "default", { key: 2 })
            ], 6)) : M("", !0),
            o.$slots.footer ? (v(), b("div", {
              key: 4,
              class: L(`${D(x)}-dialog-footer`)
            }, [
              J(o.$slots, "footer")
            ], 2)) : M("", !0),
            o.confirm || o.cancel ? (v(), b("div", {
              key: 5,
              class: L(`${D(x)}-dialog-footer`)
            }, [
              o.cancel ? (v(), Z(De, {
                key: 0,
                type: "cancel",
                onClick: n[1] || (n[1] = (p) => w("cancel"))
              }, {
                default: te(() => [
                  de(K(o.cancel), 1)
                ]),
                _: 1
              })) : M("", !0),
              o.confirm ? (v(), Z(De, {
                key: 1,
                type: "primary",
                onClick: n[2] || (n[2] = (p) => w("confirm"))
              }, {
                default: te(() => [
                  de(K(o.confirm), 1)
                ]),
                _: 1
              })) : M("", !0)
            ], 2)) : M("", !0)
          ], 6)
        ], 6), [
          [fe, h.visible]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), Zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dialog: qe
}, Symbol.toStringTag, { value: "Module" })), Xo = /* @__PURE__ */ U({
  __name: "Divider",
  props: {
    direction: { default: "" },
    borderStyle: { default: "solid" },
    contentPosition: { default: "center" },
    padding: {}
  },
  setup(i) {
    const l = i, t = F(() => {
      let e = "borderTopStyle", s = l.padding ? `0 ${l.padding}` : "";
      return l.direction === "vertical" && (e = "borderLeftStyle", s = l.padding ? `${l.padding} 0` : ""), {
        [e]: l.borderStyle,
        margin: s
      };
    });
    return (e, s) => (v(), b("div", {
      class: L([D(x) + "-divider", e.direction]),
      style: X(t.value)
    }, [
      $("span", {
        class: L(["divider-text", [e.contentPosition]])
      }, [
        J(e.$slots, "default")
      ], 2)
    ], 6));
  }
}), Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Divider: Xo
}, Symbol.toStringTag, { value: "Module" })), qo = /* @__PURE__ */ U({
  __name: "Drawer",
  props: {
    modelValue: { type: Boolean, default: !1 },
    direction: { default: "right" }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: l }) {
    const t = i, e = R(t.modelValue);
    return q(
      () => t.modelValue,
      (s) => {
        e.value = s;
      }
    ), q(
      () => e.value,
      (s) => {
        l("update:modelValue", s);
      }
    ), (s, d) => (v(), Z(D(qe), {
      ref: "dialogEl",
      modelValue: e.value,
      "onUpdate:modelValue": d[0] || (d[0] = (r) => e.value = r),
      animation: "slide",
      "class-name": `${D(x)}-drawer ${D(x)}-drawer-${s.direction}`
    }, {
      title: te(() => [
        J(s.$slots, "title")
      ]),
      footer: te(() => [
        J(s.$slots, "footer")
      ]),
      default: te(() => [
        J(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "class-name"]));
  }
}), en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Drawer: qo
}, Symbol.toStringTag, { value: "Module" })), tn = ["onClick"], ln = ["onClick"], on = /* @__PURE__ */ $("span", { class: "arrow" }, null, -1), nn = /* @__PURE__ */ U({
  __name: "Dropdown",
  props: {
    trigger: { default: "hover" },
    appendToBody: { type: Boolean },
    downClass: { default: "" },
    direction: { default: 0 }
  },
  emits: ["click", "toggle"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = Re(), d = R(), r = R(), h = ie({
      visible: !1,
      timer: 0,
      position: "",
      dropdownStyle: {
        left: "",
        top: "",
        bottom: "",
        position: "",
        "--ak-dropdown-left": ""
      }
    });
    ce(`${x}DropdownItemClick`, (n) => {
      t("click", n);
    });
    const f = () => {
      e.trigger === "click" && (h.visible = !1);
    }, g = (n, p) => {
      h.visible || a("hover", p, !0, n), t("toggle", !0);
    }, y = () => {
      clearTimeout(h.timer), e.trigger === "hover" && (h.timer = window.setTimeout(() => {
        h.visible = !1;
      }, 500)), t("toggle", !1);
    }, k = (n, p) => {
      a("click", p, !h.visible, n), t("toggle", !h.visible);
    }, C = () => {
      e.trigger === "hover" && (clearTimeout(h.timer), h.visible = !0, t("toggle", !0));
    }, w = () => {
      e.trigger === "hover" && (h.visible = !1, t("toggle", !1));
    }, c = (n) => {
      n.stopPropagation();
    }, a = (n, p, m, _) => {
      e.trigger === n && (s.trigger ? p && (h.visible = m) : p || (h.visible = m)), ge(() => {
        h.position = o(_);
        const V = d.value.offsetWidth;
        if (h.dropdownStyle["--ak-dropdown-left"] = `${-V / 2}px`, h.visible && e.appendToBody) {
          const I = Oe(), O = Be(r.value);
          h.dropdownStyle.left = O.left + O.width / 2 + "px", h.position === "top" ? (h.dropdownStyle.bottom = I.height - O.top + "px", h.dropdownStyle.top = "auto") : h.dropdownStyle.top = O.top + O.height + "px";
        }
      });
    }, o = (n) => {
      let p = "";
      if (e.direction === 1 && (p = "top"), e.direction === 0) {
        const m = document.documentElement.clientHeight || document.body.clientHeight, _ = n.clientY, V = d.value.offsetHeight;
        V > m - _ && _ > V && (p = "top");
      }
      return p;
    };
    return ne(() => {
      document.addEventListener("click", f), e.appendToBody && (h.dropdownStyle.position = "fixed", document.body.appendChild(d.value));
    }), ye(() => {
      document.removeEventListener("click", f), e.appendToBody && document.body.removeChild(d.value);
    }), l({ slideUp: f }), (n, p) => (v(), b("div", {
      ref_key: "el",
      ref: r,
      class: L({ [D(x) + "-dropdown"]: !0 }),
      onMouseenter: g,
      onMouseleave: y,
      onClick: se(k, ["stop"])
    }, [
      J(n.$slots, "default"),
      n.$slots.trigger ? (v(), b("span", {
        key: 0,
        onMouseenter: p[0] || (p[0] = se((m) => g(m, "slot"), ["stop"])),
        onClick: p[1] || (p[1] = se((m) => k(m, "slot"), ["stop"]))
      }, [
        J(n.$slots, "trigger")
      ], 32)) : M("", !0),
      ue(be, { name: "slide-toggle" }, {
        default: te(() => [
          ae($("div", {
            ref_key: "dropdown",
            ref: d,
            class: L({
              [D(x) + "-dropdown-menu"]: !0,
              top: h.position,
              [n.downClass]: n.downClass
            }),
            style: X(h.dropdownStyle),
            onMouseenter: C,
            onMouseleave: w,
            onClick: se(c, ["stop"])
          }, [
            J(n.$slots, "dropdown"),
            on
          ], 46, ln), [
            [fe, h.visible]
          ])
        ]),
        _: 3
      })
    ], 42, tn));
  }
}), an = /* @__PURE__ */ U({
  __name: "DropdownItem",
  props: {
    disabled: { type: Boolean },
    className: {}
  },
  setup(i) {
    const l = i, t = le(`${x}DropdownItemClick`, ""), e = () => {
      l.disabled || t && t(this);
    };
    return (s, d) => (v(), b("li", {
      class: L({ disabled: s.disabled, className: s.className }),
      onClick: e
    }, [
      J(s.$slots, "default")
    ], 2));
  }
}), sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dropdown: nn,
  DropdownItem: an
}, Symbol.toStringTag, { value: "Module" })), rn = /* @__PURE__ */ U({
  __name: "Icon",
  props: {
    icon: {}
  },
  emits: ["click"],
  setup(i, { emit: l }) {
    const t = () => {
      l("click");
    };
    return (e, s) => (v(), b("i", {
      class: L([D(x) + "-icon", "icon-" + e.icon]),
      onClick: t
    }, null, 2));
  }
}), un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Icon: rn
}, Symbol.toStringTag, { value: "Module" })), cn = { class: "default-placeholder" }, dn = /* @__PURE__ */ $("div", { class: "default-error" }, "FAILED", -1), fn = ["src", "alt"], pn = {
  key: 0,
  class: "preview-loading"
}, gn = {
  key: 1,
  class: "preview-error"
}, mn = ["src"], hn = { class: "control-tool" }, vn = /* @__PURE__ */ U({
  __name: "Image",
  props: {
    src: {},
    fit: {},
    alt: {},
    previewSrcList: { default: () => [] },
    previewCls: {},
    zIndex: {},
    border: { type: Boolean },
    radius: { default: "2px" }
  },
  setup(i) {
    const l = i, t = R("loading"), e = R("loading"), s = R(), d = R(), r = R(!1), h = R({}), f = F(() => {
      const {
        rotate: p = 0,
        scale: m = 1,
        x: _ = 0,
        y: V = 0,
        duration: I = ""
      } = h.value;
      return {
        transform: `scale(${m}) rotate(${p}deg) translate(${_}px, ${V}px)`,
        transitionDuration: I
      };
    }), g = R(0), y = (p) => new Promise((m, _) => {
      if (!l.src)
        return _();
      const V = new Image();
      V.onload = function() {
        m();
      }, V.onerror = function() {
        _();
      }, V.src = p;
    }), k = () => {
      y(l.src).then(() => {
        t.value = "success";
      }).catch(() => {
        t.value = "error";
      });
    };
    q(
      () => l.src,
      () => {
        k();
      }
    ), k();
    const C = () => {
      l.previewSrcList && l.previewSrcList.length > 0 && (r.value = !0, g.value = 0, o());
    }, w = () => {
      r.value = !1, h.value = {};
    }, c = (p) => {
      var m;
      if (p)
        if (g.value < ((m = l.previewSrcList) == null ? void 0 : m.length) - 1)
          g.value++;
        else
          return;
      else if (g.value > 0)
        g.value--;
      else
        return;
      h.value = {}, o();
    }, a = (p) => {
      const { rotate: m = 0, scale: _ = 1 } = h.value;
      switch (p) {
        case "out":
          h.value.scale = _ / 1.4, h.value.scale <= 0 && (h.value.scale = 0);
          break;
        case "in":
          h.value.scale = _ * 1.4, h.value.scale >= 10 && (h.value.scale = 10);
          break;
        case "default":
          h.value = {};
          break;
        case "rotateLeft":
          h.value.rotate = m - 90;
          break;
        case "rotateRight":
          h.value.rotate = m + 90;
          break;
      }
    }, o = () => {
      e.value = "loading", y(l.previewSrcList[g.value]).then(() => {
        e.value = "success";
      }).catch(() => {
        e.value = "error";
      });
    }, n = (p) => {
      let m = !1;
      if (d.value) {
        const _ = p.pageX - (h.value.x || 0), V = p.pageY - (h.value.y || 0);
        m = !0, document.onmousemove = (I) => (m && (h.value.x = I.pageX - _, h.value.y = I.pageY - V, h.value.duration = "0s"), !1), document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, h.value.duration = "", m = !1;
        };
      }
    };
    return ne(() => {
      ge(() => {
      });
    }), ye(() => {
    }), (p, m) => (v(), b("div", {
      class: L({ [D(x) + "-image"]: !0, border: p.border }),
      style: X({ "border-radius": p.radius })
    }, [
      t.value === "loading" ? J(p.$slots, "placeholder", { key: 0 }, () => [
        $("div", cn, [
          ue(xe, {
            "model-value": !0,
            background: "none"
          })
        ])
      ]) : t.value === "error" ? J(p.$slots, "error", { key: 1 }, () => [
        dn
      ]) : (v(), b("img", {
        key: 2,
        src: p.src,
        alt: p.alt,
        style: X({ "object-fit": p.fit }),
        onClick: C
      }, null, 12, fn)),
      ue(be, { name: "image-fade" }, {
        default: te(() => {
          var _, V;
          return [
            ((_ = p.previewSrcList) == null ? void 0 : _.length) > 0 ? ae((v(), b("div", {
              key: 0,
              class: L({ [D(x) + "-image-preview"]: !0 }),
              ref_key: "imagePreview",
              ref: s
            }, [
              $("i", {
                class: "icon-error",
                onClick: w
              }),
              $("i", {
                class: L(["icon-arrow-r prev", { disabled: g.value <= 0 }]),
                onClick: m[0] || (m[0] = (I) => c(0))
              }, null, 2),
              $("i", {
                class: L(["icon-arrow-r next", { disabled: g.value >= p.previewSrcList.length - 1 }]),
                onClick: m[1] || (m[1] = (I) => c(1))
              }, null, 2),
              e.value === "loading" ? (v(), b("div", pn, [
                ue(xe, {
                  "model-value": !0,
                  background: "none",
                  zIndex: 10
                })
              ])) : e.value === "error" ? (v(), b("div", gn, " FAILED ")) : ((V = p.previewSrcList) == null ? void 0 : V.length) > 0 ? (v(), b("img", {
                key: 2,
                class: "img",
                ref_key: "previewImg",
                ref: d,
                style: X(f.value),
                src: p.previewSrcList[g.value],
                onMousedown: n
              }, null, 44, mn)) : M("", !0),
              $("div", hn, [
                $("i", {
                  class: "icon-zoom-out",
                  onClick: m[2] || (m[2] = (I) => a("out"))
                }),
                $("i", {
                  class: "icon-zoom-in",
                  onClick: m[3] || (m[3] = (I) => a("in"))
                }),
                $("i", {
                  class: "icon-default",
                  onClick: m[4] || (m[4] = (I) => a("default"))
                }),
                $("i", {
                  class: "icon-rotateLeft",
                  onClick: m[5] || (m[5] = (I) => a("rotateLeft"))
                }),
                $("i", {
                  class: "icon-rotateRight",
                  onClick: m[6] || (m[6] = (I) => a("rotateRight"))
                })
              ])
            ], 2)), [
              [fe, r.value]
            ]) : M("", !0)
          ];
        }),
        _: 1
      })
    ], 6));
  }
}), yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Image: vn
}, Symbol.toStringTag, { value: "Module" })), bn = ["value", "disabled", "readOnly", "placeholder"], kn = { class: "number-control" }, wn = /* @__PURE__ */ U({
  __name: "InputNumber",
  props: {
    modelValue: { default: 0 },
    max: {},
    min: {},
    step: { default: 1 },
    disabled: { type: Boolean },
    placeholder: {},
    readOnly: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "focus", "blur", "change"],
  setup(i, { emit: l }) {
    const t = i, e = (y) => {
      t.disabled || l("focus", y);
    }, s = (y) => {
      const { value: k } = y.target;
      t.max && !isNaN(t.max) && parseInt(k) > t.max && g(t.max), t.min && !isNaN(t.min) && parseInt(k) < t.min && g(t.min), l("blur", y);
    }, d = (y) => {
      console.log(y);
      const { value: k } = y.target;
      g(parseInt(k));
    }, r = (y) => {
      const k = t.modelValue || 0;
      if (!isNaN(k) && !t.disabled) {
        let C = 0;
        y > 0 ? t.max && !isNaN(t.max) && k + t.step > t.max ? C = t.max : C = k + t.step : t.min && !isNaN(t.min) && k - t.step < t.min ? C = t.min : C = k - t.step;
        const w = t.step + "";
        if (w.indexOf(".") !== -1) {
          const c = w.substring(w.indexOf(".") + 1).length;
          C = Number(C.toFixed(c));
        }
        g(C);
      }
    }, h = le(`${x}ControlChange`, ""), f = (y, k) => {
      h && h(y, k);
    }, g = (y) => {
      l("change", y), l("update:modelValue", y), f(y);
    };
    return q(
      () => t.modelValue,
      (y) => {
        f(y, "mounted");
      }
    ), ne(() => {
      f(t.modelValue, "mounted");
    }), (y, k) => (v(), b("div", {
      class: L({ disabled: y.disabled, [D(x) + "-input-number"]: !0 })
    }, [
      $("input", {
        type: "text",
        value: y.modelValue,
        class: L({
          disabled: y.disabled,
          [D(x) + "-input-control"]: !0,
          [y.size || ""]: y.size
        }),
        disabled: y.disabled,
        readOnly: y.readOnly,
        placeholder: y.placeholder,
        onkeyup: "this.value=this.value.replace(/[^0-9\\.]/g,'')",
        onFocus: e,
        onBlur: s,
        onInput: d
      }, null, 42, bn),
      $("span", kn, [
        $("a", {
          class: L(["icon-minus", { disabled: y.min && y.modelValue <= y.min }]),
          onClick: k[0] || (k[0] = (C) => r(-1))
        }, null, 2),
        $("a", {
          class: L(["icon-plus", { disabled: y.max && y.modelValue >= y.max }]),
          onClick: k[1] || (k[1] = (C) => r(1))
        }, null, 2)
      ])
    ], 2));
  }
}), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InputNumber: wn
}, Symbol.toStringTag, { value: "Module" })), _n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAC1CAIAAACWMSn+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ4RUIzNjkzMzY0RjExRThCNUJGRTEwNjNDRTdGNUUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ4RUIzNjk0MzY0RjExRThCNUJGRTEwNjNDRTdGNUUxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDhFQjM2OTEzNjRGMTFFOEI1QkZFMTA2M0NFN0Y1RTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDhFQjM2OTIzNjRGMTFFOEI1QkZFMTA2M0NFN0Y1RTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7RlIRdAAAQy0lEQVR42uyd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", Sn = "data:image/gif;base64,R0lGODlhgACAAKIEAN3d3bu7u////5mZmf///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjZEQUY1MTZCQjcwMTFFNTk2MEZBMUI3OTA4NTc3QTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjZEQUY1MTdCQjcwMTFFNTk2MEZBMUI3OTA4NTc3QTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNkRBRjUxNEJCNzAxMUU1OTYwRkExQjc5MDg1NzdBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNkRBRjUxNUJCNzAxMUU1OTYwRkExQjc5MDg1NzdBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDP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", je = x + "-lazy-loading", dt = x + "-lazy-error";
class ft {
  constructor(l) {
    he(this, "error");
    he(this, "isLoad");
    he(this, "loading");
    he(this, "fadeIn");
    he(this, "threshold");
    he(this, "imgSrc");
    he(this, "container");
    he(this, "el");
    this.isLoad = !1, this.loading = l.loading || Sn, this.error = l.error || _n, this.fadeIn = l.fadeIn || !0, this.threshold = l.threshold || 0, this.imgSrc = "", this.container = "", this.el = "";
  }
  mounted(l, t) {
    const e = l.getAttribute("src");
    e && (this.loading = e);
    const s = l.getAttribute("data-error");
    s && (this.error = s), this.imgSrc = t.value || l.getAttribute("data-src"), this.container = t.arg, this.el = l, ot(l, je), l.getAttribute("src") || l.setAttribute("src", this.loading), ge(() => {
      this.renderImg();
    });
  }
  renderImg() {
    const l = this.container ? document.getElementById(this.container) : window;
    this.inView(l) ? (this.loadImg().then((t) => {
      this.el.setAttribute("src", t), this.fadeIn && (this.el.style.opacity = 0, setTimeout(() => {
        this.el.style.opacity = 1, this.el.style.transition = "opacity 1s";
      }, 50)), He(this.el, je), He(this.el, dt);
    }).catch(() => {
      this.el.setAttribute("src", this.error), He(this.el, je), ot(this.el, dt);
    }), this.isLoad && this.unBindEvent(l)) : this.isLoad || (this.isLoad = !0, this.bindEvent(l));
  }
  loadImg() {
    return new Promise((l, t) => {
      const e = new Image();
      e.onload = function() {
        l(e.src);
      }, e.onerror = function() {
        t("error");
      }, e.src = this.imgSrc;
    });
  }
  // 判断是否在可视区域
  inView(l) {
    let t = !1;
    const e = this.el.getBoundingClientRect(), s = l === window ? { left: 0, top: 0 } : l.getBoundingClientRect(), d = l === window ? window.innerWidth : l.clientWidth, r = l === window ? window.innerHeight : l.clientHeight;
    return e.bottom > this.threshold + s.top && e.top + this.threshold < r + s.top && e.right > this.threshold + s.left && e.left + this.threshold < d + s.left && (t = !0), t;
  }
  bindEvent(l) {
    l.addEventListener("scroll", this.renderImg.bind(this), !1), l === window && window.addEventListener("resize", this.renderImg.bind(this), !1);
  }
  unBindEvent(l) {
    l.removeEventListener("scroll", this.renderImg.bind(this), !1), l === window && window.removeEventListener("resize", this.renderImg.bind(this), !1);
  }
}
const Vn = {
  // @ts-ignore
  install(i, l = {}) {
    i.directive("lazy", {
      mounted(t, e) {
        new ft(l).mounted(t, e);
      },
      updated(t, e) {
        new ft(l).mounted(t, e);
      }
      // mounted: lazy.mounted.bind(lazy)
      // updated: lazy.update.bind(lazy),
      // unmounted: lazy.update.bind(lazy)
    });
  }
}, Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vn
}, Symbol.toStringTag, { value: "Module" })), Bt = (i) => {
  const l = pt(xe, i);
  if (i.el === document.body || !i.el) {
    const t = document.createElement("div");
    return document.body.appendChild(t), l.mount(t);
  } else
    return l.mount(i.el);
}, $n = (i) => {
  const l = Bt(i || {});
  return l && l.open(), l;
}, xn = (i) => {
  i.directive("loading", {
    mounted(l, t) {
      l.style.position = "relative";
      const e = l.getAttribute(`${x}-loading-text`) || "", s = l.getAttribute(`${x}-loading-spinner`) || "", d = l.getAttribute(`${x}-loading-background`) || "", r = l.getAttribute(`${x}-loading-zIndex`) || "";
      let h;
      t.modifiers.el && (h = document.body);
      const f = Bt({
        text: e,
        spinner: s,
        background: d,
        lock: t.modifiers.lock,
        zIndex: parseInt(r),
        el: h || l
      });
      console.log("component"), console.log(f), t.value && f && f.open(), l.component = f;
    },
    updated(l, t) {
      t.value ? l.component.open() : l.component.close();
    }
  });
}, Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loading: $n,
  vLoading: xn
}, Symbol.toStringTag, { value: "Module" })), In = /* @__PURE__ */ U({
  __name: "Marquee",
  props: {
    width: {},
    height: {},
    speed: { default: 30 },
    direction: { default: "bottom" },
    step: { default: 1 }
  },
  setup(i) {
    const l = i, t = F(() => ({
      width: l.width,
      height: l.height,
      overflow: "hidden"
    })), e = ie({
      left: 0,
      top: 0,
      duration: 0
    }), s = F(() => ["left", "right"].includes(l.direction)), d = F(() => {
      const g = l.step > 1 ? `transform ${e.duration}s` : "";
      return s.value ? {
        display: "flex",
        width: parseInt(l.width) * 2 + "px",
        transform: `translateX(${e.left}px)`,
        transition: g
        //transition: `transform ${state.transition}s`
      } : {
        transform: `translateY(${e.top}px)`,
        transition: g
        //transition: `transform ${state.transition}s`
      };
    }), r = R(), h = R(), f = () => {
      const g = r.value, y = h.value, k = () => {
        const w = y.offsetWidth, c = y.offsetHeight;
        switch (l.direction) {
          case "left":
            e.left + w <= 0 ? (e.left = 0, e.duration = 0) : (e.left = e.left - l.step, e.duration = 0.3);
            break;
          case "right":
            e.left >= 0 ? (e.left = -w, e.duration = 0) : (e.left = e.left + l.step, e.duration = 0.3);
            break;
          case "bottom":
            e.top >= 0 ? (e.top = -c, e.duration = 0) : (e.top = e.top + l.step, e.duration = 0.3);
            break;
          default:
            e.top + c <= 0 ? (e.top = 0, e.duration = 0) : (e.top = e.top - l.step, e.duration = 0.3);
        }
      };
      let C = setInterval(k, l.speed);
      g.onmouseenter = function() {
        clearInterval(C);
      }, g.onmouseleave = function() {
        C = setInterval(k, l.speed);
      };
    };
    return ne(() => {
      f();
    }), (g, y) => (v(), b("div", {
      ref_key: "container",
      ref: r,
      class: L([`marquess-${g.direction}`, "marquee-container"]),
      style: X(t.value)
    }, [
      $("div", {
        style: X(d.value),
        class: "inner-container"
      }, [
        $("div", {
          ref_key: "container1",
          ref: h,
          style: X({ display: s.value ? "flex" : "" })
        }, [
          J(g.$slots, "default")
        ], 4),
        $("div", {
          style: X({ display: s.value ? "flex" : "" })
        }, [
          J(g.$slots, "default")
        ], 4)
      ], 4)
    ], 6));
  }
}), An = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Marquee: In
}, Symbol.toStringTag, { value: "Module" })), Ln = /* @__PURE__ */ $("i", { class: "arrow" }, null, -1), On = ["innerHTML"], Ee = /* @__PURE__ */ U({
  __name: "Tooltip",
  props: {
    content: {},
    direction: { default: "top-left" },
    maxWidth: { default: 500 },
    delay: { default: 0 },
    always: { type: Boolean },
    appendToBody: { type: Boolean, default: !0 },
    transition: { default: "fade" },
    x: { default: 0 },
    y: { default: 0 },
    className: {},
    trigger: { default: "hover" },
    style: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = R(), d = ie({
      clearTime: 0,
      visible: !1,
      tooltipStyle: {}
    }), r = R(), h = R(!1);
    q(
      () => e.disabled,
      (n) => {
        ge(() => {
          !n && e.appendToBody && s.value && !h.value && (document.body.appendChild(s.value), h.value = !0);
        });
      }
    ), ne(() => {
      ge(() => {
        e.always && (d.visible = !0, y()), e.trigger === "click" ? document.addEventListener("click", a, !1) : (r.value.addEventListener("mouseenter", k, !1), r.value.addEventListener("mouseleave", C, !1)), e.appendToBody && s.value && (document.body.appendChild(s.value), h.value = !0);
      });
    }), ye(() => {
      e.trigger === "click" ? document.removeEventListener("click", a, !1) : (r.value.removeEventListener("mouseenter", k, !1), r.value.removeEventListener("mouseleave", C, !1)), e.appendToBody && s.value && document.body.removeChild(s.value);
    });
    const f = (n) => e.disabled ? !1 : e.content || n.content, g = (n) => n % 2 === 0 ? n : n + 1, y = () => {
      const n = Be(r.value), p = Oe().width, m = e.y + 8, _ = {
        maxWidth: e.maxWidth + "px"
      };
      if (e.appendToBody) {
        const I = Oe().height - n.top + m + "px";
        switch (e.direction) {
          case "top-left":
            _.left = n.left + e.x + "px", _.bottom = I;
            break;
          case "top":
            _.transform = "translateX(-50%)", _.left = g(n.left + n.width / 2 + e.x) + "px", _.bottom = I;
            break;
          case "top-right":
            _.right = p - (n.left + n.width + e.x) + "px", _.bottom = I;
            break;
          case "left":
            _.right = p - (n.left - 8 + e.x) + "px", _.top = g(n.top + n.height / 2) + "px", _.transform = "translateY(-50%)";
            break;
          case "right":
            _.left = n.left + n.width + 8 + e.x + "px", _.top = g(n.top + n.height / 2) + "px", _.transform = "translateY(-50%)";
            break;
          case "bottom-left":
            _.left = n.left + e.x + "px", _.top = n.top + n.height + m + "px";
            break;
          case "bottom":
            _.left = g(n.left + n.width / 2 + e.x) + "px", _.transform = "translateX(-50%)", _.top = n.top + n.height + m + "px";
            break;
          case "bottom-right":
            _.right = p - (n.left + n.width + e.x) + "px", _.top = n.top + n.height + m + "px";
            break;
        }
      }
      d.tooltipStyle = Object.assign({}, e.style, _);
    }, k = () => {
      e.disabled || e.always || (y(), window.clearTimeout(d.clearTime), d.visible = !0, e.delay && s.value && (s.value.addEventListener("mouseenter", w, !1), s.value.addEventListener("mouseleave", c, !1)));
    }, C = () => {
      d.clearTime = window.setTimeout(() => {
        d.visible = !1;
      }, e.delay);
    }, w = () => {
      window.clearTimeout(d.clearTime);
    }, c = () => {
      C(), s.value.removeEventListener("mouseenter", w, !1), s.value.removeEventListener("mouseleave", c, !1);
    }, a = (n) => {
      e.always || (n && r.value.contains(n.target) ? (y(), d.visible = !0) : d.visible = !1), t("click", d.visible);
    };
    return l({ close: () => {
      d.visible = !1;
    } }), (n, p) => (v(), b("span", {
      ref_key: "el",
      ref: r,
      class: L([`${D(x)}-tooltip-box`])
    }, [
      J(n.$slots, "default"),
      ue(be, {
        name: `tooltip-${n.transition}`
      }, {
        default: te(() => [
          f(n.$slots) ? ae((v(), b("div", {
            key: 0,
            ref_key: "tooltipEl",
            ref: s,
            class: L([`${D(x)}-tooltip`, n.direction, n.className]),
            style: X(d.tooltipStyle),
            onClick: p[0] || (p[0] = se(() => {
            }, ["stop"]))
          }, [
            Ln,
            n.content ? (v(), b("span", {
              key: 0,
              innerHTML: n.content
            }, null, 8, On)) : J(n.$slots, "content", { key: 1 })
          ], 6)), [
            [fe, d.visible]
          ]) : M("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
}), Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tooltip: Ee
}, Symbol.toStringTag, { value: "Module" })), En = ["data-height"], Mn = ["onMouseenter", "onMouseleave", "onClick"], Pn = { class: "menu-title" }, Nn = { class: "name" }, Rn = {
  key: 0,
  class: "icon-arrow"
}, zn = /* @__PURE__ */ U({
  __name: "MenuLi",
  props: {
    items: {},
    itemUl: {},
    layer: { default: 0 }
  },
  emits: ["click", "select"],
  setup(i, { emit: l }) {
    const t = xt(), e = le(`${x}MenuVisibleList`, []), s = le(`${x}MenuVisibleListChange`), d = le(`${x}MenuSelectKey`, ""), r = le(`${x}MenuSelectKeyChange`), h = le(`${x}MenuProps`, {}), f = (p) => {
      p.children && (p == null ? void 0 : p.children.length) > 0 && y(p, !0);
    }, g = (p) => {
      p.children && (p == null ? void 0 : p.children.length) > 0 && y(p, !1);
    }, y = (p, m) => {
      (h.trigger === "hover" && h.mode === "horizontal" || h.mode === "vertical" && h.collapse) && C(p, m);
    }, k = (p, m) => {
      p.disabled || ((h.trigger === "click" || h.mode === "vertical") && C(p, !e.value.includes(p.key)), p.children || (r && r(p.key), l("select", p), h.router && t.push(p.key)), l("click", p), m.stopPropagation());
    }, C = (p, m) => {
      p.disabled || (m ? p.children && !e.value.includes(p.key) && s && s(p.key, m) : s && s(p.key, m));
    }, w = (p) => p && p.children ? p.children.length * h.liHeight + (p.childHeight || 0) : null, c = (p) => {
      l("select", p);
    }, a = (p) => {
      l("click", p);
    }, o = (p) => {
      const m = p.getAttribute("data-height");
      m && (p.style.height = m + "px", p.style.overflow = "hidden");
    }, n = (p) => {
      p.style.height = "", p.style.overflow = "";
    };
    return (p, m) => {
      const _ = Ye("MenuLi", !0);
      return v(), Z(be, {
        name: "menu",
        onBeforeEnter: o,
        onAfterEnter: n,
        onAfterLeave: n,
        onBeforeLeave: o
      }, {
        default: te(() => [
          ae($("ul", {
            class: L({ ["layer-" + p.layer]: !0, "is-child": p.itemUl }),
            "data-height": w(p.itemUl)
          }, [
            (v(!0), b(Q, null, oe(p.items, (V) => (v(), b("li", {
              key: V.key,
              class: L({
                disabled: V.disabled,
                "is-down": D(e).includes(V.key),
                selected: V.key === D(d)
              }),
              onMouseenter: (I) => f(V),
              onMouseleave: (I) => g(V),
              onClick: (I) => k(V, I)
            }, [
              $("span", Pn, [
                ue(D(Ee), {
                  content: V.label,
                  direction: "right",
                  x: 15,
                  disabled: !(p.layer === 0 && !V.children && D(h).collapse)
                }, {
                  default: te(() => [
                    V.icon ? (v(), b("i", {
                      key: 0,
                      class: L(["icon", `icon-${V.icon}`])
                    }, null, 2)) : M("", !0)
                  ]),
                  _: 2
                }, 1032, ["content", "disabled"]),
                $("span", Nn, K(V.label), 1),
                V.children ? (v(), b("i", Rn)) : M("", !0)
              ]),
              V.children ? (v(), Z(_, {
                key: 0,
                items: V.children,
                itemUl: V,
                layer: p.layer + 1,
                onClick: a,
                onSelect: c
              }, null, 8, ["items", "itemUl", "layer"])) : M("", !0)
            ], 42, Mn))), 128))
          ], 10, En), [
            [fe, !p.itemUl || D(e).includes(p.itemUl.key)]
          ])
        ]),
        _: 1
      });
    };
  }
}), Hn = /* @__PURE__ */ U({
  __name: "Menu",
  props: {
    mode: { default: "vertical" },
    items: {},
    className: {},
    trigger: { default: "hover" },
    theme: { default: "light" },
    liHeight: { default: 40 },
    openKeys: { default: () => [] },
    selectedKey: { default: "" },
    router: { type: Boolean },
    collapse: { type: Boolean }
  },
  emits: ["click", "select"],
  setup(i, { emit: l }) {
    const t = i;
    ce(`${x}MenuProps`, t);
    const e = R(t.openKeys);
    ce(`${x}MenuVisibleList`, e), ce(`${x}MenuVisibleListChange`, (f, g) => {
      if (g)
        e.value.push(f);
      else {
        const y = e.value.indexOf(f);
        e.value.splice(y, 1);
      }
    });
    const s = R(t.selectedKey);
    ce(`${x}MenuSelectKey`, s), ce(`${x}MenuSelectKeyChange`, (f) => {
      s.value = f;
    });
    const d = () => {
      e.value = [], s.value = "";
    }, r = (f) => {
      l("click", f);
    }, h = (f) => {
      l("select", f);
    };
    return ne(() => {
      t.trigger === "click" && t.mode === "horizontal" && document.addEventListener("click", d, !1);
    }), ye(() => {
      t.trigger === "click" && t.mode === "horizontal" && document.removeEventListener("click", d, !1);
    }), (f, g) => (v(), b("div", {
      class: L({
        [`${D(x)}-menu`]: !0,
        [f.mode]: !0,
        [f.theme]: !0,
        collapse: f.collapse && f.mode === "vertical"
      })
    }, [
      ue(zn, {
        items: f.items,
        onClick: r,
        onSelect: h
      }, null, 8, ["items"])
    ], 2));
  }
}), jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: Hn
}, Symbol.toStringTag, { value: "Module" })), ze = (i) => {
  const l = document.createElement("div");
  document.body.appendChild(l), Object.assign(i, {
    isAlert: !0,
    closeModal: !1,
    // modelValue: true,
    remove: () => {
      t.unmount(), document.body.removeChild(l);
    }
  });
  const t = pt(qe, i), e = t.mount(l);
  return e.open(), e;
}, Fn = (i) => ze(i || {}), Wn = (i, l) => (l || (l = {}), ze(
  Object.assign(
    {},
    {
      title: l.title || "信息",
      content: i,
      confirm: l.confirm || "确定",
      cancel: "取消",
      className: "dialog-confirm"
    },
    l
  )
)), Un = (i, l) => (l || (l = {}), ze(
  Object.assign(
    {},
    {
      title: l.title || "信息",
      content: i,
      confirm: l.confirm || "确定",
      className: "dialog-alert"
    },
    l
  )
)), Yn = (i, l) => (l || (l = {}), ze(
  Object.assign(
    {},
    {
      content: i,
      className: "dialog-msg",
      showClose: !1,
      autoClose: l.autoClose || 3,
      modal: l && l.modal || !1
    },
    l
  )
)), Kn = () => {
  const i = document.querySelectorAll(`.${x}-dialog-isAlert`);
  i && i.length > 0 && i.forEach((l) => {
    document.body.removeChild(l), document.body.style.overflow = "", document.body.style.paddingRight = "";
  });
}, Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alert: Un,
  clear: Kn,
  confirm: Wn,
  dialog: Fn,
  msg: Yn
}, Symbol.toStringTag, { value: "Module" })), Jn = {
  key: 0,
  class: "total"
}, Zn = { class: "page-list" }, Xn = { key: 0 }, Qn = ["title"], qn = ["title", "onClick", "textContent"], ea = { key: 1 }, ta = ["title"], la = { key: 2 }, oa = ["title"], na = {
  key: 2,
  class: "show-jumper"
}, It = /* @__PURE__ */ U({
  __name: "Pagination",
  props: {
    current: { default: 1 },
    total: {},
    pageSize: { default: 20 },
    showJumper: { type: Boolean },
    pagerCount: { default: 5 },
    pageSizes: { default: () => [] },
    showTotal: { type: Boolean },
    hideSinglePage: { type: Boolean },
    format: { type: Boolean }
  },
  emits: ["update:current", "change", "changePageSizes"],
  setup(i, { emit: l }) {
    const t = i, e = ie({
      active: t.current,
      // 当前页
      goToPage: t.current,
      // 快速跳到第几页
      selectChange: t.pageSize
    }), s = F(() => Math.ceil(t.total / e.selectChange)), d = F(() => t.hideSinglePage && s.value <= 1), r = F(() => {
      let w = 0, c = s.value - 1;
      const a = parseInt((t.pagerCount / 2).toString());
      if (e.active + a < s.value && (c = e.active + a), e.active >= t.pagerCount ? w = e.active - a : c = t.pagerCount > s.value ? s.value : t.pagerCount, s.value - e.active < t.pagerCount) {
        const p = s.value - t.pagerCount + 1;
        w = p > w ? w : p;
      }
      w < 2 && (w = 2), c >= s.value - 1 && (c = s.value - 1);
      const o = [];
      let n = w;
      for (; n <= c; )
        o.push(n), n++;
      return [o, w, c];
    }), h = F(() => parseInt(r.value[2].toString())), f = F(() => parseInt(r.value[1].toString())), g = F(() => {
      const w = [];
      return t.pageSizes.forEach((c) => {
        w.push({ label: `每页${c}条`, value: c });
      }), w;
    }), y = F(() => {
      let w = t.total.toString();
      return t.format && (w = t.total.toString().replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,")), w;
    });
    q(
      () => e.selectChange,
      (w) => {
        e.active > s.value && (e.active = s.value), l("changePageSizes", w);
      }
    );
    const k = (w, c) => {
      if (c)
        return;
      let a = w;
      w > s.value && (a = s.value), w < 1 && (a = 1), e.active = a, e.goToPage = a, l("update:current", e.active), l("change", e.active);
    }, C = () => {
      const w = e.goToPage;
      k(w);
    };
    return (w, c) => ae((v(), b("div", {
      class: L(`${D(x)}-page`)
    }, [
      w.showTotal ? (v(), b("div", Jn, [
        de(" 共"),
        $("span", null, K(y.value), 1),
        de("条 ")
      ])) : M("", !0),
      w.pageSizes.length > 0 ? (v(), Z(D(Ze), {
        key: 1,
        modelValue: e.selectChange,
        "onUpdate:modelValue": c[0] || (c[0] = (a) => e.selectChange = a),
        options: g.value
      }, null, 8, ["modelValue", "options"])) : M("", !0),
      $("div", Zn, [
        $("ul", null, [
          $("li", null, [
            $("a", {
              title: "上一页",
              class: L(["prev", { disabled: e.active === 1 }]),
              onClick: c[1] || (c[1] = (a) => k(e.active - 1, e.active === 1))
            }, "<", 2)
          ]),
          $("li", null, [
            $("a", {
              title: "1",
              class: L({ active: e.active === 1 }),
              onClick: c[2] || (c[2] = (a) => k(1, e.active === 1))
            }, "1", 2)
          ]),
          f.value > 2 ? (v(), b("li", Xn, [
            $("a", {
              title: `向前${w.pagerCount}页`,
              class: "jump-prev",
              onClick: c[3] || (c[3] = (a) => k(e.active - w.pagerCount))
            }, null, 8, Qn)
          ])) : M("", !0),
          (v(!0), b(Q, null, oe(r.value[0], (a, o) => (v(), b("li", { key: o }, [
            $("a", {
              title: a.toString(),
              class: L({ active: a === e.active }),
              onClick: (n) => k(a, a === e.active),
              textContent: K(a)
            }, null, 10, qn)
          ]))), 128)),
          s.value > h.value + 1 ? (v(), b("li", ea, [
            $("a", {
              title: `向后${w.pagerCount}页`,
              class: "jump-next",
              onClick: c[4] || (c[4] = (a) => k(e.active + w.pagerCount))
            }, null, 8, ta)
          ])) : M("", !0),
          s.value > 1 ? (v(), b("li", la, [
            $("a", {
              title: s.value + "",
              class: L({ active: e.active === s.value }),
              onClick: c[5] || (c[5] = (a) => k(s.value, e.active === s.value))
            }, K(s.value), 11, oa)
          ])) : M("", !0),
          $("li", null, [
            $("a", {
              title: "下一页",
              class: L(["next", { disabled: s.value <= e.active }]),
              onClick: c[6] || (c[6] = (a) => k(e.active + 1, s.value <= e.active))
            }, ">", 2)
          ])
        ])
      ]),
      w.showJumper ? (v(), b("div", na, [
        de(" 前往 "),
        ue(D(Ge), {
          modelValue: e.goToPage,
          "onUpdate:modelValue": c[7] || (c[7] = (a) => e.goToPage = a),
          modelModifiers: { number: !0 },
          maxlength: "5",
          onBlur: C
        }, null, 8, ["modelValue"]),
        de(" 页 ")
      ])) : M("", !0)
    ], 2)), [
      [fe, !d.value]
    ]);
  }
}), aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pagination: It
}, Symbol.toStringTag, { value: "Module" })), sa = { class: "content" }, ia = { class: "footer" }, ra = /* @__PURE__ */ U({
  __name: "Popover",
  props: {
    trigger: { default: "click" },
    className: {},
    confirm: {},
    cancel: {},
    callback: {},
    content: {}
  },
  setup(i) {
    const l = i, t = R(), e = F(() => l.className ? `${x}-popover ${l.className}` : `${x}-popover`), s = () => {
      t.value.close();
    }, d = () => {
      s(), l.callback && l.callback();
    };
    return (r, h) => (v(), Z(D(Ee), {
      ref_key: "el",
      ref: t,
      "class-name": e.value,
      trigger: r.trigger
    }, {
      content: te(() => [
        $("div", sa, [
          de(K(r.content) + " ", 1),
          r.content ? M("", !0) : J(r.$slots, "content", { key: 0 })
        ]),
        $("div", ia, [
          r.cancel ? (v(), Z(D(De), {
            key: 0,
            size: "mini",
            onClick: s
          }, {
            default: te(() => [
              de(K(r.cancel), 1)
            ]),
            _: 1
          })) : M("", !0),
          r.confirm ? (v(), Z(D(De), {
            key: 1,
            size: "mini",
            type: "primary",
            onClick: d
          }, {
            default: te(() => [
              de(K(r.confirm), 1)
            ]),
            _: 1
          })) : M("", !0)
        ])
      ]),
      default: te(() => [
        J(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["class-name", "trigger"]));
  }
}), ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Popover: ra
}, Symbol.toStringTag, { value: "Module" })), ca = {
  key: 0,
  class: "progress-text"
}, da = {
  key: 0,
  class: "progress-text progress-fixed-text"
}, fa = { class: "custom-content" }, pa = {
  key: 0,
  class: "progress-text"
}, ga = /* @__PURE__ */ U({
  __name: "Progress",
  props: {
    type: { default: "line" },
    modelValue: { default: 0 },
    radius: { default: 0 },
    border: { default: 0 },
    color: {},
    borderColor: {},
    duration: { default: 1e3 },
    showText: { type: Boolean, default: !0 },
    followText: { type: Boolean, default: !0 },
    className: {},
    status: {}
  },
  setup(i) {
    const l = i, t = ie({
      percent: 0
    }), e = F(() => ({
      height: l.border ? l.border + "px" : "",
      width: t.percent + "%",
      background: l.borderColor,
      transition: `all ${l.duration / 1e3}s`
    })), s = () => {
      let r = -1;
      r = window.setInterval(() => {
        t.percent < l.modelValue && t.percent < 100 ? t.percent++ : clearInterval(r);
      }, l.duration / l.modelValue);
    }, d = (r) => {
      const h = {};
      return h.width = l.radius * 2 + "px", h.height = l.radius * 2 + "px", r === "pro" ? (h.borderWidth = `${l.border}px`, h.borderColor = l.color) : r === "circle" ? (h.left = `-${l.border}px`, h.top = `-${l.border}px`, t.percent > 50 ? h.clip = "rect(auto,auto,auto,auto)" : h.clip = `rect(0,${l.radius * 2}px,${l.radius * 2}px,${l.radius}px)`) : r === "left" ? (h.borderWidth = `${l.border}px`, h.borderColor = l.borderColor, h.clip = `rect(0, ${l.radius}px, ${l.radius * 2}px, 0px)`, h.transform = "rotate(" + 3.6 * t.percent + "deg)") : r === "right" && (h.borderWidth = `${l.border}px`, h.borderColor = l.borderColor, h.clip = `rect(0, ${l.radius * 2}px, ${l.radius * 2}px, ${l.radius}px)`), h;
    };
    return ne(() => {
      l.type === "circle" ? s() : l.type === "line" && setTimeout(() => {
        t.percent = l.modelValue;
      }, 10);
    }), (r, h) => (v(), b("div", {
      class: L([`${D(x)}-progress`, r.status])
    }, [
      r.type === "line" ? (v(), b("div", {
        key: 0,
        style: X({
          width: r.radius ? r.radius + "px" : "",
          background: r.color,
          minHeight: r.border ? r.border + "px" : ""
        }),
        class: L([r.className, D(x) + "-progress-line"])
      }, [
        J(r.$slots, "default"),
        $("span", {
          class: "progress-bar",
          style: X(e.value)
        }, [
          r.showText && r.followText ? (v(), b("span", ca, [
            $("b", null, K(t.percent), 1),
            de("% ")
          ])) : M("", !0)
        ], 4),
        r.showText && !r.followText ? (v(), b("span", da, [
          $("b", null, K(t.percent), 1),
          de("% ")
        ])) : M("", !0)
      ], 6)) : r.type === "circle" ? (v(), b("div", {
        key: 1,
        style: X(d("pro")),
        class: L([r.className, D(x) + "-progress-circle"])
      }, [
        $("div", fa, [
          J(r.$slots, "default")
        ]),
        r.showText ? (v(), b("span", pa, [
          $("b", null, K(t.percent), 1),
          de("% ")
        ])) : M("", !0),
        $("div", {
          style: X(d("circle")),
          class: "circle-circle"
        }, [
          $("span", {
            style: X(d("left")),
            class: "circle-left"
          }, null, 4),
          t.percent >= 50 ? (v(), b("span", {
            key: 0,
            style: X(d("right")),
            class: "circle-right"
          }, null, 4)) : M("", !0)
        ], 4)
      ], 6)) : M("", !0)
    ], 2));
  }
}), ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Progress: ga
}, Symbol.toStringTag, { value: "Module" })), ha = ["onClick"], va = ["innerHTML"], ya = ["onClick"], ba = ["innerHTML"], ka = ["innerHTML"], wa = /* @__PURE__ */ U({
  __name: "Slider",
  props: {
    modelValue: { default: 0 },
    min: { default: 0 },
    max: { default: 100 },
    disabled: { type: Boolean, default: !1 },
    step: { default: 1 },
    showStops: { type: Boolean },
    showTooltip: { type: Boolean },
    formatTooltip: {},
    marks: {},
    trigger: {}
  },
  emits: ["update:modelValue", "change"],
  setup(i, { emit: l }) {
    const t = i, e = R(), s = R(0), d = R(0), r = F(() => ke(t.disabled) || !1), h = F(() => {
      if (t.showTooltip) {
        const O = a(s.value);
        return t.formatTooltip ? t.formatTooltip(O) : O;
      } else
        return "";
    }), f = F(() => {
      if (t.showTooltip) {
        const O = a(d.value);
        return t.formatTooltip ? t.formatTooltip(O) : O;
      } else
        return "";
    }), g = F(() => {
      if (C.value) {
        let O = s.value;
        return s.value > d.value && (O = d.value), {
          left: O + "%",
          width: Math.abs(d.value - s.value) + "%"
        };
      } else
        return {
          left: "0px",
          width: s.value + "%"
        };
    }), y = F(() => {
      const O = [];
      if (t.showStops) {
        const H = (t.max - t.min) / t.step;
        for (let u = 1; u < H; u++)
          O.push(u * 100 / H + "%");
      }
      return O;
    }), k = F(() => {
      const O = [];
      if (t.marks)
        for (const H in t.marks)
          O.push({
            label: t.marks[H],
            left: H + "%"
          });
      return O;
    }), C = F(() => typeof t.modelValue == "object" && t.modelValue.length === 2), w = F(() => {
      var O;
      return (O = e == null ? void 0 : e.value) == null ? void 0 : O.offsetWidth;
    }), c = F(() => 100 / ((t.max - t.min) / t.step)), a = (O) => Math.round(
      (t.max - t.min) * O / 100 + t.min
    ), o = (O) => {
      if (r.value)
        return;
      const H = Be(e.value).left;
      let u = (O.pageX - H) / w.value * 100;
      u < 0 && (u = 0), u > 100 && (u = 100);
      const S = parseInt(Math.round(u / c.value).toString()), T = c.value * S;
      if (C.value) {
        const z = Math.abs(u - s.value), Y = Math.abs(u - d.value);
        z < Y ? s.value = T : d.value = T;
      } else
        s.value = T;
      if (Number(Math.abs(s.value - d.value).toFixed(4)) < Number(c.value.toFixed(4)) || s.value.toFixed(2) === d.value.toFixed(2))
        if (console.log("重叠点所在的位置"), s.value === 0)
          d.value = c.value;
        else {
          if (S < 1)
            return;
          s.value = c.value * (S - 1);
        }
      s.value > d.value ? n("change") : n();
    }, n = (O) => {
      let H = 0;
      if (C.value) {
        const u = a(s.value), S = a(d.value);
        H = [u, S], u > S && O === "change" && (H = [S, u]);
      } else
        H = a(s.value);
      l("update:modelValue", H), l("change", H);
    }, p = (O, H) => {
      if (r.value)
        return;
      const { offsetLeft: u } = H.target, S = H.pageX - u;
      document.onmousemove = (T) => {
        let z = (T.pageX - S) / w.value * 100;
        z < 0 && (z = 0), z > 100 && (z = 100), O === "left" ? s.value = z : d.value = z, t.trigger && o(T);
      }, document.onmouseup = (T) => {
        t.trigger || o(T), document.onmousemove = null, document.onmouseup = null;
      }, H.preventDefault(), H.stopPropagation();
    }, m = (O) => {
      O.preventDefault(), O.stopPropagation();
    }, _ = (O) => (O - t.min) / (t.max - t.min) * 100, V = (O, H) => {
      let u = O;
      O < t.min && (u = t.min), O > t.max && (u = t.max);
      const S = _(u);
      H === "left" && (s.value = S), H === "right" && (d.value = S);
    }, I = () => {
      if (C.value) {
        let O = 0, H = 0;
        typeof t.modelValue == "object" && (O = t.modelValue[0], H = t.modelValue[1]), V(O, "left"), V(H, "right");
      } else
        V(t.modelValue, "left");
    };
    return q(
      () => t.modelValue,
      () => {
        I();
      }
    ), ne(() => {
      I();
    }), (O, H) => (v(), b("div", {
      class: L({ [D(x) + "-slider"]: !0, disabled: r.value }),
      ref_key: "sliderEl",
      ref: e
    }, [
      $("div", {
        class: L(`${D(x)}-slider-runway`),
        onClick: o
      }, [
        $("span", {
          class: "slider-control",
          style: X({ left: s.value + "%" }),
          onMousedown: H[0] || (H[0] = se((u) => p("left", u), ["stop"])),
          onClick: se(m, ["stop"])
        }, [
          O.showTooltip ? (v(), b("i", {
            key: 0,
            innerHTML: h.value,
            class: "slider-tooltip"
          }, null, 8, va)) : M("", !0)
        ], 44, ha),
        C.value ? (v(), b("span", {
          key: 0,
          class: "slider-control",
          onMousedown: H[1] || (H[1] = se((u) => p("right", u), ["stop"])),
          onClick: se(m, ["stop"]),
          style: X({ left: d.value + "%" })
        }, [
          O.showTooltip ? (v(), b("i", {
            key: 0,
            innerHTML: f.value,
            class: "slider-tooltip"
          }, null, 8, ba)) : M("", !0)
        ], 44, ya)) : M("", !0),
        $("span", {
          class: "slider-bar",
          style: X(g.value)
        }, null, 4),
        (v(!0), b(Q, null, oe(y.value, (u) => (v(), b("i", {
          class: "slider-stop",
          key: u,
          style: X({ left: u })
        }, null, 4))), 128)),
        (v(!0), b(Q, null, oe(k.value, (u, S) => (v(), b("span", {
          class: "slider-marks",
          key: S,
          style: X({ left: u.left })
        }, [
          $("i", {
            innerHTML: u.label,
            class: "slider-marks-text"
          }, null, 8, ka)
        ], 4))), 128))
      ], 2)
    ], 2));
  }
}), Ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Slider: wa
}, Symbol.toStringTag, { value: "Module" })), _a = U({
  name: "HeaderSlot",
  props: {
    data: Object,
    index: Number
  },
  setup(i) {
    return i.data.slots && i.data.slots.header ? () => [
      Se(
        "span",
        {},
        i.data.slots.header({
          column: i.data,
          index: i.index
        })
      )
    ] : () => [];
  }
}), Sa = ["title", "colspan", "rowspan", "onMousemove"], Va = { key: 1 }, Ta = {
  key: 2,
  class: "caret-wrapper"
}, $a = ["onClick"], xa = ["onClick"], Ba = ["onMousedown"], Ia = /* @__PURE__ */ U({
  __name: "TableHeader",
  props: {
    showHeader: { type: Boolean },
    drag: { type: Boolean },
    title: { type: Boolean },
    selectChecked: { default: 0 },
    sortSingle: { type: Boolean },
    headMaxLayer: { default: 1 }
  },
  emits: ["event"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = R(), d = le(`${x}GetColumns`, []), r = ie({
      checkboxChecked: e.selectChecked.toString(),
      // columns: getColumns,
      sortBy: {}
    });
    q(
      () => e.selectChecked,
      (a) => {
        r.checkboxChecked = a.toString();
      }
    );
    const h = (a) => d.value.filter((o) => o.type !== "extend" && o._layer === a), f = (a) => {
      if (a.title) {
        if (e.title)
          return a.label;
      } else
        return null;
      return null;
    }, g = (a, o) => {
      w("mouseMove", { evt: a, index: o });
    }, y = (a, o) => {
      w("mouseDown", { evt: a, index: o });
    }, k = (a) => {
      w("checkboxChange", !!a);
    }, C = (a, o) => {
      e.sortSingle && (r.sortBy = {}), r.sortBy[a] = o, w("sortClick", r.sortBy);
    }, w = (a, o) => {
      t("event", a, o);
    };
    return l({ scrollTop: (a) => {
      a ? (s.value.style.transform = `translateY(${a}px) translateZ(100px)`, s.value.className = "transform") : (s.value.style.transform = "", s.value.className = "");
    } }), (a, o) => a.showHeader ? (v(), b("thead", {
      key: 0,
      ref_key: "el",
      ref: s
    }, [
      (v(!0), b(Q, null, oe(a.headMaxLayer, (n) => (v(), b("tr", {
        key: n,
        class: L({ drag: a.drag })
      }, [
        (v(!0), b(Q, null, oe(h(n), (p, m) => (v(), b("th", {
          key: m,
          class: L([p.fixed, p.className]),
          style: X({ textAlign: p.align }),
          title: f(p),
          colspan: p._colspan,
          rowspan: p._rowspan,
          onMousemove: (_) => g(_, m)
        }, [
          p.type === "selection" ? (v(), Z(D(Ve), {
            key: 0,
            modelValue: r.checkboxChecked,
            "onUpdate:modelValue": o[0] || (o[0] = (_) => r.checkboxChecked = _),
            class: L({ "some-select": a.selectChecked === 2 }),
            value: "1",
            onChange: k
          }, null, 8, ["modelValue", "class"])) : (v(), b(Q, { key: 1 }, [
            p.slots && p.slots.header ? (v(), Z(_a, {
              key: 0,
              data: p,
              index: m
            }, null, 8, ["data", "index"])) : (v(), b("span", Va, K(p.label), 1)),
            p.sortBy ? (v(), b("span", Ta, [
              $("i", {
                class: L(["sort-caret asc", { active: r.sortBy[p.prop] === "asc" }]),
                onClick: (_) => C(p.prop, "asc")
              }, null, 10, $a),
              $("i", {
                class: L(["sort-caret desc", { active: r.sortBy[p.prop] === "desc" }]),
                onClick: (_) => C(p.prop, "desc")
              }, null, 10, xa)
            ])) : M("", !0)
          ], 64)),
          a.drag && p.drag !== !1 ? (v(), b("a", {
            key: 2,
            class: "drag-line",
            onMousedown: (_) => y(_, m)
          }, null, 40, Ba)) : M("", !0)
        ], 46, Sa))), 128))
      ], 2))), 128))
    ], 512)) : M("", !0);
  }
}), Aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tag: Ne
}, Symbol.toStringTag, { value: "Module" })), Fe = U({
  name: "TableTd",
  components: { Checkbox: Ve, Tooltip: Ee, Tag: Ne },
  props: {
    column: {
      type: Object,
      default: () => ({})
    },
    columnIndex: {
      type: Number,
      default: 0
    },
    //当前列号
    row: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    },
    // 当前行号
    toggle: Boolean,
    // 扩展或子级展开收起状态
    parentRow: Object,
    //子级下拉时，包含的父级信息
    title: Boolean,
    checked: Boolean,
    colspan: {
      type: Number,
      default: 0
    },
    // 扩展列时才有传
    rowColSpan: {
      type: Object,
      default: () => ({})
    },
    rowspanColspanList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["cellClick", "toggleExtend"],
  setup(i, { emit: l }) {
    const t = le(`${x}SetSelectedRows`), e = R(i.column.fixed), s = R(i.column.className);
    s.value && i.column.fixed ? e.value += " " + s.value : s.value && (e.value = s.value);
    let d = !1, r = 0, h = R(i.colspan).value;
    Object.keys(i.rowColSpan).length > 0 && (d = i.rowColSpan.rowSpan === 0 || i.rowColSpan.colSpan === 0, r = i.rowColSpan && i.rowColSpan.rowSpan, h = i.rowColSpan && i.rowColSpan.colSpan);
    const f = F(() => !i.column.title || i.column.tooltip === !0 || i.column.tooltip && i.column.tooltip.show ? null : i.title ? i.row[i.column.prop] : null), g = () => {
      l(
        "cellClick",
        i.row,
        i.column,
        i.index,
        i.columnIndex
      );
    }, y = R(i.checked);
    q(
      () => i.checked,
      (c) => {
        y.value = c;
      }
    );
    const k = () => {
      l("toggleExtend");
    };
    function C(c) {
      return c.toString().padStart(2, "0");
    }
    const w = () => {
      const c = i.row[i.column.prop];
      if (i.column.slots && i.column.slots.default)
        return i.column.slots.default({
          row: i.row,
          index: i.index,
          extend: k,
          toggle: i.toggle,
          parentRow: i.parentRow
        });
      if (i.column.placeholder && c === "")
        return i.column.placeholder;
      if (i.column.formatter) {
        if (["date", "dateTime"].includes(i.column.formatter)) {
          if (c) {
            const a = new Date(c), o = `${a.getFullYear()}-${C(
              a.getMonth() + 1
            )}-${C(a.getDate())}`;
            switch (i.column.formatter) {
              case "dateTime":
                return `${o} ${C(a.getHours())}:${C(
                  a.getMinutes()
                )}:${C(a.getSeconds())}`;
              default:
                return o;
            }
          }
          return c;
        }
        return i.column.formatter(
          i.row,
          i.column,
          c,
          i.index
        );
      } else {
        if (i.column.type === "selection")
          return Se(Ve, {
            modelValue: y.value,
            onChange: (a) => {
              t(a, i.row, i.index), y.value = a;
            }
          });
        if (i.column.tooltip === !0 || i.column.tooltip && !i.column.tooltip.disabled) {
          let a = { content: c, direction: "top" };
          return i.column.tooltip.disabled && (a = Object.assign(a, i.column.tooltip)), Se(Ee, a, () => c);
        } else if (typeof i.column.tag == "object") {
          if (!c)
            return c;
          const a = Object.assign({ size: "small" }, i.column.tag, {
            type: i.column.tag.dict[c]
          });
          let o = c;
          return typeof i.column.dict == "object" && (o = i.column.dict[c]), Se(Ne, a, () => o);
        } else
          return i.column.type === "index" ? i.index + 1 : typeof i.column.dict == "object" ? c && i.column.dict[c] : c;
      }
    };
    return d ? () => [] : () => [
      Se(
        "td",
        {
          class: e.value,
          rowspan: r > 1 ? r : null,
          colspan: h > 1 ? h : null,
          style: "text-align:" + i.column.align,
          title: f.value,
          onClick: g
        },
        w()
      )
    ];
  }
}), La = ["onClick"], Oa = ["onCllick"], Da = /* @__PURE__ */ U({
  __name: "TableBody",
  props: {
    data: {},
    rowColSpan: {},
    hasChild: { type: Boolean },
    lazyLoad: {},
    extendToggle: { type: Boolean },
    title: { type: Boolean },
    selectedRows: {}
  },
  emits: ["rowClick", "cellClick"],
  setup(i, { emit: l }) {
    const t = i, e = le(`${x}GetColumns`), s = ie({
      toggle: {},
      // {1: true, 2: false, 0: false} // 对应每行展开或收起状态
      rowspanColspanList: []
    }), d = R(t.data), r = F(() => e.value.filter((c) => c.type === "extend" && !c.children)), h = F(() => e.value.filter((c) => c.type !== "extend" && !c.children)), f = (c) => s.toggle[c] === void 0 ? t.extendToggle : s.toggle[c], g = (c, a) => {
      (r.value.length > 0 || t.hasChild) && (typeof s.toggle[c] > "u" ? s.toggle[c] = !t.extendToggle : s.toggle[c] = !s.toggle[c], console.log(s.toggle[c]), s.toggle[c] && t.lazyLoad && t.lazyLoad(a, (o) => {
        o && o.length > 0 && (a.children = o);
      }));
    }, y = (c, a) => {
      l("rowClick", c, a);
    }, k = (c, a, o, n) => {
      l("cellClick", c, a, o, n);
    }, C = F(() => {
      const c = [];
      return t.rowColSpan && t.rowColSpan.length > 0 && t.rowColSpan.forEach((a) => {
        if (c.push(a), a.colSpan && a.colSpan > 1)
          for (let o = 1; o < a.colSpan; o++)
            c.push({
              row: a.row,
              col: a.col + o,
              colSpan: 0
            });
        if (a.rowSpan && a.rowSpan > 1)
          for (let o = 1; o < a.rowSpan; o++)
            c.push({
              row: a.row + o,
              col: a.col,
              rowSpan: 0
            });
      }), c;
    }), w = (c, a) => {
      const o = C.value.filter((n) => n.row === c && a === n.col);
      return o.length > 0 ? o[0] : [];
    };
    return (c, a) => (v(), b("tbody", null, [
      (v(!0), b(Q, null, oe(d.value, (o, n) => (v(), b(Q, { key: n }, [
        $("tr", {
          class: L({
            warning: c.selectedRows.indexOf(o) !== -1,
            [o.trClass]: o.trClass
          }),
          onClick: (p) => y(o, n)
        }, [
          (v(!0), b(Q, null, oe(h.value, (p, m) => (v(), Z(Fe, {
            key: m,
            checked: c.selectedRows.indexOf(o) !== -1,
            column: p,
            row: o,
            index: n,
            "column-index": m,
            title: c.title,
            toggle: f(n),
            "row-col-span": w(n, m),
            "rowspan-colspan-list": s.rowspanColspanList,
            onToggleExtend: (_) => g(n, o),
            onCellClick: k
          }, null, 8, ["checked", "column", "row", "index", "column-index", "title", "toggle", "row-col-span", "rowspan-colspan-list", "onToggleExtend"]))), 128))
        ], 10, La),
        f(n) && r.value.length > 0 ? (v(), b("tr", {
          key: "tr" + n,
          class: L(["extend", { warning: c.selectedRows.indexOf(o) !== -1 }])
        }, [
          ue(Fe, {
            column: r.value[0],
            row: o,
            index: n,
            colspan: h.value.length
          }, null, 8, ["column", "row", "index", "colspan"])
        ], 2)) : M("", !0),
        c.hasChild ? (v(!0), b(Q, { key: 1 }, oe(o.children, (p, m) => ae((v(), b("tr", {
          key: "child" + m,
          class: L([{ [o.trClass]: o.trClass }, "tr-child"]),
          onCllick: (_) => y(p, m)
        }, [
          (v(!0), b(Q, null, oe(h.value, (_, V) => (v(), Z(Fe, {
            key: "childTd" + V,
            column: _,
            row: p,
            index: m,
            "column-index": V,
            title: c.title,
            "parent-row": o,
            onCellClick: k
          }, null, 8, ["column", "row", "index", "column-index", "title", "parent-row"]))), 128))
        ], 42, Oa)), [
          [fe, f(n)]
        ])), 128)) : M("", !0)
      ], 64))), 128))
    ]));
  }
}), Ea = ["width"], Ma = { key: 0 }, Pa = ["colspan"], Na = {
  key: 0,
  class: "table-drag-line"
}, Ra = {
  key: 0,
  class: "table-page-space"
}, za = /* @__PURE__ */ U({
  __name: "Table",
  props: {
    data: { default: () => [] },
    height: {},
    width: {},
    className: { default: "" },
    hover: { type: Boolean, default: !0 },
    border: { type: Boolean, default: !1 },
    stripe: { type: Boolean, default: !0 },
    ellipsis: { type: Boolean, default: !0 },
    showHeader: { type: Boolean, default: !0 },
    drag: { type: Boolean, default: !0 },
    dragLine: { type: Boolean, default: !0 },
    dragWidth: { default: () => [60, 0] },
    title: { type: Boolean, default: !0 },
    emptyText: { default: "暂无数据" },
    rowColSpan: {},
    hasChild: { type: Boolean },
    lazyLoad: {},
    extendToggle: { type: Boolean },
    sortSingle: { type: Boolean },
    columns: {},
    pagination: { default: () => ({}) },
    fixedBottomScroll: { type: [Boolean, String] }
  },
  emits: ["selectClick", "sortChange", "rowClick", "cellClick", "dragChange", "scroll"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = Re(), d = R(), r = R(), h = R(), f = R([]), g = ie({
      colWidth: [],
      selectedRows: [],
      // 已选择的行
      dragHead: {},
      // 临时存放表头拖动信息
      ctrlIsDown: !1,
      // 是否按下ctrl键
      ctrlRowIndex: -1,
      // 按下ctrl键盘时点击的checkbox序号
      isSetThWidth: !1,
      // 用于记录是否已经重新设置过表头的实际宽
      headMaxLayer: 1,
      // 表头的层级
      stateHeight: e.height
    });
    q(
      () => e.height,
      (B) => {
        g.stateHeight = B;
      }
    );
    const y = F(() => {
      const B = g.selectedRows.length;
      return B === 0 ? 0 : B === e.data.length ? 1 : 2;
    }), k = (B, E = !0) => {
      const N = g.selectedRows.indexOf(B);
      E ? N === -1 && g.selectedRows.push(B) : N !== -1 && g.selectedRows.splice(N, 1);
    };
    q(
      () => e.columns,
      () => {
        f.value = [], C();
      }
    );
    const C = () => {
      w(e.columns, 0, ""), f.value.forEach((B) => {
        if (B.children) {
          const E = f.value.filter((N) => {
            var G;
            const j = (G = N._tProps) == null ? void 0 : G.split(",");
            return j && j.includes(B.prop) && !N.children;
          });
          (E == null ? void 0 : E.length) > 0 && (B._colspan = E.length);
        } else {
          const E = g.headMaxLayer - B._layer + 1;
          E > 1 && (B._rowspan = E);
        }
      });
    }, w = (B, E = 0, N = "") => {
      E++, g.headMaxLayer < E && (g.headMaxLayer = E), B.forEach((j) => {
        const G = j.prop || "", ee = N ? N + "," + G : G;
        if (j.children)
          w(j.children, E, ee);
        else if (Object.keys(s).length)
          for (const pe in s)
            j.prop === pe && (j.slots || (j.slots = {}), Object.assign(j.slots, { default: s[pe] })), j.prop + "-header" === pe && (j.slots || (j.slots = {}), Object.assign(j.slots, { header: s[pe] }));
        f.value.push({
          ...j,
          _layer: E,
          _tProps: ee
        });
      });
    };
    e.columns && C(), ce(`${x}GetColumns`, f), ce(
      `${x}SetSelectedRows`,
      (B, E, N) => {
        const j = g.selectedRows.indexOf(E);
        if (B && j === -1 ? g.selectedRows.push(E) : g.selectedRows.splice(j, 1), g.ctrlIsDown) {
          if (g.ctrlRowIndex !== -1) {
            let G = g.ctrlRowIndex, ee = N;
            g.ctrlRowIndex > N && (G = N, ee = g.ctrlRowIndex);
            for (let pe = G; pe < ee; pe++)
              k(e.data[pe], j === -1);
          }
          g.ctrlRowIndex = N;
        }
        t("selectClick", g.selectedRows, B, E, N);
      }
    );
    const c = () => {
      f.value.forEach((B) => {
        g.colWidth.push(B.width);
      });
    }, a = (B) => {
      B ? g.selectedRows = [...e.data] : g.selectedRows.splice(0, g.selectedRows.length);
    }, o = (B) => {
      ge(() => {
        const E = Be(d.value), N = d.value.querySelector(".table-drag-line");
        N && (N.style.left = B.pageX - E.left + "px", N.style.height = E.height + "px");
      });
    }, n = () => {
      if (!e.drag)
        return;
      const B = d.value && d.value.querySelectorAll("th");
      g.colWidth = [], B.forEach((E) => {
        g.colWidth.push(E.offsetWidth + "px");
      });
    }, p = (B) => {
      e.drag && (g.isSetThWidth || (n(), g.isSetThWidth = !0), g.dragHead = {
        mouseDown: !0,
        oldX: B.evt.pageX,
        oldWidth: parseInt(g.colWidth[B.index].replace("px", "")) || 0,
        // 拖动前的单元格宽
        index: B.index
      }, o(B.evt), B.evt.preventDefault());
    }, m = (B) => {
      if (!e.drag)
        return;
      const E = B.evt;
      let N = g.dragHead.oldWidth + (E.pageX - g.dragHead.oldX);
      e.dragWidth[0] > 0 && N < e.dragWidth[0] || e.dragWidth[1] > 0 && N > e.dragWidth[1] || g.dragHead.mouseDown && (o(E), e.dragWidth[0] > 0 && N < e.dragWidth[0] && (N = e.dragWidth[0]), e.dragWidth[1] > 0 && N > e.dragWidth[1] && (N = e.dragWidth[1]), g.colWidth[g.dragHead.index] = N + "px");
    }, _ = () => {
      e.drag && g.dragHead && g.dragHead.mouseDown && t("dragChange", g.colWidth), g.dragHead = {
        mouseDown: !1,
        oldX: "",
        oldWidth: "",
        index: ""
      };
    }, V = (B, E) => {
      switch (B) {
        case "checkboxChange":
          a(E), t("selectClick", g.selectedRows, E);
          break;
        case "mouseDown":
          p(E);
          break;
        case "mouseMove":
          m(E);
          break;
        case "sortClick":
          t("sortChange", E);
          break;
      }
    }, I = (B, E) => {
      t("rowClick", B, E);
    }, O = (B, E, N, j) => {
      t("cellClick", B, E, N, j);
    }, H = () => {
      h.value.sortBy = {};
    }, u = (B) => {
      B.key === "Control" && (g.ctrlIsDown = !1, g.ctrlRowIndex = -1);
    }, S = (B) => {
      B.key === "Control" && !g.ctrlIsDown && (g.ctrlIsDown = !0);
    }, T = () => {
      const B = d.value.scrollTop, E = d.value.scrollLeft;
      h.value.scrollTop(B);
      const N = d.value.querySelectorAll(".left");
      if (N.length > 0)
        if (E > 0)
          for (let j = 0, G = N.length; j < G; j++)
            N[j].style.transform = `translateX(${E}px) translateZ(90px)`, N[j].style.webkitTransform = `translateX(${E}px) translateZ(90px)`;
        else
          for (let j = 0, G = N.length; j < G; j++)
            N[j].style.transform = "";
      z(E);
    }, z = (B) => {
      const E = d.value.querySelectorAll(".right"), N = d.value.querySelector("table").offsetWidth, j = B - (N - d.value.clientWidth);
      if (E.length > 0)
        for (let G = 0, ee = E.length; G < ee; G++)
          E[G].style.transform = `translateX(${j}px)translateZ(90px)`, E[G].style.webkitTransform = `translateX(${j}px)translateZ(90px)`;
    }, Y = () => {
      e.height && e.showHeader && d && d.value.addEventListener("scroll", T, !1), setTimeout(() => {
        z(0);
      }, 0);
    }, A = () => g.selectedRows, P = () => {
      const B = d.value.scrollTop, E = d.value.clientHeight, N = d.value.scrollHeight;
      let j = !1;
      B + E >= N - 3 && (j = !0), t("scroll", B, j, d.value);
    }, W = () => {
      if (!e.fixedBottomScroll)
        return;
      const B = d.value, E = r.value;
      let N = window.innerHeight;
      if (typeof e.fixedBottomScroll == "string") {
        const G = document.querySelector(e.fixedBottomScroll);
        G && (N = G.offsetHeight + 20, console.log(N));
      }
      const { top: j } = B.getBoundingClientRect();
      if (j > N)
        B.style.height = "unset", B.style.marginBottom = "unset";
      else {
        const G = Math.min(
          N - j,
          E.offsetHeight
        );
        B.style.minHeight = "60px", g.stateHeight = G + "px", B.style.marginBottom = E.offsetHeight - G + "px";
      }
    };
    return ne(() => {
      c(), window.addEventListener("keydown", S), window.addEventListener("keyup", u), e.drag && document.addEventListener("mouseup", _), e.height && d.value.addEventListener("scroll", P), ge(() => {
        if (e.fixedBottomScroll) {
          if (typeof e.fixedBottomScroll == "string") {
            const B = document.querySelector(e.fixedBottomScroll);
            B && B.addEventListener("scroll", W);
          } else
            document.addEventListener("scroll", W);
          window.addEventListener("resize", W);
        }
        Y(), W();
      });
    }), Ke(() => {
      window.removeEventListener("keydown", S), window.removeEventListener("keyup", u), e.drag && document.removeEventListener("mouseup", _), e.height && d.value && d.value.removeEventListener("scroll", P), e.fixedBottomScroll && (document.removeEventListener("scroll", W), window.removeEventListener("resize", W));
    }), l({ getSelectAll: A, clearSort: H, toggleRowSelection: k, toggleSelection: a }), (B, E) => (v(), b("div", null, [
      $("div", {
        ref_key: "el",
        ref: d,
        class: L({
          [D(x) + "-table"]: !0,
          [B.className]: B.className,
          "is-scroll": B.width || B.height
        }),
        style: X({
          width: B.width,
          height: g.stateHeight,
          overflowY: B.height ? "auto" : "",
          overflowX: B.width ? "auto" : ""
        })
      }, [
        $("table", {
          ref_key: "tableEl",
          ref: r,
          class: L({
            "no-stripe": !B.stripe,
            "no-border": !B.border,
            "no-hover": !B.hover,
            "no-ellipsis": !B.ellipsis,
            [B.className]: B.className
          })
        }, [
          $("colgroup", null, [
            (v(!0), b(Q, null, oe(g.colWidth, (N, j) => (v(), b("col", {
              key: j,
              width: N,
              class: L(`column${j}`)
            }, null, 10, Ea))), 128))
          ]),
          ue(Ia, {
            ref_key: "tableHeadEl",
            ref: h,
            drag: B.drag,
            title: B.title,
            "sort-single": B.sortSingle,
            "show-header": B.showHeader,
            "select-checked": y.value,
            "head-max-layer": g.headMaxLayer,
            onEvent: V
          }, null, 8, ["drag", "title", "sort-single", "show-header", "select-checked", "head-max-layer"]),
          B.data.length === 0 ? (v(), b("tbody", Ma, [
            $("tr", null, [
              $("td", {
                colspan: f.value.length,
                class: "empty"
              }, K(B.emptyText), 9, Pa)
            ])
          ])) : (v(), Z(Da, {
            key: 1,
            data: B.data,
            "row-col-span": B.rowColSpan,
            "has-child": B.hasChild,
            "lazy-load": B.lazyLoad,
            "extend-toggle": B.extendToggle,
            title: B.title,
            "selected-rows": g.selectedRows,
            onRowClick: I,
            onCellClick: O
          }, null, 8, ["data", "row-col-span", "has-child", "lazy-load", "extend-toggle", "title", "selected-rows"]))
        ], 2),
        B.dragLine && B.drag && g.dragHead.mouseDown ? (v(), b("div", Na)) : M("", !0)
      ], 6),
      Object.keys(B.pagination).length ? (v(), b("div", Ra)) : M("", !0),
      Object.keys(B.pagination).length > 0 ? (v(), Z(D(It), re({
        key: 1,
        total: B.data && B.data.length
      }, B.pagination), null, 16, ["total"])) : M("", !0)
    ]));
  }
}), Ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Table: za
}, Symbol.toStringTag, { value: "Module" })), ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Transition: Qe
}, Symbol.toStringTag, { value: "Module" })), Fa = {
  name: "NodeContent",
  props: {
    data: Object
  },
  render(i) {
    const l = le(`${x}TreeSlots`), t = le(`${x}PropsData`);
    return typeof l.default == "function" ? l.default({ node: i.data, data: t.dataList }) : null;
  }
}, Wa = ["onClick"], Ua = { class: "tree-label" }, Ya = {
  key: 1,
  class: "lazy-loading"
}, Ka = /* @__PURE__ */ U({
  __name: "TreeNode",
  props: {
    tid: {}
  },
  emits: ["toggle"],
  setup(i, { emit: l }) {
    const t = i, e = le(`${x}PropsData`), s = ie({
      lazy: e.lazy,
      showCheckbox: e.showCheckbox,
      loadingId: ""
    }), d = F(() => e.dataList.filter((k) => k.tid === t.tid)), r = (k) => {
      s.loadingId || (k.open = !k.open, e.lazy && k.hasChild && (s.loadingId = k.id), l("toggle", k, () => {
        e.lazy && k.hasChild && (s.loadingId = "");
      }));
    }, h = (k) => typeof e.modelValue == "object" ? e.modelValue.indexOf(k.id) !== -1 : e.modelValue === k.id && k.id, f = (k) => {
      l("toggle", k);
    }, g = le(`${x}CheckboxChange`), y = (k) => {
      ge(() => {
        g && g(k);
      });
    };
    return (k, C) => {
      const w = Ye("tree-node", !0);
      return v(), Z(Qe, null, {
        default: te(() => [
          $("ul", null, [
            (v(!0), b(Q, null, oe(d.value, (c) => (v(), b("li", {
              key: c.id
            }, [
              $("span", {
                class: L(["tree-box", { "has-child": c.hasChild, selected: h(c) }]),
                onClick: se((a) => r(c), ["stop"])
              }, [
                $("i", {
                  class: L([{ "open-child": c.open, [`${D(x)}-icon`]: !0 }, "icon-down"])
                }, null, 2),
                s.showCheckbox ? (v(), Z(D(Ve), {
                  key: 0,
                  modelValue: c.checked,
                  "onUpdate:modelValue": (a) => c.checked = a,
                  class: L({ "some-select": c.someChecked }),
                  onClick: C[0] || (C[0] = se(() => {
                  }, ["stop"])),
                  onChange: (a) => y(c)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onChange"])) : M("", !0),
                $("span", Ua, K(c.label), 1),
                s.lazy && c.hasChild ? (v(), b("span", Ya, [
                  (v(), Z(xe, {
                    "model-value": c.id === s.loadingId,
                    key: c.id
                  }, null, 8, ["model-value"]))
                ])) : M("", !0),
                ue(Fa, { data: c }, null, 8, ["data"])
              ], 10, Wa),
              c.hasChild ? ae((v(), Z(w, {
                key: c.id,
                tid: c.id,
                onToggle: f
              }, null, 8, ["tid"])), [
                [fe, c.open]
              ]) : M("", !0)
            ]))), 128))
          ])
        ]),
        _: 1
      });
    };
  }
}), Ga = /* @__PURE__ */ U({
  __name: "Tree",
  props: {
    data: { default: () => [] },
    lazy: { type: Boolean },
    showCheckbox: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue", "change", "click"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = Re(), { modelValue: d } = Le(e), r = ie({
      dataList: [],
      lazy: e.lazy,
      showCheckbox: e.showCheckbox,
      modelValue: e.modelValue
    });
    ce(`${x}PropsData`, r), ce(`${x}TreeSlots`, s);
    const h = (c) => {
      t("change", c), c.tid && f(c.tid), g(c.id, c.checked);
    }, f = (c) => {
      if (!c)
        return;
      let a = {}, o = !0, n = !1;
      r.dataList.forEach((p) => {
        p.id === c && (a = p), p.tid === c && (p.checked || (o = !1), p.checked && (n = !0));
      }), a.checked = o, o && (n = !1), a.someChecked = n, f(a.tid);
    }, g = (c, a) => {
      r.dataList.forEach((o) => {
        o.tid === c && (o.checked = a, o.hasChild && g(o.id, a));
      });
    };
    ce(`${x}CheckboxChange`, h), q(
      () => e.data,
      (c) => {
        k(c);
      }
    ), q(
      () => e.modelValue,
      (c) => {
        r.modelValue = c;
      }
    );
    const y = (c) => c + "-" + Math.random().toString(36).substr(2, 8), k = (c, a) => {
      c && c.forEach((o) => {
        const n = JSON.parse(JSON.stringify(o));
        delete n.children;
        const p = o.children && o.children.length > 0 || e.lazy && o.hasChild !== !1;
        let m = {};
        e.showCheckbox && (m = { checked: !1, someChecked: !1 }), n.id || (n.id = y(o.label)), r.dataList.push(
          Object.assign({}, m, n, {
            tid: a,
            hasChild: p
          })
        ), p && k(o.children, n.id);
      });
    };
    k(e.data);
    const C = (c, a) => {
      if (e.lazy && c.hasChild !== !1 ? t("click", c, (o) => {
        c.isLoad = !0, c.hasChild = !0, a && a(!1);
        let n = {};
        e.showCheckbox && (n = { checked: !1 }), o.forEach((p) => {
          p.id || (p.id = y(p.label)), r.dataList.push(Object.assign({}, n, p, { tid: c.id }));
        });
      }) : t("click", c), typeof e.modelValue == "object") {
        const o = d.value && d.value, n = o.indexOf(c.id);
        n !== -1 ? o.splice(n, 1) : o.push(c.id), t("update:modelValue", o);
      } else
        t("update:modelValue", c.id);
    };
    return l({ getValue: (c) => {
      const a = [], o = [];
      return r.dataList.forEach((n) => {
        n.checked && (a.push({
          id: n.id,
          label: n.label
        }), o.push(n.id));
      }), c ? a : o;
    } }), (c, a) => (v(), b("div", {
      class: L(`${D(x)}-tree`)
    }, [
      ue(Ka, { onToggle: C })
    ], 2));
  }
}), Ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tree: Ga
}, Symbol.toStringTag, { value: "Module" })), At = (i) => {
  let l = null;
  return window.URL !== void 0 ? l = window.URL.createObjectURL(i) : window.webkitURL !== void 0 && (l = window.webkitURL.createObjectURL(i)), l;
}, Lt = (i, l, t) => {
  const e = new FormData();
  if (e.append(l.name, i, i.name), l.data)
    for (const h in l.data)
      e.append(h, l.data[h]);
  const s = We.CancelToken.source(), d = s.token;
  t(s, "source");
  const r = {
    cancelToken: d,
    headers: Object.assign(
      { "Content-Type": "multipart/form-data" },
      l.headers
    ),
    timeout: l.timeout,
    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    onUploadProgress: (h) => {
      const f = h.loaded / h.total * 100 | 0;
      console.log(f), t(f, "loaded");
    }
  };
  We.post(l.action, e, r).then((h) => {
    console.log(h), t(h, "success");
  }).catch((h) => {
    console.log(h, "catch"), t(h, "catch");
  });
}, Za = ["multiple", "accept", "name", "disabled"], Xa = {
  key: 1,
  class: "default-btn icon-plus"
}, Qa = {
  key: 1,
  class: "upload-list"
}, qa = { key: 0 }, es = ["src"], ts = {
  key: 2,
  class: "status"
}, ls = ["onClick"], os = /* @__PURE__ */ U({
  __name: "Upload",
  props: {
    modelValue: {},
    name: { default: "file" },
    action: {},
    multiple: { type: Boolean },
    accept: {},
    data: {},
    headers: {},
    format: {},
    maxSize: { default: 0 },
    timeout: { default: 0 },
    auto: { type: Boolean, default: !0 },
    drag: { type: Boolean },
    disabled: { type: Boolean },
    limit: { default: 0 },
    showFileList: { type: Boolean, default: !0 },
    listType: { default: "text" }
  },
  emits: ["update:modelValue", "change", "error", "success", "remove"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = Object.prototype.toString.call(e.modelValue) === "[object Object]", d = R(), r = ie({
      tempFiles: s ? [e.modelValue] : e.modelValue || [],
      tempUpload: [],
      // 存储待上传文件，用于手动上传
      source: ""
    }), h = (m, _) => {
      t("change", m), e.multiple || (r.tempFiles = [], r.tempUpload = []);
      let V = m;
      if (_ !== "drag" && (V = m.target && m.target.files), V)
        for (let I = 0; I < V.length; I++) {
          const O = y(V[I]);
          if (console.log(O), O.code) {
            if (!e.multiple) {
              t("error", O);
              return;
            }
          } else {
            let H;
            /image\/\w+/.test(V[I].type) && (H = At(V[I]));
            const u = V[I].size + (/* @__PURE__ */ new Date()).getTime().toString();
            if (e.limit && r.tempFiles.length >= e.limit)
              return;
            r.tempFiles.push({
              size: g(V[I].size),
              // 大小
              loaded: 0,
              // 上传进度
              name: V[I].name,
              url: H,
              // 预览用的src
              type: V[I].type,
              status: 0,
              // 上传状态，0等待上传，1正在上传，2成功，-1失败，由接口返回后修改
              id: u
            }), e.auto ? f(V[I], u) : r.tempUpload.push({ file: V[I], index: u });
          }
        }
      a();
    }, f = (m, _) => {
      const V = {
        fileName: r.fileName,
        // 上传文件名，如123.jpg
        name: e.name,
        // 文件域的name值
        action: e.action,
        headers: e.headers,
        data: e.data,
        timeout: e.timeout
      };
      let I = 0;
      r.tempFiles.forEach((O, H) => {
        O.id === _ && (I = H);
      }), r.tempFiles[I].status = 1, Lt(m, V, (O, H) => {
        switch (H) {
          case "source":
            r.source = O;
            break;
          case "loaded":
            r.tempFiles[I].loaded = O;
            break;
          case "success":
            t("success", O, (u, S) => {
              r.tempFiles[I].status = S || 2, u && (r.tempFiles[I].url = u);
            }), n();
            break;
          case "error":
            t("error", O), r.tempFiles[I].status = -1, n();
            break;
        }
      });
    }, g = (m) => {
      if (m === 0)
        return "0B";
      const _ = 1024, V = ["B", "KB", "MB", "GB"], I = Math.floor(Math.log(m) / Math.log(_));
      return (m / Math.pow(_, I)).toPrecision(3) + V[I];
    }, y = (m) => {
      let _ = {
        code: 0,
        msg: ""
      };
      const V = m.name, I = V.substr(V.length - 3, 3).toLocaleLowerCase();
      e.format && (e.format.toLocaleLowerCase().indexOf(I) !== -1 || (_ = { code: 2, msg: "只支持上传类型为：" + (e.format ? e.format.toString() : "") }));
      const O = m.size;
      return O && O && e.maxSize > e.maxSize * 1024 && (_ = { code: 1, msg: "超出上传限制" }), _;
    }, k = (m) => {
      m.preventDefault(), h(m.dataTransfer.files, "drag");
    }, C = (m) => {
      m.preventDefault();
    }, w = () => {
      r.source && (r.source.cancel("cancel upload"), n());
    }, c = (m) => {
      t("remove", r.tempFiles[m]), r.tempFiles.splice(m, 1), a();
    }, a = () => {
      e.multiple ? t("update:modelValue", r.tempFiles) : t("update:modelValue", r.tempFiles[0] || {});
    }, o = () => {
      e.auto || r.tempUpload.forEach(async (m) => {
        await f(m.file, m.index);
      });
    }, n = () => {
      d.value.value = "";
    }, p = (m) => {
      let _ = "";
      switch (m.status) {
        case 0:
          _ = "待上传";
          break;
        case 1:
          _ = "正在上传" + m.loaded + "%";
          break;
        case 2:
          _ = "上传成功";
          break;
        case -1:
          _ = "上传失败";
          break;
      }
      return _;
    };
    return l({ upload: o, cancelRequest: w }), (m, _) => (v(), b("div", {
      class: L({
        [`${D(x)}-upload`]: !0,
        disabled: m.disabled,
        ["upload-" + m.listType]: m.listType
      })
    }, [
      m.limit && m.limit <= r.tempFiles.length ? M("", !0) : (v(), b("label", {
        key: 0,
        class: L(["upload-file", { "drag-file": m.drag }]),
        onDragover: C,
        onDrop: k
      }, [
        $("input", {
          ref_key: "inputEl",
          ref: d,
          style: { display: "none" },
          type: "file",
          multiple: m.multiple,
          accept: m.accept,
          name: m.name,
          disabled: m.disabled,
          onChange: h
        }, null, 40, Za),
        m.$slots.default ? J(m.$slots, "default", { key: 0 }) : (v(), b("i", Xa))
      ], 34)),
      m.showFileList ? (v(), b("div", Qa, [
        $("ul", null, [
          (v(!0), b(Q, null, oe(r.tempFiles, (V, I) => (v(), b("li", {
            key: V.url,
            class: L(["status-" + (V.status || "")])
          }, [
            m.listType === "text" ? (v(), b("span", qa, K(V.name), 1)) : (v(), b("img", {
              key: 1,
              src: V.url,
              alt: ""
            }, null, 8, es)),
            V.status !== void 0 ? (v(), b("span", ts, [
              $("b", null, K(p(V)), 1),
              V.status === 1 ? (v(), b("i", {
                key: 0,
                class: "progress",
                style: X({ width: V.loaded + "%" })
              }, null, 4)) : M("", !0)
            ])) : M("", !0),
            $("i", {
              class: "icon-del",
              onClick: (O) => c(I)
            }, null, 8, ls)
          ], 2))), 128))
        ])
      ])) : M("", !0)
    ], 2));
  }
}), ns = { class: "select-area-tips" }, as = ["onMousedown"], ss = /* @__PURE__ */ $("div", { class: "box-line box-line-1" }, null, -1), is = /* @__PURE__ */ $("div", { class: "box-line box-line-2" }, null, -1), rs = /* @__PURE__ */ $("div", { class: "box-line box-line-3" }, null, -1), us = /* @__PURE__ */ $("div", { class: "box-line box-line-4" }, null, -1), cs = ["width", "height"], ds = ["width", "height"], fs = { class: "crop-btn" }, ps = {
  key: 0,
  class: "progress"
}, gs = /* @__PURE__ */ U({
  __name: "ImgCrop",
  props: {
    boxWidth: { default: 600 },
    boxHeight: { default: 400 },
    imgWidth: { default: 150 },
    imgHeight: { default: 150 },
    fixedScale: { type: Boolean, default: !0 },
    maxSize: { default: 0 },
    name: { default: "file" },
    data: {},
    headers: {},
    action: {},
    timeout: { default: 0 },
    text: { default: () => ["选择图片", "重新选择", "确定"] }
  },
  emits: ["error", "success"],
  setup(i, { emit: l }) {
    const t = i, e = R(), s = R(), d = R(), r = R(), h = R(), f = ie({
      fileName: "",
      // 上传的文件名
      imgRealWidth: 0,
      // 上传图片实际宽
      drawImg: {
        img: null,
        // 规定要使用的图像、画布或视频
        x: 0,
        // 在画布上放置图像的 x 坐标位置
        y: 0,
        // 在画布上放置图像的 y 坐标位置
        width: 0,
        // 要使用的图像的宽度
        height: 0
        // 要使用的图像的高度
      },
      controlBox: {
        // 裁切框
        width: t.imgWidth,
        // 这里初始设为裁切图片的最小宽
        height: t.imgHeight,
        left: t.boxWidth / 2 - t.imgWidth / 2,
        // 初始显示位置 这里应该设置为居中
        top: t.boxHeight / 2 - t.imgHeight / 2
      },
      controlBtnList: [
        "leftUp",
        "leftDown",
        "rightUp",
        "rightDown",
        "topCenter",
        "downCenter",
        "leftCenter",
        "rightCenter"
      ],
      // 显示改变大小的8个位置点名
      progress: 0
      // 上传进度
    }), g = F(() => {
      const { height: u, width: S, left: T, top: z } = f.controlBox;
      return {
        height: u + "px",
        width: S + "px",
        left: T + "px",
        top: z + "px",
        position: "absolute",
        cursor: "move"
      };
    }), y = F(() => (f.drawImg.width / f.imgRealWidth).toFixed(2)), k = () => {
      s.value.click();
    }, C = (u) => {
      const S = u.target;
      if (S && S.files && S.files[0]) {
        f.fileName = S.files[0].name;
        const T = At(S.files[0]);
        w(T, S.files[0]);
      }
    }, w = (u, S) => {
      const T = new Image();
      T.crossOrigin = "Anonymous", T.onload = (z) => {
        const Y = T.height, A = T.width, P = t.boxHeight, W = t.boxWidth;
        f.imgRealWidth = T.width;
        let B = z.target.fileSize;
        if (S && S.size && (B = S.size), console.log("imgSize"), console.log(B), B && B && t.maxSize > t.maxSize * 1024) {
          I(1);
          return;
        }
        if (S && !/^(image\/jpeg|image\/png|image\/jpg)$/i.test(S.type)) {
          I(3);
          return;
        }
        let N;
        Y < P && A < W ? N = 1 : A / Y <= W / P ? N = P / Y : N = W / A, f.drawImg = {
          img: T,
          // 规定要使用的图像、画布或视频
          x: (W - A * N) / 2,
          // 在画布上放置图像的 x 坐标位置
          y: (P - Y * N) / 2,
          // 在画布上放置图像的 y 坐标位置
          width: A * N,
          // 要使用的图像的宽度
          height: Y * N
          // 要使用的图像的高度
        }, c();
      }, T.src = u, a();
    }, c = () => {
      if (f.drawImg.img) {
        const u = d.value, S = u.getContext("2d");
        S.clearRect(0, 0, u.width, u.height), S.drawImage(
          f.drawImg.img,
          f.drawImg.x,
          f.drawImg.y,
          f.drawImg.width,
          f.drawImg.height
        );
      }
    }, a = () => {
      let { width: u, height: S, left: T, top: z } = f.controlBox;
      T < 0 && (T = 0), z < 0 && (z = 0), T + u > t.boxWidth && (T = t.boxWidth - u), z + S > t.boxHeight && (z = t.boxHeight - S), f.controlBox.left = T, f.controlBox.top = z;
      const Y = r.value, A = Y.getContext("2d");
      A.fillStyle = "rgba(0,0,0,0.6)", A.clearRect(0, 0, Y.width, Y.height), A.fillRect(0, 0, Y.width, Y.height), A.clearRect(T, z, u, S);
    }, o = (u) => {
      let S = !0;
      if (S) {
        const T = f.controlBox.left, z = f.controlBox.top, Y = u.pageX - T, A = u.pageY - z;
        document.onmousemove = (P) => {
          console.log("_controlBoxonmousemove");
          const W = P.pageX - Y, B = P.pageY - A;
          f.controlBox.left = W, f.controlBox.top = B, a();
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, S = !1;
        };
      }
    }, n = (u, S) => {
      let T = !0;
      if (T) {
        const z = u.pageX, Y = u.pageY, { width: A, height: P, left: W, top: B } = f.controlBox;
        document.onmousemove = (E) => {
          const N = E.pageX - z, j = E.pageY - Y;
          let G = A, ee = P, pe = W, me = B;
          const we = t.imgWidth / t.imgHeight, Te = t.imgHeight / t.imgWidth;
          switch (S) {
            case "leftUp":
              G = A - N, t.fixedScale ? (ee = G * Te, me = B - (ee - P)) : (ee = P - j, me = B + j), pe = W + N;
              break;
            case "leftCenter":
              G = A - N, pe = W + N, t.fixedScale && (ee = G * Te);
              break;
            case "leftDown":
              G = A - N, pe = W + N, t.fixedScale ? ee = G * Te : ee = P + j;
              break;
            case "topCenter":
              ee = P - j, me = B + j, t.fixedScale && (G = ee * we);
              break;
            case "downCenter":
              ee = P + j, t.fixedScale && (G = ee * we);
              break;
            case "rightUp":
              G = A + N, t.fixedScale ? (ee = G * Te, me = B - (ee - P)) : (ee = P - j, me = B + j);
              break;
            case "rightCenter":
              G = A + N, t.fixedScale && (ee = G * Te);
              break;
            case "rightDown":
              G = A + N, t.fixedScale ? ee = G * Te : ee = P + j;
              break;
          }
          G < t.imgWidth || ee < t.imgHeight || (f.controlBox = {
            width: G,
            height: ee,
            left: pe,
            top: me
          }, a());
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, T = !1, console.log("onmouseup0000");
        };
      }
      u.stopPropagation();
    }, p = (u) => {
      let S = !0;
      if (S) {
        const T = u.pageX - f.drawImg.x, z = u.pageY - f.drawImg.y;
        document.onmousemove = (Y) => {
          f.drawImg.x = Y.pageX - T, f.drawImg.y = Y.pageY - z, c();
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, S = !1;
        };
      }
    }, m = (u) => {
      if (f.drawImg.img) {
        let S;
        const T = u || window.event;
        T.wheelDelta ? S = -(T.wheelDelta / 40) : T.detail && (S = T.detail);
        const { x: z, y: Y, height: A, width: P } = f.drawImg;
        f.drawImg.x = z + S * 3, f.drawImg.y = Y + S * 3, f.drawImg.width = P - S * 9, f.drawImg.height = (P - S * 9) / (P / A), c();
      }
      return !1;
    }, _ = () => {
      if (!f.drawImg.img) {
        I(2);
        return;
      }
      const u = new Image(), { left: S, top: T } = f.controlBox, z = f.controlBox.width, Y = f.controlBox.height, A = t.imgWidth, P = t.imgHeight;
      u.onload = () => {
        const W = document.createElement("canvas");
        W.width = A, W.height = P;
        const B = W.getContext("2d");
        B && (B.clearRect(0, 0, A, P), B.drawImage(
          u,
          S,
          T,
          z,
          Y,
          0,
          0,
          A,
          P
        ));
        const E = {
          fileName: f.fileName,
          // 上传文件名，如123.jpg
          name: t.name,
          // 文件域的name值
          action: t.action,
          headers: t.headers,
          data: t.data,
          timeout: t.timeout
        }, N = O(W.toDataURL("image/png", 1));
        Lt(N, E, V);
      }, u.src = d.value.toDataURL();
    }, V = (u, S) => {
      switch (S) {
        case "loaded":
          f.progress = u;
          break;
        case "success":
          l("success", u), H();
          break;
        case "catch":
          I(4, u), H();
          break;
      }
    }, I = (u, S) => {
      const T = { code: u, msg: "", data: "" };
      switch (u) {
        case 1:
          T.msg = "超出上传限制";
          break;
        case 2:
          T.msg = "请选择上传图片";
          break;
        case 3:
          T.msg = "请选择jpg、jpeg或png格式的图片";
          break;
        case 4:
          T.msg = "请求异常", T.data = S;
          break;
      }
      l("error", T);
    }, O = (u) => {
      const S = u.split(","), T = S[0].match(/:(.*?);/)[1], z = atob(S[1]);
      let Y = z.length;
      const A = new Uint8Array(Y);
      for (; Y--; )
        A[Y] = z.charCodeAt(Y);
      const P = new Blob([A], { type: T });
      return P.lastModifiedDate = /* @__PURE__ */ new Date(), P.name = f.fileName, P;
    }, H = () => {
      f.drawImg = {
        img: null,
        // 规定要使用的图像、画布或视频
        x: 0,
        // 在画布上放置图像的 x 坐标位置
        y: 0,
        // 在画布上放置图像的 y 坐标位置
        width: 0,
        // 要使用的图像的宽度
        height: 0
        // 要使用的图像的高度
      }, h.value.reset();
    };
    return ne(() => {
      ge(() => {
        (/Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel") === "mousewheel" ? e.value.onmousewheel = m : e.value.addEventListener("DOMMouseScroll", m);
      });
    }), Ke(() => {
      e.value && e.value.removeEventListener("DOMMouseScroll", m);
    }), (u, S) => (v(), b("div", {
      class: L(`${D(x)}-upload-crop`)
    }, [
      $("div", {
        ref_key: "mainCrop",
        ref: e,
        class: "main-crop",
        style: X({ width: u.boxWidth + "px", height: u.boxHeight + "px" })
      }, [
        ae($("a", {
          href: "javascript:;",
          class: "select-img",
          style: X({ lineHeight: u.boxHeight + "px" }),
          onClick: k
        }, K(u.text[0]), 5), [
          [fe, !f.drawImg.img]
        ]),
        ae($("div", {
          class: "control-box",
          style: X(g.value),
          onMousedown: o
        }, [
          $("div", ns, " w:" + K(parseInt(f.controlBox.width)) + " h:" + K(parseInt(f.controlBox.height)) + " (x:" + K(parseInt(f.controlBox.left)) + ",y:" + K(parseInt(f.controlBox.top)) + ",scale:" + K(y.value) + ") ", 1),
          (v(!0), b(Q, null, oe(f.controlBtnList, (T, z) => (v(), b("span", {
            key: z,
            class: L([T, "control-btn"]),
            onMousedown: (Y) => n(Y, T)
          }, null, 42, as))), 128)),
          ss,
          is,
          rs,
          us
        ], 36), [
          [fe, f.drawImg.img !== null]
        ]),
        ae($("canvas", {
          ref_key: "canvasSelectBox",
          ref: r,
          class: "canvas-crop",
          width: u.boxWidth,
          height: u.boxHeight,
          onMousedown: p
        }, null, 40, cs), [
          [fe, f.drawImg.img]
        ]),
        ae($("canvas", {
          ref_key: "canvas",
          ref: d,
          class: "canvas-crop-img",
          width: u.boxWidth,
          height: u.boxHeight
        }, null, 8, ds), [
          [fe, f.drawImg.img]
        ])
      ], 4),
      $("div", fs, [
        u.text[1] ? (v(), b("a", {
          key: 0,
          href: "javascript:;",
          class: "crop-select",
          onClick: k
        }, K(u.text[1]), 1)) : M("", !0),
        $("a", {
          href: "javascript:;",
          class: "crop-upload",
          onClick: _
        }, K(u.text[2]), 1)
      ]),
      $("form", {
        ref_key: "formReset",
        ref: h
      }, [
        $("input", {
          ref_key: "inputFile",
          ref: s,
          type: "file",
          accept: "image/*",
          class: "image-file",
          onChange: C
        }, null, 544)
      ], 512),
      f.progress ? (v(), b("span", ps, [
        $("i", {
          style: X({ width: f.progress + "%" })
        }, null, 4)
      ])) : M("", !0)
    ], 2));
  }
}), ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ImgCrop: gs,
  Upload: os
}, Symbol.toStringTag, { value: "Module" }));
const bs = {
  // @ts-ignore
  install(i) {
    const l = /* @__PURE__ */ Object.assign({ "./autoForm/index.ts": Xl, "./backTop/index.ts": to, "./badge/index.ts": oo, "./breadcrumb/index.ts": io, "./button/index.ts": po, "./carousel/index.ts": ko, "./cascader/index.ts": Io, "./checkbox/index.ts": Xt, "./collapse/index.ts": Po, "./colorPicker/index.ts": Jo, "./datePicker/index.ts": Sl, "./dialog/index.ts": Zo, "./divider/index.ts": Qo, "./drawer/index.ts": en, "./dropdown/index.ts": sn, "./form/index.ts": Mt, "./formItem/index.ts": jl, "./icon/index.ts": un, "./image/index.ts": yn, "./input/index.ts": Wt, "./inputNumber/index.ts": Cn, "./lazy/index.ts": Tn, "./loading/index.ts": Bn, "./marquee/index.ts": An, "./menu/index.ts": jn, "./message/index.ts": Gn, "./pagination/index.ts": aa, "./popover/index.ts": ua, "./progress/index.ts": ma, "./radio/index.ts": Gt, "./select/index.ts": xl, "./selectDown/index.ts": cl, "./slider/index.ts": Ca, "./switch/index.ts": Il, "./table/index.ts": Ha, "./tabs/index.ts": Gl, "./tag/index.ts": Aa, "./textarea/index.ts": El, "./timePicker/index.ts": Nl, "./timeSelect/index.ts": zl, "./tooltip/index.ts": Dn, "./transition/index.ts": ja, "./tree/index.ts": Ja, "./upload/index.ts": ms, "./util/index.ts": Ll });
    console.log(l), Object.keys(l).forEach((t) => {
      const e = l[t], s = ["./lazy", "./loading", "./message", "./util"], d = t.replace(/\/index.ts/, "");
      if (s.includes(d))
        switch (d) {
          case "./lazy":
            i.use(e.default);
            break;
          case "./loading":
            i.config.globalProperties.$loading = e.loading, i.provide("Loading", e), i.use(e.vLoading);
            break;
          case "./message":
            i.provide("Message", e), Object.keys(e).forEach((r) => {
              i.config.globalProperties[`$${r}`] = e[r];
            });
            break;
        }
      else
        e && Object.keys(e).forEach((r) => {
          i.component(x + r, e[r]);
        });
    });
  }
};
export {
  bs as default
};
