$(document).ready(function () {
  // Scroll To Top
  if (!$("#headerExist")[0]) {
    $("#navbarContainer").css("transition", "none");
    $("#navbarContainer").addClass("active");
  } else {
    $(".wrapper-container").attr("style", "padding-top: 0 !important");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 0 && $("#headerExist")[0]) {
        headerBottomScrollerChecker();
      } else {
        $("#navbarContainer").removeClass("active");
      }
    });

    $(window).on("load", function () {
      if ($(window).scrollTop() > 0) {
        $("#navbarContainer").addClass("active");
      }
    });
  }

  // Check scroll top position
  function headerBottomScrollerChecker() {
    var mainHeaderBottom = $("#headerExist").position().top + $("#headerExist").outerHeight(true);
    if ($(window).scrollTop() >= mainHeaderBottom) {
      $("#navbarContainer").addClass("active");
    } else {
      $("#navbarContainer").removeClass("active");
    }
  }

  // Read More
  $(function () {
    // $(".read-more-btn").on("click", function () {
    //   var content = $(this).parents(".read-more-parent").find(".read-more-content");
    //   content.text(content.attr("data-text"));
    //   $(this).css("display", "none");
    // });

    $(".read-more-content").each(function () {
      var length = $(this).attr("data-length");
      var len = $(this).text().length;
      // if (length > len) {
      //   $(this).next(".read-more-btn").css("display", "none");
      // }
      var strToInt = parseInt(length);
      $(this).attr("data-text", $(this).text());
      $(this).text($(this).text().substr(0, strToInt) + " ...");
    });
  });

  // Tabs
  $(".btn-tab").on("click", function () {
    var id = $(this).attr("id");
    $(`div[data-tab-target="#${id}"]`).addClass("active").siblings().removeClass("active");
    $(this).addClass("active").siblings().removeClass("active");
  });
});
