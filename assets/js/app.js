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
        dots: false,
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
    var contactUsInputs = $("#contact-us-form input[type=text]");
    var contactUsTextarea = $("#contact-us-form textarea");
    var contactUsBtn = $("#contact-us-form input[type=submit]");
    $(contactUsForm).on("submit", function (e) {
        e.preventDefault();
        var fields = $(e.currentTarget).find("input:not([type=submit]):not([name=subject]), textarea");
        console.log(fields);
        var emailPattern = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);
        $(fields).filter(function (index, item) {
            if ($(item).val().length == 0 || $(item).val() == "") {
                $(item)
                    .next(".contact-us-form-badge")
                    .val("THIS FIELD IS REQUIRED.")
                    .css("display", "block");
            }
            else if ($(item).val().length == 1 &&
                $(item).is("input[type=text]")) {
                $(item)
                    .next(".contact-us-form-badge")
                    .val("PLEASE ENTER AT LEAST 2 CHARACTERS.");
            }
            else if ($(item).val().length > 0 &&
                !emailPattern.test($(item).val()) &&
                $(item).is("input[type=email]")) {
                $(item)
                    .next(".contact-us-form-badge")
                    .val("PLEASE ENTER A VALID EMAIL ADDRESS.");
            }
            else {
                $(item).next(".contact-us-form-badge").css("display", "none");
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
