$(document).ready(() => {
  // Home Tabs
  $(".schedule-card-btn").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".sd-view-tab").addClass("active");
    $(".main-sd-view").removeClass("active");
  });

  $("#closeTabBtn").on("click", function () {
    $(".sd-view-tab").removeClass("active");
    $(".schedule-card-btn").removeClass("active");
    $(".main-sd-view").addClass("active");
  });

  // Toggle Menu
  $("#menuBtn").on("click", function () {
    if ($(this).hasClass("active")) {
      $("#navLinks").removeClass("active");
      $(this).removeClass("active");
    } else {
      $("#navLinks").addClass("active");
      $(this).addClass("active");
      $("#searchContainer").removeClass("active");
      $("#toggleSearchBtn").removeClass("active");
    }
  });
});

$(document).ready(function () {
  // Add Padding To Main Wrapper
  $("#wrapperContainer").css("paddingTop", $("#nav").innerHeight() + 30 + "px");

  // Calc Min Height Main Container
  var minusHeight = $("#footer").innerHeight();
  $("#wrapperContainer, .auth-container").css(
    "minHeight",
    "calc(100vh - " + minusHeight + "px)"
  );

  $(window).on("resize", function () {
    // Add Paadding to Main Wrapper
    $("#wrapperContainer").css(
      "paddingTop",
      $("#nav").innerHeight() + 30 + "px"
    );

    // Wrapper Container
    $("#wrapperContainer, .auth-container").css(
      "minHeight",
      "calc(100vh - " + minusHeight + "px)"
    );

    // Wrapper Search
    var minusNavbar = $("#nav").innerHeight();
    $("#searchContainer").css({
      top: minusNavbar + "px",
      minHeight: "calc(100% - " + minusNavbar + "px)",
    });
  });

  // Calc Search Size
  var minusNavbar = $("#nav").innerHeight();
  $("#searchContainer").css({
    top: minusNavbar + "px",
    minHeight: "calc(100% - " + minusNavbar + "px)",
  });

  // Toggle Search
  $("#toggleSearchBtn").on("click", function () {
    if ($(this).hasClass("active")) {
      $("#searchContainer").removeClass("active");
      $(this).removeClass("active");
    } else {
      $("#searchContainer").addClass("active");
      $(this).addClass("active");
      $("#navLinks").removeClass("active");
      $("#menuBtn").removeClass("active");
    }
  });

  if (localStorage.getItem("lang") == "en") {
    $("body").addClass("en-lang");
  }

  // Change Lang
  $("#changeLang").on("click", () => {
    if (localStorage.getItem("lang") == "ar") {
      localStorage.setItem("lang", "en");
      $("body").addClass("en-lang");
    } else {
      localStorage.setItem("lang", "ar");
      $("body").removeClass("en-lang");
    }
  });
});
