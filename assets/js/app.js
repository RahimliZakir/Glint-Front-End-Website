$(function () {
  var scrollTop = $(".scroll-top");
  var sidebarBtn = $(".sidebar-btn");
  var aside = $("aside");
  var asideRow = $(".aside-row");
  var asideShadow = $(".ar-shadow");
  var asideCrossBtn = $(".aside-cross-btn");
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
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
  $(aside).click(function (e) {
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
  var welcomeIcon = $(".welcome-right-icons a");
  $(welcomeIcon).mouseover(function (e) {
    $(e.currentTarget).prev("h6.welcome-icon-h6").addClass("icon-vis");
  });
  $(welcomeIcon).mouseout(function (e) {
    $(e.currentTarget).prev("h6.welcome-icon-h6").removeClass("icon-vis");
  });

  $(".masonry-images-box").masonry({
    itemSelector: ".recent-works-images-col",
  });
});
