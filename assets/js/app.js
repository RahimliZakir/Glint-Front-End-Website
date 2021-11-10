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
    var masonryCarouselItem = $(".masonry-carousel-item");
    $(document.body).keyup(function (e) {
        if (e.key == "ArrowLeft") {
            // $(".masonry-carousel-box .owl-prev").trigger("click");
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
    var masonryCarouselImgDiv = $(".masonry-carousel-item>.img-div");
    $(masonryCarouselImgDiv).on("click", function () {
        if ($(this).hasClass("grabed")) {
            $(this).removeClass("grabed");
            $(this)
                .css("cursor", "zoom-in")
                .css("transform", "scale(1)")
                .css("transition", "0.5s");
        }
        else {
            $(this).addClass("grabed");
            $(this)
                .css("cursor", "grab")
                .css("transform", "scale(1.4)")
                .css("transition", "0.5s");
        }
    });
    $(masonryCarouselImgDiv).mouseover(function (e) {
        if ($(e.currentTarget).hasClass("grabed")) {
            $(e.currentTarget).css("cursor", "grab");
        }
        else {
            $(e.currentTarget).css("cursor", "zoom-in");
        }
    });
    $(masonryCarouselImgDiv).mousedown(function (e) {
        setTimeout(function () {
            if ($(e.currentTarget).hasClass("grabed")) {
                $(e.currentTarget).css("cursor", "grabbing");
            }
        }, 1000);
    });
    $(masonryCarouselImgDiv).mouseup(function (e) {
        setTimeout(function () {
            if ($(e.currentTarget).hasClass("grabed")) {
                $(e.currentTarget).css("cursor", "grab");
            }
        }, 1000);
    });
    $(masonryCarouselItem).on("click", function () {
        $(this).closest(".masonry-carousel").removeClass("visible");
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
    $(masonryCarouselImgDiv).click(function (e) {
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
            $(allMasonryChildren).removeClass("active");
            $(selectedMasonryChild).addClass("active");
        });
    }
    // Pure TypeScript
    //Masonry Images Carousel
});
