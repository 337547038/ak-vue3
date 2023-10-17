import { defineComponent as Y, reactive as re, provide as de, onMounted as ne, openBlock as h, createElementBlock as b, normalizeClass as O, unref as E, renderSlot as J, inject as le, ref as j, computed as W, watch as ee, normalizeStyle as X, createCommentVNode as R, createElementVNode as $, mergeProps as ue, withModifiers as ie, Fragment as Q, renderList as oe, createBlock as Z, withCtx as te, createTextVNode as fe, toDisplayString as G, toRefs as xe, withDirectives as se, vShow as pe, nextTick as me, onBeforeUnmount as be, vModelText as _e, createVNode as ce, withKeys as qe, Transition as ke, markRaw as ye, resolveDynamicComponent as Me, h as Se, normalizeProps as Ae, resolveComponent as Ue, onUnmounted as Ye, guardReactiveProps as xt, useSlots as Re, createApp as ft } from "vue";
import Fe from "axios";
const I = "ak", pt = /* @__PURE__ */ Y({
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
    const t = i, e = re({
      defaultValue: ""
      // 用于保存所有表单元素初始值
    }), s = [];
    de(`${I}FormProps`, t), de(`${I}GetFormItemFields`, (d) => {
      s.push(d);
    });
    const c = (d, v) => {
      v !== "reset" && (e.defaultValue = JSON.stringify(d)), Object.assign(t.modelValue, d);
    }, r = () => {
      c(JSON.parse(e.defaultValue), "reset"), s && s.forEach((d) => {
        d.clear();
      });
    }, m = (d) => {
      s && s.forEach((v) => {
        d ? d.indexOf(v.prop) !== -1 && v.clear() : v.clear();
      });
    }, f = (d) => {
      const v = [];
      let k = s;
      return d && d.length > 0 && (k = s.filter((_) => d.indexOf(_.prop) !== -1)), new Promise((_, w) => {
        k.forEach((a) => {
          a.validate().then(() => {
            v.push("true"), u();
          }).catch((o) => {
            v.push(o), u();
          });
        });
        const u = () => {
          if (v.length === k.length) {
            const a = v.filter((o) => o !== "true");
            a.length > 0 ? w(a) : _(t.modelValue);
          }
        };
      });
    };
    return ne(() => {
      c(t.modelValue);
    }), l({ validate: f, clearValidate: m, resetForm: r }), (d, v) => (h(), b("form", {
      class: O(`${E(I)}-form`)
    }, [
      J(d.$slots, "default")
    ], 2));
  }
}), Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Form: pt
}, Symbol.toStringTag, { value: "Module" })), et = {
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
function tt(i) {
  const l = Function;
  return new l("return " + i)();
}
const Te = function(i) {
  return /^\s*$/g.test(i);
}, Ee = function(i, l, t) {
  return t === "rule" ? tt(l).test(i) : et[l] === void 0 ? "undefined" : tt(et[l]).test(i);
}, Ot = function(i, l) {
  for (let t = 0, e = l.length; t < e; t++) {
    const s = l[t];
    switch (s.type) {
      case "required":
        if (Te(i) || i === !1)
          return s.msg;
        break;
      case "digits":
      case "number":
      case "mobile":
      case "mail":
      case "tel":
      case "fax":
        if (!Te(i) && !Ee(i, s.type))
          return s.msg;
        break;
      case "phone":
        if (!Te(i) && !(Ee(i, "mobile") || Ee(i, "tel")))
          return s.msg;
        break;
      case "maxLength":
        if (!Te(i) && parseInt(i.length) > parseInt(s.len))
          return s.msg;
        break;
      case "minLength":
        if (!Te(i) && parseInt(i.length) < parseInt(s.len))
          return s.msg;
        break;
      case "rule":
        if (!Te(i) && !Ee(i, s.rule, "rule"))
          return s.msg;
        break;
      case "fn":
        if (!s.validator(i))
          return s.msg;
        break;
    }
  }
  return !0;
}, we = (i) => {
  const l = le(`${I}FormProps`, {});
  return l && l.disabled ? !0 : i;
}, Dt = {
  key: 0,
  class: "prepend"
}, Et = ["value", "type", "disabled"], Mt = {
  key: 1,
  class: "append"
}, Pt = {
  key: 2,
  class: "prefix-icon"
}, Rt = { class: "suffix-icon" }, zt = ["onClick"], Ke = /* @__PURE__ */ Y({
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
    const e = i, s = j(), c = j(!1), r = W(() => we(e.disabled)), m = W(() => c.value ? "text" : e.type), f = (o) => {
      t("blur", o);
      const { value: n } = o.target;
      a(n, "blur");
    }, d = (o) => {
      t("focus", o);
      const { value: n } = o.target;
      a(n, "focus");
    }, v = (o) => {
      const { value: n } = o.target;
      t("update:modelValue", n), a(n, "change");
    }, k = () => {
      t("update:modelValue", ""), t("change", "");
    }, _ = () => {
      s.value.focus();
    }, w = () => {
      s.value.blur();
    };
    ee(
      () => e.modelValue,
      (o) => {
        a(o, "mounted");
      }
    );
    const u = le(`${I}ControlChange`, ""), a = (o, n) => {
      u && u(o, n);
    };
    return ne(() => {
      a(e.modelValue, "mounted");
    }), l({ blur: w, focus: _ }), (o, n) => (h(), b("div", {
      class: O({
        [E(I) + "-form-input"]: !0,
        "input-prepend": o.$slots.prepend,
        "input-append": o.$slots.append
      }),
      style: X({ width: o.width })
    }, [
      o.$slots.prepend ? (h(), b("div", Dt, [
        J(o.$slots, "prepend")
      ])) : R("", !0),
      $("input", ue({ autocomplete: "off" }, o.$attrs, {
        ref_key: "inputEl",
        ref: s,
        value: o.modelValue,
        type: m.value,
        class: {
          disabled: r.value,
          [E(I) + "-input-control"]: !0,
          "has-prefix": o.$slots.prefix || o.prefixIcon,
          [o.size]: o.size
        },
        disabled: r.value,
        onInput: v,
        onFocus: d,
        onBlur: f
      }), null, 16, Et),
      o.$slots.append ? (h(), b("div", Mt, [
        J(o.$slots, "append")
      ])) : R("", !0),
      o.$slots.prefix || o.prefixIcon ? (h(), b("span", Pt, [
        o.prefixIcon ? (h(), b("i", {
          key: 0,
          class: O([o.prefixIcon])
        }, null, 2)) : R("", !0),
        J(o.$slots, "prefix")
      ])) : R("", !0),
      $("span", Rt, [
        J(o.$slots, "suffix"),
        o.suffixIcon ? (h(), b("i", {
          key: 0,
          class: O([o.suffixIcon])
        }, null, 2)) : R("", !0),
        o.clear && o.modelValue ? (h(), b("i", {
          key: 1,
          class: "icon-close",
          onClick: ie(k, ["stop"])
        }, null, 8, zt)) : R("", !0),
        o.modelValue && o.showEye && o.type === "password" ? (h(), b("i", {
          key: 2,
          class: O({ "icon-eye-close": c.value, "icon-eye": !c.value }),
          onClick: n[0] || (n[0] = ie((p) => c.value = !c.value, ["stop"]))
        }, null, 2)) : R("", !0)
      ])
    ], 6));
  }
}), Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Input: Ke
}, Symbol.toStringTag, { value: "Module" })), jt = /* @__PURE__ */ $("span", { class: "radio-inner" }, null, -1), Ht = {
  key: 0,
  class: "radio-text"
}, Ft = ["innerHTML"], Ge = /* @__PURE__ */ Y({
  __name: "Radio",
  props: {
    disabled: { type: Boolean, default: !1 },
    value: { type: [String, Boolean, Number] },
    modelValue: { type: [String, Boolean, Number] },
    label: {}
  },
  emits: ["update:modelValue", "change"],
  setup(i, { emit: l }) {
    const t = i, e = W(() => we(t.disabled)), s = W(() => {
      let m;
      return t.value ? m = t.value === t.modelValue : m = !!t.modelValue, m;
    }), c = le(`${I}ControlChange`, ""), r = () => {
      if (e.value)
        return;
      const m = t.value || !0;
      l("change", m), l("update:modelValue", m), c && c(m, "change");
    };
    return ee(
      () => t.modelValue,
      (m) => {
        c && c(m, "mounted");
      }
    ), ne(() => {
      c && c(t.modelValue, "mounted");
    }), (m, f) => (h(), b("label", {
      class: O({
        disabled: e.value,
        checked: s.value,
        [E(I) + "-radio"]: !0
      }),
      onClick: r
    }, [
      $("span", null, [
        jt,
        m.$slots.default ? (h(), b("span", Ht, [
          J(m.$slots, "default")
        ])) : R("", !0),
        m.label ? (h(), b("span", {
          key: 1,
          class: "radio-text",
          innerHTML: m.label
        }, null, 8, Ft)) : R("", !0)
      ])
    ], 2));
  }
}), gt = /* @__PURE__ */ Y({
  __name: "RadioGroup",
  props: {
    modelValue: {},
    options: {},
    optionsKey: { default: () => ({ label: "label", value: "value" }) },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(i, { emit: l }) {
    const e = j(i.modelValue), s = (c, r) => {
      l("update:modelValue", c), l("change", c, r);
    };
    return (c, r) => (h(), b("div", {
      class: O(`${E(I)}-radio-group`)
    }, [
      (h(!0), b(Q, null, oe(c.options, (m, f) => (h(), Z(Ge, {
        key: f,
        modelValue: e.value,
        "onUpdate:modelValue": r[0] || (r[0] = (d) => e.value = d),
        value: m[c.optionsKey.value],
        disabled: c.disabled || m.disabled,
        onChange: (d) => s(d, m)
      }, {
        default: te(() => [
          fe(G(m[c.optionsKey.label]), 1)
        ]),
        _: 2
      }, 1032, ["modelValue", "value", "disabled", "onChange"]))), 128))
    ], 2));
  }
}), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Radio: Ge,
  RadioGroup: gt
}, Symbol.toStringTag, { value: "Module" })), Ut = {
  key: 0,
  class: "checkbox-text"
}, Yt = ["textContent"], Ve = /* @__PURE__ */ Y({
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
    const t = i, e = W(() => we(t.disabled)), s = W(() => {
      let f;
      return t.value ? typeof t.modelValue == "object" ? f = t.modelValue.indexOf(t.value) !== -1 : f = t.value === t.modelValue : f = !!t.modelValue, f;
    }), c = le(`${I}ControlChange`, ""), r = () => {
      if (t.beforeChange && !t.beforeChange() || e.value)
        return;
      let f;
      s.value ? typeof t.modelValue == "object" ? f = t.modelValue.filter((d) => d !== t.value) : f = !1 : t.value ? typeof t.modelValue == "object" ? (f = t.modelValue, f.push(t.value)) : f = t.value : f = !t.modelValue, l("change", f), l("update:modelValue", f), m(f, "change");
    };
    ee(
      () => t.modelValue,
      (f) => {
        c && c(t.modelValue, "mounted"), m(f, "mounted");
      }
    ), ne(() => {
      m(t.modelValue, "mounted");
    });
    const m = (f, d) => {
      c && c(f, d);
    };
    return (f, d) => (h(), b("label", {
      class: O({
        [E(I) + "-checkbox"]: !0,
        checked: s.value,
        disabled: e.value
      }),
      onClick: r
    }, [
      $("span", null, [
        $("span", {
          class: O(["checkbox-inner icon-check", { checked: s.value }])
        }, null, 2),
        f.$slots.default ? (h(), b("span", Ut, [
          J(f.$slots, "default")
        ])) : (h(), b("span", {
          key: 1,
          class: "checkbox-text",
          textContent: G(f.label)
        }, null, 8, Yt))
      ])
    ], 2));
  }
}), mt = /* @__PURE__ */ Y({
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
    const e = i, s = j(e.modelValue);
    ee(
      () => e.modelValue,
      (_) => {
        s.value = _;
      }
    );
    const { optionsKey: c } = xe(e), r = c.value.value, m = j({}), f = (_) => {
      const w = _.length;
      m.value = {}, w >= e.max && e.max > 0 ? e.options.forEach((u, a) => {
        _.indexOf(u[r]) === -1 && (m.value[a] = !0);
      }) : w <= e.min && e.min > 0 ? e.options.forEach((u, a) => {
        _.indexOf(u[r]) !== -1 && (m.value[a] = !0);
      }) : (e.min > 0 || e.max > 0) && e.options.forEach((u, a) => {
        m.value[a] = !1;
      });
    }, d = (_, w) => {
      f(_), t("update:modelValue", _), t("change", _, w);
    };
    return l({ toggleSelect: (_) => {
      const w = e.modelValue;
      m.value = {}, e.options && e.options.forEach((a, o) => {
        const n = a[r];
        if (_)
          (!a.disabled || e.modelValue.includes(n)) && (e.max > 0 ? w.length < e.max ? u(n) : m.value[o] = !0 : u(n));
        else if (!a.disabled) {
          const p = e.modelValue.indexOf(n);
          p !== -1 && (e.min > 0 ? w.length > e.min ? w.splice(p, 1) : m.value[o] = !0 : w.splice(p, 1));
        }
      });
      function u(a) {
        w.includes(a) || w.push(a);
      }
      t("update:modelValue", w);
    }, getValue: () => e.options.filter((_) => e.modelValue.indexOf(_[r]) !== -1) }), (_, w) => (h(), b("div", {
      class: O(`${E(I)}-checkbox-group`)
    }, [
      (h(!0), b(Q, null, oe(_.options, (u, a) => (h(), Z(Ve, {
        key: a,
        modelValue: s.value,
        "onUpdate:modelValue": w[0] || (w[0] = (o) => s.value = o),
        value: u[E(c).value],
        label: u[E(c).label] || u[E(c).value],
        disabled: _.disabled || m.value[a] || u.disabled,
        class: O(u.class),
        "before-change": _.beforeChange,
        onChange: (o) => d(o, u)
      }, null, 8, ["modelValue", "value", "label", "disabled", "class", "before-change", "onChange"]))), 128))
    ], 2));
  }
}), Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Checkbox: Ve,
  CheckboxGroup: mt
}, Symbol.toStringTag, { value: "Module" })), Pe = /* @__PURE__ */ Y({
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
    const t = j(!0), e = () => {
      t.value = !1, l("close");
    }, s = () => {
      l("click");
    };
    return (c, r) => se((h(), b("span", {
      class: O({
        [`${E(I)}-tag`]: !0,
        ["tag-" + c.type]: c.type,
        ["tag-" + c.size]: c.size
      }),
      style: X({ background: c.bgColor, borderColor: c.borderColor, color: c.color }),
      onClick: s
    }, [
      J(c.$slots, "default"),
      c.closable ? (h(), b("i", {
        key: 0,
        class: "icon-close",
        onClick: e
      })) : R("", !0)
    ], 6)), [
      [pe, t.value]
    ]);
  }
}), We = () => document.documentElement.scrollTop || document.body.scrollTop, Be = (i) => {
  const l = i.getBoundingClientRect(), t = l.top + (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0), e = l.left + (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0), s = i.offsetWidth, c = i.offsetHeight;
  return { left: e, top: t, width: s, height: c };
}, Le = () => {
  const i = document.documentElement.clientWidth || document.body.clientWidth, l = document.documentElement.clientHeight || document.body.clientHeight;
  return { width: i, height: l };
}, ht = (i) => {
  const l = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight), t = document.createElement("div");
  t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t);
  const e = t.offsetWidth - t.clientWidth;
  return document.body.removeChild(t), i ? { hasScroll: l, width: e } : e;
}, vt = (i, l = "") => !!i.className.match(new RegExp("(\\s|^)" + l + "(\\s|$)")), lt = (i, l = "") => {
  vt(i, l) || (i.className ? i.className += " " + l : i.className += l);
}, Ne = (i, l = "") => {
  vt(i, l) && (i.className = i.className.replace(
    new RegExp("(\\s|^)" + l + "(\\s|$)"),
    ""
  ));
}, Gt = ["readonly", "placeholder", "disabled"], Jt = ["readonly", "placeholder", "disabled"], Zt = ["placeholder"], Xt = { key: 0 }, Qt = ["textContent"], qt = { key: 1 }, el = ["textContent"], tl = ["onClick"], ll = {
  key: 2,
  class: "input"
}, ol = ["disabled", "placeholder", "onKeyup"], nl = ["readonly", "placeholder", "disabled", "onKeyup"], al = { class: "group-icon" }, Ie = /* @__PURE__ */ Y({
  __name: "SelectDown",
  props: {
    modelValue: { default: () => [] },
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
    const e = i, s = j(), c = j(), r = re({
      valueLabel: [],
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
    }), m = (S) => {
      const L = e.modelValue[S];
      return typeof L == "object" ? !L.disabled : !0;
    }, f = W(() => {
      let S = 0;
      for (let L = 0; L < e.modelValue.length; L++) {
        const z = e.modelValue[L];
        if (!(typeof z == "object" && z.disabled)) {
          S = L;
          break;
        }
      }
      return S;
    }), d = ee(
      () => e.modelValue,
      (S) => {
        if (r.valueLabel = [], S != null && S.length)
          for (const L in S) {
            let z = S[L];
            typeof z == "object" && (z = z.label), r.valueLabel.push(z);
          }
      },
      {
        deep: !0,
        immediate: !0
      }
    ), v = W(() => we(e.disabled)), k = W(() => {
      const S = [`${I}-input-control`];
      return e.size && S.push(e.size), v.value && S.push("disabled"), S.join(" ");
    }), _ = (S) => {
      v.value || (r.visible = !0, me(() => {
        x(S), M();
      }), t("toggleClick", r.visible, S), r.stopPropagation = !0, setTimeout(() => {
        r.stopPropagation = !1;
      }, 50));
    }, w = (S) => {
      r.visible && !e.filterable && (o(S), S.stopPropagation());
    }, u = (S) => {
      r.valueLabel.splice(S, 1);
      const L = e.modelValue;
      L.splice(S, 1), n(L), t("delete", S);
    }, a = (S) => {
      const L = e.modelValue.filter((z) => typeof z == "object" && z.disabled);
      n(L), t("clear"), S.stopPropagation();
    }, o = (S) => {
      if (r.visible && !r.stopPropagation) {
        if (S && t("toggleClick", !1, S), r.visible = !1, r.searchValueM = "", !e.multiple && e.filterable) {
          const L = e.modelValue[0];
          r.valueLabel[0] = typeof L == "object" ? L.label : L;
        }
        if (e.filterable && e.isRange) {
          const L = e.modelValue[1];
          r.valueLabel[1] = typeof L == "object" ? L.label : L;
        }
      }
    }, n = (S) => {
      t("update:modelValue", S);
    }, p = (S, L, z) => {
      if (e.filterable) {
        const { value: K } = S.target;
        t(L, K, z);
      }
    }, g = (S, L) => {
      p(S, "input", L);
    }, C = (S, L) => {
      p(S, "blur", L);
    }, V = (S, L) => {
      p(S, "focus", L);
    }, A = (S) => {
      const { value: L } = S.target;
      t("keyupEnter", L);
    }, M = () => {
      const S = Be(s.value);
      if (e.appendToBody) {
        const L = Le();
        r.appendStyle = {
          bottom: "auto",
          minWidth: S.width + "px",
          left: S.left + "px",
          top: S.top + S.height + 8 + "px"
        }, r.direction2 === 2 && (r.appendStyle.top = "auto", r.appendStyle.bottom = L.height - S.top + "px");
      } else
        r.appendStyle.top = S.height + 8 + "px", r.appendStyle.bottom = "auto", r.direction2 === 2 && (r.appendStyle.top = "auto", r.appendStyle.bottom = S.height + 8 + "px");
    }, x = (S) => {
      if (e.direction === 0) {
        r.direction2 = e.direction;
        const L = document.documentElement.clientHeight || document.body.clientHeight, z = S.clientY, K = e.downHeight || c.value.offsetHeight || 0;
        K > L - z && z > K && (r.direction2 = 2);
      }
    }, y = W(() => e.downHeight ? {
      "max-height": e.downHeight + "px",
      "overflow-y": "auto"
    } : {}), B = W(() => Object.assign({}, r.appendStyle, e.downStyle || {}));
    return ne(() => {
      me(() => {
        document.addEventListener("click", o), e.appendToBody && document.body.appendChild(c.value);
      });
    }), be(() => {
      document.removeEventListener("click", o), e.appendToBody && c.value && document.body.removeChild(c.value), d();
    }), l({ slideUp: o }), (S, L) => (h(), b("div", {
      ref_key: "el",
      ref: s,
      class: O({
        "is-down": r.visible,
        [E(I) + "-select-down"]: !0,
        disabled: v.value
      }),
      style: X({ width: S.width }),
      onClick: _
    }, [
      $("div", {
        class: "select-control",
        onClick: w
      }, [
        S.isRange ? (h(), b("div", {
          key: 0,
          class: O(["select-range", k.value])
        }, [
          se($("input", {
            "onUpdate:modelValue": L[0] || (L[0] = (z) => r.valueLabel[0] = z),
            readonly: !S.filterable,
            placeholder: S.placeholder,
            disabled: v.value,
            onInput: L[1] || (L[1] = (z) => g(z, 0)),
            onFocus: L[2] || (L[2] = (z) => V(z, 0)),
            onBlur: L[3] || (L[3] = (z) => C(z, 0))
          }, null, 40, Gt), [
            [_e, r.valueLabel[0]]
          ]),
          $("span", null, G(S.rangeSeparator), 1),
          se($("input", {
            "onUpdate:modelValue": L[4] || (L[4] = (z) => r.valueLabel[1] = z),
            readonly: !S.filterable,
            placeholder: S.endPlaceholder,
            disabled: v.value,
            onInput: L[5] || (L[5] = (z) => g(z, 1)),
            onFocus: L[6] || (L[6] = (z) => V(z, 1)),
            onBlur: L[7] || (L[7] = (z) => C(z, 1))
          }, null, 40, Jt), [
            [_e, r.valueLabel[1]]
          ])
        ], 2)) : S.multiple ? (h(), b("div", {
          key: 1,
          class: O([k.value, "multiple-text"])
        }, [
          $("ul", { placeholder: S.placeholder }, [
            S.collapseTags ? (h(), b(Q, { key: 0 }, [
              r.valueLabel.length > 0 ? (h(), b("li", Xt, [
                $("span", {
                  textContent: G(r.valueLabel[f.value]),
                  class: O({ disabled: !m(f.value) })
                }, null, 10, Qt),
                m(f.value) ? (h(), b("i", {
                  key: 0,
                  class: "icon-error",
                  onClick: L[8] || (L[8] = ie((z) => u(f.value), ["stop"]))
                })) : R("", !0)
              ])) : R("", !0),
              r.valueLabel.length > 1 ? (h(), b("li", qt, [
                ce(Pe, {
                  size: "mini",
                  type: "info"
                }, {
                  default: te(() => [
                    fe(" +" + G(r.valueLabel.length), 1)
                  ]),
                  _: 1
                })
              ])) : R("", !0)
            ], 64)) : (h(!0), b(Q, { key: 1 }, oe(r.valueLabel, (z, K) => (h(), b("li", { key: K }, [
              $("span", {
                textContent: G(z),
                class: O({ disabled: !m(K) })
              }, null, 10, el),
              m(K) ? (h(), b("i", {
                key: 0,
                class: "icon-error",
                onClick: ie((P) => u(K), ["stop"])
              }, null, 8, tl)) : R("", !0)
            ]))), 128)),
            S.filterable ? (h(), b("li", ll, [
              se($("input", {
                "onUpdate:modelValue": L[9] || (L[9] = (z) => r.searchValueM = z),
                type: "text",
                disabled: v.value,
                placeholder: r.valueLabel.length === 0 ? S.placeholder : "",
                onInput: g,
                onFocus: V,
                onBlur: C,
                onKeyup: qe(A, ["enter"])
              }, null, 40, ol), [
                [_e, r.searchValueM]
              ])
            ])) : R("", !0)
          ], 8, Zt)
        ], 2)) : se((h(), b("input", {
          key: 2,
          "onUpdate:modelValue": L[10] || (L[10] = (z) => r.valueLabel[0] = z),
          readonly: !S.filterable,
          placeholder: S.placeholder,
          class: O(k.value),
          disabled: v.value,
          onInput: g,
          onFocus: V,
          onBlur: C,
          onKeyup: qe(A, ["enter"])
        }, null, 42, nl)), [
          [_e, r.valueLabel[0]]
        ]),
        $("span", al, [
          S.clear && S.modelValue.length > 0 ? (h(), b("i", {
            key: 0,
            class: "icon-close",
            title: "清空",
            onClick: a
          })) : R("", !0),
          $("i", {
            class: O({ down: r.visible && !S.fixedIcon, [`icon-${S.icon}`]: !0 })
          }, null, 2)
        ])
      ]),
      ce(ke, {
        name: r.direction2 === 2 ? "slide-toggle-top" : "slide-toggle"
      }, {
        default: te(() => [
          se($("div", {
            ref_key: "selectDown",
            ref: c,
            class: O({
              [E(I) + "-select-down-pane"]: !0,
              [S.downClass]: S.downClass,
              top: r.direction2 === 2
            }),
            style: X(B.value),
            onClick: L[11] || (L[11] = ie(() => {
            }, ["stop"]))
          }, [
            $("div", {
              style: X(y.value),
              class: "scroll-pane"
            }, [
              J(S.$slots, "default")
            ], 4),
            $("span", {
              class: O(["down-arrow", { "is-range": S.isRange }])
            }, null, 2)
          ], 6), [
            [pe, r.visible]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 6));
  }
}), sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SelectDown: Ie
}, Symbol.toStringTag, { value: "Module" })), il = { class: "calendar-head" }, rl = /* @__PURE__ */ Y({
  __name: "ControlHead",
  props: {
    activePanel: {},
    value: {},
    type: {},
    position: { default: "left" }
  },
  emits: ["change"],
  setup(i, { emit: l }) {
    const t = i, e = W(() => t.value.getFullYear()), s = W(() => t.value.getMonth()), c = (d) => {
      let v = 1;
      t.activePanel === "year" && (v = 10), d === 0 && (v = -v);
      const k = new Date(t.value.setFullYear(e.value + v));
      l("change", k);
    }, r = (d) => {
      let v = 1;
      d === 0 && (v = -v);
      const k = new Date(t.value.setMonth(s.value + v));
      l("change", k);
    }, m = (d) => {
      l("change", d);
    }, f = (d) => !(t.type.includes("Range") && (t.position === "left" && d || t.position === "right" && !d));
    return (d, v) => (h(), b("div", il, [
      f(0) ? (h(), b("a", {
        key: 0,
        class: "calendar-prev-year",
        onClick: v[0] || (v[0] = (k) => c(0))
      }, "«")) : R("", !0),
      d.activePanel === "day" ? (h(), b("a", {
        key: 1,
        class: "calendar-prev-month",
        onClick: v[1] || (v[1] = (k) => r(0))
      }, "‹")) : R("", !0),
      $("span", null, [
        $("a", {
          class: "calendar-year-select",
          onClick: v[2] || (v[2] = (k) => m("year"))
        }, G(d.activePanel === "year" ? `${e.value - 2}年－${e.value + 8}年` : `${e.value}年`), 1),
        d.activePanel === "day" ? (h(), b("a", {
          key: 0,
          class: "calendar-year-month",
          onClick: v[3] || (v[3] = (k) => m("month"))
        }, G(s.value + 1) + "月", 1)) : R("", !0)
      ]),
      d.activePanel === "day" ? (h(), b("a", {
        key: 2,
        class: "calendar-next-month",
        onClick: v[4] || (v[4] = (k) => r(1))
      }, "›")) : R("", !0),
      f(0) ? (h(), b("a", {
        key: 3,
        class: "calendar-next-year",
        onClick: v[5] || (v[5] = (k) => c(1))
      }, "»")) : R("", !0)
    ]));
  }
}), ul = ["onClick"], cl = /* @__PURE__ */ Y({
  __name: "YearMonth",
  props: {
    value: {},
    defaultDate: {},
    disabledDate: {},
    pane: { default: "year" }
  },
  emits: ["update:modelValue", "click"],
  setup(i, { emit: l }) {
    const t = i, e = j(t.defaultDate);
    ee(
      () => t.defaultDate,
      () => {
        e.value = t.defaultDate;
      }
    );
    const s = W(() => {
      let f = [];
      if (t.pane === "year") {
        const d = t.value.getFullYear();
        for (let v = d - 4; v <= d + 7; v++)
          f.push(v.toString());
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
    }), c = (f) => t.disabledDate && t.disabledDate(f, t.pane), r = (f, d) => {
      let v = new Date(f);
      const k = new Date(e.value);
      let _ = f === k.getFullYear().toString();
      const w = /* @__PURE__ */ new Date();
      let u = v.getFullYear() === w.getFullYear();
      if (t.pane === "month") {
        v = new Date(t.value.getFullYear(), d), t.value.getFullYear() === k.getFullYear() && (_ = d === k.getMonth());
        const a = t.value.getFullYear();
        u = w.getFullYear().toString() + w.getMonth() === a.toString() + d;
      }
      return {
        "calendar-date-today": u,
        // 当年或当前月
        "calendar-date-select": _,
        "calendar-date-disabled": c(v)
        // 不能选择的
      };
    }, m = (f, d) => {
      let v = new Date(parseInt(f), t.value.getMonth());
      t.pane === "month" && (v = new Date(t.value.getFullYear(), d)), c(v) || (e.value = v.getTime(), l("click", v));
    };
    return (f, d) => (h(), b("div", {
      class: O({
        "calendar-year": f.pane === "year",
        "calendar-months": f.pane === "month"
      })
    }, [
      (h(!0), b(Q, null, oe(s.value, (v, k) => (h(), b("a", {
        key: v,
        class: O(r(v, k)),
        onClick: (_) => m(v, k)
      }, G(v), 11, ul))), 128))
    ], 2));
  }
}), dl = { class: "calendar-days" }, fl = /* @__PURE__ */ $("div", { class: "calendar-week" }, [
  /* @__PURE__ */ $("a", null, "日"),
  /* @__PURE__ */ $("a", null, "一"),
  /* @__PURE__ */ $("a", null, "二"),
  /* @__PURE__ */ $("a", null, "三"),
  /* @__PURE__ */ $("a", null, "四"),
  /* @__PURE__ */ $("a", null, "五"),
  /* @__PURE__ */ $("a", null, "六")
], -1), pl = { class: "calendar-list" }, gl = ["onClick"], ml = ["textContent"], hl = {
  key: 0,
  class: "calendar-time"
}, vl = { class: "calendar-time-input" }, yl = /* @__PURE__ */ Y({
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
    ee(
      () => t.value,
      () => {
        m(t.value), t.defaultDate !== -1 && (c.value = t.defaultDate);
      }
    );
    const e = j([]), s = j({ hours: "", minutes: "", seconds: "" }), c = j(t.defaultDate), r = (u) => `${u}`.padStart(2, "0"), m = (u) => {
      const a = [], o = u.getFullYear(), n = u.getMonth(), p = new Date(o, n, 1);
      p.setDate(0);
      let g = p.getDate(), V = p.getDay() + 1;
      for (; V > 0; )
        a.push({
          d: g - V + 1,
          y: n > 0 ? o : o - 1,
          // 0为1月，即上一年
          m: n > 0 ? n - 1 : 11,
          p: !0
        }), V--;
      p.setMonth(p.getMonth() + 2, 0), g = p.getDate();
      for (let A = 1; A <= g; A++)
        a.push({
          d: A,
          y: o,
          m: n
        });
      for (let A = 1; a.length < 42; A++)
        a.push({
          d: A,
          y: n < 11 ? o : o + 1,
          m: n < 11 ? n + 1 : 0,
          n: !0
        });
      e.value = a, s.value = {
        hours: r(u.getHours()),
        minutes: r(u.getMinutes()),
        seconds: r(u.getSeconds())
      };
    };
    m(t.value);
    const f = (u) => t.disabledDate && t.disabledDate(u, "day"), d = (u) => {
      const a = new Date(u.y, u.m, u.d), o = new Date(c.value).toDateString();
      return {
        "calendar-date-out": u.p || u.n,
        // 非当前月
        "calendar-date-today": a.toDateString() === (/* @__PURE__ */ new Date()).toDateString(),
        // 今天的
        "calendar-date-select": a.toDateString() === o,
        // 选中的
        "calendar-date-disabled": f(a)
        // 不能选择的
      };
    }, v = (u) => {
      const a = new Date(
        u.y,
        u.m,
        u.d,
        parseInt(s.value.hours, 10),
        parseInt(s.value.minutes, 10),
        parseInt(s.value.seconds, 10)
      );
      f(a) || (c.value = a.getTime(), t.type === "datetime" || l("click", { date: a }));
    }, k = (u) => {
      const a = new Date(u.y, u.m, u.d);
      return t.innerText && t.innerText(a);
    }, _ = () => {
      let u = t.value;
      c.value !== -1 && (u = new Date(c.value)), l("click", { date: u, type: "confirm" });
    }, w = (u, a) => {
      const { value: o } = u.target;
      let n = t.value;
      c.value !== -1 && (n = new Date(c.value));
      const p = parseInt(o, 10);
      a === "hours" && p < 24 && n.setHours(p), a === "minutes" && p < 59 && n.setMinutes(p), a === "seconds" && p < 59 && n.setSeconds(p), c.value = n.getTime(), l("click", { date: n });
    };
    return (u, a) => (h(), b("div", dl, [
      fl,
      $("div", pl, [
        (h(!0), b(Q, null, oe(e.value, (o, n) => (h(), b("a", {
          key: n,
          class: O([d(o)]),
          onClick: (p) => v(o)
        }, [
          $("span", null, [
            fe(G(o.d) + " ", 1),
            k(o) ? (h(), b("i", {
              key: 0,
              textContent: G(k(o))
            }, null, 8, ml)) : R("", !0)
          ])
        ], 10, gl))), 128))
      ]),
      u.type === "datetime" || u.type === "datetimeRange" ? (h(), b("div", hl, [
        $("div", vl, [
          se($("input", {
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
          fe(": "),
          se($("input", {
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
          fe(": "),
          se($("input", {
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
        t.type === "datetime" || t.type === "datetimeRange" && t.index === 1 ? (h(), b("a", {
          key: 0,
          class: "btn-time",
          onClick: _
        }, "确定")) : R("", !0)
      ])) : R("", !0)
    ]));
  }
}), bl = { class: "calendar-body" }, yt = /* @__PURE__ */ Y({
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
    const t = i, e = j(), s = j(), c = j([]), r = t.type.includes("Range"), m = j([]), f = j("day"), d = j([]), v = le(`${I}ControlChange`, ""), k = (y) => `${y}`.padStart(2, "0"), _ = W(() => {
      let y = "";
      if (t.format)
        y = t.format;
      else
        switch (t.type) {
          case "year":
            y = "y";
            break;
          case "month":
          case "monthRange":
            y = "y-MM";
            break;
          case "date":
          case "dateRange":
            y = "y-MM-dd";
            break;
          case "datetime":
          case "datetimeRange":
            y = "y-MM-dd hh:mm:ss";
            break;
        }
      return y;
    }), w = () => {
      t.type === "year" || t.type === "month" ? f.value = t.type : t.type === "monthRange" ? f.value = "month" : f.value = "day";
    }, u = (y, B) => {
      if (B === "timestamp")
        return y.getTime().toString();
      const S = y.getMonth() + 1, L = y.getDate(), z = y.getHours(), K = y.getMinutes(), P = y.getSeconds(), H = {
        y: y.getFullYear(),
        M: S,
        MM: k(S),
        d: L,
        dd: k(L),
        h: z,
        hh: k(z),
        m: K,
        mm: k(K),
        s: P,
        ss: k(P),
        w: y.getDay()
      };
      return B.replace(/(y|MM|M|dd|d|hh|h|mm|m|ss|s|w)/g, (T) => {
        const N = H[T];
        return T === "w" ? ["日", "一", "二", "三", "四", "五", "六"][N] : N;
      });
    }, a = (y) => {
      const B = new Date(y);
      if (B.toString() !== "Invalid Date")
        return B;
      if (!/[^\d]/g.test(y)) {
        const L = new Date(parseInt(y, 10));
        if (L.toString() !== "Invalid Date")
          return L;
      }
      const S = new Date(y == null ? void 0 : y.replace(/['年'|'月']/g, "-").replace("日", ""));
      return S.toString() !== "Invalid Date" ? S : (console.warn("无效时间:" + y), !1);
    }, o = (y) => {
      const B = y || t.modelValue;
      let S = /* @__PURE__ */ new Date(), L = new Date(
        (/* @__PURE__ */ new Date()).setMonth(S.getMonth() + 1)
      );
      if (t.type === "monthRange" && (L = new Date(
        (/* @__PURE__ */ new Date()).setFullYear(S.getFullYear() + 1)
      )), m.value = [], c.value = [], r) {
        if (typeof B == "object" && (B == null ? void 0 : B.length) === 2) {
          const z = a(B[0]), K = a(B[1]);
          if (z && K) {
            S = z, L = K;
            const P = u(z, _.value), H = u(K, _.value);
            c.value = [P, H], m.value = [z.getTime(), K.getTime()];
          }
        }
        s.value = [S, L];
      } else {
        if (typeof B == "string" && B) {
          const z = a(B);
          if (z) {
            S = z;
            const K = u(z, _.value);
            c.value = [K], m.value = [z.getTime()];
          }
        }
        s.value = [S];
      }
    };
    ee(
      () => t.modelValue,
      () => {
        o();
      }
    ), ne(() => {
      w(), o();
    });
    const n = (y) => {
      y.length === 2 ? y[0] > y[1] ? V([y[1], y[0]]) : V([y[0], y[1]]) : y.length;
    }, p = (y, B) => {
      if (r)
        if (t.type === "datetimeRange")
          if (y.type === "confirm") {
            let S = /* @__PURE__ */ new Date();
            d.value.length !== 0 && (S = d.value[d.value.length - 1]), n([S, y.date]);
          } else
            B === 0 && d.value.push(y.date);
        else
          d.value.push(y.date), n(d.value);
      else
        V([y.date]);
    }, g = (y, B) => {
      typeof B == "string" && !r ? f.value = B : typeof B == "object" && (r ? y === 0 ? s.value[0] = B : y === 1 && (s.value[1] = B) : s.value = [B]);
    }, C = (y) => {
      y || (w(), o()), d.value = [];
    }, V = (y) => {
      let B = [], S = "";
      if (s.value = y, r) {
        if ((y == null ? void 0 : y.length) === 2) {
          const L = u(y[0], _.value), z = u(y[1], _.value);
          if (B = [L, z], S = [L, z], t.valueFormat) {
            const K = u(y[0], t.valueFormat), P = u(y[1], t.valueFormat);
            S = [K, P];
          }
        }
      } else
        (y == null ? void 0 : y.length) === 1 && (S = u(y[0], _.value), B = [S], t.valueFormat && (S = u(y[0], t.valueFormat)));
      c.value = B, l("update:modelValue", S), l("change", S, r ? y : y[0] || ""), v && v(S), e.value.slideUp();
    }, A = (y, B) => {
      if (t.readonly || !y)
        return;
      const S = a(y);
      S && V(r ? B === 1 ? [s.value[0], S] : [S, s.value[1]] : [S]);
    }, M = () => {
      t.clear && V([]);
    }, x = (y, B) => {
      if (t.type === f.value)
        V([B]);
      else if (t.type === "monthRange")
        d.value.push(B), n(d.value);
      else {
        let S = "";
        f.value === "year" && (S = "month"), f.value === "month" && (S = "day"), S && (f.value = S), s.value[y] = B;
      }
    };
    return (y, B) => (h(), Z(E(Ie), {
      ref_key: "selectDown",
      ref: e,
      placeholder: y.placeholder,
      endPlaceholder: y.endPlaceholder,
      size: y.size,
      disabled: y.disabled,
      width: y.width,
      clear: y.clear,
      "append-to-body": y.appendToBody,
      filterable: !y.readonly,
      direction: y.direction,
      "down-class": y.downClass,
      "down-style": y.downStyle,
      icon: "date",
      fixedIcon: !0,
      "model-value": c.value,
      rangeSeparator: y.rangeSeparator,
      isRange: E(r),
      onClear: M,
      onBlur: A,
      onToggleClick: C
    }, {
      default: te(() => [
        $("div", {
          class: O({ [`${E(I)}-date-picker`]: !0 }),
          onClick: B[0] || (B[0] = ie(() => {
          }, ["stop"]))
        }, [
          (h(!0), b(Q, null, oe(s.value, (S, L) => (h(), b("div", {
            key: L,
            class: "calendar"
          }, [
            ce(rl, {
              type: y.type,
              activePanel: f.value,
              value: S,
              position: L === 0 ? "left" : "right",
              onChange: (z) => g(L, z)
            }, null, 8, ["type", "activePanel", "value", "position", "onChange"]),
            $("div", bl, [
              f.value === "day" ? (h(), Z(yl, {
                key: 0,
                value: S,
                "default-date": m.value[L] || -1,
                pane: f.value,
                onClick: (z) => p(z, L),
                type: y.type,
                index: L,
                disabledDate: y.disabledDate,
                innerText: y.innerText
              }, null, 8, ["value", "default-date", "pane", "onClick", "type", "index", "disabledDate", "innerText"])) : (h(), Z(cl, {
                key: 1,
                value: S,
                "default-date": m.value[L] || -1,
                pane: f.value,
                disabledDate: y.disabledDate,
                onClick: (z) => x(L, z)
              }, null, 8, ["value", "default-date", "pane", "disabledDate", "onClick"]))
            ])
          ]))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["placeholder", "endPlaceholder", "size", "disabled", "width", "clear", "append-to-body", "filterable", "direction", "down-class", "down-style", "model-value", "rangeSeparator", "isRange"]));
  }
}), kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DatePicker: yt
}, Symbol.toStringTag, { value: "Module" })), wl = ["title", "onClick", "innerHTML"], Cl = {
  key: 0,
  class: "select-empty-options"
}, Je = /* @__PURE__ */ Y({
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
    const e = i, s = j(), c = re({
      checked: [],
      // 所有已选择的集合
      keywords: "",
      setFirst: !1,
      // 手动选择改变选项时，在watch时不触发setFirstText事件
      tempChecked: ""
    }), { optionsKey: r } = xe(e), m = r.value.label, f = r.value.value, d = j(
      JSON.parse(JSON.stringify(e.options))
    );
    ee(
      () => e.modelValue,
      () => {
        _();
      }
    ), ee(
      () => e.options,
      () => {
        d.value = JSON.parse(JSON.stringify(e.options)), _();
      }
    );
    const v = (x) => {
      if (!e.filterable)
        return;
      const y = d.value.filter((B) => B[m] === x && !B.disabled);
      if (y.length > 0) {
        let B = !1;
        c.checked.forEach((S) => {
          S[m] === y[0][m] && (B = !0);
        }), B || (c.checked.push(y[0]), g(y[0]));
      }
      c.keywords = "", setTimeout(() => {
        d.value.forEach((B) => {
          delete B._disabled;
        });
      }, 500), t("blur", x);
    }, k = (x) => {
      e.filterable && (c.keywords = x, e.async || d.value.forEach((y) => {
        y._disabled = y[m].indexOf(x) === -1;
      }), c.setFirst = !0, t("input", x));
    }, _ = () => {
      if (!c.setFirst && (c.setFirst = !1, e.modelValue && d.value && d.value.length > 0)) {
        c.checked = [], typeof e.modelValue == "object" ? e.modelValue.forEach((x) => {
          c.checked.push({
            [m]: x,
            [f]: x
          });
        }) : c.checked.push({
          [m]: e.modelValue,
          [f]: e.modelValue
        });
        for (let x = 0; x < d.value.length; x++) {
          const y = d.value[x], B = u(y);
          if (e.multiple) {
            if (typeof e.modelValue == "object") {
              const S = e.modelValue.indexOf(B);
              S !== -1 && c.checked.splice(S, 1, y);
            }
          } else if (B === e.modelValue) {
            c.checked.splice(0, 1, y);
            break;
          }
        }
      }
    }, w = (x) => {
      const y = u(x);
      if (e.multiple) {
        if (typeof e.modelValue == "object")
          return e.modelValue.indexOf(y) !== -1;
      } else
        return y === e.modelValue;
    }, u = (x) => x[f] === void 0 ? x[m] : x[f], a = (x, y) => {
      if (!x.disabled) {
        if (e.beforeChange && !e.beforeChange(x)) {
          n(), y && y.stopPropagation();
          return;
        }
        const B = u(x);
        if (e.multiple) {
          if (e.multipleLimit && e.multipleLimit > 0 && e.multipleLimit <= c.checked.length)
            return t("limitChange", e.modelValue), !1;
          let S = -1;
          c.checked.forEach((L, z) => {
            u(L) === B && (S = z);
          }), S !== -1 ? c.checked.splice(S, 1) : c.checked.push(x), g(x);
        } else
          c.checked = [x], n(), g(x);
      }
      y && y.stopPropagation();
    }, o = (x) => {
      if (e.multiple && typeof e.modelValue == "object")
        if (x)
          c.tempChecked = JSON.stringify(e.modelValue);
        else {
          const y = JSON.parse(c.tempChecked);
          let B = !0;
          console.log(JSON.stringify(e.modelValue)), y.forEach((S) => {
            e.modelValue.indexOf(S) === -1 && (B = !1);
          }), B || t("delete", -1);
        }
      t("toggleClick", x);
    }, n = () => {
      s.value.slideUp();
    }, p = le(`${I}ControlChange`, ""), g = (x, y = !0) => {
      c.setFirst = y;
      let B = [];
      c.checked.forEach((S) => {
        B.push(u(S));
      }), e.multiple || (B = B[0] || ""), t("update:modelValue", B), p && p(B), t("change", B, x);
    }, C = (x) => {
      if (c.keywords && e.filterable) {
        const y = new RegExp(`${c.keywords}`, "gi");
        return x.replace(y, "<b>$&</b>");
      } else
        return x;
    }, V = () => {
      const x = d.value.filter((y) => y.disabled).map((y) => y[f]);
      c.checked = c.checked.filter(
        (y) => x.includes(y.value)
      ), g(), t("clear");
    }, A = (x) => {
      c.checked.splice(x, 1), g(), t("delete", x);
    };
    de(`${I}GetChildOption`, (x) => {
      d.value.push(x);
    });
    const M = (x) => {
      if (!e.allowCreate)
        return !1;
      const y = d.value.filter(
        (B) => B[m].includes(x)
      );
      if (y && y.length > 0)
        a(y[0], "");
      else {
        const B = {
          [m]: x,
          [f]: x
        };
        c.checked = [x], d.value.push(B), g(B);
      }
    };
    return ne(() => {
      _();
    }), l({ slideUp: n }), (x, y) => (h(), Z(E(Ie), ue(x.$props, {
      ref_key: "selectDownEl",
      ref: s,
      "before-change": "",
      options: "",
      optionskey: "",
      "model-value": c.checked,
      onClear: V,
      onDelete: A,
      onInput: k,
      onBlur: v,
      onToggleClick: o,
      onKeyupEnter: M
    }), {
      default: te(() => [
        $("ul", {
          class: O(`${E(I)}-select`)
        }, [
          (h(!0), b(Q, null, oe(d.value, (B, S) => se((h(), b("li", {
            key: S,
            class: O({
              disabled: B.disabled,
              active: w(B),
              [B.class]: B.class
            }),
            title: B[E(r).label],
            onClick: (L) => a(B, L),
            innerHTML: C(B[E(r).label])
          }, null, 10, wl)), [
            [pe, !B._disabled]
          ])), 128)),
          d.value.length === 0 ? (h(), b("p", Cl, G(x.emptyText), 1)) : R("", !0)
        ], 2),
        J(x.$slots, "default")
      ]),
      _: 3
    }, 16, ["model-value"]));
  }
}), _l = Y({
  props: {
    value: String,
    label: String,
    disabled: Boolean,
    className: String
  },
  setup(i) {
    const l = le(`${I}GetChildOption`, "");
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
}), Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Option: _l,
  Select: Je
}, Symbol.toStringTag, { value: "Module" })), Vl = { class: "switch-text" }, bt = /* @__PURE__ */ Y({
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
    const t = i, e = le(`${I}ControlChange`, ""), s = W(() => t.activeValue ? t.modelValue === t.activeValue : t.modelValue), c = W(() => {
      let d = {};
      return t.modelValue && t.activeColor && (d = {
        borderColor: t.activeColor,
        backgroundColor: t.activeColor
      }), !t.modelValue && t.closeColor && (d = {
        borderColor: t.closeColor,
        backgroundColor: t.closeColor
      }), d;
    }), r = W(() => we(t.disabled)), m = () => {
      if (!r.value) {
        if (t.beforeChange && !t.beforeChange())
          return;
        let d;
        s.value ? t.closeValue ? d = t.closeValue : d = !1 : t.activeValue ? d = t.activeValue : d = !0, l("update:modelValue", d), l("change", d), f(d);
      }
    }, f = (d, v) => {
      e && e(d, v);
    };
    return ee(
      () => t.modelValue,
      (d) => {
        f(d, "mounted");
      }
    ), ne(() => {
      f(t.modelValue, "mounted");
    }), (d, v) => (h(), b("span", {
      class: O({
        [E(I) + "-switch"]: !0,
        "switch-checked": s.value,
        disabled: r.value,
        [d.size]: d.size
      }),
      style: X(c.value),
      onClick: m
    }, [
      $("i", {
        class: O(`${E(I)}-switch-inner`)
      }, null, 2),
      $("span", Vl, [
        s.value ? J(d.$slots, "open", { key: 0 }) : J(d.$slots, "close", { key: 1 })
      ])
    ], 6));
  }
}), Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Switch: bt
}, Symbol.toStringTag, { value: "Module" })), $l = {};
function kt(i, l = 500) {
  let t;
  return function(...e) {
    t && clearTimeout(t), t = setTimeout(() => {
      i.apply(this, e);
    }, l);
  };
}
const Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  debounce: kt,
  default: $l
}, Symbol.toStringTag, { value: "Module" })), Il = ["value", "disabled", "maxlength"], Al = {
  key: 0,
  class: "input-count"
}, wt = /* @__PURE__ */ Y({
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
    const t = i, e = j(t.modelValue);
    ee(
      () => t.modelValue,
      (o) => {
        e.value = o;
      }
    );
    const s = j(2), c = j(), r = j(t.height), m = j(t.autoHeight ? "hidden" : ""), f = W(() => we(t.disabled)), d = W(() => ({
      width: t.width,
      height: r.value,
      minHeight: t.height,
      maxHeight: t.maxHeight,
      overflow: m.value
    })), v = kt(() => {
      if (t.autoHeight) {
        const o = c.value.scrollHeight + s.value;
        r.value = o + "px", o > parseInt(t.maxHeight || "") && (m.value = "auto");
      }
    }), k = () => {
      s.value = c.value.offsetHeight - c.value.clientHeight;
    }, _ = (o) => {
      const { value: n } = o.target;
      u(n), v();
    }, w = le(`${I}ControlChange`, ""), u = (o) => {
      l("update:modelValue", o), a(o);
    };
    ne(() => {
      k(), a(t.modelValue, "mounted");
    });
    const a = (o, n) => {
      w && w(o, n);
    };
    return ee(
      () => t.modelValue,
      (o) => {
        a(o, "mounted");
      }
    ), (o, n) => (h(), b("div", {
      class: O([`${E(I)}-textarea`])
    }, [
      $("textarea", ue({
        ref_key: "textareaEl",
        ref: c
      }, o.$attrs, {
        value: e.value,
        class: { [`${E(I)}-input-control`]: !0, disabled: f.value },
        style: d.value,
        disabled: f.value,
        maxlength: o.maxlength,
        onInput: _
      }), null, 16, Il),
      o.showWordLimit && o.maxlength ? (h(), b("span", Al, G(e.value.length) + "/" + G(o.maxlength), 1)) : R("", !0)
    ], 2));
  }
}), xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Textarea: wt
}, Symbol.toStringTag, { value: "Module" })), Ll = { class: "time-picker" }, Ol = ["onClick"], ot = /* @__PURE__ */ Y({
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
    }, c = (d) => `${d}`.padStart(2, "0"), r = (d, v) => {
      let k = !1;
      return t.disabledTime && (k = t.disabledTime(
        Object.assign({}, t.time, { a: d }),
        v
      ), s[v][d] = k), {
        active: t.time && t.time[v] === d,
        disabled: k
      };
    }, m = (d, v, k) => {
      typeof t.disabledTime == "function" && setTimeout(() => {
        const _ = s[v] || {};
        if (_[d]) {
          let w = 60;
          Object.keys(_).forEach((u) => {
            _[u] || parseInt(u) < w && (w = parseInt(u));
          }), w = w === 60 ? 0 : w, k[v] = w, v === "m" && m(k.s, "s", k), l("click", k);
        }
      }, 500);
    }, f = (d, v, k) => {
      const _ = JSON.parse(JSON.stringify(t.time)), { className: w } = k.target;
      if (w.indexOf("disabled") === -1) {
        switch (v) {
          case "h":
            _.h = d, m(_.m, "m", _);
            break;
          case "m":
            _.m = d, m(_.s, "s", _);
            break;
          case "s":
            _.s = d;
            break;
        }
        l("click", _);
      }
    };
    return (d, v) => (h(), b("div", Ll, [
      (h(), b(Q, null, oe(e, (k, _) => $("ul", { key: _ }, [
        (h(!0), b(Q, null, oe(k.max, (w) => (h(), b("li", {
          key: w,
          class: O(r(w - 1, k.type)),
          onClick: (u) => f(w - 1, k.type, u)
        }, G(c(w - 1)), 11, Ol))), 128))
      ])), 64))
    ]));
  }
}), Ct = /* @__PURE__ */ Y({
  __name: "TimePicker",
  props: {
    modelValue: {},
    disabledTime: {},
    filterable: { type: Boolean },
    isRange: { type: Boolean }
  },
  emits: ["update:modelValue", "blur", "clear"],
  setup(i, { emit: l }) {
    const t = i, e = j(), s = (o) => `${o}`.padStart(2, "0"), c = (o) => `${s(o.h)}:${s(o.m)}:${s(o.s)}`, r = (o) => {
      const n = o == null ? void 0 : o.split(":");
      return (n == null ? void 0 : n.length) === 3 ? {
        h: parseInt(n[0]) < 23 ? parseInt(n[0]) : 23,
        m: parseInt(n[1]) < 59 ? parseInt(n[1]) : 59,
        s: parseInt(n[2]) < 59 ? parseInt(n[2]) : 59
      } : o;
    }, m = le(`${I}ControlChange`, ""), f = W(() => {
      let o = [];
      return t.isRange ? t.modelValue && t.modelValue.length === 2 && (o = [r(t.modelValue[0]), r(t.modelValue[1])]) : t.modelValue && (o = [r(t.modelValue.toString())]), o;
    }), d = W(() => {
      let o = [];
      return t.isRange ? t.modelValue && t.modelValue.length === 2 && (o = [
        c(f.value[0]),
        c(f.value[1])
      ]) : t.modelValue && (o = [c(f.value[0])]), o;
    }), v = (o) => {
      const n = /* @__PURE__ */ new Date();
      return {
        h: o ? n.getHours() + 1 : n.getHours(),
        m: n.getMinutes(),
        s: n.getSeconds()
      };
    }, k = (o) => {
      o && (!t.modelValue || t.modelValue && t.modelValue.length === 0) && w(v(), v(!0));
    }, _ = (o, n) => {
      if (t.isRange) {
        let p = f.value[0], g = f.value[1];
        o === "start" ? p = n : o === "end" && (g = n), w(p, g);
      } else
        w(n);
    }, w = (o, n) => {
      let p = c(o);
      if (t.isRange) {
        n || (n = o);
        const g = o.h * 3600 + o.m * 60 + o.s, C = n.h * 3600 + n.m * 60 + n.s;
        g > C ? p = [c(n), c(o)] : p = [c(o), c(n)];
      }
      l("update:modelValue", p), m && m(p);
    }, u = () => {
      l("update:modelValue", ""), l("clear"), m && m("");
    }, a = (o) => {
      if (t.filterable)
        if (!o)
          u();
        else {
          let n = [r(o.toString())];
          t.isRange && (n = [r(o[0]), r(o[1])]);
          let p = !1;
          for (const g in n) {
            const C = n[g];
            if (typeof C == "object" && typeof t.disabledTime == "function") {
              const V = ["h", "m", "s"];
              for (const A in V)
                if (p = t.disabledTime(
                  Object.assign({}, C, { a: C.h }),
                  V[A]
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
          e.value.setValue(d.value);
        }
    };
    return (o, n) => (h(), Z(E(Ie), ue(o.$props, {
      ref_key: "selectDownEl",
      ref: e,
      disabledtime: "",
      "model-value": d.value,
      onClear: u,
      onBlur: a,
      onToggleClick: k
    }), {
      default: te(() => [
        $("div", {
          class: O({ [`${E(I)}-time-picker`]: !0, "is-range": o.isRange })
        }, [
          ce(ot, {
            key: "start",
            time: f.value[0],
            disabledTime: o.disabledTime,
            onClick: n[0] || (n[0] = (p) => _("start", p))
          }, null, 8, ["time", "disabledTime"]),
          o.isRange ? (h(), Z(ot, {
            key: "end",
            time: f.value[1],
            disabledTime: o.disabledTime,
            onClick: n[1] || (n[1] = (p) => _("end", p))
          }, null, 8, ["time", "disabledTime"])) : R("", !0)
        ], 2)
      ]),
      _: 1
    }, 16, ["model-value"]));
  }
}), Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TimePicker: Ct
}, Symbol.toStringTag, { value: "Module" })), El = ["onClick"], _t = /* @__PURE__ */ Y({
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
    const t = i, e = le(`${I}ControlChange`, ""), s = (a, o) => {
      let n = a;
      return o === "h" ? (a < 0 && (n = 0), a > 24 && (n = 24)) : (a < 0 && (n = 0), a > 59 && (n = 59)), n;
    }, c = (a) => {
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
    }, r = (a) => `${f(a.hours)}:${f(a.minutes)}`, m = (a, o) => {
      const n = a.minutes + a.hours * 60, p = o.minutes + o.hours * 60;
      return n === p ? 0 : n > p ? 1 : -1;
    }, f = (a) => `${a}`.padStart(2, "0"), d = (a, o) => {
      const n = {
        hours: a.hours,
        minutes: a.minutes
      };
      return n.minutes += o.minutes, n.hours += o.hours, n.hours += Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n;
    }, v = W(() => {
      const a = [];
      let o = c(t.start);
      const n = c(t.end), p = c(t.step), g = c(t.minTime), C = c(t.maxTime);
      if (o && n && p)
        for (; m(o, n) <= 0; ) {
          let V = !1;
          g && m(o, g) < 0 && (V = !0), C && m(C, o) < 0 && (V = !0), a.push({
            value: r(o),
            disabled: V
          }), o = d(o, p);
        }
      return a;
    }), k = j([]);
    t.modelValue && (k.value = [t.modelValue]);
    const _ = j();
    ee(
      () => t.modelValue,
      (a) => {
        a ? k.value = [t.modelValue] : k.value = [];
      }
    );
    const w = (a) => {
      a.disabled || (k.value = [a.value], _.value.slideUp(), l("update:modelValue", a.value), l("change", a.value), e && e(a.value));
    }, u = () => {
      k.value = [], l("update:modelValue", ""), l("clear"), e && e("");
    };
    return (a, o) => (h(), Z(E(Ie), ue(a.$props, {
      ref_key: "selectDown",
      ref: _,
      "model-value": k.value,
      onClear: u
    }), {
      default: te(() => [
        $("ul", {
          class: O(`${E(I)}-select`)
        }, [
          (h(!0), b(Q, null, oe(v.value, (n, p) => (h(), b("li", {
            key: p,
            class: O({ disabled: n.disabled, active: n.value === a.modelValue }),
            onClick: ie((g) => w(n), ["stop"])
          }, G(n.value), 11, El))), 128))
        ], 2)
      ]),
      _: 1
    }, 16, ["model-value"]));
  }
}), Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TimeSelect: _t
}, Symbol.toStringTag, { value: "Module" })), St = /* @__PURE__ */ Y({
  __name: "Field",
  props: {
    data: {},
    type: { default: "input" },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: l }) {
    const t = i, e = j(), s = () => {
      var r;
      t.modelValue !== void 0 ? e.value = t.modelValue : e.value = (r = t.data) == null ? void 0 : r.value;
    };
    ee(
      () => t.modelValue,
      () => {
        s();
      }
    ), ee(
      () => e.value,
      (r) => {
        l("update:modelValue", r);
      }
    ), s();
    const c = W(() => {
      switch (t.type) {
        case "radio":
          return ye(gt);
        case "checkbox":
          return ye(mt);
        case "datePicker":
          return ye(yt);
        case "select":
          return ye(Je);
        case "switch":
          return ye(bt);
        case "textarea":
          return ye(wt);
        case "timePicker":
          return ye(Ct);
        case "timeSelect":
          return ye(_t);
        default:
          return ye(Ke);
      }
    });
    return (r, m) => (h(), Z(Me(c.value), ue({
      modelValue: e.value,
      "onUpdate:modelValue": m[0] || (m[0] = (f) => e.value = f)
    }, r.data), null, 16, ["modelValue"]));
  }
}), Pl = ["textContent"], Ce = /* @__PURE__ */ Y({
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
    const e = i, s = le(`${I}FormProps`, {});
    let c;
    s != null && s.rules && e.prop && s.rules[e.prop] && (c = s.rules[e.prop]);
    let r = [...e.rules];
    ((n = e.rules) == null ? void 0 : n.length) === 0 && !e.verify && c && (r = [...c]);
    const m = (p, g) => {
      const C = e[p];
      return C === g && s && Object.keys(s).length > 0 ? s[p] : C;
    }, f = re({
      errorTips: "",
      // 有值时表示校验没通过有错误信息
      iconType: "",
      // 提示类型，
      rules2: r,
      trigger2: m("trigger", "change"),
      messageShow: m("showMessage", !0),
      controlValue: "",
      // 组件的值，改变事件时*/
      formSize: e.size ? e.size : s && s.size
    }), d = (p) => {
      p && (f.errorTips = p, f.iconType = "icon-failure");
    };
    if (d(e.error), ee(
      () => e.error,
      (p) => {
        d(p);
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
      e.verify.split(",").forEach((C) => {
        f.rules2.push({
          type: C,
          msg: p[C]
        });
      });
    }
    const v = W(() => {
      let p = !1;
      return m("required", !0) && f.rules2 && f.rules2.length > 0 && f.rules2.forEach((C) => {
        if (C.type === "required")
          return p = !0, !1;
      }), p;
    }), k = W(() => {
      const p = m("labelWidth", void 0);
      return p ? {
        width: p
      } : null;
    }), _ = (p) => {
      let g = p;
      return p === void 0 && (g = f.controlValue), new Promise((C, V) => {
        if (e.error)
          V(f.errorTips);
        else if (f.rules2) {
          const A = Ot(g, f.rules2);
          A === !0 ? (f.errorTips = "", f.iconType = "icon-success", C(f.controlValue)) : (f.errorTips = A, f.iconType = "icon-failure", V(f.errorTips));
        } else
          C(f.controlValue), console.log("没有校验规则通过");
      });
    }, w = (p) => {
      let g = "";
      f.rules2.forEach((C) => {
        C.type === "tips" && (g = C.msg);
      }), g && !p && (f.errorTips = g, f.iconType = "icon-tips");
    }, u = () => {
      f.errorTips = "", f.iconType = "";
    }, a = le(`${I}GetFormItemFields`, ""), o = () => {
      (f.rules2.length > 0 || e.error) && a && a({
        validate: _,
        clear: u,
        prop: e.prop || `prop${(/* @__PURE__ */ new Date()).getTime()}`
        // 当有prop时随机添加一个
      });
    };
    return de(`${I}ControlChange`, (p, g) => {
      e.type && t("update:modelValue", p), (g === "change" || !g) && t("change", p), f.controlValue = p, g !== "mounted" && (g === "focus" ? w(p) : f.trigger2 === "blur" ? g === "blur" && _(p).catch((C) => {
        console.log(C);
      }) : _(p).catch((C) => {
        console.log(C);
      }));
    }), ne(() => {
      o();
    }), l({ validate: _, clearTips: u }), (p, g) => (h(), b("div", {
      class: O({
        className: p.className,
        [E(I) + "-form-item-error"]: f.errorTips !== "",
        [E(I) + "-form-item"]: !0,
        ["form-item-" + f.formSize]: f.formSize
      })
    }, [
      p.label || p.$slots.label ? se((h(), b("label", {
        key: 0,
        class: O({ required: v.value, [E(I) + "-form-label"]: !0 }),
        style: X(k.value)
      }, [
        J(p.$slots, "label", {}, () => [
          fe(G(p.label), 1)
        ])
      ], 6)), [
        [pe, !p.labelVisible]
      ]) : R("", !0),
      $("div", {
        class: O(`${E(I)}-form-box`)
      }, [
        e.type ? (h(), Z(St, {
          key: 0,
          type: e.type,
          data: e.data,
          modelValue: e.modelValue
        }, null, 8, ["type", "data", "modelValue"])) : R("", !0),
        J(p.$slots, "default"),
        f.iconType && f.messageShow && (f.rules2 && f.rules2.length > 0 || p.error) ? (h(), b(Q, { key: 1 }, [
          f.errorTips === "" ? (h(), b("div", {
            key: 0,
            class: O(`${E(I)}-form-tips ${f.iconType}`)
          }, null, 2)) : (h(), b("div", {
            key: 1,
            class: O(`${E(I)}-form-tips`)
          }, [
            $("i", {
              class: O([f.iconType])
            }, null, 2),
            $("span", {
              textContent: G(f.errorTips)
            }, null, 8, Pl)
          ], 2))
        ], 64)) : R("", !0)
      ], 2),
      J(p.$slots, "other")
    ], 2));
  }
}), Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Field: St,
  FormItem: Ce
}, Symbol.toStringTag, { value: "Module" })), nt = Y({
  props: {
    slots: [Object, String]
  },
  // @ts-ignore
  setup(i) {
    return () => [Se("div", {}, i.slots)];
  }
}), zl = ["onClick"], Nl = { key: 0 }, jl = ["onClick"], Hl = { key: 1 }, Fl = {
  key: 0,
  class: "tabs-content"
}, Vt = /* @__PURE__ */ Y({
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
    const t = i, e = j(t.modelValue), s = (C, V) => {
      if (!C.disabled) {
        if (t.beforeLeave && !t.beforeLeave(C))
          return console.log("阻止点击"), !1;
        e.value = C.name || "tab-" + (V + 1), l("change", C, V), l("update:modelValue", e.value);
      }
    }, c = j([]);
    de(`${I}ChildrenList`, (C) => {
      c.value.push(C);
    });
    const r = (C, V) => C.name ? C.name === e.value : e.value === "tab-" + (V + 1), m = () => {
      c.value.forEach((C) => {
        C.name === t.modelValue && (e.value = C.name);
      });
    }, f = j(), d = j(), v = j(), k = j(!1), _ = j(0), w = j(), u = j(!0), a = j(!1), o = W(() => ({
      transform: `translateX(-${_.value}px)`
    })), n = () => {
      me(() => {
        if (["top", "bottom"].includes(t.tabPosition)) {
          const C = f.value.offsetWidth, V = d.value.offsetWidth;
          k.value = C <= V, w.value = C;
        }
      });
    }, p = (C) => {
      if (["top", "bottom"].includes(t.tabPosition)) {
        const V = v.value.offsetWidth, A = Math.abs(V - 100), M = d.value.offsetWidth;
        let x = 0;
        if (C) {
          if (a.value)
            return;
          u.value = !1, a.value = !1, x = _.value + A, x > M - V && (x = M - V, a.value = !0);
        } else {
          if (u.value)
            return;
          a.value = !1, u.value = !1, x = _.value - A, x < 0 && (x = 0, u.value = !0);
        }
        _.value = x;
      }
    }, g = (C, V) => {
      V && c.value.splice(C, 1);
    };
    return ee(
      () => t.tabPosition,
      (C) => {
        ["left", "right"].includes(C) ? (_.value = 0, w.value = 0) : n();
      }
    ), ne(() => {
      m(), n(), window.addEventListener("resize", n, !1);
    }), be(() => {
      window.removeEventListener("resize", n, !1);
    }), (C, V) => (h(), b("div", {
      class: O(`${E(I)}-tabs ${C.tabPosition}`),
      ref_key: "tabsEl",
      ref: f
    }, [
      J(C.$slots, "default"),
      $("div", {
        class: "tabs-nav",
        style: X({ width: w.value ? w.value + "px" : "" })
      }, [
        J(C.$slots, "leftExtra"),
        k.value ? (h(), b("a", {
          key: 0,
          class: O(["tabs-prev icon-arrow", { disabled: u.value }]),
          onClick: V[0] || (V[0] = (A) => p(0))
        }, null, 2)) : R("", !0),
        $("div", {
          class: "tabs-scroll",
          ref_key: "tabsScrollEl",
          ref: v
        }, [
          $("div", {
            class: "tabs-tab",
            ref_key: "tabsTabEl",
            ref: d,
            style: X(o.value)
          }, [
            (h(!0), b(Q, null, oe(c.value, (A, M) => {
              var x, y;
              return h(), b("div", {
                key: M,
                class: O(["tabs-item", {
                  disabled: A.disabled,
                  active: r(A, M)
                }]),
                onClick: (B) => s(A, M)
              }, [
                A.label ? (h(), b("span", Nl, [
                  fe(G(A.label) + " ", 1),
                  A.closable || C.closable ? (h(), b("i", {
                    key: 0,
                    class: "icon-close",
                    onClick: ie((B) => g(M, A.closable || C.closable), ["stop"])
                  }, null, 8, jl)) : R("", !0)
                ])) : (x = A.slots) != null && x.label ? (h(), b("span", Hl, [
                  ce(E(nt), {
                    slots: (y = A.slots) == null ? void 0 : y.label()
                  }, null, 8, ["slots"])
                ])) : R("", !0)
              ], 10, zl);
            }), 128))
          ], 4)
        ], 512),
        k.value ? (h(), b("a", {
          key: 1,
          class: O(["tabs-next icon-arrow", { disabled: a.value }]),
          onClick: V[1] || (V[1] = (A) => p(1))
        }, null, 2)) : R("", !0),
        J(C.$slots, "rightExtra")
      ], 4),
      J(C.$slots, "content"),
      C.showContent ? (h(), b("div", Fl, [
        (h(!0), b(Q, null, oe(c.value, (A, M) => se((h(), b("div", { key: M }, [
          ce(E(nt), {
            slots: A.slots
          }, null, 8, ["slots"])
        ], 512)), [
          [pe, r(A, M)]
        ])), 128))
      ])) : R("", !0)
    ], 2));
  }
}), Tt = Y({
  name: "TabPane",
  props: {
    className: String,
    label: String,
    name: String,
    disabled: Boolean,
    closable: Boolean
  },
  setup(i, { slots: l }) {
    const t = le(`${I}ChildrenList`);
    t && t(Object.assign({}, i, { slots: l }));
  },
  render() {
    return null;
  }
}), Wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TabPane: Tt,
  Tabs: Vt
}, Symbol.toStringTag, { value: "Module" })), Ze = Fe.create({
  baseURL: {}.VITE_APP_URL,
  // api的base_url
  //baseURL: 'http://localhost:3001/api', // api的base_url
  timeout: 6e3,
  // request timeout
  headers: {}
});
Ze.interceptors.request.use(
  (i) => i,
  (i) => {
    Promise.reject(i);
  }
);
Ze.interceptors.response.use(
  (i) => i.data.code === 0 ? Promise.reject(i) : i,
  (i) => Promise.reject(i)
);
const Ul = ["innerHTML"], Yl = /* @__PURE__ */ Y({
  __name: "AutoForm",
  props: {
    modelValue: {},
    data: { default: () => [] },
    formData: { default: () => ({}) },
    dict: { default: () => ({}) }
  },
  emits: ["update:modelValue", "change"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = j(), c = re({
      formValue: Object.assign({}, e.modelValue),
      urlLink: {}
    }), r = (a) => new Promise((o, n) => {
      s.value.validate(a).then(() => {
        o(c.formValue);
      }).catch((p) => {
        n(p);
      });
    }), m = () => {
      s.value.resetForm();
    }, f = (a, o) => {
      a.forEach((n) => {
        var p;
        switch (n.type) {
          case "div":
            f(n.list);
            break;
          case "tabs":
            n.columns.forEach((g) => {
              f(g.list);
            });
            break;
          case "text":
            break;
          case "component":
            c.formValue[n.name] = n.control.value;
            break;
          default:
            if (o === "dict") {
              const g = _(((p = n.config) == null ? void 0 : p.optionsKey) ?? n.name);
              g && (n.control.options = g);
            } else {
              if (n.config && n.config.url) {
                const g = d(n.config.url);
                g && (c.urlLink[g] = n);
              }
              k(n);
            }
            break;
        }
      });
    }, d = (a) => {
      const o = new RegExp("(?<=\\${)(.*?)(?=})", "g"), n = a.match(o);
      return n && n[0];
    };
    ee(
      () => c.formValue,
      (a) => {
        t("update:modelValue", a);
      },
      { deep: !0 }
    ), ee(
      () => e.dict,
      () => {
        f(e.data, "dict");
      },
      { deep: !0 }
    );
    const v = (a, o) => {
      t("change", a, o), c.urlLink[o] && u(c.urlLink[o], !0);
    }, k = (a) => {
      var o, n;
      if (["radio", "checkbox", "select"].includes(a.type))
        if (a.config && a.config.url)
          u(a);
        else {
          const p = _(((o = a.config) == null ? void 0 : o.optionsKey) ?? a.name);
          ((n = a.control.options) == null ? void 0 : n.length) === 0 && p && (a.control.options = p);
        }
      return a.control;
    }, _ = (a) => {
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
      var g, C;
      const n = (g = a.config) == null ? void 0 : g.linkValue, p = (C = a.config) == null ? void 0 : C.linkResult;
      if (n) {
        const A = new Function("$", `return (${n})`)(c.formValue);
        return p === "disabled" ? (e.data[o].control.disabled = A, !0) : A;
      }
      return !0;
    }, u = (a, o) => {
      const { url: n, method: p = "post", params: g = {}, afterResponse: C } = a.config, V = d(n);
      let A = n, M = g;
      if (V) {
        A = n.replace("${" + V + "}", c.formValue[V]);
        const y = n.split("?")[1].split("&");
        let B = "";
        if (y)
          for (const S in y)
            y[S].includes("${" + V + "}") && (B = y[S].split("=")[0]);
        M = Object.assign({}, g, { [B]: c.formValue[V] });
      }
      const x = window.sessionStorage.getItem(a.name);
      x && !o ? a.control.options = JSON.parse(x) : Ze({
        method: p,
        url: A,
        data: M,
        params: p === "get" ? g : {}
      }).then((y) => {
        let B = y.data.data;
        typeof C == "function" && (B = C(B)), a.control.options = B, window.sessionStorage.setItem(a.name, JSON.stringify(B));
      }).catch((y) => {
        typeof C == "function" && C(y, "catch"), a.control.options = [];
      });
    };
    return ne(() => {
      f(e.data);
    }), l({ validate: r, resetForm: m }), (a, o) => (h(), Z(E(pt), ue(a.formData, {
      ref_key: "autoFormEl",
      ref: s
    }), {
      default: te(() => [
        (h(!0), b(Q, null, oe(a.data, (n, p) => (h(), b(Q, { key: p }, [
          w(n, p) ? (h(), b(Q, { key: 0 }, [
            n.type === "tabs" ? (h(), Z(E(Vt), Ae(ue({ key: 0 }, n.tabs)), {
              default: te(() => [
                (h(!0), b(Q, null, oe(n.columns, (g, C) => (h(), Z(E(Tt), {
                  key: `pane${C}`,
                  label: g.tabPane.label
                }, {
                  default: te(() => [
                    (h(!0), b(Q, null, oe(g.list, (V, A) => (h(), b(Q, { key: A }, [
                      V.type === "component" ? (h(), Z(E(Ce), Ae(ue({ key: 0 }, V.formItem)), {
                        default: te(() => [
                          (h(), Z(Me(V.component), ue({
                            modelValue: c.formValue[V.name],
                            "onUpdate:modelValue": (M) => c.formValue[V.name] = M
                          }, V.control, {
                            onChange: (M) => v(M, V.name)
                          }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"]))
                        ]),
                        _: 2
                      }, 1040)) : (h(), Z(E(Ce), ue({ key: 1 }, V.formItem, {
                        type: V.type,
                        modelValue: c.formValue[V.name],
                        "onUpdate:modelValue": (M) => c.formValue[V.name] = M,
                        data: V.control,
                        onChange: (M) => v(M, V.name)
                      }), null, 16, ["type", "modelValue", "onUpdate:modelValue", "data", "onChange"]))
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 2
            }, 1040)) : n.type === "div" ? (h(), b("div", ue({ key: 1 }, n.control, { class: "div-row" }), [
              (h(!0), b(Q, null, oe(n.list, (g, C) => (h(), b(Q, { key: C }, [
                g.type === "component" ? (h(), Z(E(Ce), Ae(ue({ key: 0 }, g.formItem)), {
                  default: te(() => [
                    (h(), Z(Me(g.component), ue({
                      modelValue: c.formValue[g.name],
                      "onUpdate:modelValue": (V) => c.formValue[g.name] = V
                    }, g.control, {
                      onChange: (V) => v(V, g.name)
                    }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"]))
                  ]),
                  _: 2
                }, 1040)) : (h(), Z(E(Ce), ue({ key: 1 }, g.formItem, {
                  type: g.type,
                  modelValue: c.formValue[g.name],
                  "onUpdate:modelValue": (V) => c.formValue[g.name] = V,
                  data: g.control,
                  onChange: (V) => v(V, g.name)
                }), null, 16, ["type", "modelValue", "onUpdate:modelValue", "data", "onChange"]))
              ], 64))), 128))
            ], 16)) : n.type === "text" ? (h(), b("div", ue({
              key: 2,
              class: "form-title",
              innerHTML: n.name
            }, n.control), null, 16, Ul)) : n.type === "component" ? (h(), Z(E(Ce), Ae(ue({ key: 3 }, n.formItem)), {
              default: te(() => [
                (h(), Z(Me(n.component), ue({
                  modelValue: c.formValue[n.name],
                  "onUpdate:modelValue": (g) => c.formValue[n.name] = g
                }, n.control, {
                  onChange: (g) => v(g, n.name)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"]))
              ]),
              _: 2
            }, 1040)) : (h(), Z(E(Ce), ue({ key: 4 }, n.formItem, {
              modelValue: c.formValue[n.name],
              "onUpdate:modelValue": (g) => c.formValue[n.name] = g,
              type: n.type,
              data: n.control,
              onChange: (g) => v(g, n.name)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "type", "data", "onChange"]))
          ], 64)) : R("", !0)
        ], 64))), 128))
      ]),
      _: 1
    }, 16));
  }
}), Kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoForm: Yl
}, Symbol.toStringTag, { value: "Module" })), Gl = ["onClick"], Jl = ["textContent"], Zl = /* @__PURE__ */ Y({
  __name: "BackTop",
  props: {
    text: { default: "返回顶部" },
    height: { default: 200 },
    bottom: { default: 30 },
    right: { default: 30 }
  },
  emits: ["click"],
  setup(i, { emit: l }) {
    const t = i, e = j(!1), s = j();
    let c = null;
    const r = () => {
      d();
      function d() {
        const v = We();
        v > 0 && (c = window.requestAnimationFrame(d), window.scrollTo(0, v - v / 5));
      }
      l("click");
    }, m = () => {
      c && window.cancelAnimationFrame(c);
    };
    ne(() => {
      me(() => {
        document.body.appendChild(s.value), window.addEventListener("scroll", f), document.addEventListener("click", m);
      });
    }), be(() => {
      window.removeEventListener("scroll", f), document.removeEventListener("click", m), s.value && s.value.parentNode && s.value.parentNode.removeChild(s.value);
    });
    const f = () => {
      e.value = We() > t.height;
    };
    return (d, v) => (h(), b("div", {
      ref_key: "element",
      ref: s,
      class: O(`${E(I)}-back-top`),
      style: X({
        right: d.right + "px",
        bottom: d.bottom + "px",
        opacity: e.value ? 1 : 0,
        visibility: e.value ? "visible" : "hidden"
      }),
      onClick: ie(r, ["stop"])
    }, [
      $("a", {
        href: "javascript:",
        class: "icon-top",
        textContent: G(d.text)
      }, null, 8, Jl)
    ], 14, Gl));
  }
}), Xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BackTop: Zl
}, Symbol.toStringTag, { value: "Module" })), Ql = /* @__PURE__ */ Y({
  __name: "Badge",
  props: {
    value: {},
    dot: { type: Boolean, default: !1 },
    max: { default: 99 },
    type: { default: "danger" }
  },
  setup(i) {
    const l = i, t = W(() => typeof l.value == "number" && !isNaN(l.value) && l.value > l.max ? l.max + "+" : l.value), e = W(() => l.value && l.dot);
    return (s, c) => (h(), b("span", {
      class: O({ [E(I) + "-badge"]: !0, dot: e.value, [s.type]: !0 })
    }, [
      J(s.$slots, "default"),
      $("sup", null, G(t.value), 1)
    ], 2));
  }
}), ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Badge: Ql
}, Symbol.toStringTag, { value: "Module" })), eo = { class: "breadcrumb clearfix" }, to = ["textContent"], lo = /* @__PURE__ */ Y({
  __name: "Breadcrumb",
  props: {
    data: {},
    separator: { default: ">" }
  },
  setup(i) {
    return (l, t) => {
      const e = Ue("router-link");
      return h(), b("div", eo, [
        (h(!0), b(Q, null, oe(l.data, (s, c) => (h(), b(Q, null, [
          s.href ? (h(), Z(e, {
            key: c,
            class: O({ "last-child": l.data.length === c + 1 }),
            to: s.href
          }, {
            default: te(() => [
              fe(G(s.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "to"])) : (h(), b("span", {
            key: `span${c}`,
            textContent: G(s.title)
          }, null, 8, to)),
          l.data.length > c + 1 ? (h(), b("span", {
            key: c + 100,
            class: "separator"
          }, G(l.separator), 1)) : R("", !0)
        ], 64))), 256))
      ]);
    };
  }
}), oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Breadcrumb: lo
}, Symbol.toStringTag, { value: "Module" })), no = ["type", "disabled"], ao = ["href"], Oe = /* @__PURE__ */ Y({
  __name: "Button",
  props: {
    type: { default: "" },
    size: { default: "" },
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
    const t = i, e = le(`${I}GroupConfig`, {}), s = le(`${I}BtnClick`, ""), c = W(() => t.loading ? !0 : we(e.disabled || t.disabled) || !1), r = j(t.width || e.width), m = W(() => {
      const k = t.size || e.size || "";
      return {
        [`${I}-btn`]: !0,
        "is-round": t.round || e.round,
        [`${I}-btn-` + t.type]: t.type,
        disabled: c.value,
        [k]: k,
        "is-plain": t.plain || e.plain,
        "is-circle": t.circle || e.plain
      };
    }), f = W(() => t.href ? t.href : null), d = (k) => {
      c.value || (l("click", k), s && s(k, t.name));
    }, v = W(() => t.loading ? "loading" : t.icon);
    return (k, _) => k.nativeType ? (h(), b("button", ue({ key: 0 }, k.$attrs, {
      type: k.nativeType,
      class: m.value,
      disabled: c.value,
      style: { width: r.value },
      onClick: d
    }), [
      v.value ? (h(), b("i", {
        key: 0,
        class: O(`icon-${[v.value]} ${E(I)}-icon`)
      }, null, 2)) : R("", !0),
      J(k.$slots, "default")
    ], 16, no)) : (h(), b("a", ue({ key: 1 }, k.$attrs, {
      class: m.value,
      href: c.value ? null : f.value,
      style: { width: r.value },
      onClick: d
    }), [
      v.value ? (h(), b("i", {
        key: 0,
        class: O(`icon-${[v.value]} ${E(I)}-icon`)
      }, null, 2)) : R("", !0),
      J(k.$slots, "default")
    ], 16, ao));
  }
}), so = /* @__PURE__ */ Y({
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
    return de(`${I}GroupConfig`, t), de(`${I}BtnClick`, (e, s) => {
      t.disabled || l("click", e, s);
    }), (e, s) => (h(), b("div", {
      class: O({ [`${E(I)}-btn-group`]: !0 })
    }, [
      J(e.$slots, "default")
    ], 2));
  }
}), io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Oe,
  ButtonGroup: so
}, Symbol.toStringTag, { value: "Module" })), ro = {
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
}, uo = {
  key: 0,
  class: "direction-nav"
}, co = {
  key: 1,
  class: "control-nav"
}, fo = ["onClick"], po = /* @__PURE__ */ Y({
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
    const t = i, e = re({
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
    de(`${I}ChildrenList`, e.children);
    const s = j(), c = W(() => {
      const g = e.children.length;
      let C = e.width, V = "translateX";
      const A = re({
        width: ""
      });
      if (t.direction === "v" ? (C = t.itemHeight, V = "translateY") : A.width = g * C + "px", C && g > 0) {
        const M = -C * t.move;
        let x = M * e.moveDirection;
        if (t.loop)
          x += M;
        else if (x = M * (e.index - 1), t.direction === "h") {
          const y = s.value.offsetWidth - g * C;
          x < y && (x = y);
        }
        return Object.assign(
          {
            overflow: "hidden",
            transform: `${V}(${x}px)`,
            transition: `transform ${e.duration2}ms`
          },
          A
        );
      } else
        return {};
    }), r = W(() => {
      const g = re({
        "overflow-x": "hidden",
        height: "",
        "overflow-y": ""
      });
      return e.width && Object.assign(g, { width: e.width * t.showNumber + "px" }), t.direction === "v" && (t.itemHeight && (g.height = t.itemHeight * t.showNumber + "px"), g["overflow-y"] = "hidden"), g;
    }), m = () => {
      let g = 0;
      !t.loop && t.showNumber > 1 && (g = Math.ceil(t.showNumber / t.move) - 1), e.maxMove = Math.ceil((e.children.length - g) / t.move), t.loop && e.children.length >= t.move && v(-1);
    }, f = (g) => {
      if (!e.isAnimation) {
        if (g === 1)
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
        e.isAnimation = !0, l("slideBefore", e.index), e.moveDirection = g, e.duration2 = t.duration, d(g);
      }
    }, d = (g) => {
      setTimeout(() => {
        t.loop && (e.moveDirection = 0, e.duration2 = 0, v(g)), e.isAnimation = !1, l("slideAfter", e.index);
      }, t.duration);
    }, v = (g, C) => {
      if (!t.loop)
        return;
      const V = C || t.move;
      if (g === 1) {
        const A = e.children.slice(0, V);
        e.children.splice(0, V), A.forEach((M) => {
          e.children.push(M);
        });
      } else {
        const A = e.children.slice(e.children.length - V);
        for (let M = A.length; M > 0; M--)
          e.children.unshift(A[M - 1]);
        e.children.splice(e.children.length - V);
      }
    }, k = (g) => {
      g > e.index ? v(1, g - e.index) : v(-1, e.index - g), e.index = g;
    };
    let _ = 0;
    const w = () => {
      t.autoPlay && (_ = setInterval(() => {
        f(1);
      }, t.showTime));
    }, u = () => {
      t.pauseOnHover && t.autoPlay && clearInterval(_);
    }, a = () => {
      w();
    }, o = (g) => {
      if (t.type === "card") {
        const C = { 3: 2, 5: 3, 7: 4 };
        let V = C[t.showNumber] - 2 + e.index, A = 0;
        t.loop && (V = C[t.showNumber] + e.moveDirection, A = C[t.showNumber]);
        let M = "";
        return V === g && (M = "big-size"), A === g && (M += " normal-size"), M;
      }
    }, n = () => {
      t.itemWidth ? e.width = t.itemWidth : e.width = s.value.offsetWidth / t.showNumber;
    }, p = () => {
      n();
    };
    return ne(() => {
      m(), me(() => {
        n();
      }), w(), window.addEventListener("resize", p);
    }), Ye(() => {
      window.removeEventListener("resize", p), e.children = [];
    }), (g, C) => (h(), b("div", {
      ref_key: "domEl",
      ref: s,
      class: O({
        [E(I) + "-carousel"]: !0,
        vertical: g.direction === "v",
        [g.type]: g.type
      }),
      onMouseleave: a,
      onMouseover: u
    }, [
      $("div", {
        class: "carousel-container",
        style: X(r.value)
      }, [
        J(g.$slots, "default"),
        $("div", {
          style: X(c.value),
          class: "carousel-transform clearfix"
        }, [
          (h(!0), b(Q, null, oe(e.children, (V, A) => (h(), Z(ro, {
            key: `item${A}`,
            "child-item": V,
            "class-name": o(A),
            "style-cls": { width: e.width + "px", height: g.itemHeight + "px" }
          }, null, 8, ["child-item", "class-name", "style-cls"]))), 128))
        ], 4)
      ], 4),
      g.directionNav ? (h(), b("div", uo, [
        $("a", {
          class: O(["carousel-prev", { disabled: !g.loop && e.index <= 1 }]),
          onClick: C[0] || (C[0] = (V) => f(-1))
        }, null, 2),
        $("a", {
          class: O(["carousel-next", { disabled: !g.loop && e.index >= e.maxMove }]),
          onClick: C[1] || (C[1] = (V) => f(1))
        }, null, 2)
      ])) : R("", !0),
      g.controlNav ? (h(), b("div", co, [
        (h(!0), b(Q, null, oe(e.maxMove, (V) => (h(), b("a", {
          key: V,
          href: "javascript:",
          class: O({ "control-nav-active": e.index === V }),
          onClick: (A) => k(V)
        }, G(V), 11, fo))), 128))
      ])) : R("", !0)
    ], 34));
  }
}), go = Y({
  name: "CarouselItem",
  props: {
    className: String
  },
  setup(i, { slots: l }) {
    const t = le(`${I}ChildrenList`);
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
}), mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Carousel: po,
  CarouselItem: go
}, Symbol.toStringTag, { value: "Module" })), ho = {
  key: 1,
  viewBox: "0 0 50 50",
  class: "loading-svg"
}, vo = /* @__PURE__ */ $("circle", {
  class: "svg-path",
  cx: "25",
  cy: "25",
  r: "20",
  fill: "none"
}, null, -1), yo = [
  vo
], $e = /* @__PURE__ */ Y({
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
    const t = i, e = re({
      visible: t.modelValue,
      scrollbarWidth: 17
    });
    return ee(
      () => t.modelValue,
      (r) => {
        e.visible = r;
      }
    ), ne(() => {
      me(() => {
        e.scrollbarWidth = ht();
      });
    }), l({ close: () => {
      e.visible = !1, t.lock && (document.body.style.overflow = "", document.body.style.paddingRight = "");
    }, open: () => {
      e.visible = !0, t.lock && (document.body.style.overflow = "hidden", document.body.style.paddingRight = e.scrollbarWidth + "px");
    } }), (r, m) => (h(), Z(ke, {
      name: `${E(I)}-loading-fade`
    }, {
      default: te(() => [
        se($("div", {
          style: X({ backgroundColor: r.background || "", "z-index": r.zIndex }),
          class: O({
            "no-background": r.background === "none",
            [E(I) + "-loading-full"]: !r.el,
            [E(I) + "-loading"]: !0
          })
        }, [
          $("div", {
            class: O(`${E(I)}-loading-spinner`)
          }, [
            r.spinner ? (h(), b("i", {
              key: 0,
              class: O([r.spinner, [E(I) + "-icon-rotate"]])
            }, null, 2)) : (h(), b("svg", ho, yo)),
            r.text ? (h(), b("p", {
              key: 2,
              class: O(`${E(I)}-loading-text`)
            }, G(r.text), 3)) : R("", !0)
          ], 2)
        ], 6), [
          [pe, e.visible]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), bo = { key: 0 }, ko = {
  key: 1,
  class: "empty-text"
}, wo = ["onClick"], Co = {
  key: 0,
  class: "icon-hook"
}, _o = {
  key: 4,
  class: "icon-arrow"
}, So = /* @__PURE__ */ Y({
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
    const t = i, e = re({
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
      lazyOptions: t.options,
      showValue: []
      // 用于展示的文本值及对应value值，格式化后显示于输入框的值
    }), { downDataList: s, loadingId: c, showLabel: r } = xe(e), { optionsKey: m } = xe(t), f = m.value.label, d = m.value.value, v = j(), k = j(t.modelValue.join(","));
    ee(
      () => t.options,
      (P) => {
        e.lazyOptions = P, t.filterable && L("`");
      }
    );
    const _ = W(() => {
      const P = I + "-cascader-down";
      return t.downClass ? t.downClass + " " + P : P;
    }), w = W(() => {
      const P = [];
      return t.lazy ? H(e.lazyOptions, {}) : H(t.options, {}), P;
      function H(T, N) {
        T.forEach((D) => {
          const F = JSON.parse(JSON.stringify(D));
          delete F.children, delete F._fullLabel, delete F._fullValue;
          const U = D.children && (D.children.length > 0 || t.lazy);
          D._fullLabel = N.fullLabel ? N.fullLabel + "," + D[f] : "", D._fullValue = N.fullValue ? N.fullValue + "," + D[d] : "", P.push(
            Object.assign({}, F, {
              tid: N.parentId,
              hasChild: U,
              fullLabel: D._fullLabel,
              fullValue: D._fullValue
            })
          ), U && H(D.children, {
            parentId: D[d],
            fullLabel: D._fullLabel || D[f],
            fullValue: D._fullValue || D[d]
          });
        });
      }
    }), u = () => {
      var P;
      if ((P = t.modelValue) != null && P.length) {
        e.showLabel = [], t.modelValue.forEach((H) => {
          e.showLabel.push(H.replace(/,/g, "/"));
        });
        for (let H = 0; H < t.modelValue.length; H++)
          w.value.forEach((T) => {
            if (T.fullValue && T.fullValue === t.modelValue[H]) {
              let N = T.fullLabel || T[f];
              t.showAllLevels || (N = N.split(",").pop()), e.showLabel.splice(H, 1, N.replace(/,/g, "/"));
            }
          });
      } else
        e.showLabel = [];
    };
    ee(
      () => t.modelValue,
      () => {
        u();
      }
    ), u();
    const a = (P) => w.value.filter((H) => H.tid === P), o = le(`${I}ControlChange`, ""), n = (P) => {
      l("update:modelValue", P), l("change", P), v.value.slideUp(), o && o(P);
    }, p = () => {
      e.downDataList = [];
      const P = a();
      P && P.length > 0 && (g(P), e.downDataList.push(P));
      const H = t.modelValue[0];
      if (H && H.length > 0) {
        const T = H.split(",");
        for (let N = 0; N < T.length - 1; N++) {
          const D = a(T[N]);
          D != null && D.length && (g(D), e.downDataList.push(D));
        }
      }
    }, g = (P) => {
      P.forEach((H) => {
        if (H.hasChild && e.checked.includes(H[d])) {
          const T = a(H[d]), N = T.filter(
            (D) => e.checked.includes(D[d])
          );
          (T == null ? void 0 : T.length) !== (N == null ? void 0 : N.length) && (H.someSelect = !0);
        }
      });
    }, C = (P) => {
      const H = JSON.parse(JSON.stringify(t.modelValue));
      if (P) {
        const T = H.join(",").split(",");
        e.checked = Array.from(new Set(T)), t.checkAny && (e.checked = H), t.lazy && w.value.length === 0 ? K() : p(), t.multiple && (e.multipleChecked = H);
      } else if (t.multiple)
        n(e.multipleChecked);
      else if (t.checkAny) {
        let T = [];
        k.value && (T = [k.value]), n(T);
      }
    }, V = (P, H, T) => {
      if (!t.multiple && T.target.className === "checked" || P.disabled)
        return;
      e.downDataList.splice(H + 1, e.downDataList.length - H + 1);
      const N = a(P[d]);
      N && N.length > 0 ? e.downDataList.push(N) : ((!t.multiple && !t.lazy || !P.hasChild) && (t.checkAny || n([P.fullValue || P[d]])), t.lazy && (e.loadingId = P[d], K(P, "childrenClick"))), t.multiple || (e.checked = (P.fullValue || P[d]).split(","));
    }, A = (P) => {
      if (t.checkAny)
        return e.checked.indexOf(P.fullValue || P[d]) !== -1;
      const H = e.checked.indexOf(P[d]);
      return t.multiple && P.hasChild && H !== -1 ? !P.someSelect : H !== -1;
    }, M = () => {
      e.checked = [], n([]);
    }, x = (P, H) => {
      const T = e.checked.indexOf(P);
      H ? T === -1 && e.checked.push(P) : T !== -1 && e.checked.splice(T, 1);
    }, y = (P, H) => {
      const T = e.multipleChecked.indexOf(P);
      H && T === -1 && e.multipleChecked.push(P), !H && T !== -1 && e.multipleChecked.splice(T, 1);
    }, B = (P, H) => {
      if (P.disabled)
        return;
      let T = P[d];
      t.checkAny && (T = P.fullValue || P[d]), x(T, H), t.checkAny || D(P, H), P.hasChild && !t.checkAny ? N(P, H) : y(P.fullValue || P[d], H), P.someSelect = !1;
      function N(F, U) {
        a(F[d]).forEach((ae) => {
          ae.disabled || (ae.someSelect = !1, x(ae[d], U), ae.hasChild ? N(ae, U) : y(ae.fullValue, U));
        });
      }
      function D(F, U) {
        const q = a(F.tid);
        let ae = !1;
        const ge = q.filter(
          (he) => e.checked.includes(he[d])
        );
        (ge == null ? void 0 : ge.length) > 0 && (ge == null ? void 0 : ge.length) !== (q == null ? void 0 : q.length) ? ae = !0 : (ge == null ? void 0 : ge.length) === 0 && (ae = !1);
        const ve = w.value.filter((he) => he[d] === F.tid);
        ve && ve.length > 0 && ((!U && !(ge != null && ge.length) || U) && x(ve[0][d], U), ve[0].someSelect = ae, ve[0].tid && D(ve[0], U));
      }
    }, S = (P) => {
      const H = JSON.parse(JSON.stringify(t.modelValue));
      H.splice(P, 1), n(H);
    }, L = (P) => {
      e.downDataList = [];
      const H = [];
      w.value.forEach((T) => {
        !T.hasChild && (T.fullLabel.indexOf(P) !== -1 || P === "`") && H.push({
          [f]: T.fullLabel.replace(/,/g, "/"),
          [d]: T.fullValue,
          fullLabel: T.fullLabel,
          fullValue: T.fullValue
        });
      }), P || H.splice(0, H.length), e.downDataList.push(H);
    }, z = (P) => {
      clearTimeout(e.timer), e.timer = setTimeout(() => {
        t.lazy || L(P), l("input", P);
      }, 500);
    }, K = async (P, H) => {
      if (!t.lazyLoad)
        return;
      if (await T(P, H), !H && t.modelValue.length > 0) {
        const D = t.modelValue[0];
        if (D && D.length > 0) {
          const F = D.split(",");
          for (let U = 0; U < F.length - 1; U++) {
            const q = { [d]: F[U] };
            await T(q, H);
          }
        }
      }
      async function T(D, F) {
        t.lazyLoad && t.lazyLoad(D, (U) => {
          if (!U || U && U.length === 0) {
            n([D.fullValue || D[d]]), e.loadingId = "";
            return;
          }
          if (!D)
            e.lazyOptions = U;
          else {
            if (D.hasChild = !0, N(e.lazyOptions, D, U), F) {
              const q = a(D[d]);
              q && q.length > 0 && e.downDataList.push(q);
            }
            e.loadingId = "";
          }
          F || p();
        });
      }
      function N(D, F, U) {
        D.forEach((q) => {
          let ae = !1;
          q[d] === F[d] && (q.children = U, ae = !0), !ae && q.children && N(q.children, F, U);
        });
      }
    };
    return (P, H) => (h(), Z(E(Ie), ue(P.$props, {
      ref_key: "selectDownEl",
      ref: v,
      class: { [`${E(I)}-cascader`]: !0 },
      "down-class": _.value,
      "model-value": E(r),
      options: [],
      lazyload: "",
      "options-key": "",
      onClear: M,
      onDelete: S,
      onInput: z,
      onToggleClick: C
    }), {
      default: te(() => [
        P.lazy && E(s).length === 0 ? (h(), b("p", bo, [
          ce($e, {
            "model-value": !0,
            background: "#fff",
            text: "加载中"
          })
        ])) : E(s).length === 0 ? (h(), b("ul", ko, [
          $("li", null, G(P.emptyText), 1)
        ])) : R("", !0),
        (h(!0), b(Q, null, oe(E(s), (T, N) => (h(), b("ul", {
          key: N,
          onClick: H[3] || (H[3] = ie(() => {
          }, ["stop"]))
        }, [
          (h(!0), b(Q, null, oe(T, (D) => (h(), b("li", {
            key: D[E(m).label],
            class: O({ checked: A(D), disabled: D.disabled }),
            onClick: (F) => V(D, N, F)
          }, [
            !D.hasChild && !P.multiple && !P.checkAny ? (h(), b("i", Co)) : R("", !0),
            P.checkAny && !P.multiple ? (h(), Z(E(Ge), {
              key: 1,
              modelValue: k.value,
              "onUpdate:modelValue": H[0] || (H[0] = (F) => k.value = F),
              value: D.fullValue || D.value,
              onClick: H[1] || (H[1] = ie(() => {
              }, ["stop"]))
            }, null, 8, ["modelValue", "value"])) : R("", !0),
            P.multiple ? (h(), Z(E(Ve), {
              key: 2,
              class: O({ "some-select": D.someSelect }),
              disabled: D.disabled,
              "model-value": A(D),
              onChange: (F) => B(D, F),
              onClick: H[2] || (H[2] = ie(() => {
              }, ["stop"]))
            }, null, 8, ["class", "disabled", "model-value", "onChange"])) : R("", !0),
            $("a", null, G(D[E(m).label]), 1),
            P.lazy && D[E(m).value] === E(c) ? (h(), Z($e, {
              key: T[E(m).label],
              "model-value": !0,
              background: "#fff",
              class: "loading"
            })) : R("", !0),
            D.hasChild ? (h(), b("i", _o)) : R("", !0)
          ], 10, wo))), 128))
        ]))), 128))
      ]),
      _: 1
    }, 16, ["class", "down-class", "model-value"]));
  }
}), Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Cascader: So
}, Symbol.toStringTag, { value: "Module" })), To = /* @__PURE__ */ Y({
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
    return de(`${I}ChangePanel`, e), de(
      `${I}Props`,
      re({
        modelValue: t.modelValue,
        accordion: t.accordion
      })
    ), (s, c) => (h(), b("div", {
      class: O(`${E(I)}-collapse`)
    }, [
      J(s.$slots, "default")
    ], 2));
  }
}), at = "0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out", $o = {
  onBeforeEnter(i) {
    const l = i;
    l.style.transition = at, l.dataset && (l.dataset.oldPaddingTop = l.style.paddingTop, l.dataset.oldPaddingBottom = l.style.paddingBottom), l.style.height = "0", l.style.paddingTop = "0", l.style.paddingBottom = "0";
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
    l.style.transitionProperty = "all", l.scrollHeight !== 0 && (l.style.transition = at, l.style.height = "0", l.style.paddingTop = "0", l.style.paddingBottom = "0");
  },
  onAfterLeave(i) {
    const l = i;
    l.style.transition, l.style.height = "", l.style.overflow = l.dataset.oldOverflow || "", l.style.paddingTop = l.dataset.oldPaddingTop || "", l.style.paddingBottom = l.dataset.oldPaddingBottom || "";
  }
}, Bo = {
  functional: !0,
  setup() {
    return {
      collapseTransitionProps: $o
    };
  }
}, Io = (i, l) => {
  const t = i.__vccOpts || i;
  for (const [e, s] of l)
    t[e] = s;
  return t;
};
function Ao(i, l, t, e, s, c) {
  return h(), Z(ke, Ae(xt(e.collapseTransitionProps)), {
    default: te(() => [
      J(i.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Xe = /* @__PURE__ */ Io(Bo, [["render", Ao]]), xo = /* @__PURE__ */ Y({
  __name: "Panel",
  props: {
    name: {}
  },
  setup(i) {
    const l = i, t = Re(), e = l.name || Math.random().toString(36).substr(2, 8), s = le(`${I}Props`), c = le(`${I}ChangePanel`), r = W(() => s.modelValue.indexOf(e) !== -1), m = (f) => {
      if (f === 1 && t.trigger)
        return;
      const d = s.modelValue, v = d.indexOf(e);
      s.accordion ? v !== -1 ? d.splice(v, 1) : d.splice(v, 1, e) : v !== -1 ? d.splice(v, 1) : d.push(e), c && c(r.value);
    };
    return ne(() => {
    }), (f, d) => (h(), b("div", {
      class: O([{ active: r.value }, "collapse-panel"])
    }, [
      $("div", {
        class: "collapse-title",
        onClick: d[1] || (d[1] = (v) => m(1))
      }, [
        $("i", {
          class: O(["icon-arrow arrow", { down: r.value }])
        }, null, 2),
        J(f.$slots, "default"),
        f.$slots.trigger ? (h(), b("span", {
          key: 0,
          onClick: d[0] || (d[0] = (v) => m())
        }, [
          J(f.$slots, "trigger")
        ])) : R("", !0)
      ]),
      ce(Xe, null, {
        default: te(() => [
          se($("div", {
            ref: "content",
            class: O([{ active: r.value }, "collapse-content"])
          }, [
            J(f.$slots, "content")
          ], 2), [
            [pe, r.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Collapse: To,
  CollapsePanel: xo
}, Symbol.toStringTag, { value: "Module" })), Oo = /* @__PURE__ */ Y({
  __name: "Sidebar",
  props: {
    modelValue: {},
    sideBarHeight: {}
  },
  emits: ["update:modelValue"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = j(0);
    ee(
      () => e.sideBarHeight,
      () => {
        d();
      }
    );
    const c = (v) => {
      const k = e.sideBarHeight, _ = v.pageY - s.value;
      document.onmousemove = (w) => {
        let u = w.pageY - _;
        u >= k && (u = k), u <= 0 && (u = 0), r(u, k);
      }, document.onmouseup = () => {
        document.onmousemove = null, document.onmouseup = null;
      }, v.stopPropagation();
    }, r = (v, k) => {
      s.value = v;
      const _ = k / 6;
      let w = [];
      v <= k / 6 ? w = [255, f(v, _, 0), 0] : v <= k * 2 / 6 ? w = [255 - f(v, _, 1), 255, 0] : v <= k * 3 / 6 ? w = [0, 255, f(v, _, 2)] : v <= k * 4 / 6 ? w = [0, 255 - f(v, _, 3), 255] : v < k * 5 / 6 ? w = [f(v, _, 4), 0, 255] : v <= k * 6 / 6 && (w = [255, 0, 255 - f(v, _, 5)]);
      const u = {
        r: w[0],
        g: w[1],
        b: w[2]
      };
      t("update:modelValue", u);
    }, m = (v) => {
      const k = e.sideBarHeight;
      r(v.offsetY, k), c(v);
    }, f = (v, k, _) => {
      const w = (v - k * _) / k * 255;
      return parseInt(w.toString());
    }, d = () => {
      const { r: v, g: k, b: _ } = e.modelValue;
      let w = 0;
      const u = e.sideBarHeight / 6;
      v === 255 && _ === 0 && (w = k / 255 * u), k === 255 && _ === 0 && (w = (v / 255 + 1) * u), k === 255 && v === 0 && (w = (_ / 255 + 2) * u), _ === 255 && v === 0 && (w = (k / 255 + 3) * u), _ === 255 && k === 0 && (w = (v / 255 + 4) * u), v === 255 && k === 0 && (w = (_ / 255 + 5) * u), s.value = w;
    };
    return l({ calcTop: d }), (v, k) => (h(), b("div", {
      class: "color-slider",
      onMousedown: m
    }, [
      $("span", {
        class: "color-slier-thumb",
        style: X({ top: s.value + "px" }),
        onMousedown: c
      }, null, 36)
    ], 32));
  }
}), Do = /* @__PURE__ */ $("div", { class: "color-white-panel" }, null, -1), Eo = /* @__PURE__ */ $("div", { class: "color-block-panel" }, null, -1), Mo = ["onMousedown"], Po = /* @__PURE__ */ Y({
  __name: "Panel",
  props: {
    bgColor: {},
    showColor: {}
  },
  setup(i, { expose: l }) {
    const t = i, e = j(), s = re({
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
    }), c = W(() => {
      const { r: _, g: w, b: u } = t.bgColor;
      return `rgba(${_}, ${w}, ${u})`;
    });
    ee(
      () => t.bgColor,
      () => {
        k();
      }
    );
    const r = (_) => {
      if (_.target.className === "color-cursor")
        return;
      const { offsetX: w, offsetY: u } = _, { w: a } = s.panelBgInfo;
      s.style = {
        left: w,
        top: u
      };
      const o = a - w;
      m(o, u), d(_), _.stopPropagation();
    }, m = (_, w) => {
      const { w: u, h: a } = s.panelBgInfo, o = JSON.parse(JSON.stringify(t.bgColor));
      for (const n in o) {
        const p = o[n];
        o[n] = ((255 - p) * _ + p * u) / u;
      }
      f(_, w, u, a, o);
    }, f = (_, w, u, a, o) => {
      for (const n in o) {
        const p = o[n], g = (a - w) * p / a;
        t.showColor[n] = parseInt(g.toString());
      }
    }, d = (_) => {
      console.log("_onMouseDown");
      const { w, h: u } = s.panelBgInfo, a = _.pageX - s.style.left, o = _.pageY - s.style.top;
      document.onmousemove = (n) => {
        const { pageX: p, pageY: g } = n;
        let C = p - a, V = g - o;
        C <= 0 && (C = 0), C >= w && (C = w), V <= 0 && (V = 0), V >= u && (V = u), s.style = {
          left: C,
          top: V
        };
        const A = w - C;
        m(A, V);
      }, document.onmouseup = () => {
        document.onmousemove = null, document.onmouseup = null;
      }, _.stopPropagation();
    }, v = () => {
      const _ = e.value.offsetWidth, w = e.value.offsetHeight;
      s.panelBgInfo.w = _, s.panelBgInfo.h = w;
      const { r: u, g: a, b: o } = t.showColor, n = Math.max(u, a, o);
      let g = Math.min(u, a, o) / n * _;
      n === 0 && (g = 0);
      const C = w - n / 255 * w;
      s.style.left = _ - g, s.style.top = C;
    }, k = () => {
      const { w: _ } = s.panelBgInfo, { left: w, top: u } = s.style;
      m(_ - w, u);
    };
    return l({ calcXY: v }), (_, w) => (h(), b("div", {
      ref_key: "el",
      ref: e,
      class: "color-panel",
      style: X({ background: c.value }),
      onMousedown: r
    }, [
      Do,
      Eo,
      $("div", {
        class: "color-cursor",
        style: X({ left: s.style.left + "px", top: s.style.top + "px" }),
        onMousedown: ie(d, ["stop"])
      }, null, 44, Mo)
    ], 36));
  }
}), Ro = { class: "color-picker-content" }, zo = { class: "color-picker-control" }, No = { class: "color-input" }, jo = ["value"], Ho = ["innerHTML"], Fo = /* @__PURE__ */ Y({
  __name: "ColorPicker",
  props: {
    modelValue: { default: "#fff" },
    format: { default: "hex" },
    text: { default: "确定" }
  },
  emits: ["change", "update:modelValue"],
  setup(i, { emit: l }) {
    const t = i, e = j(), s = j(), c = j(), r = re({
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
    }), m = W(() => {
      if (r.showColor.r === null)
        return;
      let a;
      if (t.format === "hex")
        a = v();
      else {
        const { r: o, g: n, b: p } = r.showColor;
        a = `rgb(${o},${n},${p})`;
      }
      return a = a && a.replace(/\s+/g, ""), a;
    }), f = (a) => {
      let o = a ? a.target.value : t.modelValue;
      o = o.replace(/\s+/g, "");
      let n;
      o[0] === "#" ? n = d(o) : (o = o.replace(/[a-zA-Z()]/g, ""), n = o.split(",")), !(!n || n.length !== 3 && n.length !== 4) && (r.showColor.r = _(n[0]), r.showColor.g = _(n[1]), r.showColor.b = _(n[2]), k(a));
    }, d = (a) => {
      const o = a.replace("#", "");
      if (o.length !== 3 && o.length !== 6 || /[^0-9a-f]/g.test(o))
        return;
      const n = [];
      for (let p = 0; p < o.length; p++) {
        let g = parseInt(o[p].toString() + o[p], 16);
        o.length === 6 && p % 2 === 0 ? (g = parseInt(o[p].toString() + o[p + 1], 16), n.push(g)) : o.length === 3 && n.push(g);
      }
      return n;
    }, v = () => {
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
      const { r: o, g: n, b: p } = r.showColor, g = [
        { name: "r", value: o },
        { name: "g", value: n },
        { name: "b", value: p }
      ];
      g.sort((M, x) => x.value - M.value);
      const C = g[0].value, V = g[1].value, A = g[2].value;
      g[1].value = (A - V) * C / (A - C), g[2].value = 0, g[0].value = 255, g[1].value = 255 * g[1].value / C, A === C && (g[1].value = 0), g.forEach((M) => {
        r.bgColor[M.name] = M.value;
      }), a && (s.value.calcTop(), c.value.calcXY());
    }, _ = (a) => (a > 255 && (a = 255), a < 0 && (a = 0), a), w = (a) => {
      console.log(a), r.visible = !1, l("update:modelValue", m.value), l("change", m.value), a.stopPropagation();
    }, u = (a) => {
      e.value.contains(a.target) ? (r.visible = !0, me(() => {
        r.sideBarHeight = e.value.querySelector(".color-slider").offsetHeight, c.value.calcXY();
      })) : r.visible = !1;
    };
    return ne(() => {
      me(() => {
        r.sideBarHeight = e.value.querySelector(".color-slider").offsetHeight, f();
      }), document.addEventListener("click", u);
    }), be(() => {
      document.removeEventListener("click", u);
    }), (a, o) => (h(), b("div", {
      ref_key: "el",
      ref: e
    }, [
      J(a.$slots, "default"),
      ce(ke, { name: "slide-toggle" }, {
        default: te(() => [
          se($("div", {
            class: O(`${E(I)}-color-picker`),
            onClick: o[1] || (o[1] = ie(() => {
            }, ["stop"]))
          }, [
            $("div", Ro, [
              ce(Oo, {
                ref_key: "sidebar",
                ref: s,
                modelValue: r.bgColor,
                "onUpdate:modelValue": o[0] || (o[0] = (n) => r.bgColor = n),
                "side-bar-height": r.sideBarHeight
              }, null, 8, ["modelValue", "side-bar-height"]),
              ce(Po, {
                ref_key: "panel",
                ref: c,
                "bg-color": r.bgColor,
                "show-color": r.showColor
              }, null, 8, ["bg-color", "show-color"])
            ]),
            $("div", zo, [
              $("div", No, [
                $("input", {
                  type: "text",
                  class: O(`${E(I)}-input-control`),
                  value: m.value,
                  onChange: f
                }, null, 42, jo)
              ]),
              $("div", {
                class: "color-confirm",
                onClick: w,
                innerHTML: a.text
              }, null, 8, Ho)
            ])
          ], 2), [
            [pe, r.visible]
          ])
        ]),
        _: 1
      })
    ], 512));
  }
}), Wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ColorPicker: Fo
}, Symbol.toStringTag, { value: "Module" })), st = 500, Qe = /* @__PURE__ */ Y({
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
    const e = i, s = j(), c = j(), r = j(), m = re({
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
    ee(
      () => e.modelValue,
      (o) => {
        m.visible = o, o && v(), a(o);
      }
    );
    const d = W(() => {
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
    }), v = () => {
      e.autoClose > 0 && (m.autoTime = e.autoClose, f = window.setInterval(() => {
        m.autoTime > 1 ? m.autoTime-- : (e.callback && e.callback(), _());
      }, 1e3));
    }, k = () => {
      m.visible = !0, v(), a(!0);
    }, _ = () => {
      m.visible = !1, e.autoClose && window.clearInterval(f), e.isAlert && e.remove && window.setTimeout(() => {
        e.remove && e.remove();
      }, st), t("update:modelValue", !1), a(!1), typeof e.close == "function" && window.setTimeout(() => {
        e.close && e.close();
      }, st);
    };
    l({ open: k, close: _ });
    const w = (o) => {
      if (!e.closeModal && o === "modal")
        return !1;
      if (!e.autoClose && o === "confirm" && e.callback)
        return e.callback(_), console.log(console), !1;
      if (e.beforeClose && !e.beforeClose(o, _))
        return !1;
      _();
    }, u = (o) => {
      if (e.move && c.value) {
        m.moveFlag = !1;
        const n = Be(c.value), p = o.pageX - n.left, g = o.pageY - n.top, C = We();
        m.moveFlag = !0, document.onmousemove = (V) => {
          if (m.moveFlag) {
            let A = V.pageX - p, M = V.pageY - g - C;
            const x = Le(), y = r.value.offsetHeight, B = r.value.offsetWidth;
            A <= 0 ? A = 0 : A > x.width - B && (A = x.width - B), M <= 0 ? M = 0 : M > x.height - y && (M = x.height - y), m.left = A + "px", m.top = M + "px";
          }
          return !1;
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, m.moveFlag = !1;
        };
      }
    }, a = (o) => {
      if (e.lockScroll) {
        const { hasScroll: n, width: p } = m.scrollbar;
        n && o && (document.body.style.overflow = "hidden", document.body.style.paddingRight = p + "px"), !o && n && (document.body.style.overflow = "", document.body.style.paddingRight = "");
      }
    };
    return ne(() => {
      me(() => {
        e.appendToBody && s.value && document.body.appendChild(s.value), e.lockScroll && (m.scrollbar = ht(!0));
      });
    }), be(() => {
      e.appendToBody && s.value.parentNode && s.value.parentNode.removeChild(s.value), f && window.clearInterval(f);
    }), (o, n) => (h(), Z(ke, { name: o.animation }, {
      default: te(() => [
        se($("div", {
          ref_key: "el",
          ref: s,
          class: O({
            [`${E(I)}-dialog-modal`]: !0,
            modal: !o.modal,
            center: o.center
          }),
          style: X({ zIndex: o.zIndex }),
          onClick: n[4] || (n[4] = (p) => w("modal"))
        }, [
          $("div", {
            ref_key: "dialogEl",
            ref: r,
            class: O({
              [E(I) + "-dialog"]: !0,
              [o.className]: o.className,
              [E(I) + "-dialog-isAlert"]: o.isAlert
            }),
            style: X({
              width: o.width,
              top: m.top,
              left: m.left,
              "transition-duration": m.moveFlag ? "0s" : ""
            }),
            onClick: n[3] || (n[3] = ie(() => {
            }, ["stop"]))
          }, [
            o.showClose ? (h(), b("a", {
              key: 0,
              class: O(`${E(I)}-dialog-close icon-close`),
              onClick: n[0] || (n[0] = (p) => w("close"))
            }, null, 2)) : R("", !0),
            o.autoClose > 0 ? (h(), b("div", {
              key: 1,
              class: O(`${E(I)}-dialog-auto-close`)
            }, [
              $("span", null, G(o.closeTips.replace("S", m.autoTime.toString())), 1)
            ], 2)) : R("", !0),
            o.title || o.$slots.title ? (h(), b("div", {
              key: 2,
              ref_key: "headEl",
              ref: c,
              class: O({ [`${E(I)}-dialog-header`]: !0, move: o.move }),
              onMousedown: u
            }, [
              o.title ? (h(), b(Q, { key: 0 }, [
                fe(G(o.title), 1)
              ], 64)) : J(o.$slots, "title", { key: 1 })
            ], 34)) : R("", !0),
            o.content || o.$slots.default ? (h(), b("div", {
              key: 3,
              style: X({ height: o.height }),
              class: O({
                [E(I) + "-dialog-alert"]: o.isAlert,
                [E(I) + "-dialog-content"]: !0
              })
            }, [
              o.icon ? (h(), b("i", {
                key: 0,
                class: O([{ ["icon-" + d.value]: o.icon }])
              }, null, 2)) : R("", !0),
              o.content ? (h(), b("div", {
                key: 1,
                class: O([E(I) + "-dialog-text"])
              }, G(o.content), 3)) : J(o.$slots, "default", { key: 2 })
            ], 6)) : R("", !0),
            o.$slots.footer ? (h(), b("div", {
              key: 4,
              class: O(`${E(I)}-dialog-footer`)
            }, [
              J(o.$slots, "footer")
            ], 2)) : R("", !0),
            o.confirm || o.cancel ? (h(), b("div", {
              key: 5,
              class: O(`${E(I)}-dialog-footer`)
            }, [
              o.cancel ? (h(), Z(Oe, {
                key: 0,
                type: "cancel",
                onClick: n[1] || (n[1] = (p) => w("cancel"))
              }, {
                default: te(() => [
                  fe(G(o.cancel), 1)
                ]),
                _: 1
              })) : R("", !0),
              o.confirm ? (h(), Z(Oe, {
                key: 1,
                type: "primary",
                onClick: n[2] || (n[2] = (p) => w("confirm"))
              }, {
                default: te(() => [
                  fe(G(o.confirm), 1)
                ]),
                _: 1
              })) : R("", !0)
            ], 2)) : R("", !0)
          ], 6)
        ], 6), [
          [pe, m.visible]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dialog: Qe
}, Symbol.toStringTag, { value: "Module" })), Yo = /* @__PURE__ */ Y({
  __name: "Divider",
  props: {
    direction: { default: "" },
    borderStyle: { default: "solid" },
    contentPosition: { default: "center" },
    padding: {}
  },
  setup(i) {
    const l = i, t = W(() => {
      let e = "borderTopStyle", s = l.padding ? `0 ${l.padding}` : "";
      return l.direction === "vertical" && (e = "borderLeftStyle", s = l.padding ? `${l.padding} 0` : ""), {
        [e]: l.borderStyle,
        margin: s
      };
    });
    return (e, s) => (h(), b("div", {
      class: O([E(I) + "-divider", e.direction]),
      style: X(t.value)
    }, [
      $("span", {
        class: O(["divider-text", [e.contentPosition]])
      }, [
        J(e.$slots, "default")
      ], 2)
    ], 6));
  }
}), Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Divider: Yo
}, Symbol.toStringTag, { value: "Module" })), Go = /* @__PURE__ */ Y({
  __name: "Drawer",
  props: {
    modelValue: { type: Boolean, default: !1 },
    direction: { default: "right" }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: l }) {
    const t = i, e = j(t.modelValue);
    return ee(
      () => t.modelValue,
      (s) => {
        e.value = s;
      }
    ), ee(
      () => e.value,
      (s) => {
        l("update:modelValue", s);
      }
    ), (s, c) => (h(), Z(E(Qe), {
      ref: "dialogEl",
      modelValue: e.value,
      "onUpdate:modelValue": c[0] || (c[0] = (r) => e.value = r),
      animation: "slide",
      "class-name": `${E(I)}-drawer ${E(I)}-drawer-${s.direction}`
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
}), Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Drawer: Go
}, Symbol.toStringTag, { value: "Module" })), Zo = ["onClick"], Xo = ["onClick"], Qo = /* @__PURE__ */ $("span", { class: "arrow" }, null, -1), qo = /* @__PURE__ */ Y({
  __name: "Dropdown",
  props: {
    trigger: { default: "hover" },
    appendToBody: { type: Boolean },
    downClass: { default: "" },
    direction: { default: 0 }
  },
  emits: ["click", "toggle"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = Re(), c = j(), r = j(), m = re({
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
    de(`${I}DropdownItemClick`, (n) => {
      t("click", n);
    });
    const f = () => {
      e.trigger === "click" && (m.visible = !1);
    }, d = (n, p) => {
      m.visible || a("hover", p, !0, n), t("toggle", !0);
    }, v = () => {
      clearTimeout(m.timer), e.trigger === "hover" && (m.timer = window.setTimeout(() => {
        m.visible = !1;
      }, 500)), t("toggle", !1);
    }, k = (n, p) => {
      a("click", p, !m.visible, n), t("toggle", !m.visible);
    }, _ = () => {
      e.trigger === "hover" && (clearTimeout(m.timer), m.visible = !0, t("toggle", !0));
    }, w = () => {
      e.trigger === "hover" && (m.visible = !1, t("toggle", !1));
    }, u = (n) => {
      n.stopPropagation();
    }, a = (n, p, g, C) => {
      e.trigger === n && (s.trigger ? p && (m.visible = g) : p || (m.visible = g)), me(() => {
        m.position = o(C);
        const V = c.value.offsetWidth;
        if (m.dropdownStyle["--ak-dropdown-left"] = `${-V / 2}px`, m.visible && e.appendToBody) {
          const A = Le(), M = Be(r.value);
          m.dropdownStyle.left = M.left + M.width / 2 + "px", m.position === "top" ? (m.dropdownStyle.bottom = A.height - M.top + "px", m.dropdownStyle.top = "auto") : m.dropdownStyle.top = M.top + M.height + "px";
        }
      });
    }, o = (n) => {
      let p = "";
      if (e.direction === 1 && (p = "top"), e.direction === 0) {
        const g = document.documentElement.clientHeight || document.body.clientHeight, C = n.clientY, V = c.value.offsetHeight;
        V > g - C && C > V && (p = "top");
      }
      return p;
    };
    return ne(() => {
      document.addEventListener("click", f), e.appendToBody && (m.dropdownStyle.position = "fixed", document.body.appendChild(c.value));
    }), be(() => {
      document.removeEventListener("click", f), e.appendToBody && document.body.removeChild(c.value);
    }), l({ slideUp: f }), (n, p) => (h(), b("div", {
      ref_key: "el",
      ref: r,
      class: O({ [E(I) + "-dropdown"]: !0 }),
      onMouseenter: d,
      onMouseleave: v,
      onClick: ie(k, ["stop"])
    }, [
      J(n.$slots, "default"),
      n.$slots.trigger ? (h(), b("span", {
        key: 0,
        onMouseenter: p[0] || (p[0] = ie((g) => d(g, "slot"), ["stop"])),
        onClick: p[1] || (p[1] = ie((g) => k(g, "slot"), ["stop"]))
      }, [
        J(n.$slots, "trigger")
      ], 32)) : R("", !0),
      ce(ke, { name: "slide-toggle" }, {
        default: te(() => [
          se($("div", {
            ref_key: "dropdown",
            ref: c,
            class: O({
              [E(I) + "-dropdown-menu"]: !0,
              top: m.position,
              [n.downClass]: n.downClass
            }),
            style: X(m.dropdownStyle),
            onMouseenter: _,
            onMouseleave: w,
            onClick: ie(u, ["stop"])
          }, [
            J(n.$slots, "dropdown"),
            Qo
          ], 46, Xo), [
            [pe, m.visible]
          ])
        ]),
        _: 3
      })
    ], 42, Zo));
  }
}), en = /* @__PURE__ */ Y({
  __name: "DropdownItem",
  props: {
    disabled: { type: Boolean },
    className: {}
  },
  setup(i) {
    const l = i, t = le(`${I}DropdownItemClick`, ""), e = () => {
      l.disabled || t && t(this);
    };
    return (s, c) => (h(), b("li", {
      class: O({ disabled: s.disabled, className: s.className }),
      onClick: e
    }, [
      J(s.$slots, "default")
    ], 2));
  }
}), tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dropdown: qo,
  DropdownItem: en
}, Symbol.toStringTag, { value: "Module" })), ln = /* @__PURE__ */ Y({
  __name: "Icon",
  props: {
    icon: {}
  },
  emits: ["click"],
  setup(i, { emit: l }) {
    const t = () => {
      l("click");
    };
    return (e, s) => (h(), b("i", {
      class: O([E(I) + "-icon", "icon-" + e.icon]),
      onClick: t
    }, null, 2));
  }
}), on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Icon: ln
}, Symbol.toStringTag, { value: "Module" })), nn = { class: "default-placeholder" }, an = /* @__PURE__ */ $("div", { class: "default-error" }, "FAILED", -1), sn = ["src", "alt"], rn = {
  key: 0,
  class: "preview-loading"
}, un = {
  key: 1,
  class: "preview-error"
}, cn = ["src"], dn = { class: "control-tool" }, fn = /* @__PURE__ */ Y({
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
    const l = i, t = j("loading"), e = j("loading"), s = j(), c = j(), r = j(!1), m = j({}), f = W(() => {
      const {
        rotate: p = 0,
        scale: g = 1,
        x: C = 0,
        y: V = 0,
        duration: A = ""
      } = m.value;
      return {
        transform: `scale(${g}) rotate(${p}deg) translate(${C}px, ${V}px)`,
        transitionDuration: A
      };
    }), d = j(0), v = (p) => new Promise((g, C) => {
      if (!l.src)
        return C();
      const V = new Image();
      V.onload = function() {
        g();
      }, V.onerror = function() {
        C();
      }, V.src = p;
    }), k = () => {
      v(l.src).then(() => {
        t.value = "success";
      }).catch(() => {
        t.value = "error";
      });
    };
    ee(
      () => l.src,
      () => {
        k();
      }
    ), k();
    const _ = () => {
      l.previewSrcList && l.previewSrcList.length > 0 && (r.value = !0, d.value = 0, o());
    }, w = () => {
      r.value = !1, m.value = {};
    }, u = (p) => {
      var g;
      if (p)
        if (d.value < ((g = l.previewSrcList) == null ? void 0 : g.length) - 1)
          d.value++;
        else
          return;
      else if (d.value > 0)
        d.value--;
      else
        return;
      m.value = {}, o();
    }, a = (p) => {
      const { rotate: g = 0, scale: C = 1 } = m.value;
      switch (p) {
        case "out":
          m.value.scale = C / 1.4, m.value.scale <= 0 && (m.value.scale = 0);
          break;
        case "in":
          m.value.scale = C * 1.4, m.value.scale >= 10 && (m.value.scale = 10);
          break;
        case "default":
          m.value = {};
          break;
        case "rotateLeft":
          m.value.rotate = g - 90;
          break;
        case "rotateRight":
          m.value.rotate = g + 90;
          break;
      }
    }, o = () => {
      e.value = "loading", v(l.previewSrcList[d.value]).then(() => {
        e.value = "success";
      }).catch(() => {
        e.value = "error";
      });
    }, n = (p) => {
      let g = !1;
      if (c.value) {
        const C = p.pageX - (m.value.x || 0), V = p.pageY - (m.value.y || 0);
        g = !0, document.onmousemove = (A) => (g && (m.value.x = A.pageX - C, m.value.y = A.pageY - V, m.value.duration = "0s"), !1), document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, m.value.duration = "", g = !1;
        };
      }
    };
    return ne(() => {
      me(() => {
      });
    }), be(() => {
    }), (p, g) => (h(), b("div", {
      class: O({ [E(I) + "-image"]: !0, border: p.border }),
      style: X({ "border-radius": p.radius })
    }, [
      t.value === "loading" ? J(p.$slots, "placeholder", { key: 0 }, () => [
        $("div", nn, [
          ce($e, {
            "model-value": !0,
            background: "none"
          })
        ])
      ]) : t.value === "error" ? J(p.$slots, "error", { key: 1 }, () => [
        an
      ]) : (h(), b("img", {
        key: 2,
        src: p.src,
        alt: p.alt,
        style: X({ "object-fit": p.fit }),
        onClick: _
      }, null, 12, sn)),
      ce(ke, { name: "image-fade" }, {
        default: te(() => {
          var C, V;
          return [
            ((C = p.previewSrcList) == null ? void 0 : C.length) > 0 ? se((h(), b("div", {
              key: 0,
              class: O({ [E(I) + "-image-preview"]: !0 }),
              ref_key: "imagePreview",
              ref: s
            }, [
              $("i", {
                class: "icon-error",
                onClick: w
              }),
              $("i", {
                class: O(["icon-arrow-r prev", { disabled: d.value <= 0 }]),
                onClick: g[0] || (g[0] = (A) => u(0))
              }, null, 2),
              $("i", {
                class: O(["icon-arrow-r next", { disabled: d.value >= p.previewSrcList.length - 1 }]),
                onClick: g[1] || (g[1] = (A) => u(1))
              }, null, 2),
              e.value === "loading" ? (h(), b("div", rn, [
                ce($e, {
                  "model-value": !0,
                  background: "none",
                  zIndex: 10
                })
              ])) : e.value === "error" ? (h(), b("div", un, " FAILED ")) : ((V = p.previewSrcList) == null ? void 0 : V.length) > 0 ? (h(), b("img", {
                key: 2,
                class: "img",
                ref_key: "previewImg",
                ref: c,
                style: X(f.value),
                src: p.previewSrcList[d.value],
                onMousedown: n
              }, null, 44, cn)) : R("", !0),
              $("div", dn, [
                $("i", {
                  class: "icon-zoom-out",
                  onClick: g[2] || (g[2] = (A) => a("out"))
                }),
                $("i", {
                  class: "icon-zoom-in",
                  onClick: g[3] || (g[3] = (A) => a("in"))
                }),
                $("i", {
                  class: "icon-default",
                  onClick: g[4] || (g[4] = (A) => a("default"))
                }),
                $("i", {
                  class: "icon-rotateLeft",
                  onClick: g[5] || (g[5] = (A) => a("rotateLeft"))
                }),
                $("i", {
                  class: "icon-rotateRight",
                  onClick: g[6] || (g[6] = (A) => a("rotateRight"))
                })
              ])
            ], 2)), [
              [pe, r.value]
            ]) : R("", !0)
          ];
        }),
        _: 1
      })
    ], 6));
  }
}), pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Image: fn
}, Symbol.toStringTag, { value: "Module" })), gn = ["value", "disabled", "readOnly", "placeholder"], mn = { class: "number-control" }, hn = /* @__PURE__ */ Y({
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
    const t = i, e = (v) => {
      t.disabled || l("focus", v);
    }, s = (v) => {
      const { value: k } = v.target;
      t.max && !isNaN(t.max) && parseInt(k) > t.max && d(t.max), t.min && !isNaN(t.min) && parseInt(k) < t.min && d(t.min), l("blur", v);
    }, c = (v) => {
      console.log(v);
      const { value: k } = v.target;
      d(parseInt(k));
    }, r = (v) => {
      const k = t.modelValue || 0;
      if (!isNaN(k) && !t.disabled) {
        let _ = 0;
        v > 0 ? t.max && !isNaN(t.max) && k + t.step > t.max ? _ = t.max : _ = k + t.step : t.min && !isNaN(t.min) && k - t.step < t.min ? _ = t.min : _ = k - t.step;
        const w = t.step + "";
        if (w.indexOf(".") !== -1) {
          const u = w.substring(w.indexOf(".") + 1).length;
          _ = Number(_.toFixed(u));
        }
        d(_);
      }
    }, m = le(`${I}ControlChange`, ""), f = (v, k) => {
      m && m(v, k);
    }, d = (v) => {
      l("change", v), l("update:modelValue", v), f(v);
    };
    return ee(
      () => t.modelValue,
      (v) => {
        f(v, "mounted");
      }
    ), ne(() => {
      f(t.modelValue, "mounted");
    }), (v, k) => (h(), b("div", {
      class: O({ disabled: v.disabled, [E(I) + "-input-number"]: !0 })
    }, [
      $("input", {
        type: "text",
        value: v.modelValue,
        class: O({
          disabled: v.disabled,
          [E(I) + "-input-control"]: !0,
          [v.size || ""]: v.size
        }),
        disabled: v.disabled,
        readOnly: v.readOnly,
        placeholder: v.placeholder,
        onkeyup: "this.value=this.value.replace(/[^0-9\\.]/g,'')",
        onFocus: e,
        onBlur: s,
        onInput: c
      }, null, 42, gn),
      $("span", mn, [
        $("a", {
          class: O(["icon-minus", { disabled: v.min && v.modelValue <= v.min }]),
          onClick: k[0] || (k[0] = (_) => r(-1))
        }, null, 2),
        $("a", {
          class: O(["icon-plus", { disabled: v.max && v.modelValue >= v.max }]),
          onClick: k[1] || (k[1] = (_) => r(1))
        }, null, 2)
      ])
    ], 2));
  }
}), vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InputNumber: hn
}, Symbol.toStringTag, { value: "Module" })), yn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAC1CAIAAACWMSn+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ4RUIzNjkzMzY0RjExRThCNUJGRTEwNjNDRTdGNUUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ4RUIzNjk0MzY0RjExRThCNUJGRTEwNjNDRTdGNUUxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDhFQjM2OTEzNjRGMTFFOEI1QkZFMTA2M0NFN0Y1RTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDhFQjM2OTIzNjRGMTFFOEI1QkZFMTA2M0NFN0Y1RTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7RlIRdAAAQy0lEQVR42uyd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", bn = "data:image/gif;base64,R0lGODlhgACAAKIEAN3d3bu7u////5mZmf///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjZEQUY1MTZCQjcwMTFFNTk2MEZBMUI3OTA4NTc3QTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjZEQUY1MTdCQjcwMTFFNTk2MEZBMUI3OTA4NTc3QTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNkRBRjUxNEJCNzAxMUU1OTYwRkExQjc5MDg1NzdBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNkRBRjUxNUJCNzAxMUU1OTYwRkExQjc5MDg1NzdBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUFAAQALAAAAACAAIAAAAP/SLrc/jDKSau9OOvNu/+gJoxCaJ5oRpJp67rr+s50F7N1rk/3uP/ARa8ULOaGxuQMqWwSAFDAh9kZWAdOTTTqoW6u1+xlu7X1quCwmELmcryZtHotabtF56/cSp/Y7xhwFntzfRB/Ung3enuGbH+KMRqEWI5+kCp5GJSWj3aZi5uEnZ6fF4ISlJWkdZgWqBGcrJeuFLAPqrOlZKeaFLK6tG2vvqmjwbtlFbcNwMitpjzFEM7PEYiJEswKudbJgBDbBNXeh4jSobHk5Q/n6DjGjXQB9AEh7trw6vIfYB/19UDgC7EuTpoOABN+qAXiGBp+GRJK7MCwH0SDBSlI3Mhh/1gKORxUFcKwkeMGZS38MRKJsOREdtREjtTg0iRMbjJncqj5slxOnR54KvT2k48LoQCRFV01A2lAUkt/OKXXKWqQqY6KNkGaVeYanl0zJqkZ9uK8nobMOkoKFejNt3Djyp1Lt67du3jz6t3Lty/fpd18AnbIYHDgZ4arJT6sa7Ezx4QbQwa5YDJlpZZV4sxsFDNnpuM4C86MyzJM0n5Tq17NurXr17Bjy55Nu/YMzZZwV72clncfxmKAO2HZWyyQnGWN19Ba3GsQq8mJ64CemzkN6qywn9Au+edH60TBe+Ae3vt483PFi3I+ya3Fzhilx1ceUzfBgyvpl9a/H7+JyNDrATiIgAHad55v7ak1oIHzMRgSgQWClqCE+TlYmXubIbjSbxBeaGGG/tUlXGEKeljiTcp1COKHo524Inz1uViehg6o+CKMb+ln440UsqOjjDzKxd+OQeY4JJA89ugZjTGySCKS1RF5Y4RORslkkxjWKCWHUJpY5ZNX7tbllA1m2VyIF2zp5ZdZjDiBmkkuiWaaY65pZnB12qnkL3kaAaeeD83ZFptahvmmoNnduQ+idOKo2p+2kRnphIROKqmljTKKKZaObhqPop6aGOqoniYAACH5BAUFAAQALAoAAgBXADAAAAP/SLrc/jA+QIG8OOs9K+VgKEqeN54oV1Zp63brK7/rN99nbeE8qPejgDCQ+qEESEFrOEQZR8kkisnM1U7R6InaHD1DWWmQK/ReRWGxiNz1nUFp9Zot+m7iyhSb6I7B4y57IXYZeC+CKm8ahoeIGoQSeHmNZIl+i4Aze3wZkBCSOI4Yng+MoXSdipGZPKIkqhGmragXpAyys7QRtgqgQAquMCUYuD2btbANvr/AuhCXsawQA9QDgc7CxNIP1dVL2EfbDd3kepUy4uPk5WNcM+kM6/LtbehZGPLzc2U8Whn5+pgJBBhQ4C+C6wwyQ8hOIRCG3RwehEhNYg+KFS3ywKjxEyLDjg8JggyZb+TEhiZJWkupIQEAIfkEBQUABAAsHwACAFcAMAAAA/9Iutz+K8gAq7046zbn/mCodZ1oniLpoWxbqZIrzwRM0fhp53y496KBcMD6nQBIQGs4RBlFySSKydTBjlGpido0PUFZbZAr9F6hYeSJ3AV9NWnxmJw6g+NLts++iSvzdG58cHgubEQfbxd+M4eII4OLjI16G4oVk5SVGZcPfn80h5aRmIU5opyknqanmxedDZk8qK+qsayztC+2C59AC7oQsAqyQI61KpK4xq7CJBjFvwTBDyXKYS4C2gIY1CjRIdvb3YEyyyDi6RfNLOca6fDkVTjYIvD3GfM5USb3+NLS/P0D2EPgQII4DMZDyEOhOoYJHY6DSEPiRIozLGrDWNEUIseICj/mCClypMCSBReiTLnRRAIAIfkEBQUABAAsPAACAEIAQgAAA/9INDz6MMpJq52t3c17zZknjhaokWhqMmk7ro4rb/Bsf+utR7Ub/IHdo5cCAoWLXNF43BFJzKbuKYpKb9SO9WrLcrZBofcCRiZN0K15XCmvlVo3kj2Rz+EbcPiNjlvNQ3gWdnwgflGAgX1kaokKdAp6jo+CdY2TkJKTlCGMf5uKMYOXLgCmADuEKKenOqSrrKw3ryKxtq5MKba7qVweu7ygG8DBwhXExcYSyLfKFMyxzhPQstIR1K3W19io2hDc3svQ4dPI5M/E58fN6uum7fDx8vP09fb3+Pn6+gL9/v8AAwI0JrCgwX+gDio0uGmhw4GTHkoU0HCiw4QWDxLMKFACQQIAIfkEBQUABAAsTgAKADAAVwAAA+xIurzzo8lJK4XQ6n1x5uDmfWEpjaSpoqlaspG7srIL1+aNh3C8c7qfKCi0EIsdFHKoXFaOTkYvmhxRJ9NrA3rlqgLggJG2C4efzZp5XcWo1+y2zwSvjx+yup2q3zv7fkiAcHyDZlGGh3+JYIWMjoZaiVoKg5QLgJcMgZqVZ52goaKjpKWmp6ipqioAra6vsLGwNbK1tq8ut7q2rLu+uCa/wgC9w7u5xre0ybKrzs/Q0dLT1NUyAtgCpdncotzf2p3g3+Lj5JTm4+jp4Frs7e7v3fHy2PT16/XhV/r7/Pj52JVLF4qgt3Oj5lFIAAAh+QQFBQAEACxOAB8AMABXAAAD6Ui63P5uyAGrvW1OzDvRoCdGYDiOZXqKqbpirftWsTyTtXbTub7jPcovE5QMgb0jMahEtpqPHBRSm/JM1qswy+16v+CweEwum8/cgHrNbrvbs7d8zl7R7/MTfg8f8f8BeoB7doN0cYZvaIuMjY6PkJGSkwoAlgBml5pjmp2YYJ6doKGiXaShpqeeXKqrrK2br7CWsrOps59ZuLkQAr4CL7gVv7/BsL3ExcanyMnAN8wPzsrQpdLTzzuxw9hi2L7e3WHf2V/fY+fj4urT4evm717k7s7o8V3p7PX6+2D5/u3oESPTzx64KQkAACH5BAUFAAQALDwAPABCAEIAAAP5SLrc/lCNSau9Nuodsf8VJ3Jg+Y3oY65Z6kps/L6xPLu1ec/5uf/AoHBILBqPyKRyyWw6n9CodEoIWAPU13WbHW2/2K4G/BVHyGCzA01WM9htdxVels/pV/sdH3bz83Z/VnqCRgCHADd/RIiIinhDjY07dJGSh0BslpeJmXURAqECHJyYQVwaoqKkpU+qqhulpkyvq7GtTbWhrLhLuqO8l7m6I7K0xCLGvsjJvUi/KLKdz8zNnErQ0cpH2drX1LUv20Xd3sLc1eaS6OHi40LlKe9B8fLfRPXqjuTpLuf87XZMYvdKj4N8dhDKUeiGoRqHDwsafABrYoMEACH5BAUFAAQALB8ATgBXADAAAAP/SLrc/jDKN+qYOOvNif1dKI7NZ15kqkqnub6w17pxHc6trWt4vv+Q3glIdAhpxeQRlCwuLU3lExUFTjWCrOAX6AZGT4xWq/N6wcfJeFwzm0lC9TrbdndVOMmcHLOf8UgQe3QTAIYAGH53K0wRg1uFh4aJilGPkBGSkhOKi0WPGJqHlH5Jl6GiiJydn4MZqaqrpUCgr6karD+1qKK4lTu7vJobuTWnGrDExTDBwpvKs8zNkb3Q0SvT1MMcyynZ2s/cvyrfEskd3SLl5rch6RzHHefo71iuIvP01x33+O0i40L0C5FPnxtva1IUNOiJBBuF/0a8qeJsFMUoCy/+yKhREwfHjjU+goQhcuSLaiaJhEupIAEAIfkEBQUABAAsCgBOAFcAMAAAA/9IutwuULhJq704t8i1/+DHjVJoniE5omxLqaQrt7A632Bt4zymx73g5LcSGhfEznGZjCyPTcgT2pxSiSeAFiAceAeZZHar7X2/Ph2KTMadz5dai711v71pJYtev93RcU4ufGUXAYcBGH94VgSEXIaIh4qLVo+QFZKSF4uMS48YmoiUf0+XoaKJnJ2fhBmpqqulRqCvqRqsQrWooriVQbu8mh65OKcasMTFM8HCm8qzzM2RvdDRg64fyR/Le9natyDdY3wh29y/3uXm4eLpJscg5+jvINPI7e7X9usm8/pv1vRjV81EPX5tUPwD6ElgIYX5DAJqRG0YRSsLLwrJqLESB8eOOD6CnCFypIyCJo0845EAACH5BAUFAAQALAIAPABCAEIAAAP1SCTc/vCpSau9mMbNXf7g1Y1caIJkKp2spb5CK0+wOt/1eO/5tv/AoHBILBqPyKRyyWw6n9CodEo9Aa6AqgzL1Zq44Kw3EwaPL+XwmZIurwlt9zquPtPN9jv2rd/n+3yAgXc7AYYBRnqFh4ZFdD+MjERtQZGHjnhAlpeYV0ObjSADowNSoIiipKNQp6gZqqpPpyGwpE6ttLWlTbO5tbygJ7q7S72+sEzGx7FKuMK6xcEsw83Ky7ZJ1terSNrbxEbeqb9H4uPI4eYf1OmbO+xF0jfwRPIz9PWRQPj5oT/8byYADEhgYECDbxCuUXiGYUN0BDEwSwAAIfkEBQUABAAsAgAKADAAbAAAA/9Iutz+S0gBq71tTsy70ponVuA2nkxpoqe6sqJLwa1Lj/KN23onzz1MLigcEi3GI4mnhCSbjic0Ip0SqtOfNcqEAL6AHpYABuuw5fSty0i7YeyFe84qVeZ0VMiCz0/7flCAb3+DZVuGh1aJZoWMiI+Qg1tygJSVeJdthJqbX52goaKjpKWmp6ipOgGsra6vsK8wsbS1rii2ubUnur2yI77BAbzCvbjFtrPIsarNzs/Q0dLT1M8D1wOj2Nug297Zl9/elOLfVuXiUOjpTevmSu7j8PHY6vTX7ffg8/RT9yzcKvRD8e6BOxjlIKC7kVChPBoLBdbTETFcQ4sXyWXcsq4pU0WN7DR95Ljx3EiTIUGmJLkSZUGML1nGdDnTX0maEz22VIlPW04LCQAAIfkECQUABAAsAAAAAAEAAQAAAwJICQA7", je = I + "-lazy-loading", it = I + "-lazy-error";
class rt {
  constructor(l) {
    this.isLoad = !1, this.loading = l.loading || bn, this.error = l.error || yn, this.fadeIn = l.fadeIn || !0, this.threshold = l.threshold || 0, this.imgSrc = "", this.container = "", this.el = "";
  }
  mounted(l, t) {
    const e = l.getAttribute("src");
    e && (this.loading = e);
    const s = l.getAttribute("data-error");
    s && (this.error = s), this.imgSrc = t.value || l.getAttribute("data-src"), this.container = t.arg, this.el = l, lt(l, je), l.getAttribute("src") || l.setAttribute("src", this.loading), me(() => {
      this.renderImg();
    });
  }
  renderImg() {
    const l = this.container ? document.getElementById(this.container) : window;
    this.inView(l) ? (this.loadImg().then((t) => {
      this.el.setAttribute("src", t), this.fadeIn && (this.el.style.opacity = 0, setTimeout(() => {
        this.el.style.opacity = 1, this.el.style.transition = "opacity 1s";
      }, 50)), Ne(this.el, je), Ne(this.el, it);
    }).catch(() => {
      this.el.setAttribute("src", this.error), Ne(this.el, je), lt(this.el, it);
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
    const e = this.el.getBoundingClientRect(), s = l === window ? { left: 0, top: 0 } : l.getBoundingClientRect(), c = l === window ? window.innerWidth : l.clientWidth, r = l === window ? window.innerHeight : l.clientHeight;
    return e.bottom > this.threshold + s.top && e.top + this.threshold < r + s.top && e.right > this.threshold + s.left && e.left + this.threshold < c + s.left && (t = !0), t;
  }
  bindEvent(l) {
    l.addEventListener("scroll", this.renderImg.bind(this), !1), l === window && window.addEventListener("resize", this.renderImg.bind(this), !1);
  }
  unBindEvent(l) {
    l.removeEventListener("scroll", this.renderImg.bind(this), !1), l === window && window.removeEventListener("resize", this.renderImg.bind(this), !1);
  }
}
const kn = {
  // @ts-ignore
  install(i, l = {}) {
    i.directive("lazy", {
      mounted(t, e) {
        new rt(l).mounted(t, e);
      },
      updated(t, e) {
        new rt(l).mounted(t, e);
      }
      // mounted: lazy.mounted.bind(lazy)
      // updated: lazy.update.bind(lazy),
      // unmounted: lazy.update.bind(lazy)
    });
  }
}, wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kn
}, Symbol.toStringTag, { value: "Module" })), $t = (i) => {
  const l = ft($e, i);
  if (i.el === document.body || !i.el) {
    const t = document.createElement("div");
    return document.body.appendChild(t), l.mount(t);
  } else
    return l.mount(i.el);
}, Cn = (i) => {
  const l = $t(i || {});
  return l && l.open(), l;
}, _n = (i) => {
  i.directive("loading", {
    mounted(l, t) {
      l.style.position = "relative";
      const e = l.getAttribute(`${I}-loading-text`) || "", s = l.getAttribute(`${I}-loading-spinner`) || "", c = l.getAttribute(`${I}-loading-background`) || "", r = l.getAttribute(`${I}-loading-zIndex`) || "";
      let m;
      t.modifiers.el && (m = document.body);
      const f = $t({
        text: e,
        spinner: s,
        background: c,
        lock: t.modifiers.lock,
        zIndex: parseInt(r),
        el: m || l
      });
      console.log("component"), console.log(f), t.value && f && f.open(), l.component = f;
    },
    updated(l, t) {
      t.value ? l.component.open() : l.component.close();
    }
  });
}, Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loading: Cn,
  vLoading: _n
}, Symbol.toStringTag, { value: "Module" })), Vn = /* @__PURE__ */ Y({
  __name: "Marquee",
  props: {
    width: {},
    height: {},
    speed: { default: 30 },
    direction: { default: "bottom" },
    step: { default: 1 }
  },
  setup(i) {
    const l = i, t = W(() => ({
      width: l.width,
      height: l.height,
      overflow: "hidden"
    })), e = re({
      left: 0,
      top: 0,
      duration: 0
    }), s = W(() => ["left", "right"].includes(l.direction)), c = W(() => {
      const d = l.step > 1 ? `transform ${e.duration}s` : "";
      return s.value ? {
        display: "flex",
        width: parseInt(l.width) * 2 + "px",
        transform: `translateX(${e.left}px)`,
        transition: d
        //transition: `transform ${state.transition}s`
      } : {
        transform: `translateY(${e.top}px)`,
        transition: d
        //transition: `transform ${state.transition}s`
      };
    }), r = j(), m = j(), f = () => {
      const d = r.value, v = m.value, k = () => {
        const w = v.offsetWidth, u = v.offsetHeight;
        switch (l.direction) {
          case "left":
            e.left + w <= 0 ? (e.left = 0, e.duration = 0) : (e.left = e.left - l.step, e.duration = 0.3);
            break;
          case "right":
            e.left >= 0 ? (e.left = -w, e.duration = 0) : (e.left = e.left + l.step, e.duration = 0.3);
            break;
          case "bottom":
            e.top >= 0 ? (e.top = -u, e.duration = 0) : (e.top = e.top + l.step, e.duration = 0.3);
            break;
          default:
            e.top + u <= 0 ? (e.top = 0, e.duration = 0) : (e.top = e.top - l.step, e.duration = 0.3);
        }
      };
      let _ = setInterval(k, l.speed);
      d.onmouseenter = function() {
        clearInterval(_);
      }, d.onmouseleave = function() {
        _ = setInterval(k, l.speed);
      };
    };
    return ne(() => {
      f();
    }), (d, v) => (h(), b("div", {
      ref_key: "container",
      ref: r,
      class: O([`marquess-${d.direction}`, "marquee-container"]),
      style: X(t.value)
    }, [
      $("div", {
        style: X(c.value),
        class: "inner-container"
      }, [
        $("div", {
          ref_key: "container1",
          ref: m,
          style: X({ display: s.value ? "flex" : "" })
        }, [
          J(d.$slots, "default")
        ], 4),
        $("div", {
          style: X({ display: s.value ? "flex" : "" })
        }, [
          J(d.$slots, "default")
        ], 4)
      ], 4)
    ], 6));
  }
}), Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Marquee: Vn
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
var ut;
(function(i) {
  i.pop = "pop", i.push = "push";
})(ut || (ut = {}));
var ct;
(function(i) {
  i.back = "back", i.forward = "forward", i.unknown = "";
})(ct || (ct = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var dt;
(function(i) {
  i[i.aborted = 4] = "aborted", i[i.cancelled = 8] = "cancelled", i[i.duplicated = 16] = "duplicated";
})(dt || (dt = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const $n = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Bn() {
  return le($n);
}
const In = /* @__PURE__ */ $("i", { class: "arrow" }, null, -1), An = ["innerHTML"], De = /* @__PURE__ */ Y({
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
    const e = i, s = j(), c = re({
      clearTime: 0,
      visible: !1,
      tooltipStyle: {}
    }), r = j(), m = j(!1);
    ee(
      () => e.disabled,
      (n) => {
        me(() => {
          !n && e.appendToBody && s.value && !m.value && (document.body.appendChild(s.value), m.value = !0);
        });
      }
    ), ne(() => {
      me(() => {
        e.always && (c.visible = !0, v()), e.trigger === "click" ? document.addEventListener("click", a, !1) : (r.value.addEventListener("mouseenter", k, !1), r.value.addEventListener("mouseleave", _, !1)), e.appendToBody && s.value && (document.body.appendChild(s.value), m.value = !0);
      });
    }), be(() => {
      e.trigger === "click" ? document.removeEventListener("click", a, !1) : (r.value.removeEventListener("mouseenter", k, !1), r.value.removeEventListener("mouseleave", _, !1)), e.appendToBody && s.value && document.body.removeChild(s.value);
    });
    const f = (n) => e.disabled ? !1 : e.content || n.content, d = (n) => n % 2 === 0 ? n : n + 1, v = () => {
      const n = Be(r.value), p = Le().width, g = e.y + 8, C = {
        maxWidth: e.maxWidth + "px"
      };
      if (e.appendToBody) {
        const A = Le().height - n.top + g + "px";
        switch (e.direction) {
          case "top-left":
            C.left = n.left + e.x + "px", C.bottom = A;
            break;
          case "top":
            C.transform = "translateX(-50%)", C.left = d(n.left + n.width / 2 + e.x) + "px", C.bottom = A;
            break;
          case "top-right":
            C.right = p - (n.left + n.width + e.x) + "px", C.bottom = A;
            break;
          case "left":
            C.right = p - (n.left - 8 + e.x) + "px", C.top = d(n.top + n.height / 2) + "px", C.transform = "translateY(-50%)";
            break;
          case "right":
            C.left = n.left + n.width + 8 + e.x + "px", C.top = d(n.top + n.height / 2) + "px", C.transform = "translateY(-50%)";
            break;
          case "bottom-left":
            C.left = n.left + e.x + "px", C.top = n.top + n.height + g + "px";
            break;
          case "bottom":
            C.left = d(n.left + n.width / 2 + e.x) + "px", C.transform = "translateX(-50%)", C.top = n.top + n.height + g + "px";
            break;
          case "bottom-right":
            C.right = p - (n.left + n.width + e.x) + "px", C.top = n.top + n.height + g + "px";
            break;
        }
      }
      c.tooltipStyle = Object.assign({}, e.style, C);
    }, k = () => {
      e.disabled || e.always || (v(), window.clearTimeout(c.clearTime), c.visible = !0, e.delay && s.value && (s.value.addEventListener("mouseenter", w, !1), s.value.addEventListener("mouseleave", u, !1)));
    }, _ = () => {
      c.clearTime = window.setTimeout(() => {
        c.visible = !1;
      }, e.delay);
    }, w = () => {
      window.clearTimeout(c.clearTime);
    }, u = () => {
      _(), s.value.removeEventListener("mouseenter", w, !1), s.value.removeEventListener("mouseleave", u, !1);
    }, a = (n) => {
      e.always || (n && r.value.contains(n.target) ? (v(), c.visible = !0) : c.visible = !1), t("click", c.visible);
    };
    return l({ close: () => {
      c.visible = !1;
    } }), (n, p) => (h(), b("span", {
      ref_key: "el",
      ref: r,
      class: O([`${E(I)}-tooltip-box`])
    }, [
      J(n.$slots, "default"),
      ce(ke, {
        name: `tooltip-${n.transition}`
      }, {
        default: te(() => [
          f(n.$slots) ? se((h(), b("div", {
            key: 0,
            ref_key: "tooltipEl",
            ref: s,
            class: O([`${E(I)}-tooltip`, n.direction, n.className]),
            style: X(c.tooltipStyle),
            onClick: p[0] || (p[0] = ie(() => {
            }, ["stop"]))
          }, [
            In,
            n.content ? (h(), b("span", {
              key: 0,
              innerHTML: n.content
            }, null, 8, An)) : J(n.$slots, "content", { key: 1 })
          ], 6)), [
            [pe, c.visible]
          ]) : R("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
}), xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tooltip: De
}, Symbol.toStringTag, { value: "Module" })), Ln = ["data-height"], On = ["onMouseenter", "onMouseleave", "onClick"], Dn = { class: "menu-title" }, En = { class: "name" }, Mn = {
  key: 0,
  class: "icon-arrow"
}, Pn = /* @__PURE__ */ Y({
  __name: "MenuLi",
  props: {
    items: {},
    itemUl: {},
    layer: { default: 0 }
  },
  emits: ["click", "select"],
  setup(i, { emit: l }) {
    const t = Bn(), e = le(`${I}MenuVisibleList`, []), s = le(`${I}MenuVisibleListChange`), c = le(`${I}MenuSelectKey`, ""), r = le(`${I}MenuSelectKeyChange`), m = le(`${I}MenuProps`, {}), f = (p) => {
      p.children && (p == null ? void 0 : p.children.length) > 0 && v(p, !0);
    }, d = (p) => {
      p.children && (p == null ? void 0 : p.children.length) > 0 && v(p, !1);
    }, v = (p, g) => {
      (m.trigger === "hover" && m.mode === "horizontal" || m.mode === "vertical" && m.collapse) && _(p, g);
    }, k = (p, g) => {
      p.disabled || ((m.trigger === "click" || m.mode === "vertical") && _(p, !e.value.includes(p.key)), p.children || (r && r(p.key), l("select", p), m.router && t.push(p.key)), l("click", p), g.stopPropagation());
    }, _ = (p, g) => {
      p.disabled || (g ? p.children && !e.value.includes(p.key) && s && s(p.key, g) : s && s(p.key, g));
    }, w = (p) => p && p.children ? p.children.length * m.liHeight + (p.childHeight || 0) : null, u = (p) => {
      l("select", p);
    }, a = (p) => {
      l("click", p);
    }, o = (p) => {
      const g = p.getAttribute("data-height");
      g && (p.style.height = g + "px", p.style.overflow = "hidden");
    }, n = (p) => {
      p.style.height = "", p.style.overflow = "";
    };
    return (p, g) => {
      const C = Ue("MenuLi", !0);
      return h(), Z(ke, {
        name: "menu",
        onBeforeEnter: o,
        onAfterEnter: n,
        onAfterLeave: n,
        onBeforeLeave: o
      }, {
        default: te(() => [
          se($("ul", {
            class: O({ ["layer-" + p.layer]: !0, "is-child": p.itemUl }),
            "data-height": w(p.itemUl)
          }, [
            (h(!0), b(Q, null, oe(p.items, (V) => (h(), b("li", {
              key: V.key,
              class: O({
                disabled: V.disabled,
                "is-down": E(e).includes(V.key),
                selected: V.key === E(c)
              }),
              onMouseenter: (A) => f(V),
              onMouseleave: (A) => d(V),
              onClick: (A) => k(V, A)
            }, [
              $("span", Dn, [
                ce(E(De), {
                  content: V.label,
                  direction: "right",
                  x: 15,
                  disabled: !(p.layer === 0 && !V.children && E(m).collapse)
                }, {
                  default: te(() => [
                    V.icon ? (h(), b("i", {
                      key: 0,
                      class: O(["icon", `icon-${V.icon}`])
                    }, null, 2)) : R("", !0)
                  ]),
                  _: 2
                }, 1032, ["content", "disabled"]),
                $("span", En, G(V.label), 1),
                V.children ? (h(), b("i", Mn)) : R("", !0)
              ]),
              V.children ? (h(), Z(C, {
                key: 0,
                items: V.children,
                itemUl: V,
                layer: p.layer + 1,
                onClick: a,
                onSelect: u
              }, null, 8, ["items", "itemUl", "layer"])) : R("", !0)
            ], 42, On))), 128))
          ], 10, Ln), [
            [pe, !p.itemUl || E(e).includes(p.itemUl.key)]
          ])
        ]),
        _: 1
      });
    };
  }
}), Rn = /* @__PURE__ */ Y({
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
    de(`${I}MenuProps`, t);
    const e = j(t.openKeys);
    de(`${I}MenuVisibleList`, e), de(`${I}MenuVisibleListChange`, (f, d) => {
      if (d)
        e.value.push(f);
      else {
        const v = e.value.indexOf(f);
        e.value.splice(v, 1);
      }
    });
    const s = j(t.selectedKey);
    de(`${I}MenuSelectKey`, s), de(`${I}MenuSelectKeyChange`, (f) => {
      s.value = f;
    });
    const c = () => {
      e.value = [], s.value = "";
    }, r = (f) => {
      l("click", f);
    }, m = (f) => {
      l("select", f);
    };
    return ne(() => {
      t.trigger === "click" && t.mode === "horizontal" && document.addEventListener("click", c, !1);
    }), be(() => {
      t.trigger === "click" && t.mode === "horizontal" && document.removeEventListener("click", c, !1);
    }), (f, d) => (h(), b("div", {
      class: O({
        [`${E(I)}-menu`]: !0,
        [f.mode]: !0,
        [f.theme]: !0,
        collapse: f.collapse && f.mode === "vertical"
      })
    }, [
      ce(Pn, {
        items: f.items,
        onClick: r,
        onSelect: m
      }, null, 8, ["items"])
    ], 2));
  }
}), zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: Rn
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
  const t = ft(Qe, i), e = t.mount(l);
  return e.open(), e;
}, Nn = (i) => ze(i || {}), jn = (i, l) => (l || (l = {}), ze(
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
)), Hn = (i, l) => (l || (l = {}), ze(
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
)), Fn = (i, l) => (l || (l = {}), ze(
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
)), Wn = () => {
  const i = document.querySelectorAll(`.${I}-dialog-isAlert`);
  i && i.length > 0 && i.forEach((l) => {
    document.body.removeChild(l), document.body.style.overflow = "", document.body.style.paddingRight = "";
  });
}, Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alert: Hn,
  clear: Wn,
  confirm: jn,
  dialog: Nn,
  msg: Fn
}, Symbol.toStringTag, { value: "Module" })), Yn = {
  key: 0,
  class: "total"
}, Kn = { class: "page-list" }, Gn = { key: 0 }, Jn = ["title"], Zn = ["title", "onClick", "textContent"], Xn = { key: 1 }, Qn = ["title"], qn = { key: 2 }, ea = ["title"], ta = {
  key: 2,
  class: "show-jumper"
}, Bt = /* @__PURE__ */ Y({
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
    const t = i, e = re({
      active: t.current,
      // 当前页
      goToPage: t.current,
      // 快速跳到第几页
      selectChange: t.pageSize
    }), s = W(() => Math.ceil(t.total / e.selectChange)), c = W(() => t.hideSinglePage && s.value <= 1), r = W(() => {
      let w = 0, u = s.value - 1;
      const a = parseInt((t.pagerCount / 2).toString());
      if (e.active + a < s.value && (u = e.active + a), e.active >= t.pagerCount ? w = e.active - a : u = t.pagerCount > s.value ? s.value : t.pagerCount, s.value - e.active < t.pagerCount) {
        const p = s.value - t.pagerCount + 1;
        w = p > w ? w : p;
      }
      w < 2 && (w = 2), u >= s.value - 1 && (u = s.value - 1);
      const o = [];
      let n = w;
      for (; n <= u; )
        o.push(n), n++;
      return [o, w, u];
    }), m = W(() => parseInt(r.value[2].toString())), f = W(() => parseInt(r.value[1].toString())), d = W(() => {
      const w = [];
      return t.pageSizes.forEach((u) => {
        w.push({ label: `每页${u}条`, value: u });
      }), w;
    }), v = W(() => {
      let w = t.total.toString();
      return t.format && (w = t.total.toString().replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,")), w;
    });
    ee(
      () => e.selectChange,
      (w) => {
        e.active > s.value && (e.active = s.value), l("changePageSizes", w);
      }
    );
    const k = (w, u) => {
      if (u)
        return;
      let a = w;
      w > s.value && (a = s.value), w < 1 && (a = 1), e.active = a, e.goToPage = a, l("update:current", e.active), l("change", e.active);
    }, _ = () => {
      const w = e.goToPage;
      k(w);
    };
    return (w, u) => se((h(), b("div", {
      class: O(`${E(I)}-page`)
    }, [
      w.showTotal ? (h(), b("div", Yn, [
        fe(" 共"),
        $("span", null, G(v.value), 1),
        fe("条 ")
      ])) : R("", !0),
      w.pageSizes.length > 0 ? (h(), Z(E(Je), {
        key: 1,
        modelValue: e.selectChange,
        "onUpdate:modelValue": u[0] || (u[0] = (a) => e.selectChange = a),
        options: d.value
      }, null, 8, ["modelValue", "options"])) : R("", !0),
      $("div", Kn, [
        $("ul", null, [
          $("li", null, [
            $("a", {
              title: "上一页",
              class: O(["prev", { disabled: e.active === 1 }]),
              onClick: u[1] || (u[1] = (a) => k(e.active - 1, e.active === 1))
            }, "<", 2)
          ]),
          $("li", null, [
            $("a", {
              title: "1",
              class: O({ active: e.active === 1 }),
              onClick: u[2] || (u[2] = (a) => k(1, e.active === 1))
            }, "1", 2)
          ]),
          f.value > 2 ? (h(), b("li", Gn, [
            $("a", {
              title: `向前${w.pagerCount}页`,
              class: "jump-prev",
              onClick: u[3] || (u[3] = (a) => k(e.active - w.pagerCount))
            }, null, 8, Jn)
          ])) : R("", !0),
          (h(!0), b(Q, null, oe(r.value[0], (a, o) => (h(), b("li", { key: o }, [
            $("a", {
              title: a.toString(),
              class: O({ active: a === e.active }),
              onClick: (n) => k(a, a === e.active),
              textContent: G(a)
            }, null, 10, Zn)
          ]))), 128)),
          s.value > m.value + 1 ? (h(), b("li", Xn, [
            $("a", {
              title: `向后${w.pagerCount}页`,
              class: "jump-next",
              onClick: u[4] || (u[4] = (a) => k(e.active + w.pagerCount))
            }, null, 8, Qn)
          ])) : R("", !0),
          s.value > 1 ? (h(), b("li", qn, [
            $("a", {
              title: s.value + "",
              class: O({ active: e.active === s.value }),
              onClick: u[5] || (u[5] = (a) => k(s.value, e.active === s.value))
            }, G(s.value), 11, ea)
          ])) : R("", !0),
          $("li", null, [
            $("a", {
              title: "下一页",
              class: O(["next", { disabled: s.value <= e.active }]),
              onClick: u[6] || (u[6] = (a) => k(e.active + 1, s.value <= e.active))
            }, ">", 2)
          ])
        ])
      ]),
      w.showJumper ? (h(), b("div", ta, [
        fe(" 前往 "),
        ce(E(Ke), {
          modelValue: e.goToPage,
          "onUpdate:modelValue": u[7] || (u[7] = (a) => e.goToPage = a),
          modelModifiers: { number: !0 },
          maxlength: "5",
          onBlur: _
        }, null, 8, ["modelValue"]),
        fe(" 页 ")
      ])) : R("", !0)
    ], 2)), [
      [pe, !c.value]
    ]);
  }
}), la = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pagination: Bt
}, Symbol.toStringTag, { value: "Module" })), oa = { class: "content" }, na = { class: "footer" }, aa = /* @__PURE__ */ Y({
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
    const l = i, t = j(), e = W(() => l.className ? `${I}-popover ${l.className}` : `${I}-popover`), s = () => {
      t.value.close();
    }, c = () => {
      s(), l.callback && l.callback();
    };
    return (r, m) => (h(), Z(E(De), {
      ref_key: "el",
      ref: t,
      "class-name": e.value,
      trigger: r.trigger
    }, {
      content: te(() => [
        $("div", oa, [
          fe(G(r.content) + " ", 1),
          r.content ? R("", !0) : J(r.$slots, "content", { key: 0 })
        ]),
        $("div", na, [
          r.cancel ? (h(), Z(E(Oe), {
            key: 0,
            size: "mini",
            onClick: s
          }, {
            default: te(() => [
              fe(G(r.cancel), 1)
            ]),
            _: 1
          })) : R("", !0),
          r.confirm ? (h(), Z(E(Oe), {
            key: 1,
            size: "mini",
            type: "primary",
            onClick: c
          }, {
            default: te(() => [
              fe(G(r.confirm), 1)
            ]),
            _: 1
          })) : R("", !0)
        ])
      ]),
      default: te(() => [
        J(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["class-name", "trigger"]));
  }
}), sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Popover: aa
}, Symbol.toStringTag, { value: "Module" })), ia = {
  key: 0,
  class: "progress-text"
}, ra = {
  key: 0,
  class: "progress-text progress-fixed-text"
}, ua = { class: "custom-content" }, ca = {
  key: 0,
  class: "progress-text"
}, da = /* @__PURE__ */ Y({
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
    const l = i, t = re({
      percent: 0
    }), e = W(() => ({
      height: l.border ? l.border + "px" : "",
      width: t.percent + "%",
      background: l.borderColor,
      transition: `all ${l.duration / 1e3}s`
    })), s = () => {
      let r = -1;
      r = window.setInterval(() => {
        t.percent < l.modelValue && t.percent < 100 ? t.percent++ : clearInterval(r);
      }, l.duration / l.modelValue);
    }, c = (r) => {
      const m = {};
      return m.width = l.radius * 2 + "px", m.height = l.radius * 2 + "px", r === "pro" ? (m.borderWidth = `${l.border}px`, m.borderColor = l.color) : r === "circle" ? (m.left = `-${l.border}px`, m.top = `-${l.border}px`, t.percent > 50 ? m.clip = "rect(auto,auto,auto,auto)" : m.clip = `rect(0,${l.radius * 2}px,${l.radius * 2}px,${l.radius}px)`) : r === "left" ? (m.borderWidth = `${l.border}px`, m.borderColor = l.borderColor, m.clip = `rect(0, ${l.radius}px, ${l.radius * 2}px, 0px)`, m.transform = "rotate(" + 3.6 * t.percent + "deg)") : r === "right" && (m.borderWidth = `${l.border}px`, m.borderColor = l.borderColor, m.clip = `rect(0, ${l.radius * 2}px, ${l.radius * 2}px, ${l.radius}px)`), m;
    };
    return ne(() => {
      l.type === "circle" ? s() : l.type === "line" && setTimeout(() => {
        t.percent = l.modelValue;
      }, 10);
    }), (r, m) => (h(), b("div", {
      class: O([`${E(I)}-progress`, r.status])
    }, [
      r.type === "line" ? (h(), b("div", {
        key: 0,
        style: X({
          width: r.radius ? r.radius + "px" : "",
          background: r.color,
          minHeight: r.border ? r.border + "px" : ""
        }),
        class: O([r.className, E(I) + "-progress-line"])
      }, [
        J(r.$slots, "default"),
        $("span", {
          class: "progress-bar",
          style: X(e.value)
        }, [
          r.showText && r.followText ? (h(), b("span", ia, [
            $("b", null, G(t.percent), 1),
            fe("% ")
          ])) : R("", !0)
        ], 4),
        r.showText && !r.followText ? (h(), b("span", ra, [
          $("b", null, G(t.percent), 1),
          fe("% ")
        ])) : R("", !0)
      ], 6)) : r.type === "circle" ? (h(), b("div", {
        key: 1,
        style: X(c("pro")),
        class: O([r.className, E(I) + "-progress-circle"])
      }, [
        $("div", ua, [
          J(r.$slots, "default")
        ]),
        r.showText ? (h(), b("span", ca, [
          $("b", null, G(t.percent), 1),
          fe("% ")
        ])) : R("", !0),
        $("div", {
          style: X(c("circle")),
          class: "circle-circle"
        }, [
          $("span", {
            style: X(c("left")),
            class: "circle-left"
          }, null, 4),
          t.percent >= 50 ? (h(), b("span", {
            key: 0,
            style: X(c("right")),
            class: "circle-right"
          }, null, 4)) : R("", !0)
        ], 4)
      ], 6)) : R("", !0)
    ], 2));
  }
}), fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Progress: da
}, Symbol.toStringTag, { value: "Module" })), pa = ["onClick"], ga = ["innerHTML"], ma = ["onClick"], ha = ["innerHTML"], va = ["innerHTML"], ya = /* @__PURE__ */ Y({
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
    const t = i, e = j(), s = j(0), c = j(0), r = W(() => we(t.disabled) || !1), m = W(() => {
      if (t.showTooltip) {
        const M = a(s.value);
        return t.formatTooltip ? t.formatTooltip(M) : M;
      } else
        return "";
    }), f = W(() => {
      if (t.showTooltip) {
        const M = a(c.value);
        return t.formatTooltip ? t.formatTooltip(M) : M;
      } else
        return "";
    }), d = W(() => {
      if (_.value) {
        let M = s.value;
        return s.value > c.value && (M = c.value), {
          left: M + "%",
          width: Math.abs(c.value - s.value) + "%"
        };
      } else
        return {
          left: "0px",
          width: s.value + "%"
        };
    }), v = W(() => {
      const M = [];
      if (t.showStops) {
        const x = (t.max - t.min) / t.step;
        for (let y = 1; y < x; y++)
          M.push(y * 100 / x + "%");
      }
      return M;
    }), k = W(() => {
      const M = [];
      if (t.marks)
        for (const x in t.marks)
          M.push({
            label: t.marks[x],
            left: x + "%"
          });
      return M;
    }), _ = W(() => typeof t.modelValue == "object" && t.modelValue.length === 2), w = W(() => {
      var M;
      return (M = e == null ? void 0 : e.value) == null ? void 0 : M.offsetWidth;
    }), u = W(() => 100 / ((t.max - t.min) / t.step)), a = (M) => Math.round(
      (t.max - t.min) * M / 100 + t.min
    ), o = (M) => {
      if (r.value)
        return;
      const x = Be(e.value).left;
      let y = (M.pageX - x) / w.value * 100;
      y < 0 && (y = 0), y > 100 && (y = 100);
      const B = parseInt(Math.round(y / u.value).toString()), S = u.value * B;
      if (_.value) {
        const L = Math.abs(y - s.value), z = Math.abs(y - c.value);
        L < z ? s.value = S : c.value = S;
      } else
        s.value = S;
      if (Number(Math.abs(s.value - c.value).toFixed(4)) < Number(u.value.toFixed(4)) || s.value.toFixed(2) === c.value.toFixed(2))
        if (console.log("重叠点所在的位置"), s.value === 0)
          c.value = u.value;
        else {
          if (B < 1)
            return;
          s.value = u.value * (B - 1);
        }
      s.value > c.value ? n("change") : n();
    }, n = (M) => {
      let x = 0;
      if (_.value) {
        const y = a(s.value), B = a(c.value);
        x = [y, B], y > B && M === "change" && (x = [B, y]);
      } else
        x = a(s.value);
      l("update:modelValue", x), l("change", x);
    }, p = (M, x) => {
      if (r.value)
        return;
      const { offsetLeft: y } = x.target, B = x.pageX - y;
      document.onmousemove = (S) => {
        let L = (S.pageX - B) / w.value * 100;
        L < 0 && (L = 0), L > 100 && (L = 100), M === "left" ? s.value = L : c.value = L, t.trigger && o(S);
      }, document.onmouseup = (S) => {
        t.trigger || o(S), document.onmousemove = null, document.onmouseup = null;
      }, x.preventDefault(), x.stopPropagation();
    }, g = (M) => {
      M.preventDefault(), M.stopPropagation();
    }, C = (M) => (M - t.min) / (t.max - t.min) * 100, V = (M, x) => {
      let y = M;
      M < t.min && (y = t.min), M > t.max && (y = t.max);
      const B = C(y);
      x === "left" && (s.value = B), x === "right" && (c.value = B);
    }, A = () => {
      if (_.value) {
        let M = 0, x = 0;
        typeof t.modelValue == "object" && (M = t.modelValue[0], x = t.modelValue[1]), V(M, "left"), V(x, "right");
      } else
        V(t.modelValue, "left");
    };
    return ee(
      () => t.modelValue,
      () => {
        A();
      }
    ), ne(() => {
      A();
    }), (M, x) => (h(), b("div", {
      class: O({ [E(I) + "-slider"]: !0, disabled: r.value }),
      ref_key: "sliderEl",
      ref: e
    }, [
      $("div", {
        class: O(`${E(I)}-slider-runway`),
        onClick: o
      }, [
        $("span", {
          class: "slider-control",
          style: X({ left: s.value + "%" }),
          onMousedown: x[0] || (x[0] = ie((y) => p("left", y), ["stop"])),
          onClick: ie(g, ["stop"])
        }, [
          M.showTooltip ? (h(), b("i", {
            key: 0,
            innerHTML: m.value,
            class: "slider-tooltip"
          }, null, 8, ga)) : R("", !0)
        ], 44, pa),
        _.value ? (h(), b("span", {
          key: 0,
          class: "slider-control",
          onMousedown: x[1] || (x[1] = ie((y) => p("right", y), ["stop"])),
          onClick: ie(g, ["stop"]),
          style: X({ left: c.value + "%" })
        }, [
          M.showTooltip ? (h(), b("i", {
            key: 0,
            innerHTML: f.value,
            class: "slider-tooltip"
          }, null, 8, ha)) : R("", !0)
        ], 44, ma)) : R("", !0),
        $("span", {
          class: "slider-bar",
          style: X(d.value)
        }, null, 4),
        (h(!0), b(Q, null, oe(v.value, (y) => (h(), b("i", {
          class: "slider-stop",
          key: y,
          style: X({ left: y })
        }, null, 4))), 128)),
        (h(!0), b(Q, null, oe(k.value, (y, B) => (h(), b("span", {
          class: "slider-marks",
          key: B,
          style: X({ left: y.left })
        }, [
          $("i", {
            innerHTML: y.label,
            class: "slider-marks-text"
          }, null, 8, va)
        ], 4))), 128))
      ], 2)
    ], 2));
  }
}), ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Slider: ya
}, Symbol.toStringTag, { value: "Module" })), ka = Y({
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
}), wa = ["title", "colspan", "rowspan", "onMousemove"], Ca = { key: 1 }, _a = {
  key: 2,
  class: "caret-wrapper"
}, Sa = ["onClick"], Va = ["onClick"], Ta = ["onMousedown"], $a = /* @__PURE__ */ Y({
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
    const e = i, s = j(), c = le(`${I}GetColumns`, []), r = re({
      checkboxChecked: e.selectChecked.toString(),
      // columns: getColumns,
      sortBy: {}
    });
    ee(
      () => e.selectChecked,
      (a) => {
        r.checkboxChecked = a.toString();
      }
    );
    const m = (a) => c.value.filter((o) => o.type !== "extend" && o._layer === a), f = (a) => {
      if (a.title) {
        if (e.title)
          return a.label;
      } else
        return null;
      return null;
    }, d = (a, o) => {
      w("mouseMove", { evt: a, index: o });
    }, v = (a, o) => {
      w("mouseDown", { evt: a, index: o });
    }, k = (a) => {
      w("checkboxChange", !!a);
    }, _ = (a, o) => {
      e.sortSingle && (r.sortBy = {}), r.sortBy[a] = o, w("sortClick", r.sortBy);
    }, w = (a, o) => {
      t("event", a, o);
    };
    return l({ scrollTop: (a) => {
      a ? (s.value.style.transform = `translateY(${a}px) translateZ(100px)`, s.value.className = "transform") : (s.value.style.transform = "", s.value.className = "");
    } }), (a, o) => a.showHeader ? (h(), b("thead", {
      key: 0,
      ref_key: "el",
      ref: s
    }, [
      (h(!0), b(Q, null, oe(a.headMaxLayer, (n) => (h(), b("tr", {
        key: n,
        class: O({ drag: a.drag })
      }, [
        (h(!0), b(Q, null, oe(m(n), (p, g) => (h(), b("th", {
          key: g,
          class: O([p.fixed, p.className]),
          style: X({ textAlign: p.align }),
          title: f(p),
          colspan: p._colspan,
          rowspan: p._rowspan,
          onMousemove: (C) => d(C, g)
        }, [
          p.type === "selection" ? (h(), Z(E(Ve), {
            key: 0,
            modelValue: r.checkboxChecked,
            "onUpdate:modelValue": o[0] || (o[0] = (C) => r.checkboxChecked = C),
            class: O({ "some-select": a.selectChecked === 2 }),
            value: "1",
            onChange: k
          }, null, 8, ["modelValue", "class"])) : (h(), b(Q, { key: 1 }, [
            p.slots && p.slots.header ? (h(), Z(ka, {
              key: 0,
              data: p,
              index: g
            }, null, 8, ["data", "index"])) : (h(), b("span", Ca, G(p.label), 1)),
            p.sortBy ? (h(), b("span", _a, [
              $("i", {
                class: O(["sort-caret asc", { active: r.sortBy[p.prop] === "asc" }]),
                onClick: (C) => _(p.prop, "asc")
              }, null, 10, Sa),
              $("i", {
                class: O(["sort-caret desc", { active: r.sortBy[p.prop] === "desc" }]),
                onClick: (C) => _(p.prop, "desc")
              }, null, 10, Va)
            ])) : R("", !0)
          ], 64)),
          a.drag && p.drag !== !1 ? (h(), b("a", {
            key: 2,
            class: "drag-line",
            onMousedown: (C) => v(C, g)
          }, null, 40, Ta)) : R("", !0)
        ], 46, wa))), 128))
      ], 2))), 128))
    ], 512)) : R("", !0);
  }
}), Ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tag: Pe
}, Symbol.toStringTag, { value: "Module" })), He = Y({
  name: "TableTd",
  components: { Checkbox: Ve, Tooltip: De, Tag: Pe },
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
    const t = le(`${I}SetSelectedRows`), e = j(i.column.fixed), s = j(i.column.className);
    s.value && i.column.fixed ? e.value += " " + s.value : s.value && (e.value = s.value);
    let c = !1, r = 0, m = j(i.colspan).value;
    Object.keys(i.rowColSpan).length > 0 && (c = i.rowColSpan.rowSpan === 0 || i.rowColSpan.colSpan === 0, r = i.rowColSpan && i.rowColSpan.rowSpan, m = i.rowColSpan && i.rowColSpan.colSpan);
    const f = W(() => !i.column.title || i.column.tooltip === !0 || i.column.tooltip && i.column.tooltip.show ? null : i.title ? i.row[i.column.prop] : null), d = () => {
      l(
        "cellClick",
        i.row,
        i.column,
        i.index,
        i.columnIndex
      );
    }, v = j(i.checked);
    ee(
      () => i.checked,
      (u) => {
        v.value = u;
      }
    );
    const k = () => {
      l("toggleExtend");
    };
    function _(u) {
      return u.toString().padStart(2, "0");
    }
    const w = () => {
      const u = i.row[i.column.prop];
      if (i.column.slots && i.column.slots.default)
        return i.column.slots.default({
          row: i.row,
          index: i.index,
          extend: k,
          toggle: i.toggle,
          parentRow: i.parentRow
        });
      if (i.column.placeholder && u === "")
        return i.column.placeholder;
      if (i.column.formatter) {
        if (["date", "dateTime"].includes(i.column.formatter)) {
          if (u) {
            const a = new Date(u), o = `${a.getFullYear()}-${_(
              a.getMonth() + 1
            )}-${_(a.getDate())}`;
            switch (i.column.formatter) {
              case "dateTime":
                return `${o} ${_(a.getHours())}:${_(
                  a.getMinutes()
                )}:${_(a.getSeconds())}`;
              default:
                return o;
            }
          }
          return u;
        }
        return i.column.formatter(
          i.row,
          i.column,
          u,
          i.index
        );
      } else {
        if (i.column.type === "selection")
          return Se(Ve, {
            modelValue: v.value,
            onChange: (a) => {
              t(a, i.row, i.index), v.value = a;
            }
          });
        if (i.column.tooltip === !0 || i.column.tooltip && !i.column.tooltip.disabled) {
          let a = { content: u, direction: "top" };
          return i.column.tooltip.disabled && (a = Object.assign(a, i.column.tooltip)), Se(De, a, () => u);
        } else if (typeof i.column.tag == "object") {
          if (!u)
            return u;
          const a = Object.assign({ size: "small" }, i.column.tag, {
            type: i.column.tag.dict[u]
          });
          let o = u;
          return typeof i.column.dict == "object" && (o = i.column.dict[u]), Se(Pe, a, () => o);
        } else
          return i.column.type === "index" ? i.index + 1 : typeof i.column.dict == "object" ? u && i.column.dict[u] : u;
      }
    };
    return c ? () => [] : () => [
      Se(
        "td",
        {
          class: e.value,
          rowspan: r > 1 ? r : null,
          colspan: m > 1 ? m : null,
          style: "text-align:" + i.column.align,
          title: f.value,
          onClick: d
        },
        w()
      )
    ];
  }
}), Ia = ["onClick"], Aa = ["onCllick"], xa = /* @__PURE__ */ Y({
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
    const t = i, e = le(`${I}GetColumns`), s = re({
      toggle: {},
      // {1: true, 2: false, 0: false} // 对应每行展开或收起状态
      rowspanColspanList: []
    }), c = j(t.data), r = W(() => e.value.filter((u) => u.type === "extend" && !u.children)), m = W(() => e.value.filter((u) => u.type !== "extend" && !u.children)), f = (u) => s.toggle[u] === void 0 ? t.extendToggle : s.toggle[u], d = (u, a) => {
      (r.value.length > 0 || t.hasChild) && (typeof s.toggle[u] > "u" ? s.toggle[u] = !t.extendToggle : s.toggle[u] = !s.toggle[u], console.log(s.toggle[u]), s.toggle[u] && t.lazyLoad && t.lazyLoad(a, (o) => {
        o && o.length > 0 && (a.children = o);
      }));
    }, v = (u, a) => {
      l("rowClick", u, a);
    }, k = (u, a, o, n) => {
      l("cellClick", u, a, o, n);
    }, _ = W(() => {
      const u = [];
      return t.rowColSpan && t.rowColSpan.length > 0 && t.rowColSpan.forEach((a) => {
        if (u.push(a), a.colSpan && a.colSpan > 1)
          for (let o = 1; o < a.colSpan; o++)
            u.push({
              row: a.row,
              col: a.col + o,
              colSpan: 0
            });
        if (a.rowSpan && a.rowSpan > 1)
          for (let o = 1; o < a.rowSpan; o++)
            u.push({
              row: a.row + o,
              col: a.col,
              rowSpan: 0
            });
      }), u;
    }), w = (u, a) => {
      const o = _.value.filter((n) => n.row === u && a === n.col);
      return o.length > 0 ? o[0] : [];
    };
    return (u, a) => (h(), b("tbody", null, [
      (h(!0), b(Q, null, oe(c.value, (o, n) => (h(), b(Q, { key: n }, [
        $("tr", {
          class: O({
            warning: u.selectedRows.indexOf(o) !== -1,
            [o.trClass]: o.trClass
          }),
          onClick: (p) => v(o, n)
        }, [
          (h(!0), b(Q, null, oe(m.value, (p, g) => (h(), Z(He, {
            key: g,
            checked: u.selectedRows.indexOf(o) !== -1,
            column: p,
            row: o,
            index: n,
            "column-index": g,
            title: u.title,
            toggle: f(n),
            "row-col-span": w(n, g),
            "rowspan-colspan-list": s.rowspanColspanList,
            onToggleExtend: (C) => d(n, o),
            onCellClick: k
          }, null, 8, ["checked", "column", "row", "index", "column-index", "title", "toggle", "row-col-span", "rowspan-colspan-list", "onToggleExtend"]))), 128))
        ], 10, Ia),
        f(n) && r.value.length > 0 ? (h(), b("tr", {
          key: "tr" + n,
          class: O(["extend", { warning: u.selectedRows.indexOf(o) !== -1 }])
        }, [
          ce(He, {
            column: r.value[0],
            row: o,
            index: n,
            colspan: m.value.length
          }, null, 8, ["column", "row", "index", "colspan"])
        ], 2)) : R("", !0),
        u.hasChild ? (h(!0), b(Q, { key: 1 }, oe(o.children, (p, g) => se((h(), b("tr", {
          key: "child" + g,
          class: O([{ [o.trClass]: o.trClass }, "tr-child"]),
          onCllick: (C) => v(p, g)
        }, [
          (h(!0), b(Q, null, oe(m.value, (C, V) => (h(), Z(He, {
            key: "childTd" + V,
            column: C,
            row: p,
            index: g,
            "column-index": V,
            title: u.title,
            "parent-row": o,
            onCellClick: k
          }, null, 8, ["column", "row", "index", "column-index", "title", "parent-row"]))), 128))
        ], 42, Aa)), [
          [pe, f(n)]
        ])), 128)) : R("", !0)
      ], 64))), 128))
    ]));
  }
}), La = ["width"], Oa = { key: 0 }, Da = ["colspan"], Ea = {
  key: 0,
  class: "table-drag-line"
}, Ma = {
  key: 0,
  class: "table-page-space"
}, Pa = /* @__PURE__ */ Y({
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
    const e = i, s = Re(), c = j(), r = j(), m = j(), f = j([]), d = re({
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
    ee(
      () => e.height,
      (T) => {
        d.stateHeight = T;
      }
    );
    const v = W(() => {
      const T = d.selectedRows.length;
      return T === 0 ? 0 : T === e.data.length ? 1 : 2;
    }), k = (T, N = !0) => {
      const D = d.selectedRows.indexOf(T);
      N ? D === -1 && d.selectedRows.push(T) : D !== -1 && d.selectedRows.splice(D, 1);
    };
    ee(
      () => e.columns,
      () => {
        f.value = [], _();
      }
    );
    const _ = () => {
      w(e.columns, 0, ""), f.value.forEach((T) => {
        if (T.children) {
          const N = f.value.filter((D) => {
            var U;
            const F = (U = D._tProps) == null ? void 0 : U.split(",");
            return F && F.includes(T.prop) && !D.children;
          });
          (N == null ? void 0 : N.length) > 0 && (T._colspan = N.length);
        } else {
          const N = d.headMaxLayer - T._layer + 1;
          N > 1 && (T._rowspan = N);
        }
      });
    }, w = (T, N = 0, D = "") => {
      N++, d.headMaxLayer < N && (d.headMaxLayer = N), T.forEach((F) => {
        const U = F.prop || "", q = D ? D + "," + U : U;
        if (F.children)
          w(F.children, N, q);
        else if (Object.keys(s).length)
          for (const ae in s)
            F.prop === ae && (F.slots || (F.slots = {}), Object.assign(F.slots, { default: s[ae] })), F.prop + "-header" === ae && (F.slots || (F.slots = {}), Object.assign(F.slots, { header: s[ae] }));
        f.value.push({
          ...F,
          _layer: N,
          _tProps: q
        });
      });
    };
    e.columns && _(), de(`${I}GetColumns`, f), de(
      `${I}SetSelectedRows`,
      (T, N, D) => {
        const F = d.selectedRows.indexOf(N);
        if (T && F === -1 ? d.selectedRows.push(N) : d.selectedRows.splice(F, 1), d.ctrlIsDown) {
          if (d.ctrlRowIndex !== -1) {
            let U = d.ctrlRowIndex, q = D;
            d.ctrlRowIndex > D && (U = D, q = d.ctrlRowIndex);
            for (let ae = U; ae < q; ae++)
              k(e.data[ae], F === -1);
          }
          d.ctrlRowIndex = D;
        }
        t("selectClick", d.selectedRows, T, N, D);
      }
    );
    const u = () => {
      f.value.forEach((T) => {
        d.colWidth.push(T.width);
      });
    }, a = (T) => {
      T ? d.selectedRows = [...e.data] : d.selectedRows.splice(0, d.selectedRows.length);
    }, o = (T) => {
      me(() => {
        const N = Be(c.value), D = c.value.querySelector(".table-drag-line");
        D && (D.style.left = T.pageX - N.left + "px", D.style.height = N.height + "px");
      });
    }, n = () => {
      if (!e.drag)
        return;
      const T = c.value && c.value.querySelectorAll("th");
      d.colWidth = [], T.forEach((N) => {
        d.colWidth.push(N.offsetWidth + "px");
      });
    }, p = (T) => {
      e.drag && (d.isSetThWidth || (n(), d.isSetThWidth = !0), d.dragHead = {
        mouseDown: !0,
        oldX: T.evt.pageX,
        oldWidth: parseInt(d.colWidth[T.index].replace("px", "")) || 0,
        // 拖动前的单元格宽
        index: T.index
      }, o(T.evt), T.evt.preventDefault());
    }, g = (T) => {
      if (!e.drag)
        return;
      const N = T.evt;
      let D = d.dragHead.oldWidth + (N.pageX - d.dragHead.oldX);
      e.dragWidth[0] > 0 && D < e.dragWidth[0] || e.dragWidth[1] > 0 && D > e.dragWidth[1] || d.dragHead.mouseDown && (o(N), e.dragWidth[0] > 0 && D < e.dragWidth[0] && (D = e.dragWidth[0]), e.dragWidth[1] > 0 && D > e.dragWidth[1] && (D = e.dragWidth[1]), d.colWidth[d.dragHead.index] = D + "px");
    }, C = () => {
      e.drag && d.dragHead && d.dragHead.mouseDown && t("dragChange", d.colWidth), d.dragHead = {
        mouseDown: !1,
        oldX: "",
        oldWidth: "",
        index: ""
      };
    }, V = (T, N) => {
      switch (T) {
        case "checkboxChange":
          a(N), t("selectClick", d.selectedRows, N);
          break;
        case "mouseDown":
          p(N);
          break;
        case "mouseMove":
          g(N);
          break;
        case "sortClick":
          t("sortChange", N);
          break;
      }
    }, A = (T, N) => {
      t("rowClick", T, N);
    }, M = (T, N, D, F) => {
      t("cellClick", T, N, D, F);
    }, x = () => {
      m.value.sortBy = {};
    }, y = (T) => {
      T.key === "Control" && (d.ctrlIsDown = !1, d.ctrlRowIndex = -1);
    }, B = (T) => {
      T.key === "Control" && !d.ctrlIsDown && (d.ctrlIsDown = !0);
    }, S = () => {
      const T = c.value.scrollTop, N = c.value.scrollLeft;
      m.value.scrollTop(T);
      const D = c.value.querySelectorAll(".left");
      if (D.length > 0)
        if (N > 0)
          for (let F = 0, U = D.length; F < U; F++)
            D[F].style.transform = `translateX(${N}px) translateZ(90px)`, D[F].style.webkitTransform = `translateX(${N}px) translateZ(90px)`;
        else
          for (let F = 0, U = D.length; F < U; F++)
            D[F].style.transform = "";
      L(N);
    }, L = (T) => {
      const N = c.value.querySelectorAll(".right"), D = c.value.querySelector("table").offsetWidth, F = T - (D - c.value.clientWidth);
      if (N.length > 0)
        for (let U = 0, q = N.length; U < q; U++)
          N[U].style.transform = `translateX(${F}px)translateZ(90px)`, N[U].style.webkitTransform = `translateX(${F}px)translateZ(90px)`;
    }, z = () => {
      e.height && e.showHeader && c && c.value.addEventListener("scroll", S, !1), setTimeout(() => {
        L(0);
      }, 0);
    }, K = () => d.selectedRows, P = () => {
      const T = c.value.scrollTop, N = c.value.clientHeight, D = c.value.scrollHeight;
      let F = !1;
      T + N >= D - 3 && (F = !0), t("scroll", T, F, c.value);
    }, H = () => {
      if (!e.fixedBottomScroll)
        return;
      const T = c.value, N = r.value;
      let D = window.innerHeight;
      if (typeof e.fixedBottomScroll == "string") {
        const U = document.querySelector(e.fixedBottomScroll);
        U && (D = U.offsetHeight + 20, console.log(D));
      }
      const { top: F } = T.getBoundingClientRect();
      if (F > D)
        T.style.height = "unset", T.style.marginBottom = "unset";
      else {
        const U = Math.min(
          D - F,
          N.offsetHeight
        );
        T.style.minHeight = "60px", d.stateHeight = U + "px", T.style.marginBottom = N.offsetHeight - U + "px";
      }
    };
    return ne(() => {
      u(), window.addEventListener("keydown", B), window.addEventListener("keyup", y), e.drag && document.addEventListener("mouseup", C), e.height && c.value.addEventListener("scroll", P), me(() => {
        if (e.fixedBottomScroll) {
          if (typeof e.fixedBottomScroll == "string") {
            const T = document.querySelector(e.fixedBottomScroll);
            T && T.addEventListener("scroll", H);
          } else
            document.addEventListener("scroll", H);
          window.addEventListener("resize", H);
        }
        z(), H();
      });
    }), Ye(() => {
      window.removeEventListener("keydown", B), window.removeEventListener("keyup", y), e.drag && document.removeEventListener("mouseup", C), e.height && c.value && c.value.removeEventListener("scroll", P), e.fixedBottomScroll && (document.removeEventListener("scroll", H), window.removeEventListener("resize", H));
    }), l({ getSelectAll: K, clearSort: x, toggleRowSelection: k, toggleSelection: a }), (T, N) => (h(), b("div", null, [
      $("div", {
        ref_key: "el",
        ref: c,
        class: O({
          [E(I) + "-table"]: !0,
          [T.className]: T.className,
          "is-scroll": T.width || T.height
        }),
        style: X({
          width: T.width,
          height: d.stateHeight,
          overflowY: T.height ? "auto" : "",
          overflowX: T.width ? "auto" : ""
        })
      }, [
        $("table", {
          ref_key: "tableEl",
          ref: r,
          class: O({
            "no-stripe": !T.stripe,
            "no-border": !T.border,
            "no-hover": !T.hover,
            "no-ellipsis": !T.ellipsis,
            [T.className]: T.className
          })
        }, [
          $("colgroup", null, [
            (h(!0), b(Q, null, oe(d.colWidth, (D, F) => (h(), b("col", {
              key: F,
              width: D,
              class: O(`column${F}`)
            }, null, 10, La))), 128))
          ]),
          ce($a, {
            ref_key: "tableHeadEl",
            ref: m,
            drag: T.drag,
            title: T.title,
            "sort-single": T.sortSingle,
            "show-header": T.showHeader,
            "select-checked": v.value,
            "head-max-layer": d.headMaxLayer,
            onEvent: V
          }, null, 8, ["drag", "title", "sort-single", "show-header", "select-checked", "head-max-layer"]),
          T.data.length === 0 ? (h(), b("tbody", Oa, [
            $("tr", null, [
              $("td", {
                colspan: f.value.length,
                class: "empty"
              }, G(T.emptyText), 9, Da)
            ])
          ])) : (h(), Z(xa, {
            key: 1,
            data: T.data,
            "row-col-span": T.rowColSpan,
            "has-child": T.hasChild,
            "lazy-load": T.lazyLoad,
            "extend-toggle": T.extendToggle,
            title: T.title,
            "selected-rows": d.selectedRows,
            onRowClick: A,
            onCellClick: M
          }, null, 8, ["data", "row-col-span", "has-child", "lazy-load", "extend-toggle", "title", "selected-rows"]))
        ], 2),
        T.dragLine && T.drag && d.dragHead.mouseDown ? (h(), b("div", Ea)) : R("", !0)
      ], 6),
      Object.keys(T.pagination).length ? (h(), b("div", Ma)) : R("", !0),
      Object.keys(T.pagination).length > 0 ? (h(), Z(E(Bt), ue({
        key: 1,
        total: T.data && T.data.length
      }, T.pagination), null, 16, ["total"])) : R("", !0)
    ]));
  }
}), Ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Table: Pa
}, Symbol.toStringTag, { value: "Module" })), za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Transition: Xe
}, Symbol.toStringTag, { value: "Module" })), Na = {
  name: "NodeContent",
  props: {
    data: Object
  },
  render(i) {
    const l = le(`${I}TreeSlots`), t = le(`${I}PropsData`);
    return typeof l.default == "function" ? l.default({ node: i.data, data: t.dataList }) : null;
  }
}, ja = ["onClick"], Ha = { class: "tree-label" }, Fa = {
  key: 1,
  class: "lazy-loading"
}, Wa = /* @__PURE__ */ Y({
  __name: "TreeNode",
  props: {
    tid: {}
  },
  emits: ["toggle"],
  setup(i, { emit: l }) {
    const t = i, e = le(`${I}PropsData`), s = re({
      lazy: e.lazy,
      showCheckbox: e.showCheckbox,
      loadingId: ""
    }), c = W(() => e.dataList.filter((k) => k.tid === t.tid)), r = (k) => {
      s.loadingId || (k.open = !k.open, e.lazy && k.hasChild && (s.loadingId = k.id), l("toggle", k, () => {
        e.lazy && k.hasChild && (s.loadingId = "");
      }));
    }, m = (k) => typeof e.modelValue == "object" ? e.modelValue.indexOf(k.id) !== -1 : e.modelValue === k.id && k.id, f = (k) => {
      l("toggle", k);
    }, d = le(`${I}CheckboxChange`), v = (k) => {
      me(() => {
        d && d(k);
      });
    };
    return (k, _) => {
      const w = Ue("tree-node", !0);
      return h(), Z(Xe, null, {
        default: te(() => [
          $("ul", null, [
            (h(!0), b(Q, null, oe(c.value, (u) => (h(), b("li", {
              key: u.id
            }, [
              $("span", {
                class: O(["tree-box", { "has-child": u.hasChild, selected: m(u) }]),
                onClick: ie((a) => r(u), ["stop"])
              }, [
                $("i", {
                  class: O([{ "open-child": u.open, [`${E(I)}-icon`]: !0 }, "icon-down"])
                }, null, 2),
                s.showCheckbox ? (h(), Z(E(Ve), {
                  key: 0,
                  modelValue: u.checked,
                  "onUpdate:modelValue": (a) => u.checked = a,
                  class: O({ "some-select": u.someChecked }),
                  onClick: _[0] || (_[0] = ie(() => {
                  }, ["stop"])),
                  onChange: (a) => v(u)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onChange"])) : R("", !0),
                $("span", Ha, G(u.label), 1),
                s.lazy && u.hasChild ? (h(), b("span", Fa, [
                  (h(), Z($e, {
                    "model-value": u.id === s.loadingId,
                    key: u.id
                  }, null, 8, ["model-value"]))
                ])) : R("", !0),
                ce(Na, { data: u }, null, 8, ["data"])
              ], 10, ja),
              u.hasChild ? se((h(), Z(w, {
                key: u.id,
                tid: u.id,
                onToggle: f
              }, null, 8, ["tid"])), [
                [pe, u.open]
              ]) : R("", !0)
            ]))), 128))
          ])
        ]),
        _: 1
      });
    };
  }
}), Ua = /* @__PURE__ */ Y({
  __name: "Tree",
  props: {
    data: { default: () => [] },
    lazy: { type: Boolean },
    showCheckbox: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue", "change", "click"],
  setup(i, { expose: l, emit: t }) {
    const e = i, s = Re(), { modelValue: c } = xe(e), r = re({
      dataList: [],
      lazy: e.lazy,
      showCheckbox: e.showCheckbox,
      modelValue: e.modelValue
    });
    de(`${I}PropsData`, r), de(`${I}TreeSlots`, s);
    const m = (u) => {
      t("change", u), u.tid && f(u.tid), d(u.id, u.checked);
    }, f = (u) => {
      if (!u)
        return;
      let a = {}, o = !0, n = !1;
      r.dataList.forEach((p) => {
        p.id === u && (a = p), p.tid === u && (p.checked || (o = !1), p.checked && (n = !0));
      }), a.checked = o, o && (n = !1), a.someChecked = n, f(a.tid);
    }, d = (u, a) => {
      r.dataList.forEach((o) => {
        o.tid === u && (o.checked = a, o.hasChild && d(o.id, a));
      });
    };
    de(`${I}CheckboxChange`, m), ee(
      () => e.data,
      (u) => {
        k(u);
      }
    ), ee(
      () => e.modelValue,
      (u) => {
        r.modelValue = u;
      }
    );
    const v = (u) => u + "-" + Math.random().toString(36).substr(2, 8), k = (u, a) => {
      u && u.forEach((o) => {
        const n = JSON.parse(JSON.stringify(o));
        delete n.children;
        const p = o.children && o.children.length > 0 || e.lazy && o.hasChild !== !1;
        let g = {};
        e.showCheckbox && (g = { checked: !1, someChecked: !1 }), n.id || (n.id = v(o.label)), r.dataList.push(
          Object.assign({}, g, n, {
            tid: a,
            hasChild: p
          })
        ), p && k(o.children, n.id);
      });
    };
    k(e.data);
    const _ = (u, a) => {
      if (e.lazy && u.hasChild !== !1 ? t("click", u, (o) => {
        u.isLoad = !0, u.hasChild = !0, a && a(!1);
        let n = {};
        e.showCheckbox && (n = { checked: !1 }), o.forEach((p) => {
          p.id || (p.id = v(p.label)), r.dataList.push(Object.assign({}, n, p, { tid: u.id }));
        });
      }) : t("click", u), typeof e.modelValue == "object") {
        const o = c.value && c.value, n = o.indexOf(u.id);
        n !== -1 ? o.splice(n, 1) : o.push(u.id), t("update:modelValue", o);
      } else
        t("update:modelValue", u.id);
    };
    return l({ getValue: (u) => {
      const a = [], o = [];
      return r.dataList.forEach((n) => {
        n.checked && (a.push({
          id: n.id,
          label: n.label
        }), o.push(n.id));
      }), u ? a : o;
    } }), (u, a) => (h(), b("div", {
      class: O(`${E(I)}-tree`)
    }, [
      ce(Wa, { onToggle: _ })
    ], 2));
  }
}), Ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tree: Ua
}, Symbol.toStringTag, { value: "Module" })), It = (i) => {
  let l = null;
  return window.URL !== void 0 ? l = window.URL.createObjectURL(i) : window.webkitURL !== void 0 && (l = window.webkitURL.createObjectURL(i)), l;
}, At = (i, l, t) => {
  const e = new FormData();
  if (e.append(l.name, i, i.name), l.data)
    for (const m in l.data)
      e.append(m, l.data[m]);
  const s = Fe.CancelToken.source(), c = s.token;
  t(s, "source");
  const r = {
    cancelToken: c,
    headers: Object.assign(
      { "Content-Type": "multipart/form-data" },
      l.headers
    ),
    timeout: l.timeout,
    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    onUploadProgress: (m) => {
      const f = m.loaded / m.total * 100 | 0;
      console.log(f), t(f, "loaded");
    }
  };
  Fe.post(l.action, e, r).then((m) => {
    console.log(m), t(m, "success");
  }).catch((m) => {
    console.log(m, "catch"), t(m, "catch");
  });
}, Ka = ["multiple", "accept", "name", "disabled"], Ga = {
  key: 1,
  class: "default-btn icon-plus"
}, Ja = {
  key: 1,
  class: "upload-list"
}, Za = { key: 0 }, Xa = ["src"], Qa = {
  key: 2,
  class: "status"
}, qa = ["onClick"], es = /* @__PURE__ */ Y({
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
    const e = i, s = Object.prototype.toString.call(e.modelValue) === "[object Object]", c = j(), r = re({
      tempFiles: s ? [e.modelValue] : e.modelValue || [],
      tempUpload: [],
      // 存储待上传文件，用于手动上传
      source: ""
    }), m = (g, C) => {
      t("change", g), e.multiple || (r.tempFiles = [], r.tempUpload = []);
      let V = g;
      if (C !== "drag" && (V = g.target && g.target.files), V)
        for (let A = 0; A < V.length; A++) {
          const M = v(V[A]);
          if (console.log(M), M.code) {
            if (!e.multiple) {
              t("error", M);
              return;
            }
          } else {
            let x;
            /image\/\w+/.test(V[A].type) && (x = It(V[A]));
            const y = V[A].size + (/* @__PURE__ */ new Date()).getTime().toString();
            if (e.limit && r.tempFiles.length >= e.limit)
              return;
            r.tempFiles.push({
              size: d(V[A].size),
              // 大小
              loaded: 0,
              // 上传进度
              name: V[A].name,
              url: x,
              // 预览用的src
              type: V[A].type,
              status: 0,
              // 上传状态，0等待上传，1正在上传，2成功，-1失败，由接口返回后修改
              id: y
            }), e.auto ? f(V[A], y) : r.tempUpload.push({ file: V[A], index: y });
          }
        }
      a();
    }, f = (g, C) => {
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
      let A = 0;
      r.tempFiles.forEach((M, x) => {
        M.id === C && (A = x);
      }), r.tempFiles[A].status = 1, At(g, V, (M, x) => {
        switch (x) {
          case "source":
            r.source = M;
            break;
          case "loaded":
            r.tempFiles[A].loaded = M;
            break;
          case "success":
            t("success", M, (y, B) => {
              r.tempFiles[A].status = B || 2, y && (r.tempFiles[A].url = y);
            }), n();
            break;
          case "error":
            t("error", M), r.tempFiles[A].status = -1, n();
            break;
        }
      });
    }, d = (g) => {
      if (g === 0)
        return "0B";
      const C = 1024, V = ["B", "KB", "MB", "GB"], A = Math.floor(Math.log(g) / Math.log(C));
      return (g / Math.pow(C, A)).toPrecision(3) + V[A];
    }, v = (g) => {
      let C = {
        code: 0,
        msg: ""
      };
      const V = g.name, A = V.substr(V.length - 3, 3).toLocaleLowerCase();
      e.format && (e.format.toLocaleLowerCase().indexOf(A) !== -1 || (C = { code: 2, msg: "只支持上传类型为：" + (e.format ? e.format.toString() : "") }));
      const M = g.size;
      return M && M && e.maxSize > e.maxSize * 1024 && (C = { code: 1, msg: "超出上传限制" }), C;
    }, k = (g) => {
      g.preventDefault(), m(g.dataTransfer.files, "drag");
    }, _ = (g) => {
      g.preventDefault();
    }, w = () => {
      r.source && (r.source.cancel("cancel upload"), n());
    }, u = (g) => {
      t("remove", r.tempFiles[g]), r.tempFiles.splice(g, 1), a();
    }, a = () => {
      e.multiple ? t("update:modelValue", r.tempFiles) : t("update:modelValue", r.tempFiles[0] || {});
    }, o = () => {
      e.auto || r.tempUpload.forEach(async (g) => {
        await f(g.file, g.index);
      });
    }, n = () => {
      c.value.value = "";
    }, p = (g) => {
      let C = "";
      switch (g.status) {
        case 0:
          C = "待上传";
          break;
        case 1:
          C = "正在上传" + g.loaded + "%";
          break;
        case 2:
          C = "上传成功";
          break;
        case -1:
          C = "上传失败";
          break;
      }
      return C;
    };
    return l({ upload: o, cancelRequest: w }), (g, C) => (h(), b("div", {
      class: O({
        [`${E(I)}-upload`]: !0,
        disabled: g.disabled,
        ["upload-" + g.listType]: g.listType
      })
    }, [
      g.limit && g.limit <= r.tempFiles.length ? R("", !0) : (h(), b("label", {
        key: 0,
        class: O(["upload-file", { "drag-file": g.drag }]),
        onDragover: _,
        onDrop: k
      }, [
        $("input", {
          ref_key: "inputEl",
          ref: c,
          style: { display: "none" },
          type: "file",
          multiple: g.multiple,
          accept: g.accept,
          name: g.name,
          disabled: g.disabled,
          onChange: m
        }, null, 40, Ka),
        g.$slots.default ? J(g.$slots, "default", { key: 0 }) : (h(), b("i", Ga))
      ], 34)),
      g.showFileList ? (h(), b("div", Ja, [
        $("ul", null, [
          (h(!0), b(Q, null, oe(r.tempFiles, (V, A) => (h(), b("li", {
            key: V.url,
            class: O(["status-" + (V.status || "")])
          }, [
            g.listType === "text" ? (h(), b("span", Za, G(V.name), 1)) : (h(), b("img", {
              key: 1,
              src: V.url,
              alt: ""
            }, null, 8, Xa)),
            V.status !== void 0 ? (h(), b("span", Qa, [
              $("b", null, G(p(V)), 1),
              V.status === 1 ? (h(), b("i", {
                key: 0,
                class: "progress",
                style: X({ width: V.loaded + "%" })
              }, null, 4)) : R("", !0)
            ])) : R("", !0),
            $("i", {
              class: "icon-del",
              onClick: (M) => u(A)
            }, null, 8, qa)
          ], 2))), 128))
        ])
      ])) : R("", !0)
    ], 2));
  }
}), ts = { class: "select-area-tips" }, ls = ["onMousedown"], os = /* @__PURE__ */ $("div", { class: "box-line box-line-1" }, null, -1), ns = /* @__PURE__ */ $("div", { class: "box-line box-line-2" }, null, -1), as = /* @__PURE__ */ $("div", { class: "box-line box-line-3" }, null, -1), ss = /* @__PURE__ */ $("div", { class: "box-line box-line-4" }, null, -1), is = ["width", "height"], rs = ["width", "height"], us = { class: "crop-btn" }, cs = {
  key: 0,
  class: "progress"
}, ds = /* @__PURE__ */ Y({
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
    const t = i, e = j(), s = j(), c = j(), r = j(), m = j(), f = re({
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
    }), d = W(() => {
      const { height: y, width: B, left: S, top: L } = f.controlBox;
      return {
        height: y + "px",
        width: B + "px",
        left: S + "px",
        top: L + "px",
        position: "absolute",
        cursor: "move"
      };
    }), v = W(() => (f.drawImg.width / f.imgRealWidth).toFixed(2)), k = () => {
      s.value.click();
    }, _ = (y) => {
      const B = y.target;
      if (B && B.files && B.files[0]) {
        f.fileName = B.files[0].name;
        const S = It(B.files[0]);
        w(S, B.files[0]);
      }
    }, w = (y, B) => {
      const S = new Image();
      S.crossOrigin = "Anonymous", S.onload = (L) => {
        const z = S.height, K = S.width, P = t.boxHeight, H = t.boxWidth;
        f.imgRealWidth = S.width;
        let T = L.target.fileSize;
        if (B && B.size && (T = B.size), console.log("imgSize"), console.log(T), T && T && t.maxSize > t.maxSize * 1024) {
          A(1);
          return;
        }
        if (B && !/^(image\/jpeg|image\/png|image\/jpg)$/i.test(B.type)) {
          A(3);
          return;
        }
        let D;
        z < P && K < H ? D = 1 : K / z <= H / P ? D = P / z : D = H / K, f.drawImg = {
          img: S,
          // 规定要使用的图像、画布或视频
          x: (H - K * D) / 2,
          // 在画布上放置图像的 x 坐标位置
          y: (P - z * D) / 2,
          // 在画布上放置图像的 y 坐标位置
          width: K * D,
          // 要使用的图像的宽度
          height: z * D
          // 要使用的图像的高度
        }, u();
      }, S.src = y, a();
    }, u = () => {
      if (f.drawImg.img) {
        const y = c.value, B = y.getContext("2d");
        B.clearRect(0, 0, y.width, y.height), B.drawImage(
          f.drawImg.img,
          f.drawImg.x,
          f.drawImg.y,
          f.drawImg.width,
          f.drawImg.height
        );
      }
    }, a = () => {
      let { width: y, height: B, left: S, top: L } = f.controlBox;
      S < 0 && (S = 0), L < 0 && (L = 0), S + y > t.boxWidth && (S = t.boxWidth - y), L + B > t.boxHeight && (L = t.boxHeight - B), f.controlBox.left = S, f.controlBox.top = L;
      const z = r.value, K = z.getContext("2d");
      K.fillStyle = "rgba(0,0,0,0.6)", K.clearRect(0, 0, z.width, z.height), K.fillRect(0, 0, z.width, z.height), K.clearRect(S, L, y, B);
    }, o = (y) => {
      let B = !0;
      if (B) {
        const S = f.controlBox.left, L = f.controlBox.top, z = y.pageX - S, K = y.pageY - L;
        document.onmousemove = (P) => {
          console.log("_controlBoxonmousemove");
          const H = P.pageX - z, T = P.pageY - K;
          f.controlBox.left = H, f.controlBox.top = T, a();
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, B = !1;
        };
      }
    }, n = (y, B) => {
      let S = !0;
      if (S) {
        const L = y.pageX, z = y.pageY, { width: K, height: P, left: H, top: T } = f.controlBox;
        document.onmousemove = (N) => {
          const D = N.pageX - L, F = N.pageY - z;
          let U = K, q = P, ae = H, ge = T;
          const ve = t.imgWidth / t.imgHeight, he = t.imgHeight / t.imgWidth;
          switch (B) {
            case "leftUp":
              U = K - D, t.fixedScale ? (q = U * he, ge = T - (q - P)) : (q = P - F, ge = T + F), ae = H + D;
              break;
            case "leftCenter":
              U = K - D, ae = H + D, t.fixedScale && (q = U * he);
              break;
            case "leftDown":
              U = K - D, ae = H + D, t.fixedScale ? q = U * he : q = P + F;
              break;
            case "topCenter":
              q = P - F, ge = T + F, t.fixedScale && (U = q * ve);
              break;
            case "downCenter":
              q = P + F, t.fixedScale && (U = q * ve);
              break;
            case "rightUp":
              U = K + D, t.fixedScale ? (q = U * he, ge = T - (q - P)) : (q = P - F, ge = T + F);
              break;
            case "rightCenter":
              U = K + D, t.fixedScale && (q = U * he);
              break;
            case "rightDown":
              U = K + D, t.fixedScale ? q = U * he : q = P + F;
              break;
          }
          U < t.imgWidth || q < t.imgHeight || (f.controlBox = {
            width: U,
            height: q,
            left: ae,
            top: ge
          }, a());
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, S = !1, console.log("onmouseup0000");
        };
      }
      y.stopPropagation();
    }, p = (y) => {
      let B = !0;
      if (B) {
        const S = y.pageX - f.drawImg.x, L = y.pageY - f.drawImg.y;
        document.onmousemove = (z) => {
          f.drawImg.x = z.pageX - S, f.drawImg.y = z.pageY - L, u();
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, B = !1;
        };
      }
    }, g = (y) => {
      if (f.drawImg.img) {
        let B;
        const S = y || window.event;
        S.wheelDelta ? B = -(S.wheelDelta / 40) : S.detail && (B = S.detail);
        const { x: L, y: z, height: K, width: P } = f.drawImg;
        f.drawImg.x = L + B * 3, f.drawImg.y = z + B * 3, f.drawImg.width = P - B * 9, f.drawImg.height = (P - B * 9) / (P / K), u();
      }
      return !1;
    }, C = () => {
      if (!f.drawImg.img) {
        A(2);
        return;
      }
      const y = new Image(), { left: B, top: S } = f.controlBox, L = f.controlBox.width, z = f.controlBox.height, K = t.imgWidth, P = t.imgHeight;
      y.onload = () => {
        const H = document.createElement("canvas");
        H.width = K, H.height = P;
        const T = H.getContext("2d");
        T && (T.clearRect(0, 0, K, P), T.drawImage(
          y,
          B,
          S,
          L,
          z,
          0,
          0,
          K,
          P
        ));
        const N = {
          fileName: f.fileName,
          // 上传文件名，如123.jpg
          name: t.name,
          // 文件域的name值
          action: t.action,
          headers: t.headers,
          data: t.data,
          timeout: t.timeout
        }, D = M(H.toDataURL("image/png", 1));
        At(D, N, V);
      }, y.src = c.value.toDataURL();
    }, V = (y, B) => {
      switch (B) {
        case "loaded":
          f.progress = y;
          break;
        case "success":
          l("success", y), x();
          break;
        case "catch":
          A(4, y), x();
          break;
      }
    }, A = (y, B) => {
      const S = { code: y, msg: "", data: "" };
      switch (y) {
        case 1:
          S.msg = "超出上传限制";
          break;
        case 2:
          S.msg = "请选择上传图片";
          break;
        case 3:
          S.msg = "请选择jpg、jpeg或png格式的图片";
          break;
        case 4:
          S.msg = "请求异常", S.data = B;
          break;
      }
      l("error", S);
    }, M = (y) => {
      const B = y.split(","), S = B[0].match(/:(.*?);/)[1], L = atob(B[1]);
      let z = L.length;
      const K = new Uint8Array(z);
      for (; z--; )
        K[z] = L.charCodeAt(z);
      const P = new Blob([K], { type: S });
      return P.lastModifiedDate = /* @__PURE__ */ new Date(), P.name = f.fileName, P;
    }, x = () => {
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
      }, m.value.reset();
    };
    return ne(() => {
      me(() => {
        (/Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel") === "mousewheel" ? e.value.onmousewheel = g : e.value.addEventListener("DOMMouseScroll", g);
      });
    }), Ye(() => {
      e.value && e.value.removeEventListener("DOMMouseScroll", g);
    }), (y, B) => (h(), b("div", {
      class: O(`${E(I)}-upload-crop`)
    }, [
      $("div", {
        ref_key: "mainCrop",
        ref: e,
        class: "main-crop",
        style: X({ width: y.boxWidth + "px", height: y.boxHeight + "px" })
      }, [
        se($("a", {
          href: "javascript:;",
          class: "select-img",
          style: X({ lineHeight: y.boxHeight + "px" }),
          onClick: k
        }, G(y.text[0]), 5), [
          [pe, !f.drawImg.img]
        ]),
        se($("div", {
          class: "control-box",
          style: X(d.value),
          onMousedown: o
        }, [
          $("div", ts, " w:" + G(parseInt(f.controlBox.width)) + " h:" + G(parseInt(f.controlBox.height)) + " (x:" + G(parseInt(f.controlBox.left)) + ",y:" + G(parseInt(f.controlBox.top)) + ",scale:" + G(v.value) + ") ", 1),
          (h(!0), b(Q, null, oe(f.controlBtnList, (S, L) => (h(), b("span", {
            key: L,
            class: O([S, "control-btn"]),
            onMousedown: (z) => n(z, S)
          }, null, 42, ls))), 128)),
          os,
          ns,
          as,
          ss
        ], 36), [
          [pe, f.drawImg.img !== null]
        ]),
        se($("canvas", {
          ref_key: "canvasSelectBox",
          ref: r,
          class: "canvas-crop",
          width: y.boxWidth,
          height: y.boxHeight,
          onMousedown: p
        }, null, 40, is), [
          [pe, f.drawImg.img]
        ]),
        se($("canvas", {
          ref_key: "canvas",
          ref: c,
          class: "canvas-crop-img",
          width: y.boxWidth,
          height: y.boxHeight
        }, null, 8, rs), [
          [pe, f.drawImg.img]
        ])
      ], 4),
      $("div", us, [
        y.text[1] ? (h(), b("a", {
          key: 0,
          href: "javascript:;",
          class: "crop-select",
          onClick: k
        }, G(y.text[1]), 1)) : R("", !0),
        $("a", {
          href: "javascript:;",
          class: "crop-upload",
          onClick: C
        }, G(y.text[2]), 1)
      ]),
      $("form", {
        ref_key: "formReset",
        ref: m
      }, [
        $("input", {
          ref_key: "inputFile",
          ref: s,
          type: "file",
          accept: "image/*",
          class: "image-file",
          onChange: _
        }, null, 544)
      ], 512),
      f.progress ? (h(), b("span", cs, [
        $("i", {
          style: X({ width: f.progress + "%" })
        }, null, 4)
      ])) : R("", !0)
    ], 2));
  }
}), fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ImgCrop: ds,
  Upload: es
}, Symbol.toStringTag, { value: "Module" }));
const ms = {
  // @ts-ignore
  install(i) {
    const l = /* @__PURE__ */ Object.assign({ "./autoForm/index.ts": Kl, "./backTop/index.ts": Xl, "./badge/index.ts": ql, "./breadcrumb/index.ts": oo, "./button/index.ts": io, "./carousel/index.ts": mo, "./cascader/index.ts": Vo, "./checkbox/index.ts": Kt, "./collapse/index.ts": Lo, "./colorPicker/index.ts": Wo, "./datePicker/index.ts": kl, "./dialog/index.ts": Uo, "./divider/index.ts": Ko, "./drawer/index.ts": Jo, "./dropdown/index.ts": tn, "./form/index.ts": Lt, "./formItem/index.ts": Rl, "./icon/index.ts": on, "./image/index.ts": pn, "./input/index.ts": Nt, "./inputNumber/index.ts": vn, "./lazy/index.ts": wn, "./loading/index.ts": Sn, "./marquee/index.ts": Tn, "./menu/index.ts": zn, "./message/index.ts": Un, "./pagination/index.ts": la, "./popover/index.ts": sa, "./progress/index.ts": fa, "./radio/index.ts": Wt, "./select/index.ts": Sl, "./selectDown/index.ts": sl, "./slider/index.ts": ba, "./switch/index.ts": Tl, "./table/index.ts": Ra, "./tabs/index.ts": Wl, "./tag/index.ts": Ba, "./textarea/index.ts": xl, "./timePicker/index.ts": Dl, "./timeSelect/index.ts": Ml, "./tooltip/index.ts": xn, "./transition/index.ts": za, "./tree/index.ts": Ya, "./upload/index.ts": fs, "./util/index.ts": Bl });
    console.log(l), Object.keys(l).forEach((t) => {
      const e = l[t], s = ["./lazy", "./loading", "./message", "./util"], c = t.replace(/\/index.ts/, "");
      if (s.includes(c))
        switch (c) {
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
          i.component(I + r, e[r]);
        });
    });
  }
};
export {
  ms as default
};
