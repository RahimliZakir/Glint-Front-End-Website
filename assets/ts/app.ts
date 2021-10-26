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

  let welcomeIcon: any = $(".welcome-right-icons a");

  $(welcomeIcon).mouseover((e) => {
    $(e.currentTarget).prev("h6.welcome-icon-h6").addClass("icon-vis");
  });

  $(welcomeIcon).mouseout((e) => {
    $(e.currentTarget).prev("h6.welcome-icon-h6").removeClass("icon-vis");
  });

  (<any>$(".recent-works-row")).masonry({
    itemSelector: ".recent-works-images-col",
  });

  //Masonry Images Carousel
  (<any>$(".owl-carousel")).owlCarousel({
    loop: true,
    dots: false,
    margin: 200,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(document.body).keyup((e) => {
    if (e.key == "ArrowLeft") {
      $(".masonry-carousel-box .owl-prev").trigger("click");
    } else if (e.key == "ArrowRight") {
      $(".masonry-carousel-box .owl-next").click();
    }
  });

  let masonryCarouselItem: any = $(".masonry-carousel-item");
  $(masonryCarouselItem).on("click", function () {
    $(this).closest(".masonry-carousel").removeClass("visible");
  });

  let masonryCarouselCounter: any = $(".masonry-carousel-counter");
  let masonryCarouselHeading: any = $(".masonry-carousel-heading");
  let masonryCarouselDesc: any = $(".masonry-carousel-description");
  let masonryCarouselImgDiv: any = $(".masonry-carousel-item>.img-div");
  $(masonryCarouselCounter).click((e) => {
    e.stopPropagation();
  });
  $(masonryCarouselHeading).click((e) => {
    e.stopPropagation();
  });
  $(masonryCarouselDesc).click((e) => {
    e.stopPropagation();
  });
  $(masonryCarouselImgDiv).click((e) => {
    e.stopPropagation();
  });

  // Pure TypeScript
  let recentWorksRow: any = document.querySelector(".recent-works-row");
  let recentWorksChildren: any = recentWorksRow.children;

  let masonryCarousel: any = document.querySelector(".masonry-carousel");
  let masonryCarouselBox: any = document.querySelector(".masonry-carousel-box");
  let masonryOwlStage: any = $(".masonry-carousel-box .owl-stage");

  for (let item of recentWorksChildren) {
    item.addEventListener("click", function (e: any) {
      let masonryImagesArr = (<any>Array).from(recentWorksRow.children);

      let masonryIndex: number = (<any>masonryImagesArr).findIndex(
        (item: any) => e.currentTarget == item
      );

      masonryCarousel.classList.add("visible");

      let allMasonryChildren: any = $(masonryOwlStage)
        .children(".owl-item")
        .not(".cloned");
      let selectedMasonryChild: any = $(masonryOwlStage)
        .children(".owl-item")
        .not(".cloned")[masonryIndex];

      $(allMasonryChildren).removeClass("active");
      $(selectedMasonryChild).addClass("active");
    });
  }
  // Pure TypeScript
  //Masonry Images Carousel
});
