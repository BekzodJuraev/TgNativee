(() => {
    var __webpack_modules__ = {
        448: module => {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(window, (function() {
                return function(e) {
                    var t = {};
                    function n(a) {
                        if (t[a]) return t[a].exports;
                        var r = t[a] = {
                            i: a,
                            l: !1,
                            exports: {}
                        };
                        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                    }
                    return n.m = e, n.c = t, n.d = function(e, t, a) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: a
                        });
                    }, n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                    }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var a = Object.create(null);
                        if (n.r(a), Object.defineProperty(a, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function(t) {
                            return e[t];
                        }.bind(null, r));
                        return a;
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default;
                        } : function() {
                            return e;
                        };
                        return n.d(t, "a", t), t;
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }, n.p = "", n(n.s = 0);
                }([ function(e, t, n) {
                    "use strict";
                    n.r(t);
                    var a = [], r = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], i = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], o = {
                        t: "top",
                        r: "right",
                        b: "bottom",
                        l: "left",
                        c: "centered"
                    };
                    function s() {}
                    var l = [ "click", "focusin", "keydown", "input" ];
                    function d(e) {
                        l.forEach((function(t) {
                            e.addEventListener(t, e === document ? L : Y);
                        }));
                    }
                    function c(e) {
                        return Array.isArray(e) ? e.map(c) : "[object Object]" === x(e) ? Object.keys(e).reduce((function(t, n) {
                            return t[n] = c(e[n]), t;
                        }), {}) : e;
                    }
                    function u(e, t) {
                        var n = e.calendar.querySelector(".qs-overlay"), a = n && !n.classList.contains("qs-hidden");
                        t = t || new Date(e.currentYear, e.currentMonth), e.calendar.innerHTML = [ h(t, e, a), f(t, e, a), v(e, a) ].join(""), 
                        a && window.requestAnimationFrame((function() {
                            M(!0, e);
                        }));
                    }
                    function h(e, t, n) {
                        return [ '<div class="qs-controls' + (n ? " qs-blur" : "") + '">', '<div class="qs-arrow qs-left"></div>', '<div class="qs-month-year' + (t.disableYearOverlay ? " qs-disabled-year-overlay" : "") + '">', '<span class="qs-month">' + t.months[e.getMonth()] + "</span>", '<span class="qs-year">' + e.getFullYear() + "</span>", "</div>", '<div class="qs-arrow qs-right"></div>', "</div>" ].join("");
                    }
                    function f(e, t, n) {
                        var a = t.currentMonth, r = t.currentYear, i = t.dateSelected, o = t.maxDate, s = t.minDate, l = t.showAllDates, d = t.days, c = t.disabledDates, u = t.startDay, h = t.weekendIndices, f = t.events, v = t.getRange ? t.getRange() : {}, m = +v.start, y = +v.end, p = g(new Date(e).setDate(1)), w = p.getDay() - u, D = w < 0 ? 7 : 0;
                        p.setMonth(p.getMonth() + 1), p.setDate(0);
                        var b = p.getDate(), q = [], S = D + 7 * ((w + b) / 7 | 0);
                        S += (w + b) % 7 ? 7 : 0;
                        for (var M = 1; M <= S; M++) {
                            var E = (M - 1) % 7, x = d[E], C = M - (w >= 0 ? w : 7 + w), L = new Date(r, a, C), Y = f[+L], j = C < 1 || C > b, O = j ? C < 1 ? -1 : 1 : 0, P = j && !l, k = P ? "" : L.getDate(), N = +L == +i, _ = E === h[0] || E === h[1], I = m !== y, A = "qs-square " + x;
                            Y && !P && (A += " qs-event"), j && (A += " qs-outside-current-month"), !l && j || (A += " qs-num"), 
                            N && (A += " qs-active"), (c[+L] || t.disabler(L) || _ && t.noWeekends || s && +L < +s || o && +L > +o) && !P && (A += " qs-disabled"), 
                            +g(new Date) == +L && (A += " qs-current"), +L === m && y && I && (A += " qs-range-start"), 
                            +L > m && +L < y && (A += " qs-range-middle"), +L === y && m && I && (A += " qs-range-end"), 
                            P && (A += " qs-empty", k = ""), q.push('<div class="' + A + '" data-direction="' + O + '">' + k + "</div>");
                        }
                        var R = d.map((function(e) {
                            return '<div class="qs-square qs-day">' + e + "</div>";
                        })).concat(q);
                        return R.unshift('<div class="qs-squares' + (n ? " qs-blur" : "") + '">'), R.push("</div>"), 
                        R.join("");
                    }
                    function v(e, t) {
                        var n = e.overlayPlaceholder, a = e.overlayButton;
                        return [ '<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">', "<div>", '<input class="qs-overlay-year" placeholder="' + n + '" inputmode="numeric" />', '<div class="qs-close">&#10005;</div>', "</div>", '<div class="qs-overlay-month-container">' + e.overlayMonths.map((function(e, t) {
                            return '<div class="qs-overlay-month" data-month-num="' + t + '">' + e + "</div>";
                        })).join("") + "</div>", '<div class="qs-submit qs-disabled">' + a + "</div>", "</div>" ].join("");
                    }
                    function m(e, t, n) {
                        var a = t.el, r = t.calendar.querySelector(".qs-active"), i = e.textContent, o = t.sibling;
                        (a.disabled || a.readOnly) && t.respectDisabledReadOnly || (t.dateSelected = n ? void 0 : new Date(t.currentYear, t.currentMonth, i), 
                        r && r.classList.remove("qs-active"), n || e.classList.add("qs-active"), p(a, t, n), 
                        n || q(t), o && (y({
                            instance: t,
                            deselect: n
                        }), t.first && !o.dateSelected && (o.currentYear = t.currentYear, o.currentMonth = t.currentMonth, 
                        o.currentMonthName = t.currentMonthName), u(t), u(o)), t.onSelect(t, n ? void 0 : new Date(t.dateSelected)));
                    }
                    function y(e) {
                        var t = e.instance.first ? e.instance : e.instance.sibling, n = t.sibling;
                        t === e.instance ? e.deselect ? (t.minDate = t.originalMinDate, n.minDate = n.originalMinDate) : n.minDate = t.dateSelected : e.deselect ? (n.maxDate = n.originalMaxDate, 
                        t.maxDate = t.originalMaxDate) : t.maxDate = n.dateSelected;
                    }
                    function p(e, t, n) {
                        if (!t.nonInput) return n ? e.value = "" : t.formatter !== s ? t.formatter(e, t.dateSelected, t) : void (e.value = t.dateSelected.toDateString());
                    }
                    function w(e, t, n, a) {
                        n || a ? (n && (t.currentYear = +n), a && (t.currentMonth = +a)) : (t.currentMonth += e.contains("qs-right") ? 1 : -1, 
                        12 === t.currentMonth ? (t.currentMonth = 0, t.currentYear++) : -1 === t.currentMonth && (t.currentMonth = 11, 
                        t.currentYear--)), t.currentMonthName = t.months[t.currentMonth], u(t), t.onMonthChange(t);
                    }
                    function D(e) {
                        if (!e.noPosition) {
                            var t = e.position.top, n = e.position.right;
                            if (e.position.centered) return e.calendarContainer.classList.add("qs-centered");
                            var a = e.positionedEl.getBoundingClientRect(), r = e.el.getBoundingClientRect(), i = e.calendarContainer.getBoundingClientRect(), o = r.top - a.top + (t ? -1 * i.height : r.height) + "px", s = r.left - a.left + (n ? r.width - i.width : 0) + "px";
                            e.calendarContainer.style.setProperty("top", o), e.calendarContainer.style.setProperty("left", s);
                        }
                    }
                    function b(e) {
                        return "[object Date]" === x(e) && "Invalid Date" !== e.toString();
                    }
                    function g(e) {
                        if (b(e) || "number" == typeof e && !isNaN(e)) {
                            var t = new Date(+e);
                            return new Date(t.getFullYear(), t.getMonth(), t.getDate());
                        }
                    }
                    function q(e) {
                        e.disabled || !e.calendarContainer.classList.contains("qs-hidden") && !e.alwaysShow && ("overlay" !== e.defaultView && M(!0, e), 
                        e.calendarContainer.classList.add("qs-hidden"), e.onHide(e));
                    }
                    function S(e) {
                        e.disabled || (e.calendarContainer.classList.remove("qs-hidden"), "overlay" === e.defaultView && M(!1, e), 
                        D(e), e.onShow(e));
                    }
                    function M(e, t) {
                        var n = t.calendar, a = n.querySelector(".qs-overlay"), r = a.querySelector(".qs-overlay-year"), i = n.querySelector(".qs-controls"), o = n.querySelector(".qs-squares");
                        e ? (a.classList.add("qs-hidden"), i.classList.remove("qs-blur"), o.classList.remove("qs-blur"), 
                        r.value = "") : (a.classList.remove("qs-hidden"), i.classList.add("qs-blur"), o.classList.add("qs-blur"), 
                        r.focus());
                    }
                    function E(e, t, n, a) {
                        var r = isNaN(+(new Date).setFullYear(t.value || void 0)), i = r ? null : t.value;
                        if (13 === e.which || 13 === e.keyCode || "click" === e.type) a ? w(null, n, i, a) : r || t.classList.contains("qs-disabled") || w(null, n, i); else if (n.calendar.contains(t)) n.calendar.querySelector(".qs-submit").classList[r ? "add" : "remove"]("qs-disabled");
                    }
                    function x(e) {
                        return {}.toString.call(e);
                    }
                    function C(e) {
                        a.forEach((function(t) {
                            t !== e && q(t);
                        }));
                    }
                    function L(e) {
                        if (!e.__qs_shadow_dom) {
                            var t = e.which || e.keyCode, n = e.type, r = e.target, o = r.classList, s = a.filter((function(e) {
                                return e.calendar.contains(r) || e.el === r;
                            }))[0], l = s && s.calendar.contains(r);
                            if (!(s && s.isMobile && s.disableMobile)) if ("click" === n) {
                                if (!s) return a.forEach(q);
                                if (s.disabled) return;
                                var d = s.calendar, c = s.calendarContainer, h = s.disableYearOverlay, f = s.nonInput, v = d.querySelector(".qs-overlay-year"), y = !!d.querySelector(".qs-hidden"), p = d.querySelector(".qs-month-year").contains(r), D = r.dataset.monthNum;
                                if (s.noPosition && !l) (c.classList.contains("qs-hidden") ? S : q)(s); else if (o.contains("qs-arrow")) w(o, s); else if (p || o.contains("qs-close")) h || M(!y, s); else if (D) E(e, v, s, D); else {
                                    if (o.contains("qs-disabled")) return;
                                    if (o.contains("qs-num")) {
                                        var b = r.textContent, g = +r.dataset.direction, x = new Date(s.currentYear, s.currentMonth + g, b);
                                        if (g) {
                                            s.currentYear = x.getFullYear(), s.currentMonth = x.getMonth(), s.currentMonthName = i[s.currentMonth], 
                                            u(s);
                                            for (var L, Y = s.calendar.querySelectorAll('[data-direction="0"]'), j = 0; !L; ) {
                                                var O = Y[j];
                                                O.textContent === b && (L = O), j++;
                                            }
                                            r = L;
                                        }
                                        return void (+x == +s.dateSelected ? m(r, s, !0) : r.classList.contains("qs-disabled") || m(r, s));
                                    }
                                    o.contains("qs-submit") ? E(e, v, s) : f && r === s.el && (S(s), C(s));
                                }
                            } else if ("focusin" === n && s) S(s), C(s); else if ("keydown" === n && 9 === t && s) q(s); else if ("keydown" === n && s && !s.disabled) {
                                var P = !s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
                                13 === t && P && l ? E(e, r, s) : 27 === t && P && l && M(!0, s);
                            } else if ("input" === n) {
                                if (!s || !s.calendar.contains(r)) return;
                                var k = s.calendar.querySelector(".qs-submit"), N = r.value.split("").reduce((function(e, t) {
                                    return e || "0" !== t ? e + (t.match(/[0-9]/) ? t : "") : "";
                                }), "").slice(0, 4);
                                r.value = N, k.classList[4 === N.length ? "remove" : "add"]("qs-disabled");
                            }
                        }
                    }
                    function Y(e) {
                        L(e), e.__qs_shadow_dom = !0;
                    }
                    function j(e, t) {
                        l.forEach((function(n) {
                            e.removeEventListener(n, t);
                        }));
                    }
                    function O() {
                        S(this);
                    }
                    function P() {
                        q(this);
                    }
                    function k(e, t) {
                        var n = g(e), a = this.currentYear, r = this.currentMonth, i = this.sibling;
                        if (null == e) return this.dateSelected = void 0, p(this.el, this, !0), i && (y({
                            instance: this,
                            deselect: !0
                        }), u(i)), u(this), this;
                        if (!b(e)) throw new Error("`setDate` needs a JavaScript Date object.");
                        if (this.disabledDates[+n] || n < this.minDate || n > this.maxDate) throw new Error("You can't manually set a date that's disabled.");
                        this.dateSelected = n, t && (this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), 
                        this.currentMonthName = this.months[n.getMonth()]), p(this.el, this), i && (y({
                            instance: this
                        }), u(i));
                        var o = a === n.getFullYear() && r === n.getMonth();
                        return o || t ? u(this, n) : o || u(this, new Date(a, r, 1)), this;
                    }
                    function N(e) {
                        return I(this, e, !0);
                    }
                    function _(e) {
                        return I(this, e);
                    }
                    function I(e, t, n) {
                        var a = e.dateSelected, r = e.first, i = e.sibling, o = e.minDate, s = e.maxDate, l = g(t), d = n ? "Min" : "Max";
                        function c() {
                            return "original" + d + "Date";
                        }
                        function h() {
                            return d.toLowerCase() + "Date";
                        }
                        function f() {
                            return "set" + d;
                        }
                        function v() {
                            throw new Error("Out-of-range date passed to " + f());
                        }
                        if (null == t) e[c()] = void 0, i ? (i[c()] = void 0, n ? (r && !a || !r && !i.dateSelected) && (e.minDate = void 0, 
                        i.minDate = void 0) : (r && !i.dateSelected || !r && !a) && (e.maxDate = void 0, 
                        i.maxDate = void 0)) : e[h()] = void 0; else {
                            if (!b(t)) throw new Error("Invalid date passed to " + f());
                            i ? ((r && n && l > (a || s) || r && !n && l < (i.dateSelected || o) || !r && n && l > (i.dateSelected || s) || !r && !n && l < (a || o)) && v(), 
                            e[c()] = l, i[c()] = l, (n && (r && !a || !r && !i.dateSelected) || !n && (r && !i.dateSelected || !r && !a)) && (e[h()] = l, 
                            i[h()] = l)) : ((n && l > (a || s) || !n && l < (a || o)) && v(), e[h()] = l);
                        }
                        return i && u(i), u(e), e;
                    }
                    function A() {
                        var e = this.first ? this : this.sibling, t = e.sibling;
                        return {
                            start: e.dateSelected,
                            end: t.dateSelected
                        };
                    }
                    function R() {
                        var e = this.shadowDom, t = this.positionedEl, n = this.calendarContainer, r = this.sibling, i = this;
                        this.inlinePosition && (a.some((function(e) {
                            return e !== i && e.positionedEl === t;
                        })) || t.style.setProperty("position", null));
                        n.remove(), a = a.filter((function(e) {
                            return e !== i;
                        })), r && delete r.sibling, a.length || j(document, L);
                        var o = a.some((function(t) {
                            return t.shadowDom === e;
                        }));
                        for (var s in e && !o && j(e, Y), this) delete this[s];
                        a.length || l.forEach((function(e) {
                            document.removeEventListener(e, L);
                        }));
                    }
                    function F(e, t) {
                        var n = new Date(e);
                        if (!b(n)) throw new Error("Invalid date passed to `navigate`");
                        this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), u(this), t && this.onMonthChange(this);
                    }
                    function B() {
                        var e = !this.calendarContainer.classList.contains("qs-hidden"), t = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");
                        e && M(t, this);
                    }
                    t.default = function(e, t) {
                        var n = function(e, t) {
                            var n, l, d = function(e) {
                                var t = c(e);
                                t.events && (t.events = t.events.reduce((function(e, t) {
                                    if (!b(t)) throw new Error('"options.events" must only contain valid JavaScript Date objects.');
                                    return e[+g(t)] = !0, e;
                                }), {}));
                                [ "startDate", "dateSelected", "minDate", "maxDate" ].forEach((function(e) {
                                    var n = t[e];
                                    if (n && !b(n)) throw new Error('"options.' + e + '" needs to be a valid JavaScript Date object.');
                                    t[e] = g(n);
                                }));
                                var n = t.position, i = t.maxDate, l = t.minDate, d = t.dateSelected, u = t.overlayPlaceholder, h = t.overlayButton, f = t.startDay, v = t.id;
                                if (t.startDate = g(t.startDate || d || new Date), t.disabledDates = (t.disabledDates || []).reduce((function(e, t) {
                                    var n = +g(t);
                                    if (!b(t)) throw new Error('You supplied an invalid date to "options.disabledDates".');
                                    if (n === +g(d)) throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');
                                    return e[n] = 1, e;
                                }), {}), t.hasOwnProperty("id") && null == v) throw new Error("`id` cannot be `null` or `undefined`");
                                if (null != v) {
                                    var m = a.filter((function(e) {
                                        return e.id === v;
                                    }));
                                    if (m.length > 1) throw new Error("Only two datepickers can share an id.");
                                    m.length ? (t.second = !0, t.sibling = m[0]) : t.first = !0;
                                }
                                var y = [ "tr", "tl", "br", "bl", "c" ].some((function(e) {
                                    return n === e;
                                }));
                                if (n && !y) throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');
                                function p(e) {
                                    throw new Error('"dateSelected" in options is ' + (e ? "less" : "greater") + ' than "' + (e || "max") + 'Date".');
                                }
                                if (t.position = function(e) {
                                    var t = e[0], n = e[1], a = {};
                                    a[o[t]] = 1, n && (a[o[n]] = 1);
                                    return a;
                                }(n || "bl"), i < l) throw new Error('"maxDate" in options is less than "minDate".');
                                d && (l > d && p("min"), i < d && p());
                                if ([ "onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler" ].forEach((function(e) {
                                    "function" != typeof t[e] && (t[e] = s);
                                })), [ "customDays", "customMonths", "customOverlayMonths" ].forEach((function(e, n) {
                                    var a = t[e], r = n ? 12 : 7;
                                    if (a) {
                                        if (!Array.isArray(a) || a.length !== r || a.some((function(e) {
                                            return "string" != typeof e;
                                        }))) throw new Error('"' + e + '" must be an array with ' + r + " strings.");
                                        t[n ? n < 2 ? "months" : "overlayMonths" : "days"] = a;
                                    }
                                })), f && f > 0 && f < 7) {
                                    var w = (t.customDays || r).slice(), D = w.splice(0, f);
                                    t.customDays = w.concat(D), t.startDay = +f, t.weekendIndices = [ w.length - 1, w.length ];
                                } else t.startDay = 0, t.weekendIndices = [ 6, 0 ];
                                "string" != typeof u && delete t.overlayPlaceholder;
                                "string" != typeof h && delete t.overlayButton;
                                var q = t.defaultView;
                                if (q && "calendar" !== q && "overlay" !== q) throw new Error('options.defaultView must either be "calendar" or "overlay".');
                                return t.defaultView = q || "calendar", t;
                            }(t || {
                                startDate: g(new Date),
                                position: "bl",
                                defaultView: "calendar"
                            }), u = e;
                            if ("string" == typeof u) u = "#" === u[0] ? document.getElementById(u.slice(1)) : document.querySelector(u); else {
                                if ("[object ShadowRoot]" === x(u)) throw new Error("Using a shadow DOM as your selector is not supported.");
                                for (var h, f = u.parentNode; !h; ) {
                                    var v = x(f);
                                    "[object HTMLDocument]" === v ? h = !0 : "[object ShadowRoot]" === v ? (h = !0, 
                                    n = f, l = f.host) : f = f.parentNode;
                                }
                            }
                            if (!u) throw new Error("No selector / element found.");
                            if (a.some((function(e) {
                                return e.el === u;
                            }))) throw new Error("A datepicker already exists on that element.");
                            var m = u === document.body, y = n ? u.parentElement || n : m ? document.body : u.parentElement, w = n ? u.parentElement || l : y, D = document.createElement("div"), q = document.createElement("div");
                            D.className = "qs-datepicker-container qs-hidden", q.className = "qs-datepicker";
                            var M = {
                                shadowDom: n,
                                customElement: l,
                                positionedEl: w,
                                el: u,
                                parent: y,
                                nonInput: "INPUT" !== u.nodeName,
                                noPosition: m,
                                position: !m && d.position,
                                startDate: d.startDate,
                                dateSelected: d.dateSelected,
                                disabledDates: d.disabledDates,
                                minDate: d.minDate,
                                maxDate: d.maxDate,
                                noWeekends: !!d.noWeekends,
                                weekendIndices: d.weekendIndices,
                                calendarContainer: D,
                                calendar: q,
                                currentMonth: (d.startDate || d.dateSelected).getMonth(),
                                currentMonthName: (d.months || i)[(d.startDate || d.dateSelected).getMonth()],
                                currentYear: (d.startDate || d.dateSelected).getFullYear(),
                                events: d.events || {},
                                defaultView: d.defaultView,
                                setDate: k,
                                remove: R,
                                setMin: N,
                                setMax: _,
                                show: O,
                                hide: P,
                                navigate: F,
                                toggleOverlay: B,
                                onSelect: d.onSelect,
                                onShow: d.onShow,
                                onHide: d.onHide,
                                onMonthChange: d.onMonthChange,
                                formatter: d.formatter,
                                disabler: d.disabler,
                                months: d.months || i,
                                days: d.customDays || r,
                                startDay: d.startDay,
                                overlayMonths: d.overlayMonths || (d.months || i).map((function(e) {
                                    return e.slice(0, 3);
                                })),
                                overlayPlaceholder: d.overlayPlaceholder || "4-digit year",
                                overlayButton: d.overlayButton || "Submit",
                                disableYearOverlay: !!d.disableYearOverlay,
                                disableMobile: !!d.disableMobile,
                                isMobile: "ontouchstart" in window,
                                alwaysShow: !!d.alwaysShow,
                                id: d.id,
                                showAllDates: !!d.showAllDates,
                                respectDisabledReadOnly: !!d.respectDisabledReadOnly,
                                first: d.first,
                                second: d.second
                            };
                            if (d.sibling) {
                                var E = d.sibling, C = M, L = E.minDate || C.minDate, Y = E.maxDate || C.maxDate;
                                C.sibling = E, E.sibling = C, E.minDate = L, E.maxDate = Y, C.minDate = L, C.maxDate = Y, 
                                E.originalMinDate = L, E.originalMaxDate = Y, C.originalMinDate = L, C.originalMaxDate = Y, 
                                E.getRange = A, C.getRange = A;
                            }
                            d.dateSelected && p(u, M);
                            var j = getComputedStyle(w).position;
                            m || j && "static" !== j || (M.inlinePosition = !0, w.style.setProperty("position", "relative"));
                            var I = a.filter((function(e) {
                                return e.positionedEl === M.positionedEl;
                            }));
                            I.some((function(e) {
                                return e.inlinePosition;
                            })) && (M.inlinePosition = !0, I.forEach((function(e) {
                                e.inlinePosition = !0;
                            })));
                            D.appendChild(q), y.appendChild(D), M.alwaysShow && S(M);
                            return M;
                        }(e, t);
                        if (a.length || d(document), n.shadowDom && (a.some((function(e) {
                            return e.shadowDom === n.shadowDom;
                        })) || d(n.shadowDom)), a.push(n), n.second) {
                            var l = n.sibling;
                            y({
                                instance: n,
                                deselect: !n.dateSelected
                            }), y({
                                instance: l,
                                deselect: !l.dateSelected
                            }), u(l);
                        }
                        return u(n, n.startDate || n.dateSelected), n.alwaysShow && D(n), n;
                    };
                } ]).default;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function addClass(el, activeClass) {
            el.classList.add(activeClass);
        }
        function toggleClass(el, activeClass) {
            el.classList.toggle(activeClass);
        }
        function removeClassForArray(elSelector, activeClass) {
            const elems = document.querySelectorAll(elSelector);
            elems.forEach((el => {
                el.classList.remove(activeClass);
            }));
        }
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addTouchClass() {
            if (isMobile.any()) document.documentElement.classList.add("touch");
        }
        addTouchClass();
        function functions_getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) {
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    }));
                }));
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = functions_getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function showMore() {
            window.addEventListener("load", (function(e) {
                const showMoreBlocks = document.querySelectorAll("[data-showmore]");
                let showMoreBlocksRegular;
                let mdQueriesArray;
                if (showMoreBlocks.length) {
                    showMoreBlocksRegular = Array.from(showMoreBlocks).filter((function(item, index, self) {
                        return !item.dataset.showmoreMedia;
                    }));
                    showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
                    document.addEventListener("click", showMoreActions);
                    window.addEventListener("resize", showMoreActions);
                    mdQueriesArray = dataMediaQueries(showMoreBlocks, "showmoreMedia");
                    if (mdQueriesArray && mdQueriesArray.length) {
                        mdQueriesArray.forEach((mdQueriesItem => {
                            mdQueriesItem.matchMedia.addEventListener("change", (function() {
                                initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                            }));
                        }));
                        initItemsMedia(mdQueriesArray);
                    }
                }
                function initItemsMedia(mdQueriesArray) {
                    mdQueriesArray.forEach((mdQueriesItem => {
                        initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                }
                function initItems(showMoreBlocks, matchMedia) {
                    showMoreBlocks.forEach((showMoreBlock => {
                        initItem(showMoreBlock, matchMedia);
                    }));
                }
                function initItem(showMoreBlock, matchMedia = false) {
                    showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
                    let showMoreContent = showMoreBlock.querySelectorAll("[data-showmore-content]");
                    let showMoreButton = showMoreBlock.querySelectorAll("[data-showmore-button]");
                    showMoreContent = Array.from(showMoreContent).filter((item => item.closest("[data-showmore]") === showMoreBlock))[0];
                    showMoreButton = Array.from(showMoreButton).filter((item => item.closest("[data-showmore]") === showMoreBlock))[0];
                    const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
                    if (matchMedia.matches || !matchMedia) if (hiddenHeight < getOriginalHeight(showMoreContent)) {
                        _slideUp(showMoreContent, 0, hiddenHeight);
                        showMoreButton.hidden = false;
                    } else {
                        _slideDown(showMoreContent, 0, hiddenHeight);
                        showMoreButton.hidden = true;
                    } else {
                        _slideDown(showMoreContent, 0, hiddenHeight);
                        showMoreButton.hidden = true;
                    }
                }
                function getHeight(showMoreBlock, showMoreContent) {
                    let hiddenHeight = 0;
                    const showMoreType = showMoreBlock.dataset.showmore ? showMoreBlock.dataset.showmore : "size";
                    if (showMoreType === "items") {
                        const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 3;
                        const showMoreItems = showMoreContent.children;
                        for (let index = 1; index < showMoreItems.length; index++) {
                            const showMoreItem = showMoreItems[index - 1];
                            hiddenHeight += showMoreItem.offsetHeight + +showMoreItem.dataset.gap;
                            if (index == showMoreTypeValue) break;
                        }
                    } else {
                        const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 150;
                        hiddenHeight = showMoreTypeValue;
                    }
                    return hiddenHeight;
                }
                function getOriginalHeight(showMoreContent) {
                    let parentHidden;
                    let hiddenHeight = showMoreContent.offsetHeight;
                    showMoreContent.style.removeProperty("height");
                    if (showMoreContent.closest(`[hidden]`)) {
                        parentHidden = showMoreContent.closest(`[hidden]`);
                        parentHidden.hidden = false;
                    }
                    let originalHeight = showMoreContent.offsetHeight;
                    parentHidden ? parentHidden.hidden = true : null;
                    showMoreContent.style.height = `${hiddenHeight}px`;
                    return originalHeight;
                }
                function showMoreActions(e) {
                    const targetEvent = e.target;
                    const targetType = e.type;
                    if (targetType === "click") {
                        if (targetEvent.closest("[data-showmore-button]")) {
                            const showMoreButton = targetEvent.closest("[data-showmore-button]");
                            const showMoreBlock = showMoreButton.closest("[data-showmore]");
                            const showMoreContent = showMoreBlock.querySelector("[data-showmore-content]");
                            const showMoreSpeed = showMoreBlock.dataset.showmoreButton ? showMoreBlock.dataset.showmoreButton : "500";
                            const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
                            if (!showMoreContent.classList.contains("_slide")) {
                                showMoreBlock.classList.contains("_showmore-active") ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight) : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
                                showMoreBlock.classList.toggle("_showmore-active");
                            }
                        }
                    } else if (targetType === "resize") {
                        showMoreBlocksRegular && showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
                        mdQueriesArray && mdQueriesArray.length ? initItemsMedia(mdQueriesArray) : null;
                    }
                }
            }));
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Прокинувся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Відкрив попап`);
                    } else this.popupLogging(`Йой, такого попапу немає. Перевірте коректність введення. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрив попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) ? buttons.getAttribute(this.options.youtubeAttribute) : null;
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? functions_FLS(`[Попапос]: ${message}`) : null;
            }
        }
        modules_flsModules.popup = new Popup({});
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.dataset.required === "phone") if (this.isNumber(formRequiredItem)) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem); else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (modules_flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            modules_flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            },
            isNumber(n) {
                return !(!isNaN(parseFloat(n.value)) && isFinite(n.value));
            }
        };
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll('[data-class-modif="custom-select"]');
                    if (selectItems.length) {
                        this.selectsInit(selectItems);
                        this.setLogging(`Прокинувся, построїв селектов: (${selectItems.length})`);
                    } else this.setLogging("Сплю, немає жодного select zzZZZzZZz");
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if (targetType === "click") {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if (targetType === "focusin" || targetType === "focusout") {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                    _slideToggle(selectOptions, originalSelect.dataset.speed);
                }
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заповніть атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="_icon-arrow-down ${this.selectClasses.classSelectTitle}"><img src="img/icons/arrow-down-pink.svg" alt=""/><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="_icon-arrow-down ${this.selectClasses.classSelectTitle}"><img src="img/icons/arrow-down-pink.svg" alt=""/><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                let selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                let selectOptionsScrollHeight = originalSelect.dataset.scroll ? `style="max-height:${originalSelect.dataset.scroll}px"` : "";
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += selectOptionsScroll ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${this.selectClasses.classSelectOptionsScroll}">` : "";
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += selectOptionsScroll ? `</div>` : "";
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                if (originalSelect.multiple) {
                    optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                    const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                    originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                        originalSelectSelectedItem.removeAttribute("selected");
                    }));
                    const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                    selectSelectedItems.forEach((selectSelectedItems => {
                        originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                    }));
                } else {
                    if (!originalSelect.hasAttribute("data-show-selected")) {
                        if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                        optionItem.hidden = true;
                    }
                    originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                    this.selectAction(selectItem);
                }
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setSelectChange(originalSelect);
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption}`);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? functions_FLS(`[select]: ${message}`) : null;
            }
        }
        modules_flsModules.select = new SelectConstructor({});
        var datepicker_min = __webpack_require__(448);
        if (document.querySelector("[data-datepicker]")) {
            const picker = datepicker_min("[data-datepicker]", {
                customDays: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд" ],
                customMonths: [ "Січ", "Лют", "Берез", "Квіт", "Трав", "Черв", "Лип", "Серп", "Верес", "Жовт", "Листоп", "Груд" ],
                overlayButton: "Застосувати",
                overlayPlaceholder: "Рік (4 цифри)",
                startDay: 1,
                formatter: (input, date, instance) => {
                    const value = date.toLocaleDateString();
                    input.value = value;
                },
                onSelect: function(input, instance, date) {}
            });
            modules_flsModules.datepicker = picker;
        }
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if (typeof items === "number") super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if (typeof selector !== "string") return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if (typeof selector === "string") {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (html.indexOf("<li") === 0) toCreate = "ul";
                    if (html.indexOf("<tr") === 0) toCreate = "tbody";
                    if (html.indexOf("<td") === 0 || html.indexOf("<th") === 0) toCreate = "tr";
                    if (html.indexOf("<tbody") === 0) toCreate = "table";
                    if (html.indexOf("<option") === 0) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function dom7_esm_addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function dom7_esm_removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function dom7_esm_toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (arguments.length === 1 && typeof attrs === "string") {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (arguments.length === 2) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = typeof duration !== "string" ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if (typeof args[1] === "function") {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if (typeof args[1] === "function") {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (arguments.length === 1) if (typeof props === "string") {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (arguments.length === 2 && typeof props === "string") {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if (typeof html === "undefined") return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if (typeof text === "undefined") return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || typeof selector === "undefined") return false;
            if (typeof selector === "string") {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if (typeof index === "undefined") return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if (typeof newChild === "string") {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if (typeof newChild === "string") {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode !== null) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if (typeof selector === "undefined") return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if (typeof args[0] === "undefined") {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass: dom7_esm_addClass,
            removeClass: dom7_esm_removeClass,
            hasClass,
            toggleClass: dom7_esm_toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = $el[0].clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = $el[0].clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slide.css("display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (params.spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && nextSlide.length === 0) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && prevSlide.length === 0) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if (typeof activeIndex === "undefined") {
                for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart_transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart: transitionStart_transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if (typeof index !== "number" && typeof index !== "string") throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if (params.slidesPerView === "auto" && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < swiper.loopedSlides; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                appendSlides.push(slides.eq(index)[0]);
                prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
            }
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - loopedSlides * 3 + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if (params.touchEventsTarget === "wrapper") if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = e.type === "touchstart";
            if (!data.isTouchEvent && "which" in e && e.which === 3) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) $targetEl = dom(eventPath[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if (e.type !== "touchstart") {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ($targetEl[0].nodeName === "SELECT") data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && e.type !== "touchmove") return;
            const targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
            const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = touchEvents.start === "touchstart" && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed) return;
                if (swiper.imagesLoaded !== void 0) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: true,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor(...args) {
                let el;
                let params;
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if ($wrapperEl.length === 0 && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
                    wrongRTL: $wrapperEl.css("display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function initSliders() {
            if (document.querySelector(".ad-examples-slider")) new core(".ad-examples-slider", {
                observer: true,
                observeParents: true,
                autoHeight: true,
                speed: 800,
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 60
                    },
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                    1500: {
                        slidesPerView: 3,
                        spaceBetween: 180
                    }
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        let addWindowScrollEvent = false;
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        setChart1();
        function setChart1() {
            if (document.getElementById("chart1")) {
                var ctx = document.getElementById("chart1").getContext("2d");
                new Chart(ctx, {
                    type: "line",
                    data: {
                        labels: [ "Text", "Text", "Text", "Text", "Text" ],
                        datasets: [ {
                            label: "",
                            data: [ 20, 80, 25, 65, 20 ],
                            fill: true,
                            backgroundColor: [ "rgba(0, 171, 243, 0.60)" ]
                        }, {
                            label: "",
                            fill: true,
                            backgroundColor: [ "#00EFA2" ],
                            data: [ 40, 30, 37, 39, 38, 42, 0 ]
                        } ]
                    }
                });
            }
        }
        function e(e, i, t, n) {
            return new (t || (t = Promise))((function(r, o) {
                function s(e) {
                    try {
                        l(n.next(e));
                    } catch (e) {
                        o(e);
                    }
                }
                function a(e) {
                    try {
                        l(n.throw(e));
                    } catch (e) {
                        o(e);
                    }
                }
                function l(e) {
                    var i;
                    e.done ? r(e.value) : (i = e.value, i instanceof t ? i : new t((function(e) {
                        e(i);
                    }))).then(s, a);
                }
                l((n = n.apply(e, i || [])).next());
            }));
        }
        const i = (e, i) => {
            const {touches: t} = e, {clientX: n, clientY: r} = e;
            if (!i) return;
            const {left: o, top: s} = i.getBoundingClientRect();
            let a = {
                x: 0,
                y: 0
            };
            if (void 0 === t) a = {
                x: n - o,
                y: r - s
            }; else if (void 0 !== t && t.length > 0 && Object.keys(t).length > 0) {
                const {clientX: e, clientY: i} = t[0];
                a = {
                    x: e - o,
                    y: i - s
                };
            }
            return 0 !== Object.keys(a).length || a.constructor !== Object ? a : void 0;
        }, t = (e, i) => !!e && e.classList.contains(i), n = (e, i, t) => {
            if (!e) return;
            const n = new CustomEvent(i, {
                detail: t
            });
            e.dispatchEvent(n);
        }, r = (e, i, t) => ((e, i) => Math.round(e / i) * i)(e, i * t), o = (e, i) => Array.from({
            length: Number(i) - Number(e) + 1
        }, ((i, t) => Number(e) + t)), s = (e, i) => Array.from({
            length: Number(i) - Number(e) + 1
        }, ((e, t) => Number(i) - t)).reverse(), a = e => {
            e && "function" == typeof e && e();
        }, l = (e = "") => {
            const i = e.replace(/(AM|PM|am|pm)/, (e => ` ${e}`)), t = new Date(`September 20, 2000 ${i}`);
            return `${t.getHours().toString().padStart(2, "0")}:${t.getMinutes().toString().padStart(2, "0")}`;
        }, u = (e, i, t, n) => {
            if (!e) return {
                hour: "12",
                minutes: "00",
                type: "24h" === i ? void 0 : "PM"
            };
            const {value: r} = e;
            if (t) {
                if ("boolean" == typeof t && t) {
                    const [e, t] = (new Date).toLocaleTimeString().split(":");
                    if (/[a-z]/i.test(t) && "12h" === i) {
                        const [i, n] = t.split(" ");
                        return {
                            hour: Number(e) <= 9 ? `0${Number(e)}` : e,
                            minutes: i,
                            type: n
                        };
                    }
                    return {
                        hour: Number(e) <= 9 ? `0${Number(e)}` : e,
                        minutes: t,
                        type: void 0
                    };
                }
                {
                    const {time: e, locales: r, preventClockType: o} = t;
                    let s = e;
                    if (e || (s = new Date), o && n) {
                        const [e, i] = new Date(s).toLocaleTimeString().split(":");
                        if (/[a-z]/i.test(i)) {
                            const [t, n] = i.split(" ");
                            return {
                                hour: e,
                                minutes: t,
                                type: n
                            };
                        }
                        return {
                            hour: Number(e) <= 9 ? `0${Number(e)}` : e,
                            minutes: i,
                            type: void 0
                        };
                    }
                    const [a, l] = new Date(s).toLocaleTimeString(r, {
                        timeStyle: "short"
                    }).split(":");
                    if (/[a-z]/i.test(l) && "12h" === i) {
                        const [e, i] = l.split(" ");
                        return {
                            hour: Number(a) <= 9 ? `0${Number(a)}` : a,
                            minutes: e,
                            type: i
                        };
                    }
                    if ("12h" === i) {
                        const [e, i] = new Date(`1970-01-01T${a}:${l}Z`).toLocaleTimeString("en-US", {
                            timeZone: "UTC",
                            hour12: !0,
                            hour: "numeric",
                            minute: "numeric"
                        }).split(":"), [t, n] = i.split(" ");
                        return {
                            hour: Number(e) <= 9 ? `0${Number(e)}` : a,
                            minutes: t,
                            type: n
                        };
                    }
                    return {
                        hour: Number(a) <= 9 ? `0${Number(a)}` : a,
                        minutes: l,
                        type: void 0
                    };
                }
            }
            if ("" === r || !r) return {
                hour: "12",
                minutes: "00",
                type: "24h" === i ? void 0 : "PM"
            };
            const [o, s] = r.split(" "), [a, l] = o.split(":");
            if (/[a-z]/i.test(o)) return {
                error: "The input contains invalid letters or whitespace."
            };
            if (r.includes(" ")) {
                if (!s) return {
                    error: `The input contains invalid letters or whitespace.\n        Problem is with input length (max 5), currentLength: ${r.length}.`,
                    currentLength: r.length
                };
                if (r.length > 8 || "AM" !== s && "PM" !== s) return {
                    error: `The input contains invalid letters or whitespace.\n        Problem is with input length (max 8), currentLength: ${r.length} or invalid type (PM or AM), currentType: ${s}.`,
                    currentLength: r.length,
                    currentType: s
                };
            }
            let u = Number(l);
            const c = Number(a);
            return u < 10 ? u = `0${u}` : 0 === u && (u = "00"), "12h" === i ? c > 12 || u > 59 || u < 0 || 0 === c || "AM" !== s && "PM" !== s ? {
                error: `The input contains invalid letters or numbers. Problem is with hour which should be less than 13 and higher or equal 0, currentHour: ${c}. Minutes should be less than 60 and higher or equal 0, currentMinutes: ${Number(u)} or invalid type (PM or AM), currentType: ${s}.`,
                currentHour: c,
                currentMin: u,
                currentType: s
            } : {
                hour: c < 10 ? `0${c}` : c.toString(),
                minutes: u.toString(),
                type: s
            } : c < 0 || c > 23 || u > 59 ? {
                error: `The input contains invalid numbers. Problem is with hour which should be less than 24 and higher or equal 0, currentHour: ${c}. Minutes should be less than 60 and higher or equal 0, currentMinutes: ${Number(u)}`,
                currentHour: c,
                currentMin: u
            } : {
                hour: c < 10 ? `0${c}` : c.toString(),
                minutes: u.toString()
            };
        }, c = (e, i, t) => {
            const n = Number(e);
            return "hour" === i ? "24h" !== t ? n > 0 && n <= 12 : n >= 0 && n <= 23 : "minutes" === i ? n >= 0 && n <= 59 : void 0;
        }, d = (e, i, t, n) => {
            if (e) {
                if (Array.isArray(e) && e.length > 0) return !e.map((e => c(e, i, t))).some((e => !1 === e));
                if ("string" == typeof e || "number" == typeof e) {
                    const r = c(e, i, t), o = null == n ? void 0 : n.map(Number).includes(Number(e));
                    return !(!r || o);
                }
            }
        };
        function p(e, i) {
            void 0 === i && (i = {});
            var t = i.insertAt;
            if (e && "undefined" != typeof document) {
                var n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
                r.type = "text/css", "top" === t && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), 
                r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
            }
        }
        p(':export {\n  cranepurple800: #5c1349;\n  cranepurple900: #4e0d3a;\n  cranepurple700: #71135c;\n  cranered400: #f7363e;\n  white: #fff;\n  purple: #6200ee;\n  opacity: opacity 0.15s linear;\n}\n\n.timepicker-ui * {\n  box-sizing: border-box !important;\n}\n.timepicker-ui-modal {\n  font-family: "Roboto", sans-serif;\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(156, 155, 155, 0.6);\n  z-index: 5000;\n  pointer-events: none;\n}\n.timepicker-ui-modal.show {\n  pointer-events: auto;\n}\n.timepicker-ui-modal.removed {\n  top: auto;\n  bottom: auto;\n  left: auto;\n  right: auto;\n  background-color: transparent;\n}\n.timepicker-ui-measure {\n  position: absolute;\n  top: -9999px;\n  width: 3.125rem;\n  height: 3.125rem;\n  overflow: scroll;\n}\n.timepicker-ui-wrapper, .timepicker-ui-wrapper.mobile {\n  position: fixed;\n  z-index: 5001;\n  width: 328px;\n  height: 500px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  outline: none;\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-wrapper:not(.timepicker-ui-wrapper + .mobile) {\n    flex-direction: row;\n    height: 360px;\n    width: 584px;\n  }\n}\n@media screen and (max-width: 330px) and (orientation: portrait) {\n  .timepicker-ui-wrapper:not(.timepicker-ui-wrapper + .mobile) {\n    width: 315px;\n  }\n}\n.timepicker-ui-wrapper.mobile {\n  height: 218px;\n}\n@media screen and (max-width: 330px) {\n  .timepicker-ui-wrapper.mobile {\n    width: 315px;\n  }\n}\n.timepicker-ui-header, .timepicker-ui-header.mobile {\n  padding-top: 52px;\n  padding-bottom: 36px;\n  padding-right: 24px;\n  padding-left: 24px;\n  height: 104px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  height: 100%;\n}\n.timepicker-ui-header.mobile {\n  padding-bottom: 0;\n  padding-top: 35px;\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-header:not(.timepicker-ui-header + .mobile) {\n    height: auto;\n    flex-direction: column;\n  }\n}\n.timepicker-ui-select-time, .timepicker-ui-select-time.mobile {\n  text-transform: uppercase;\n  position: absolute;\n  top: 16px;\n  left: 24px;\n  font-size: 12px;\n  color: #a9a9a9;\n}\n.timepicker-ui-body {\n  height: 256px;\n  width: 256px;\n  margin: 0 auto;\n  position: relative;\n  border-radius: 100%;\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-body {\n    padding-right: 0;\n    padding-left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 23px;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-wrapper-landspace {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n}\n.timepicker-ui-footer, .timepicker-ui-footer-mobile {\n  height: 76px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-footer:not(.timepicker-ui-footer + .mobile) {\n    justify-content: flex-end;\n  }\n}\n.timepicker-ui-footer.mobile {\n  align-items: flex-start;\n}\n.timepicker-ui-clock-face {\n  background-color: #e0e0e0;\n  height: 100%;\n  width: 100%;\n  border-radius: 100%;\n  position: relative;\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-clock-face {\n    height: 256px;\n    width: 256px;\n    top: 15px;\n  }\n}\n.timepicker-ui-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  user-select: none;\n  touch-action: none;\n  transform: translate(-50%, -50%);\n  background-color: #6200ee;\n  height: 8px;\n  width: 8px;\n  border-radius: 100%;\n}\n.timepicker-ui-tips-wrapper {\n  height: 100%;\n  width: 100%;\n}\n.timepicker-ui-tips-wrapper-24h {\n  position: absolute;\n  height: 160px;\n  width: 160px;\n  z-index: 0;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  border-radius: 50%;\n}\n.timepicker-ui-tips-wrapper-24h-disabled {\n  pointer-events: none;\n  touch-action: none;\n  user-select: none;\n}\n.timepicker-ui-hour-time-12, .timepicker-ui-minutes-time, .timepicker-ui-hour-time-24 {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  text-align: center;\n  cursor: pointer;\n  font-size: 17.6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  touch-action: none;\n  user-select: none;\n}\n.timepicker-ui-hour-time-12 span, .timepicker-ui-minutes-time span, .timepicker-ui-hour-time-24 span {\n  touch-action: none;\n  user-select: none;\n}\n.timepicker-ui-hour-time-12 {\n  display: block;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.timepicker-ui-wrapper-time, .timepicker-ui-wrapper-time.mobile {\n  display: flex;\n  margin-right: 10px;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-wrapper-time:not(.timepicker-ui-wrapper-time + .mobile) {\n    margin-right: 0;\n    height: auto;\n  }\n}\n.timepicker-ui-wrapper-time-24h {\n  margin-right: 0px;\n}\n.timepicker-ui-wrapper-time.mobile {\n  position: relative;\n}\n.timepicker-ui-hour, .timepicker-ui-minutes, .timepicker-ui-hour.mobile, .timepicker-ui-minutes.mobile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 51.2px;\n  background-color: #e4e4e4;\n  border-radius: 7px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  outline: none;\n  border: 2px solid transparent;\n  padding: 10px;\n  width: 96px;\n  text-align: center;\n}\n.timepicker-ui-hour:focus-visible, .timepicker-ui-minutes:focus-visible, .timepicker-ui-hour.mobile:focus-visible, .timepicker-ui-minutes.mobile:focus-visible {\n  outline: auto;\n}\n.timepicker-ui-hour:hover, .timepicker-ui-hour.active, .timepicker-ui-minutes:hover, .timepicker-ui-minutes.active, .timepicker-ui-hour.mobile:hover, .timepicker-ui-hour.mobile.active, .timepicker-ui-minutes.mobile:hover, .timepicker-ui-minutes.mobile.active {\n  color: #6200ee;\n  background-color: #ece0fd;\n}\n.timepicker-ui-hour::-webkit-outer-spin-button, .timepicker-ui-hour::-webkit-inner-spin-button, .timepicker-ui-minutes::-webkit-outer-spin-button, .timepicker-ui-minutes::-webkit-inner-spin-button, .timepicker-ui-hour.mobile::-webkit-outer-spin-button, .timepicker-ui-hour.mobile::-webkit-inner-spin-button, .timepicker-ui-minutes.mobile::-webkit-outer-spin-button, .timepicker-ui-minutes.mobile::-webkit-inner-spin-button {\n  -webkit-appearance: none !important;\n  margin: 0 !important;\n}\n.timepicker-ui-hour[type=number], .timepicker-ui-minutes[type=number], .timepicker-ui-hour.mobile[type=number], .timepicker-ui-minutes.mobile[type=number] {\n  -moz-appearance: textfield !important;\n}\n.timepicker-ui-hour, .timepicker-ui-minutes {\n  outline: none;\n  border: 2px solid transparent;\n}\n.timepicker-ui-hour[contenteditable=true]:focus, .timepicker-ui-hour[contenteditable=true]:active, .timepicker-ui-minutes[contenteditable=true]:focus, .timepicker-ui-minutes[contenteditable=true]:active {\n  border: 2px solid #6200ee;\n  outline-color: #6200ee;\n  user-select: all;\n}\n.timepicker-ui-hour.mobile, .timepicker-ui-minutes.mobile {\n  height: 70px;\n  outline: none;\n  border: 2px solid transparent;\n}\n.timepicker-ui-hour.mobile[contenteditable=true]:focus, .timepicker-ui-hour.mobile[contenteditable=true]:active, .timepicker-ui-minutes.mobile[contenteditable=true]:focus, .timepicker-ui-minutes.mobile[contenteditable=true]:active {\n  border: 2px solid #6200ee;\n  outline-color: #6200ee;\n  user-select: all;\n}\n.timepicker-ui-dots, .timepicker-ui-dots.mobile {\n  padding-left: 5px;\n  padding-right: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 57.6px;\n  user-select: none;\n  touch-action: none;\n}\n.timepicker-ui-wrapper-type-time, .timepicker-ui-wrapper-type-time.mobile {\n  display: flex;\n  flex-direction: column;\n  height: 80px;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 500;\n  color: #787878;\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-wrapper-type-time {\n    flex-direction: row;\n    width: 100%;\n  }\n}\n.timepicker-ui-wrapper-type-time.mobile {\n  height: 70px;\n}\n.timepicker-ui-am, .timepicker-ui-pm, .timepicker-ui-am.mobile, .timepicker-ui-pm.mobile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #d6d6d6;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\n.timepicker-ui-am:hover, .timepicker-ui-am.active, .timepicker-ui-pm:hover, .timepicker-ui-pm.active, .timepicker-ui-am.mobile:hover, .timepicker-ui-am.mobile.active, .timepicker-ui-pm.mobile:hover, .timepicker-ui-pm.mobile.active {\n  color: #6200ee;\n  background-color: #ece0fd;\n}\n.timepicker-ui-am.active, .timepicker-ui-pm.active, .timepicker-ui-am.mobile.active, .timepicker-ui-pm.mobile.active {\n  pointer-events: none;\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-am:not(.timepicker-ui-am + .mobile), .timepicker-ui-pm:not(.timepicker-ui-pm + .mobile) {\n    width: 50%;\n    height: 44px;\n  }\n}\n.timepicker-ui-am, .timepicker-ui-am.mobile {\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-width: 0.3752px;\n}\n.timepicker-ui-am.mobile {\n  border-bottom-left-radius: 0;\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-am:not(.timepicker-ui-am + .mobile) {\n    border-top-left-radius: 7px;\n    border-bottom-left-radius: 7px;\n    border-top-right-radius: 0;\n    border-top-width: 1.5008px;\n    border-right-width: 0.3752px;\n  }\n}\n.timepicker-ui-pm, .timepicker-ui-pm.mobile {\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  border-top-width: 0.3752px;\n  width: 54px;\n}\n.timepicker-ui-pm.mobile {\n  border-top-right-radius: 0;\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-pm:not(.timepicker-ui-pm + .mobile) {\n    border-bottom-right-radius: 7px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 0;\n    border-bottom-width: 1.5008px;\n    border-left-width: 0.3752px;\n    width: 50%;\n    height: 44px;\n  }\n}\n.timepicker-ui-cancel-btn, .timepicker-ui-ok-btn, .timepicker-ui-cancel-btn.mobile, .timepicker-ui-ok.btn-mobile {\n  color: #6200ee;\n  text-transform: uppercase;\n  border-radius: 7px;\n  background-color: transparent;\n  text-align: center;\n  font-size: 15.2px;\n  padding-top: 9px;\n  padding-bottom: 9px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.timepicker-ui-cancel-btn:hover, .timepicker-ui-ok-btn:hover, .timepicker-ui-cancel-btn.mobile:hover, .timepicker-ui-ok.btn-mobile:hover {\n  background-color: #d6d6d6;\n}\n.timepicker-ui-cancel-btn, .timepicker-ui-cancel-btn.mobile {\n  width: 72px;\n  margin-right: 4px;\n}\n.timepicker-ui-ok-btn, .timepicker-ui-ok-btn.mobile {\n  width: 64px;\n  margin-left: 4px;\n}\n.timepicker-ui-wrapper-btn, .timepicker-ui-keyboard-icon, .timepicker-ui-wrapper-btn-mobile, .timepicker-ui-keyboard-icon-mobile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.timepicker-ui-keyboard-icon-wrapper, .timepicker-ui-keyboard-icon-wrapper.mobile {\n  width: 44px;\n  height: 44px;\n  position: relative;\n  bottom: -26px;\n  left: 12px;\n  transition: all 0.3s ease;\n}\n.timepicker-ui-keyboard-icon-wrapper:hover .timepicker-ui-keyboard-icon, .timepicker-ui-keyboard-icon-wrapper:hover .timepicker-ui-keyboard-icon.mobile, .timepicker-ui-keyboard-icon-wrapper.mobile:hover .timepicker-ui-keyboard-icon, .timepicker-ui-keyboard-icon-wrapper.mobile:hover .timepicker-ui-keyboard-icon.mobile {\n  background-color: #d6d6d6;\n  border-radius: 7px;\n}\n.timepicker-ui-keyboard-icon-wrapper.mobile {\n  bottom: -5px;\n}\n.timepicker-ui-keyboard-icon, .timepicker-ui-keyboard-icon.mobile {\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: #4e545a;\n  height: 44px;\n  width: 44px;\n}\n.timepicker-ui-keyboard-icon:hover, .timepicker-ui-keyboard-icon.mobile:hover {\n  color: #6200ee;\n}\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-keyboard-icon-wrapper, .timepicker-ui-keyboard-icon-wrapper.mobile {\n    position: absolute;\n    bottom: 8px;\n  }\n}\n.timepicker-ui-wrapper-btn, .timepicker-ui-wrapper-btn.mobile {\n  margin-right: 8px;\n  position: relative;\n  bottom: -14px;\n}\n.timepicker-ui-hour-text, .timepicker-ui-minute-text, .timepicker-ui-hour-text.mobile, .timepicker-ui-minute-text.mobile {\n  position: absolute;\n  bottom: 6px;\n  font-size: 12.8px;\n  color: #a9a9a9;\n  left: 0;\n}\n.timepicker-ui-minute-text, .timepicker-ui-minute-text.mobile {\n  left: 120px;\n}\n.timepicker-ui-clock-hand {\n  position: absolute;\n  background-color: #6200ee;\n  bottom: 50%;\n  height: 40%;\n  left: calc(50% - 1px);\n  transform-origin: center bottom 0;\n  width: 2px;\n}\n.timepicker-ui-clock-hand-24h {\n  height: 23%;\n}\n.timepicker-ui-circle-hand {\n  position: absolute;\n  transform: translate(-48%, -50%);\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n  height: 46px;\n  width: 46px;\n  box-sizing: border-box !important;\n  background-color: #6200ee;\n}\n.timepicker-ui-circle-hand.small-circle {\n  height: 36px;\n  width: 36px;\n  box-sizing: border-box !important;\n}\n.timepicker-ui-circle-hand-24h {\n  transform: translate(-50%, -50%);\n  height: 32px;\n  width: 32px;\n  top: 4px;\n  left: 1px;\n}\n.timepicker-ui-value-tips, .timepicker-ui-value-tips-24h {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease color;\n  border-radius: 50%;\n  outline: none;\n}\n.timepicker-ui-value-tips:focus, .timepicker-ui-value-tips-24h:focus {\n  background: rgba(143, 143, 143, 0.315);\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n.timepicker-ui-value-tips.active, .timepicker-ui-value-tips-24h.active {\n  color: #fff;\n  transition: none;\n}\n.timepicker-ui-clock-animation {\n  animation: clockanimation 350ms linear;\n}\n.timepicker-ui-open-element.disabled {\n  pointer-events: none;\n  touch-action: none;\n  user-select: none;\n}\n.timepicker-ui-tips-animation {\n  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n.timepicker-ui-tips-disabled {\n  color: rgba(156, 155, 155, 0.6);\n  pointer-events: none;\n}\n\n.opacity {\n  transition: opacity 0.15s linear;\n}\n.opacity.show {\n  opacity: 1;\n}\n\n.invalid-value {\n  border-color: #d50000 !important;\n  color: #d50000 !important;\n}\n.invalid-value:hover, .invalid-value:focus, .invalid-value:active {\n  border-color: #d50000 !important;\n  color: #d50000 !important;\n}\n\n@keyframes clockanimation {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.timepicker-ui-invalid-format {\n  border: 2px solid red;\n  color: red;\n}\n\n.timepicker-ui-invalid-text {\n  color: red;\n}');
        p(":export {\n  cranepurple800: #5c1349;\n  cranepurple900: #4e0d3a;\n  cranepurple700: #71135c;\n  cranered400: #f7363e;\n  white: #fff;\n  purple: #6200ee;\n  opacity: opacity 0.15s linear;\n}\n\n.timepicker-ui-wrapper.crane-straight, .timepicker-ui-wrapper.mobile.crane-straight {\n  border-radius: 0;\n  background-color: #4e0d3a;\n  color: #fff;\n}\n.timepicker-ui-wrapper.crane-straight.radius, .timepicker-ui-wrapper.mobile.crane-straight.radius {\n  border-radius: 1.25rem;\n}\n.timepicker-ui-select-time.crane-straight, .timepicker-ui-select-time.mobile.crane-straight {\n  color: #e5e5e5;\n}\n.timepicker-ui-clock-face.crane-straight, .timepicker-ui-clock-face.mobile.crane-straight {\n  background-color: #71135c;\n}\n.timepicker-ui-dot.crane-straight, .timepicker-ui-dot.mobile.crane-straight {\n  background-color: #f7363e;\n}\n.timepicker-ui-hour.crane-straight, .timepicker-ui-minutes.crane-straight, .timepicker-ui-hour.mobile.crane-straight, .timepicker-ui-minutes.mobile.crane-straight {\n  background-color: #71135c;\n  border-radius: 0;\n  color: #fff;\n}\n.timepicker-ui-hour.crane-straight.radius, .timepicker-ui-minutes.crane-straight.radius, .timepicker-ui-hour.mobile.crane-straight.radius, .timepicker-ui-minutes.mobile.crane-straight.radius {\n  border-radius: 1.25rem;\n}\n.timepicker-ui-hour.crane-straight:hover, .timepicker-ui-hour.crane-straight.active, .timepicker-ui-minutes.crane-straight:hover, .timepicker-ui-minutes.crane-straight.active, .timepicker-ui-hour.mobile.crane-straight:hover, .timepicker-ui-hour.mobile.crane-straight.active, .timepicker-ui-minutes.mobile.crane-straight:hover, .timepicker-ui-minutes.mobile.crane-straight.active {\n  background-color: #f7363e;\n}\n.timepicker-ui-hour.mobile.crane-straight[contenteditable=true]:focus, .timepicker-ui-hour.mobile.crane-straight[contenteditable=true]:active, .timepicker-ui-minutes.mobile.crane-straight[contenteditable=true]:focus, .timepicker-ui-minutes.mobile.crane-straight[contenteditable=true]:active {\n  border-color: #fff;\n  outline-color: #fff;\n}\n.timepicker-ui-dots.crane-straight, .timepicker-ui-dots.mobile.crane-straight {\n  color: #fff;\n}\n.timepicker-ui-wrapper-type-time.crane-straight, .timepicker-ui-wrapper-type-time.mobile.crane-straight {\n  color: #fff;\n}\n.timepicker-ui-am.crane-straight, .timepicker-ui-pm.crane-straight, .timepicker-ui-am.mobile.crane-straight, .timepicker-ui-pm.mobile.crane-straight {\n  border: 0.125rem solid transparent;\n  border-radius: 0;\n  background-color: #71135c;\n}\n.timepicker-ui-am:hover.crane-straight, .timepicker-ui-am.active.crane-straight, .timepicker-ui-pm:hover.crane-straight, .timepicker-ui-pm.active.crane-straight, .timepicker-ui-am.mobile:hover.crane-straight, .timepicker-ui-am.mobile.active.crane-straight, .timepicker-ui-pm.mobile:hover.crane-straight, .timepicker-ui-pm.mobile.active.crane-straight {\n  color: #fff;\n  background-color: #f7363e;\n}\n.timepicker-ui-am.crane-straight.radius {\n  border-top-left-radius: 1.25rem;\n  border-top-right-radius: 1.25rem;\n}\n.timepicker-ui-pm.crane-straight.radius {\n  border-bottom-left-radius: 1.25rem;\n  border-bottom-right-radius: 1.25rem;\n}\n@media screen and (min-width: 320px) and (max-width: 826px) and (orientation: landscape) {\n  .timepicker-ui-am:not(.timepicker-ui-am + .mobile).crane-straight.radius {\n    border-bottom-left-radius: 1.25rem;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 826px) and (orientation: landscape) {\n  .timepicker-ui-pm:not(.timepicker-ui-pm + .mobile).crane-straight.radius {\n    border-bottom-right-radius: 1.25rem;\n    border-top-right-radius: 1.25rem;\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {\n  .timepicker-ui-am.mobile.crane-straight.radius {\n    border-bottom-left-radius: 0rem;\n    border-bottom-right-radius: 0rem;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {\n  .timepicker-ui-pm.mobile.crane-straight.radius {\n    border-top-left-radius: 0rem;\n    border-top-right-radius: 0rem;\n  }\n}\n.timepicker-ui-cancel-btn.crane-straight, .timepicker-ui-ok-btn.crane-straight, .timepicker-ui-cancel-btn.mobile.crane-straight, .timepicker-ui-ok-btn.mobile.crane-straight {\n  color: #fff;\n  border-radius: 0rem;\n}\n.timepicker-ui-cancel-btn.crane-straight.radius, .timepicker-ui-ok-btn.crane-straight.radius, .timepicker-ui-cancel-btn.mobile.crane-straight.radius, .timepicker-ui-ok-btn.mobile.crane-straight.radius {\n  border-radius: 0.8125rem;\n}\n.timepicker-ui-cancel-btn:hover.crane-straight, .timepicker-ui-ok-btn:hover.crane-straight, .timepicker-ui-cancel-btn.mobile:hover.crane-straight, .timepicker-ui-ok-btn.mobile:hover.crane-straight {\n  background-color: #f7363e;\n}\n.timepicker-ui-keyboard-icon-wrapper.crane-straight, .timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight {\n  color: #fff;\n}\n.timepicker-ui-keyboard-icon-wrapper.crane-straight.radius, .timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight.radius {\n  border-radius: 1.25rem;\n}\n.timepicker-ui-keyboard-icon-wrapper.crane-straight:hover .timepicker-ui-keyboard-icon, .timepicker-ui-keyboard-icon-wrapper.crane-straight:hover .timepicker-ui-keyboard-icon.mobile, .timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight:hover .timepicker-ui-keyboard-icon, .timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight:hover .timepicker-ui-keyboard-icon.mobile {\n  background-color: #f7363e;\n  color: #fff;\n  border-radius: 0;\n}\n.timepicker-ui-keyboard-icon-wrapper.crane-straight.radius:hover .timepicker-ui-keyboard-icon, .timepicker-ui-keyboard-icon-wrapper.crane-straight.radius:hover .timepicker-ui-keyboard-icon.mobile, .timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight.radius:hover .timepicker-ui-keyboard-icon, .timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight.radius:hover .timepicker-ui-keyboard-icon.mobile {\n  border-radius: 0.875rem;\n}\n.timepicker-ui-keyboard-icon.crane-straight:hover, .timepicker-ui-keyboard-icon.mobile.crane-straight:hover {\n  color: #fff;\n}\n.timepicker-ui-keyboard-icon.crane-straight:hover.radius, .timepicker-ui-keyboard-icon.mobile.crane-straight:hover.radius {\n  border-radius: 1.25rem;\n}\n.timepicker-ui-clock-hand.crane-straight {\n  background-color: #f7363e;\n}\n.timepicker-ui-circle-hand.crane-straight {\n  border-color: #f7363e;\n  background-color: #f7363e;\n}\n.timepicker-ui-value-tips.crane-straight {\n  color: #fff;\n}");
        p(":export {\n  cranepurple800: #5c1349;\n  cranepurple900: #4e0d3a;\n  cranepurple700: #71135c;\n  cranered400: #f7363e;\n  white: #fff;\n  purple: #6200ee;\n  opacity: opacity 0.15s linear;\n}\n\n.timepicker-ui-hour-time-12.m3, .timepicker-ui-hour-time-24.m3 {\n  color: #1a1c18;\n}\n.timepicker-ui-wrapper.m3 {\n  border-radius: 35px;\n  background-color: #e5eadc;\n  box-shadow: unset;\n}\n.timepicker-ui-hour.active.m3, .timepicker-ui-minutes.active.m3 {\n  background-color: #b8f397;\n  color: #042100;\n}\n.timepicker-ui-minutes.m3, .timepicker-ui-hour.m3 {\n  background-color: #dfe4d6;\n}\n.timepicker-ui-minutes:hover.m3, .timepicker-ui-hour:hover.m3 {\n  color: #386a20;\n}\n.timepicker-ui-clock-face.m3 {\n  background-color: #dfe4d6;\n}\n.timepicker-ui-clock-hand.m3, .timepicker-ui-dot.m3, .timepicker-ui-circle-hand.m3 {\n  background-color: #386a20 !important;\n}\n.timepicker-ui-cancel-btn.m3, .timepicker-ui-ok-btn.m3 {\n  color: #386a20;\n}\n.timepicker-ui-cancel-btn:hover.m3, .timepicker-ui-ok-btn:hover.m3 {\n  background-color: #dfe4d6;\n}\n.timepicker-ui-wrapper-type-time.m3 {\n  color: #6b7165;\n}\n.timepicker-ui-am.m3, .timepicker-ui-am.m3, .timepicker-ui-pm.m3, .timepicker-ui-pm.m3 {\n  border-color: #74796e;\n  border-width: 1px;\n}\n.timepicker-ui-am.m3, .timepicker-ui-am.m3 {\n  border-bottom-width: 0px;\n}\n.timepicker-ui-am:hover.m3, .timepicker-ui-am.active.m3, .timepicker-ui-pm:hover.m3, .timepicker-ui-pm.active.m3 {\n  background-color: #bbebeb;\n  color: #002021;\n}\n.timepicker-ui-hour.mobile:hover.m3, .timepicker-ui-minutes.mobile:hover.m3 {\n  background-color: #dfe4d6;\n}");
        var m = ":export {\n  cranepurple800: #5c1349;\n  cranepurple900: #4e0d3a;\n  cranepurple700: #71135c;\n  cranered400: #f7363e;\n  white: #fff;\n  purple: #6200ee;\n  opacity: opacity 0.15s linear;\n}";
        p(m);
        const h = {
            amLabel: "AM",
            animation: !0,
            appendModalSelector: "",
            backdrop: !0,
            cancelLabel: "CANCEL",
            editable: !1,
            enableScrollbar: !1,
            enableSwitchIcon: !1,
            mobileTimeLabel: "Enter Time",
            focusInputAfterCloseModal: !1,
            hourMobileLabel: "Hour",
            iconTemplate: '<i class="material-icons timepicker-ui-keyboard-icon">keyboard</i>',
            iconTemplateMobile: '<i class="material-icons timepicker-ui-keyboard-icon">schedule</i>',
            incrementHours: 1,
            incrementMinutes: 1,
            minuteMobileLabel: "Minute",
            mobile: !1,
            okLabel: "OK",
            pmLabel: "PM",
            timeLabel: "Select Time",
            switchToMinutesAfterSelectHour: !1,
            theme: "basic",
            clockType: "12h",
            disabledTime: void 0,
            currentTime: void 0,
            focusTrap: !0,
            delayHandler: 300
        }, v = "mousedown mouseup mousemove mouseleave mouseover touchstart touchmove touchend", b = [ "00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23" ], k = [ "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11" ], g = [ "00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55" ];
        class y {
            constructor(e) {
                this.clean = () => {
                    var e, i;
                    const t = null === (e = this.tipsWrapper) || void 0 === e ? void 0 : e.querySelectorAll("span.timepicker-ui-hour-time-12"), n = null === (i = this.tipsWrapper) || void 0 === i ? void 0 : i.querySelectorAll("span.timepicker-ui-minutes-time");
                    this._removeClasses(t), this._removeClasses(n);
                }, this.create = () => {
                    var e;
                    if (!(this.clockFace && this.array && this.classToAdd && this.tipsWrapper)) return;
                    const i = (this.clockFace.offsetWidth - 32) / 2, n = (this.clockFace.offsetHeight - 32) / 2, r = i - 9;
                    this.tipsWrapper.innerHTML = "", null === (e = this.array) || void 0 === e || e.forEach(((e, o) => {
                        var s, a, l, u, c, d;
                        const p = o * (360 / this.array.length) * (Math.PI / 180);
                        const m = document.createElement("span"), h = document.createElement("span");
                        h.innerHTML = e, this.disabledTime && (Array.isArray(this.disabledTime) && (null === (s = this.disabledTime) || void 0 === s ? void 0 : s.includes(e)) && (h.classList.add("timepicker-ui-tips-disabled"), 
                        m.classList.add("timepicker-ui-tips-disabled")), this.hour === this.disabledTime.removedStartedHour && (null === (l = null === (a = this.disabledTime) || void 0 === a ? void 0 : a.startMinutes) || void 0 === l ? void 0 : l.includes(e)) && (h.classList.add("timepicker-ui-tips-disabled"), 
                        m.classList.add("timepicker-ui-tips-disabled"), h.tabIndex = -1), this.hour === this.disabledTime.removedEndHour && (null === (c = null === (u = this.disabledTime) || void 0 === u ? void 0 : u.endMinutes) || void 0 === c ? void 0 : c.includes(e)) && (h.classList.add("timepicker-ui-tips-disabled"), 
                        m.classList.add("timepicker-ui-tips-disabled"), h.tabIndex = -1)), "24h" === this.clockType ? (h.classList.add("timepicker-ui-value-tips-24h"), 
                        t(h, "timepicker-ui-tips-disabled") || (h.tabIndex = 0)) : (h.classList.add("timepicker-ui-value-tips"), 
                        t(h, "timepicker-ui-tips-disabled") || (h.tabIndex = 0)), m.classList.add(this.classToAdd), 
                        "crane-straight" === this.theme && (m.classList.add("crane-straight"), h.classList.add("crane-straight")), 
                        "m3" === this.theme && (m.classList.add("m3"), h.classList.add("m3")), m.style.left = i + Math.sin(p) * r - m.offsetWidth + "px", 
                        m.style.bottom = n + Math.cos(p) * r - m.offsetHeight + "px", m.appendChild(h), 
                        null === (d = this.tipsWrapper) || void 0 === d || d.appendChild(m);
                    }));
                }, this.updateDisable = e => {
                    var i, t;
                    const n = null === (i = this.tipsWrapper) || void 0 === i ? void 0 : i.querySelectorAll("span.timepicker-ui-hour-time-12"), r = null === (t = this.tipsWrapper) || void 0 === t ? void 0 : t.querySelectorAll("span.timepicker-ui-minutes-time");
                    if (this._removeClasses(n), this._removeClasses(r), (null == e ? void 0 : e.hoursToUpdate) && n && this._addClassesWithIncludes(n, e.hoursToUpdate), 
                    (null == e ? void 0 : e.minutesToUpdate) && r) {
                        const {actualHour: i, removedEndHour: t, removedStartedHour: n, startMinutes: o, endMinutes: s} = e.minutesToUpdate;
                        t === i && s.length > 0 ? this._addClassesWithIncludes(r, s) : Number(i) > Number(n) && Number(i) < Number(t) && this._addClasses(r), 
                        n === i && o.length > 0 ? this._addClassesWithIncludes(r, o) : Number(i) > Number(n) && Number(i) < Number(t) && this._addClasses(r);
                    }
                    if (e) {
                        const {amHours: i, pmHours: t, activeMode: o, startMinutes: s, endMinutes: a, removedAmHour: l, removedPmHour: u, actualHour: c} = e.minutesToUpdate;
                        if (!i || !t) return;
                        n && (i && "AM" === o && this._addClassesWithIncludes(n, i), t && "PM" === o && this._addClassesWithIncludes(n, t)), 
                        r && s && a && ("AM" === o && ("00" === a[0] && 1 === a.length && 0 === s.length && Number(c) >= Number(i[0]) && this._addClasses(r), 
                        0 === s.length && a.length > 1 && Number(c) >= Number(l) && this._addClasses(r), 
                        s.length > 0 && a.length > 1 && "00" === a[0] && (Number(l) === Number(c) ? this._addClassesWithIncludes(r, s) : Number(c) > Number(l) && this._addClasses(r)), 
                        "00" === a[0] && 1 === a.length && s.length > 0 && (Number(l) === Number(c) ? this._addClassesWithIncludes(r, s) : Number(c) > Number(l) && this._addClasses(r))), 
                        "PM" === o && (c < Number(u) && this._addClasses(r), c === u && this._addClassesWithIncludes(r, a), 
                        a.length > 0 && Number(c) === u - 1 && this._addClassesWithIncludes(r, a)));
                    }
                }, this._removeClasses = e => {
                    null == e || e.forEach((({classList: e, children: i}) => {
                        e.remove("timepicker-ui-tips-disabled"), i[0].classList.remove("timepicker-ui-tips-disabled"), 
                        i[0].tabIndex = 0;
                    }));
                }, this._addClasses = e => {
                    null == e || e.forEach((({classList: e, children: i}) => {
                        e.add("timepicker-ui-tips-disabled"), i[0].classList.add("timepicker-ui-tips-disabled"), 
                        i[0].tabIndex = -1;
                    }));
                }, this._addClassesWithIncludes = (e, i) => {
                    null == e || e.forEach((({classList: e, children: t, textContent: n}) => {
                        (null == i ? void 0 : i.includes(n)) && (e.add("timepicker-ui-tips-disabled"), t[0].classList.add("timepicker-ui-tips-disabled"), 
                        t[0].tabIndex = -1);
                    }));
                }, this.array = null == e ? void 0 : e.array, this.classToAdd = null == e ? void 0 : e.classToAdd, 
                this.clockFace = null == e ? void 0 : e.clockFace, this.tipsWrapper = null == e ? void 0 : e.tipsWrapper, 
                this.theme = null == e ? void 0 : e.theme, this.clockType = null == e ? void 0 : e.clockType, 
                this.disabledTime = null == e ? void 0 : e.disabledTime, this.hour = null == e ? void 0 : e.hour;
            }
        }
        const _ = (e, i) => {
            let t;
            return (...n) => {
                clearTimeout(t), t = setTimeout((() => {
                    e(...n);
                }), i);
            };
        };
        class T {
            constructor(o, s) {
                var p, T, f;
                this.create = () => {
                    this._updateInputValueWithCurrentTimeOnStart(), this._checkDisabledValuesOnStart(), 
                    this._setTimepickerClassToElement(), this._setInputClassToInputElement(), this._setDataOpenToInputIfDosentExistInWrapper(), 
                    this._setClassTopOpenElement(), this._handleOpenOnEnterFocus(), this._handleOpenOnClick(), 
                    this._getDisableTime();
                }, this.open = e => {
                    this.create(), this._eventsBundle(), a(e);
                }, this.close = () => _(((...e) => {
                    var i;
                    if (e.length > 2 || !this.modalElement) return;
                    const [t] = e.filter((e => "boolean" == typeof e)), [n] = e.filter((e => "function" == typeof e));
                    t && (this._handleOkButton(), null === (i = this.okButton) || void 0 === i || i.click()), 
                    this._isTouchMouseMove = !1, v.split(" ").map((e => document.removeEventListener(e, this._mutliEventsMoveHandler, !1))), 
                    document.removeEventListener("mousedown", this._eventsClickMobileHandler), document.removeEventListener("touchstart", this._eventsClickMobileHandler), 
                    document.removeEventListener("keypress", this._handleEscClick), this.wrapper.removeEventListener("keydown", this._focusTrapHandler), 
                    this._options.enableSwitchIcon && (this.keyboardClockIcon.removeEventListener("touchstart", this._handlerViewChange()), 
                    this.keyboardClockIcon.removeEventListener("mousedown", this._handlerViewChange())), 
                    this._removeAnimationToClose(), this.openElement.forEach((e => null == e ? void 0 : e.classList.remove("disabled"))), 
                    setTimeout((() => {
                        document.body.style.overflowY = "", document.body.style.paddingRight = "";
                    }), 400), this.openElement.forEach((e => null == e ? void 0 : e.classList.remove("disabled"))), 
                    setTimeout((() => {
                        var e;
                        this._options.focusInputAfterCloseModal && (null === (e = this.input) || void 0 === e || e.focus()), 
                        null !== this.modalElement && (this.modalElement.remove(), this._isModalRemove = !0);
                    }), 300), a(n);
                }), this._options.delayHandler || 300), this.destroy = e => {
                    v.split(" ").map((e => document.removeEventListener(e, this._mutliEventsMoveHandler, !1))), 
                    document.removeEventListener("mousedown", this._eventsClickMobileHandler), document.removeEventListener("touchstart", this._eventsClickMobileHandler), 
                    this._options.enableSwitchIcon && this.keyboardClockIcon && (this.keyboardClockIcon.removeEventListener("touchstart", this._handlerViewChange()), 
                    this.keyboardClockIcon.removeEventListener("mousedown", this._handlerViewChange())), 
                    this._cloned = this._element.cloneNode(!0), this._element.after(this._cloned), this._element.remove(), 
                    this._element = null, null === this._element && a(e), this._element = this._cloned;
                }, this.update = (e, i) => {
                    this._options = Object.assign(Object.assign({}, this._options), e.options), this._checkMobileOption(), 
                    e.create && this.create(), a(i);
                }, this._preventClockTypeByCurrentTime = () => {
                    var e, i, t, n, r;
                    if ("boolean" != typeof (null === (e = this._options) || void 0 === e ? void 0 : e.currentTime) && (null === (t = null === (i = this._options) || void 0 === i ? void 0 : i.currentTime) || void 0 === t ? void 0 : t.preventClockType) || "boolean" == typeof (null === (n = this._options) || void 0 === n ? void 0 : n.currentTime) && (null === (r = this._options) || void 0 === r ? void 0 : r.currentTime)) {
                        const {currentTime: e, clockType: i} = this._options, {type: t} = u(this.input, i, e, !0);
                        this._options.clockType = t ? "12h" : "24h";
                    }
                }, this._updateInputValueWithCurrentTimeOnStart = () => {
                    var e, i, t, n, r;
                    if ("boolean" != typeof (null === (e = this._options) || void 0 === e ? void 0 : e.currentTime) && (null === (t = null === (i = this._options) || void 0 === i ? void 0 : i.currentTime) || void 0 === t ? void 0 : t.updateInput) || "boolean" == typeof (null === (n = this._options) || void 0 === n ? void 0 : n.currentTime) && (null === (r = this._options) || void 0 === r ? void 0 : r.currentTime)) {
                        const {hour: e, minutes: i, type: t} = u(this.input, this._options.clockType, this._options.currentTime);
                        this.input.value = t ? `${e}:${i} ${t}` : `${e}:${i}`;
                    }
                }, this._setTheme = () => {
                    var e, i;
                    const t = null === (e = this.modalElement) || void 0 === e ? void 0 : e.querySelectorAll("div"), n = [ ...null === (i = this.modalElement) || void 0 === i ? void 0 : i.querySelectorAll("input"), ...t ], {theme: r} = this._options;
                    "crane-straight" === r ? n.forEach((e => e.classList.add("crane-straight"))) : "crane-radius" === r ? n.forEach((e => e.classList.add("crane-straight", "radius"))) : "m3" === r && n.forEach((e => e.classList.add("m3")));
                }, this._setInputClassToInputElement = () => {
                    var e;
                    t(this.input, "timepicker-ui-input") || null === (e = this.input) || void 0 === e || e.classList.add("timepicker-ui-input");
                }, this._setDataOpenToInputIfDosentExistInWrapper = () => {
                    var e;
                    null === this.openElementData && (null === (e = this.input) || void 0 === e || e.setAttribute("data-open", "timepicker-ui-input"));
                }, this._setClassTopOpenElement = () => {
                    this.openElement.forEach((e => null == e ? void 0 : e.classList.add("timepicker-ui-open-element")));
                }, this._removeBackdrop = () => {
                    var e;
                    this._options.backdrop || (null === (e = this.modalElement) || void 0 === e || e.classList.add("removed"), 
                    this.openElement.forEach((e => null == e ? void 0 : e.classList.add("disabled"))));
                }, this._setNormalizeClass = () => {
                    var e, i;
                    const t = null === (e = this.modalElement) || void 0 === e ? void 0 : e.querySelectorAll("div");
                    null === (i = this.modalElement) || void 0 === i || i.classList.add("timepicker-ui-normalize"), 
                    null == t || t.forEach((e => e.classList.add("timepicker-ui-normalize")));
                }, this._setFlexEndToFooterIfNoKeyboardIcon = () => {
                    !this._options.enableSwitchIcon && this.footer && (this.footer.style.justifyContent = "flex-end");
                }, this._eventsBundle = () => {
                    var e, i, t, n, r, o, s, a, l, u, c, d, p;
                    if (this._isModalRemove) {
                        if (this._handleEscClick(), this._setErrorHandler(), this._removeErrorHandler(), 
                        this.openElement.forEach((e => null == e ? void 0 : e.classList.add("disabled"))), 
                        null === (e = this.input) || void 0 === e || e.blur(), this._setScrollbarOrNot(), 
                        this._setModalTemplate(), this._setNormalizeClass(), this._removeBackdrop(), this._setBgColorToCirleWithHourTips(), 
                        this._setOnStartCSSClassesIfClockType24h(), this._setClassActiveToHourOnOpen(), 
                        null !== this.clockFace) {
                            const e = new y({
                                array: k,
                                classToAdd: "timepicker-ui-hour-time-12",
                                clockFace: this.clockFace,
                                tipsWrapper: this.tipsWrapper,
                                theme: this._options.theme,
                                disabledTime: (null === (t = null === (i = this._disabledTime) || void 0 === i ? void 0 : i.value) || void 0 === t ? void 0 : t.isInterval) ? null === (n = this._disabledTime) || void 0 === n ? void 0 : n.value.rangeArrHour : null === (o = null === (r = this._disabledTime) || void 0 === r ? void 0 : r.value) || void 0 === o ? void 0 : o.hours,
                                clockType: "12h",
                                hour: this.hour.value
                            });
                            if (e.create(), "24h" === this._options.clockType) new y({
                                array: b,
                                classToAdd: "timepicker-ui-hour-time-24",
                                clockFace: this.tipsWrapperFor24h,
                                tipsWrapper: this.tipsWrapperFor24h,
                                theme: this._options.theme,
                                clockType: "24h",
                                disabledTime: (null === (a = null === (s = this._disabledTime) || void 0 === s ? void 0 : s.value) || void 0 === a ? void 0 : a.isInterval) ? null === (l = this._disabledTime) || void 0 === l ? void 0 : l.value.rangeArrHour : null === (c = null === (u = this._disabledTime) || void 0 === u ? void 0 : u.value) || void 0 === c ? void 0 : c.hours,
                                hour: this.hour.value
                            }).create(); else (null === (d = this._disabledTime) || void 0 === d ? void 0 : d.value.startType) === (null === (p = this._disabledTime) || void 0 === p ? void 0 : p.value.endType) ? setTimeout((() => {
                                var i, t, n, r, o, s, a, l;
                                (null === (i = this._disabledTime) || void 0 === i ? void 0 : i.value.startType) === (null === (t = this.activeTypeMode) || void 0 === t ? void 0 : t.textContent) && e.updateDisable({
                                    hoursToUpdate: null === (r = null === (n = this._disabledTime) || void 0 === n ? void 0 : n.value) || void 0 === r ? void 0 : r.rangeArrHour,
                                    minutesToUpdate: {
                                        endMinutes: null === (o = this._disabledTime) || void 0 === o ? void 0 : o.value.endMinutes,
                                        removedEndHour: null === (s = this._disabledTime) || void 0 === s ? void 0 : s.value.removedEndHour,
                                        removedStartedHour: null === (a = this._disabledTime) || void 0 === a ? void 0 : a.value.removedStartedHour,
                                        actualHour: this.hour.value,
                                        startMinutes: null === (l = this._disabledTime) || void 0 === l ? void 0 : l.value.startMinutes
                                    }
                                });
                            }), 300) : setTimeout((() => {
                                var i, t, n;
                                e.updateDisable({
                                    minutesToUpdate: {
                                        actualHour: this.hour.value,
                                        pmHours: null === (i = this._disabledTime) || void 0 === i ? void 0 : i.value.pmHours,
                                        amHours: null === (t = this._disabledTime) || void 0 === t ? void 0 : t.value.amHours,
                                        activeMode: null === (n = this.activeTypeMode) || void 0 === n ? void 0 : n.textContent
                                    }
                                });
                            }), 300), e.updateDisable();
                        }
                        this._setFlexEndToFooterIfNoKeyboardIcon(), setTimeout((() => {
                            this._setTheme();
                        }), 0), this._setAnimationToOpen(), this._getInputValueOnOpenAndSet(), this._toggleClassActiveToValueTips(this.hour.value), 
                        this._isMobileView || (this._setTransformToCircleWithSwitchesHour(this.hour.value), 
                        this._handleAnimationClock()), this._handleMinutesEvents(), this._handleHourEvents(), 
                        "24h" !== this._options.clockType && (this._handleAmClick(), this._handlePmClick()), 
                        this.clockFace && this._handleMoveHand(), this._handleCancelButton(), this._handleOkButton(), 
                        this.modalElement && (this._setShowClassToBackdrop(), this._handleBackdropClick()), 
                        this._handleIconChangeView(), this._handleClickOnHourMobile(), this._options.focusTrap && this._focusTrapHandler();
                    }
                }, this._handleOpenOnClick = () => {
                    this.openElement.forEach((e => this._clickTouchEvents.forEach((i => null == e ? void 0 : e.addEventListener(i, (() => this._eventsBundle()))))));
                }, this._getInputValueOnOpenAndSet = () => {
                    var e, i;
                    const t = u(this.input, this._options.clockType, this._options.currentTime);
                    if (void 0 === t) return this.hour.value = "12", this.minutes.value = "00", n(this._element, "show", {
                        hour: this.hour.value,
                        minutes: this.minutes.value,
                        type: null === (e = this.activeTypeMode) || void 0 === e ? void 0 : e.dataset.type,
                        degreesHours: this._degreesHours,
                        degreesMinutes: this._degreesMinutes
                    }), void ("24h" !== this._options.clockType && this.AM.classList.add("active"));
                    let [r, o, s] = this.input.value.split(":").join(" ").split(" ");
                    0 === this.input.value.length && (r = t.hour, o = t.minutes, s = t.type), this.hour.value = r, 
                    this.minutes.value = o;
                    const a = document.querySelector(`[data-type='${s}']`);
                    "24h" !== this._options.clockType && a && a.classList.add("active"), n(this._element, "show", Object.assign(Object.assign({}, t), {
                        type: null === (i = this.activeTypeMode) || void 0 === i ? void 0 : i.dataset.type,
                        degreesHours: this._degreesHours,
                        degreesMinutes: this._degreesMinutes
                    }));
                }, this._handleCancelButton = () => {
                    this._clickTouchEvents.forEach((e => {
                        this.cancelButton.addEventListener(e, (() => {
                            var e;
                            const i = u(this.input, this._options.clockType);
                            n(this._element, "cancel", Object.assign(Object.assign({}, i), {
                                hourNotAccepted: this.hour.value,
                                minutesNotAccepted: this.minutes.value,
                                type: null === (e = this.activeTypeMode) || void 0 === e ? void 0 : e.dataset.type,
                                degreesHours: this._degreesHours,
                                degreesMinutes: this._degreesMinutes
                            })), this.close()();
                        }));
                    }));
                }, this._handleOkButton = () => {
                    this._clickTouchEvents.forEach((e => {
                        var i;
                        null === (i = this.okButton) || void 0 === i || i.addEventListener(e, (() => {
                            var e, i, t;
                            const {clockType: r, disabledTime: o} = this._options, s = c(this.hour.value, "hour", r), a = c(this.minutes.value, "minutes", r);
                            let u;
                            const p = d(this.hour.value, "hour", r, null == o ? void 0 : o.hours), m = d(this.minutes.value, "minutes", r, null == o ? void 0 : o.minutes);
                            if ((null == o ? void 0 : o.interval) && (u = ((e, i, t, n) => {
                                const r = t ? l(`${e}:${i} ${t}`.trim()) : `${e}:${i}`.trim();
                                let o, s;
                                if (t) {
                                    const [e, i] = n.trim().split("-").map((e => e.trim()));
                                    o = l(e), s = l(i);
                                } else {
                                    const [e, i] = n.trim().split("-"), t = e => e.trim().split(":").map((e => Number(e) <= 9 ? `0${Number(e)}` : e)).join(":");
                                    o = t(e), s = t(i);
                                }
                                return r < o || r > s;
                            })(this.hour.value, this.minutes.value, null === (e = this.activeTypeMode) || void 0 === e ? void 0 : e.textContent, o.interval)), 
                            !1 === u || !1 === s || !1 === a || !1 === p || !1 === m) return !1 !== u && a && m || this.minutes.classList.add("invalid-value"), 
                            void (!1 !== u && s && p || this.hour.classList.add("invalid-value"));
                            this.input.value = `${this.hour.value}:${this.minutes.value} ${"24h" === this._options.clockType ? "" : null === (i = this.activeTypeMode) || void 0 === i ? void 0 : i.dataset.type}`.trimEnd(), 
                            n(this._element, "accept", {
                                hour: this.hour.value,
                                minutes: this.minutes.value,
                                type: null === (t = this.activeTypeMode) || void 0 === t ? void 0 : t.dataset.type,
                                degreesHours: this._degreesHours,
                                degreesMinutes: this._degreesMinutes
                            }), this.close()();
                        }));
                    }));
                }, this._setShowClassToBackdrop = () => {
                    this._options.backdrop && setTimeout((() => {
                        this.modalElement.classList.add("show");
                    }), 300);
                }, this._handleBackdropClick = () => {
                    var e;
                    null === (e = this.modalElement) || void 0 === e || e.addEventListener("click", (e => {
                        var i;
                        const r = e.target;
                        if (!t(r, "timepicker-ui-modal")) return;
                        const o = u(this.input, this._options.clockType);
                        n(this._element, "cancel", Object.assign(Object.assign({}, o), {
                            hourNotAccepted: this.hour.value,
                            minutesNotAccepted: this.minutes.value,
                            type: null === (i = this.activeTypeMode) || void 0 === i ? void 0 : i.dataset.type,
                            degreesHours: this._degreesHours,
                            degreesMinutes: this._degreesMinutes
                        })), this.close()();
                    }));
                }, this._setBgColorToCirleWithHourTips = () => {
                    if (!this._options) return;
                    const {mobile: e, theme: i} = this._options;
                    e || null === this.circle || (this.circle.style.backgroundColor = "crane-straight" === i || "crane-radius" === i ? m.cranered400 : m.purple);
                }, this._setBgColorToCircleWithMinutesTips = () => {
                    const {theme: e} = this._options;
                    this.minutes.value && g.includes(this.minutes.value) && (this.circle.style.backgroundColor = "crane-straight" === e || "crane-radius" === e ? m.cranered400 : m.purple, 
                    this.circle.classList.remove("small-circle"));
                }, this._removeBgColorToCirleWithMinutesTips = () => {
                    this.minutes.value && g.includes(this.minutes.value) || (this.circle.style.backgroundColor = "", 
                    this.circle.classList.add("small-circle"));
                }, this._setTimepickerClassToElement = () => {
                    var e;
                    null === (e = this._element) || void 0 === e || e.classList.add("timepicker-ui");
                }, this._setClassActiveToHourOnOpen = () => {
                    var e;
                    this._options.mobile || this._isMobileView || null === (e = this.hour) || void 0 === e || e.classList.add("active");
                }, this._setMinutesToClock = e => {
                    var i, t, n, r, o;
                    null !== this.clockFace && this._setTransformToCircleWithSwitchesMinutes(e), this._removeBgColorToCirleWithMinutesTips();
                    const s = (null === (t = null === (i = this._disabledTime) || void 0 === i ? void 0 : i.value) || void 0 === t ? void 0 : t.minutes) ? null === (r = null === (n = this._disabledTime) || void 0 === n ? void 0 : n.value) || void 0 === r ? void 0 : r.minutes : null === (o = this._disabledTime) || void 0 === o ? void 0 : o.value, a = new y({
                        array: g,
                        classToAdd: "timepicker-ui-minutes-time",
                        clockFace: this.clockFace,
                        tipsWrapper: this.tipsWrapper,
                        theme: this._options.theme,
                        disabledTime: s,
                        hour: this.hour.value,
                        clockType: this._options.clockType
                    });
                    a.create(), "12h" === this._options.clockType && a.updateDisable(), this._toggleClassActiveToValueTips(e), 
                    "24h" === this._options.clockType && (this.tipsWrapperFor24h.innerHTML = "");
                }, this._setHoursToClock = e => {
                    var i, t, n, r, o;
                    if (null !== this.clockFace) {
                        this._setTransformToCircleWithSwitchesHour(e), this._setBgColorToCirleWithHourTips();
                        const s = (null === (t = null === (i = this._disabledTime) || void 0 === i ? void 0 : i.value) || void 0 === t ? void 0 : t.isInterval) ? null === (n = this._disabledTime) || void 0 === n ? void 0 : n.value.rangeArrHour : null === (o = null === (r = this._disabledTime) || void 0 === r ? void 0 : r.value) || void 0 === o ? void 0 : o.hours, a = new y({
                            array: k,
                            classToAdd: "timepicker-ui-hour-time-12",
                            clockFace: this.clockFace,
                            tipsWrapper: this.tipsWrapper,
                            theme: this._options.theme,
                            disabledTime: s,
                            clockType: "12h",
                            hour: this.hour.value
                        });
                        a.create(), "24h" === this._options.clockType ? new y({
                            array: b,
                            classToAdd: "timepicker-ui-hour-time-24",
                            clockFace: this.tipsWrapperFor24h,
                            tipsWrapper: this.tipsWrapperFor24h,
                            theme: this._options.theme,
                            clockType: "24h",
                            disabledTime: s,
                            hour: this.hour.value
                        }).create() : a.updateDisable(), this._toggleClassActiveToValueTips(e);
                    }
                }, this._setTransformToCircleWithSwitchesHour = e => {
                    const i = Number(e);
                    let t = i > 12 ? 30 * i - 360 : 30 * i;
                    360 === t && (t = 0), t > 360 || (this.clockHand.style.transform = `rotateZ(${t}deg)`);
                }, this._setTransformToCircleWithSwitchesMinutes = e => {
                    const i = 6 * Number(e);
                    i > 360 || (this.clockHand.style.transform = `rotateZ(${i}deg)`);
                }, this._handleAmClick = () => {
                    this._clickTouchEvents.forEach((e => {
                        this.AM.addEventListener(e, (e => {
                            var i, r, o, s;
                            if (e.target.classList.add("active"), this.PM.classList.remove("active"), "12h" === this._options.clockType && (null === (i = this._options.disabledTime) || void 0 === i ? void 0 : i.interval)) {
                                const e = new y({
                                    clockFace: this.clockFace,
                                    tipsWrapper: this.tipsWrapper,
                                    array: t(this.hour, "active") ? k : g
                                });
                                (null === (r = this._disabledTime) || void 0 === r ? void 0 : r.value.startType) === (null === (o = this._disabledTime) || void 0 === o ? void 0 : o.value.endType) ? setTimeout((() => {
                                    var i, t, n, r;
                                    (null === (i = this._disabledTime) || void 0 === i ? void 0 : i.value.startType) === (null === (t = this.activeTypeMode) || void 0 === t ? void 0 : t.textContent) ? e.updateDisable(Object.assign({
                                        hoursToUpdate: null === (r = null === (n = this._disabledTime) || void 0 === n ? void 0 : n.value) || void 0 === r ? void 0 : r.rangeArrHour
                                    }, this._getDestructuringObj())) : e.clean();
                                }), 300) : setTimeout((() => {
                                    e.updateDisable(Object.assign({}, this._getDestructuringObj(!0)));
                                }), 300), e.updateDisable();
                            }
                            n(this._element, "selectamtypemode", {
                                hour: this.hour.value,
                                minutes: this.minutes.value,
                                type: null === (s = this.activeTypeMode) || void 0 === s ? void 0 : s.dataset.type,
                                degreesHours: this._degreesHours,
                                degreesMinutes: this._degreesMinutes
                            });
                        }));
                    }));
                }, this._handlePmClick = () => {
                    this._clickTouchEvents.forEach((e => {
                        this.PM.addEventListener(e, (e => {
                            var i, r, o, s;
                            if (e.target.classList.add("active"), this.AM.classList.remove("active"), "12h" === this._options.clockType && (null === (i = this._options.disabledTime) || void 0 === i ? void 0 : i.interval)) {
                                const e = new y({
                                    clockFace: this.clockFace,
                                    tipsWrapper: this.tipsWrapper,
                                    array: t(this.hour, "active") ? k : g
                                });
                                (null === (r = this._disabledTime) || void 0 === r ? void 0 : r.value.startType) === (null === (o = this._disabledTime) || void 0 === o ? void 0 : o.value.endType) ? setTimeout((() => {
                                    var i, t, n, r;
                                    (null === (i = this._disabledTime) || void 0 === i ? void 0 : i.value.startType) === (null === (t = this.activeTypeMode) || void 0 === t ? void 0 : t.textContent) ? e.updateDisable(Object.assign({
                                        hoursToUpdate: null === (r = null === (n = this._disabledTime) || void 0 === n ? void 0 : n.value) || void 0 === r ? void 0 : r.rangeArrHour
                                    }, this._getDestructuringObj())) : e.clean();
                                }), 300) : setTimeout((() => {
                                    e.updateDisable(Object.assign({}, this._getDestructuringObj(!0)));
                                }), 300);
                            }
                            n(this._element, "selectpmtypemode", {
                                hour: this.hour.value,
                                minutes: this.minutes.value,
                                type: null === (s = this.activeTypeMode) || void 0 === s ? void 0 : s.dataset.type,
                                degreesHours: this._degreesHours,
                                degreesMinutes: this._degreesMinutes
                            });
                        }));
                    }));
                }, this._handleAnimationClock = () => {
                    this._options.animation && setTimeout((() => {
                        var e;
                        null === (e = this.clockFace) || void 0 === e || e.classList.add("timepicker-ui-clock-animation"), 
                        setTimeout((() => {
                            var e;
                            null === (e = this.clockFace) || void 0 === e || e.classList.remove("timepicker-ui-clock-animation");
                        }), 600);
                    }), 150);
                }, this._handleAnimationSwitchTipsMode = () => {
                    this.clockHand.classList.add("timepicker-ui-tips-animation"), setTimeout((() => {
                        var e;
                        null === (e = this.clockHand) || void 0 === e || e.classList.remove("timepicker-ui-tips-animation");
                    }), 401);
                }, this._handleClasses24h = (e, i) => {
                    var t;
                    const n = e.target;
                    this.hourTips && "24h" === this._options.clockType && (Number(n.textContent) > 12 || 0 === Number(n.textContent) ? this._setCircleClockClasses24h() : this._removeCircleClockClasses24h(), 
                    this._options.mobile || null === (t = this.tipsWrapperFor24h) || void 0 === t || t.classList.remove("timepicker-ui-tips-wrapper-24h-disabled")), 
                    n && i && (i.value = n.value.replace(/\D+/g, ""), i.click());
                }, this._handleHourEvents = () => {
                    var e, i;
                    this._inputEvents.forEach((e => {
                        var i;
                        null === (i = this.hour) || void 0 === i || i.addEventListener(e, (e => {
                            var i, r, o, s, a;
                            const l = e.target;
                            if (null !== this.clockFace && this._handleAnimationSwitchTipsMode(), "24h" === this._options.clockType && (Number(l.value) > 12 || 0 === Number(l.value) ? this._setCircleClockClasses24h() : this._removeCircleClockClasses24h(), 
                            this._options.mobile || null === (i = this.tipsWrapperFor24h) || void 0 === i || i.classList.remove("timepicker-ui-tips-wrapper-24h-disabled")), 
                            this._setHoursToClock(l.value), l.classList.add("active"), this.minutes.classList.remove("active"), 
                            "12h" === this._options.clockType && (null === (r = this._options.disabledTime) || void 0 === r ? void 0 : r.interval)) {
                                const e = new y({
                                    clockFace: this.clockFace,
                                    tipsWrapper: this.tipsWrapper,
                                    array: t(this.hour, "active") ? k : g
                                });
                                (null === (o = this._disabledTime) || void 0 === o ? void 0 : o.value.startType) === (null === (s = this._disabledTime) || void 0 === s ? void 0 : s.value.endType) ? setTimeout((() => {
                                    var i, t, n, r;
                                    (null === (i = this._disabledTime) || void 0 === i ? void 0 : i.value.startType) === (null === (t = this.activeTypeMode) || void 0 === t ? void 0 : t.textContent) ? e.updateDisable(Object.assign({
                                        hoursToUpdate: null === (r = null === (n = this._disabledTime) || void 0 === n ? void 0 : n.value) || void 0 === r ? void 0 : r.rangeArrHour
                                    }, this._getDestructuringObj())) : e.clean();
                                }), 300) : setTimeout((() => {
                                    e.updateDisable(Object.assign({}, this._getDestructuringObj(!0)));
                                }), 300);
                            }
                            n(this._element, "selecthourmode", {
                                hour: this.hour.value,
                                minutes: this.minutes.value,
                                type: null === (a = this.activeTypeMode) || void 0 === a ? void 0 : a.dataset.type,
                                degreesHours: this._degreesHours,
                                degreesMinutes: this._degreesMinutes
                            }), null !== this.clockFace && this.circle.classList.remove("small-circle");
                        }));
                    })), null === (e = this.hour) || void 0 === e || e.addEventListener("blur", (e => this._handleClasses24h(e, this.hour))), 
                    null === (i = this.hour) || void 0 === i || i.addEventListener("focus", (e => this._handleClasses24h(e, this.hour)));
                }, this._handleMinutesEvents = () => {
                    var e, i;
                    this._inputEvents.forEach((e => {
                        this.minutes.addEventListener(e, (e => {
                            var i, r, o, s, a, l;
                            const u = e.target;
                            if (null !== this.clockFace && (this._handleAnimationSwitchTipsMode(), this._setMinutesToClock(u.value)), 
                            "24h" === this._options.clockType && (this._removeCircleClockClasses24h(), this._options.mobile || null === (i = this.tipsWrapperFor24h) || void 0 === i || i.classList.add("timepicker-ui-tips-wrapper-24h-disabled")), 
                            u.classList.add("active"), null === (r = this.hour) || void 0 === r || r.classList.remove("active"), 
                            "12h" === this._options.clockType && (null === (o = this._options.disabledTime) || void 0 === o ? void 0 : o.interval)) {
                                const e = new y({
                                    clockFace: this.clockFace,
                                    tipsWrapper: this.tipsWrapper,
                                    array: t(this.hour, "active") ? k : g
                                });
                                (null === (s = this._disabledTime) || void 0 === s ? void 0 : s.value.startType) === (null === (a = this._disabledTime) || void 0 === a ? void 0 : a.value.endType) ? setTimeout((() => {
                                    var i, t, n;
                                    (null === (i = this._disabledTime) || void 0 === i ? void 0 : i.value.startType) === (null === (t = this.activeTypeMode) || void 0 === t ? void 0 : t.textContent) ? e.updateDisable(Object.assign({
                                        hoursToUpdate: null === (n = this._disabledTime) || void 0 === n ? void 0 : n.value.rangeArrHour
                                    }, this._getDestructuringObj())) : e.clean();
                                }), 300) : setTimeout((() => {
                                    e.updateDisable(Object.assign({}, this._getDestructuringObj(!0)));
                                }), 300);
                            }
                            n(this._element, "selectminutemode", {
                                hour: this.hour.value,
                                minutes: this.minutes.value,
                                type: null === (l = this.activeTypeMode) || void 0 === l ? void 0 : l.dataset.type,
                                degreesHours: this._degreesHours,
                                degreesMinutes: this._degreesMinutes
                            });
                        }));
                    })), null === (e = this.minutes) || void 0 === e || e.addEventListener("blur", (e => this._handleClasses24h(e, this.minutes))), 
                    null === (i = this.minutes) || void 0 === i || i.addEventListener("focus", (e => this._handleClasses24h(e, this.minutes)));
                }, this._handleEventToMoveHand = e => {
                    var o, s, a, l, c, d, p, m, h, v, b, k, g, y, _, T, f, x, w, M, C, E, H, L, S, N, $, A, O, I, W, j, F, P, D, q, B, V, z, U, R, Y, Z, K, X, J, G, Q, ee, ie, te, ne, re, oe, se, ae, le, ue, ce, de, pe, me;
                    const {target: he, type: ve, touches: be} = e, ke = he, {incrementMinutes: ge, incrementHours: ye, switchToMinutesAfterSelectHour: _e} = this._options;
                    if (!i(e, this.clockFace)) return;
                    const Te = i(e, this.clockFace), fe = this.clockFace.offsetWidth / 2, xe = Te && Math.atan2(Te.y - fe, Te.x - fe);
                    if ("mouseup" === ve || "touchend" === ve) return this._isTouchMouseMove = !1, void (_e && (t(ke, "timepicker-ui-value-tips") || t(ke, "timepicker-ui-value-tips-24h") || t(ke, "timepicker-ui-tips-wrapper")) && this.minutes.click());
                    if ("mousedown" !== ve && "mousemove" !== ve && "touchmove" !== ve && "touchstart" !== ve || "mousedown" !== ve && "touchstart" !== ve && "touchmove" !== ve || ((t(ke, "timepicker-ui-clock-face") || t(ke, "timepicker-ui-circle-hand") || t(ke, "timepicker-ui-hour-time-12") || t(ke, "timepicker-ui-minutes-time") || t(ke, "timepicker-ui-clock-hand") || t(ke, "timepicker-ui-value-tips") || t(ke, "timepicker-ui-value-tips-24h") || t(ke, "timepicker-ui-tips-wrapper") || t(ke, "timepicker-ui-tips-wrapper-24h")) && !t(ke, "timepicker-ui-tips-disabled") ? (e.preventDefault(), 
                    this._isTouchMouseMove = !0) : this._isTouchMouseMove = !1), !this._isTouchMouseMove) return;
                    if (null !== this.minutesTips) {
                        this.minutes.classList.add("active");
                        let e, i = xe && r(Math.trunc(180 * xe / Math.PI) + 90, ge, 6);
                        if (void 0 === i) return;
                        if (i < 0 ? (e = Math.round(360 + i / 6) % 60, i = 360 + 6 * Math.round(i / 6)) : (e = Math.round(i / 6) % 60, 
                        i = 6 * Math.round(i / 6)), null === (o = this._disabledTime) || void 0 === o ? void 0 : o.value.isInterval) if ((null === (c = this._disabledTime) || void 0 === c ? void 0 : c.value.endType) === (null === (d = this._disabledTime) || void 0 === d ? void 0 : d.value.startType)) {
                            if ((null === (h = null === (m = null === (p = this._disabledTime) || void 0 === p ? void 0 : p.value) || void 0 === m ? void 0 : m.endMinutes) || void 0 === h ? void 0 : h.includes(e <= 9 ? `0${e}` : `${e}`)) && this.hour.value === (null === (b = null === (v = this._disabledTime) || void 0 === v ? void 0 : v.value) || void 0 === b ? void 0 : b.removedEndHour) && (null === (k = this._disabledTime) || void 0 === k ? void 0 : k.value.endType) === (null === (g = this.activeTypeMode) || void 0 === g ? void 0 : g.textContent)) return;
                            if ((null === (T = null === (_ = null === (y = this._disabledTime) || void 0 === y ? void 0 : y.value) || void 0 === _ ? void 0 : _.startMinutes) || void 0 === T ? void 0 : T.includes(e <= 9 ? `0${e}` : `${e}`)) && this.hour.value === (null === (x = null === (f = this._disabledTime) || void 0 === f ? void 0 : f.value) || void 0 === x ? void 0 : x.removedStartedHour) && (null === (w = this._disabledTime) || void 0 === w ? void 0 : w.value.startType) === (null === (M = this.activeTypeMode) || void 0 === M ? void 0 : M.textContent)) return;
                        } else {
                            if ((null === (C = this.activeTypeMode) || void 0 === C ? void 0 : C.textContent) === (null === (E = this._disabledTime) || void 0 === E ? void 0 : E.value.endType) && ((null === (S = null === (L = null === (H = this._disabledTime) || void 0 === H ? void 0 : H.value) || void 0 === L ? void 0 : L.endMinutes) || void 0 === S ? void 0 : S.includes(e <= 9 ? `0${e}` : `${e}`)) && (null === (N = this._disabledTime) || void 0 === N ? void 0 : N.value.removedPmHour) === this.hour.value || (null === ($ = this._disabledTime) || void 0 === $ ? void 0 : $.value.pmHours.map(Number).includes(Number(this.hour.value))))) return;
                            if ((null === (A = this.activeTypeMode) || void 0 === A ? void 0 : A.textContent) === (null === (O = this._disabledTime) || void 0 === O ? void 0 : O.value.startType) && ((null === (j = null === (W = null === (I = this._disabledTime) || void 0 === I ? void 0 : I.value) || void 0 === W ? void 0 : W.startMinutes) || void 0 === j ? void 0 : j.includes(e <= 9 ? `0${e}` : `${e}`)) && (null === (F = this._disabledTime) || void 0 === F ? void 0 : F.value.removedAmHour) === this.hour.value || (null === (P = this._disabledTime) || void 0 === P ? void 0 : P.value.amHours.map(Number).includes(Number(this.hour.value))))) return;
                        } else if (null === (l = null === (a = null === (s = this._disabledTime) || void 0 === s ? void 0 : s.value) || void 0 === a ? void 0 : a.minutes) || void 0 === l ? void 0 : l.includes(e <= 9 ? `0${e}` : `${e}`)) return;
                        this.minutes.value = e >= 10 ? `${e}` : `0${e}`, this.clockHand.style.transform = `rotateZ(${i}deg)`, 
                        this._degreesMinutes = i, this._toggleClassActiveToValueTips(this.minutes.value), 
                        this._removeBgColorToCirleWithMinutesTips(), this._setBgColorToCircleWithMinutesTips(), 
                        n(this._element, "update", Object.assign(Object.assign({}, u(this.input, this._options.clockType)), {
                            degreesHours: this._degreesHours,
                            degreesMinutes: this._degreesMinutes,
                            eventType: ve,
                            type: null === (D = this.activeTypeMode) || void 0 === D ? void 0 : D.dataset.type
                        }));
                    }
                    const we = be ? be[0] : void 0, Me = be && we ? document.elementFromPoint(we.clientX, we.clientY) : null;
                    if (null !== this.hourTips) {
                        if (null === (q = this.hour) || void 0 === q || q.classList.add("active"), !t(Me || ke, "timepicker-ui-value-tips-24h") && !t(Me || ke, "timepicker-ui-tips-disabled") && (t(Me || ke, "timepicker-ui-value-tips") || t(Me || ke, "timepicker-ui-tips-wrapper"))) {
                            let e, i = xe && r(Math.trunc(180 * xe / Math.PI) + 90, ye, 30);
                            if (this._degreesHours = i, void 0 === i) return;
                            i < 0 ? (e = Math.round(360 + i / 30) % 12, i = 360 + i) : (e = Math.round(i / 30) % 12, 
                            (0 === e || e > 12) && (e = 12));
                            const t = (null === (B = this._disabledTime) || void 0 === B ? void 0 : B.value.isInterval) ? "rangeArrHour" : "hours";
                            if ((null === (V = this._disabledTime) || void 0 === V ? void 0 : V.value.endType) === (null === (U = null === (z = this._disabledTime) || void 0 === z ? void 0 : z.value) || void 0 === U ? void 0 : U.startType)) {
                                if ("string" == typeof (null === (Y = null === (R = this._disabledTime) || void 0 === R ? void 0 : R.value) || void 0 === Y ? void 0 : Y.endType)) {
                                    if ((null === (K = null === (Z = this._disabledTime) || void 0 === Z ? void 0 : Z.value) || void 0 === K ? void 0 : K.endType) === (null === (X = this.activeTypeMode) || void 0 === X ? void 0 : X.textContent) && (null === (G = null === (J = this._disabledTime) || void 0 === J ? void 0 : J.value) || void 0 === G ? void 0 : G.startType) === (null === (Q = this.activeTypeMode) || void 0 === Q ? void 0 : Q.textContent) && (null === (ie = null === (ee = this._disabledTime) || void 0 === ee ? void 0 : ee.value[t]) || void 0 === ie ? void 0 : ie.includes(e.toString()))) return;
                                } else if (null === (ne = null === (te = this._disabledTime) || void 0 === te ? void 0 : te.value[t]) || void 0 === ne ? void 0 : ne.includes(e.toString())) return;
                            } else {
                                if ((null === (re = this._disabledTime) || void 0 === re ? void 0 : re.value.startType) === (null === (oe = this.activeTypeMode) || void 0 === oe ? void 0 : oe.textContent) && (null === (se = this._disabledTime) || void 0 === se ? void 0 : se.value.amHours.includes(e.toString()))) return;
                                if ((null === (ae = this._disabledTime) || void 0 === ae ? void 0 : ae.value.endType) === (null === (le = this.activeTypeMode) || void 0 === le ? void 0 : le.textContent) && (null === (ue = this._disabledTime) || void 0 === ue ? void 0 : ue.value.pmHours.includes(e.toString()))) return;
                            }
                            this.clockHand.style.transform = `rotateZ(${i}deg)`, this.hour.value = e > 9 ? `${e}` : `0${e}`, 
                            this._removeCircleClockClasses24h(), this._toggleClassActiveToValueTips(e);
                        }
                        if ((t(Me || ke, "timepicker-ui-value-tips-24h") || t(Me || ke, "timepicker-ui-tips-wrapper-24h")) && !t(Me || ke, "timepicker-ui-tips-disabled")) {
                            let e, i = xe && r(Math.trunc(180 * xe / Math.PI) + 90, ye, 30);
                            if (this._degreesHours = i, void 0 === i) return;
                            i < 0 ? (e = Math.round(360 + i / 30) % 24, i = 360 + i) : (e = Math.round(i / 30) + 12, 
                            12 === e && (e = "00"));
                            const t = (null === (ce = this._disabledTime) || void 0 === ce ? void 0 : ce.value.isInterval) ? "rangeArrHour" : "hours";
                            if (null === (pe = null === (de = this._disabledTime) || void 0 === de ? void 0 : de.value[t]) || void 0 === pe ? void 0 : pe.includes(e.toString())) return;
                            this._setCircleClockClasses24h(), this.clockHand.style.transform = `rotateZ(${i}deg)`, 
                            this.hour.value = `${e}`, this._toggleClassActiveToValueTips(e);
                        }
                        n(this._element, "update", Object.assign(Object.assign({}, u(this.input, this._options.clockType)), {
                            degreesHours: this._degreesHours,
                            degreesMinutes: this._degreesMinutes,
                            eventType: ve,
                            type: null === (me = this.activeTypeMode) || void 0 === me ? void 0 : me.dataset.type
                        }));
                    }
                }, this._toggleClassActiveToValueTips = e => {
                    const i = this.allValueTips.find((i => Number(i.innerText) === Number(e)));
                    this.allValueTips.map((e => e.classList.remove("active"))), void 0 !== i && i.classList.add("active");
                }, this._handleMoveHand = () => {
                    this._options.mobile || this._isMobileView || v.split(" ").forEach((e => {
                        "touchstart" === e || "touchmove" === e || "touchend" === e ? document.addEventListener(e, this._mutliEventsMoveHandler, {
                            passive: !1
                        }) : document.addEventListener(e, this._mutliEventsMoveHandler, !1);
                    }));
                }, this._setModalTemplate = () => {
                    if (!this._options) return;
                    const {appendModalSelector: e} = this._options;
                    if ("" !== e && e) {
                        const i = null === document || void 0 === document ? void 0 : document.querySelector(e);
                        null == i || i.insertAdjacentHTML("beforeend", this.modalTemplate);
                    } else document.body.insertAdjacentHTML("afterend", this.modalTemplate);
                }, this._setScrollbarOrNot = () => {
                    this._options.enableScrollbar ? setTimeout((() => {
                        document.body.style.overflowY = "", document.body.style.paddingRight = "";
                    }), 400) : (document.body.style.paddingRight = `${(() => {
                        const e = document.createElement("div");
                        e.className = "timepicker-ui-measure", document.body.appendChild(e);
                        const i = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), i;
                    })()}px`, document.body.style.overflowY = "hidden");
                }, this._setAnimationToOpen = () => {
                    var e, i;
                    null === (e = this.modalElement) || void 0 === e || e.classList.add("opacity"), 
                    this._options.animation ? setTimeout((() => {
                        var e;
                        null === (e = this.modalElement) || void 0 === e || e.classList.add("show");
                    }), 150) : null === (i = this.modalElement) || void 0 === i || i.classList.add("show");
                }, this._removeAnimationToClose = () => {
                    var e;
                    this.modalElement && (this._options.animation ? setTimeout((() => {
                        var e;
                        null === (e = this.modalElement) || void 0 === e || e.classList.remove("show");
                    }), 150) : null === (e = this.modalElement) || void 0 === e || e.classList.remove("show"));
                }, this._handlerViewChange = () => _((() => {
                    var e, i, n, r;
                    const {clockType: o} = this._options;
                    if (t(this.modalElement, "mobile")) {
                        const e = c(this.hour.value, "hour", o), t = c(this.minutes.value, "minutes", o);
                        if (!1 === e || !1 === t) return t || this.minutes.classList.add("invalid-value"), 
                        void (e || null === (i = this.hour) || void 0 === i || i.classList.add("invalid-value"));
                        !0 === e && !0 === t && (t && this.minutes.classList.remove("invalid-value"), e && (null === (n = this.hour) || void 0 === n || n.classList.remove("invalid-value"))), 
                        this.close()(), this._isMobileView = !1, this._options.mobile = !1;
                        const s = this.hour.value, a = this.minutes.value, l = null === (r = this.activeTypeMode) || void 0 === r ? void 0 : r.dataset.type;
                        setTimeout((() => {
                            this.destroy(), this.update({
                                options: {
                                    mobile: !1
                                }
                            }), setTimeout((() => {
                                if (this.open(), this.hour.value = s, this.minutes.value = a, "12h" === this._options.clockType) {
                                    const e = "PM" === l ? "AM" : "PM";
                                    this["PM" === l ? "PM" : "AM"].classList.add("active"), this[e].classList.remove("active");
                                }
                                this._setTransformToCircleWithSwitchesHour(this.hour.value), this._toggleClassActiveToValueTips(this.hour.value), 
                                Number(this.hour.value) > 12 || 0 === Number(this.hour.value) ? this._setCircleClockClasses24h() : this._removeCircleClockClasses24h();
                            }), 300);
                        }), 300);
                    } else {
                        this.close()(), this._isMobileView = !0, this._options.mobile = !0;
                        const i = this.hour.value, t = this.minutes.value, n = null === (e = this.activeTypeMode) || void 0 === e ? void 0 : e.dataset.type;
                        setTimeout((() => {
                            this.destroy(), this.update({
                                options: {
                                    mobile: !0
                                }
                            }), setTimeout((() => {
                                if (this.open(), this.hour.value = i, this.minutes.value = t, "12h" === this._options.clockType) {
                                    const e = "PM" === n ? "AM" : "PM";
                                    this["PM" === n ? "PM" : "AM"].classList.add("active"), this[e].classList.remove("active");
                                }
                            }), 300);
                        }), 300);
                    }
                }), this._options.delayHandler || 300), this._handleIconChangeView = () => e(this, void 0, void 0, (function*() {
                    this._options.enableSwitchIcon && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? this.keyboardClockIcon.addEventListener("touchstart", this._handlerViewChange()) : this.keyboardClockIcon.addEventListener("click", this._handlerViewChange()));
                })), this._handlerClickHourMinutes = i => e(this, void 0, void 0, (function*() {
                    var e, n;
                    if (!this.modalElement) return;
                    const {clockType: r, editable: o} = this._options, s = i.target, a = c(this.hour.value, "hour", r), l = c(this.minutes.value, "minutes", r);
                    o && (t(s, "timepicker-ui-hour") || t(s, "timepicker-ui-minutes") ? !1 !== a && !1 !== l || (l || this.minutes.classList.add("invalid-value"), 
                    a || null === (n = this.hour) || void 0 === n || n.classList.add("invalid-value")) : !0 === a && !0 === l && (l && this.minutes.classList.remove("invalid-value"), 
                    a && (null === (e = this.hour) || void 0 === e || e.classList.remove("invalid-value"))));
                })), this._handleClickOnHourMobile = () => {
                    document.addEventListener("mousedown", this._eventsClickMobileHandler), document.addEventListener("touchstart", this._eventsClickMobileHandler);
                }, this._handleKeyPress = e => {
                    "Escape" === e.key && this.modalElement && this.close()();
                }, this._handleEscClick = () => {
                    document.addEventListener("keydown", this._handleKeyPress);
                }, this._focusTrapHandler = () => {
                    setTimeout((() => {
                        var e, i;
                        const n = null === (e = this.wrapper) || void 0 === e ? void 0 : e.querySelectorAll('div[tabindex="0"]:not([disabled])'), r = null === (i = this.wrapper) || void 0 === i ? void 0 : i.querySelectorAll('input[tabindex="0"]:not([disabled])');
                        if (!n || n.length <= 0 || r.length <= 0) return;
                        const o = [ ...r, ...n ], s = o[0], a = o[o.length - 1];
                        this.wrapper.focus(), this.wrapper.addEventListener("keydown", (({key: e, shiftKey: i, target: n}) => {
                            const r = n;
                            if ("Tab" === e && (i ? document.activeElement === s && a.focus() : document.activeElement === a && s.focus()), 
                            "Enter" === e && (t(r, "timepicker-ui-minutes") && this.minutes.click(), t(r, "timepicker-ui-hour") && this.hour.click(), 
                            t(r, "timepicker-ui-cancel-btn") && this.cancelButton.click(), t(r, "timepicker-ui-ok-btn") && this.okButton.click(), 
                            t(r, "timepicker-ui-keyboard-icon-wrapper") && this.keyboardClockIcon.click(), t(r, "timepicker-ui-am") && this.AM.click(), 
                            t(r, "timepicker-ui-pm") && this.PM.click(), t(r, "timepicker-ui-value-tips") || t(r, "timepicker-ui-value-tips-24h"))) {
                                const {left: e, top: i, x: n, y: o, width: s, height: a} = r.getBoundingClientRect(), l = document.elementFromPoint(n, o), u = () => {
                                    var n;
                                    const r = new MouseEvent("mousedown", {
                                        clientX: e + s / 2,
                                        clientY: i + a / 2,
                                        cancelable: !0,
                                        bubbles: !0
                                    });
                                    t(l, "timepicker-ui-value-tips-24h") ? null == l || l.dispatchEvent(r) : null === (n = null == l ? void 0 : l.childNodes[0]) || void 0 === n || n.dispatchEvent(r), 
                                    this._isTouchMouseMove = !1;
                                };
                                u();
                            }
                            setTimeout((() => {
                                this.wrapper.addEventListener("mousedown", (() => document.activeElement.blur()));
                            }), 100);
                        }));
                    }), 301);
                }, this._handleOpenOnEnterFocus = () => {
                    this.input.addEventListener("keydown", (({target: e, key: i}) => {
                        e.disabled || "Enter" === i && this.open();
                    }));
                }, this._element = o, this._cloned = null, this._options = ((e, i) => Object.assign(Object.assign({}, i), e))(Object.assign(Object.assign({}, s), (e => {
                    if (!e) return;
                    const i = JSON.parse(JSON.stringify(e)), t = Object.keys(i);
                    return Object.values(i).reduce(((e, i, n) => (Number(i) ? e[t[n]] = Number(i) : e[t[n]] = "true" === i || "false" === i ? JSON.parse(i) : i, 
                    e)), {});
                })(null === (p = this._element) || void 0 === p ? void 0 : p.dataset)), h), this._isTouchMouseMove = !1, 
                this._degreesHours = 30 * Number(u(null === (T = this._element) || void 0 === T ? void 0 : T.querySelector("input"), this._options.clockType).hour), 
                this._degreesMinutes = 6 * Number(u(null === (f = this._element) || void 0 === f ? void 0 : f.querySelector("input"), this._options.clockType).minutes), 
                this._isMobileView = !1, this._mutliEventsMove = e => this._handleEventToMoveHand(e), 
                this._mutliEventsMoveHandler = this._mutliEventsMove.bind(this), this._eventsClickMobile = e => this._handlerClickHourMinutes(e), 
                this._eventsClickMobileHandler = this._eventsClickMobile.bind(this), this._checkMobileOption(), 
                this._clickTouchEvents = [ "click", "mousedown", "touchstart" ], this._inputEvents = [ "change", ...this._clickTouchEvents ], 
                this._disabledTime = null, this._preventClockTypeByCurrentTime(), this._isModalRemove = !0;
            }
            get modalTemplate() {
                return this._options.mobile && this._isMobileView ? (e => {
                    const {mobileTimeLabel: i, amLabel: t, pmLabel: n, cancelLabel: r, okLabel: o, iconTemplateMobile: s, minuteMobileLabel: a, hourMobileLabel: l, enableSwitchIcon: u, animation: c, clockType: d} = e;
                    return `\n  <div class="timepicker-ui-modal normalize mobile" role="dialog" style='transition:${c ? "opacity 0.15s linear" : "none"}'>\n    <div class="timepicker-ui-wrapper mobile" tabindex="0">\n      <div class="timepicker-ui-header mobile">\n        <div class="timepicker-ui-select-time mobile">${i}</div>\n        <div class="timepicker-ui-wrapper-time mobile">\n          <input class="timepicker-ui-hour mobile" tabindex="0" type="number" min="0" max="${"12h" === d ? "12" : "23"}" />\n          <div class="timepicker-ui-hour-text mobile">${l}</div>\n          <div class="timepicker-ui-dots mobile">:</div>  \n          <div class="timepicker-ui-minute-text mobile">${a}</div>\n          <input class="timepicker-ui-minutes mobile" tabindex="0" type="number" min="0" max="59" /> \n        </div>\n  ${"24h" !== d ? `<div class="timepicker-ui-wrapper-type-time mobile">\n          <div class="timepicker-ui-type-mode timepicker-ui-am mobile" data-type="AM" tabindex="0">${t}</div>    \n          <div class="timepicker-ui-type-mode timepicker-ui-pm mobile" data-type="PM" tabindex="0">${n}</div>    \n        </div>` : ""}\n      </div>\n      <div class="timepicker-ui-footer mobile" data-view="mobile">\n      ${u ? `\n      <div class="timepicker-ui-keyboard-icon-wrapper mobile" role="button" aria-pressed="false" data-view="desktop" tabindex="0">\n      ${s}\n      </div>` : ""}\n      <div class="timepicker-ui-wrapper-btn mobile">\n        <div class="timepicker-ui-cancel-btn mobile" role="button" aria-pressed="false" tabindex="0">${r}</div>\n        <div class="timepicker-ui-ok-btn mobile" role="button" aria-pressed="false" tabindex="0">${o}</div>\n      </div>\n      </div>\n    </div>  \n  </div>`;
                })(this._options) : (e => {
                    const {iconTemplate: i, timeLabel: t, amLabel: n, pmLabel: r, cancelLabel: o, okLabel: s, enableSwitchIcon: a, animation: l, clockType: u, editable: c} = e;
                    return `\n  <div class="timepicker-ui-modal normalize" role="dialog" style='transition:${l ? "opacity 0.15s linear" : "none"}'>\n    <div class="timepicker-ui-wrapper" tabindex="0">\n      <div class="timepicker-ui-header">\n        <div class="timepicker-ui-select-time">${t}</div>\n        <div class="timepicker-ui-wrapper-time ${"24h" === u ? "timepicker-ui-wrapper-time-24h" : ""}">\n          <input ${c ? "" : "readonly"} class="timepicker-ui-hour" tabindex="0" type="number" min="0" max="${"12h" === u ? "12" : "23"}" />\n          <div class="timepicker-ui-dots">:</div>    \n          <input ${c ? "" : "readonly"} class="timepicker-ui-minutes" tabindex="0" type="number" min="0" max="59" /> \n        </div>\n      ${"24h" !== u ? `\n      <div class="timepicker-ui-wrapper-type-time">\n        <div class="timepicker-ui-type-mode timepicker-ui-am" tabindex="0" role="button" data-type="AM">${n}</div>    \n        <div class="timepicker-ui-type-mode timepicker-ui-pm" tabindex="0" role="button" data-type="PM">${r}</div>    \n      </div>\n      ` : ""}\n      </div>\n      <div class="timepicker-ui-wrapper-landspace">\n        <div class="timepicker-ui-body">\n          <div class="timepicker-ui-clock-face">\n            <div class="timepicker-ui-dot"></div>\n            <div class="timepicker-ui-clock-hand">\n              <div class="timepicker-ui-circle-hand"></div>\n            </div>\n            <div class="timepicker-ui-tips-wrapper"></div>\n            ${"24h" === u ? '<div class="timepicker-ui-tips-wrapper-24h"></div>' : ""}\n          </div>\n        </div>\n        <div class="timepicker-ui-footer">\n        ${a ? `\n      <div class="timepicker-ui-keyboard-icon-wrapper" tabindex="0" role="button" aria-pressed="false" data-view="desktop">\n        ${i}\n      </div>` : ""}\n        <div class="timepicker-ui-wrapper-btn" >\n          <div class="timepicker-ui-cancel-btn" tabindex="0" role="button" aria-pressed="false">${o}</div>\n          <div class="timepicker-ui-ok-btn" tabindex="0" role="button" aria-pressed="false">${s}</div>\n        </div>\n        </div>\n      </div>\n    </div>  \n  </div>`;
                })(this._options);
            }
            get modalElement() {
                return document.querySelector(".timepicker-ui-modal");
            }
            get clockFace() {
                return document.querySelector(".timepicker-ui-clock-face");
            }
            get input() {
                var e;
                return null === (e = this._element) || void 0 === e ? void 0 : e.querySelector("input");
            }
            get clockHand() {
                return document.querySelector(".timepicker-ui-clock-hand");
            }
            get circle() {
                return document.querySelector(".timepicker-ui-circle-hand");
            }
            get tipsWrapper() {
                return document.querySelector(".timepicker-ui-tips-wrapper");
            }
            get tipsWrapperFor24h() {
                return document.querySelector(".timepicker-ui-tips-wrapper-24h");
            }
            get minutes() {
                return document.querySelector(".timepicker-ui-minutes");
            }
            get hour() {
                return document.querySelector(".timepicker-ui-hour");
            }
            get AM() {
                return document.querySelector(".timepicker-ui-am");
            }
            get PM() {
                return document.querySelector(".timepicker-ui-pm");
            }
            get minutesTips() {
                return document.querySelector(".timepicker-ui-minutes-time");
            }
            get hourTips() {
                return document.querySelector(".timepicker-ui-hour-time-12");
            }
            get allValueTips() {
                return [ ...document.querySelectorAll(".timepicker-ui-value-tips"), ...document.querySelectorAll(".timepicker-ui-value-tips-24h") ];
            }
            get openElementData() {
                var e;
                const i = null === (e = this._element) || void 0 === e ? void 0 : e.querySelectorAll("[data-open]");
                if ((null == i ? void 0 : i.length) > 0) {
                    const e = [];
                    return i.forEach((({dataset: i}) => {
                        var t;
                        return e.push(null !== (t = i.open) && void 0 !== t ? t : "");
                    })), [ ...new Set(e) ];
                }
                return null;
            }
            get openElement() {
                var e, i;
                return null === this.openElementData ? (null === (e = this.input) || void 0 === e || e.setAttribute("data-open", "timepicker-ui-input"), 
                [ this.input ]) : null !== (i = this.openElementData.map((e => {
                    var i;
                    return null === (i = this._element) || void 0 === i ? void 0 : i.querySelectorAll(`[data-open='${e}']`);
                }))[0]) && void 0 !== i ? i : "";
            }
            get cancelButton() {
                return document.querySelector(".timepicker-ui-cancel-btn");
            }
            get okButton() {
                return document.querySelector(".timepicker-ui-ok-btn");
            }
            get activeTypeMode() {
                return document.querySelector(".timepicker-ui-type-mode.active");
            }
            get keyboardClockIcon() {
                return document.querySelector(".timepicker-ui-keyboard-icon-wrapper");
            }
            get footer() {
                return document.querySelector(".timepicker-ui-footer");
            }
            get wrapper() {
                return document.querySelector(".timepicker-ui-wrapper");
            }
            _checkDisabledValuesOnStart() {
                if (!this._options.disabledTime || this._options.disabledTime.interval) return;
                const {disabledTime: {hours: e, minutes: i}, clockType: t} = this._options, n = !e || d(e, "hour", t), r = !i || d(i, "minutes", t);
                if (!n || !r) throw new Error("You set wrong hours or minutes in disabled option");
            }
            _checkMobileOption() {
                this._isMobileView = !!this._options.mobile, this._options.mobile && (this._options.editable = !0);
            }
            _getDisableTime() {
                this._disabledTime = (e => {
                    if (!e) return;
                    const {disabledTime: i, clockType: t} = e;
                    if (!i || Object.keys(i).length <= 0 || "Object" !== i.constructor.name) return;
                    const {hours: n, interval: r, minutes: a} = i;
                    if (r) {
                        delete i.hours, delete i.minutes;
                        const [e, n] = r.toString().split("-"), {hour: a, minutes: l, type: c} = u({
                            value: e.trimEnd()
                        }, t), {hour: d, minutes: p, type: m} = u({
                            value: n.trimEnd().trimStart()
                        }, t);
                        let h = o(a, d).map((e => "00" === e || 0 === Number(e) ? `0${Number(e)}` : `${Number(e)}`));
                        const v = [], b = Number(l), k = Number(p);
                        if (m === c) return b > 0 && k <= 0 ? (v.push(h[0], h[h.length - 1]), h = h.slice(1, -1)) : k < 59 && k > 0 && b <= 0 ? (v.push(void 0, h[h.length - 1]), 
                        h = h.slice(0, -1)) : k > 0 && b > 0 ? (v.push(h[0], h[h.length - 1]), h = h.slice(1, -1)) : 0 === k && 0 === b && (v.push(void 0, h[h.length - 1]), 
                        h.pop()), {
                            value: {
                                removedStartedHour: Number(v[0]) <= 9 ? `0${v[0]}` : v[0],
                                removedEndHour: Number(v[1]) <= 9 ? `0${v[1]}` : v[1],
                                rangeArrHour: h,
                                isInterval: !0,
                                startMinutes: o(l, 59).map((e => Number(e) <= 9 ? `0${e}` : `${e}`)),
                                endMinutes: s(0, p).map((e => Number(e) <= 9 ? `0${e}` : `${e}`)),
                                endType: m,
                                startType: c
                            }
                        };
                        {
                            const e = o(a, 12).map(String), i = s(1, d).map(String), t = [], n = [];
                            return b > 0 && k <= 0 ? (t.push(i[i.length - 1]), n.push(e[0]), i.splice(-1, 1), 
                            e.splice(0, 1)) : k < 59 && k > 0 && b <= 0 ? (n.push(e[0]), t.push(i[i.length - 1]), 
                            i.splice(-1, 1)) : k > 0 && b > 0 ? (t.push(i[i.length - 1]), n.push(e[0]), i.splice(-1, 1), 
                            e.splice(0, 1)) : 0 === k && 0 === b && (t.push(i[i.length - 1]), n.push(e[0]), 
                            i.pop()), {
                                value: {
                                    isInterval: !0,
                                    endType: m,
                                    startType: c,
                                    pmHours: i,
                                    amHours: e,
                                    startMinutes: 0 === Number(l) ? [] : o(l, 59).map((e => Number(e) <= 9 ? `0${e}` : `${e}`)),
                                    endMinutes: s(0, p).map((e => Number(e) <= 9 ? `0${e}` : `${e}`)),
                                    removedAmHour: Number(n[0]) <= 9 ? `0${n[0]}` : n[0],
                                    removedPmHour: Number(t[0]) <= 9 ? `0${t[0]}` : t[0]
                                }
                            };
                        }
                    }
                    return null == n || n.forEach((e => {
                        if ("12h" === t && Number(e) > 12) throw new Error("The disabled hours value has to be less than 13");
                        if ("24h" === t && Number(e) > 23) throw new Error("The disabled hours value has to be less than 24");
                    })), null == a || a.forEach((e => {
                        if (Number(e) > 59) throw new Error("The disabled minutes value has to be less than 60");
                    })), {
                        value: {
                            hours: null == n ? void 0 : n.map((e => "00" === e || 0 === Number(e) ? `0${Number(e)}` : `${Number(e)}`)),
                            minutes: null == a ? void 0 : a.map((e => Number(e) <= 9 ? `0${e}` : `${e}`))
                        }
                    };
                })(this._options);
            }
            _removeCircleClockClasses24h() {
                var e, i;
                null === (e = this.circle) || void 0 === e || e.classList.remove("timepicker-ui-circle-hand-24h"), 
                null === (i = this.clockHand) || void 0 === i || i.classList.remove("timepicker-ui-clock-hand-24h");
            }
            _setCircleClockClasses24h() {
                var e, i;
                this.circle && (null === (e = this.circle) || void 0 === e || e.classList.add("timepicker-ui-circle-hand-24h")), 
                this.clockHand && (null === (i = this.clockHand) || void 0 === i || i.classList.add("timepicker-ui-clock-hand-24h"));
            }
            _setErrorHandler() {
                var e, i, t, r;
                const {error: o, currentHour: s, currentMin: a, currentType: l, currentLength: c} = u(this.input, this._options.clockType);
                if (o) {
                    const u = document.createElement("div");
                    throw null === (e = this.input) || void 0 === e || e.classList.add("timepicker-ui-invalid-format"), 
                    u.classList.add("timepicker-ui-invalid-text"), u.innerHTML = "<b>Invalid Time Format</b>", 
                    (null === (i = this.input) || void 0 === i ? void 0 : i.parentElement) && null === (null === (t = this.input) || void 0 === t ? void 0 : t.parentElement.querySelector(".timepicker-ui-invalid-text")) && (null === (r = this.input) || void 0 === r || r.after(u)), 
                    n(this._element, "geterror", {
                        error: o,
                        currentHour: s,
                        currentMin: a,
                        currentType: l,
                        currentLength: c
                    }), new Error(`Invalid Time Format: ${o}`);
                }
            }
            _removeErrorHandler() {
                var e, i;
                null === (e = this.input) || void 0 === e || e.classList.remove("timepicker-ui-invalid-format");
                const t = null === (i = this._element) || void 0 === i ? void 0 : i.querySelector(".timepicker-ui-invalid-text");
                t && t.remove();
            }
            _setOnStartCSSClassesIfClockType24h() {
                if ("24h" === this._options.clockType) {
                    let {hour: e} = u(this.input, this._options.clockType, this._options.currentTime);
                    this.input.value.length > 0 && (e = this.input.value.split(":")[0]), (Number(e) > 12 || 0 === Number(e)) && this._setCircleClockClasses24h();
                }
            }
            _getDestructuringObj(e) {
                var i;
                const {endMinutes: t, removedEndHour: n, removedStartedHour: r, startMinutes: o, pmHours: s, amHours: a, removedAmHour: l, removedPmHour: u} = this._disabledTime.value;
                return e ? {
                    minutesToUpdate: {
                        actualHour: this.hour.value,
                        pmHours: s,
                        amHours: a,
                        activeMode: null === (i = this.activeTypeMode) || void 0 === i ? void 0 : i.textContent,
                        startMinutes: o,
                        endMinutes: t,
                        removedAmHour: l,
                        removedPmHour: u
                    }
                } : {
                    minutesToUpdate: {
                        endMinutes: t,
                        removedEndHour: n,
                        removedStartedHour: r,
                        actualHour: this.hour.value,
                        startMinutes: o
                    }
                };
            }
        }
        document.addEventListener("DOMContentLoaded", (event => {
            document.addEventListener("click", docEvents);
            function docEvents(e) {
                const target = e.target;
                if (target.closest("[data-dropdown-btn]")) toggleClass(target.closest("[data-dropdown-btn]").parentElement, "_active");
                if (!target.closest("[data-dropdown]")) removeClassForArray("[data-dropdown]", "_active");
                if (target.closest("[data-click]")) {
                    removeClassForArray("[data-click]", "_active");
                    addClass(target.closest("[data-click]"), "_active");
                }
                if (target.closest("#like")) toggleClass(target.closest("#like"), "_active");
                if (target.closest("#add")) toggleClass(target.closest("#add"), "_active");
            }
            if (window.innerWidth <= 650) document.querySelector('[data-showmore-content="1"]').setAttribute("data-showmore-content", "2");
        }));
        if (document.querySelector(".progress")) {
            const progress = document.querySelector(".progress");
            const man = document.querySelector("#man span");
            const woman = document.querySelector("#woman span");
            progress.addEventListener("input", (function() {
                const value = this.value;
                man.innerText = value;
                woman.innerText = 100 - value;
            }));
        }
        const DOMElement = document.querySelector(".timepicker-ui");
        const options = {};
        new T(DOMElement, options);
        window["FLS"] = true;
        isWebp();
        menuInit();
        spollers();
        tabs();
        showMore();
        headerScroll();
    })();
})();