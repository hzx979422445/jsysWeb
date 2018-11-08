$(function () {
    resizew();
    $(window).resize(function () {
        resizew();
    });
    $(document).on("click", "header .search-box",function () {
        $(".search-send").addClass("on");
    });
    $(document).on("click", ".search-send .close",function () {
        $(".search-send").removeClass("on");
    });
    if (navigator.userAgent.indexOf("MSIE") > 0) {
        if (navigator.userAgent.indexOf("MSIE 8.0") > 0 && !window.innerWidth || navigator.userAgent.indexOf("MSIE 9.0") > 0 && !window.innerWidth) {
            $(".wel-banner.case-banner").addClass("on");
            if ($(window).width() <= 1430) {
                $(".wel-video").css("height", 330);
                $('.pn-list').css({
                    'height': 500,
                    'margin-top': -250
                });
            }
        }
    }
    $(window).load(function () {
        $("body,html").addClass("on");
    });

    function resizew() {
        var winw = $(window).width(), winh = $(window).height(), header = $("header").height();
        $(".search-send,.search-send .submit,.search-send .submit").height(header);
        $("header .nav-box .con,.mobile-nav-box").width(winw);
        $("header .nav-box .con").css("margin-left", -(winw / 2));
        $(".mobile-nav-box").height(winh - header);
    }
});