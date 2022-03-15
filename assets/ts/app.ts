$(function () {
  //Loader
  let loaderRoot: any = $(".loader-root");

  setTimeout(() => {
    $(loaderRoot).removeClass("load");
  }, 1000);
  //Loader

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

  let asideLinksA: any = $(".aside-links a");

  $(asideLinksA).on("click", (e) => {
    setTimeout(() => {
      $(e.currentTarget).closest("aside").removeClass("show");
    }, 1000);
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

  let masonryCarouselItem: any = $(".masonry-carousel-item");

  $(document.body).keyup((e) => {
    if (e.key == "ArrowLeft") {
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

  let masonryCarouselZooFigure: any = $(".masonry-carousel-item>figure");

  //* jQuery Swipe Event
  (<any>$(masonryCarouselZooFigure)).swipe(
    function (direction: string) {
      if (direction == "left") {
        let active: any = $(".masonry-carousel-item.active");
        let next: any = $(active).next(".masonry-carousel-item");

        $(active).removeClass("active");

        if ($(next).length === 0) {
          let nextNow: any = $(".masonry-carousel-item:first-of-type");
          $(nextNow).addClass("active");
        } else {
          $(next).addClass("active");
        }
      } else {
        let active: any = $(".masonry-carousel-item.active");
        let prev: any = $(active).prev(".masonry-carousel-item");

        $(active).removeClass("active");

        if ($(prev).length === 0) {
          let nextNow: any = $(".masonry-carousel-item:last-of-type");
          $(nextNow).addClass("active");
        } else {
          $(prev).addClass("active");
        }
      }
    },
    {
      preventDefault: true,
      mouse: true,
      pen: true,
      distance: 50,
    }
  );

  (<any>$(masonryCarouselZooFigure)).ZooMove();

  $(masonryCarouselZooFigure).on("mouseover", function () {
    $(this).find(".zoo-img").css("cursor", "zoom-in");
  });

  //* Other Way (Native Scale Logic)
  // $(masonryCarouselImgDiv).on("click", function () {
  //   if ($(this).hasClass("grabed")) {
  //     $(this).removeClass("grabed");
  //     $(this)
  //       .css("cursor", "zoom-in !important")
  //       .css("transform", "scale(1) !important")
  //       .css("transition", "0.5s");
  //   } else {
  //     $(this).addClass("grabed");
  //     $(this)
  //       .css("cursor", "grab !important")
  //       .css("transform", "scale(1.4) !important")
  //       .css("transition", "0.5s");
  //   }
  // });

  // $(masonryCarouselImgDiv).mouseover((e: any) => {
  //   if ($(e.currentTarget).hasClass("grabed")) {
  //     $(e.currentTarget).css("cursor", "grab !important");
  //   } else {
  //     $(e.currentTarget).css("cursor", "zoom-in !important");
  //   }
  // });

  // $(masonryCarouselImgDiv).mousedown((e: any) => {
  //   setTimeout(() => {
  //     if ($(e.currentTarget).hasClass("grabed")) {
  //       $(e.currentTarget).css("cursor", "grabbing");
  //     }
  //   }, 1000);
  // });
  // $(masonryCarouselImgDiv).mouseup((e: any) => {
  //   setTimeout(() => {
  //     if ($(e.currentTarget).hasClass("grabed")) {
  //       $(e.currentTarget).css("cursor", "grab");
  //     }
  //   }, 1000);
  // });
  //* Other Way (Native Scale Logic)

  $(masonryCarouselItem).on("click", function () {
    $(this).closest(".masonry-carousel").removeClass("visible");
    $(document.body).css("overflow", "visible");
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
  $(masonryCarouselZooFigure).click((e) => {
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

      $(document.body).css("overflow", "hidden");
      $(allMasonryChildren).removeClass("active");
      $(selectedMasonryChild).addClass("active");
    });
  }
  // Pure TypeScript
  //Masonry Images Carousel

  //Our Clients Logos Carousel (Slick)
  (<any>$(".our-clients-logos-carousel")).slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  });

  //Our Clients Clients Carousel (OwlCarousel)
  (<any>$(".our-clients-clients-carousel")).owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='bi bi-arrow-left-short'></i>",
      "<i class='bi bi-arrow-right-short'></i>",
    ],
    dots: true,
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

  //Contact Us Form Side Edits
  let contactUsForm: any = $("#contact-us-form");
  let contactUsNameInput: any = $("#contact-us-form input[name=name]");
  let contactUsEmailInput: any = $("#contact-us-form input[name=email]");
  let contactUsTextareaInput: any = $("#contact-us-form textarea");

  $(contactUsForm).on("submit", (e) => {
    e.preventDefault();

    let emailPattern: RegExp = new RegExp(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    );

    if (
      $(contactUsNameInput).val() == "" ||
      ($(contactUsNameInput).val() as string).length == 0
    ) {
      $(contactUsNameInput)
        .next(".contact-us-form-badge")
        .css("display", "block")
        .find(".contact-us-form-badge-content>span")
        .text("THIS FIELD IS REQUIRED.");
    } else if (($(contactUsNameInput).val() as string).length == 1) {
      $(contactUsNameInput)
        .next(".contact-us-form-badge")
        .css("display", "block")
        .find(".contact-us-form-badge-content>span")
        .text("PLEASE ENTER AT LEAST 2 CHARACTERS.");
    } else {
      $(contactUsNameInput)
        .next(".contact-us-form-badge")
        .css("display", "none")
        .find(".contact-us-form-badge-content>span")
        .text("");
    }

    $(contactUsNameInput).keyup(() => {
      if (
        $(contactUsNameInput).val() == "" ||
        ($(contactUsNameInput).val() as string).length == 0
      ) {
        $(contactUsNameInput)
          .next(".contact-us-form-badge")
          .css("display", "block")
          .find(".contact-us-form-badge-content>span")
          .text("THIS FIELD IS REQUIRED.");
      } else if (($(contactUsNameInput).val() as string).length == 1) {
        $(contactUsNameInput)
          .next(".contact-us-form-badge")
          .css("display", "block")
          .find(".contact-us-form-badge-content>span")
          .text("PLEASE ENTER AT LEAST 2 CHARACTERS.");
      } else {
        $(contactUsNameInput)
          .next(".contact-us-form-badge")
          .css("display", "none")
          .find(".contact-us-form-badge-content>span")
          .text("");
      }
    });

    if (
      $(contactUsEmailInput).val() == "" ||
      ($(contactUsEmailInput).val() as string).length == 0
    ) {
      $(contactUsEmailInput)
        .next(".contact-us-form-badge")
        .css("display", "block")
        .find(".contact-us-form-badge-content>span")
        .text("THIS FIELD IS REQUIRED.");
    } else if (!emailPattern.test(<any>$(contactUsEmailInput).val())) {
      $(contactUsEmailInput)
        .next(".contact-us-form-badge")
        .css("display", "block")
        .find(".contact-us-form-badge-content>span")
        .text("PLEASE ENTER A VALID EMAIL ADDRESS.");
    } else {
      $(contactUsEmailInput)
        .next(".contact-us-form-badge")
        .css("display", "none")
        .find(".contact-us-form-badge-content>span")
        .text("");
    }

    $(contactUsEmailInput).keyup(() => {
      if (
        $(contactUsEmailInput).val() == "" ||
        ($(contactUsEmailInput).val() as string).length == 0
      ) {
        $(contactUsEmailInput)
          .next(".contact-us-form-badge")
          .css("display", "block")
          .find(".contact-us-form-badge-content>span")
          .text("THIS FIELD IS REQUIRED.");
      } else if (!emailPattern.test(<any>$(contactUsEmailInput).val())) {
        $(contactUsEmailInput)
          .next(".contact-us-form-badge")
          .css("display", "block")
          .find(".contact-us-form-badge-content>span")
          .text("PLEASE ENTER A VALID EMAIL ADDRESS.");
      } else {
        $(contactUsEmailInput)
          .next(".contact-us-form-badge")
          .css("display", "none")
          .find(".contact-us-form-badge-content>span")
          .text("");
      }
    });

    if (
      $(contactUsTextareaInput).val() == "" ||
      ($(contactUsTextareaInput).val() as string).length == 0
    ) {
      $(contactUsTextareaInput)
        .next(".contact-us-form-badge")
        .css("display", "block")
        .find(".contact-us-form-badge-content>span")
        .text("THIS FIELD IS REQUIRED.");
    } else {
      $(contactUsTextareaInput)
        .next(".contact-us-form-badge")
        .css("display", "none")
        .find(".contact-us-form-badge-content>span")
        .text("");
    }

    $(contactUsTextareaInput).on("keyup", function () {
      if (
        $(contactUsTextareaInput).val() == "" ||
        ($(contactUsTextareaInput).val() as string).length == 0
      ) {
        $(contactUsTextareaInput)
          .next(".contact-us-form-badge")
          .css("display", "block")
          .find(".contact-us-form-badge-content>span")
          .text("THIS FIELD IS REQUIRED.");
      } else {
        $(contactUsTextareaInput)
          .next(".contact-us-form-badge")
          .css("display", "none")
          .find(".contact-us-form-badge-content>span")
          .text("");
      }
    });
  });
  //Contact Us Form Side Edits

  //Footer Info
  let footerInfoForm: any = $("#footer-info-form");

  $(footerInfoForm).submit(function (e) {
    e.preventDefault();

    $(".submit-msg").removeClass("d-none");
  });
  //Footer Info
});
