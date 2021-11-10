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
  // (<any>$(".owl-carousel")).owlCarousel({
  //   loop: true,
  //   dots: false,
  //   margin: 200,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 1,
  //     },
  //   },
  // });

  let masonryCarouselItem: any = $(".masonry-carousel-item");

  $(document.body).keyup((e) => {
    if (e.key == "ArrowLeft") {
      // $(".masonry-carousel-box .owl-prev").trigger("click");

      let active: any = $(".masonry-carousel-item.active");
      let prev: any = $(active).prev(".masonry-carousel-item");

      $(active).removeClass("active");

      if ($(prev).length === 0) {
        let nextNow: any = $(".masonry-carousel-item:last-of-type");
        $(nextNow).addClass("active");
      } else {
        $(prev).addClass("active");
      }
    } else if (e.key == "ArrowRight") {
      let active: any = $(".masonry-carousel-item.active");
      let next: any = $(active).next(".masonry-carousel-item");

      $(active).removeClass("active");

      if ($(next).length === 0) {
        let nextNow: any = $(".masonry-carousel-item:first-of-type");
        $(nextNow).addClass("active");
      } else {
        $(next).addClass("active");
      }
    }
  });

  let masonryCarouselImgDiv: any = $(".masonry-carousel-item>.img-div");

  $(masonryCarouselImgDiv).on("click", function () {
    if ($(this).hasClass("grabed")) {
      $(this).removeClass("grabed");
      $(this)
        .css("cursor", "zoom-in")
        .css("transform", "scale(1)")
        .css("transition", "0.5s");
    } else {
      $(this).addClass("grabed");
      $(this)
        .css("cursor", "grab")
        .css("transform", "scale(1.4)")
        .css("transition", "0.5s");
    }
  });

  $(masonryCarouselImgDiv).mouseover((e: any) => {
    if ($(e.currentTarget).hasClass("grabed")) {
      $(e.currentTarget).css("cursor", "grab");
    } else {
      $(e.currentTarget).css("cursor", "zoom-in");
    }
  });

  $(masonryCarouselImgDiv).mousedown((e: any) => {
    setTimeout(() => {
      if ($(e.currentTarget).hasClass("grabed")) {
        $(e.currentTarget).css("cursor", "grabbing");
      }
    }, 1000);
  });
  $(masonryCarouselImgDiv).mouseup((e: any) => {
    setTimeout(() => {
      if ($(e.currentTarget).hasClass("grabed")) {
        $(e.currentTarget).css("cursor", "grab");
      }
    }, 1000);
  });

  $(masonryCarouselItem).on("click", function () {
    $(this).closest(".masonry-carousel").removeClass("visible");
  });

  let masonryCarouselCounter: any = $(".masonry-carousel-counter");
  let masonryCarouselHeading: any = $(".masonry-carousel-heading");
  let masonryCarouselDesc: any = $(".masonry-carousel-description");

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

  let progressBar: any = $(".progressbar");

  for (let item of recentWorksChildren) {
    item.addEventListener("click", function (e: any) {
      $(progressBar).addClass("progress");

      setTimeout(() => {
        $(progressBar).removeClass("progress");
      }, 700);

      let masonryImagesArr = (<any>Array).from(recentWorksRow.children);

      let masonryIndex: number = (<any>masonryImagesArr).findIndex(
        (item: any) => e.currentTarget == item
      );

      masonryCarousel.classList.add("visible");

      let allMasonryChildren: any = masonryCarouselItem;
      let selectedMasonryChild: any = $(masonryCarouselItem)[masonryIndex];

      // $(masonryCarousel)
      //   .find(".masonry-carousel-counter")
      //   .text(`${masonryIndex + 1} / ${masonryImagesArr.length}`);

      $(allMasonryChildren).removeClass("active");
      $(selectedMasonryChild).addClass("active");
    });
  }
  // Pure TypeScript
  //Masonry Images Carousel
});
