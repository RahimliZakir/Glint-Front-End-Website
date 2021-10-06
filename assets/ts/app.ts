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

  $(sidebarBtn).on("click", function () {
    console.log("Clicked!");
  });
});
