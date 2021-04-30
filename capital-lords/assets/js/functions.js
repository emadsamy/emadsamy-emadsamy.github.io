$(document).ready(function () {
  // Open Main Container
  $("#openContainerCheckbox").on("click", function () {
    $("#modalCheckboxContainer").slideToggle();
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
// Scroll To Top
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

// Callback IF Condition Header Bottom
function headerBottomScrollerChecker() {
  var mainHeaderBottom =
    $("#headerScroller").position().top +
    $("#headerScroller").outerHeight(true);
  if ($(window).scrollTop() >= mainHeaderBottom) {
    $("#nav").addClass("active");
    $(".transition-title").removeClass("active");
  } else {
    $("#nav").removeClass("active");
  }
}

// Flexable Menu Body
function menuBodyHandler() {
  var top = $("#menuTop").innerHeight();
  var bottom = $("#menuBottom").innerHeight();
  $("#menuBody").css("height", `calc(100vh - ${top + bottom}px)`);
}

$(function () {
  $("#openMenu").on("click", function () {
    $("#menuContainer").fadeIn(600);
    menuBodyHandler();
  });

  $("#closeMenu").on("click", function () {
    $("#menuContainer").fadeOut(600);
  });
});

// Check if header not exist
$(function () {
  if ($("body").find("#headerScroller").length == 0) {
    $("body").css("paddingTop", $("#nav").innerHeight() + "px");
    $("#nav").addClass("active-page");
  }
});

// Selectbox
$(function () {
  $("select").selectric({
    maxHeight: 110,
    arrowButtonMarkup:
      '<div class="select-chevron-div"><span class="icon-chevron-down select-chevron icon"></span></div>',
    onOpen: function () {
      $(".selectric-focus").find(".select-chevron").addClass("active");
    },
    onClose: function () {
      $(".selectric-focus").find(".select-chevron").removeClass("active");
    },
  });
});

// Slider Range
var sliderA = new Slider("#sliderPrice", {
  id: "slider12b",
  min: 10000,
  max: 1000000,
  range: true,
  value: [250000, 750000],
  formatter: function (value) {
    console.log(value);
    $("#mfgdInputValPrice-1").text(value[0]);
    $("#mfgdInputValPrice-2").text(value[1]);
  },
});
sliderA.refresh({ useCurrentValue: true });

var sliderB = new Slider("#sliderArea", {
  id: "slider12b",
  min: 1,
  max: 1500,
  range: true,
  value: [400, 800],
  formatter: function (value) {
    console.log(value);
    $("#mfgdInputValArea-1").text(value[0]);
    $("#mfgdInputValArea-2").text(value[1]);
  },
});
sliderB.refresh({ useCurrentValue: true });

// Open Multiple Checkbox Container In Modal
$(".checkbox-toggle-btn").on("click", function () {
  $(this)
    .parents(".checkbox-toggle-header")
    .next(".multiple-checkbox-container")
    .slideToggle(300);
});

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
