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
    $(".owl-carousel").owlCarousel({
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
    $(document.body).keyup(function (e) {
        if (e.key == "ArrowLeft") {
            $(".masonry-carousel-box .owl-prev").trigger("click");
        }
        else if (e.key == "ArrowRight") {
            $(".masonry-carousel-box .owl-next").click();
        }
    });
    var masonryCarouselItem = $(".masonry-carousel-item");
    $(masonryCarouselItem).on("click", function () {
        $(this).closest(".masonry-carousel").removeClass("visible");
    });
    var masonryCarouselCounter = $(".masonry-carousel-counter");
    var masonryCarouselHeading = $(".masonry-carousel-heading");
    var masonryCarouselDesc = $(".masonry-carousel-description");
    var masonryCarouselImgDiv = $(".masonry-carousel-item>.img-div");
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
    var masonryCarouselBox = document.querySelector(".masonry-carousel-box");
    var masonryOwlStage = $(".masonry-carousel-box .owl-stage");
    for (var _i = 0, recentWorksChildren_1 = recentWorksChildren; _i < recentWorksChildren_1.length; _i++) {
        var item = recentWorksChildren_1[_i];
        item.addEventListener("click", function (e) {
            var masonryImagesArr = Array.from(recentWorksRow.children);
            var masonryIndex = masonryImagesArr.findIndex(function (item) { return e.currentTarget == item; });
            masonryCarousel.classList.add("visible");
            var allMasonryChildren = $(masonryOwlStage)
                .children(".owl-item")
                .not(".cloned");
            var selectedMasonryChild = $(masonryOwlStage)
                .children(".owl-item")
                .not(".cloned")[masonryIndex];
            $(allMasonryChildren).removeClass("active");
            $(selectedMasonryChild).addClass("active");
        });
    }
    // Pure TypeScript
    //Masonry Images Carousel
});
