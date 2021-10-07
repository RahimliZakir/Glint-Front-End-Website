$(function () {
  let scrollTop: any = $(".scroll-top");

  let sidebarBtn: any = $(".sidebar-btn");
  let aside: any = $("aside");
  let asideRow: any = $(".aside-row");
  let asideShadow: any = $(".ar-shadow");
  let asideCrossBtn: any = $(".aside-cross-btn");

  $(window).on("scroll", () => {
    let scroll: any = $(window).scrollTop();

    if (scroll > 125) {
      $(scrollTop).addClass("scroll-vis");
    } else {
      $(scrollTop).removeClass("scroll-vis");
    }

    if (scroll > 25) {
      $(sidebarBtn).addClass("sidebar-scroll");
    } else {
      $(sidebarBtn).removeClass("sidebar-scroll");
    }
  });

  $(aside).click((e) => {
    e.stopPropagation();
  });

  $(sidebarBtn).on("click", function (e) {
    e.stopPropagation();
    $(aside).addClass("show");
    $(asideRow).addClass("ar-show");
    $(asideShadow).addClass("ar-shadow-vis");
  });

  $(asideCrossBtn).on("click", function () {
    $(aside).removeClass("show");
    $(asideRow).removeClass("ar-show");
    $(asideShadow).removeClass("ar-shadow-vis");
  });

  $(document.body).click(function (e) {
    if ($(aside).hasClass("show")) {
      $(aside).removeClass("show");
      $(asideRow).removeClass("ar-show");
      $(asideShadow).removeClass("ar-shadow-vis");
    }
  });
});
