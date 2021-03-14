/*! For license information please see app.js.LICENSE.txt */ ! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 11)
}([function(e, t, n) {
    "use strict";
    var r = n(1),
        i = Object.prototype.toString;

    function o(e) {
        return "[object Array]" === i.call(e)
    }

    function s(e) {
        return void 0 === e
    }

    function a(e) {
        return null !== e && "object" == typeof e
    }

    function l(e) {
        return "[object Function]" === i.call(e)
    }

    function u(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]), o(e))
                for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
    }
    e.exports = {
        isArray: o,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === i.call(e)
        },
        isBuffer: function(e) {
            return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        },
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: a,
        isUndefined: s,
        isDate: function(e) {
            return "[object Date]" === i.call(e)
        },
        isFile: function(e) {
            return "[object File]" === i.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === i.call(e)
        },
        isFunction: l,
        isStream: function(e) {
            return a(e) && l(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: u,
        merge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
            }
            for (var r = 0, i = arguments.length; r < i; r++) u(arguments[r], n);
            return t
        },
        deepMerge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n
            }
            for (var r = 0, i = arguments.length; r < i; r++) u(arguments[r], n);
            return t
        },
        extend: function(e, t, n) {
            return u(t, (function(t, i) {
                e[i] = n && "function" == typeof t ? r(t, n) : t
            })), e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);

    function i(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, n) {
        if (!t) return e;
        var o;
        if (n) o = n(t);
        else if (r.isURLSearchParams(t)) o = t.toString();
        else {
            var s = [];
            r.forEach(t, (function(e, t) {
                null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(i(t) + "=" + i(e))
                })))
            })), o = s.join("&")
        }
        if (o) {
            var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
        }
        return e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var r = n(0),
            i = n(20),
            o = {
                "Content-Type": "application/x-www-form-urlencoded"
            };

        function s(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var a, l = {
            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (a = n(5)), a),
            transformRequest: [function(e, t) {
                return i(t, "Accept"), i(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            }
        };
        l.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, r.forEach(["delete", "get", "head"], (function(e) {
            l.headers[e] = {}
        })), r.forEach(["post", "put", "patch"], (function(e) {
            l.headers[e] = r.merge(o)
        })), e.exports = l
    }).call(this, n(19))
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        i = n(21),
        o = n(2),
        s = n(23),
        a = n(26),
        l = n(27),
        u = n(6);
    e.exports = function(e) {
        return new Promise((function(t, c) {
            var f = e.data,
                d = e.headers;
            r.isFormData(f) && delete d["Content-Type"];
            var h = new XMLHttpRequest;
            if (e.auth) {
                var p = e.auth.username || "",
                    m = e.auth.password || "";
                d.Authorization = "Basic " + btoa(p + ":" + m)
            }
            var g = s(e.baseURL, e.url);
            if (h.open(e.method.toUpperCase(), o(g, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h.onreadystatechange = function() {
                    if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in h ? a(h.getAllResponseHeaders()) : null,
                            r = {
                                data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                                status: h.status,
                                statusText: h.statusText,
                                headers: n,
                                config: e,
                                request: h
                            };
                        i(t, c, r), h = null
                    }
                }, h.onabort = function() {
                    h && (c(u("Request aborted", e, "ECONNABORTED", h)), h = null)
                }, h.onerror = function() {
                    c(u("Network Error", e, null, h)), h = null
                }, h.ontimeout = function() {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), c(u(t, e, "ECONNABORTED", h)), h = null
                }, r.isStandardBrowserEnv()) {
                var v = n(28),
                    y = (e.withCredentials || l(g)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
                y && (d[e.xsrfHeaderName] = y)
            }
            if ("setRequestHeader" in h && r.forEach(d, (function(e, t) {
                    void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : h.setRequestHeader(t, e)
                })), r.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials), e.responseType) try {
                h.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                h && (h.abort(), c(e), h = null)
            })), void 0 === f && (f = null), h.send(f)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(22);
    e.exports = function(e, t, n, i, o) {
        var s = new Error(e);
        return r(s, t, n, i, o)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e, t) {
        t = t || {};
        var n = {},
            i = ["url", "method", "params", "data"],
            o = ["headers", "auth", "proxy"],
            s = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
        r.forEach(i, (function(e) {
            void 0 !== t[e] && (n[e] = t[e])
        })), r.forEach(o, (function(i) {
            r.isObject(t[i]) ? n[i] = r.deepMerge(e[i], t[i]) : void 0 !== t[i] ? n[i] = t[i] : r.isObject(e[i]) ? n[i] = r.deepMerge(e[i]) : void 0 !== e[i] && (n[i] = e[i])
        })), r.forEach(s, (function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
        }));
        var a = i.concat(o).concat(s),
            l = Object.keys(t).filter((function(e) {
                return -1 === a.indexOf(e)
            }));
        return r.forEach(l, (function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
        })), n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this.message = e
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                r = function() {
                    for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                        if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                    return 0
                }();
            var i = n && window.Promise ? function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, window.Promise.resolve().then((function() {
                        t = !1, e()
                    })))
                }
            } : function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, setTimeout((function() {
                        t = !1, e()
                    }), r))
                }
            };

            function o(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }

            function s(e, t) {
                if (1 !== e.nodeType) return [];
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? n[t] : n
            }

            function a(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function l(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body
                }
                var t = s(e),
                    n = t.overflow,
                    r = t.overflowX,
                    i = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + i + r) ? e : l(a(e))
            }

            function u(e) {
                return e && e.referenceNode ? e.referenceNode : e
            }
            var c = n && !(!window.MSInputMethodContext || !document.documentMode),
                f = n && /MSIE 10/.test(navigator.userAgent);

            function d(e) {
                return 11 === e ? c : 10 === e ? f : c || f
            }

            function h(e) {
                if (!e) return document.documentElement;
                for (var t = d(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                var r = n && n.nodeName;
                return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }

            function p(e) {
                return null !== e.parentNode ? p(e.parentNode) : e
            }

            function m(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    r = n ? e : t,
                    i = n ? t : e,
                    o = document.createRange();
                o.setStart(r, 0), o.setEnd(i, 0);
                var s, a, l = o.commonAncestorContainer;
                if (e !== l && t !== l || r.contains(i)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;
                var u = p(e);
                return u.host ? m(u.host, t) : m(e, p(t).host)
            }

            function g(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = "top" === t ? "scrollTop" : "scrollLeft",
                    r = e.nodeName;
                if ("BODY" === r || "HTML" === r) {
                    var i = e.ownerDocument.documentElement,
                        o = e.ownerDocument.scrollingElement || i;
                    return o[n]
                }
                return e[n]
            }

            function v(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = g(t, "top"),
                    i = g(t, "left"),
                    o = n ? -1 : 1;
                return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e
            }

            function y(e, t) {
                var n = "x" === t ? "Left" : "Top",
                    r = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"])
            }

            function b(e, t, n, r) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], d(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }

            function _(e) {
                var t = e.body,
                    n = e.documentElement,
                    r = d(10) && getComputedStyle(n);
                return {
                    height: b("Height", t, n, r),
                    width: b("Width", t, n, r)
                }
            }
            var w = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                x = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                E = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                T = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };

            function C(e) {
                return T({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }

            function S(e) {
                var t = {};
                try {
                    if (d(10)) {
                        t = e.getBoundingClientRect();
                        var n = g(e, "top"),
                            r = g(e, "left");
                        t.top += n, t.left += r, t.bottom += n, t.right += r
                    } else t = e.getBoundingClientRect()
                } catch (e) {}
                var i = {
                        left: t.left,
                        top: t.top,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    },
                    o = "HTML" === e.nodeName ? _(e.ownerDocument) : {},
                    a = o.width || e.clientWidth || i.width,
                    l = o.height || e.clientHeight || i.height,
                    u = e.offsetWidth - a,
                    c = e.offsetHeight - l;
                if (u || c) {
                    var f = s(e);
                    u -= y(f, "x"), c -= y(f, "y"), i.width -= u, i.height -= c
                }
                return C(i)
            }

            function k(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = d(10),
                    i = "HTML" === t.nodeName,
                    o = S(e),
                    a = S(t),
                    u = l(e),
                    c = s(t),
                    f = parseFloat(c.borderTopWidth),
                    h = parseFloat(c.borderLeftWidth);
                n && i && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                var p = C({
                    top: o.top - a.top - f,
                    left: o.left - a.left - h,
                    width: o.width,
                    height: o.height
                });
                if (p.marginTop = 0, p.marginLeft = 0, !r && i) {
                    var m = parseFloat(c.marginTop),
                        g = parseFloat(c.marginLeft);
                    p.top -= f - m, p.bottom -= f - m, p.left -= h - g, p.right -= h - g, p.marginTop = m, p.marginLeft = g
                }
                return (r && !n ? t.contains(u) : t === u && "BODY" !== u.nodeName) && (p = v(p, t)), p
            }

            function N(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.ownerDocument.documentElement,
                    r = k(e, n),
                    i = Math.max(n.clientWidth, window.innerWidth || 0),
                    o = Math.max(n.clientHeight, window.innerHeight || 0),
                    s = t ? 0 : g(n),
                    a = t ? 0 : g(n, "left"),
                    l = {
                        top: s - r.top + r.marginTop,
                        left: a - r.left + r.marginLeft,
                        width: i,
                        height: o
                    };
                return C(l)
            }

            function A(e) {
                var t = e.nodeName;
                if ("BODY" === t || "HTML" === t) return !1;
                if ("fixed" === s(e, "position")) return !0;
                var n = a(e);
                return !!n && A(n)
            }

            function D(e) {
                if (!e || !e.parentElement || d()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === s(t, "transform");) t = t.parentElement;
                return t || document.documentElement
            }

            function j(e, t, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = {
                        top: 0,
                        left: 0
                    },
                    s = i ? D(e) : m(e, u(t));
                if ("viewport" === r) o = N(s, i);
                else {
                    var c = void 0;
                    "scrollParent" === r ? "BODY" === (c = l(a(t))).nodeName && (c = e.ownerDocument.documentElement) : c = "window" === r ? e.ownerDocument.documentElement : r;
                    var f = k(c, s, i);
                    if ("HTML" !== c.nodeName || A(s)) o = f;
                    else {
                        var d = _(e.ownerDocument),
                            h = d.height,
                            p = d.width;
                        o.top += f.top - f.marginTop, o.bottom = h + f.top, o.left += f.left - f.marginLeft, o.right = p + f.left
                    }
                }
                var g = "number" == typeof(n = n || 0);
                return o.left += g ? n : n.left || 0, o.top += g ? n : n.top || 0, o.right -= g ? n : n.right || 0, o.bottom -= g ? n : n.bottom || 0, o
            }

            function O(e) {
                return e.width * e.height
            }

            function L(e, t, n, r, i) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var s = j(n, r, o, i),
                    a = {
                        top: {
                            width: s.width,
                            height: t.top - s.top
                        },
                        right: {
                            width: s.right - t.right,
                            height: s.height
                        },
                        bottom: {
                            width: s.width,
                            height: s.bottom - t.bottom
                        },
                        left: {
                            width: t.left - s.left,
                            height: s.height
                        }
                    },
                    l = Object.keys(a).map((function(e) {
                        return T({
                            key: e
                        }, a[e], {
                            area: O(a[e])
                        })
                    })).sort((function(e, t) {
                        return t.area - e.area
                    })),
                    u = l.filter((function(e) {
                        var t = e.width,
                            r = e.height;
                        return t >= n.clientWidth && r >= n.clientHeight
                    })),
                    c = u.length > 0 ? u[0].key : l[0].key,
                    f = e.split("-")[1];
                return c + (f ? "-" + f : "")
            }

            function I(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    i = r ? D(t) : m(t, u(n));
                return k(n, i, r)
            }

            function q(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e),
                    n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                    r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {
                    width: e.offsetWidth + r,
                    height: e.offsetHeight + n
                }
            }

            function P(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return t[e]
                }))
            }

            function R(e, t, n) {
                n = n.split("-")[0];
                var r = q(e),
                    i = {
                        width: r.width,
                        height: r.height
                    },
                    o = -1 !== ["right", "left"].indexOf(n),
                    s = o ? "top" : "left",
                    a = o ? "left" : "top",
                    l = o ? "height" : "width",
                    u = o ? "width" : "height";
                return i[s] = t[s] + t[l] / 2 - r[l] / 2, i[a] = n === a ? t[a] - r[u] : t[P(a)], i
            }

            function H(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function F(e, t, n) {
                return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex((function(e) {
                        return e[t] === n
                    }));
                    var r = H(e, (function(e) {
                        return e[t] === n
                    }));
                    return e.indexOf(r)
                }(e, "name", n))).forEach((function(e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && o(n) && (t.offsets.popper = C(t.offsets.popper), t.offsets.reference = C(t.offsets.reference), t = n(t, e))
                })), t
            }

            function M() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = I(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = L(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = R(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = F(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                }
            }

            function B(e, t) {
                return e.some((function(e) {
                    var n = e.name;
                    return e.enabled && n === t
                }))
            }

            function W(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                    var i = t[r],
                        o = i ? "" + i + n : e;
                    if (void 0 !== document.body.style[o]) return o
                }
                return null
            }

            function U() {
                return this.state.isDestroyed = !0, B(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[W("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }

            function $(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }

            function Q(e, t, n, r) {
                n.updateBound = r, $(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var i = l(e);
                return function e(t, n, r, i) {
                    var o = "BODY" === t.nodeName,
                        s = o ? t.ownerDocument.defaultView : t;
                    s.addEventListener(n, r, {
                        passive: !0
                    }), o || e(l(s.parentNode), n, r, i), i.push(s)
                }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
            }

            function z() {
                this.state.eventsEnabled || (this.state = Q(this.reference, this.options, this.state, this.scheduleUpdate))
            }

            function V() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, $(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
                    e.removeEventListener("scroll", t.updateBound)
                })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
            }

            function X(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function Y(e, t) {
                Object.keys(t).forEach((function(n) {
                    var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && X(t[n]) && (r = "px"), e.style[n] = t[n] + r
                }))
            }
            var K = n && /Firefox/i.test(navigator.userAgent);

            function G(e, t, n) {
                var r = H(e, (function(e) {
                        return e.name === t
                    })),
                    i = !!r && e.some((function(e) {
                        return e.name === n && e.enabled && e.order < r.order
                    }));
                if (!i) {
                    var o = "`" + t + "`",
                        s = "`" + n + "`";
                    console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                }
                return i
            }
            var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                Z = J.slice(3);

            function ee(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = Z.indexOf(e),
                    r = Z.slice(n + 1).concat(Z.slice(0, n));
                return t ? r.reverse() : r
            }
            var te = "flip",
                ne = "clockwise",
                re = "counterclockwise";

            function ie(e, t, n, r) {
                var i = [0, 0],
                    o = -1 !== ["right", "left"].indexOf(r),
                    s = e.split(/(\+|\-)/).map((function(e) {
                        return e.trim()
                    })),
                    a = s.indexOf(H(s, (function(e) {
                        return -1 !== e.search(/,|\s/)
                    })));
                s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    u = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                return (u = u.map((function(e, r) {
                    var i = (1 === r ? !o : o) ? "height" : "width",
                        s = !1;
                    return e.reduce((function(e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                    }), []).map((function(e) {
                        return function(e, t, n, r) {
                            var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                o = +i[1],
                                s = i[2];
                            if (!o) return e;
                            if (0 === s.indexOf("%")) {
                                var a = void 0;
                                switch (s) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = r
                                }
                                return C(a)[t] / 100 * o
                            }
                            if ("vh" === s || "vw" === s) {
                                return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
                            }
                            return o
                        }(e, i, t, n)
                    }))
                }))).forEach((function(e, t) {
                    e.forEach((function(n, r) {
                        X(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
                    }))
                })), i
            }
            var oe = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function() {},
                    onUpdate: function() {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    r = t.split("-")[1];
                                if (r) {
                                    var i = e.offsets,
                                        o = i.reference,
                                        s = i.popper,
                                        a = -1 !== ["bottom", "top"].indexOf(n),
                                        l = a ? "left" : "top",
                                        u = a ? "width" : "height",
                                        c = {
                                            start: E({}, l, o[l]),
                                            end: E({}, l, o[l] + o[u] - s[u])
                                        };
                                    e.offsets.popper = T({}, s, c[r])
                                }
                                return e
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.offset,
                                    r = e.placement,
                                    i = e.offsets,
                                    o = i.popper,
                                    s = i.reference,
                                    a = r.split("-")[0],
                                    l = void 0;
                                return l = X(+n) ? [+n, 0] : ie(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.boundariesElement || h(e.instance.popper);
                                e.instance.reference === n && (n = h(n));
                                var r = W("transform"),
                                    i = e.instance.popper.style,
                                    o = i.top,
                                    s = i.left,
                                    a = i[r];
                                i.top = "", i.left = "", i[r] = "";
                                var l = j(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                i.top = o, i.left = s, i[r] = a, t.boundaries = l;
                                var u = t.priority,
                                    c = e.offsets.popper,
                                    f = {
                                        primary: function(e) {
                                            var n = c[e];
                                            return c[e] < l[e] && !t.escapeWithReference && (n = Math.max(c[e], l[e])), E({}, e, n)
                                        },
                                        secondary: function(e) {
                                            var n = "right" === e ? "left" : "top",
                                                r = c[n];
                                            return c[e] > l[e] && !t.escapeWithReference && (r = Math.min(c[n], l[e] - ("right" === e ? c.width : c.height))), E({}, n, r)
                                        }
                                    };
                                return u.forEach((function(e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    c = T({}, c, f[t](e))
                                })), e.offsets.popper = c, e
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.offsets,
                                    n = t.popper,
                                    r = t.reference,
                                    i = e.placement.split("-")[0],
                                    o = Math.floor,
                                    s = -1 !== ["top", "bottom"].indexOf(i),
                                    a = s ? "right" : "bottom",
                                    l = s ? "left" : "top",
                                    u = s ? "width" : "height";
                                return n[a] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[u]), n[l] > o(r[a]) && (e.offsets.popper[l] = o(r[a])), e
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function(e, t) {
                                var n;
                                if (!G(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var r = t.element;
                                if ("string" == typeof r) {
                                    if (!(r = e.instance.popper.querySelector(r))) return e
                                } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var i = e.placement.split("-")[0],
                                    o = e.offsets,
                                    a = o.popper,
                                    l = o.reference,
                                    u = -1 !== ["left", "right"].indexOf(i),
                                    c = u ? "height" : "width",
                                    f = u ? "Top" : "Left",
                                    d = f.toLowerCase(),
                                    h = u ? "left" : "top",
                                    p = u ? "bottom" : "right",
                                    m = q(r)[c];
                                l[p] - m < a[d] && (e.offsets.popper[d] -= a[d] - (l[p] - m)), l[d] + m > a[p] && (e.offsets.popper[d] += l[d] + m - a[p]), e.offsets.popper = C(e.offsets.popper);
                                var g = l[d] + l[c] / 2 - m / 2,
                                    v = s(e.instance.popper),
                                    y = parseFloat(v["margin" + f]),
                                    b = parseFloat(v["border" + f + "Width"]),
                                    _ = g - e.offsets.popper[d] - y - b;
                                return _ = Math.max(Math.min(a[c] - m, _), 0), e.arrowElement = r, e.offsets.arrow = (E(n = {}, d, Math.round(_)), E(n, h, ""), n), e
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function(e, t) {
                                if (B(e.instance.modifiers, "inner")) return e;
                                if (e.flipped && e.placement === e.originalPlacement) return e;
                                var n = j(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                    r = e.placement.split("-")[0],
                                    i = P(r),
                                    o = e.placement.split("-")[1] || "",
                                    s = [];
                                switch (t.behavior) {
                                    case te:
                                        s = [r, i];
                                        break;
                                    case ne:
                                        s = ee(r);
                                        break;
                                    case re:
                                        s = ee(r, !0);
                                        break;
                                    default:
                                        s = t.behavior
                                }
                                return s.forEach((function(a, l) {
                                    if (r !== a || s.length === l + 1) return e;
                                    r = e.placement.split("-")[0], i = P(r);
                                    var u = e.offsets.popper,
                                        c = e.offsets.reference,
                                        f = Math.floor,
                                        d = "left" === r && f(u.right) > f(c.left) || "right" === r && f(u.left) < f(c.right) || "top" === r && f(u.bottom) > f(c.top) || "bottom" === r && f(u.top) < f(c.bottom),
                                        h = f(u.left) < f(n.left),
                                        p = f(u.right) > f(n.right),
                                        m = f(u.top) < f(n.top),
                                        g = f(u.bottom) > f(n.bottom),
                                        v = "left" === r && h || "right" === r && p || "top" === r && m || "bottom" === r && g,
                                        y = -1 !== ["top", "bottom"].indexOf(r),
                                        b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && m || !y && "end" === o && g),
                                        _ = !!t.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && g || !y && "end" === o && m),
                                        w = b || _;
                                    (d || v || w) && (e.flipped = !0, (d || v) && (r = s[l + 1]), w && (o = function(e) {
                                        return "end" === e ? "start" : "start" === e ? "end" : e
                                    }(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = T({}, e.offsets.popper, R(e.instance.popper, e.offsets.reference, e.placement)), e = F(e.instance.modifiers, e, "flip"))
                                })), e
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport",
                            flipVariations: !1,
                            flipVariationsByContent: !1
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    r = e.offsets,
                                    i = r.popper,
                                    o = r.reference,
                                    s = -1 !== ["left", "right"].indexOf(n),
                                    a = -1 === ["top", "left"].indexOf(n);
                                return i[s ? "left" : "top"] = o[n] - (a ? i[s ? "width" : "height"] : 0), e.placement = P(t), e.offsets.popper = C(i), e
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function(e) {
                                if (!G(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    n = H(e.instance.modifiers, (function(e) {
                                        return "preventOverflow" === e.name
                                    })).boundaries;
                                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.x,
                                    r = t.y,
                                    i = e.offsets.popper,
                                    o = H(e.instance.modifiers, (function(e) {
                                        return "applyStyle" === e.name
                                    })).gpuAcceleration;
                                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var s = void 0 !== o ? o : t.gpuAcceleration,
                                    a = h(e.instance.popper),
                                    l = S(a),
                                    u = {
                                        position: i.position
                                    },
                                    c = function(e, t) {
                                        var n = e.offsets,
                                            r = n.popper,
                                            i = n.reference,
                                            o = Math.round,
                                            s = Math.floor,
                                            a = function(e) {
                                                return e
                                            },
                                            l = o(i.width),
                                            u = o(r.width),
                                            c = -1 !== ["left", "right"].indexOf(e.placement),
                                            f = -1 !== e.placement.indexOf("-"),
                                            d = t ? c || f || l % 2 == u % 2 ? o : s : a,
                                            h = t ? o : a;
                                        return {
                                            left: d(l % 2 == 1 && u % 2 == 1 && !f && t ? r.left - 1 : r.left),
                                            top: h(r.top),
                                            bottom: h(r.bottom),
                                            right: d(r.right)
                                        }
                                    }(e, window.devicePixelRatio < 2 || !K),
                                    f = "bottom" === n ? "top" : "bottom",
                                    d = "right" === r ? "left" : "right",
                                    p = W("transform"),
                                    m = void 0,
                                    g = void 0;
                                if (g = "bottom" === f ? "HTML" === a.nodeName ? -a.clientHeight + c.bottom : -l.height + c.bottom : c.top, m = "right" === d ? "HTML" === a.nodeName ? -a.clientWidth + c.right : -l.width + c.right : c.left, s && p) u[p] = "translate3d(" + m + "px, " + g + "px, 0)", u[f] = 0, u[d] = 0, u.willChange = "transform";
                                else {
                                    var v = "bottom" === f ? -1 : 1,
                                        y = "right" === d ? -1 : 1;
                                    u[f] = g * v, u[d] = m * y, u.willChange = f + ", " + d
                                }
                                var b = {
                                    "x-placement": e.placement
                                };
                                return e.attributes = T({}, b, e.attributes), e.styles = T({}, u, e.styles), e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles), e
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function(e) {
                                var t, n;
                                return Y(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                })), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
                            },
                            onLoad: function(e, t, n, r, i) {
                                var o = I(i, t, e, n.positionFixed),
                                    s = L(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return t.setAttribute("x-placement", s), Y(t, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                se = function() {
                    function e(t, n) {
                        var r = this,
                            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        w(this, e), this.scheduleUpdate = function() {
                            return requestAnimationFrame(r.update)
                        }, this.update = i(this.update.bind(this)), this.options = T({}, e.Defaults, s), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(T({}, e.Defaults.modifiers, s.modifiers)).forEach((function(t) {
                            r.options.modifiers[t] = T({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
                        })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                            return T({
                                name: e
                            }, r.options.modifiers[e])
                        })).sort((function(e, t) {
                            return e.order - t.order
                        })), this.modifiers.forEach((function(e) {
                            e.enabled && o(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                        })), this.update();
                        var a = this.options.eventsEnabled;
                        a && this.enableEventListeners(), this.state.eventsEnabled = a
                    }
                    return x(e, [{
                        key: "update",
                        value: function() {
                            return M.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            return U.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function() {
                            return z.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function() {
                            return V.call(this)
                        }
                    }]), e
                }();
            se.Utils = ("undefined" != typeof window ? window : e).PopperUtils, se.placements = J, se.Defaults = oe, t.default = se
        }.call(this, n(31))
}, function(e, t, n) {
    var r;
    ! function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, (function(n, i) {
        "use strict";
        var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            l = o.flat ? function(e) {
                return o.flat.call(e)
            } : function(e) {
                return o.concat.apply([], e)
            },
            u = o.push,
            c = o.indexOf,
            f = {},
            d = f.toString,
            h = f.hasOwnProperty,
            p = h.toString,
            m = p.call(Object),
            g = {},
            v = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            y = function(e) {
                return null != e && e === e.window
            },
            b = n.document,
            _ = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function w(e, t, n) {
            var r, i, o = (n = n || b).createElement("script");
            if (o.text = e, t)
                for (r in _)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function x(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[d.call(e)] || "object" : typeof e
        }
        var E = function(e, t) {
            return new E.fn.init(e, t)
        };

        function T(e) {
            var t = !!e && "length" in e && e.length,
                n = x(e);
            return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        E.fn = E.prototype = {
            jquery: "3.5.1",
            constructor: E,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = E.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return E.each(this, e)
            },
            map: function(e) {
                return this.pushStack(E.map(this, (function(t, n) {
                    return e.call(t, n, t)
                })))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(E.grep(this, (function(e, t) {
                    return (t + 1) % 2
                })))
            },
            odd: function() {
                return this.pushStack(E.grep(this, (function(e, t) {
                    return t % 2
                })))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: o.sort,
            splice: o.splice
        }, E.extend = E.fn.extend = function() {
            var e, t, n, r, i, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e) r = e[t], "__proto__" !== t && s !== r && (u && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, s[t] = E.extend(u, o, r)) : void 0 !== r && (s[t] = r));
            return s
        }, E.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || "function" == typeof(n = h.call(t, "constructor") && t.constructor) && p.call(n) === m)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                w(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (T(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (T(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : c.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                    s = [];
                if (T(e))
                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return l(s)
            },
            guid: 1,
            support: g
        }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        }));
        var C = function(e) {
            var t, n, r, i, o, s, a, l, u, c, f, d, h, p, m, g, v, y, b, _ = "sizzle" + 1 * new Date,
                w = e.document,
                x = 0,
                E = 0,
                T = le(),
                C = le(),
                S = le(),
                k = le(),
                N = function(e, t) {
                    return e === t && (f = !0), 0
                },
                A = {}.hasOwnProperty,
                D = [],
                j = D.pop,
                O = D.push,
                L = D.push,
                I = D.slice,
                q = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                R = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                F = "\\[" + R + "*(" + H + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + R + "*\\]",
                M = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                B = new RegExp(R + "+", "g"),
                W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                U = new RegExp("^" + R + "*," + R + "*"),
                $ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                Q = new RegExp(R + "|>"),
                z = new RegExp(M),
                V = new RegExp("^" + H + "$"),
                X = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H + "|[*])"),
                    ATTR: new RegExp("^" + F),
                    PSEUDO: new RegExp("^" + M),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + P + ")$", "i"),
                    needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /HTML$/i,
                K = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
                ne = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ie = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                oe = function() {
                    d()
                },
                se = _e((function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                L.apply(D = I.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
            } catch (e) {
                L = {
                    apply: D.length ? function(e, t) {
                        O.apply(e, I.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function ae(e, t, r, i) {
                var o, a, u, c, f, p, v, y = t && t.ownerDocument,
                    w = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                if (!i && (d(t), t = t || h, m)) {
                    if (11 !== w && (f = Z.exec(e)))
                        if (o = f[1]) {
                            if (9 === w) {
                                if (!(u = t.getElementById(o))) return r;
                                if (u.id === o) return r.push(u), r
                            } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return r.push(u), r
                        } else {
                            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                        } if (n.qsa && !k[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                        if (v = e, y = t, 1 === w && (Q.test(e) || $.test(e))) {
                            for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = _)), a = (p = s(e)).length; a--;) p[a] = (c ? "#" + c : ":scope") + " " + be(p[a]);
                            v = p.join(",")
                        }
                        try {
                            return L.apply(r, y.querySelectorAll(v)), r
                        } catch (t) {
                            k(e, !0)
                        } finally {
                            c === _ && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(W, "$1"), t, r, i)
            }

            function le() {
                var e = [];
                return function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
            }

            function ue(e) {
                return e[_] = !0, e
            }

            function ce(e) {
                var t = h.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function fe(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
            }

            function de(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function he(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function pe(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function me(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ge(e) {
                return ue((function(t) {
                    return t = +t, ue((function(n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                    }))
                }))
            }

            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = ae.support = {}, o = ae.isXML = function(e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !Y.test(t || n && n.nodeName || "HTML")
                }, d = ae.setDocument = function(e) {
                    var t, i, s = e ? e.ownerDocument || e : w;
                    return s != h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, m = !o(h), w != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce((function(e) {
                        return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                    })), n.attributes = ce((function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    })), n.getElementsByTagName = ce((function(e) {
                        return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                    })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ce((function(e) {
                        return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
                    })), n.getById ? (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                    }, v = [], g = [], (n.qsa = J.test(h.querySelectorAll)) && (ce((function(e) {
                        var t;
                        p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                    })), ce((function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = h.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                    }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce((function(e) {
                        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M)
                    })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, N = t ? function(e, t) {
                        if (e === t) return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == h || e.ownerDocument == w && b(w, e) ? -1 : t == h || t.ownerDocument == w && b(w, t) ? 1 : c ? q(c, e) - q(c, t) : 0 : 4 & r ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            a = [t];
                        if (!i || !o) return e == h ? -1 : t == h ? 1 : i ? -1 : o ? 1 : c ? q(c, e) - q(c, t) : 0;
                        if (i === o) return de(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (; s[r] === a[r];) r++;
                        return r ? de(s[r], a[r]) : s[r] == w ? -1 : a[r] == w ? 1 : 0
                    }, h) : h
                }, ae.matches = function(e, t) {
                    return ae(e, null, null, t)
                }, ae.matchesSelector = function(e, t) {
                    if (d(e), n.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {
                        k(t, !0)
                    }
                    return ae(t, h, null, [e]).length > 0
                }, ae.contains = function(e, t) {
                    return (e.ownerDocument || e) != h && d(e), b(e, t)
                }, ae.attr = function(e, t) {
                    (e.ownerDocument || e) != h && d(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
                    return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }, ae.escape = function(e) {
                    return (e + "").replace(re, ie)
                }, ae.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, ae.uniqueSort = function(e) {
                    var t, r = [],
                        i = 0,
                        o = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
                        for (; t = e[o++];) t === e[o] && (i = r.push(o));
                        for (; i--;) e.splice(r[i], 1)
                    }
                    return c = null, e
                }, i = ae.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += i(t);
                    return n
                }, (r = ae.selectors = {
                    cacheLength: 50,
                    createPseudo: ue,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = T[e + " "];
                            return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && T(e, (function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            }))
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = ae.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var u, c, f, d, h, p, m = o !== s ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = a && t.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    b = !1;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            p = m = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                        for (b = (h = (u = (c = (f = (d = g)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (b = h = 0) || p.pop();)
                                            if (1 === d.nodeType && ++b && d === t) {
                                                c[e] = [x, h, b];
                                                break
                                            }
                                    } else if (y && (b = h = (u = (c = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === b)
                                        for (;
                                            (d = ++h && d && d[m] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [x, b]), d !== t)););
                                    return (b -= i) === r || b % r == 0 && b / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                            return i[_] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                                for (var r, o = i(e, t), s = o.length; s--;) e[r = q(e, o[s])] = !(n[r] = o[s])
                            })) : function(e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: ue((function(e) {
                            var t = [],
                                n = [],
                                r = a(e.replace(W, "$1"));
                            return r[_] ? ue((function(e, t, n, i) {
                                for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                            })) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        })),
                        has: ue((function(e) {
                            return function(t) {
                                return ae(e, t).length > 0
                            }
                        })),
                        contains: ue((function(e) {
                            return e = e.replace(te, ne),
                                function(t) {
                                    return (t.textContent || i(t)).indexOf(e) > -1
                                }
                        })),
                        lang: ue((function(e) {
                            return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        })),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === p
                        },
                        focus: function(e) {
                            return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: me(!1),
                        disabled: me(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return G.test(e.nodeName)
                        },
                        input: function(e) {
                            return K.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: ge((function() {
                            return [0]
                        })),
                        last: ge((function(e, t) {
                            return [t - 1]
                        })),
                        eq: ge((function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        })),
                        even: ge((function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        })),
                        odd: ge((function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        })),
                        lt: ge((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                            return e
                        })),
                        gt: ge((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        }))
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = he(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = pe(t);

            function ye() {}

            function be(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function _e(e, t, n) {
                var r = t.dir,
                    i = t.next,
                    o = i || r,
                    s = n && "parentNode" === o,
                    a = E++;
                return t.first ? function(t, n, i) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || s) return e(t, n, i);
                    return !1
                } : function(t, n, l) {
                    var u, c, f, d = [x, a];
                    if (l) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || s)
                                if (c = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                else {
                                    if ((u = c[o]) && u[0] === x && u[1] === a) return d[2] = u[2];
                                    if (c[o] = d, d[2] = e(t, n, l)) return !0
                                } return !1
                }
            }

            function we(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function xe(e, t, n, r, i) {
                for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), u && t.push(a)));
                return s
            }

            function Ee(e, t, n, r, i, o) {
                return r && !r[_] && (r = Ee(r)), i && !i[_] && (i = Ee(i, o)), ue((function(o, s, a, l) {
                    var u, c, f, d = [],
                        h = [],
                        p = s.length,
                        m = o || function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                            return n
                        }(t || "*", a.nodeType ? [a] : a, []),
                        g = !e || !o && t ? m : xe(m, d, e, a, l),
                        v = n ? i || (o ? e : p || r) ? [] : s : g;
                    if (n && n(g, v, a, l), r)
                        for (u = xe(v, h), r(u, [], a, l), c = u.length; c--;)(f = u[c]) && (v[h[c]] = !(g[h[c]] = f));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (u = [], c = v.length; c--;)(f = v[c]) && u.push(g[c] = f);
                                i(null, v = [], u, l)
                            }
                            for (c = v.length; c--;)(f = v[c]) && (u = i ? q(o, f) : d[c]) > -1 && (o[u] = !(s[u] = f))
                        }
                    } else v = xe(v === s ? v.splice(p, v.length) : v), i ? i(null, s, v, l) : L.apply(s, v)
                }))
            }

            function Te(e) {
                for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], l = s ? 1 : 0, c = _e((function(e) {
                        return e === t
                    }), a, !0), f = _e((function(e) {
                        return q(t, e) > -1
                    }), a, !0), d = [function(e, n, r) {
                        var i = !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return t = null, i
                    }]; l < o; l++)
                    if (n = r.relative[e[l].type]) d = [_e(we(d), n)];
                    else {
                        if ((n = r.filter[e[l].type].apply(null, e[l].matches))[_]) {
                            for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                            return Ee(l > 1 && we(d), l > 1 && be(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(W, "$1"), n, l < i && Te(e.slice(l, i)), i < o && Te(e = e.slice(i)), i < o && be(e))
                        }
                        d.push(n)
                    } return we(d)
            }
            return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, s = ae.tokenize = function(e, t) {
                var n, i, o, s, a, l, u, c = C[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (a = e, l = [], u = r.preFilter; a;) {
                    for (s in n && !(i = U.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = $.exec(a)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(W, " ")
                        }), a = a.slice(n.length)), r.filter) !(i = X[s].exec(a)) || u[s] && !(i = u[s](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: s,
                        matches: i
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
            }, a = ae.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    a = S[e + " "];
                if (!a) {
                    for (t || (t = s(e)), n = t.length; n--;)(a = Te(t[n]))[_] ? i.push(a) : o.push(a);
                    (a = S(e, function(e, t) {
                        var n = t.length > 0,
                            i = e.length > 0,
                            o = function(o, s, a, l, c) {
                                var f, p, g, v = 0,
                                    y = "0",
                                    b = o && [],
                                    _ = [],
                                    w = u,
                                    E = o || i && r.find.TAG("*", c),
                                    T = x += null == w ? 1 : Math.random() || .1,
                                    C = E.length;
                                for (c && (u = s == h || s || c); y !== C && null != (f = E[y]); y++) {
                                    if (i && f) {
                                        for (p = 0, s || f.ownerDocument == h || (d(f), a = !m); g = e[p++];)
                                            if (g(f, s || h, a)) {
                                                l.push(f);
                                                break
                                            } c && (x = T)
                                    }
                                    n && ((f = !g && f) && v--, o && b.push(f))
                                }
                                if (v += y, n && y !== v) {
                                    for (p = 0; g = t[p++];) g(b, _, s, a);
                                    if (o) {
                                        if (v > 0)
                                            for (; y--;) b[y] || _[y] || (_[y] = j.call(l));
                                        _ = xe(_)
                                    }
                                    L.apply(l, _), c && !o && _.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                }
                                return c && (x = T, u = w), b
                            };
                        return n ? ue(o) : o
                    }(o, i))).selector = e
                }
                return a
            }, l = ae.select = function(e, t, n, i) {
                var o, l, u, c, f, d = "function" == typeof e && e,
                    h = !i && s(e = d.selector || e);
                if (n = n || [], 1 === h.length) {
                    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && m && r.relative[l[1].type]) {
                        if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                        d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                    }
                    for (o = X.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !r.relative[c = u.type]);)
                        if ((f = r.find[c]) && (i = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                            if (l.splice(o, 1), !(e = i.length && be(l))) return L.apply(n, i), n;
                            break
                        }
                }
                return (d || a(e, h))(i, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
            }, n.sortStable = _.split("").sort(N).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = ce((function(e) {
                return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
            })), ce((function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            })) || fe("type|href|height|width", (function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            })), n.attributes && ce((function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            })) || fe("value", (function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            })), ce((function(e) {
                return null == e.getAttribute("disabled")
            })) || fe(P, (function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            })), ae
        }(n);
        E.find = C, E.expr = C.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = C.uniqueSort, E.text = C.getText, E.isXMLDoc = C.isXML, E.contains = C.contains, E.escapeSelector = C.escape;
        var S = function(e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && E(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            k = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            N = E.expr.match.needsContext;

        function A(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function j(e, t, n) {
            return v(t) ? E.grep(e, (function(e, r) {
                return !!t.call(e, r, e) !== n
            })) : t.nodeType ? E.grep(e, (function(e) {
                return e === t !== n
            })) : "string" != typeof t ? E.grep(e, (function(e) {
                return c.call(t, e) > -1 !== n
            })) : E.filter(t, e, n)
        }
        E.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, (function(e) {
                return 1 === e.nodeType
            })))
        }, E.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(E(e).filter((function() {
                    for (t = 0; t < r; t++)
                        if (E.contains(i[t], this)) return !0
                })));
                for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
                return r > 1 ? E.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(j(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(j(this, e || [], !0))
            },
            is: function(e) {
                return !!j(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length
            }
        });
        var O, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (E.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || O, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), D.test(r[1]) && E.isPlainObject(t))
                        for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = b.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
        }).prototype = E.fn, O = E(b);
        var I = /^(?:parents|prev(?:Until|All))/,
            q = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function P(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        E.fn.extend({
            has: function(e) {
                var t = E(e, this),
                    n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (E.contains(this, t[e])) return !0
                }))
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    s = "string" != typeof e && E(e);
                if (!N.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            } return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? c.call(E(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), E.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return S(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return S(e, "parentNode", n)
            },
            next: function(e) {
                return P(e, "nextSibling")
            },
            prev: function(e) {
                return P(e, "previousSibling")
            },
            nextAll: function(e) {
                return S(e, "nextSibling")
            },
            prevAll: function(e) {
                return S(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return S(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return S(e, "previousSibling", n)
            },
            siblings: function(e) {
                return k((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return k(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
            }
        }, (function(e, t) {
            E.fn[e] = function(n, r) {
                var i = E.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = E.filter(r, i)), this.length > 1 && (q[e] || E.uniqueSort(i), I.test(e) && i.reverse()), this.pushStack(i)
            }
        }));
        var R = /[^\x20\t\r\n\f]+/g;

        function H(e) {
            return e
        }

        function F(e) {
            throw e
        }

        function M(e, t, n, r) {
            var i;
            try {
                e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        E.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return E.each(e.match(R) || [], (function(e, n) {
                    t[n] = !0
                })), t
            }(e) : E.extend({}, e);
            var t, n, r, i, o = [],
                s = [],
                a = -1,
                l = function() {
                    for (i = i || e.once, r = t = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                },
                u = {
                    add: function() {
                        return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                            E.each(n, (function(n, r) {
                                v(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                            }))
                        }(arguments), n && !t && l()), this
                    },
                    remove: function() {
                        return E.each(arguments, (function(e, t) {
                            for (var n;
                                (n = E.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                        })), this
                    },
                    has: function(e) {
                        return e ? E.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return i = s = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return i = s = [], n || t || (o = n = ""), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return u
        }, E.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                        ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    i = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return i.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return E.Deferred((function(n) {
                                E.each(t, (function(t, r) {
                                    var i = v(e[r[4]]) && e[r[4]];
                                    o[r[1]]((function() {
                                        var e = i && i.apply(this, arguments);
                                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        then: function(e, r, i) {
                            var o = 0;

                            function s(e, t, r, i) {
                                return function() {
                                    var a = this,
                                        l = arguments,
                                        u = function() {
                                            var n, u;
                                            if (!(e < o)) {
                                                if ((n = r.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, v(u) ? i ? u.call(n, s(o, t, H, i), s(o, t, F, i)) : (o++, u.call(n, s(o, t, H, i), s(o, t, F, i), s(o, t, H, t.notifyWith))) : (r !== H && (a = void 0, l = [n]), (i || t.resolveWith)(a, l))
                                            }
                                        },
                                        c = i ? u : function() {
                                            try {
                                                u()
                                            } catch (n) {
                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== F && (a = void 0, l = [n]), t.rejectWith(a, l))
                                            }
                                        };
                                    e ? c() : (E.Deferred.getStackHook && (c.stackTrace = E.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            return E.Deferred((function(n) {
                                t[0][3].add(s(0, n, v(i) ? i : H, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : H)), t[2][3].add(s(0, n, v(r) ? r : F))
                            })).promise()
                        },
                        promise: function(e) {
                            return null != e ? E.extend(e, i) : i
                        }
                    },
                    o = {};
                return E.each(t, (function(e, n) {
                    var s = n[2],
                        a = n[5];
                    i[n[1]] = s.add, a && s.add((function() {
                        r = a
                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), o[n[0]] = function() {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = s.fireWith
                })), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = a.call(arguments),
                    o = E.Deferred(),
                    s = function(e) {
                        return function(n) {
                            r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(r, i)
                        }
                    };
                if (t <= 1 && (M(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
                for (; n--;) M(i[n], s(n), o.reject);
                return o.promise()
            }
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        E.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, E.readyException = function(e) {
            n.setTimeout((function() {
                throw e
            }))
        };
        var W = E.Deferred();

        function U() {
            b.removeEventListener("DOMContentLoaded", U), n.removeEventListener("load", U), E.ready()
        }
        E.fn.ready = function(e) {
            return W.then(e).catch((function(e) {
                E.readyException(e)
            })), this
        }, E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || W.resolveWith(b, [E]))
            }
        }), E.ready.then = W.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", U), n.addEventListener("load", U));
        var $ = function(e, t, n, r, i, o, s) {
                var a = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === x(n))
                    for (a in i = !0, n) $(e, t, a, n[a], !0, o, s);
                else if (void 0 !== r && (i = !0, v(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(E(e), n)
                    })), t))
                    for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
            },
            Q = /^-ms-/,
            z = /-([a-z])/g;

        function V(e, t) {
            return t.toUpperCase()
        }

        function X(e) {
            return e.replace(Q, "ms-").replace(z, V)
        }
        var Y = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function K() {
            this.expando = E.expando + K.uid++
        }
        K.uid = 1, K.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else
                    for (r in t) i[X(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(R) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t)
            }
        };
        var G = new K,
            J = new K,
            Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ee = /[A-Z]/g;

        function te(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    J.set(e, t, n)
                } else n = void 0;
            return n
        }
        E.extend({
            hasData: function(e) {
                return J.hasData(e) || G.hasData(e)
            },
            data: function(e, t, n) {
                return J.access(e, t, n)
            },
            removeData: function(e, t) {
                J.remove(e, t)
            },
            _data: function(e, t, n) {
                return G.access(e, t, n)
            },
            _removeData: function(e, t) {
                G.remove(e, t)
            }
        }), E.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = J.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = X(r.slice(5)), te(o, r, i[r]));
                        G.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each((function() {
                    J.set(this, e)
                })) : $(this, (function(t) {
                    var n;
                    if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
                    this.each((function() {
                        J.set(this, e, t)
                    }))
                }), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    J.remove(this, e)
                }))
            }
        }), E.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, E.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = E._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                    E.dequeue(e, t)
                }), o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return G.get(e, n) || G.access(e, n, {
                    empty: E.Callbacks("once memory").add((function() {
                        G.remove(e, [t + "queue", n])
                    }))
                })
            }
        }), E.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = E.queue(this, e, t);
                    E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                }))
            },
            dequeue: function(e) {
                return this.each((function() {
                    E.dequeue(this, e)
                }))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = E.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = G.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                return a(), i.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            oe = b.documentElement,
            se = function(e) {
                return E.contains(e.ownerDocument, e)
            },
            ae = {
                composed: !0
            };
        oe.getRootNode && (se = function(e) {
            return E.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
        });
        var le = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === E.css(e, "display")
        };

        function ue(e, t, n, r) {
            var i, o, s = 20,
                a = r ? function() {
                    return r.cur()
                } : function() {
                    return E.css(e, t, "")
                },
                l = a(),
                u = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                c = e.nodeType && (E.cssNumber[t] || "px" !== u && +l) && re.exec(E.css(e, t));
            if (c && c[3] !== u) {
                for (l /= 2, u = u || c[3], c = +l || 1; s--;) E.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
                c *= 2, E.style(e, t, c + u), n = n || []
            }
            return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
        }
        var ce = {};

        function fe(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = ce[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = E.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i)
        }

        function de(e, t) {
            for (var n, r, i = [], o = 0, s = e.length; o < s; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = G.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && le(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", G.set(r, "display", n)));
            for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
            return e
        }
        E.fn.extend({
            show: function() {
                return de(this, !0)
            },
            hide: function() {
                return de(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    le(this) ? E(this).show() : E(this).hide()
                }))
            }
        });
        var he, pe, me = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i;
        he = b.createDocumentFragment().appendChild(b.createElement("div")), (pe = b.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), he.appendChild(pe), g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", g.option = !!he.lastChild;
        var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function be(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? E.merge([e], n) : n
        }

        function _e(e, t) {
            for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
        }
        ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
        var we = /<|&#?\w+;/;

        function xe(e, t, n, r, i) {
            for (var o, s, a, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === x(o)) E.merge(d, o.nodeType ? [o] : o);
                    else if (we.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), a = (ge.exec(o) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + E.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
                E.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (f.textContent = "", h = 0; o = d[h++];)
                if (r && E.inArray(o, r) > -1) i && i.push(o);
                else if (u = se(o), s = be(f.appendChild(o), "script"), u && _e(s), n)
                for (c = 0; o = s[c++];) ve.test(o.type || "") && n.push(o);
            return f
        }
        var Ee = /^key/,
            Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ce = /^([^.]*)(?:\.(.+)|)/;

        function Se() {
            return !0
        }

        function ke() {
            return !1
        }

        function Ne(e, t) {
            return e === function() {
                try {
                    return b.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function Ae(e, t, n, r, i, o) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, a, n, r, t[a], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
            else if (!i) return e;
            return 1 === o && (s = i, (i = function(e) {
                return E().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = E.guid++)), e.each((function() {
                E.event.add(this, t, i, r, n)
            }))
        }

        function De(e, t, n) {
            n ? (G.set(e, t, !1), E.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, i, o = G.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (o.length)(E.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (o = a.call(arguments), G.set(this, t, o), r = n(this, t), this[t](), o !== (i = G.get(this, t)) || r ? G.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                    } else o.length && (G.set(this, t, {
                        value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === G.get(e, t) && E.event.add(e, t, Se)
        }
        E.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, s, a, l, u, c, f, d, h, p, m, g = G.get(e);
                if (Y(e))
                    for (n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(oe, i), n.guid || (n.guid = E.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function(t) {
                            return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                        }), u = (t = (t || "").match(R) || [""]).length; u--;) h = m = (a = Ce.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = E.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = E.event.special[h] || {}, c = E.extend({
                        type: h,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), E.event.global[h] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, s, a, l, u, c, f, d, h, p, m, g = G.hasData(e) && G.get(e);
                if (g && (l = g.events)) {
                    for (u = (t = (t || "").match(R) || [""]).length; u--;)
                        if (h = m = (a = Ce.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                            for (f = E.event.special[h] || {}, d = l[h = (r ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                            s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || E.removeEvent(e, h, g.handle), delete l[h])
                        } else
                            for (h in l) E.event.remove(e, h + t[u], n, r, !0);
                    E.isEmptyObject(l) && G.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, s, a = new Array(arguments.length),
                    l = E.event.fix(e),
                    u = (G.get(this, "events") || Object.create(null))[l.type] || [],
                    c = E.event.special[l.type] || {};
                for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                    for (s = E.event.handlers.call(this, l, u), t = 0;
                        (i = s[t++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, l), l.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, s, a = [],
                    l = t.delegateCount,
                    u = e.target;
                if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? E(i, this).index(u) > -1 : E.find(i, this, null, [u]).length), s[i] && o.push(r);
                            o.length && a.push({
                                elem: u,
                                handlers: o
                            })
                        } return u = this, l < t.length && a.push({
                    elem: u,
                    handlers: t.slice(l)
                }), a
            },
            addProp: function(e, t) {
                Object.defineProperty(E.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: v(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[E.expando] ? e : new E.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && A(t, "input") && De(t, "click", Se), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return me.test(t.type) && t.click && A(t, "input") && G.get(t, "click") || A(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, E.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, E.Event = function(e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
        }, E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, E.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, E.event.addProp), E.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            E.event.special[e] = {
                setup: function() {
                    return De(this, e, Ne), !1
                },
                trigger: function() {
                    return De(this, e), !0
                },
                delegateType: t
            }
        })), E.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            E.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === r || E.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), E.fn.extend({
            on: function(e, t, n, r) {
                return Ae(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Ae(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each((function() {
                    E.event.remove(this, e, n, t)
                }))
            }
        });
        var je = /<script|<style|<link/i,
            Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ie(e, t) {
            return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
        }

        function qe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Pe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Re(e, t) {
            var n, r, i, o, s, a;
            if (1 === t.nodeType) {
                if (G.hasData(e) && (a = G.get(e).events))
                    for (i in G.remove(t, "handle events"), a)
                        for (n = 0, r = a[i].length; n < r; n++) E.event.add(t, i, a[i][n]);
                J.hasData(e) && (o = J.access(e), s = E.extend({}, o), J.set(t, s))
            }
        }

        function He(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function Fe(e, t, n, r) {
            t = l(t);
            var i, o, s, a, u, c, f = 0,
                d = e.length,
                h = d - 1,
                p = t[0],
                m = v(p);
            if (m || d > 1 && "string" == typeof p && !g.checkClone && Oe.test(p)) return e.each((function(i) {
                var o = e.eq(i);
                m && (t[0] = p.call(this, i, o.html())), Fe(o, t, n, r)
            }));
            if (d && (o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (a = (s = E.map(be(i, "script"), qe)).length; f < d; f++) u = i, f !== h && (u = E.clone(u, !0, !0), a && E.merge(s, be(u, "script"))), n.call(e[f], u, f);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, E.map(s, Pe), f = 0; f < a; f++) u = s[f], ve.test(u.type || "") && !G.access(u, "globalEval") && E.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, c) : w(u.textContent.replace(Le, ""), u, c))
            }
            return e
        }

        function Me(e, t, n) {
            for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(be(r)), r.parentNode && (n && se(r) && _e(be(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        E.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, i, o, s, a = e.cloneNode(!0),
                    l = se(e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                    for (s = be(a), r = 0, i = (o = be(e)).length; r < i; r++) He(o[r], s[r]);
                if (t)
                    if (n)
                        for (o = o || be(e), s = s || be(a), r = 0, i = o.length; r < i; r++) Re(o[r], s[r]);
                    else Re(e, a);
                return (s = be(a, "script")).length > 0 && _e(s, !l && be(e, "script")), a
            },
            cleanData: function(e) {
                for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (Y(n)) {
                        if (t = n[G.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                            n[G.expando] = void 0
                        }
                        n[J.expando] && (n[J.expando] = void 0)
                    }
            }
        }), E.fn.extend({
            detach: function(e) {
                return Me(this, e, !0)
            },
            remove: function(e) {
                return Me(this, e)
            },
            text: function(e) {
                return $(this, (function(e) {
                    return void 0 === e ? E.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }))
                }), null, e, arguments.length)
            },
            append: function() {
                return Fe(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e)
                }))
            },
            prepend: function() {
                return Fe(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Ie(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            },
            before: function() {
                return Fe(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }))
            },
            after: function() {
                return Fe(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }))
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(be(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function() {
                    return E.clone(this, e, t)
                }))
            },
            html: function(e) {
                return $(this, (function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !je.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = E.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(be(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Fe(this, arguments, (function(t) {
                    var n = this.parentNode;
                    E.inArray(this, e) < 0 && (E.cleanData(be(this)), n && n.replaceChild(t, this))
                }), e)
            }
        }), E.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            E.fn[e] = function(e) {
                for (var n, r = [], i = E(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), E(i[s])[t](n), u.apply(r, n.get());
                return this.pushStack(r)
            }
        }));
        var Be = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            We = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            Ue = function(e, t, n) {
                var r, i, o = {};
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                for (i in r = n.call(e), t) e.style[i] = o[i];
                return r
            },
            $e = new RegExp(ie.join("|"), "i");

        function Qe(e, t, n) {
            var r, i, o, s, a = e.style;
            return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = E.style(e, t)), !g.pixelBoxStyles() && Be.test(s) && $e.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function ze(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(u).appendChild(c);
                    var e = n.getComputedStyle(c);
                    r = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), oe.removeChild(u), c = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, i, o, s, a, l, u = b.createElement("div"),
                c = b.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, E.extend(g, {
                boxSizingReliable: function() {
                    return e(), i
                },
                pixelBoxStyles: function() {
                    return e(), s
                },
                pixelPosition: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), l
                },
                scrollboxSize: function() {
                    return e(), o
                },
                reliableTrDimensions: function() {
                    var e, t, r, i;
                    return null == a && (e = b.createElement("table"), t = b.createElement("tr"), r = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", r.style.height = "9px", oe.appendChild(e).appendChild(t).appendChild(r), i = n.getComputedStyle(t), a = parseInt(i.height) > 3, oe.removeChild(e)), a
                }
            }))
        }();
        var Ve = ["Webkit", "Moz", "ms"],
            Xe = b.createElement("div").style,
            Ye = {};

        function Ke(e) {
            var t = E.cssProps[e] || Ye[e];
            return t || (e in Xe ? e : Ye[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                    if ((e = Ve[n] + t) in Xe) return e
            }(e) || e)
        }
        var Ge = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            Ze = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            et = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function tt(e, t, n) {
            var r = re.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function nt(e, t, n, r, i, o) {
            var s = "width" === t ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += E.css(e, n + ie[s], !0, i)), r ? ("content" === n && (l -= E.css(e, "padding" + ie[s], !0, i)), "margin" !== n && (l -= E.css(e, "border" + ie[s] + "Width", !0, i))) : (l += E.css(e, "padding" + ie[s], !0, i), "padding" !== n ? l += E.css(e, "border" + ie[s] + "Width", !0, i) : a += E.css(e, "border" + ie[s] + "Width", !0, i));
            return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
        }

        function rt(e, t, n) {
            var r = We(e),
                i = (!g.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
                o = i,
                s = Qe(e, t, r),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Be.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + nt(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
        }

        function it(e, t, n, r, i) {
            return new it.prototype.init(e, t, n, r, i)
        }
        E.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Qe(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, s, a = X(t),
                        l = Je.test(t),
                        u = e.style;
                    if (l || (t = Ke(a)), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
                    "string" === (o = typeof n) && (i = re.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (E.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, o, s, a = X(t);
                return Je.test(t) || (t = Ke(a)), (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Qe(e, t, r)), "normal" === i && t in et && (i = et[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), E.each(["height", "width"], (function(e, t) {
            E.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, r) : Ue(e, Ze, (function() {
                        return rt(e, t, r)
                    }))
                },
                set: function(e, n, r) {
                    var i, o = We(e),
                        s = !g.scrollboxSize() && "absolute" === o.position,
                        a = (s || r) && "border-box" === E.css(e, "boxSizing", !1, o),
                        l = r ? nt(e, t, r, a, o) : 0;
                    return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - nt(e, t, "border", !1, o) - .5)), l && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = E.css(e, t)), tt(0, n, l)
                }
            }
        })), E.cssHooks.marginLeft = ze(g.reliableMarginLeft, (function(e, t) {
            if (t) return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }))) + "px"
        })), E.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            E.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, "margin" !== e && (E.cssHooks[e + t].set = tt)
        })), E.fn.extend({
            css: function(e, t) {
                return $(this, (function(e, t, n) {
                    var r, i, o = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (r = We(e), i = t.length; s < i; s++) o[t[s]] = E.css(e, t[s], !1, r);
                        return o
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), E.Tween = it, it.prototype = {
            constructor: it,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = it.propHooks[this.prop];
                return e && e.get ? e.get(this) : it.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = it.propHooks[this.prop];
                return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : it.propHooks._default.set(this), this
            }
        }, it.prototype.init.prototype = it.prototype, it.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, it.propHooks.scrollTop = it.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, E.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, E.fx = it.prototype.init, E.fx.step = {};
        var ot, st, at = /^(?:toggle|show|hide)$/,
            lt = /queueHooks$/;

        function ut() {
            st && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ut) : n.setTimeout(ut, E.fx.interval), E.fx.tick())
        }

        function ct() {
            return n.setTimeout((function() {
                ot = void 0
            })), ot = Date.now()
        }

        function ft(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ie[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function dt(e, t, n) {
            for (var r, i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, s = i.length; o < s; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function ht(e, t, n) {
            var r, i, o = 0,
                s = ht.prefilters.length,
                a = E.Deferred().always((function() {
                    delete l.elem
                })),
                l = function() {
                    if (i) return !1;
                    for (var t = ot || ct(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(r);
                    return a.notifyWith(e, [u, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
                },
                u = a.promise({
                    elem: e,
                    props: E.extend({}, t),
                    opts: E.extend(!0, {
                        specialEasing: {},
                        easing: E.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ot || ct(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = E.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? u.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) u.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (! function(e, t) {
                    var n, r, i, o, s;
                    for (n in e)
                        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = E.cssHooks[r]) && "expand" in s)
                            for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                        else t[r] = i
                }(c, u.opts.specialEasing); o < s; o++)
                if (r = ht.prefilters[o].call(u, e, c, u.opts)) return v(r.stop) && (E._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
            return E.map(c, dt, u), v(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), E.fx.timer(E.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u
        }
        E.Animation = E.extend(ht, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ue(n.elem, e, re.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    v(e) ? (t = e, e = ["*"]) : e = e.match(R);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, i, o, s, a, l, u, c, f = "width" in t || "height" in t,
                        d = this,
                        h = {},
                        p = e.style,
                        m = e.nodeType && le(e),
                        g = G.get(e, "fxshow");
                    for (r in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                            s.unqueued || a()
                        }), s.unqueued++, d.always((function() {
                            d.always((function() {
                                s.unqueued--, E.queue(e, "fx").length || s.empty.fire()
                            }))
                        }))), t)
                        if (i = t[r], at.test(i)) {
                            if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                                if ("show" !== i || !g || void 0 === g[r]) continue;
                                m = !0
                            }
                            h[r] = g && g[r] || E.style(e, r)
                        } if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
                        for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = G.get(e, "display")), "none" === (c = E.css(e, "display")) && (u ? c = u : (de([e], !0), u = e.style.display || u, c = E.css(e, "display"), de([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === E.css(e, "float") && (l || (d.done((function() {
                                p.display = u
                            })), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function() {
                                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                            }))), l = !1, h) l || (g ? "hidden" in g && (m = g.hidden) : g = G.access(e, "fxshow", {
                            display: u
                        }), o && (g.hidden = !m), m && de([e], !0), d.done((function() {
                            for (r in m || de([e]), G.remove(e, "fxshow"), h) E.style(e, r, h[r])
                        }))), l = dt(m ? g[r] : 0, r, d), r in g || (g[r] = l.start, m && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
                }
            }), E.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? E.extend({}, e) : {
                    complete: n || !n && t || v(e) && e,
                    duration: e,
                    easing: n && t || t && !v(t) && t
                };
                return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    v(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
                }, r
            }, E.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(le).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = E.isEmptyObject(e),
                        o = E.speed(t, n, r),
                        s = function() {
                            var t = ht(this, E.extend({}, e), o);
                            (i || G.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = E.timers,
                            s = G.get(this);
                        if (i) s[i] && s[i].stop && r(s[i]);
                        else
                            for (i in s) s[i] && s[i].stop && lt.test(i) && r(s[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || E.dequeue(this, e)
                    }))
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = G.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = E.timers,
                            s = r ? r.length : 0;
                        for (n.finish = !0, E.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    }))
                }
            }), E.each(["toggle", "show", "hide"], (function(e, t) {
                var n = E.fn[t];
                E.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, r, i)
                }
            })), E.each({
                slideDown: ft("show"),
                slideUp: ft("hide"),
                slideToggle: ft("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                E.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            })), E.timers = [], E.fx.tick = function() {
                var e, t = 0,
                    n = E.timers;
                for (ot = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || E.fx.stop(), ot = void 0
            }, E.fx.timer = function(e) {
                E.timers.push(e), E.fx.start()
            }, E.fx.interval = 13, E.fx.start = function() {
                st || (st = !0, ut())
            }, E.fx.stop = function() {
                st = null
            }, E.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, E.fn.delay = function(e, t) {
                return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i)
                    }
                }))
            },
            function() {
                var e = b.createElement("input"),
                    t = b.createElement("select").appendChild(b.createElement("option"));
                e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
            }();
        var pt, mt = E.expr.attrHandle;
        E.fn.extend({
            attr: function(e, t) {
                return $(this, E.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    E.removeAttr(this, e)
                }))
            }
        }), E.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(R);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];) e.removeAttribute(n)
            }
        }), pt = {
            set: function(e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, E.each(E.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = mt[t] || E.find.attr;
            mt[t] = function(e, t, r) {
                var i, o, s = t.toLowerCase();
                return r || (o = mt[s], mt[s] = i, i = null != n(e, t, r) ? s : null, mt[s] = o), i
            }
        }));
        var gt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;

        function yt(e) {
            return (e.match(R) || []).join(" ")
        }

        function bt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function _t(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
        }
        E.fn.extend({
            prop: function(e, t) {
                return $(this, E.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[E.propFix[e] || e]
                }))
            }
        }), E.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), g.optSelected || (E.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            E.propFix[this.toLowerCase()] = this
        })), E.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, s, a, l = 0;
                if (v(e)) return this.each((function(t) {
                    E(this).addClass(e.call(this, t, bt(this)))
                }));
                if ((t = _t(e)).length)
                    for (; n = this[l++];)
                        if (i = bt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                            for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (a = yt(r)) && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, s, a, l = 0;
                if (v(e)) return this.each((function(t) {
                    E(this).removeClass(e.call(this, t, bt(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = _t(e)).length)
                    for (; n = this[l++];)
                        if (i = bt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                            for (s = 0; o = t[s++];)
                                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                            i !== (a = yt(r)) && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
                    E(this).toggleClass(e.call(this, n, bt(this), t), t)
                })) : this.each((function() {
                    var t, i, o, s;
                    if (r)
                        for (i = 0, o = E(this), s = _t(e); t = s[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = bt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var wt = /\r/g;
        E.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = v(e), this.each((function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, E(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = E.map(i, (function(e) {
                        return null == e ? "" : e + ""
                    }))), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                }))) : i ? (t = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
            }
        }), E.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = E.find.attr(e, "value");
                        return null != t ? t : yt(E.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            o = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            l = s ? o + 1 : i.length;
                        for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (t = E(n).val(), s) return t;
                                a.push(t)
                            } return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = E.makeArray(t), s = i.length; s--;)((r = i[s]).selected = E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), E.each(["radio", "checkbox"], (function() {
            E.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1
                }
            }, g.checkOn || (E.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        })), g.focusin = "onfocusin" in n;
        var xt = /^(?:focusinfocus|focusoutblur)$/,
            Et = function(e) {
                e.stopPropagation()
            };
        E.extend(E.event, {
            trigger: function(e, t, r, i) {
                var o, s, a, l, u, c, f, d, p = [r || b],
                    m = h.call(e, "type") ? e.type : e,
                    g = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = d = a = r = r || b, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(m + E.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), u = m.indexOf(":") < 0 && "on" + m, (e = e[E.expando] ? e : new E.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : E.makeArray(t, [e]), f = E.event.special[m] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                    if (!i && !f.noBubble && !y(r)) {
                        for (l = f.delegateType || m, xt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (r.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || n)
                    }
                    for (o = 0;
                        (s = p[o++]) && !e.isPropagationStopped();) d = s, e.type = o > 1 ? l : f.bindType || m, (c = (G.get(s, "events") || Object.create(null))[e.type] && G.get(s, "handle")) && c.apply(s, t), (c = u && s[u]) && c.apply && Y(s) && (e.result = c.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = m, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), t) || !Y(r) || u && v(r[m]) && !y(r) && ((a = r[u]) && (r[u] = null), E.event.triggered = m, e.isPropagationStopped() && d.addEventListener(m, Et), r[m](), e.isPropagationStopped() && d.removeEventListener(m, Et), E.event.triggered = void 0, a && (r[u] = a)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = E.extend(new E.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                E.event.trigger(r, null, t)
            }
        }), E.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    E.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0)
            }
        }), g.focusin || E.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                E.event.simulate(t, e.target, E.event.fix(e))
            };
            E.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this,
                        i = G.access(r, t);
                    i || r.addEventListener(e, n, !0), G.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this,
                        i = G.access(r, t) - 1;
                    i ? G.access(r, t, i) : (r.removeEventListener(e, n, !0), G.remove(r, t))
                }
            }
        }));
        var Tt = n.location,
            Ct = {
                guid: Date.now()
            },
            St = /\?/;
        E.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
        };
        var kt = /\[\]$/,
            Nt = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Dt = /^(?:input|select|textarea|keygen)/i;

        function jt(e, t, n, r) {
            var i;
            if (Array.isArray(t)) E.each(t, (function(t, i) {
                n || kt.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            }));
            else if (n || "object" !== x(t)) r(e, t);
            else
                for (i in t) jt(e + "[" + i + "]", t[i], n, r)
        }
        E.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = v(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, (function() {
                i(this.name, this.value)
            }));
            else
                for (n in e) jt(n, e[n], t, i);
            return r.join("&")
        }, E.fn.extend({
            serialize: function() {
                return E.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this
                })).filter((function() {
                    var e = this.type;
                    return this.name && !E(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !me.test(e))
                })).map((function(e, t) {
                    var n = E(this).val();
                    return null == n ? null : Array.isArray(n) ? E.map(n, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Nt, "\r\n")
                        }
                    })) : {
                        name: t.name,
                        value: n.replace(Nt, "\r\n")
                    }
                })).get()
            }
        });
        var Ot = /%20/g,
            Lt = /#.*$/,
            It = /([?&])_=[^&]*/,
            qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Pt = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            Ht = {},
            Ft = {},
            Mt = "*/".concat("*"),
            Bt = b.createElement("a");

        function Wt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(R) || [];
                if (v(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Ut(e, t, n, r) {
            var i = {},
                o = e === Ft;

            function s(a) {
                var l;
                return i[a] = !0, E.each(e[a] || [], (function(e, a) {
                    var u = a(t, n, r);
                    return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
                })), l
            }
            return s(t.dataTypes[0]) || !i["*"] && s("*")
        }

        function $t(e, t) {
            var n, r, i = E.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && E.extend(!0, e, r), e
        }
        Bt.href = Tt.href, E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Mt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": E.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? $t($t(e, E.ajaxSettings), t) : $t(E.ajaxSettings, e)
            },
            ajaxPrefilter: Wt(Ht),
            ajaxTransport: Wt(Ft),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, o, s, a, l, u, c, f, d, h = E.ajaxSetup({}, t),
                    p = h.context || h,
                    m = h.context && (p.nodeType || p.jquery) ? E(p) : E.event,
                    g = E.Deferred(),
                    v = E.Callbacks("once memory"),
                    y = h.statusCode || {},
                    _ = {},
                    w = {},
                    x = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!s)
                                    for (s = {}; t = qt.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return u ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u) T.always(e[T.status]);
                                else
                                    for (t in e) y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return r && r.abort(t), C(0, t), this
                        }
                    };
                if (g.promise(T), h.url = ((e || h.url || Tt.href) + "").replace(Rt, Tt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
                    l = b.createElement("a");
                    try {
                        l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)), Ut(Ht, h, t, T), u) return T;
                for (f in (c = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), i = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+")) : (d = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (St.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(It, "$1"), d = (St.test(i) ? "&" : "?") + "_=" + Ct.guid++ + d), h.url = i + d), h.ifModified && (E.lastModified[i] && T.setRequestHeader("If-Modified-Since", E.lastModified[i]), E.etag[i] && T.setRequestHeader("If-None-Match", E.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || u)) return T.abort();
                if (x = "abort", v.add(h.complete), T.done(h.success), T.fail(h.error), r = Ut(Ft, h, t, T)) {
                    if (T.readyState = 1, c && m.trigger("ajaxSend", [T, h]), u) return T;
                    h.async && h.timeout > 0 && (a = n.setTimeout((function() {
                        T.abort("timeout")
                    }), h.timeout));
                    try {
                        u = !1, r.send(_, C)
                    } catch (e) {
                        if (u) throw e;
                        C(-1, e)
                    }
                } else C(-1, "No Transport");

                function C(e, t, s, l) {
                    var f, d, b, _, w, x = t;
                    u || (u = !0, a && n.clearTimeout(a), r = void 0, o = l || "", T.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, s && (_ = function(e, t, n) {
                        for (var r, i, o, s, a = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in a)
                                if (a[i] && a[i].test(r)) {
                                    l.unshift(i);
                                    break
                                } if (l[0] in n) o = l[0];
                        else {
                            for (i in n) {
                                if (!l[0] || e.converters[i + " " + l[0]]) {
                                    o = i;
                                    break
                                }
                                s || (s = i)
                            }
                            o = o || s
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o]
                    }(h, T, s)), !f && E.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function() {}), _ = function(e, t, n, r) {
                        var i, o, s, a, l, u = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                        for (o = c.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                            if (!(s = u[l + " " + o] || u["* " + o]))
                                for (i in u)
                                    if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                        !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], c.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + l + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, _, T, f), f ? (h.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (E.lastModified[i] = w), (w = T.getResponseHeader("etag")) && (E.etag[i] = w)), 204 === e || "HEAD" === h.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = _.state, d = _.data, f = !(b = _.error))) : (b = x, !e && x || (x = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || x) + "", f ? g.resolveWith(p, [d, x, T]) : g.rejectWith(p, [T, x, b]), T.statusCode(y), y = void 0, c && m.trigger(f ? "ajaxSuccess" : "ajaxError", [T, h, f ? d : b]), v.fireWith(p, [T, x]), c && (m.trigger("ajaxComplete", [T, h]), --E.active || E.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(e, t, n) {
                return E.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return E.get(e, void 0, t, "script")
            }
        }), E.each(["get", "post"], (function(e, t) {
            E[t] = function(e, n, r, i) {
                return v(n) && (i = i || r, r = n, n = void 0), E.ajax(E.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, E.isPlainObject(e) && e))
            }
        })), E.ajaxPrefilter((function(e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        })), E._evalUrl = function(e, t, n) {
            return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    E.globalEval(e, t, n)
                }
            })
        }, E.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (v(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                })).append(this)), this
            },
            wrapInner: function(e) {
                return v(e) ? this.each((function(t) {
                    E(this).wrapInner(e.call(this, t))
                })) : this.each((function() {
                    var t = E(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }))
            },
            wrap: function(e) {
                var t = v(e);
                return this.each((function(n) {
                    E(this).wrapAll(t ? e.call(this, n) : e)
                }))
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    E(this).replaceWith(this.childNodes)
                })), this
            }
        }), E.expr.pseudos.hidden = function(e) {
            return !E.expr.pseudos.visible(e)
        }, E.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, E.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Qt = {
                0: 200,
                1223: 204
            },
            zt = E.ajaxSettings.xhr();
        g.cors = !!zt && "withCredentials" in zt, g.ajax = zt = !!zt, E.ajaxTransport((function(e) {
            var t, r;
            if (g.cors || zt && !e.crossDomain) return {
                send: function(i, o) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(s, i[s]);
                    t = function(e) {
                        return function() {
                            t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = t(), r = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                        4 === a.readyState && n.setTimeout((function() {
                            t && r()
                        }))
                    }, t = t("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        })), E.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1)
        })), E.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return E.globalEval(e), e
                }
            }
        }), E.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        })), E.ajaxTransport("script", (function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function(r, i) {
                    t = E("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), b.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }));
        var Vt, Xt = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Xt.pop() || E.expando + "_" + Ct.guid++;
                return this[e] = !0, e
            }
        }), E.ajaxPrefilter("json jsonp", (function(e, t, r) {
            var i, o, s, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + i) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return s || E.error(i + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                s = arguments
            }, r.always((function() {
                void 0 === o ? E(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Xt.push(i)), s && v(o) && o(s[0]), s = o = void 0
            })), "script"
        })), g.createHTMLDocument = ((Vt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), E.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
            var r, i, o
        }, E.fn.load = function(e, t, n) {
            var r, i, o, s = this,
                a = e.indexOf(" ");
            return a > -1 && (r = yt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && E.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                o = arguments, s.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
            })).always(n && function(e, t) {
                s.each((function() {
                    n.apply(this, o || [e.responseText, t, e])
                }))
            }), this
        }, E.expr.pseudos.animated = function(e) {
            return E.grep(E.timers, (function(t) {
                return e === t.elem
            })).length
        }, E.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, s, a, l, u = E.css(e, "position"),
                    c = E(e),
                    f = {};
                "static" === u && (e.style.position = "relative"), a = c.offset(), o = E.css(e, "top"), l = E.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), v(t) && (t = t.call(e, n, E.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
            }
        }, E.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                    E.offset.setOffset(this, e, t)
                }));
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - E.css(r, "marginTop", !0),
                        left: t.left - i.left - E.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                    return e || oe
                }))
            }
        }), E.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var n = "pageYOffset" === t;
            E.fn[e] = function(r) {
                return $(this, (function(e, r, i) {
                    var o;
                    if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                }), e, r, arguments.length)
            }
        })), E.each(["top", "left"], (function(e, t) {
            E.cssHooks[t] = ze(g.pixelPosition, (function(e, n) {
                if (n) return n = Qe(e, t), Be.test(n) ? E(e).position()[t] + "px" : n
            }))
        })), E.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            E.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, r) {
                E.fn[r] = function(i, o) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === o ? "margin" : "border");
                    return $(this, (function(t, n, i) {
                        var o;
                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? E.css(t, n, a) : E.style(t, n, i, a)
                    }), t, s ? i : void 0, s)
                }
            }))
        })), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
            E.fn[t] = function(e) {
                return this.on(t, e)
            }
        })), E.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            E.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }));
        var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        E.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = a.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(a.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, i
        }, E.holdReady = function(e) {
            e ? E.readyWait++ : E.ready(!0)
        }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = v, E.isWindow = y, E.camelCase = X, E.type = x, E.now = Date.now, E.isNumeric = function(e) {
            var t = E.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, E.trim = function(e) {
            return null == e ? "" : (e + "").replace(Kt, "")
        }, void 0 === (r = function() {
            return E
        }.apply(t, [])) || (e.exports = r);
        var Gt = n.jQuery,
            Jt = n.$;
        return E.noConflict = function(e) {
            return n.$ === E && (n.$ = Jt), e && n.jQuery === E && (n.jQuery = Gt), E
        }, void 0 === i && (n.jQuery = n.$ = E), E
    }))
}, function(e, t, n) {
    n(12), e.exports = n(33)
}, function(e, t, n) {
    window.axios = n(13), window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", window.Popper = n(9).default, window.$ = window.jQuery = n(10), n(32), jQuery(document).ready((function(e) {
        function t(t) {
            e(t.target).prev(".card-header").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus")
        }
        e("#accordion").on("hidden.bs.collapse", t), e("#accordion").on("shown.bs.collapse", t), e(document).on("scroll", (function() {
            e(document).scrollTop() > 86 ? e("#banner").addClass("shrink") : e("#banner").removeClass("shrink")
        })), e(".trigger-modal").on("click", (function() {
            var t = e(this).data("attachment");
            e('input[name ="attachmentIdModal"]').val(t)
        })), e(".form-input").change((function() {
            e(this).val() ? e(this).parent().addClass("form-input-check") : e(this).parent().removeClass("form-input-check")
        })), e(".landing-ga-send").on("click", (function() {
            var t = e(this).data("product"),
                n = e(this).data("type");
            gtag("event", "file_download", {
                file_extension: ".zip",
                file_name: t,
                link_url: "https://startuplanding.redq.io",
                link_text: t,
                file_type: n
            })
        }))
    }))
}, function(e, t, n) {
    e.exports = n(14)
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        i = n(1),
        o = n(15),
        s = n(7);

    function a(e) {
        var t = new o(e),
            n = i(o.prototype.request, t);
        return r.extend(n, o.prototype, t), r.extend(n, t), n
    }
    var l = a(n(4));
    l.Axios = o, l.create = function(e) {
        return a(s(l.defaults, e))
    }, l.Cancel = n(8), l.CancelToken = n(29), l.isCancel = n(3), l.all = function(e) {
        return Promise.all(e)
    }, l.spread = n(30), e.exports = l, e.exports.default = l
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        i = n(2),
        o = n(16),
        s = n(17),
        a = n(7);

    function l(e) {
        this.defaults = e, this.interceptors = {
            request: new o,
            response: new o
        }
    }
    l.prototype.request = function(e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
        var t = [s, void 0],
            n = Promise.resolve(e);
        for (this.interceptors.request.forEach((function(e) {
                t.unshift(e.fulfilled, e.rejected)
            })), this.interceptors.response.forEach((function(e) {
                t.push(e.fulfilled, e.rejected)
            })); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, l.prototype.getUri = function(e) {
        return e = a(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, r.forEach(["delete", "get", "head", "options"], (function(e) {
        l.prototype[e] = function(t, n) {
            return this.request(r.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    })), r.forEach(["post", "put", "patch"], (function(e) {
        l.prototype[e] = function(t, n, i) {
            return this.request(r.merge(i || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    })), e.exports = l
}, function(e, t, n) {
    "use strict";
    var r = n(0);

    function i() {
        this.handlers = []
    }
    i.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, i.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, i.prototype.forEach = function(e) {
        r.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }))
    }, e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        i = n(18),
        o = n(3),
        s = n(4);

    function a(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
        return a(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
            delete e.headers[t]
        })), (e.adapter || s.adapter)(e).then((function(t) {
            return a(e), t.data = i(t.data, t.headers, e.transformResponse), t
        }), (function(t) {
            return o(t) || (a(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e, t, n) {
        return r.forEach(n, (function(n) {
            e = n(e, t)
        })), e
    }
}, function(e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            r = s
        }
    }();
    var l, u = [],
        c = !1,
        f = -1;

    function d() {
        c && l && (c = !1, l.length ? u = l.concat(u) : f = -1, u.length && h())
    }

    function h() {
        if (!c) {
            var e = a(d);
            c = !0;
            for (var t = u.length; t;) {
                for (l = u, u = []; ++f < t;) l && l[f].run();
                f = -1, t = u.length
            }
            l = null, c = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function p(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new p(e, t)), 1 !== u.length || c || a(h)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
        return []
    }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e, t) {
        r.forEach(e, (function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        }))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(6);
    e.exports = function(e, t, n) {
        var i = n.config.validateStatus;
        !i || i(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, i) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(24),
        i = n(25);
    e.exports = function(e, t) {
        return e && !r(t) ? i(e, t) : t
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0),
        i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, o, s = {};
        return e ? (r.forEach(e.split("\n"), (function(e) {
            if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) {
                if (s[t] && i.indexOf(t) >= 0) return;
                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
            }
        })), s) : s
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");

        function i(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = i(window.location.href),
            function(t) {
                var n = r.isString(t) ? i(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
    }() : function() {
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv() ? {
        write: function(e, t, n, i, o, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(i) && a.push("path=" + i), r.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ")
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}, function(e, t, n) {
    "use strict";
    var r = n(8);

    function i(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function(e) {
            t = e
        }));
        var n = this;
        e((function(e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        }))
    }
    i.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, i.source = function() {
        var e;
        return {
            token: new i((function(t) {
                e = t
            })),
            cancel: e
        }
    }, e.exports = i
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    ! function(e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function s(e) {
            var n = this,
                r = !1;
            return t(this).one(a.TRANSITION_END, (function() {
                r = !0
            })), setTimeout((function() {
                r || a.triggerTransitionEnd(n)
            }), e), this
        }
        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
        var a = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(e) {
                if (!e) return 0;
                var n = t(e).css("transition-duration"),
                    r = t(e).css("transition-delay"),
                    i = parseFloat(n),
                    o = parseFloat(r);
                return i || o ? (n = n.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(r))) : 0
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(e) {
                t(e).trigger("transitionend")
            },
            supportsTransitionEnd: function() {
                return Boolean("transitionend")
            },
            isElement: function(e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function(e, t, n) {
                for (var r in n)
                    if (Object.prototype.hasOwnProperty.call(n, r)) {
                        var i = n[r],
                            o = t[r],
                            s = o && a.isElement(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(i).test(s)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + i + '".')
                    } var l
            },
            findShadowRoot: function(e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null
            },
            jQueryDetection: function() {
                if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = t.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
        a.jQueryDetection(), t.fn.emulateTransitionEnd = s, t.event.special[a.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        };
        var l = "alert",
            u = t.fn[l],
            c = function() {
                function e(e) {
                    this._element = e
                }
                var n = e.prototype;
                return n.close = function(e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, n.dispose = function() {
                    t.removeData(this._element, "bs.alert"), this._element = null
                }, n._getRootElement = function(e) {
                    var n = a.getSelectorFromElement(e),
                        r = !1;
                    return n && (r = document.querySelector(n)), r || (r = t(e).closest(".alert")[0]), r
                }, n._triggerCloseEvent = function(e) {
                    var n = t.Event("close.bs.alert");
                    return t(e).trigger(n), n
                }, n._removeElement = function(e) {
                    var n = this;
                    if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                        var r = a.getTransitionDurationFromElement(e);
                        t(e).one(a.TRANSITION_END, (function(t) {
                            return n._destroyElement(e, t)
                        })).emulateTransitionEnd(r)
                    } else this._destroyElement(e)
                }, n._destroyElement = function(e) {
                    t(e).detach().trigger("closed.bs.alert").remove()
                }, e._jQueryInterface = function(n) {
                    return this.each((function() {
                        var r = t(this),
                            i = r.data("bs.alert");
                        i || (i = new e(this), r.data("bs.alert", i)), "close" === n && i[n](this)
                    }))
                }, e._handleDismiss = function(e) {
                    return function(t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, i(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.5.2"
                    }
                }]), e
            }();
        t(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', c._handleDismiss(new c)), t.fn[l] = c._jQueryInterface, t.fn[l].Constructor = c, t.fn[l].noConflict = function() {
            return t.fn[l] = u, c._jQueryInterface
        };
        var f = t.fn.button,
            d = function() {
                function e(e) {
                    this._element = e
                }
                var n = e.prototype;
                return n.toggle = function() {
                    var e = !0,
                        n = !0,
                        r = t(this._element).closest('[data-toggle="buttons"]')[0];
                    if (r) {
                        var i = this._element.querySelector('input:not([type="hidden"])');
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && this._element.classList.contains("active")) e = !1;
                                else {
                                    var o = r.querySelector(".active");
                                    o && t(o).removeClass("active")
                                } e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains("active")), t(i).trigger("change")), i.focus(), n = !1
                        }
                    }
                    this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && t(this._element).toggleClass("active"))
                }, n.dispose = function() {
                    t.removeData(this._element, "bs.button"), this._element = null
                }, e._jQueryInterface = function(n) {
                    return this.each((function() {
                        var r = t(this).data("bs.button");
                        r || (r = new e(this), t(this).data("bs.button", r)), "toggle" === n && r[n]()
                    }))
                }, i(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.5.2"
                    }
                }]), e
            }();
        t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
            var n = e.target,
                r = n;
            if (t(n).hasClass("btn") || (n = t(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault();
            else {
                var i = n.querySelector('input:not([type="hidden"])');
                if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
                ("LABEL" !== r.tagName || i && "checkbox" !== i.type) && d._jQueryInterface.call(t(n), "toggle")
            }
        })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
            var n = t(e.target).closest(".btn")[0];
            t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
        })), t(window).on("load.bs.button.data-api", (function() {
            for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                var r = e[t],
                    i = r.querySelector('input:not([type="hidden"])');
                i.checked || i.hasAttribute("checked") ? r.classList.add("active") : r.classList.remove("active")
            }
            for (var o = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
                var a = e[o];
                "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
            }
        })), t.fn.button = d._jQueryInterface, t.fn.button.Constructor = d, t.fn.button.noConflict = function() {
            return t.fn.button = f, d._jQueryInterface
        };
        var h = "carousel",
            p = ".bs.carousel",
            m = t.fn[h],
            g = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            v = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            y = {
                TOUCH: "touch",
                PEN: "pen"
            },
            b = function() {
                function e(e, t) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                }
                var n = e.prototype;
                return n.next = function() {
                    this._isSliding || this._slide("next")
                }, n.nextWhenVisible = function() {
                    !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                }, n.prev = function() {
                    this._isSliding || this._slide("prev")
                }, n.pause = function(e) {
                    e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, n.cycle = function(e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, n.to = function(e) {
                    var n = this;
                    this._activeElement = this._element.querySelector(".active.carousel-item");
                    var r = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding) t(this._element).one("slid.bs.carousel", (function() {
                            return n.to(e)
                        }));
                        else {
                            if (r === e) return this.pause(), void this.cycle();
                            var i = e > r ? "next" : "prev";
                            this._slide(i, this._items[e])
                        }
                }, n.dispose = function() {
                    t(this._element).off(p), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, n._getConfig = function(e) {
                    return e = o({}, g, e), a.typeCheckConfig(h, e, v), e
                }, n._handleSwipe = function() {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= 40)) {
                        var t = e / this.touchDeltaX;
                        this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                    }
                }, n._addEventListeners = function() {
                    var e = this;
                    this._config.keyboard && t(this._element).on("keydown.bs.carousel", (function(t) {
                        return e._keydown(t)
                    })), "hover" === this._config.pause && t(this._element).on("mouseenter.bs.carousel", (function(t) {
                        return e.pause(t)
                    })).on("mouseleave.bs.carousel", (function(t) {
                        return e.cycle(t)
                    })), this._config.touch && this._addTouchEventListeners()
                }, n._addTouchEventListeners = function() {
                    var e = this;
                    if (this._touchSupported) {
                        var n = function(t) {
                                e._pointerEvent && y[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                            },
                            r = function(t) {
                                e._pointerEvent && y[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) {
                                    return e.cycle(t)
                                }), 500 + e._config.interval))
                            };
                        t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(e) {
                            return e.preventDefault()
                        })), this._pointerEvent ? (t(this._element).on("pointerdown.bs.carousel", (function(e) {
                            return n(e)
                        })), t(this._element).on("pointerup.bs.carousel", (function(e) {
                            return r(e)
                        })), this._element.classList.add("pointer-event")) : (t(this._element).on("touchstart.bs.carousel", (function(e) {
                            return n(e)
                        })), t(this._element).on("touchmove.bs.carousel", (function(t) {
                            return function(t) {
                                t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                            }(t)
                        })), t(this._element).on("touchend.bs.carousel", (function(e) {
                            return r(e)
                        })))
                    }
                }, n._keydown = function(e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next()
                    }
                }, n._getItemIndex = function(e) {
                    return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
                }, n._getItemByDirection = function(e, t) {
                    var n = "next" === e,
                        r = "prev" === e,
                        i = this._getItemIndex(t),
                        o = this._items.length - 1;
                    if ((r && 0 === i || n && i === o) && !this._config.wrap) return t;
                    var s = (i + ("prev" === e ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                }, n._triggerSlideEvent = function(e, n) {
                    var r = this._getItemIndex(e),
                        i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                        o = t.Event("slide.bs.carousel", {
                            relatedTarget: e,
                            direction: n,
                            from: i,
                            to: r
                        });
                    return t(this._element).trigger(o), o
                }, n._setActiveIndicatorElement = function(e) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                        t(n).removeClass("active");
                        var r = this._indicatorsElement.children[this._getItemIndex(e)];
                        r && t(r).addClass("active")
                    }
                }, n._slide = function(e, n) {
                    var r, i, o, s = this,
                        l = this._element.querySelector(".active.carousel-item"),
                        u = this._getItemIndex(l),
                        c = n || l && this._getItemByDirection(e, l),
                        f = this._getItemIndex(c),
                        d = Boolean(this._interval);
                    if ("next" === e ? (r = "carousel-item-left", i = "carousel-item-next", o = "left") : (r = "carousel-item-right", i = "carousel-item-prev", o = "right"), c && t(c).hasClass("active")) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && l && c) {
                        this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(c);
                        var h = t.Event("slid.bs.carousel", {
                            relatedTarget: c,
                            direction: o,
                            from: u,
                            to: f
                        });
                        if (t(this._element).hasClass("slide")) {
                            t(c).addClass(i), a.reflow(c), t(l).addClass(r), t(c).addClass(r);
                            var p = parseInt(c.getAttribute("data-interval"), 10);
                            p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var m = a.getTransitionDurationFromElement(l);
                            t(l).one(a.TRANSITION_END, (function() {
                                t(c).removeClass(r + " " + i).addClass("active"), t(l).removeClass("active " + i + " " + r), s._isSliding = !1, setTimeout((function() {
                                    return t(s._element).trigger(h)
                                }), 0)
                            })).emulateTransitionEnd(m)
                        } else t(l).removeClass("active"), t(c).addClass("active"), this._isSliding = !1, t(this._element).trigger(h);
                        d && this.cycle()
                    }
                }, e._jQueryInterface = function(n) {
                    return this.each((function() {
                        var r = t(this).data("bs.carousel"),
                            i = o({}, g, t(this).data());
                        "object" == typeof n && (i = o({}, i, n));
                        var s = "string" == typeof n ? n : i.slide;
                        if (r || (r = new e(this, i), t(this).data("bs.carousel", r)), "number" == typeof n) r.to(n);
                        else if ("string" == typeof s) {
                            if (void 0 === r[s]) throw new TypeError('No method named "' + s + '"');
                            r[s]()
                        } else i.interval && i.ride && (r.pause(), r.cycle())
                    }))
                }, e._dataApiClickHandler = function(n) {
                    var r = a.getSelectorFromElement(this);
                    if (r) {
                        var i = t(r)[0];
                        if (i && t(i).hasClass("carousel")) {
                            var s = o({}, t(i).data(), t(this).data()),
                                l = this.getAttribute("data-slide-to");
                            l && (s.interval = !1), e._jQueryInterface.call(t(i), s), l && t(i).data("bs.carousel").to(l), n.preventDefault()
                        }
                    }
                }, i(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return g
                    }
                }]), e
            }();
        t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", b._dataApiClickHandler), t(window).on("load.bs.carousel.data-api", (function() {
            for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, r = e.length; n < r; n++) {
                var i = t(e[n]);
                b._jQueryInterface.call(i, i.data())
            }
        })), t.fn[h] = b._jQueryInterface, t.fn[h].Constructor = b, t.fn[h].noConflict = function() {
            return t.fn[h] = m, b._jQueryInterface
        };
        var _ = "collapse",
            w = t.fn[_],
            x = {
                toggle: !0,
                parent: ""
            },
            E = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            T = function() {
                function e(e, t) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), r = 0, i = n.length; r < i; r++) {
                        var o = n[r],
                            s = a.getSelectorFromElement(o),
                            l = [].slice.call(document.querySelectorAll(s)).filter((function(t) {
                                return t === e
                            }));
                        null !== s && l.length > 0 && (this._selector = s, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var n = e.prototype;
                return n.toggle = function() {
                    t(this._element).hasClass("show") ? this.hide() : this.show()
                }, n.show = function() {
                    var n, r, i = this;
                    if (!(this._isTransitioning || t(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e) {
                            return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains("collapse")
                        }))).length && (n = null), n && (r = t(n).not(this._selector).data("bs.collapse")) && r._isTransitioning))) {
                        var o = t.Event("show.bs.collapse");
                        if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                            n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), r || t(n).data("bs.collapse", null));
                            var s = this._getDimension();
                            t(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                            var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                                u = a.getTransitionDurationFromElement(this._element);
                            t(this._element).one(a.TRANSITION_END, (function() {
                                t(i._element).removeClass("collapsing").addClass("collapse show"), i._element.style[s] = "", i.setTransitioning(!1), t(i._element).trigger("shown.bs.collapse")
                            })).emulateTransitionEnd(u), this._element.style[s] = this._element[l] + "px"
                        }
                    }
                }, n.hide = function() {
                    var e = this;
                    if (!this._isTransitioning && t(this._element).hasClass("show")) {
                        var n = t.Event("hide.bs.collapse");
                        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var r = this._getDimension();
                            this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", a.reflow(this._element), t(this._element).addClass("collapsing").removeClass("collapse show");
                            var i = this._triggerArray.length;
                            if (i > 0)
                                for (var o = 0; o < i; o++) {
                                    var s = this._triggerArray[o],
                                        l = a.getSelectorFromElement(s);
                                    null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass("show") || t(s).addClass("collapsed").attr("aria-expanded", !1))
                                }
                            this.setTransitioning(!0), this._element.style[r] = "";
                            var u = a.getTransitionDurationFromElement(this._element);
                            t(this._element).one(a.TRANSITION_END, (function() {
                                e.setTransitioning(!1), t(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            })).emulateTransitionEnd(u)
                        }
                    }
                }, n.setTransitioning = function(e) {
                    this._isTransitioning = e
                }, n.dispose = function() {
                    t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, n._getConfig = function(e) {
                    return (e = o({}, x, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(_, e, E), e
                }, n._getDimension = function() {
                    return t(this._element).hasClass("width") ? "width" : "height"
                }, n._getParent = function() {
                    var n, r = this;
                    a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        o = [].slice.call(n.querySelectorAll(i));
                    return t(o).each((function(t, n) {
                        r._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                    })), n
                }, n._addAriaAndCollapsedClass = function(e, n) {
                    var r = t(e).hasClass("show");
                    n.length && t(n).toggleClass("collapsed", !r).attr("aria-expanded", r)
                }, e._getTargetFromElement = function(e) {
                    var t = a.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null
                }, e._jQueryInterface = function(n) {
                    return this.each((function() {
                        var r = t(this),
                            i = r.data("bs.collapse"),
                            s = o({}, x, r.data(), "object" == typeof n && n ? n : {});
                        if (!i && s.toggle && "string" == typeof n && /show|hide/.test(n) && (s.toggle = !1), i || (i = new e(this, s), r.data("bs.collapse", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, i(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return x
                    }
                }]), e
            }();
        t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = t(this),
                r = a.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(r));
            t(i).each((function() {
                var e = t(this),
                    r = e.data("bs.collapse") ? "toggle" : n.data();
                T._jQueryInterface.call(e, r)
            }))
        })), t.fn[_] = T._jQueryInterface, t.fn[_].Constructor = T, t.fn[_].noConflict = function() {
            return t.fn[_] = w, T._jQueryInterface
        };
        var C = "dropdown",
            S = t.fn[C],
            k = new RegExp("38|40|27"),
            N = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null
            },
            A = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
                popperConfig: "(null|object)"
            },
            D = function() {
                function e(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var r = e.prototype;
                return r.toggle = function() {
                    if (!this._element.disabled && !t(this._element).hasClass("disabled")) {
                        var n = t(this._menu).hasClass("show");
                        e._clearMenus(), n || this.show(!0)
                    }
                }, r.show = function(r) {
                    if (void 0 === r && (r = !1), !(this._element.disabled || t(this._element).hasClass("disabled") || t(this._menu).hasClass("show"))) {
                        var i = {
                                relatedTarget: this._element
                            },
                            o = t.Event("show.bs.dropdown", i),
                            s = e._getParentFromElement(this._element);
                        if (t(s).trigger(o), !o.isDefaultPrevented()) {
                            if (!this._inNavbar && r) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var l = this._element;
                                "parent" === this._config.reference ? l = s : a.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(s).addClass("position-static"), this._popper = new n(l, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(s).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass("show"), t(s).toggleClass("show").trigger(t.Event("shown.bs.dropdown", i))
                        }
                    }
                }, r.hide = function() {
                    if (!this._element.disabled && !t(this._element).hasClass("disabled") && t(this._menu).hasClass("show")) {
                        var n = {
                                relatedTarget: this._element
                            },
                            r = t.Event("hide.bs.dropdown", n),
                            i = e._getParentFromElement(this._element);
                        t(i).trigger(r), r.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass("show"), t(i).toggleClass("show").trigger(t.Event("hidden.bs.dropdown", n)))
                    }
                }, r.dispose = function() {
                    t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, r.update = function() {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, r._addEventListeners = function() {
                    var e = this;
                    t(this._element).on("click.bs.dropdown", (function(t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle()
                    }))
                }, r._getConfig = function(e) {
                    return e = o({}, this.constructor.Default, t(this._element).data(), e), a.typeCheckConfig(C, e, this.constructor.DefaultType), e
                }, r._getMenuElement = function() {
                    if (!this._menu) {
                        var t = e._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(".dropdown-menu"))
                    }
                    return this._menu
                }, r._getPlacement = function() {
                    var e = t(this._element.parentNode),
                        n = "bottom-start";
                    return e.hasClass("dropup") ? n = t(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
                }, r._detectNavbar = function() {
                    return t(this._element).closest(".navbar").length > 0
                }, r._getOffset = function() {
                    var e = this,
                        t = {};
                    return "function" == typeof this._config.offset ? t.fn = function(t) {
                        return t.offsets = o({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                    } : t.offset = this._config.offset, t
                }, r._getPopperConfig = function() {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (e.modifiers.applyStyle = {
                        enabled: !1
                    }), o({}, e, this._config.popperConfig)
                }, e._jQueryInterface = function(n) {
                    return this.each((function() {
                        var r = t(this).data("bs.dropdown");
                        if (r || (r = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }))
                }, e._clearMenus = function(n) {
                    if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                        for (var r = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, o = r.length; i < o; i++) {
                            var s = e._getParentFromElement(r[i]),
                                a = t(r[i]).data("bs.dropdown"),
                                l = {
                                    relatedTarget: r[i]
                                };
                            if (n && "click" === n.type && (l.clickEvent = n), a) {
                                var u = a._menu;
                                if (t(s).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                                    var c = t.Event("hide.bs.dropdown", l);
                                    t(s).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), r[i].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), t(u).removeClass("show"), t(s).removeClass("show").trigger(t.Event("hidden.bs.dropdown", l)))
                                }
                            }
                        }
                }, e._getParentFromElement = function(e) {
                    var t, n = a.getSelectorFromElement(e);
                    return n && (t = document.querySelector(n)), t || e.parentNode
                }, e._dataApiKeydownHandler = function(n) {
                    if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(".dropdown-menu").length) : !k.test(n.which)) && !this.disabled && !t(this).hasClass("disabled")) {
                        var r = e._getParentFromElement(this),
                            i = t(r).hasClass("show");
                        if (i || 27 !== n.which) {
                            if (n.preventDefault(), n.stopPropagation(), !i || i && (27 === n.which || 32 === n.which)) return 27 === n.which && t(r.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void t(this).trigger("click");
                            var o = [].slice.call(r.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e) {
                                return t(e).is(":visible")
                            }));
                            if (0 !== o.length) {
                                var s = o.indexOf(n.target);
                                38 === n.which && s > 0 && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                            }
                        }
                    }
                }, i(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return N
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return A
                    }
                }]), e
            }();
        t(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', D._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", D._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", D._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function(e) {
            e.preventDefault(), e.stopPropagation(), D._jQueryInterface.call(t(this), "toggle")
        })).on("click.bs.dropdown.data-api", ".dropdown form", (function(e) {
            e.stopPropagation()
        })), t.fn[C] = D._jQueryInterface, t.fn[C].Constructor = D, t.fn[C].noConflict = function() {
            return t.fn[C] = S, D._jQueryInterface
        };
        var j = t.fn.modal,
            O = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            L = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            I = function() {
                function e(e, t) {
                    this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }
                var n = e.prototype;
                return n.toggle = function(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, n.show = function(e) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        t(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var r = t.Event("show.bs.modal", {
                            relatedTarget: e
                        });
                        t(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function(e) {
                            return n.hide(e)
                        })), t(this._dialog).on("mousedown.dismiss.bs.modal", (function() {
                            t(n._element).one("mouseup.dismiss.bs.modal", (function(e) {
                                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            }))
                        })), this._showBackdrop((function() {
                            return n._showElement(e)
                        })))
                    }
                }, n.hide = function(e) {
                    var n = this;
                    if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                        var r = t.Event("hide.bs.modal");
                        if (t(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) {
                            this._isShown = !1;
                            var i = t(this._element).hasClass("fade");
                            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off("focusin.bs.modal"), t(this._element).removeClass("show"), t(this._element).off("click.dismiss.bs.modal"), t(this._dialog).off("mousedown.dismiss.bs.modal"), i) {
                                var o = a.getTransitionDurationFromElement(this._element);
                                t(this._element).one(a.TRANSITION_END, (function(e) {
                                    return n._hideModal(e)
                                })).emulateTransitionEnd(o)
                            } else this._hideModal()
                        }
                    }
                }, n.dispose = function() {
                    [window, this._element, this._dialog].forEach((function(e) {
                        return t(e).off(".bs.modal")
                    })), t(document).off("focusin.bs.modal"), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, n.handleUpdate = function() {
                    this._adjustDialog()
                }, n._getConfig = function(e) {
                    return e = o({}, O, e), a.typeCheckConfig("modal", e, L), e
                }, n._triggerBackdropTransition = function() {
                    var e = this;
                    if ("static" === this._config.backdrop) {
                        var n = t.Event("hidePrevented.bs.modal");
                        if (t(this._element).trigger(n), n.defaultPrevented) return;
                        var r = this._element.scrollHeight > document.documentElement.clientHeight;
                        r || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                        var i = a.getTransitionDurationFromElement(this._dialog);
                        t(this._element).off(a.TRANSITION_END), t(this._element).one(a.TRANSITION_END, (function() {
                            e._element.classList.remove("modal-static"), r || t(e._element).one(a.TRANSITION_END, (function() {
                                e._element.style.overflowY = ""
                            })).emulateTransitionEnd(e._element, i)
                        })).emulateTransitionEnd(i), this._element.focus()
                    } else this.hide()
                }, n._showElement = function(e) {
                    var n = this,
                        r = t(this._element).hasClass("fade"),
                        i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), t(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, r && a.reflow(this._element), t(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                    var o = t.Event("shown.bs.modal", {
                            relatedTarget: e
                        }),
                        s = function() {
                            n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                        };
                    if (r) {
                        var l = a.getTransitionDurationFromElement(this._dialog);
                        t(this._dialog).one(a.TRANSITION_END, s).emulateTransitionEnd(l)
                    } else s()
                }, n._enforceFocus = function() {
                    var e = this;
                    t(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(n) {
                        document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                    }))
                }, n._setEscapeEvent = function() {
                    var e = this;
                    this._isShown ? t(this._element).on("keydown.dismiss.bs.modal", (function(t) {
                        e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                    })) : this._isShown || t(this._element).off("keydown.dismiss.bs.modal")
                }, n._setResizeEvent = function() {
                    var e = this;
                    this._isShown ? t(window).on("resize.bs.modal", (function(t) {
                        return e.handleUpdate(t)
                    })) : t(window).off("resize.bs.modal")
                }, n._hideModal = function() {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
                        t(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger("hidden.bs.modal")
                    }))
                }, n._removeBackdrop = function() {
                    this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                }, n._showBackdrop = function(e) {
                    var n = this,
                        r = t(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", r && this._backdrop.classList.add(r), t(this._backdrop).appendTo(document.body), t(this._element).on("click.dismiss.bs.modal", (function(e) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition()
                            })), r && a.reflow(this._backdrop), t(this._backdrop).addClass("show"), !e) return;
                        if (!r) return void e();
                        var i = a.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(i)
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass("show");
                        var o = function() {
                            n._removeBackdrop(), e && e()
                        };
                        if (t(this._element).hasClass("fade")) {
                            var s = a.getTransitionDurationFromElement(this._backdrop);
                            t(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                        } else o()
                    } else e && e()
                }, n._adjustDialog = function() {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, n._resetAdjustments = function() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, n._checkScrollbar = function() {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, n._setScrollbar = function() {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                            r = [].slice.call(document.querySelectorAll(".sticky-top"));
                        t(n).each((function(n, r) {
                            var i = r.style.paddingRight,
                                o = t(r).css("padding-right");
                            t(r).data("padding-right", i).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                        })), t(r).each((function(n, r) {
                            var i = r.style.marginRight,
                                o = t(r).css("margin-right");
                            t(r).data("margin-right", i).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                        }));
                        var i = document.body.style.paddingRight,
                            o = t(document.body).css("padding-right");
                        t(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                    }
                    t(document.body).addClass("modal-open")
                }, n._resetScrollbar = function() {
                    var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    t(e).each((function(e, n) {
                        var r = t(n).data("padding-right");
                        t(n).removeData("padding-right"), n.style.paddingRight = r || ""
                    }));
                    var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    t(n).each((function(e, n) {
                        var r = t(n).data("margin-right");
                        void 0 !== r && t(n).css("margin-right", r).removeData("margin-right")
                    }));
                    var r = t(document.body).data("padding-right");
                    t(document.body).removeData("padding-right"), document.body.style.paddingRight = r || ""
                }, n._getScrollbarWidth = function() {
                    var e = document.createElement("div");
                    e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, e._jQueryInterface = function(n, r) {
                    return this.each((function() {
                        var i = t(this).data("bs.modal"),
                            s = o({}, O, t(this).data(), "object" == typeof n && n ? n : {});
                        if (i || (i = new e(this, s), t(this).data("bs.modal", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n](r)
                        } else s.show && i.show(r)
                    }))
                }, i(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return O
                    }
                }]), e
            }();
        t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
            var n, r = this,
                i = a.getSelectorFromElement(this);
            i && (n = document.querySelector(i));
            var s = t(n).data("bs.modal") ? "toggle" : o({}, t(n).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var l = t(n).one("show.bs.modal", (function(e) {
                e.isDefaultPrevented() || l.one("hidden.bs.modal", (function() {
                    t(r).is(":visible") && r.focus()
                }))
            }));
            I._jQueryInterface.call(t(n), s, this)
        })), t.fn.modal = I._jQueryInterface, t.fn.modal.Constructor = I, t.fn.modal.noConflict = function() {
            return t.fn.modal = j, I._jQueryInterface
        };
        var q = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            P = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            R = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            H = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

        function F(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (var r = (new window.DOMParser).parseFromString(e, "text/html"), i = Object.keys(t), o = [].slice.call(r.body.querySelectorAll("*")), s = function(e, n) {
                    var r = o[e],
                        s = r.nodeName.toLowerCase();
                    if (-1 === i.indexOf(r.nodeName.toLowerCase())) return r.parentNode.removeChild(r), "continue";
                    var a = [].slice.call(r.attributes),
                        l = [].concat(t["*"] || [], t[s] || []);
                    a.forEach((function(e) {
                        (function(e, t) {
                            var n = e.nodeName.toLowerCase();
                            if (-1 !== t.indexOf(n)) return -1 === q.indexOf(n) || Boolean(e.nodeValue.match(R) || e.nodeValue.match(H));
                            for (var r = t.filter((function(e) {
                                    return e instanceof RegExp
                                })), i = 0, o = r.length; i < o; i++)
                                if (n.match(r[i])) return !0;
                            return !1
                        })(e, l) || r.removeAttribute(e.nodeName)
                    }))
                }, a = 0, l = o.length; a < l; a++) s(a);
            return r.body.innerHTML
        }
        var M = "tooltip",
            B = t.fn[M],
            W = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            U = ["sanitize", "whiteList", "sanitizeFn"],
            $ = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)"
            },
            Q = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            z = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: P,
                popperConfig: null
            },
            V = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            },
            X = function() {
                function e(e, t) {
                    if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }
                var r = e.prototype;
                return r.enable = function() {
                    this._isEnabled = !0
                }, r.disable = function() {
                    this._isEnabled = !1
                }, r.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                }, r.toggle = function(e) {
                    if (this._isEnabled)
                        if (e) {
                            var n = this.constructor.DATA_KEY,
                                r = t(e.currentTarget).data(n);
                            r || (r = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, r)), r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
                        } else {
                            if (t(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, r.dispose = function() {
                    clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, r.show = function() {
                    var e = this;
                    if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var r = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        t(this.element).trigger(r);
                        var i = a.findShadowRoot(this.element),
                            o = t.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                        if (r.isDefaultPrevented() || !o) return;
                        var s = this.getTipElement(),
                            l = a.getUID(this.constructor.NAME);
                        s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && t(s).addClass("fade");
                        var u = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                            c = this._getAttachment(u);
                        this.addAttachmentClass(c);
                        var f = this._getContainer();
                        t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, this._getPopperConfig(c)), t(s).addClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                        var d = function() {
                            e.config.animation && e._fixTransition();
                            var n = e._hoverState;
                            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                        };
                        if (t(this.tip).hasClass("fade")) {
                            var h = a.getTransitionDurationFromElement(this.tip);
                            t(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(h)
                        } else d()
                    }
                }, r.hide = function(e) {
                    var n = this,
                        r = this.getTipElement(),
                        i = t.Event(this.constructor.Event.HIDE),
                        o = function() {
                            "show" !== n._hoverState && r.parentNode && r.parentNode.removeChild(r), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                        };
                    if (t(this.element).trigger(i), !i.isDefaultPrevented()) {
                        if (t(r).removeClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t(this.tip).hasClass("fade")) {
                            var s = a.getTransitionDurationFromElement(r);
                            t(r).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                        } else o();
                        this._hoverState = ""
                    }
                }, r.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, r.isWithContent = function() {
                    return Boolean(this.getTitle())
                }, r.addAttachmentClass = function(e) {
                    t(this.getTipElement()).addClass("bs-tooltip-" + e)
                }, r.getTipElement = function() {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, r.setContent = function() {
                    var e = this.getTipElement();
                    this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show")
                }, r.setElementContent = function(e, n) {
                    "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = F(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
                }, r.getTitle = function() {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, r._getPopperConfig = function(e) {
                    var t = this;
                    return o({}, {
                        placement: e,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }, this.config.popperConfig)
                }, r._getOffset = function() {
                    var e = this,
                        t = {};
                    return "function" == typeof this.config.offset ? t.fn = function(t) {
                        return t.offsets = o({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                    } : t.offset = this.config.offset, t
                }, r._getContainer = function() {
                    return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
                }, r._getAttachment = function(e) {
                    return Q[e.toUpperCase()]
                }, r._setListeners = function() {
                    var e = this;
                    this.config.trigger.split(" ").forEach((function(n) {
                        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
                            return e.toggle(t)
                        }));
                        else if ("manual" !== n) {
                            var r = "hover" === n ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                i = "hover" === n ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(r, e.config.selector, (function(t) {
                                return e._enter(t)
                            })).on(i, e.config.selector, (function(t) {
                                return e._leave(t)
                            }))
                        }
                    })), this._hideModalHandler = function() {
                        e.element && e.hide()
                    }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = o({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, r._fixTitle = function() {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, r._enter = function(e, n) {
                    var r = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(r)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() {
                        "show" === n._hoverState && n.show()
                    }), n.config.delay.show) : n.show())
                }, r._leave = function(e, n) {
                    var r = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(r)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() {
                        "out" === n._hoverState && n.hide()
                    }), n.config.delay.hide) : n.hide())
                }, r._isWithActiveTrigger = function() {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }, r._getConfig = function(e) {
                    var n = t(this.element).data();
                    return Object.keys(n).forEach((function(e) {
                        -1 !== U.indexOf(e) && delete n[e]
                    })), "number" == typeof(e = o({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), a.typeCheckConfig(M, e, this.constructor.DefaultType), e.sanitize && (e.template = F(e.template, e.whiteList, e.sanitizeFn)), e
                }, r._getDelegateConfig = function() {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, r._cleanTipClass = function() {
                    var e = t(this.getTipElement()),
                        n = e.attr("class").match(W);
                    null !== n && n.length && e.removeClass(n.join(""))
                }, r._handlePopperPlacementChange = function(e) {
                    this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, r._fixTransition = function() {
                    var e = this.getTipElement(),
                        n = this.config.animation;
                    null === e.getAttribute("x-placement") && (t(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, e._jQueryInterface = function(n) {
                    return this.each((function() {
                        var r = t(this).data("bs.tooltip"),
                            i = "object" == typeof n && n;
                        if ((r || !/dispose|hide/.test(n)) && (r || (r = new e(this, i), t(this).data("bs.tooltip", r)), "string" == typeof n)) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }))
                }, i(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return z
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return M
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return V
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return ".bs.tooltip"
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return $
                    }
                }]), e
            }();
        t.fn[M] = X._jQueryInterface, t.fn[M].Constructor = X, t.fn[M].noConflict = function() {
            return t.fn[M] = B, X._jQueryInterface
        };
        var Y = "popover",
            K = t.fn[Y],
            G = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            J = o({}, X.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            Z = o({}, X.DefaultType, {
                content: "(string|element|function)"
            }),
            ee = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            },
            te = function(e) {
                var n, r;

                function o() {
                    return e.apply(this, arguments) || this
                }
                r = e, (n = o).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r;
                var s = o.prototype;
                return s.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, s.addAttachmentClass = function(e) {
                    t(this.getTipElement()).addClass("bs-popover-" + e)
                }, s.getTipElement = function() {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, s.setContent = function() {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(".popover-header"), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
                }, s._getContent = function() {
                    return this.element.getAttribute("data-content") || this.config.content
                }, s._cleanTipClass = function() {
                    var e = t(this.getTipElement()),
                        n = e.attr("class").match(G);
                    null !== n && n.length > 0 && e.removeClass(n.join(""))
                }, o._jQueryInterface = function(e) {
                    return this.each((function() {
                        var n = t(this).data("bs.popover"),
                            r = "object" == typeof e ? e : null;
                        if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, r), t(this).data("bs.popover", n)), "string" == typeof e)) {
                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]()
                        }
                    }))
                }, i(o, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return J
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return Y
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return "bs.popover"
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return ee
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return ".bs.popover"
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Z
                    }
                }]), o
            }(X);
        t.fn[Y] = te._jQueryInterface, t.fn[Y].Constructor = te, t.fn[Y].noConflict = function() {
            return t.fn[Y] = K, te._jQueryInterface
        };
        var ne = "scrollspy",
            re = t.fn[ne],
            ie = {
                offset: 10,
                method: "auto",
                target: ""
            },
            oe = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            se = function() {
                function e(e, n) {
                    var r = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on("scroll.bs.scrollspy", (function(e) {
                        return r._process(e)
                    })), this.refresh(), this._process()
                }
                var n = e.prototype;
                return n.refresh = function() {
                    var e = this,
                        n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                        r = "auto" === this._config.method ? n : this._config.method,
                        i = "position" === r ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(e) {
                        var n, o = a.getSelectorFromElement(e);
                        if (o && (n = document.querySelector(o)), n) {
                            var s = n.getBoundingClientRect();
                            if (s.width || s.height) return [t(n)[r]().top + i, o]
                        }
                        return null
                    })).filter((function(e) {
                        return e
                    })).sort((function(e, t) {
                        return e[0] - t[0]
                    })).forEach((function(t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    }))
                }, n.dispose = function() {
                    t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, n._getConfig = function(e) {
                    if ("string" != typeof(e = o({}, ie, "object" == typeof e && e ? e : {})).target && a.isElement(e.target)) {
                        var n = t(e.target).attr("id");
                        n || (n = a.getUID(ne), t(e.target).attr("id", n)), e.target = "#" + n
                    }
                    return a.typeCheckConfig(ne, e, oe), e
                }, n._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, n._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, n._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, n._process = function() {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= n) {
                        var r = this._targets[this._targets.length - 1];
                        this._activeTarget !== r && this._activate(r)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                    }
                }, n._activate = function(e) {
                    this._activeTarget = e, this._clear();
                    var n = this._selector.split(",").map((function(t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        })),
                        r = t([].slice.call(document.querySelectorAll(n.join(","))));
                    r.hasClass("dropdown-item") ? (r.closest(".dropdown").find(".dropdown-toggle").addClass("active"), r.addClass("active")) : (r.addClass("active"), r.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), r.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), t(this._scrollElement).trigger("activate.bs.scrollspy", {
                        relatedTarget: e
                    })
                }, n._clear = function() {
                    [].slice.call(document.querySelectorAll(this._selector)).filter((function(e) {
                        return e.classList.contains("active")
                    })).forEach((function(e) {
                        return e.classList.remove("active")
                    }))
                }, e._jQueryInterface = function(n) {
                    return this.each((function() {
                        var r = t(this).data("bs.scrollspy");
                        if (r || (r = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }))
                }, i(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return ie
                    }
                }]), e
            }();
        t(window).on("load.bs.scrollspy.data-api", (function() {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
                var r = t(e[n]);
                se._jQueryInterface.call(r, r.data())
            }
        })), t.fn[ne] = se._jQueryInterface, t.fn[ne].Constructor = se, t.fn[ne].noConflict = function() {
            return t.fn[ne] = re, se._jQueryInterface
        };
        var ae = t.fn.tab,
            le = function() {
                function e(e) {
                    this._element = e
                }
                var n = e.prototype;
                return n.show = function() {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass("active") || t(this._element).hasClass("disabled"))) {
                        var n, r, i = t(this._element).closest(".nav, .list-group")[0],
                            o = a.getSelectorFromElement(this._element);
                        if (i) {
                            var s = "UL" === i.nodeName || "OL" === i.nodeName ? "> li > .active" : ".active";
                            r = (r = t.makeArray(t(i).find(s)))[r.length - 1]
                        }
                        var l = t.Event("hide.bs.tab", {
                                relatedTarget: this._element
                            }),
                            u = t.Event("show.bs.tab", {
                                relatedTarget: r
                            });
                        if (r && t(r).trigger(l), t(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
                            o && (n = document.querySelector(o)), this._activate(this._element, i);
                            var c = function() {
                                var n = t.Event("hidden.bs.tab", {
                                        relatedTarget: e._element
                                    }),
                                    i = t.Event("shown.bs.tab", {
                                        relatedTarget: r
                                    });
                                t(r).trigger(n), t(e._element).trigger(i)
                            };
                            n ? this._activate(n, n.parentNode, c) : c()
                        }
                    }
                }, n.dispose = function() {
                    t.removeData(this._element, "bs.tab"), this._element = null
                }, n._activate = function(e, n, r) {
                    var i = this,
                        o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(".active") : t(n).find("> li > .active"))[0],
                        s = r && o && t(o).hasClass("fade"),
                        l = function() {
                            return i._transitionComplete(e, o, r)
                        };
                    if (o && s) {
                        var u = a.getTransitionDurationFromElement(o);
                        t(o).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(u)
                    } else l()
                }, n._transitionComplete = function(e, n, r) {
                    if (n) {
                        t(n).removeClass("active");
                        var i = t(n.parentNode).find("> .dropdown-menu .active")[0];
                        i && t(i).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (t(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), a.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                        var o = t(e).closest(".dropdown")[0];
                        if (o) {
                            var s = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                            t(s).addClass("active")
                        }
                        e.setAttribute("aria-expanded", !0)
                    }
                    r && r()
                }, e._jQueryInterface = function(n) {
                    return this.each((function() {
                        var r = t(this),
                            i = r.data("bs.tab");
                        if (i || (i = new e(this), r.data("bs.tab", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, i(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.5.2"
                    }
                }]), e
            }();
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(e) {
            e.preventDefault(), le._jQueryInterface.call(t(this), "show")
        })), t.fn.tab = le._jQueryInterface, t.fn.tab.Constructor = le, t.fn.tab.noConflict = function() {
            return t.fn.tab = ae, le._jQueryInterface
        };
        var ue = t.fn.toast,
            ce = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            fe = {
                animation: !0,
                autohide: !0,
                delay: 500
            },
            de = function() {
                function e(e, t) {
                    this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                }
                var n = e.prototype;
                return n.show = function() {
                    var e = this,
                        n = t.Event("show.bs.toast");
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                        var r = function() {
                            e._element.classList.remove("showing"), e._element.classList.add("show"), t(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function() {
                                e.hide()
                            }), e._config.delay))
                        };
                        if (this._element.classList.remove("hide"), a.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                            var i = a.getTransitionDurationFromElement(this._element);
                            t(this._element).one(a.TRANSITION_END, r).emulateTransitionEnd(i)
                        } else r()
                    }
                }, n.hide = function() {
                    if (this._element.classList.contains("show")) {
                        var e = t.Event("hide.bs.toast");
                        t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                    }
                }, n.dispose = function() {
                    this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), t(this._element).off("click.dismiss.bs.toast"), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
                }, n._getConfig = function(e) {
                    return e = o({}, fe, t(this._element).data(), "object" == typeof e && e ? e : {}), a.typeCheckConfig("toast", e, this.constructor.DefaultType), e
                }, n._setListeners = function() {
                    var e = this;
                    t(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function() {
                        return e.hide()
                    }))
                }, n._close = function() {
                    var e = this,
                        n = function() {
                            e._element.classList.add("hide"), t(e._element).trigger("hidden.bs.toast")
                        };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var r = a.getTransitionDurationFromElement(this._element);
                        t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(r)
                    } else n()
                }, n._clearTimeout = function() {
                    clearTimeout(this._timeout), this._timeout = null
                }, e._jQueryInterface = function(n) {
                    return this.each((function() {
                        var r = t(this),
                            i = r.data("bs.toast");
                        if (i || (i = new e(this, "object" == typeof n && n), r.data("bs.toast", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n](this)
                        }
                    }))
                }, i(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.5.2"
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return ce
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return fe
                    }
                }]), e
            }();
        t.fn.toast = de._jQueryInterface, t.fn.toast.Constructor = de, t.fn.toast.noConflict = function() {
            return t.fn.toast = ue, de._jQueryInterface
        }, e.Alert = c, e.Button = d, e.Carousel = b, e.Collapse = T, e.Dropdown = D, e.Modal = I, e.Popover = te, e.Scrollspy = se, e.Tab = le, e.Toast = de, e.Tooltip = X, e.Util = a, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }(t, n(10), n(9))
}, function(e, t) {}]); // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}