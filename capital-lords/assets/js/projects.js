const swiperThumbPhoto = new Swiper(".swiper-thumb-photos", {
  spaceBetween: 15,
  // touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  direction: "vertical",
  observer: true,
  observeParents: true,
  autoHeight: false,
  slidesPerView: "auto",
  loopedSlides: 3,
  freeMode: false,
  watchSlidesVisibility: true,
  slidesPerView: 3,
  navigation: {
    nextEl: "#mssNextPhotoBtn",
    prevEl: "#mssPrevPhotoBtn",
  },
  slideToClickedSlide: true,
  pagination: {
    el: ".photos-fraction-counter",
    type: "fraction",

    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        " " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
      direction: "horizontal",
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
      direction: "horizontal",
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
      direction: "horizontal",
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
      direction: "vertical",
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
      direction: "vertical",
    },
  },
});

swiperThumbPhoto.on("click", function () {
  $("#bgImageModalViewPhoto").attr(
    "src",
    $(".swiper-thumb-photos .swiper-slide.swiper-slide-active")
      .find("img")
      .attr("src")
  );
});

$("#mssNextPhotoBtn").on("click", function () {
  $("#bgImageModalViewPhoto").attr(
    "src",
    $(".swiper-thumb-photos .swiper-slide.swiper-slide-active")
      .next()
      .find("img")
      .attr("src")
  );
});

$("#mssPrevPhotoBtn").on("click", function () {
  $("#bgImageModalViewPhoto").attr(
    "src",
    $(".swiper-thumb-photos .swiper-slide.swiper-slide-active")
      .next()
      .find("img")
      .attr("src")
  );
});

const swiperThumbPlan = new Swiper(".swiper-thumb-plan", {
  spaceBetween: 15,
  // touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  direction: "vertical",
  observer: true,
  observeParents: true,
  autoHeight: false,
  slidesPerView: "auto",
  loopedSlides: 3,
  freeMode: false,
  watchSlidesVisibility: true,
  slidesPerView: 3,
  navigation: {
    nextEl: "#mssNextPlanBtn",
    prevEl: "#mssPrevPlanBtn",
  },
  slideToClickedSlide: true,
  pagination: {
    el: ".plan-fraction-counter",
    type: "fraction",

    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        " " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
      direction: "horizontal",
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
      direction: "horizontal",
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
      direction: "horizontal",
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
      direction: "vertical",
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
      direction: "vertical",
    },
  },
});

swiperThumbPlan.on("click", function () {
  $("#bgImageModalViewPlan").attr(
    "src",
    $(".swiper-thumb-plan .swiper-slide.swiper-slide-active")
      .find("img")
      .attr("src")
  );
});

$("#mssNextPlanBtn").on("click", function () {
  $("#bgImageModalViewPlan").attr(
    "src",
    $(".swiper-thumb-plan .swiper-slide.swiper-slide-active")
      .next()
      .find("img")
      .attr("src")
  );
});

$("#mssPrevPlanBtn").on("click", function () {
  $("#bgImageModalViewPlan").attr(
    "src",
    $(".swiper-thumb-plan .swiper-slide.swiper-slide-active")
      .next()
      .find("img")
      .attr("src")
  );
});

// Photos Modal
$(".msni-row-photo").on("click", function () {
  $("#bgImageModalViewPhoto").attr("src", $(this).find("img").attr("src"));
  $(this).addClass("active").siblings().removeClass("active");
});

$("#toggleVpBtn").on("click", function () {
  var vid = $("#videoPlayer").get(0);
  if (vid.paused) {
    vid.play();
    $(".vp-overlay").removeClass("active");
    $(this).find("img").attr("src", "assets/img/icons/pause.svg");
  } else {
    vid.pause();
    $(".vp-overlay").addClass("active");
    $(this).find("img").attr("src", "assets/img/icons/play.svg");
  }
});

$("#videoPlayer").bind("ended", function () {
  $(".vp-overlay").addClass("active");
  $("#toggleVpBtn").find("img").attr("src", "assets/img/icons/play.svg");
});

$(".md-tab-btn").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  var tab = $(this).attr("data-tab");
  $(".modal-tab").addClass("active");
  $(".wrapper-container").addClass("toggle-wrapper-active");
  $("#" + tab)
    .addClass("active")
    .siblings()
    .removeClass("active");
  $("#videoPlayer").get(0).pause();
  $(".vp-overlay").addClass("active");
  $("#toggleVpBtn").find("img").attr("src", "assets/img/icons/play.svg");
  if (tab == "planTab") {
    $(".mtaf-plan").addClass("active");
    $(".mtaf-photos").removeClass("active");
  } else if (tab == "photosTab") {
    $(".mtaf-plan").removeClass("active");
    $(".mtaf-photos").addClass("active");
  } else {
    $(".mtaf-plan").removeClass("active");
    $(".mtaf-photos").removeClass("active");
  }
  window.scrollTo(0, 0);
});

$("#exitModalTabBtn").on("click", function () {
  $(".modal-tab").removeClass("active");
  $(".wrapper-container").removeClass("toggle-wrapper-active");
  $("#videoPlayer").get(0).pause();
  $(".vp-overlay").addClass("active");
  $("#toggleVpBtn").find("img").attr("src", "assets/img/icons/play.svg");
});
