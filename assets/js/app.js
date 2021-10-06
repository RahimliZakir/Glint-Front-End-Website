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
    $(sidebarBtn).on("click", function () {
        console.log("Clicked!");
    });
});
