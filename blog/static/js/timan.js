! function() {
    function n() { e(t, u, i) }

    function e(n, e, c) { y = pageYOffset, y > c ? n.className = e : n.className = "" }

    function c(n, e) { n.className = n.className ? "" : e }

    function a(n) { return document.getElementById(n) }
    var t = a("header-main"),
        i = 150,
        m = a("menu-icon"),
        o = a("menu-main"),
        s = "menu-active",
        u = "active";
    window.addEventListener("scroll", n), m.onclick = function() { c(o, s) }
}();