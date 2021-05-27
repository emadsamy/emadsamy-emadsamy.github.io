$(document).ready(function () {
  // Open Main Container
  $("#property-type-modal").on("change", function () {
    $("#modalCheckboxContainer").slideDown();
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $("#navigationBar").addClass("active");
  } else {
    $("#navigationBar").removeClass("active");
  }
});

// Header Scroller
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 0 && $("#headerScroller")[0]) {
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

// Flexable Menu Body
function menuBodyHandler() {
  var top = $("#menuTop").innerHeight();
  var bottom = $("#menuBottom").innerHeight();
  $("#menuBody").css("height", `calc(100vh - ${top + bottom}px)`);
}

// Check All Inputs
$(".checkAll").click(function () {
  if ($(this).find(".input-checkbox").prop("checked")) {
    $(this)
      .parents(".modal-checkbox-row")
      .find(".multiple-checkbox-container input")
      .prop("checked", true);
    // $('#checkboxContainerAprtment input').prop('checked', true);
  } else {
    // $('#checkboxContainerAprtment input').prop('checked', false);
    $(this)
      .parents(".modal-checkbox-row")
      .find(".multiple-checkbox-container input")
      .prop("checked", false);
  }
});
// On Scroll
// $(window).on("resize", function () {
//   // Menu
//   menuBodyHandler();

//   // Calc Nav Height
//   calcNavHeight();
// });
