$(document).ready(function () {
  // Open Main Container
  $("#openContainerCheckbox").on("click", function () {
    $("#modalCheckboxContainer").slideToggle();
  });

  // Change Language
  function checkLangDir() {
    if (localStorage.getItem("lang") == "ar") {
      $("body").addClass("rtl");
    } else {
      $("body").removeClass("rtl");
    }
  }
  checkLangDir();

  $(
    "select#changeLang option[value=" + localStorage.getItem("lang") + "]"
  ).attr("selected", "selected");
  $("#changeLang").on("change", function () {
    var lang = $(this).val();
    // Set Lang
    localStorage.setItem("lang", lang);
    // console.log($(this).val());
    checkLangDir();
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
  // id: "slider12b",
  min: 0,
  max: 150000000,
  step: 50000,
  range: false,
  value: [25000000, 75000000],
  formatter: function (value) {
    console.log(value);
    $("#mfgdInputValPrice-1").text(value[0]);
    $("#mfgdInputValPrice-2").text(value[1]);
  },
});
sliderA.refresh({ useCurrentValue: true });

var sliderB = new Slider("#sliderArea", {
  // id: "slider12b",
  min: 0,
  max: 5000,
  range: true,
  value: [2000, 4000],
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

$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .parent()
      .find(".icon-minus")
      .removeClass("icon-minus")
      .addClass("icon-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .parent()
        .find(".icon-plus")
        .removeClass("icon-plus")
        .addClass("icon-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .parent()
        .find(".icon-minus")
        .removeClass("icon-minus")
        .addClass("icon-plus");
    });
});

// Read More Function
$(".read-more-btn").on("click", function () {
  var content = $(this).parents(".read-more-parent").find(".read-more-content");
  content.text(content.attr("data-text"));
  $(this).css("display", "none");
});

$(".read-more-content").each(function () {
  var length = $(this).attr("data-length");
  var strToInt = parseInt(length);
  $(this).attr("data-text", $(this).text());
  $(this).text($(this).text().substr(0, strToInt));
});

// Toggle Height Container
$("#toggleHeightSlide").on("click", function () {
  $("#toggleHeightSlideContainer").slideDown(500);
});
$("#closeSlideContainer").on("click", function () {
  $("#toggleHeightSlideContainer").slideUp(500);
});

// On Scroll
$(window).on("resize", function () {
  // Menu
  menuBodyHandler();
});

// Products Swiper
new Swiper("#productsSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.8,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// Change Lang
$(document).ready(function () {});
