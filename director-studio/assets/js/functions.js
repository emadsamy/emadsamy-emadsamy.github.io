$(document).ready(function () {
  // Toggle Menu
  $("#modelMenuBar").on("click", function () {
    if ($(this).hasClass("active")) {
      $("#navMenuLinks").removeClass("active");
      $(this).removeClass("active");
      $("body").css("overflow-y", "auto");

      // Check Scroll
      headerBottomScrollerChecker();
    } else {
      $("#navMenuLinks").addClass("active");
      $(this).addClass("active");
      $("body").css("overflow-y", "hidden");
      $("#nav").removeClass("active");
    }
  });
});

$(document).ready(function () {
  // Add Padding To Main Wrapper
  // $("#wrapperContainer").css("paddingTop", $("#nav").innerHeight() + "px");

  // Calc Min Height Main Container
  var minusHeight = $("#footer").innerHeight();
  $("#wrapperContainer, .auth-container").css(
    "minHeight",
    "calc(100vh - " + minusHeight + "px)"
  );
});

$(document).ready(() => {
  // Scroll To Top
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0 && $("#mainHeader")[0]) {
      $(".transition-title").addClass("active");
      headerBottomScrollerChecker();
    } else {
      $(".transition-title").removeClass("active");
      $("#nav").removeClass("active");
    }
  });
  $(window).on("load", function () {
    if ($(window).scrollTop() > 0) {
      // && $(window).scrollTop() >= mainHeaderBottom
      setTimeout(function () {
        $(".transition-title").removeClass("active");
      }, 200);
      $("#nav").addClass("active");
    }
  });

  // Scroll To Top
  $("#homeScrollBtn").on("click", () => {
    $("html, body").stop().animate({ scrollTop: 0 }, 1600);
  });

  // Toggle Nav View
  $(".nav-sm-link").on("mouseover", function () {
    var image = $(this).attr("data-view");
    $("#navMenuView").css("backgroundImage", "url(" + image + ")");
    $("#navMenuView").addClass("active");
  });

  // Hidden Nav View
  $(".nav-sm-link").on("mouseout", function () {
    $("#navMenuView").removeClass("active");
  });

  // Mol Feature Slider
  $(function () {
    $("#molSlider > div:gt(0)").hide();

    setInterval(function () {
      $("#molSlider > div:first")
        .fadeOut(800)
        .next()
        .fadeIn(800)
        .end()
        .appendTo("#molSlider");
    }, 4000);
  });

  // Lazy Slider
  $(function () {
    $("#lazySlider > div:gt(0)").hide();

    setInterval(function () {
      $("#lazySlider > div:first")
        .fadeOut(0)
        .next()
        .fadeIn(0)
        .end()
        .appendTo("#lazySlider");
    }, 1200);
  });
});

// Callback IF Condition Header Bottom
function headerBottomScrollerChecker() {
  var mainHeaderBottom =
    $("#mainHeader").position().top + $("#mainHeader").outerHeight(true);
  if ($(window).scrollTop() >= mainHeaderBottom) {
    $("#nav").addClass("active");
    $(".transition-title").removeClass("active");
  } else {
    $("#nav").removeClass("active");
  }
}
