!function (e) {
  function t(t) {
    for (var r, c, i = t[0], s = t[1], u = t[2], p = 0, m = []; p < i.length; p++) c = i[p], Object.prototype.hasOwnProperty.call(a, c) && a[c] && m.push(a[c][0]), a[c] = 0;
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (l && l(t); m.length;) m.shift()();
    return o.push.apply(o, u || []), n()
  }

  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, i = 1; i < n.length; i++) {
        var s = n[i];
        0 !== a[s] && (r = !1)
      }
      r && (o.splice(t--, 1), e = c(c.s = n[0]))
    }
    return e
  }

  var r = {}, a = {0: 0}, o = [];

  function c(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {i: t, l: !1, exports: {}};
    return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
  }

  c.m = e, c.c = r, c.d = function (e, t, n) {
    c.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
  }, c.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) c.d(n, r, function (t) {
      return e[t]
    }.bind(null, r));
    return n
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return c.d(t, "a", t), t
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, c.p = "/";
  var i = window.webpackJsonp = window.webpackJsonp || [], s = i.push.bind(i);
  i.push = t, i = i.slice();
  for (var u = 0; u < i.length; u++) t(i[u]);
  var l = s;
  o.push([302, 1]), n()
}({
  11: function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
      return o
    })), n.d(t, "d", (function () {
      return c
    })), n.d(t, "c", (function () {
      return i
    })), n.d(t, "e", (function () {
      return s
    })), n.d(t, "b", (function () {
      return u
    }));
    n(413);
    var r = n(1), a = n.n(r), o = function (e) {
      return e.join(" ")
    }, c = function () {
      var e = !0, t = navigator.userAgent,
        n = !t.match(/(iPad).*OS\s([\d_]+)/) && (t.match(/(iPhone)/) || t.match(/(IOS)/)), r = t.match(/(Android)/),
        a = -1 != t.toLocaleLowerCase().indexOf("meet.one") || null;
      return null == (n || r || a) && (e = !1), e
    }, i = function () {
      var e = navigator.language || navigator.userLanguage;
      return "zh" != (e = e.substr(0, 2)) ? "en" : e
    }, s = function (e) {
      return new Promise((function (t) {
        return setTimeout(t, e)
      }))
    };

    function u(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = a.a.duration(e, "ms"), r = n.days(),
        o = n.hours(), c = n.minutes(), i = n.seconds();
      return t ? "".concat((24 * r + o).padLeft(2), ":").concat(c.padLeft(2), ":").concat(i.padLeft(2)) : "".concat(c.padLeft(2), ":").concat(i.padLeft(2))
    }

    Number.prototype.padLeft = function (e, t) {
      return Array(e - String(this).length + 1).join(t || "0") + this
    }
  }, 2: function (e, t, n) {
    e.exports = {
      button: "common_button_10TbJ",
      buttonLg: "common_buttonLg_1ulXZ",
      buttonForbid: "common_buttonForbid_3ij_K",
      buttonCancel: "common_buttonCancel_ZlLQR",
      lang: "common_lang_17IJP",
      iconCircle: "common_iconCircle_3tdIl",
      slogan: "common_slogan_2pnPD",
      layout: "common_layout_sMC4-",
      header: "common_header_aVXVA",
      headerLogo: "common_headerLogo_1YPPs",
      headerMenu: "common_headerMenu_3Pz4K",
      current: "common_current_1UFPC",
      headerUser: "common_headerUser_1Gfit",
      footer: "common_footer_Du4_K",
      bodyContainer: "common_bodyContainer_3eWyR",
      unlockWrap: "common_unlockWrap_GBTmM",
      waring: "common_waring_1QhHZ",
      lists: "common_lists_2aJDD",
      listsAction: "common_listsAction_1cvTV",
      listsItem: "common_listsItem_3u6_7",
      itemHd: "common_itemHd_1T7dy",
      listsHome: "common_listsHome_JOmPP",
      item: "common_item__3sFx",
      itemTime: "common_itemTime_5klLJ",
      itemTimeOver: "common_itemTimeOver_y5tHO",
      itemBd: "common_itemBd_3qJTb",
      Poolv2: "common_Poolv2_RmZOG",
      harvestWithdraw: "common_harvestWithdraw_3keOw",
      stats: "common_stats_2-Mqr",
      statsBd: "common_statsBd_2B5sn",
      statsTitle: "common_statsTitle_2i-vM",
      statsContent: "common_statsContent_3KyqD",
      rainbow: "common_rainbow_38hw0",
      pop: "common_pop_PVD8C",
      popMask: "common_popMask_2EB02",
      popContainer: "common_popContainer_kpFcp",
      popHd: "common_popHd_-XGzM",
      popSubTitle: "common_popSubTitle_IEBSc",
      myAccount: "common_myAccount_3nkPW",
      myAccountAsset: "common_myAccountAsset_1hfBH",
      warningTxt: "common_warningTxt_FTjGX",
      valueBlock: "common_valueBlock_3oKK1",
      valueBlockBalance: "common_valueBlockBalance_paJqn",
      loadingFarms: "common_loadingFarms_1Z-qT",
      turn: "common_turn_PoyhV",
      depositAvailable: "common_depositAvailable_uIA71",
      depositField: "common_depositField_3yZJF",
      depositFieldUnit: "common_depositFieldUnit_1q0at",
      depositFieldInput: "common_depositFieldInput_3qfl3",
      actions: "common_actions_3JWLj",
      addSubtract: "common_addSubtract_36mrl",
      rightTip: "common_rightTip_zATO7",
      rightTipContent: "common_rightTipContent_VCM9g",
      rightTipError: "common_rightTipError_1H-GW",
      en: "common_en_2u2y8",
      zh: "common_zh_2gKyo",
      langList: "common_langList_9tB_V",
      langListOpen: "common_langListOpen_tdsed",
      slowmist: "common_slowmist_2mJzg",
      protectWrap: "common_protectWrap_3Mo8H",
      protect: "common_protect_1_9b-"
    }
  }, 295: function (e, t) {
  }, 302: function (e, t, n) {
    e.exports = n(512)
  }, 348: function (e, t) {
  }, 410: function (e, t, n) {
    e.exports = {clearfix: "reset_clearfix_hppdO", clear: "reset_clear_11Tyy"}
  }, 412: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(11);

    function a(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(n), !0).forEach((function (t) {
          c(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function c(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    t.default = {
      namespace: "base",
      state: {
        lang: Object(r.c)(),
        pop: "",
        unlock: window && window.hasOwnProperty("tronWeb"),
        firstWarning: "",
        depositToken: "",
        withdrawToken: "",
        operateName: "",
        updateData: "",
        alertMsg: "",
        autoTime: 0
      },
      subscriptions: {
        setup: function (e) {
          var t = e.dispatch, n = (e.history, localStorage.getItem("FIRST_WARNING"));
          n && t({type: "saveFirstWarning", payload: {firstWarning: n}}), setTimeout((function () {
            t({type: "savePayload", payload: {unlock: window && window.hasOwnProperty("tronWeb")}})
          }), 1e3)
        }
      },
      effects: {
        syncServerTime: regeneratorRuntime.mark((function e(t, n) {
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                t.payload, n.put, n.call, n.select;
              case 2:
              case"end":
                return e.stop()
            }
          }), e)
        }))
      },
      reducers: {
        savePayload: function (e, t) {
          return o({}, e, {}, t.payload)
        }, openPop: function (e, t) {
          return o({}, e, {pop: t.payload.pop})
        }, switchAlertMsg: function (e, t) {
          return o({}, e, {alertMsg: t.payload})
        }, saveFirstWarning: function (e, t) {
          var n = t.payload.firstWarning;
          return localStorage.setItem("FIRST_WARNING", n), o({}, e, {firstWarning: n})
        }, saveAutoTime: function (e, t) {
          return o({}, e, {autoTime: t.payload.autoTime})
        }
      }
    }
  }, 414: function (e, t, n) {
    var r = {
      "./af": 145,
      "./af.js": 145,
      "./ar": 146,
      "./ar-dz": 147,
      "./ar-dz.js": 147,
      "./ar-kw": 148,
      "./ar-kw.js": 148,
      "./ar-ly": 149,
      "./ar-ly.js": 149,
      "./ar-ma": 150,
      "./ar-ma.js": 150,
      "./ar-sa": 151,
      "./ar-sa.js": 151,
      "./ar-tn": 152,
      "./ar-tn.js": 152,
      "./ar.js": 146,
      "./az": 153,
      "./az.js": 153,
      "./be": 154,
      "./be.js": 154,
      "./bg": 155,
      "./bg.js": 155,
      "./bm": 156,
      "./bm.js": 156,
      "./bn": 157,
      "./bn.js": 157,
      "./bo": 158,
      "./bo.js": 158,
      "./br": 159,
      "./br.js": 159,
      "./bs": 160,
      "./bs.js": 160,
      "./ca": 161,
      "./ca.js": 161,
      "./cs": 162,
      "./cs.js": 162,
      "./cv": 163,
      "./cv.js": 163,
      "./cy": 164,
      "./cy.js": 164,
      "./da": 165,
      "./da.js": 165,
      "./de": 166,
      "./de-at": 167,
      "./de-at.js": 167,
      "./de-ch": 168,
      "./de-ch.js": 168,
      "./de.js": 166,
      "./dv": 169,
      "./dv.js": 169,
      "./el": 170,
      "./el.js": 170,
      "./en-SG": 171,
      "./en-SG.js": 171,
      "./en-au": 172,
      "./en-au.js": 172,
      "./en-ca": 173,
      "./en-ca.js": 173,
      "./en-gb": 174,
      "./en-gb.js": 174,
      "./en-ie": 175,
      "./en-ie.js": 175,
      "./en-il": 176,
      "./en-il.js": 176,
      "./en-nz": 177,
      "./en-nz.js": 177,
      "./eo": 178,
      "./eo.js": 178,
      "./es": 179,
      "./es-do": 180,
      "./es-do.js": 180,
      "./es-us": 181,
      "./es-us.js": 181,
      "./es.js": 179,
      "./et": 182,
      "./et.js": 182,
      "./eu": 183,
      "./eu.js": 183,
      "./fa": 184,
      "./fa.js": 184,
      "./fi": 185,
      "./fi.js": 185,
      "./fo": 186,
      "./fo.js": 186,
      "./fr": 187,
      "./fr-ca": 188,
      "./fr-ca.js": 188,
      "./fr-ch": 189,
      "./fr-ch.js": 189,
      "./fr.js": 187,
      "./fy": 190,
      "./fy.js": 190,
      "./ga": 191,
      "./ga.js": 191,
      "./gd": 192,
      "./gd.js": 192,
      "./gl": 193,
      "./gl.js": 193,
      "./gom-latn": 194,
      "./gom-latn.js": 194,
      "./gu": 195,
      "./gu.js": 195,
      "./he": 196,
      "./he.js": 196,
      "./hi": 197,
      "./hi.js": 197,
      "./hr": 198,
      "./hr.js": 198,
      "./hu": 199,
      "./hu.js": 199,
      "./hy-am": 200,
      "./hy-am.js": 200,
      "./id": 201,
      "./id.js": 201,
      "./is": 202,
      "./is.js": 202,
      "./it": 203,
      "./it-ch": 204,
      "./it-ch.js": 204,
      "./it.js": 203,
      "./ja": 205,
      "./ja.js": 205,
      "./jv": 206,
      "./jv.js": 206,
      "./ka": 207,
      "./ka.js": 207,
      "./kk": 208,
      "./kk.js": 208,
      "./km": 209,
      "./km.js": 209,
      "./kn": 210,
      "./kn.js": 210,
      "./ko": 211,
      "./ko.js": 211,
      "./ku": 212,
      "./ku.js": 212,
      "./ky": 213,
      "./ky.js": 213,
      "./lb": 214,
      "./lb.js": 214,
      "./lo": 215,
      "./lo.js": 215,
      "./lt": 216,
      "./lt.js": 216,
      "./lv": 217,
      "./lv.js": 217,
      "./me": 218,
      "./me.js": 218,
      "./mi": 219,
      "./mi.js": 219,
      "./mk": 220,
      "./mk.js": 220,
      "./ml": 221,
      "./ml.js": 221,
      "./mn": 222,
      "./mn.js": 222,
      "./mr": 223,
      "./mr.js": 223,
      "./ms": 224,
      "./ms-my": 225,
      "./ms-my.js": 225,
      "./ms.js": 224,
      "./mt": 226,
      "./mt.js": 226,
      "./my": 227,
      "./my.js": 227,
      "./nb": 228,
      "./nb.js": 228,
      "./ne": 229,
      "./ne.js": 229,
      "./nl": 230,
      "./nl-be": 231,
      "./nl-be.js": 231,
      "./nl.js": 230,
      "./nn": 232,
      "./nn.js": 232,
      "./pa-in": 233,
      "./pa-in.js": 233,
      "./pl": 234,
      "./pl.js": 234,
      "./pt": 235,
      "./pt-br": 236,
      "./pt-br.js": 236,
      "./pt.js": 235,
      "./ro": 237,
      "./ro.js": 237,
      "./ru": 238,
      "./ru.js": 238,
      "./sd": 239,
      "./sd.js": 239,
      "./se": 240,
      "./se.js": 240,
      "./si": 241,
      "./si.js": 241,
      "./sk": 242,
      "./sk.js": 242,
      "./sl": 243,
      "./sl.js": 243,
      "./sq": 244,
      "./sq.js": 244,
      "./sr": 245,
      "./sr-cyrl": 246,
      "./sr-cyrl.js": 246,
      "./sr.js": 245,
      "./ss": 247,
      "./ss.js": 247,
      "./sv": 248,
      "./sv.js": 248,
      "./sw": 249,
      "./sw.js": 249,
      "./ta": 250,
      "./ta.js": 250,
      "./te": 251,
      "./te.js": 251,
      "./tet": 252,
      "./tet.js": 252,
      "./tg": 253,
      "./tg.js": 253,
      "./th": 254,
      "./th.js": 254,
      "./tl-ph": 255,
      "./tl-ph.js": 255,
      "./tlh": 256,
      "./tlh.js": 256,
      "./tr": 257,
      "./tr.js": 257,
      "./tzl": 258,
      "./tzl.js": 258,
      "./tzm": 259,
      "./tzm-latn": 260,
      "./tzm-latn.js": 260,
      "./tzm.js": 259,
      "./ug-cn": 261,
      "./ug-cn.js": 261,
      "./uk": 262,
      "./uk.js": 262,
      "./ur": 263,
      "./ur.js": 263,
      "./uz": 264,
      "./uz-latn": 265,
      "./uz-latn.js": 265,
      "./uz.js": 264,
      "./vi": 266,
      "./vi.js": 266,
      "./x-pseudo": 267,
      "./x-pseudo.js": 267,
      "./yo": 268,
      "./yo.js": 268,
      "./zh-cn": 269,
      "./zh-cn.js": 269,
      "./zh-hk": 270,
      "./zh-hk.js": 270,
      "./zh-tw": 271,
      "./zh-tw.js": 271
    };

    function a(e) {
      var t = o(e);
      return n(t)
    }

    function o(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      }
      return r[e]
    }

    a.keys = function () {
      return Object.keys(r)
    }, a.resolve = o, e.exports = a, a.id = 414
  }, 415: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(6), a = n(9);

    function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? o(Object(n), !0).forEach((function (t) {
          i(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function i(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    var s, u = function () {
      var e = {};
      return r.b.map((function (t) {
        e = c({}, e, i({}, t.symbol, 0))
      })), e
    };
    t.default = {
      namespace: "pool", state: {
        earnedAmount: u(), stakedAmount: u(), approveAmount: (s = {}, r.b.map((function (e) {
          s = c({}, s, i({}, e.symbol, "0"))
        })), s)
      }, subscriptions: {
        setup: function (e) {
          e.dispatch, e.history
        }
      }, effects: {
        fetchEarned: regeneratorRuntime.mark((function e(t, n) {
          var r, o, c, s, u, l, p;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload, o = r.token, c = r.poolAddr, s = r.decimal, u = n.put, l = n.call, n.select, e.prev = 2, e.next = 5, l(a.b.earned, c, s);
              case 5:
                return p = e.sent, e.next = 8, u({type: "saveEarnedAmount", payload: i({}, o, p)});
              case 8:
                e.next = 12;
                break;
              case 10:
                e.prev = 10, e.t0 = e.catch(2);
              case 12:
              case"end":
                return e.stop()
            }
          }), e, null, [[2, 10]])
        })), fetchStaked: regeneratorRuntime.mark((function e(t, n) {
          var r, o, c, s, u, l, p;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload, o = r.token, c = r.poolAddr, s = r.decimal, u = n.put, l = n.call, n.select, e.prev = 2, e.next = 5, l(a.b.staked, c, s);
              case 5:
                return p = e.sent, e.next = 8, u({type: "saveStakedAmount", payload: i({}, o, p)});
              case 8:
                e.next = 12;
                break;
              case 10:
                e.prev = 10, e.t0 = e.catch(2);
              case 12:
              case"end":
                return e.stop()
            }
          }), e, null, [[2, 10]])
        })), fetchApproveAmount: regeneratorRuntime.mark((function e(t, n) {
          var o, c, s, u, l, p, m;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                if (o = t.payload, c = o.token, s = o.poolAddr, u = o.tokenAddr, l = n.put, p = n.call, n.select, e.prev = 2, m = 0, "" != r.a[c].pairs) {
                  e.next = 10;
                  break
                }
                return e.next = 7, p(a.b.allowanceAmount, u, s);
              case 7:
                m = e.sent, e.next = 13;
                break;
              case 10:
                return e.next = 12, p(a.b.allowanceAmountPairs, u, s);
              case 12:
                m = e.sent;
              case 13:
                return e.next = 15, l({type: "saveApproveAmount", payload: i({}, c, m)});
              case 15:
                e.next = 20;
                break;
              case 17:
                e.prev = 17, e.t0 = e.catch(2);
              case 20:
              case"end":
                return e.stop()
            }
          }), e, null, [[2, 17]])
        })), harvestAndUnstake: regeneratorRuntime.mark((function e(t, n) {
          var r, o, c;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload.poolAddr, n.put, o = n.call, n.select, e.prev = 2, e.next = 5, o(a.b.harvestAndUnstake, r);
              case 5:
                return c = e.sent, e.abrupt("return", c);
              case 9:
                e.prev = 9, e.t0 = e.catch(2);
              case 11:
              case"end":
                return e.stop()
            }
          }), e, null, [[2, 9]])
        })), harvest: regeneratorRuntime.mark((function e(t, n) {
          var r, o, c;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload.poolAddr, n.put, o = n.call, n.select, e.prev = 2, e.next = 5, o(a.b.harvest, r);
              case 5:
                return c = e.sent, e.abrupt("return", c);
              case 9:
                e.prev = 9, e.t0 = e.catch(2);
              case 11:
              case"end":
                return e.stop()
            }
          }), e, null, [[2, 9]])
        })), approve: regeneratorRuntime.mark((function e(t, n) {
          var r, o, c, i, s, u;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                if (r = t.payload, o = r.tokenAddr, c = r.poolAddr, i = r.token, n.put, s = n.call, n.select, e.prev = 2, u = null, "" != i.pairs) {
                  e.next = 10;
                  break
                }
                return e.next = 7, s(a.b.approveMax, o, c);
              case 7:
                u = e.sent, e.next = 13;
                break;
              case 10:
                return e.next = 12, s(a.b.approveMaxPairs, o, c);
              case 12:
                u = e.sent;
              case 13:
                return e.abrupt("return", u);
              case 16:
                e.prev = 16, e.t0 = e.catch(2);
              case 18:
              case"end":
                return e.stop()
            }
          }), e, null, [[2, 16]])
        })), stake: regeneratorRuntime.mark((function e(t, n) {
          var r, o, c, i, s, u;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload, o = r.poolAddr, c = r.amount, i = r.tokenDecimal, n.put, s = n.call, n.select, e.prev = 2, e.next = 5, s(a.b.stake, o, Object(a.a)(c, i).toString(10));
              case 5:
                return u = e.sent, e.abrupt("return", u);
              case 9:
                e.prev = 9, e.t0 = e.catch(2);
              case 12:
              case"end":
                return e.stop()
            }
          }), e, null, [[2, 9]])
        })), withdraw: regeneratorRuntime.mark((function e(t, n) {
          var r, o, c, i, s, u;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload, o = r.poolAddr, c = r.amount, i = r.tokenDecimal, n.put, s = n.call, n.select, e.prev = 2, e.next = 5, s(a.b.withdraw, o, Object(a.a)(c, i).toString(10));
              case 5:
                return u = e.sent, e.abrupt("return", u);
              case 9:
                e.prev = 9, e.t0 = e.catch(2);
              case 12:
              case"end":
                return e.stop()
            }
          }), e, null, [[2, 9]])
        }))
      }, reducers: {
        savePayload: function (e, t) {
          return c({}, e, {}, t.payload)
        }, saveEarnedAmount: function (e, t) {
          var n = t.payload, r = c({}, e.earnedAmount, {}, n);
          return c({}, e, {earnedAmount: r})
        }, saveStakedAmount: function (e, t) {
          var n = t.payload, r = c({}, e.stakedAmount, {}, n);
          return c({}, e, {stakedAmount: r})
        }, saveApproveAmount: function (e, t) {
          var n = t.payload, r = c({}, e.approveAmount, {}, n);
          return c({}, e, {approveAmount: r})
        }
      }
    }
  }, 419: function (e, t) {
  }, 447: function (e, t) {
  }, 474: function (e, t) {
  }, 480: function (e, t) {
  }, 484: function (e, t) {
  }, 485: function (e, t) {
  }, 486: function (e, t) {
  }, 487: function (e, t) {
  }, 488: function (e, t) {
  }, 489: function (e, t) {
  }, 490: function (e, t) {
  }, 491: function (e, t) {
    function n(e) {
      var t = new Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t
    }

    n.keys = function () {
      return []
    }, n.resolve = n, e.exports = n, n.id = 491
  }, 492: function (e, t) {
  }, 511: function (e, t, n) {
    "use strict";
    n.r(t);
    var r, a, o = n(0), c = n.n(o), i = n(5), s = n(8), u = n(4), l = {
      "t.Change": "Chang'e",
      "t.Rules": "规则",
      "t.Home": "首页",
      "t.Warning": "警告",
      "t.Iunderstand": "我明白",
      "t.WarningDesc": '执行任何操作的时候，您需要安装 <a href="https://chrome.google.com/webstore/detail/tronlink%EF%BC%88%E6%B3%A2%E5%AE%9D%E9%92%B1%E5%8C%85%EF%BC%89/ibnejdfjmmkpcnlpebklmnkoeoihofec" target="_blank">TronLink</a>。',
      "t.UnlockWallet": "解鎖錢包",
      "t.Farms": "池子",
      "t.Stats": "统计",
      "t.MyWallet": "我的钱包",
      "t.Welcome": "所有月兔已经被捉光了.",
      "t.WelcomeDesc": "让你的月兔去帮你打工吧",
      "t.SelectAfarm": "所有月兔已经被捉光了.",
      "t.SelectAfarmDesc": '让你的月兔去帮你打工吧<p>Chang‘e：（<a href="https://change.moonrabbit.finance/" target="_blank">https://change.moonrabbit.finance/</a>）<p>KUTFARM（KUT）：（<a href="https://kut.finance/" target="_blank">https://kut.finance/</a>）</b>',
      "t.Deposit": "存款 {token}",
      "t.Withdraw": "出金 {token}",
      "t.Staked": "{token} 已质押",
      "t.Available": "{value} 可用",
      "t.Max": "最大值",
      "t.Confirm": "确认",
      "t.Cancel": "取消",
      "t.Stake": "质押",
      "t.EarnCarrot": "賺月兔",
      "t.Select": "选择",
      "t.Harvest": "收获",
      "t.HarvestWithdraw": "收获并解押",
      "t.Approve": "批准 {token}",
      "t.CarrotEarned": "賺月兔",
      "t.tip1": "The all basic pools are end of distribution",
      "t.tip2": "Harvest & Withdraw your token with those pool",
      "t.GRAPBalance": "月兔余额",
      "t.DevsVotes": "Devs Votese",
      "t.CurrentVotes": "Current Votes",
      "t.ProposalThresholdIs": "Proposal threshold is",
      "t.SetupVote": "Setup Vote",
      "t.ShareVotesToDevs": "Share votes To Devs",
      "t.SignOut": "登出",
      "t.MyAccount": "我的帳戶",
      "t.CarrotBalance": "月兔余额",
      "t.TotalSupply": "总供应量（已销毁170枚）",
      "t.LoadingFarms": "载入各池子中",
      "t.ComingSoon": "即将推出",
      "t.Statistics": "統計",
      "t.CurrentPrice": "目前的價格: {value}",
      "t.CRTAmount": "MRK 数量",
      "t.StartTime": "開始時間",
      "t.Length": "Length",
      "t.PoolInfo": "奖池信息",
      "t.PRICES": "價格",
      "t.STAKING": "抵押",
      "t.ThereAreTotal": "總有",
      "t.YouAreStaking": "你在抵押",
      "t.CRTREWARDS": "MRK 獎賞",
      "t.ClaimableRewards": "可索取獎賞",
      "t.Hourlyestimate": "每小時估算",
      "t.Dailyestimate": "每日估算",
      "t.Weeklyestimate": "每週估算",
      "t.HourlyROIinUSD": "美元每小時的投資回報率",
      "t.DailyROIinUSD": "美元每日的投資回報率",
      "t.WeeklROIinUSD": "美元每週的投資回報率",
      "t.ThereAreTotalDesc": "{total} {tokenSymbol}放到了MRK的{tokenSymbol}奖池中。",
      "t.YouAreStakingDesc": "{my} {tokenSymbol}（奖池的{ratio}％）。",
      "t.ENDED": "结束",
      "t.slowmist": '链安科技</br>安全审计',
      "t.protectTitle": "MRK 生态产品：",
      "t.protectDesc": 'Chang’e（CEB）<a href="https://change.moonrabbit.finance/" target="_blank">https://change.moonrabbit.finance/</a><P>KUTFARM（KUT）<a href="https://kut.finance/" target="_blank">https://kut.finance/</a><p>MoonRabbit.Finance MRK 已通过链安审计，<a href="/MRK.pdf" target="_blank">查看审计报告</a> 审计编号：202009211852<p>',
      "token.EarnPearl": "存款 {value}<br/>賺月兔",
      "token.EarnPearlIn": "存款 {value} 賺月兔",
      "token.USDT": "USDT",
      "token.TRX": "TRX",
      "token.JST": "JST",
      "token.USDJ": "USDJ ",
      "token.DZI": "DZI",
      "token.DZI-LP": "DZI-LP",
      "token.TAI": "TAI",
      "token.KEY": "KEY",
      "token.PEARL": "PEARL",
      "token.HT": "HT",
      "token.SUN": "SUN",
      "token.JFI": "JFI",
      "token.JST_TRX": "JST/TRX",
      "token.TAI_TRX": " TAI/TRX",
      "token.CRT_TRX": " MRK/TRX LP",
      "token.CEB_TRX": " CEB/TRX LP",
      "token.undefined": "",
      "token.undefined_DESC": "",
      "token.TUA_TRX": "TUA_TRX",
      "token.CEB_TRX_DESC": '存款 <a href="https://justswap.io/#/scan/detail/trx/TFLu6ZctS5G8RFPBsAMZWCe7wZZno7gUQR" target="_blank">CEB/TRX JUSTSWAP LP 令牌</a> 並賺取MRK',
      "token.MRK_TRX_DESC": '存款 <a href="https://justswap.io/#/scan/detail/trx/TRqJw3csFiyswCY7tYjVMpfk9jxYaWmPME" target="_blank">MRK/TRX JUSTSWAP LP 令牌</a> 並賺取MRK',
      "token.MRK_TRX_DESC2": '<br/><br/>在<a href="https://justswap.io/#/scan/detail/trx/TRqJw3csFiyswCY7tYjVMpfk9jxYaWmPME" target="_blank">JustSwap</a>中的MRK / TRX對中添加流動性。',
      "token.CEB_TRX_DESC2": '<br/><br/>在<a href="https://justswap.io/#/scan/detail/trx/TFLu6ZctS5G8RFPBsAMZWCe7wZZno7gUQR" target="_blank">JustSwap</a>中的CEB / TRX對中添加流動性。',
      "err.Enteramount": "輸入金額",
      "err.InsufficientSurplus": "余额不足",
      "t.Github": "开源",
      "t.Telegram": "电报",
      "t.Twitter": "推特",
      "t.Wechat": "微信",
      "token.SUN": "SUN",
      "token.MFI": "MFI",
      "token.MRK_TRX": "MRK/TRX",
    }, p = {
      "token.MRK_TRX": "MRK/TRX",
      "token.MFI": "MFI",
      "token.SUN": "SUN",
      "t.Change": "Chang'e",
      "t.Github": "OpenSource",
      "t.Telegram": "Telegram",
      "t.Twitter": "Twitter",
      "t.Wechat": "Wechat",
      "t.Rules": "Rules",
      "t.Home": "Home",
      "t.Warning": "Warning",
      "t.Iunderstand": "I understand",
      "t.WarningDesc": 'You need to install <a href="https://chrome.google.com/webstore/detail/tronlink%EF%BC%88%E6%B3%A2%E5%AE%9D%E9%92%B1%E5%8C%85%EF%BC%89/ibnejdfjmmkpcnlpebklmnkoeoihofec" target="_blank">TronLink</a>  to perform any action. ',
      "t.UnlockWallet": "Unlock Wallet",
      "t.Farms": "Pool",
      "t.Stats": "Stats",
      "t.MyWallet": "My Wallet",
      "t.Welcome": "All the Moon Rabbit have been caught.",
      "t.WelcomeDesc": "Let your Moon Rabbit go to work for you.",
      "t.SelectAfarm": "All the Moon Rabbit have been caught.",
      "t.SelectAfarmDesc": 'Let your Moon Rabbit go to work for you.<p>Chang‘e：（<a href="https://change.moonrabbit.finance/" target="_blank">https://change.moonrabbit.finance/</a>）<p>KUTFARM（KUT）：（<a href="https://kut.finance/" target="_blank">https://kut.finance/</a>）</b>',
      "t.Deposit": "Deposit {token}",
      "t.Withdraw": "Withdraw {token}",
      "t.Staked": "{token} Staked",
      "t.Available": "{value} Available",
      "t.Max": "Max",
      "t.Confirm": "Confirm",
      "t.Cancel": "Cancel",
      "t.Stake": "Stake",
      "t.EarnCarrot": "Earn MRK",
      "t.Select": "Select",
      "t.Harvest": "Harvest",
      "t.HarvestWithdraw": "Harvest & Withdraw",
      "t.Approve": "Approve {token}",
      "t.CarrotEarned": "MRK earned",
      "t.tip1": "The all basic pools are end of distribution",
      "t.tip2": "Harvest & Withdraw your token with those pool",
      "t.GRAPBalance": "MRK Balance",
      "t.DevsVotes": "Devs Votese",
      "t.CurrentVotes": "Current Votes",
      "t.ProposalThresholdIs": "Proposal threshold is",
      "t.SetupVote": "Setup Vote",
      "t.ShareVotesToDevs": "Share votes To Devs",
      "t.SignOut": "Sign out",
      "t.MyAccount": "My Account",
      "t.CarrotBalance": "MRK Balance",
      "t.TotalSupply": "Total Supply（170 destroyed）",
      "t.LoadingFarms": "Loading pools",
      "t.ComingSoon": "Coming Soon",
      "t.Statistics": "Statistics",
      "t.CurrentPrice": "Current Price",
      "t.CRTAmount": "MRK Amount",
      "t.StartTime": "Start Time",
      "t.Length": "Length",
      "t.PoolInfo": "Pool Info",
      "t.PRICES": "PRICES",
      "t.STAKING": "STAKING",
      "t.ThereAreTotal": "There are total",
      "t.YouAreStaking": "You are staking",
      "t.CRTREWARDS": "MRK REWARDS",
      "t.ClaimableRewards": "Claimable Rewards",
      "t.Hourlyestimate": "Hourly estimate",
      "t.Dailyestimate": "Daily estimate",
      "t.Weeklyestimate": "Weekly estimate",
      "t.HourlyROIinUSD": "Hourly ROI in USD",
      "t.DailyROIinUSD": "Daily ROI in USD",
      "t.WeeklROIinUSD": "Weekly ROI in USD",
      "t.ThereAreTotalDesc": "{total} {tokenSymbol} staked in MRK's {tokenSymbol} staking pool.",
      "t.YouAreStakingDesc": "{my} {tokenSymbol} ({ratio}% of the pool).",
      "t.ENDED": "ENDED",
      "t.slowmist": 'Beosin</br>Security audit',
      "t.protectTitle": "MRK Ecosystem Products:",
      "t.protectDesc": 'Chang’e（CEB）<a href="https://change.moonrabbit.finance/" target="_blank">https://change.moonrabbit.finance/</a><P>KUTFARM（KUT）<a href="https://kut.finance/" target="_blank">https://kut.finance/</a>',
      "token.EarnPearl": "Deposit {value}<br/>Earn MRK",
      "token.EarnPearlIn": "Deposit {value} and earn MRK",
      "token.USDT": "USDT",
      "token.TRX": "TRX",
      "token.JST": "JST",
      "token.USDJ": "USDJ ",
      "token.DZI": "DZI",
      "token.DZI-LP": "DZI-LP",
      "token.TAI": "TAI",
      "token.KEY": "KEY",
      "token.PEARL": "PEARL",
      "token.HT": "HT",
      "token.SUN": "SUN",
      "token.JFI": "JFI",
      "token.JST_TRX": "JST/TRX",
      "token.CRT_TRX": "MRK/TRX LP",
      "token.TAI_TRX": " TAI/TRX",
      "token.CEB_TRX": " CEB/TRX LP",
      "token.undefined": "",
      "token.undefined_DESC": "",
      "token.TUA_TRX": "TUA_TRX",
      "token.CEB_TRX_DESC": 'Deposit <a href="https://justswap.io/#/scan/detail/trx/TFLu6ZctS5G8RFPBsAMZWCe7wZZno7gUQR" target="_blank">CEB/TRX JUSTSWAP LP token</a> and earn MRK',
      "token.MRK_TRX_DESC": 'Deposit <a href="https://justswap.io/#/scan/detail/trx/TRqJw3csFiyswCY7tYjVMpfk9jxYaWmPME" target="_blank">MRK/TRX JUSTSWAP LP token</a> and earn MRK',
      "token.MRK_TRX_DESC2": '<br/><br/>Add liquidity to MRK/TRX pair in <a href="https://justswap.io/#/scan/detail/trx/TRqJw3csFiyswCY7tYjVMpfk9jxYaWmPME" target="_blank">JustSwap</a> to earn LP token.',
      "token.CEB_TRX_DESC2": '<br/><br/>Add liquidity to CEB/TRX pair in <a href="https://justswap.io/#/scan/detail/trx/TFLu6ZctS5G8RFPBsAMZWCe7wZZno7gUQR" target="_blank">JustSwap</a> to earn LP token.',
      "err.Enteramount": "Enter amount",
      "err.InsufficientSurplus": "Insufficient surplus"
    }, m = n(297), f = n.n(m), d = n(298), y = n.n(d);
    n(483);

    function b(e) {
      return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function v(e) {
      return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function k(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function g(e, t) {
      return (g = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function w(e) {
      return function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n
        }
      }(e) || function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }

    Object(u.c)([].concat(w(f.a), w(y.a)));
    var E = {};
    E.en = p, E.zh = l;
    var j, A, O = (r = Object(s.connect)((function (e) {
      var t = e.base;
      return {lang: t.lang, operateName: t.operateName, firstWarning: t.firstWarning, saveAutoTime: t.saveAutoTime}
    })), Object(i.withRouter)(a = r(a = function (e) {
      function t(e) {
        var n, r, a;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), r = this, a = v(t).call(this, e), (n = !a || "object" !== b(a) && "function" != typeof a ? k(r) : a).messageCb = function (e) {
          var t = k(n);
          if (e.data.message && "tabReply" == e.data.message.action) {
            var r = e.data.message.data.data;
            if (-1 != ["event Invalid transaction provided", "Confirmation declined by user"].indexOf(r)) return void t.switchAlertMsgHandel(r);
            r.txID;
            if ("" != t.props.operateName) {
              t.openPop("");
              var a = setTimeout((function () {
                t.updateDataHandel(t.props.operateName), clearTimeout(a), t.operateHandel("")
              }), 3e3)
            }
          }
          e.data.message && e.data.message.action, e.data.message && e.data.message.action
        }, n.saveAutoTime = function () {
          n.state;
          n.setState((function () {
          }))
        }, n.openPop = function (e) {
          n.props.dispatch({type: "base/openPop", payload: {pop: e}})
        }, n.operateHandel = function (e) {
          n.props.dispatch({type: "base/savePayload", payload: {operateName: e}})
        }, n.switchAlertMsgHandel = function (e) {
          n.props.dispatch({type: "base/switchAlertMsg", payload: {msg: e.toString(), type: "error"}})
        }, n.updateDataHandel = function (e) {
          n.props.dispatch({type: "base/savePayload", payload: {updateData: e}})
        }, n.state = {autoTime: 0}, n
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && g(e, t)
      }(t, e), n = t, (r = [{
        key: "UNSAFE_componentWillReceiveProps", value: function (e) {
        }
      }, {
        key: "componentDidMount", value: function () {
          var e = this, t = setTimeout((function () {
            window && window.hasOwnProperty("tronWeb") || e.openPop("Warning"), clearTimeout(t)
          }), 1e3);
          "" == this.props.firstWarning && this.openPop("Warning"), window.removeEventListener("message", this.messageCb), window.addEventListener("message", this.messageCb)
        }
      }, {
        key: "componentWillUnmount", value: function () {
          window.removeEventListener("message", this.messageCb)
        }
      }, {
        key: "render", value: function () {
          var e = this.props.lang;
          return c.a.createElement(u.b, {
            locale: e,
            messages: E[e]
          }, c.a.createElement("div", null, this.props.children))
        }
      }]) && h(n.prototype, r), a && h(n, a), t
    }(o.Component)) || a) || a), S = Object(i.withRouter)(O), T = n(2), _ = n.n(T), R = n(11), P = n(9), x = n(6), C = {
      contractAddress: {
        MAIN: {
          name: "MRK",
          address: "TRqJw3csFiyswCY7tYjVMpfk9jxYaWmPME",
          poolAddr: "",
          expiration: 1604159999,
          decimal: "18"
        },
        CARROT: {
          name: "MRK",
          address: "TRqJw3csFiyswCY7tYjVMpfk9jxYaWmPME",
          poolAddr: "",
          expiration: 1604159999,
          decimal: "18"
        },
        PEARL: {
          name: "PEARL",
          address: "TGbu32VEGpS4kDmjrmn5ZZJgUyHQiaweoq",
          poolAddr: "TC6Fwy3ZoyRoHymb6iQAgGYRCKh16UMVib",
          expiration: 1599383019,
          decimal: "18"
        },
        JFI: {
          name: "JFI",
          address: "TN7zQd2oCCguSQykZ437tZzLEaGJ7EGyha",
          poolAddr: "TE2D56fc851d6ewbcHJLK15a2LV17hVVev",
          expiration: 1601618400,
          decimal: "18"
        },
        HT: {
          name: "HT",
          address: "TDyvndWuvX5xTBwHPYJi7J3Yq8pq8yh62h",
          poolAddr: "TNNp1C5GygYnPgShwD4Bnv8LmKqopt7fuH",
          expiration: 1602074400,
          decimal: "18"
        },
        SUN: {
          name: "SUN",
          address: "TKkeiboTkxXKJpbmVFbv4a8ov5rAfRDMf9",
          poolAddr: "TDaNmVz9ACz63tK3X41fXLgWWbrixG7b2Z",
          expiration: 1602222300,
          decimal: "18"
        },
        USDT: {
          name: "USDT",
          address: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
          poolAddr: "TG9NDV2V2YXaXwXNxCcFbNg5kKG9FLHJC9",
          expiration: 1600830000,
          decimal: "6"
        },
        TAI: {
          name: "TAI",
          address: "TRwS7apsNdRGzMBfhB2hVC4RhqfubUYZ8P",
          poolAddr: "TGdkeiGUfuwMK5yKSAu3nUjfo4A6rMDQJH",
          expiration: 1600830000,
          decimal: "18"
        },
        MFI: {
          name: "MFI",
          address: "TLuekEszx5fq61rPCLwga9c3RtAVyBc46j",
          poolAddr: "TBNE4n6cVw4hfoWQdX4Y5CRfebp3RVPQF5",
          expiration: 1600830000,
          decimal: "18"
        },
        USDJ: {
          name: "USDJ",
          address: "TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT",
          poolAddr: "",
          expiration: 1599105312,
          decimal: "18"
        },
        MRK_TRX: {
          name: "MRK/TRX",
          address: "TNandzWRSQumP7SatFNFCKWMqg7eoqiWKE",
          poolAddr: "TYUqwFyacZCcXUaSNa3XpTUgbYmZ6GR7La",
          expiration: 1601960100,
          decimal: "6"
        },
        CEB_TRX: {
          name: "CEB/TRX",
          address: "TExMSTo94xZyWb26kgt9y6vUvYj4HzTvBb",
          poolAddr: "TDdS6P1vJufvQVaSxRh7RtyLZgSgCHwNwD",
          expiration: 1602662400,
          decimal: "6"
        },
        DZI_TRX: {
          name: " DZI/TRX",
          address: "TBDGmmtD82R4jANsH63zwZztHWEdKEyC4n",
          poolAddr: "TZARaQdMjbHkPPKeSoy7YsB8PfUoYzWbzZ",
          expiration: 1599580770,
          decimal: "6"
        }
      }
    };

    function D(e) {
      return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function N(e, t, n, r, a, o, c) {
      try {
        var i = e[o](c), s = i.value
      } catch (e) {
        return void n(e)
      }
      i.done ? t(s) : Promise.resolve(s).then(r, a)
    }

    function W(e) {
      return function () {
        var t = this, n = arguments;
        return new Promise((function (r, a) {
          var o = e.apply(t, n);

          function c(e) {
            N(o, r, a, c, i, "next", e)
          }

          function i(e) {
            N(o, r, a, c, i, "throw", e)
          }

          c(void 0)
        }))
      }
    }

    function L(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function I(e) {
      return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function M(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function B(e, t) {
      return (B = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var F, X, Z = C.contractAddress, H = (j = Object(s.connect)((function (e) {
      return {unlock: e.base.unlock}
    })), Object(u.d)(A = Object(i.withRouter)(A = j(A = function (e) {
      function t(e) {
        var n, r, a;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), r = this, a = I(t).call(this, e), (n = !a || "object" !== D(a) && "function" != typeof a ? M(r) : a).fetchData = W(regeneratorRuntime.mark((function e() {
          var t, r, a, o, c, i;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, t = M(n), r = t.state, a = r.carrotAddr, o = r.carrotDecimal, e.next = 4, P.b.tokenBalance(a, o);
              case 4:
                return c = e.sent, e.next = 7, P.b.tokenTotalSupply(a);
              case 7:
                i = e.sent, n.setState({carrotBalance: c, totalSupply: i}), e.next = 13;
                break;
              case 11:
                e.prev = 11, e.t0 = e.catch(0);
              case 13:
              case"end":
                return e.stop()
            }
          }), e, null, [[0, 11]])
        }))), n.state = {carrotBalance: 0, carrotAddr: Z.MAIN.address, carrotDecimal: Z.MAIN.decimal, totalSupply: 0}, n
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && B(e, t)
      }(t, e), n = t, (r = [{
        key: "UNSAFE_componentWillReceiveProps", value: function (e) {
          this.props.unlock != e.unlock && this.fetchData()
        }
      }, {
        key: "componentDidMount", value: function () {
          this.props.unlock && this.fetchData()
        }
      }, {
        key: "render", value: function () {
          var e = this.state, t = e.carrotBalance, n = e.totalSupply;
          return c.a.createElement("div", {className: _.a.bodyContainer}, c.a.createElement("dl", {className: Object(R.a)([_.a.slogan, _.a.layout])}, c.a.createElement("dt", null, c.a.createElement("img", {src: "/images/tunas.png"}), c.a.createElement("h1", null, c.a.createElement(u.a, {id: "t.Welcome"}))), c.a.createElement("dd", null, c.a.createElement(u.a, {id: "t.WelcomeDesc"}))), c.a.createElement("div", {className: _.a.protectWrap}, c.a.createElement("div", {className: _.a.protect}, c.a.createElement("dl", null, c.a.createElement("dt", null, c.a.createElement(u.a, {id: "t.protectTitle"})), c.a.createElement("dd", null, c.a.createElement(u.a, {id: "t.protectDesc"}))))), c.a.createElement("div", {className: Object(R.a)([_.a.lists, _.a.listsHome])}, c.a.createElement("div", {className: _.a.listsItem}, c.a.createElement("dl", {className: Object(R.a)([_.a.valueBlock, _.a.valueBlockBalance])}, c.a.createElement("dt", null, new x.c(t, "CARROT").displayAmount()), c.a.createElement("dd", null, c.a.createElement(u.a, {id: "t.CarrotBalance"})))), c.a.createElement("div", {className: _.a.listsItem}, c.a.createElement("dl", {className: _.a.valueBlock}, c.a.createElement("dt", null, "12,000"), c.a.createElement("dd", null, c.a.createElement(u.a, {id: "t.TotalSupply"}))))))
        }
      }]) && L(n.prototype, r), a && L(n, a), t
    }(c.a.Component)) || A) || A) || A), U = function (e) {
      return c.a.createElement("div", {className: _.a.item}, e.token.publish && "no" != e.countDown && c.a.createElement("div", {className: "".concat(_.a.itemTime, " ").concat("end" == e.countDown ? _.a.itemTimeOver : "")}, "end" == e.countDown ? c.a.createElement(u.a, {id: "t.ENDED"}) : c.a.createElement("span", null, e.countDown)), c.a.createElement("div", {className: _.a.itemHd}, c.a.createElement("i", {className: _.a.iconCircle}, e.icon), c.a.createElement("div", null, e.title)), c.a.createElement("div", {className: _.a.itemBd}, e.desc), c.a.createElement("a", {
        href: e.sourceCode,
        className: _.a.itemBd,
        target: "_blank"
        // style: "text-decoration:underline;"
      }, "Contract source code"), c.a.createElement("div", {className: _.a.itemFt}, e.children))
    };

    function z(e) {
      return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function J(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function V(e, t) {
      return !t || "object" !== z(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : t
    }

    function G(e) {
      return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function K(e, t) {
      return (K = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var q, Y, Q = (F = Object(s.connect)((function (e) {
      return function (e) {
        if (null == e) throw new TypeError("Cannot destructure undefined")
      }(e), {}
    })), Object(u.d)(X = F(X = function (e) {
      function t(e) {
        var n;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), (n = V(this, G(t).call(this, e))).unlockHandle = function () {
          n.props.dispatch({type: "base/savePayload", payload: {unlock: !0}})
        }, n
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && K(e, t)
      }(t, e), n = t, (r = [{
        key: "render", value: function () {
          return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {className: _.a.unlockWrap}, c.a.createElement("div", {
            className: _.a.buttonLg,
            onClick: this.unlockHandle
          }, c.a.createElement(u.a, {id: "t.UnlockWallet"}))))
        }
      }]) && J(n.prototype, r), a && J(n, a), t
    }(c.a.Component)) || X) || X), $ = n(1), ee = n.n($);

    function te(e) {
      return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function ne(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function re(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ne(Object(n), !0).forEach((function (t) {
          ae(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function ae(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function oe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function ce(e) {
      return (ce = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function ie(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function se(e, t) {
      return (se = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var ue, le, pe = C.contractAddress, me = (q = Object(s.connect)((function (e) {
      return {unlock: e.base.unlock}
    })), Object(u.d)(Y = Object(i.withRouter)(Y = q(Y = function (e) {
      function t(e) {
        var n, r, a;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), r = this, a = ce(t).call(this, e), (n = !a || "object" !== te(a) && "function" != typeof a ? ie(r) : a).renderFarms = function () {
          var e = ie(n).state.ends;
          return x.b.map((function (t) {
            if (!t.show) return "";
            var n = "" != t.pairs ? c.a.createElement(u.a, {id: "token.".concat(t.symbol, "_DESC")}) : c.a.createElement(u.a, {
              id: "token.EarnPearl",
              values: {value: t.name}
            }), r = "" != t.pairs && c.a.createElement("div", {className: _.a.Poolv2}, "Pool v2");
            return c.a.createElement("div", {
              className: _.a.listsItem,
              key: t.symbol
            }, r, c.a.createElement(U, {
              token: t,
              countDown: e[t.symbol],
              icon: t.icon,
              title: c.a.createElement(u.a, {id: "token.".concat(t.symbol)}),
              desc: n,
              sourceCode: t.sourceCode
            }, t.publish ? c.a.createElement(i.Link, {
              to: "/farms/".concat(t.symbol),
              className: _.a.buttonLg
            }, c.a.createElement(u.a, {id: "t.Select"})) : c.a.createElement("div", {className: _.a.buttonLg}, c.a.createElement(u.a, {id: t.pairs === "MRK/TRX" ? "2020-9-16 13:00" : "t.ComingSoon"}))))
          }))
        }, n.renderCountDown = function (e) {
          var t = ee()(),
            n = 1e3 * pe[e].expiration;
          if (t.valueOf() > n) return "end";
          var r = ee()(n);
          return Object(R.b)(r - t, !0)
        }, n.state = {loading: !0, ends: {}}, n
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && se(e, t)
      }(t, e), n = t, (r = [{
        key: "componentDidMount", value: function () {
          var e = this;
          setTimeout((function () {
            e.setState({loading: !1})
          }), 1e3), this._countDownAuto = setInterval((function () {
            x.b.filter((function (e) {
              return e.show && e.publish
            })).map((function (t) {
              var n = e.renderCountDown(t.symbol);
              e.setState({ends: re({}, e.state.ends, ae({}, t.symbol, n))})
            }))
          }), 1e3)
        }
      }, {
        key: "componentWillMount", value: function () {
          clearInterval(this._countDownAuto)
        }
      }, {
        key: "render", value: function () {
          var e = this.props.unlock, t = this.state.loading;
          return e ? c.a.createElement("div", {className: _.a.bodyContainer}, c.a.createElement("dl", {className: Object(R.a)([_.a.slogan, _.a.layout])}, c.a.createElement("dt", null, c.a.createElement("img", {src: "/images/tunas.png"}), c.a.createElement("h1", null, c.a.createElement(u.a, {id: "t.SelectAfarm"}))), c.a.createElement("dd", null, c.a.createElement(u.a, {id: "t.SelectAfarmDesc"}))), t && c.a.createElement("div", {className: _.a.loadingFarms}, c.a.createElement("i", {className: _.a.iconCircle}, c.a.createElement("em", null, "🐇")), c.a.createElement(u.a, {id: "t.LoadingFarms"})), !t && c.a.createElement("div", {className: _.a.lists}, this.renderFarms())) : c.a.createElement(Q, {key: "Unlock"})
        }
      }]) && oe(n.prototype, r), a && oe(n, a), t
    }(c.a.Component)) || Y) || Y) || Y), fe = n(299), de = n.n(fe);

    function ye(e) {
      return (ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function be(e, t, n, r, a, o, c) {
      try {
        var i = e[o](c), s = i.value
      } catch (e) {
        return void n(e)
      }
      i.done ? t(s) : Promise.resolve(s).then(r, a)
    }

    function he(e) {
      return function () {
        var t = this, n = arguments;
        return new Promise((function (r, a) {
          var o = e.apply(t, n);

          function c(e) {
            be(o, r, a, c, i, "next", e)
          }

          function i(e) {
            be(o, r, a, c, i, "throw", e)
          }

          c(void 0)
        }))
      }
    }

    function ve(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function ke(e) {
      return (ke = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function ge(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function we(e, t) {
      return (we = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function Ee(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function je(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Ee(Object(n), !0).forEach((function (t) {
          Ae(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ee(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function Ae(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    var Oe, Se, Te = C.contractAddress, _e = function () {
      var e = {};
      return x.b.map((function (t) {
        e = je({}, e, Ae({}, t.symbol, 0))
      })), e
    }, Re = (ue = Object(s.connect)((function (e) {
      return {unlock: e.base.unlock}
    })), Object(u.d)(le = Object(i.withRouter)(le = ue(le = function (e) {
      function t(e) {
        var n, r, a;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), r = this, a = ke(t).call(this, e), (n = !a || "object" !== ye(a) && "function" != typeof a ? ge(r) : a).digitsFormat = function (e, t) {
          var n = Math.pow(10, t);
          return Math.floor(e * n + .1) / n
        }, n.fetchPrice = function () {
          var e = he(regeneratorRuntime.mark((function e(t) {
            var r, a, o, c, i, s, u, l, p;
            return regeneratorRuntime.wrap((function (e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  return r = 0, a = "https://api.just.network/swap/scan/transactions?exchangeAddress=".concat(t), e.next = 4, de.a.get(a);
                case 4:
                  return o = e.sent, 0 == (c = o.data).code && (i = c.data.transactionList, s = i[0], u = c.data.trxPrice, l = s.tokenAmount / Math.pow(10, s.tokenDecimal), p = s.trxAmount / Math.pow(10, 6), r = n.digitsFormat(p / l * u, 4)), e.abrupt("return", r);
                case 8:
                case"end":
                  return e.stop()
              }
            }), e)
          })));
          return function (t) {
            return e.apply(this, arguments)
          }
        }(), n.fetchAllPrice = he(regeneratorRuntime.mark((function e() {
          var t;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, n.fetchPrice(x.a.CARROT.apiAddress);
              case 3:
                t = e.sent, n.setState({CRTPrice: t}), x.b.map(function () {
                  var e = he(regeneratorRuntime.mark((function e(t) {
                    var r, a, o;
                    return regeneratorRuntime.wrap((function (e) {
                      for (; ;) switch (e.prev = e.next) {
                        case 0:
                          if (t.publish && t.show) {
                            e.next = 2;
                            break
                          }
                          return e.abrupt("return");
                        case 2:
                          return e.prev = 2, r = x.a[t.symbol].apiAddress, e.next = 6, n.fetchPrice(r);
                        case 6:
                          a = e.sent, o = je({}, o = n.state.tokenPrice, Ae({}, t.symbol, a)), n.setState({tokenPrice: o}), e.next = 14;
                          break;
                        case 12:
                          e.prev = 12, e.t0 = e.catch(2);
                        case 14:
                        case"end":
                          return e.stop()
                      }
                    }), e, null, [[2, 12]])
                  })));
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                }()), e.next = 10;
                break;
              case 8:
                e.prev = 8, e.t0 = e.catch(0);
              case 10:
              case"end":
                return e.stop()
            }
          }), e, null, [[0, 8]])
        }))), n.fetchData = he(regeneratorRuntime.mark((function e() {
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                try {
                  x.b.map(function () {
                    var e = he(regeneratorRuntime.mark((function e(t) {
                      var r, a, o, c, i, s, u, l, p, m, f;
                      return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                          case 0:
                            if (t.publish && t.show) {
                              e.next = 2;
                              break
                            }
                            return e.abrupt("return");
                          case 2:
                            return e.prev = 2, x.a[t.symbol].apiAddress, r = Te[t.symbol].poolAddr, a = Te[t.symbol].decimal, o = Te.CARROT.decimal, e.next = 9, P.b.staked(r, a);
                          case 9:
                            return c = e.sent, e.next = 12, P.b.totalStaked(r, a);
                          case 12:
                            return i = e.sent, Object(R.e)(1e3), e.next = 16, P.b.earned(r, o);
                          case 16:
                            return s = e.sent, e.next = 19, P.b.tokenTotalSupply(r);
                          case 19:
                            u = e.sent, Object(R.e)(1e3), l = n.state.totalStaked, p = n.state.myStaked, m = n.state.earnedAmount, f = n.state.totalSupply, l = je({}, l, Ae({}, t.symbol, i)), p = je({}, p, Ae({}, t.symbol, c)), m = je({}, m, Ae({}, t.symbol, s)), f = je({}, f, Ae({}, t.symbol, u)), n.setState({
                              totalStaked: l,
                              myStaked: p,
                              earnedAmount: m,
                              totalSupply: f
                            }), e.next = 34;
                            break;
                          case 32:
                            e.prev = 32, e.t0 = e.catch(2);
                          case 34:
                          case"end":
                            return e.stop()
                        }
                      }), e, null, [[2, 32]])
                    })));
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  }())
                } catch (e) {
                }
              case 1:
              case"end":
                return e.stop()
            }
          }), e)
        }))), n.renderList = function () {
          var e = ge(n).state, t = e.totalStaked, r = e.myStaked, a = e.earnedAmount, o = e.tokenPrice,
            i = e.CRTPrice;
          e.totalSupply;
          return x.b.map((function (e) {
            if (!e.show || !e.publish) return "";
            var s = e.symbol, l = e.name, p = t[s], m = r[s], f = a[s], d = o[s], y = x.a[s].totalAmount,
              b = y / ((x.a[s].isNotHalf) ? 20 : 10) / 24, h = f;
            "" != e.pairs && (d = i / 24);

            if (l === "MRK/TRX"){
              d = d / 430
            }
            if (l === "CEB/TRX"){
              d = d / 50
            }
            
            var v = 0;
            p && (v = m / p);
            var k = b * v || 0, g = 24 * k || 0, w = 7 * g || 0, E = d * m, j = d * p, A = 0, O = 0, S = 0;
            return "" != d && (S = 7 * (O = 24 * (A = b * i / (p * d)))), c.a.createElement("dd", {key: e.symbol}, c.a.createElement("div", {className: _.a.statsBd}, c.a.createElement("div", {className: _.a.statsTitle}, e.icon, " ", c.a.createElement(u.a, {id: "token.".concat(s)})), c.a.createElement("div", {className: _.a.statsContent}, "========== ", c.a.createElement(u.a, {id: "t.PoolInfo"}), " ==========", c.a.createElement("br", null), c.a.createElement(u.a, {id: "t.CRTAmount"}), ": ", y || "", c.a.createElement("br", null), c.a.createElement("br", null), "========== ", c.a.createElement(u.a, {id: "t.PRICES"}), " ==========", c.a.createElement("br", null), "1 MRK   = ", i, "$", c.a.createElement("br", null), "1 ", l, "   = ", n.digitsFormat(d, 4), "$", c.a.createElement("br", null), c.a.createElement("br", null), "========== ", c.a.createElement(u.a, {id: "t.STAKING"}), " =========", c.a.createElement("br", null), c.a.createElement(u.a, {id: "t.ThereAreTotal"}), "   :  ", c.a.createElement(u.a, {
              id: "t.ThereAreTotalDesc",
              values: {total: p, tokenSymbol: l}
            }), c.a.createElement("br", null), "= $", n.digitsFormat(j, 4), c.a.createElement("br", null), c.a.createElement(u.a, {id: "t.YouAreStaking"}), "   :  ", c.a.createElement(u.a, {
              id: "t.YouAreStakingDesc",
              values: {my: m, tokenSymbol: l, ratio: n.digitsFormat(100 * v, 4)}
            }), c.a.createElement("br", null), "= $", n.digitsFormat(E, 4), c.a.createElement("br", null), c.a.createElement("br", null), "======== ", c.a.createElement(u.a, {id: "t.CRTREWARDS"}), " ========", c.a.createElement("br", null), c.a.createElement(u.a, {id: "t.ClaimableRewards"}), " : ", n.digitsFormat(h, 8), " MRK = $", n.digitsFormat(i * h, 4), c.a.createElement("br", null), c.a.createElement(u.a, {id: "t.Hourlyestimate"}), "   : ", n.digitsFormat(k, 8), " MRK = $", n.digitsFormat(i * k, 4), c.a.createElement("br", null), c.a.createElement(u.a, {id: "t.Dailyestimate"}), "    : ", n.digitsFormat(g, 8), " MRK = $", n.digitsFormat(i * g, 4), " ", c.a.createElement("br", null), c.a.createElement(u.a, {id: "t.Weeklyestimate"}), "   : ", n.digitsFormat(w, 8), " MRK = $", n.digitsFormat(i * w, 4), " ", c.a.createElement("br", null), c.a.createElement(u.a, {id: "t.HourlyROIinUSD"}), " : ", n.digitsFormat(100 * A, 4), "%", c.a.createElement("br", null), c.a.createElement(u.a, {id: "t.DailyROIinUSD"}), "  : ", n.digitsFormat(100 * O, 4), "%", c.a.createElement("br", null), c.a.createElement(u.a, {id: "t.WeeklROIinUSD"}), "  : ", n.digitsFormat(100 * S, 4), "%", c.a.createElement("br", null))))
          }))
        }, n.state = {
          totalStaked: _e(),
          myStaked: _e(),
          earnedAmount: _e(),
          tokenPrice: _e(),
          totalSupply: _e(),
          CRTPrice: 0
        }, n
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && we(e, t)
      }(t, e), n = t, (r = [{
        key: "UNSAFE_componentWillReceiveProps", value: function (e) {
          this.props.unlock != e.unlock && (this.fetchData(), this.fetchAllPrice())
        }
      }, {
        key: "componentDidMount", value: function () {
          this.props.unlock && (this.fetchData(), this.fetchAllPrice())
        }
      }, {
        key: "render", value: function () {
          return this.props.unlock ? c.a.createElement(c.a.Fragment, null, c.a.createElement("dl", {className: Object(R.a)([_.a.slogan, _.a.layout])}, c.a.createElement("dt", null, c.a.createElement("img", {src: "/images/tunas.png"}), c.a.createElement("h1", null, c.a.createElement(u.a, {id: "t.Statistics"}))), c.a.createElement("dd", null, c.a.createElement(u.a, {id: "t.WelcomeDesc"}))), c.a.createElement("dl", {className: _.a.stats}, this.renderList())) : c.a.createElement(Q, {key: "Unlock"})
        }
      }]) && ve(n.prototype, r), a && ve(n, a), t
    }(c.a.Component)) || le) || le) || le);

    function Pe(e) {
      return (Pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function xe(e, t, n, r, a, o, c) {
      try {
        var i = e[o](c), s = i.value
      } catch (e) {
        return void n(e)
      }
      i.done ? t(s) : Promise.resolve(s).then(r, a)
    }

    function Ce(e) {
      return function () {
        var t = this, n = arguments;
        return new Promise((function (r, a) {
          var o = e.apply(t, n);

          function c(e) {
            xe(o, r, a, c, i, "next", e)
          }

          function i(e) {
            xe(o, r, a, c, i, "throw", e)
          }

          c(void 0)
        }))
      }
    }

    function De(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function Ne(e) {
      return (Ne = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function We(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Le(e, t) {
      return (Le = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var Ie, Me, Be = C.contractAddress, Fe = (Oe = Object(s.connect)((function (e) {
      var t = e.base, n = e.pool;
      return {
        unlock: t.unlock,
        updateData: t.updateData,
        earnedAmount: n.earnedAmount,
        stakedAmount: n.stakedAmount,
        approveAmount: n.approveAmount
      }
    })), Object(u.d)(Se = Object(i.withRouter)(Se = Oe(Se = function (e) {
      function t(e) {
        var n, r, a;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), r = this, a = Ne(t).call(this, e), (n = !a || "object" !== Pe(a) && "function" != typeof a ? We(r) : a).fetchData = Ce(regeneratorRuntime.mark((function e() {
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                try {
                  n.props.dispatch({
                    type: "pool/fetchEarned",
                    payload: {token: n.state.token.symbol, poolAddr: n.state.poolAddr, decimal: n.state.carrotDecimal}
                  }), n.props.dispatch({
                    type: "pool/fetchStaked",
                    payload: {token: n.state.token.symbol, poolAddr: n.state.poolAddr, decimal: n.state.tokenDecimal}
                  }), n.props.dispatch({
                    type: "pool/fetchApproveAmount",
                    payload: {token: n.state.token.symbol, tokenAddr: n.state.tokenAddr, poolAddr: n.state.poolAddr}
                  }), n.props.dispatch({type: "base/savePayload", payload: {updateData: ""}})
                } catch (e) {
                }
              case 1:
              case"end":
                return e.stop()
            }
          }), e)
        }))), n.approve = Ce(regeneratorRuntime.mark((function e() {
          var t, r;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, t = We(n), r = t.state.token, e.next = 4, n.operateHandel("approve");
              case 4:
                n.props.dispatch({
                  type: "pool/approve",
                  payload: {tokenAddr: n.state.tokenAddr, poolAddr: n.state.poolAddr, token: r}
                }), e.next = 9;
                break;
              case 7:
                e.prev = 7, e.t0 = e.catch(0);
              case 9:
              case"end":
                return e.stop()
            }
          }), e, null, [[0, 7]])
        }))), n.withdraw = Ce(regeneratorRuntime.mark((function e() {
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, n.props.dispatch({
                  type: "base/savePayload",
                  payload: {withdrawToken: n.state.token}
                });
              case 3:
                n.props.dispatch({type: "base/openPop", payload: {pop: "Withdraw"}}), e.next = 8;
                break;
              case 6:
                e.prev = 6, e.t0 = e.catch(0);
              case 8:
              case"end":
                return e.stop()
            }
          }), e, null, [[0, 6]])
        }))), n.deposit = Ce(regeneratorRuntime.mark((function e() {
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, n.props.dispatch({
                  type: "base/savePayload",
                  payload: {depositToken: n.state.token}
                });
              case 3:
                n.props.dispatch({type: "base/openPop", payload: {pop: "Deposit"}}), e.next = 8;
                break;
              case 6:
                e.prev = 6, e.t0 = e.catch(0);
              case 8:
              case"end":
                return e.stop()
            }
          }), e, null, [[0, 6]])
        }))), n.harvest = Ce(regeneratorRuntime.mark((function e() {
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                if (e.prev = 0, !(n.currentEarnedAmount.quantity <= 0)) {
                  e.next = 3;
                  break
                }
                return e.abrupt("return", !1);
              case 3:
                return e.next = 5, n.operateHandel("harvest");
              case 5:
                n.props.dispatch({type: "pool/harvest", payload: {poolAddr: n.state.poolAddr}}), e.next = 10;
                break;
              case 8:
                e.prev = 8, e.t0 = e.catch(0);
              case 10:
              case"end":
                return e.stop()
            }
          }), e, null, [[0, 8]])
        }))), n.unstake = Ce(regeneratorRuntime.mark((function e() {
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, n.operateHandel("unstake");
              case 3:
                n.props.dispatch({type: "pool/harvestAndUnstake", payload: {poolAddr: n.state.poolAddr}}), e.next = 8;
                break;
              case 6:
                e.prev = 6, e.t0 = e.catch(0);
              case 8:
              case"end":
                return e.stop()
            }
          }), e, null, [[0, 6]])
        }))), n.operateHandel = function (e) {
          n.props.dispatch({type: "base/savePayload", payload: {operateName: e}})
        }, n.state = {
          now: ee()(),
          token: {symbol: "DZI_TRX"},
          tokenName: "",
          tokenAddr: "",
          poolAddr: "",
          tokenDecimal: "",
          carrotDecimal: ""
        }, n
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Le(e, t)
      }(t, e), n = t, (r = [{
        key: "UNSAFE_componentWillReceiveProps", value: function (e) {
          this.props.unlock != e.unlock && this.fetchData(), this.props.updateData != e.updateData && this.fetchData()
        }
      }, {
        key: "componentDidMount", value: function () {
          var e = this, t = this.props.match.params.id;
          x.a[t] || (window.location.href = "/"), x.a[t].publish || (window.location.href = "/"), this.setState({
            token: x.a[t],
            tokenName: Be[t].name,
            tokenAddr: Be[t].address,
            poolAddr: Be[t].poolAddr,
            tokenDecimal: Be[t].decimal,
            carrotDecimal: Be.MAIN.decimal
          }, (function () {
            e.props.unlock && setTimeout((function () {
              e.fetchData()
            }), 3e3)
          })), this._countDownAuto = setInterval((function () {
            e.setState({now: ee()()})
          }), 1e3)
        }
      }, {
        key: "componentWillMount", value: function () {
          clearInterval(this._countDownAuto)
        }
      }, {
        key: "render", value: function () {
          var e = this.state.token;
          if (!this.props.unlock) return c.a.createElement(Q, {key: "Unlock"});
          var t = this.props.match.params.id,
            n = "" != e.pairs ? c.a.createElement(u.a, {id: "token.".concat(e.symbol, "_DESC")}) : c.a.createElement(u.a, {
              id: "token.EarnPearlIn",
              values: {value: e.name || t}
            });
          return c.a.createElement("div", {className: _.a.bodyContainer}, c.a.createElement("dl", {className: Object(R.a)([_.a.slogan, _.a.layout])}, c.a.createElement("dt", null, c.a.createElement("i", null, e.icon), c.a.createElement("h1", null, c.a.createElement(u.a, {id: "token.".concat(e.symbol || t)}))), c.a.createElement("dd", null, n, "" != e.pairs && c.a.createElement(u.a, {id: "token.".concat(e.symbol, "_DESC2")}))), c.a.createElement("div", {className: Object(R.a)([_.a.lists, _.a.listsAction])}, c.a.createElement("div", {className: _.a.listsItem}, c.a.createElement(U, {
            token: e,
            countDown: "no",
            icon: "🐇",
            title: this.currentEarnedAmount.Amount(),
            desc: c.a.createElement(u.a, {id: "t.CarrotEarned"})
          }, c.a.createElement("div", {
            className: this.currentEarnedAmount.quantity > 0 ? _.a.buttonLg : _.a.buttonForbid,
            onClick: this.harvest
          }, c.a.createElement(u.a, {id: "t.Harvest"})))), c.a.createElement("div", {className: _.a.listsItem}, c.a.createElement(U, {
            token: e,
            countDown: "no",
            icon: "🌱",
            title: this.currentStakedAmount.Amount(),
            desc: c.a.createElement(u.a, {id: "t.Staked", values: {token: e.name || t}}),
          }, "0" === this.currentApproveAmount ? "end" == this.forbidApprove ? c.a.createElement("div", {className: _.a.buttonForbid}, c.a.createElement(u.a, {
            id: "t.Approve",
            values: {token: e.name || t}
          })) : c.a.createElement("div", {
            className: _.a.buttonLg,
            onClick: this.approve
          }, c.a.createElement(u.a, {
            id: "t.Approve",
            values: {token: e.name || t}
          })) : c.a.createElement("div", {className: _.a.addSubtract}, c.a.createElement("div", {
            className: _.a.buttonLg,
            onClick: this.withdraw
          }, "-"), c.a.createElement("div", {
            className: _.a.buttonLg,
            onClick: this.deposit
          }, "+"))))), c.a.createElement("div", {className: _.a.harvestWithdraw}, c.a.createElement("div", {
            className: _.a.buttonLg,
            onClick: this.unstake
          }, c.a.createElement(u.a, {id: "t.HarvestWithdraw"}))))
        }
      }, {
        key: "currentEarnedAmount", get: function () {
          var e = this.props.earnedAmount, t = this.state.token;
          return new x.c(e[t.symbol], t.symbol)
        }
      }, {
        key: "currentStakedAmount", get: function () {
          var e = this.props.stakedAmount, t = this.state.token;
          return new x.c(e[t.symbol], t.symbol)
        }
      }, {
        key: "currentApproveAmount", get: function () {
          return this.props.approveAmount[this.state.token.symbol]
        }
      }, {
        key: "forbidApprove", get: function () {
          var e = this.state, t = e.token, n = e.now;
          if ("" != t) {
            var r = n, a = 1e3 * Be[t.symbol].expiration;
            return r.valueOf() > a ? (clearInterval(this._countDownAuto), "end") : "ing"
          }
          return ""
        }
      }]) && De(n.prototype, r), a && De(n, a), t
    }(c.a.Component)) || Se) || Se) || Se);

    function Xe(e) {
      return (Xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function Ze(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function He(e, t) {
      return !t || "object" !== Xe(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : t
    }

    function Ue(e) {
      return (Ue = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function ze(e, t) {
      return (ze = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var Je, Ve, Ge = (Ie = Object(s.connect)((function (e) {
      var t = e.base;
      return {unlock: t.unlock, lang: t.lang}
    })), Object(u.d)(Me = Object(i.withRouter)(Me = Ie(Me = function (e) {
      function t(e) {
        var n;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), (n = He(this, Ue(t).call(this, e))).saveOpenLang = function () {
          n.setState({openLang: !n.state.openLang})
        }, n.openPop = function () {
          n.props.dispatch({type: "base/openPop", payload: {pop: "Account"}})
        }, n.saveLang = function (e) {
          n.props.dispatch({type: "base/savePayload", payload: {lang: e}}), n.setState({openLang: !1})
        }, n.unlockHandle = function () {
          n.props.dispatch({type: "base/savePayload", payload: {unlock: !0}})
        }, n.state = {openLang: !1}, n
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && ze(e, t)
      }(t, e), n = t, (r = [{
        key: "render", value: function () {
          var e = this, t = this.props, n = t.unlock, r = t.lang, a = t.location.pathname, o = this.state.openLang;
          return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {className: Object(R.a)([_.a.header, _.a.layout])}, c.a.createElement(i.Link, {to: "/",className: _.a.headerLogo}, 
          c.a.createElement("span", null, "MRK")), c.a.createElement("ul", {className: _.a.headerMenu}, c.a.createElement("li", {className: "/" == a ? _.a.current : ""}, c.a.createElement(i.Link, {to: "/"}, 
          c.a.createElement(u.a, {id: "t.Home"}))), c.a.createElement("li", {className: "/farms" == a ? _.a.current : ""}, c.a.createElement(i.Link, {to: "/farms"}, 
          c.a.createElement(u.a, {id: "t.Farms"}))),c.a.createElement("li", {className: "/stats" == a ? _.a.current : ""}, c.a.createElement(i.Link, {to: "/stats"}, c.a.createElement(u.a, {id: "t.Stats"}))),
          c.a.createElement("li", {className: "/change" == a ? _.a.current : ""}, c.a.createElement("a", {href: "https://change.moonrabbit.finance/"}, c.a.createElement(u.a, {id: "t.Change"}))), 
          c.a.createElement("li", {
              className: "/rules" == a ? _.a.current :
                ""
            }, c.a.createElement("a", {
              target: "_blank",
              href: "https://medium.com/@MoonRabbit2020/introducing-moonrabbit-protocol-mrk-d6cb691b3ef0"
            }, c.a.createElement(u.a, {
              id: "t.Rules"
            })))), c.a.createElement("div", {className: _.a.headerUser}, n ? c.a.createElement("div", {
            className: _.a.button,
            onClick: this.openPop
          }, c.a.createElement(u.a, {id: "t.MyWallet"})) : c.a.createElement("div", {
            className: _.a.button,
            onClick: this.unlockHandle
          }, c.a.createElement(u.a, {id: "t.UnlockWallet"}))), !Object(R.d)() && c.a.createElement("div", {className: o ? "".concat(_.a.lang, " ").concat(_.a.langListOpen) : _.a.lang}, c.a.createElement("span", {
            className: _.a[r],
            onClick: this.saveOpenLang
          }, "zh" == r ? "CN" : "EN"), c.a.createElement("ul", {
            className: _.a.langList,
            onMouseLeave: this.saveOpenLang
          }, c.a.createElement("li", {
            onClick: function () {
              e.saveLang("en")
            }
          }, c.a.createElement("i", {
            className: _.a.en
          }), "EN"), c.a.createElement("li", {
            onClick: function () {
              e.saveLang("zh")
            }
          }, c.a.createElement("i", {className: _.a.zh}), "CN")))))
        }
      }]) && Ze(n.prototype, r), a && Ze(n, a), t
    }(c.a.Component)) || Me) || Me) || Me);

    function Ke(e) {
      return (Ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function qe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function Ye(e, t) {
      return !t || "object" !== Ke(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : t
    }

    function Qe(e) {
      return (Qe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function $e(e, t) {
      return ($e = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var et, tt, nt = (Je = Object(s.connect)((function (e) {
      return function (e) {
        if (null == e) throw new TypeError("Cannot destructure undefined")
      }(e), {}
    })), Object(u.d)(Ve = Object(i.withRouter)(Ve = Je(Ve = function (e) {
      function t(e) {
        var n;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), (n = Ye(this, Qe(t).call(this, e))).saveLang = function (e) {
          n.props.dispatch({type: "base/savePayload", payload: {lang: e}})
        }, n.state = {}, n
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && $e(e, t)
      }(t, e), n = t, (r = [{
        key: "render", value: function () {
          var e = this;
          return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {className: Object(R.a)([_.a.footer, _.a.layout])}, c.a.createElement("a", {
            href: "https://tronscan.io/#/contract/TRqJw3csFiyswCY7tYjVMpfk9jxYaWmPME/code",
            target: "_blank"
          }, "Code"), c.a.createElement("a", {
            href: "/MRK.pdf",
            target: "_blank"
          }, "Beosin"), c.a.createElement("a", {
            href: "https://twitter.com/MoonRabbitFin",
            target: "_blank"
          }, "Twitter"), c.a.createElement("a", {
            href: "https://t.me/moonrabbit2020",
            target: "_blank"
          }, "Telegram"), c.a.createElement("a", {
            href: "https://medium.com/@MoonRabbit2020/",
            target: "_blank"
          }, "Medium")), Object(R.d)() && c.a.createElement("div", {className: _.a.lang}, c.a.createElement("ul", {className: _.a.langList}, c.a.createElement("li", {
            onClick: function () {
              e.saveLang("en")
            }
          }, c.a.createElement("i", {
            className: _.a.en
          }), "EN"), c.a.createElement("li", {
            onClick: function () {
              e.saveLang("zh")
            }
          }, c.a.createElement("i", {className: _.a.zh}), "CN"))), c.a.createElement("div", {
            className: _.a.slowmist,
            onClick: function () {
              window.open("https://beosin.com/query/index.html#/")
            }
          }, c.a.createElement(u.a, {id: "t.slowmist"})))
        }
      }]) && qe(n.prototype, r), a && qe(n, a), t
    }(c.a.Component)) || Ve) || Ve) || Ve);

    function rt(e) {
      return (rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function at(e, t, n, r, a, o, c) {
      try {
        var i = e[o](c), s = i.value
      } catch (e) {
        return void n(e)
      }
      i.done ? t(s) : Promise.resolve(s).then(r, a)
    }

    function ot(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function ct(e, t) {
      return !t || "object" !== rt(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : t
    }

    function it(e) {
      return (it = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function st(e, t) {
      return (st = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var ut, lt, pt = C.contractAddress, mt = (et = Object(s.connect)((function (e) {
      return function (e) {
        if (null == e) throw new TypeError("Cannot destructure undefined")
      }(e), {}
    })), Object(u.d)(tt = Object(i.withRouter)(tt = et(tt = function (e) {
      function t(e) {
        var n;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), (n = ct(this, it(t).call(this, e))).closePop = function () {
          n.props.dispatch({type: "base/openPop", payload: {pop: ""}})
        }, n.state = {carrotAmount: new x.c(0, "CARROT"), carrotAddr: "", carrotDecimal: ""}, n
      }

      var n, r, a, o, i;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && st(e, t)
      }(t, e), n = t, (r = [{
        key: "componentDidMount", value: (o = regeneratorRuntime.mark((function e() {
          var t, n, r;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, t = pt.MAIN.address, n = pt.MAIN.decimal, e.next = 5, P.b.tokenBalance(t, n);
              case 5:
                r = e.sent, this.setState({
                  carrotAddr: t,
                  carrotDecimal: n,
                  carrotAmount: new x.c(r, "CARROT")
                }), e.next = 12;
                break;
              case 10:
                e.prev = 10, e.t0 = e.catch(0);
              case 12:
              case"end":
                return e.stop()
            }
          }), e, this, [[0, 10]])
        })), i = function () {
          var e = this, t = arguments;
          return new Promise((function (n, r) {
            var a = o.apply(e, t);

            function c(e) {
              at(a, n, r, c, i, "next", e)
            }

            function i(e) {
              at(a, n, r, c, i, "throw", e)
            }

            c(void 0)
          }))
        }, function () {
          return i.apply(this, arguments)
        })
      }, {
        key: "render", value: function () {
          var e = this.state.carrotAmount;
          return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {className: _.a.myAccount}, c.a.createElement("div", {className: _.a.popSubTitle}, c.a.createElement(u.a, {id: "t.MyAccount"})), c.a.createElement("i", {className: _.a.iconCircle}, "🐇"), c.a.createElement("div", {className: _.a.myAccountAsset}, e.Amount(), c.a.createElement(u.a, {id: "t.GRAPBalance"})), c.a.createElement("div", {
            className: _.a.buttonLg,
            onClick: this.closePop
          }, " ", c.a.createElement(u.a, {id: "t.SignOut"}))))
        }
      }]) && ot(n.prototype, r), a && ot(n, a), t
    }(c.a.Component)) || tt) || tt) || tt);

    function ft(e) {
      return (ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function dt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function yt(e, t) {
      return !t || "object" !== ft(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : t
    }

    function bt(e) {
      return (bt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function ht(e, t) {
      return (ht = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var vt, kt, gt = (ut = Object(s.connect)((function (e) {
      return function (e) {
        if (null == e) throw new TypeError("Cannot destructure undefined")
      }(e), {}
    })), Object(u.d)(lt = Object(i.withRouter)(lt = ut(lt = function (e) {
      function t(e) {
        var n;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), (n = yt(this, bt(t).call(this, e))).closePop = function () {
          n.props.dispatch({type: "base/openPop", payload: {pop: ""}}), n.props.dispatch({
            type: "base/saveFirstWarning",
            payload: {firstWarning: 1}
          })
        }, n.state = {}, n
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && ht(e, t)
      }(t, e), n = t, (r = [{
        key: "render", value: function () {
          return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {className: _.a.myAccount}, c.a.createElement("div", {className: _.a.popSubTitle}, c.a.createElement(u.a, {id: "t.Warning"})), c.a.createElement("i", {className: _.a.iconCircle}, "⚠️"), c.a.createElement("div", {className: _.a.warningTxt}, c.a.createElement(u.a, {id: "t.WarningDesc"})), c.a.createElement("div", {
            className: _.a.buttonLg,
            onClick: this.closePop
          }, " ", c.a.createElement(u.a, {id: "t.Iunderstand"}))))
        }
      }]) && dt(n.prototype, r), a && dt(n, a), t
    }(c.a.Component)) || lt) || lt) || lt);

    function wt(e) {
      return (wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function Et(e, t, n, r, a, o, c) {
      try {
        var i = e[o](c), s = i.value
      } catch (e) {
        return void n(e)
      }
      i.done ? t(s) : Promise.resolve(s).then(r, a)
    }

    function jt(e) {
      return function () {
        var t = this, n = arguments;
        return new Promise((function (r, a) {
          var o = e.apply(t, n);

          function c(e) {
            Et(o, r, a, c, i, "next", e)
          }

          function i(e) {
            Et(o, r, a, c, i, "throw", e)
          }

          c(void 0)
        }))
      }
    }

    function At(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function Ot(e) {
      return (Ot = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function St(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Tt(e, t) {
      return (Tt = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var _t, Rt, Pt = C.contractAddress, xt = (vt = Object(s.connect)((function (e) {
      return {depositToken: e.base.depositToken}
    })), Object(u.d)(kt = Object(i.withRouter)(kt = vt(kt = function (e) {
      function t(e) {
        var n, r, a;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), r = this, a = Ot(t).call(this, e), (n = !a || "object" !== wt(a) && "function" != typeof a ? St(r) : a).closePop = function () {
          n.props.dispatch({type: "base/openPop", payload: {pop: ""}})
        }, n.confirm = jt(regeneratorRuntime.mark((function e() {
          var t, r, a, o, c, i;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                if (e.prev = 0, t = St(n), r = t.state, a = r.amount, o = r.poolAddr, c = r.tokenDecimal, i = r.tokenBalance, a) {
                  e.next = 5;
                  break
                }
                return n.props.dispatch({
                  type: "base/switchAlertMsg",
                  payload: {msg: "err.Enteramount", type: "error"}
                }), e.abrupt("return");
              case 5:
                if (!(a > i.quantity)) {
                  e.next = 8;
                  break
                }
                return n.props.dispatch({
                  type: "base/switchAlertMsg",
                  payload: {msg: "err.InsufficientSurplus", type: "error"}
                }), e.abrupt("return");
              case 8:
                return e.next = 10, n.operateHandel("stake");
              case 10:
                n.props.dispatch({type: "pool/stake", payload: {poolAddr: o, amount: a, tokenDecimal: c}}), e.next = 16;
                break;
              case 13:
                e.prev = 13, e.t0 = e.catch(0);
              case 16:
              case"end":
                return e.stop()
            }
          }), e, null, [[0, 13]])
        }))), n.max = jt(regeneratorRuntime.mark((function e() {
          var t, r;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                t = St(n), r = t.state.tokenBalance, n.setState({amount: r.quantity});
              case 2:
              case"end":
                return e.stop()
            }
          }), e)
        }))), n.inputChangeHandle = function () {
          var e = event.target.value;
          n.setState({amount: e})
        }, n.operateHandel = function (e) {
          n.props.dispatch({type: "base/savePayload", payload: {operateName: e}})
        }, n.state = {
          amount: "",
          tokenBalance: new x.c(0),
          tokenName: "",
          tokenAddr: "",
          poolAddr: "",
          tokenDecimal: ""
        }, n
      }

      var n, r, a, o;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Tt(e, t)
      }(t, e), n = t, (r = [{
        key: "componentDidMount", value: (o = jt(regeneratorRuntime.mark((function e() {
          var t, n, r, a, o, c;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                if (e.prev = 0, t = this.props.depositToken, n = Pt[t.symbol].name, r = Pt[t.symbol].address, a = Pt[t.symbol].poolAddr, o = Pt[t.symbol].decimal, c = 0, "" != t.pairs) {
                  e.next = 13;
                  break
                }
                return e.next = 10, P.b.tokenBalance(r, o);
              case 10:
                c = e.sent, e.next = 16;
                break;
              case 13:
                return e.next = 15, P.b.tokenBalancePairs(r, o);
              case 15:
                c = e.sent;
              case 16:
                this.setState({
                  tokenName: n,
                  tokenAddr: r,
                  poolAddr: a,
                  tokenDecimal: o,
                  tokenBalance: new x.c(c, t.symbol)
                }), e.next = 22;
                break;
              case 19:
                e.prev = 19, e.t0 = e.catch(0);
              case 22:
              case"end":
                return e.stop()
            }
          }), e, this, [[0, 19]])
        }))), function () {
          return o.apply(this, arguments)
        })
      }, {
        key: "render", value: function () {
          var e = this.state, t = e.tokenName, n = e.tokenBalance;
          return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {className: _.a.deposit}, c.a.createElement("div", {className: _.a.popSubTitle}, c.a.createElement(u.a, {
            id: "t.Deposit",
            values: {token: t}
          })), c.a.createElement("div", {className: _.a.depositAvailable}, c.a.createElement(u.a, {
            id: "t.Available",
            values: {value: "".concat(n.Amount(), " ").concat(t)}
          })), c.a.createElement("div", {className: _.a.depositField}, c.a.createElement("input", {
            value: this.state.amount,
            onChange: this.inputChangeHandle,
            autoComplete: "off",
            type: "text",
            className: _.a.depositFieldInput
          }), c.a.createElement("span", {className: _.a.depositFieldUnit}, t), c.a.createElement("div", {
            className: _.a.button,
            onClick: this.max
          }, c.a.createElement(u.a, {id: "t.Max"}))), c.a.createElement("ul", {className: _.a.actions}, c.a.createElement("li", null, c.a.createElement("div", {
            className: _.a.buttonCancel,
            onClick: this.closePop
          }, c.a.createElement(u.a, {id: "t.Cancel"}))), c.a.createElement("li", null, c.a.createElement("div", {
            className: _.a.buttonLg,
            onClick: this.confirm
          }, c.a.createElement(u.a, {id: "t.Confirm"}))))))
        }
      }]) && At(n.prototype, r), a && At(n, a), t
    }(c.a.Component)) || kt) || kt) || kt);

    function Ct(e) {
      return (Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function Dt(e, t, n, r, a, o, c) {
      try {
        var i = e[o](c), s = i.value
      } catch (e) {
        return void n(e)
      }
      i.done ? t(s) : Promise.resolve(s).then(r, a)
    }

    function Nt(e) {
      return function () {
        var t = this, n = arguments;
        return new Promise((function (r, a) {
          var o = e.apply(t, n);

          function c(e) {
            Dt(o, r, a, c, i, "next", e)
          }

          function i(e) {
            Dt(o, r, a, c, i, "throw", e)
          }

          c(void 0)
        }))
      }
    }

    function Wt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function Lt(e) {
      return (Lt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function It(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function Mt(e, t) {
      return (Mt = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var Bt, Ft, Xt = C.contractAddress, Zt = (_t = Object(s.connect)((function (e) {
      var t = e.base, n = e.pool;
      return {withdrawToken: t.withdrawToken, stakedAmount: n.stakedAmount}
    })), Object(u.d)(Rt = Object(i.withRouter)(Rt = _t(Rt = function (e) {
      function t(e) {
        var n, r, a;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), r = this, a = Lt(t).call(this, e), (n = !a || "object" !== Ct(a) && "function" != typeof a ? It(r) : a).closePop = function () {
          n.props.dispatch({type: "base/openPop", payload: {pop: ""}})
        }, n.confirm = Nt(regeneratorRuntime.mark((function e() {
          var t, r, a, o, c, i;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                if (e.prev = 0, t = It(n), r = t.state, a = r.amount, o = r.poolAddr, c = r.tokenDecimal, i = r.tokenBalance, a) {
                  e.next = 5;
                  break
                }
                return n.props.dispatch({
                  type: "base/switchAlertMsg",
                  payload: {msg: "err.Enteramount", type: "error"}
                }), e.abrupt("return");
              case 5:
                if (!(a > i.quantity)) {
                  e.next = 8;
                  break
                }
                return n.props.dispatch({
                  type: "base/switchAlertMsg",
                  payload: {msg: "err.InsufficientSurplus", type: "error"}
                }), e.abrupt("return");
              case 8:
                return e.next = 10, n.operateHandel("withdraw");
              case 10:
                n.props.dispatch({
                  type: "pool/withdraw",
                  payload: {poolAddr: o, amount: a, tokenDecimal: c}
                }), e.next = 16;
                break;
              case 13:
                e.prev = 13, e.t0 = e.catch(0);
              case 16:
              case"end":
                return e.stop()
            }
          }), e, null, [[0, 13]])
        }))), n.max = Nt(regeneratorRuntime.mark((function e() {
          var t, r;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                t = It(n), r = t.state.tokenBalance, n.setState({amount: r.quantity});
              case 2:
              case"end":
                return e.stop()
            }
          }), e)
        }))), n.inputChangeHandle = function () {
          var e = event.target.value;
          n.setState({amount: e})
        }, n.operateHandel = function (e) {
          n.props.dispatch({type: "base/savePayload", payload: {operateName: e}})
        }, n.state = {
          amount: "",
          tokenBalance: new x.c(0),
          tokenName: "",
          tokenAddr: "",
          poolAddr: "",
          tokenDecimal: ""
        }, n
      }

      var n, r, a, o;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Mt(e, t)
      }(t, e), n = t, (r = [{
        key: "componentDidMount", value: (o = Nt(regeneratorRuntime.mark((function e() {
          var t, n, r, a, o, c, i, s;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                try {
                  t = this.props, n = t.withdrawToken, r = t.stakedAmount, a = Xt[n.symbol].name, o = Xt[n.symbol].address, c = Xt[n.symbol].poolAddr, i = Xt[n.symbol].decimal, s = r[n.symbol], this.setState({
                    tokenName: a,
                    tokenAddr: o,
                    poolAddr: c,
                    tokenDecimal: i,
                    tokenBalance: new x.c(s, n.symbol)
                  })
                } catch (e) {
                }
              case 1:
              case"end":
                return e.stop()
            }
          }), e, this)
        }))), function () {
          return o.apply(this, arguments)
        })
      }, {
        key: "render", value: function () {
          var e = this.state, t = e.tokenName, n = e.tokenBalance;
          return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {className: _.a.deposit}, c.a.createElement("div", {className: _.a.popSubTitle}, c.a.createElement(u.a, {
            id: "t.Withdraw",
            values: {token: t}
          })), c.a.createElement("div", {className: _.a.depositAvailable}, c.a.createElement(u.a, {
            id: "t.Available",
            values: {value: "".concat(n.Amount(), " ").concat(t)}
          })), c.a.createElement("div", {className: _.a.depositField}, c.a.createElement("input", {
            value: this.state.amount,
            onChange: this.inputChangeHandle,
            autoComplete: "off",
            type: "text",
            className: _.a.depositFieldInput
          }), c.a.createElement("span", {className: _.a.depositFieldUnit}, t), c.a.createElement("div", {
            className: _.a.button,
            onClick: this.max
          }, c.a.createElement(u.a, {id: "t.Max"}))), c.a.createElement("ul", {className: _.a.actions}, c.a.createElement("li", null, c.a.createElement("div", {
            className: _.a.buttonCancel,
            onClick: this.closePop
          }, c.a.createElement(u.a, {id: "t.Cancel"}))), c.a.createElement("li", null, c.a.createElement("div", {
            className: _.a.buttonLg,
            onClick: this.confirm
          }, c.a.createElement(u.a, {id: "t.Confirm"}))))))
        }
      }]) && Wt(n.prototype, r), a && Wt(n, a), t
    }(c.a.Component)) || Rt) || Rt) || Rt);

    function Ht(e) {
      return (Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function Ut(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function zt(e, t) {
      return !t || "object" !== Ht(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : t
    }

    function Jt(e) {
      return (Jt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function Vt(e, t) {
      return (Vt = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var Gt, Kt, qt = {
      Account: c.a.createElement(mt, {key: "Account"}),
      Warning: c.a.createElement(gt, {key: "Warning"}),
      Deposit: c.a.createElement(xt, {key: "Deposit"}),
      Withdraw: c.a.createElement(Zt, {key: "Withdraw"})
    }, Yt = (Bt = Object(s.connect)((function (e) {
      return {pop: e.base.pop}
    })), Object(i.withRouter)(Ft = Bt(Ft = function (e) {
      function t(e) {
        var n;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), (n = zt(this, Jt(t).call(this, e))).closePop = function () {
          n.props.dispatch({type: "base/openPop", payload: {pop: ""}})
        }, n.state = {}, n
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Vt(e, t)
      }(t, e), n = t, (r = [{
        key: "render", value: function () {
          var e = this.props.pop;
          return c.a.createElement(c.a.Fragment, null, "" != e && c.a.createElement("div", {className: _.a.pop}, c.a.createElement("div", {
            className: _.a.popMask,
            onClick: this.closePop
          }), c.a.createElement("div", {className: _.a.popContainer}, c.a.createElement("div", {className: _.a.popHd}, c.a.createElement("div", {
            className: _.a.popClose,
            onClick: this.closePop
          }, "x")), c.a.createElement("div", {className: _.a.popBd}, "" != e && qt[e]))))
        }
      }]) && Ut(n.prototype, r), a && Ut(n, a), t
    }(c.a.Component)) || Ft) || Ft);

    function Qt(e) {
      return (Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function $t(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function en(e, t) {
      return !t || "object" !== Qt(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }(e) : t
    }

    function tn(e) {
      return (tn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function nn(e, t) {
      return (nn = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    var rn = (Gt = Object(s.connect)((function (e) {
      return {alertMsg: e.base.alertMsg}
    })), Object(u.d)(Kt = Object(i.withRouter)(Kt = Gt(Kt = function (e) {
      function t(e) {
        var n;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t), (n = en(this, tn(t).call(this, e))).closePopup = function () {
          n.props.dispatch({type: "base/switchAlertMsg", payload: ""}), clearTimeout(n._auto)
        }, n._auto = null, n
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && nn(e, t)
      }(t, e), n = t, (r = [{
        key: "renderErrorContent", value: function (e) {
          var t = e ? e.msg : "";
          switch (Qt(t)) {
            case"string":
              return -1 != t.indexOf("err.") ? c.a.createElement(u.a, {id: t}) : t;
            case"object":
              return t;
            default:
              return JSON.stringify(t)
          }
        }
      }, {
        key: "render", value: function () {
          var e = this, t = this.props.alertMsg;
          return "" != t && (this._auto = setTimeout((function () {
            e.closePopup(), clearTimeout(e._auto)
          }), 3e3)), c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
            style: {
              width: "" == t ? "1px" : "300px",
              height: "" == t ? "1px" : "250px"
            }, className: "error" == t.type ? _.a.rightTip + " " + _.a.rightTipError : _.a.rightTip, ref: function (t) {
              e.obj = t
            }
          }, c.a.createElement("div", {
            className: _.a.rightTipContent,
            style: {right: "" == t ? "-300px" : "0"}
          }, this.renderErrorContent(t), c.a.createElement("div", {
            className: _.a.rightTipClose,
            onClick: this.closePopup
          }))))
        }
      }]) && $t(n.prototype, r), a && $t(n, a), t
    }(c.a.Component)) || Kt) || Kt) || Kt);
    t.default = function (e) {
      var t = e.history;
      return c.a.createElement(i.Router, {history: t}, c.a.createElement(S, {key: "App"}, c.a.createElement(Ge, {key: "Header"}), c.a.createElement(i.Route, {
        path: "/",
        exact: !0,
        component: H
      }), c.a.createElement(i.Route, {
        path: "/farms",
        exact: !0,
        component: me
      }), c.a.createElement(i.Route, {
        path: "/farms/:id",
        exact: !0,
        component: Fe
      }), c.a.createElement(i.Route, {
        path: "/stats",
        exact: !0,
        component: Re
      }), c.a.createElement(nt, {key: "Footer"}), c.a.createElement(Yt, {key: "Pop"}), c.a.createElement(rn, {key: "Alert"})))
    }
  }, 512: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(8), a = n.n(r);
    n(410);
    var o = n(300), c = n(294), i = n.n(c), s = a()({
      onError: function (e, t) {
        t({type: "base/switchAlertMsg", payload: ""}), t({
          type: "base/switchAlertMsg",
          payload: {msg: e.toString(), type: "error"}
        })
      }, history: i()()
    });
    s.use(Object(o.a)()), s.model(n(412).default), s.model(n(415).default), s.router(n(511).default), s.start("#root")
  }, 6: function (e, t, n) {
    "use strict";

    function r(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
        var n = [], r = !0, a = !1, o = void 0;
        try {
          for (var c, i = e[Symbol.iterator](); !(r = (c = i.next()).done) && (n.push(c.value), !t || n.length !== t); r = !0) ;
        } catch (e) {
          a = !0, o = e
        } finally {
          try {
            r || null == i.return || i.return()
          } finally {
            if (a) throw o
          }
        }
        return n
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }()
    }

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    n.d(t, "b", (function () {
      return o
    })), n.d(t, "a", (function () {
      return c
    })), n.d(t, "c", (function () {
      return i
    }));
    var o = [{
      symbol: "CARROT",
      name: "CARROT",
      precision: 8,
      publish: !0,
      icon: "🌎",
      show: !1,
      pairs: "",
      apiAddress: "TNandzWRSQumP7SatFNFCKWMqg7eoqiWKE",
      totalAmount: 0
    }, {
      symbol: "MRK_TRX",
      name: "MRK/TRX",
      precision: 6,
      publish: !0,
      icon: "🐇",
      show: !0,
      pairs: "MRK/TRX",
      apiAddress: "TNandzWRSQumP7SatFNFCKWMqg7eoqiWKE",
      totalAmount: 10000,
      isNotHalf: true,
      sourceCode: "https://tronscan.io/#/contract/TYUqwFyacZCcXUaSNa3XpTUgbYmZ6GR7La"
    }, {
      symbol: "CEB_TRX",
      name: "CEB/TRX",
      precision: 8,
      publish: !0,
      icon: "💖",
      show: !0,
      pairs: "CEB/TRX",
      apiAddress: "TExMSTo94xZyWb26kgt9y6vUvYj4HzTvBb",
      totalAmount: 150,
      sourceCode: "https://tronscan.io/#/contract/TDdS6P1vJufvQVaSxRh7RtyLZgSgCHwNwD"
    }, {
      symbol: "HT",
      name: "HT",
      precision: 8,
      publish: !0,
      icon: "🍖",
      show: !0,
      pairs: "",
      apiAddress: "TLLBBiX3HqVZZsUQTBXgurA3pdw317PmjM",
      totalAmount: 150,
      sourceCode: "https://tronscan.io/#/contract/TNNp1C5GygYnPgShwD4Bnv8LmKqopt7fuH/code"
    }, {
      symbol: "SUN",
      name: "SUN",
      precision: 8,
      publish: !0,
      icon: "😎",
      show: !0,
      pairs: "",
      apiAddress: "TUEYcyPAqc4hTg1fSuBCPc18vGWcJDECVw",
      totalAmount: 100,
      sourceCode: "https://tronscan.io/#/contract/TDaNmVz9ACz63tK3X41fXLgWWbrixG7b2Z/code"
    }, {
      symbol: "JFI",
      name: "JFI",
      precision: 8,
      publish: !0,
      icon: "👨",
      show: !0,
      pairs: "",
      apiAddress: "TA6NMuj45t5yn4SkhqjCmabYGZ1jw3n7EE",
      totalAmount: 100,
      sourceCode: "https://tronscan.io/#/contract/TE2D56fc851d6ewbcHJLK15a2LV17hVVev/code"
    }, {
      symbol: "CEB",
      name: "CEB",
      precision: 8,
      publish: !1,
      icon: "💖",
      show: !1,
      pairs: "",
      apiAddress: "TLzA9pHSLbjbbmbA2p7gyEnvXy4mHbrZPv",
      totalAmount: 0
    }, {
      symbol: "KEY",
      name: "KEY",
      precision: 8,
      publish: !1,
      icon: "🥝",
      show: !1,
      pairs: "",
      apiAddress: "TLzA9pHSLbjbbmbA2p7gyEnvXy4mHbrZPv",
      totalAmount: 0
    }, {
      symbol: "USDT",
      name: "USDT",
      precision: 8,
      publish: !0,
      icon: "🎑",
      show: !0,
      pairs: "",
      apiAddress: "TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE",
      totalAmount: 100,
      sourceCode: "https://tronscan.io/#/contract/TG9NDV2V2YXaXwXNxCcFbNg5kKG9FLHJC9/code"
    }, {
      symbol: "TAI",
      name: "TAI",
      precision: 8,
      publish: !0,
      icon: "🍑",
      show: !0,
      pairs: "",
      apiAddress: "TWJRYGpbRVVw7VEpxF51L8G3hpLaZ2wWaj",
      totalAmount: 100,
      sourceCode: "https://tronscan.io/#/contract/TGdkeiGUfuwMK5yKSAu3nUjfo4A6rMDQJH/code"
    }, {
      symbol: "MFI",
      name: "MFI",
      precision: 8,
      publish: !0,
      icon: "🥂",
      show: !0,
      pairs: "",
      apiAddress: "TLViGYtFaRQKB38DjBoHqJpDwaXqYSiqYS",
      totalAmount: 100,
      sourceCode: "https://tronscan.io/#/contract/TBNE4n6cVw4hfoWQdX4Y5CRfebp3RVPQF5/code"
    }, {
      symbol: "JST_TRX",
      name: "JST/TRX",
      precision: 8,
      publish: !1,
      icon: "🍋",
      show: !1,
      pairs: "JST/TRX",
      apiAddress: "TPdxYoWMNkUZ1BcAbMXfNVRs3ruGfy71C5",
      totalAmount: 2e5
    }, {
      symbol: "PEARL",
      name: "PEARL",
      precision: 8,
      publish: !1,
      icon: "🍡",
      show: !1,
      pairs: "",
      apiAddress: "TBDGmmtD82R4jANsH63zwZztHWEdKEyC4n",
      totalAmount: 0
    }], c = o.reduce((function (e, t) {
      return e[t.symbol] = t, e
    }), {}), i = function () {
      function e(t, n) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.symbol = n;
        var r = c[n];
        void 0 !== r ? this.precision = r.precision : (t = 0, this.precision = 4);
        var a = Math.pow(10, this.precision);
        this.quantity = Math.floor(t * a + .1) / a
      }

      var t, n, o;
      return t = e, o = [{
        key: "parse", value: function (t) {
          var n = r(t.split(" "), 2), a = n[0], o = n[1];
          return new e(parseFloat(a), o)
        }
      }, {
        key: "fromAmount", value: function (t, n) {
          var r = c[n];
          return new e(void 0 !== r ? t / Math.pow(10, r.precision) : 0, n)
        }
      }], (n = [{
        key: "add", value: function (t) {
          return new e(this.quantity + t, this.symbol)
        }
      }, {
        key: "mul", value: function (t) {
          return new e(this.quantity * t, this.symbol)
        }
      }, {
        key: "displayAmount", value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
            t = Math.log(Math.abs(this.quantity)) * Math.LOG10E + 1 | 0,
            n = Math.min(e - t < 0 ? 0 : e - t, this.precision);
          return this.quantity.toFixed(n)
        }
      }, {
        key: "display", value: function () {
          return "".concat(this.displayAmount(), " ").concat(this.symbol)
        }
      }, {
        key: "Amount", value: function () {
          return this.quantity.toFixed(this.precision)
        }
      }, {
        key: "toString", value: function () {
          return "".concat(this.Amount(), " ").concat(this.symbol)
        }
      }]) && a(t.prototype, n), o && a(t, o), e
    }()
  }, 9: function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
      return p
    }));
    var r, a = n(75);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function c(e, t, n, r, a) {
      var o = {};
      return Object.keys(r).forEach((function (e) {
        o[e] = r[e]
      })), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce((function (n, r) {
        return r(e, t, n) || n
      }), o), a && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(a) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
    }

    function i(e, t, n, r, a, o, c) {
      try {
        var i = e[o](c), s = i.value
      } catch (e) {
        return void n(e)
      }
      i.done ? t(s) : Promise.resolve(s).then(r, a)
    }

    function s(e) {
      return function () {
        var t = this, n = arguments;
        return new Promise((function (r, a) {
          var o = e.apply(t, n);

          function c(e) {
            i(o, r, a, c, s, "next", e)
          }

          function s(e) {
            i(o, r, a, c, s, "throw", e)
          }

          c(void 0)
        }))
      }
    }

    function u(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function l(e, t) {
      if (!e) return 0;
      var n = e.toString(10), r = n.length;
      if (r < t - 3) return 0;
      if (r > t) return +(n.substring(0, r - t) + "." + n.substring(r - t, r - t + 4 > r ? r - t + 4 : r));
      for (var a = t - r, o = "0.", c = 0; c < a; c++) o += "0";
      var i = n.substring(0, 4 - a);
      return +(o = o.concat(i))
    }

    function p(e, t) {
      if (!e) return a.ethers.constants.Zero;
      var n = e.toString().split("."), r = 0, o = n[0];
      if (n.length > 1) {
        var c = n[1];
        c.length > t && (c = c.substring(0, t)), o += c, r = c.length
      }
      var i = a.utils.bigNumberify(10), s = i.pow(r);
      return a.utils.bigNumberify(o).mul(i.pow(t)).div(s)
    }

    var m = function e(t) {
      u(this, e), this.error = t
    };

    function f(e, t, n) {
      var r = this, a = n.value;
      n.value = function () {
        var e = s(regeneratorRuntime.mark((function e() {
          var t, n, o, c = arguments;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                for (e.prev = 0, t = c.length, n = new Array(t), o = 0; o < t; o++) n[o] = c[o];
                return e.next = 4, a.apply(r, n);
              case 4:
                return e.abrupt("return", e.sent);
              case 7:
                if (e.prev = 7, e.t0 = e.catch(0), !(e.t0 instanceof m)) {
                  e.next = 13;
                  break
                }
                throw e.t0;
              case 13:
                throw new m(e.t0);
              case 14:
              case"end":
                return e.stop()
            }
          }), e, null, [[0, 7]])
        })));
        return function () {
          return e.apply(this, arguments)
        }
      }()
    }

    var d = null, y = (c((r = function () {
      function e() {
        u(this, e), this.scatter = null, this.connectngPromise = null
      }

      var t, n, r, a, c, i, p, m, f, y, b, h, v, k, g, w, E, j, A;
      return t = e, (n = [{
        key: "_getScatter", value: function () {
          var e = this;
          return null != e.connectngPromise ? e.connectngPromise : null != e.scatter && e.scatter ? e.scatter : (e.connectngPromise = new Promise((function (t, n) {
            var r = {times: 0};
            !function n() {
              window && window.hasOwnProperty("tronWeb") || (r.times++, setTimeout(n, 1e3)), e.scatter = window.tronWeb, e.connectngPromise = null, t(e.scatter)
            }()
          })), e.connectngPromise)
        }
      }, {
        key: "isInstalled", value: function () {
          return !!window.tronWeb
        }
      }, {
        key: "isLoggedIn", value: function () {
          return window.tronWeb && window.tronWeb.ready
        }
      }, {
        key: "getAccountAddress", value: (A = s(regeneratorRuntime.mark((function e() {
          var t;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return t = e.sent, e.abrupt("return", t.defaultAddress.base58);
              case 4:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function () {
          return A.apply(this, arguments)
        })
      }, {
        key: "trxBalance", value: (j = s(regeneratorRuntime.mark((function e() {
          var t;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return t = e.sent, e.next = 5, t.trx.getBalance(t.getAccountAddress());
              case 5:
                return e.abrupt("return", e.sent);
              case 6:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function () {
          return j.apply(this, arguments)
        })
      }, {
        key: "tokenBalance", value: (E = s(regeneratorRuntime.mark((function e(t, n) {
          var r, a, o;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return r = e.sent, e.next = 5, r.contract().at(t);
              case 5:
                return a = e.sent, e.next = 8, a.balanceOf(r.defaultAddress.base58).call();
              case 8:
                return o = e.sent, e.abrupt("return", l(r.toBigNumber(o._hex), n));
              case 10:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e, t) {
          return E.apply(this, arguments)
        })
      }, {
        key: "tokenBalancePairs", value: (w = s(regeneratorRuntime.mark((function e(t, n) {
          var r, a, o;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return r = e.sent, a = [{
                  type: "address",
                  value: r.defaultAddress.base58
                }], e.next = 6, r.transactionBuilder.triggerConstantContract(t, "balanceOf(address)", {}, a, r.defaultAddress.base58);
              case 6:
                return o = e.sent, e.abrupt("return", l(r.toBigNumber("0x".concat(o.constant_result[0])), n));
              case 8:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e, t) {
          return w.apply(this, arguments)
        })
      }, {
        key: "tokenTotalSupply", value: (g = s(regeneratorRuntime.mark((function e(t) {
          var n, r, a;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return n = e.sent, e.next = 5, n.contract().at(t);
              case 5:
                return r = e.sent, e.next = 8, r.totalSupply().call();
              case 8:
                return a = e.sent, e.abrupt("return", l(n.toBigNumber(a._hex), 18));
              case 10:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e) {
          return g.apply(this, arguments)
        })
      }, {
        key: "allowanceAmount", value: (k = s(regeneratorRuntime.mark((function e(t, n) {
          var r, a, o;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return r = e.sent, e.next = 5, r.contract().at(t);
              case 5:
                return a = e.sent, e.next = 8, a.allowance(r.defaultAddress.base58, n).call();
              case 8:
                if (o = e.sent, "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" !== t) {
                  e.next = 11;
                  break
                }
                return e.abrupt("return", r.toBigNumber(o.remaining._hex).toString(10));
              case 11:
                return e.abrupt("return", r.toBigNumber(o._hex).toString(10));
              case 12:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e, t) {
          return k.apply(this, arguments)
        })
      }, {
        key: "allowanceAmountPairs", value: (v = s(regeneratorRuntime.mark((function e(t, n) {
          var r, a, o;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return r = e.sent, a = [{type: "address", value: r.defaultAddress.base58}, {
                  type: "address",
                  value: n
                }], e.next = 6, r.transactionBuilder.triggerConstantContract(t, "allowance(address,address)", {}, a, r.defaultAddress.base58);
              case 6:
                return o = e.sent, e.abrupt("return", r.toBigNumber("0x".concat(o.constant_result[0])).toString(10));
              case 8:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e, t) {
          return v.apply(this, arguments)
        })
      }, {
        key: "approveMax", value: (h = s(regeneratorRuntime.mark((function e(t, n) {
          var r, a;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return r = e.sent, e.next = 5, r.contract().at(t);
              case 5:
                return a = e.sent, e.next = 8, a.approve(n, "115792089237316195423570985008687907853269984665640564039457584007913129639934").send({
                  feeLimit: 1e8,
                  callValue: 0,
                  shouldPollResponse: !0
                });
              case 8:
                return e.abrupt("return", e.sent);
              case 9:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e, t) {
          return h.apply(this, arguments)
        })
      }, {
        key: "approveMaxPairs", value: (b = s(regeneratorRuntime.mark((function e(t, n) {
          var r, a, o, c;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return r = e.sent, a = [{type: "address", value: n}, {
                  type: "uint256",
                  value: "115792089237316195423570985008687907853269984665640564039457584007913129639934"
                }], e.next = 6, r.transactionBuilder.triggerSmartContract(t, "approve(address,uint256)", {}, a, r.defaultAddress.base58);
              case 6:
                return o = e.sent, e.next = 9, r.trx.sign(o.transaction);
              case 9:
                return c = e.sent, e.next = 12, r.trx.sendRawTransaction(c);
              case 12:
                return e.abrupt("return", e.sent);
              case 13:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e, t) {
          return b.apply(this, arguments)
        })
      }, {
        key: "staked", value: (y = s(regeneratorRuntime.mark((function e(t, n) {
          var r, a, o;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return r = e.sent, e.next = 5, r.contract().at(t);
              case 5:
                return a = e.sent, e.next = 8, a.balanceOf(r.defaultAddress.base58).call();
              case 8:
                return o = e.sent, e.abrupt("return", l(r.toBigNumber(o._hex), n));
              case 10:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e, t) {
          return y.apply(this, arguments)
        })
      }, {
        key: "totalStaked", value: (f = s(regeneratorRuntime.mark((function e(t, n) {
          var r, a, o;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return r = e.sent, e.next = 5, r.contract().at(t);
              case 5:
                return a = e.sent, e.next = 8, a.totalSupply().call();
              case 8:
                return o = e.sent, e.abrupt("return", l(r.toBigNumber(o._hex), n));
              case 10:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e, t) {
          return f.apply(this, arguments)
        })
      }, {
        key: "earned", value: (m = s(regeneratorRuntime.mark((function e(t, n) {
          var r, a, o;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return r = e.sent, e.next = 5, r.contract().at(t);
              case 5:
                return a = e.sent, e.next = 8, a.earned(r.defaultAddress.base58).call();
              case 8:
                return o = e.sent, e.abrupt("return", l(r.toBigNumber(o._hex), n));
              case 10:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e, t) {
          return m.apply(this, arguments)
        })
      }, {
        key: "harvestAndUnstake", value: (p = s(regeneratorRuntime.mark((function e(t) {
          var n, r;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return n = e.sent, e.next = 5, n.contract().at(t);
              case 5:
                return r = e.sent, e.next = 8, r.exit().send({feeLimit: 1e8, callValue: 0, shouldPollResponse: !0});
              case 8:
                return e.abrupt("return", e.sent);
              case 9:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e) {
          return p.apply(this, arguments)
        })
      }, {
        key: "stake", value: (i = s(regeneratorRuntime.mark((function e(t, n) {
          var r, a;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return r = e.sent, e.next = 5, r.contract().at(t);
              case 5:
                return a = e.sent, e.next = 8, a.stake(n).send({feeLimit: 1e8, callValue: 0, shouldPollResponse: !0});
              case 8:
                return e.abrupt("return", e.sent);
              case 9:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e, t) {
          return i.apply(this, arguments)
        })
      }, {
        key: "withdraw", value: (c = s(regeneratorRuntime.mark((function e(t, n) {
          var r, a;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return r = e.sent, e.next = 5, r.contract().at(t);
              case 5:
                return a = e.sent, e.next = 8, a.withdraw(n).send({
                  feeLimit: 1e8,
                  callValue: 0,
                  shouldPollResponse: !0
                });
              case 8:
                return e.abrupt("return", e.sent);
              case 9:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e, t) {
          return c.apply(this, arguments)
        })
      }, {
        key: "harvest", value: (a = s(regeneratorRuntime.mark((function e(t) {
          var n, r;
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, d._getScatter();
              case 2:
                return n = e.sent, e.next = 5, n.contract().at(t);
              case 5:
                return r = e.sent, e.next = 8, r.getReward().send({
                  feeLimit: 1e8,
                  callValue: 0,
                  shouldPollResponse: !0
                });
              case 8:
                return e.abrupt("return", e.sent);
              case 9:
              case"end":
                return e.stop()
            }
          }), e)
        }))), function (e) {
          return a.apply(this, arguments)
        })
      }]) && o(t.prototype, n), r && o(t, r), e
    }()).prototype, "getAccountAddress", [f], Object.getOwnPropertyDescriptor(r.prototype, "getAccountAddress"), r.prototype), c(r.prototype, "trxBalance", [f], Object.getOwnPropertyDescriptor(r.prototype, "trxBalance"), r.prototype), c(r.prototype, "tokenBalance", [f], Object.getOwnPropertyDescriptor(r.prototype, "tokenBalance"), r.prototype), c(r.prototype, "tokenBalancePairs", [f], Object.getOwnPropertyDescriptor(r.prototype, "tokenBalancePairs"), r.prototype), c(r.prototype, "tokenTotalSupply", [f], Object.getOwnPropertyDescriptor(r.prototype, "tokenTotalSupply"), r.prototype), c(r.prototype, "allowanceAmount", [f], Object.getOwnPropertyDescriptor(r.prototype, "allowanceAmount"), r.prototype), c(r.prototype, "allowanceAmountPairs", [f], Object.getOwnPropertyDescriptor(r.prototype, "allowanceAmountPairs"), r.prototype), c(r.prototype, "approveMax", [f], Object.getOwnPropertyDescriptor(r.prototype, "approveMax"), r.prototype), c(r.prototype, "approveMaxPairs", [f], Object.getOwnPropertyDescriptor(r.prototype, "approveMaxPairs"), r.prototype), c(r.prototype, "staked", [f], Object.getOwnPropertyDescriptor(r.prototype, "staked"), r.prototype), c(r.prototype, "totalStaked", [f], Object.getOwnPropertyDescriptor(r.prototype, "totalStaked"), r.prototype), c(r.prototype, "earned", [f], Object.getOwnPropertyDescriptor(r.prototype, "earned"), r.prototype), c(r.prototype, "harvestAndUnstake", [f], Object.getOwnPropertyDescriptor(r.prototype, "harvestAndUnstake"), r.prototype), c(r.prototype, "stake", [f], Object.getOwnPropertyDescriptor(r.prototype, "stake"), r.prototype), c(r.prototype, "withdraw", [f], Object.getOwnPropertyDescriptor(r.prototype, "withdraw"), r.prototype), c(r.prototype, "harvest", [f], Object.getOwnPropertyDescriptor(r.prototype, "harvest"), r.prototype), r);
    d = new y, t.b = d
  }
});
