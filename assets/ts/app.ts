$(function () {
  let scrollTop: any = $(".scroll-top");

  $(window).on("scroll", () => {
    let scroll: any = $(window).scrollTop();

    if (scroll > 125) {
      $(scrollTop).addClass("scroll-vis");
    } else {
      $(scrollTop).removeClass("scroll-vis");
    }
  });

  let sidebarBtn: any = $(".sidebar-btn");
  let aside: any = $("aside");
  let asideCrossBtn: any = $(".aside-cross-btn");

  $(aside).click((e) => {
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
