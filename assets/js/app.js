$(function () {
    var scrollTop = $(".scroll-top");
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll > 125) {
            $(scrollTop).addClass("scroll-vis");
        }
        else {
            $(scrollTop).removeClass("scroll-vis");
        }
    });
    var sidebarBtn = $(".sidebar-btn");
    var aside = $("aside");
    var asideCrossBtn = $(".aside-cross-btn");
    $(aside).click(function (e) {
        e.stopPropagation();
    });
    $(sidebarBtn).on("click", function (e) {
        e.stopPropagation();
        $(aside).addClass("show");
    });
    $(asideCrossBtn).on("click", function () {
        $(aside).removeClass("show");
    });
    $(document.body).click(function (e) {
        if ($(aside).hasClass("show")) {
            $(aside).removeClass("show");
        }
    });
});
