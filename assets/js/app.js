$(function () {
    //Loader
    var loaderRoot = $(".loader-root");
    setTimeout(function () {
        $(loaderRoot).removeClass("load");
    }, 1000);
    //Loader
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
        }
        else {
            $(scrollTop).removeClass("scroll-vis");
        }
        if (scroll > 25) {
            $(sidebarBtn).addClass("sidebar-scroll");
        }
        else {
            $(sidebarBtn).removeClass("sidebar-scroll");
        }
    });
    $(aside).click(function (e) {
        e.stopPropagation();
    });
    var asideLinksA = $(".aside-links a");
    $(asideLinksA).on("click", function (e) {
        setTimeout(function () {
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
    var welcomeIcon = $(".welcome-right-icons a");
    $(welcomeIcon).mouseover(function (e) {
        $(e.currentTarget).prev("h6.welcome-icon-h6").addClass("icon-vis");
    });
    $(welcomeIcon).mouseout(function (e) {
        $(e.currentTarget).prev("h6.welcome-icon-h6").removeClass("icon-vis");
    });
    $(".recent-works-row").masonry({
        itemSelector: ".recent-works-images-col",
    });
    var masonryCarouselItem = $(".masonry-carousel-item");
    $(document.body).keyup(function (e) {
        if (e.key == "ArrowLeft") {
            var active = $(".masonry-carousel-item.active");
            var prev = $(active).prev(".masonry-carousel-item");
            $(active).removeClass("active");
            if ($(prev).length === 0) {
                var nextNow = $(".masonry-carousel-item:last-of-type");
                $(nextNow).addClass("active");
            }
            else {
                $(prev).addClass("active");
            }
        }
        else if (e.key == "ArrowRight") {
            var active = $(".masonry-carousel-item.active");
            var next = $(active).next(".masonry-carousel-item");
            $(active).removeClass("active");
            if ($(next).length === 0) {
                var nextNow = $(".masonry-carousel-item:first-of-type");
                $(nextNow).addClass("active");
            }
            else {
                $(next).addClass("active");
            }
        }
    });
    var masonryCarouselZooFigure = $(".masonry-carousel-item>figure");
    //* jQuery Swipe Event
    $(masonryCarouselZooFigure).swipe(function (direction) {
        if (direction == "left") {
            var active = $(".masonry-carousel-item.active");
            var next = $(active).next(".masonry-carousel-item");
            $(active).removeClass("active");
            if ($(next).length === 0) {
                var nextNow = $(".masonry-carousel-item:first-of-type");
                $(nextNow).addClass("active");
            }
            else {
                $(next).addClass("active");
            }
        }
        else {
            var active = $(".masonry-carousel-item.active");
            var prev = $(active).prev(".masonry-carousel-item");
            $(active).removeClass("active");
            if ($(prev).length === 0) {
                var nextNow = $(".masonry-carousel-item:last-of-type");
                $(nextNow).addClass("active");
            }
            else {
                $(prev).addClass("active");
            }
        }
    }, {
        preventDefault: true,
        mouse: true,
        pen: true,
        distance: 50,
    });
    $(masonryCarouselZooFigure).ZooMove();
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
    var masonryCarouselCounter = $(".masonry-carousel-counter");
    var masonryCarouselHeading = $(".masonry-carousel-heading");
    var masonryCarouselDesc = $(".masonry-carousel-description");
    $(masonryCarouselCounter).click(function (e) {
        e.stopPropagation();
    });
    $(masonryCarouselHeading).click(function (e) {
        e.stopPropagation();
    });
    $(masonryCarouselDesc).click(function (e) {
        e.stopPropagation();
    });
    $(masonryCarouselZooFigure).click(function (e) {
        e.stopPropagation();
    });
    // Pure TypeScript
    var recentWorksRow = document.querySelector(".recent-works-row");
    var recentWorksChildren = recentWorksRow.children;
    var masonryCarousel = document.querySelector(".masonry-carousel");
    var progressBar = $(".progressbar");
    for (var _i = 0, recentWorksChildren_1 = recentWorksChildren; _i < recentWorksChildren_1.length; _i++) {
        var item = recentWorksChildren_1[_i];
        item.addEventListener("click", function (e) {
            $(progressBar).addClass("progress");
            setTimeout(function () {
                $(progressBar).removeClass("progress");
            }, 700);
            var masonryImagesArr = Array.from(recentWorksRow.children);
            var masonryIndex = masonryImagesArr.findIndex(function (item) { return e.currentTarget == item; });
            masonryCarousel.classList.add("visible");
            var allMasonryChildren = masonryCarouselItem;
            var selectedMasonryChild = $(masonryCarouselItem)[masonryIndex];
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
    $(".our-clients-logos-carousel").slick({
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
    $(".our-clients-clients-carousel").owlCarousel({
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
    var contactUsForm = $("#contact-us-form");
    var contactUsNameInput = $("#contact-us-form input[name=name]");
    var contactUsEmailInput = $("#contact-us-form input[name=email]");
    var contactUsTextareaInput = $("#contact-us-form textarea");
    $(contactUsForm).on("submit", function (e) {
        e.preventDefault();
        var emailPattern = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);
        if ($(contactUsNameInput).val() == "" ||
            $(contactUsNameInput).val().length == 0) {
            $(contactUsNameInput)
                .next(".contact-us-form-badge")
                .css("display", "block")
                .find(".contact-us-form-badge-content>span")
                .text("THIS FIELD IS REQUIRED.");
        }
        else if ($(contactUsNameInput).val().length == 1) {
            $(contactUsNameInput)
                .next(".contact-us-form-badge")
                .css("display", "block")
                .find(".contact-us-form-badge-content>span")
                .text("PLEASE ENTER AT LEAST 2 CHARACTERS.");
        }
        else {
            $(contactUsNameInput)
                .next(".contact-us-form-badge")
                .css("display", "none")
                .find(".contact-us-form-badge-content>span")
                .text("");
        }
        $(contactUsNameInput).keyup(function () {
            if ($(contactUsNameInput).val() == "" ||
                $(contactUsNameInput).val().length == 0) {
                $(contactUsNameInput)
                    .next(".contact-us-form-badge")
                    .css("display", "block")
                    .find(".contact-us-form-badge-content>span")
                    .text("THIS FIELD IS REQUIRED.");
            }
            else if ($(contactUsNameInput).val().length == 1) {
                $(contactUsNameInput)
                    .next(".contact-us-form-badge")
                    .css("display", "block")
                    .find(".contact-us-form-badge-content>span")
                    .text("PLEASE ENTER AT LEAST 2 CHARACTERS.");
            }
            else {
                $(contactUsNameInput)
                    .next(".contact-us-form-badge")
                    .css("display", "none")
                    .find(".contact-us-form-badge-content>span")
                    .text("");
            }
        });
        if ($(contactUsEmailInput).val() == "" ||
            $(contactUsEmailInput).val().length == 0) {
            $(contactUsEmailInput)
                .next(".contact-us-form-badge")
                .css("display", "block")
                .find(".contact-us-form-badge-content>span")
                .text("THIS FIELD IS REQUIRED.");
        }
        else if (!emailPattern.test($(contactUsEmailInput).val())) {
            $(contactUsEmailInput)
                .next(".contact-us-form-badge")
                .css("display", "block")
                .find(".contact-us-form-badge-content>span")
                .text("PLEASE ENTER A VALID EMAIL ADDRESS.");
        }
        else {
            $(contactUsEmailInput)
                .next(".contact-us-form-badge")
                .css("display", "none")
                .find(".contact-us-form-badge-content>span")
                .text("");
        }
        $(contactUsEmailInput).keyup(function () {
            if ($(contactUsEmailInput).val() == "" ||
                $(contactUsEmailInput).val().length == 0) {
                $(contactUsEmailInput)
                    .next(".contact-us-form-badge")
                    .css("display", "block")
                    .find(".contact-us-form-badge-content>span")
                    .text("THIS FIELD IS REQUIRED.");
            }
            else if (!emailPattern.test($(contactUsEmailInput).val())) {
                $(contactUsEmailInput)
                    .next(".contact-us-form-badge")
                    .css("display", "block")
                    .find(".contact-us-form-badge-content>span")
                    .text("PLEASE ENTER A VALID EMAIL ADDRESS.");
            }
            else {
                $(contactUsEmailInput)
                    .next(".contact-us-form-badge")
                    .css("display", "none")
                    .find(".contact-us-form-badge-content>span")
                    .text("");
            }
        });
        if ($(contactUsTextareaInput).val() == "" ||
            $(contactUsTextareaInput).val().length == 0) {
            $(contactUsTextareaInput)
                .next(".contact-us-form-badge")
                .css("display", "block")
                .find(".contact-us-form-badge-content>span")
                .text("THIS FIELD IS REQUIRED.");
        }
        else {
            $(contactUsTextareaInput)
                .next(".contact-us-form-badge")
                .css("display", "none")
                .find(".contact-us-form-badge-content>span")
                .text("");
        }
        $(contactUsTextareaInput).on("keyup", function () {
            if ($(contactUsTextareaInput).val() == "" ||
                $(contactUsTextareaInput).val().length == 0) {
                $(contactUsTextareaInput)
                    .next(".contact-us-form-badge")
                    .css("display", "block")
                    .find(".contact-us-form-badge-content>span")
                    .text("THIS FIELD IS REQUIRED.");
            }
            else {
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
    var footerInfoForm = $("#footer-info-form");
    $(footerInfoForm).submit(function (e) {
        e.preventDefault();
        $(".submit-msg").removeClass("d-none");
    });
    //Footer Info
});
