$(document).ready(function () {
  // Open Main Container
  $("#property-type-modal").on("change", function () {
    $("#modalCheckboxContainer").slideDown();
  });

  // Language
  $(function () {
    // Get Page Name
    // var href = document.location.href;
    // var lastPathSegment = href.substr(href.lastIndexOf("/") + 1);

    // // Get Page Lang ar
    // var index = document.location.href.lastIndexOf("/") + 1;
    // var filenameWithExtension = document.location.href.substr(index);
    // var filename = filenameWithExtension.split(".")[0]; // Get File Name Without Extension
    // var checkPageLang = filename.substr(filename.length - 2);
    // var removeLatestAr = filename.substring(0, filename.length - 3);

    // function checkPageUrlLang() {
    //   if (localStorage.getItem("lang") == "en" && checkPageLang == "ar") {
    //     window.location.href = "index.html";
    //   }
    // }
    // checkPageUrlLang();

    function checkLangDir() {
      // if (localStorage.getItem("lang") == "ar") {
      //   $("body").addClass("rtl");
      // } else {
      //   $("body").removeClass("rtl");
      // }
    }
    checkLangDir();

    // function redirectToPageLang() {
    //   if (localStorage.getItem("lang") == "ar") {
    //     window.location.href = `${filename}_ar.html`;
    //   } else {
    //     window.location.href = `${removeLatestAr}.html`;
    //   }
    // }

    $(
      "select#changeLang option[value=" + localStorage.getItem("lang") + "]"
    ).attr("selected", "selected");
    $("#changeLang").on("change", function () {
      var lang = $(this).val();
      // Set Lang
      localStorage.setItem("lang", lang);
      // redirectToPageLang();
      checkLangDir();
    });
    new SlimSelect({
      select: "#changeLang",
      showSearch: false,
      hideSelectedOption: true,
      // selected: localStorage.getItem("lang"),
      // disabled: false,
      // selected: false,
      // allowDeselectOption: false,
      // hideSelectedOption: true,
      onChange: (info) => {
        console.log(info.value);
      },
    });
  });

  // Calculate Cards
  $(function () {
    var counter = 0;
    if ($(window).width() < 576) {
      counter = 6;
    } else {
      counter = 12;
    }

    $("#moreProjects").on("click", function () {
      if ($(window).width() < 576) {
        counter = counter + 6;
      } else {
        counter += 12;
      }
      generateMore(counter);
    });

    function generateMore(counter) {
      $(`.projects-grid .project-card`).attr("style", "display: none");
      for (let x = 0; x <= counter; x++) {
        $(`.projects-grid .project-card:nth-of-type(${x})`).attr(
          "style",
          "display: flex"
        );
      }
    }
    generateMore(counter);
  });
});

$(function () {
  // Read More Function
  $(".read-more-btn").on("click", function () {
    var content = $(this)
      .parents(".read-more-parent")
      .find(".read-more-content");
    content.text(content.attr("data-text"));
    $(this).css("display", "none");
  });

  $(".read-more-content").each(function () {
    var length = $(this).attr("data-length");
    var strToInt = parseInt(length);
    $(this).attr("data-text", $(this).text());
    $(this).text($(this).text().substr(0, strToInt));
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

// Calc Nav height to set padding to body
function calcNavHeight() {
  if ($("body").find("#headerScroller").length == 0) {
    $("body").css("paddingTop", $("#nav").innerHeight() + "px");
    $("#nav").addClass("active-page");
  }
}
calcNavHeight();

$(".js-range-slider-price").ionRangeSlider({
  onStart: function (data) {
    $("#mfgdInputValPrice-1").text(data.from);
    $("#mfgdInputValPrice-2").text(data.to);
  },
  onChange: function (data) {
    $("#mfgdInputValPrice-1").text(data.from);
    $("#mfgdInputValPrice-2").text(data.to);
  },
  onUpdate: function (data) {
    $("#mfgdInputValPrice-1").text(data.from);
    $("#mfgdInputValPrice-2").text(data.to);
  },
});

$(".js-range-slider-meter").ionRangeSlider({
  onStart: function (data) {
    $("#mfgdInputValArea-1").text(data.from);
    $("#mfgdInputValArea-2").text(data.to);
  },
  onChange: function (data) {
    $("#mfgdInputValArea-1").text(data.from);
    $("#mfgdInputValArea-2").text(data.to);
  },
  onUpdate: function (data) {
    $("#mfgdInputValArea-1").text(data.from);
    $("#mfgdInputValArea-2").text(data.to);
  },
});

$("#clearAll").on("click", function () {
  let rangePrice = $(".js-range-slider-price").data("ionRangeSlider");
  let rangeMeter = $(".js-range-slider-meter").data("ionRangeSlider");
  rangePrice.reset();
  rangeMeter.reset();
  $("#modalCheckboxContainer").slideUp(300);
  $(".multiple-checkbox-container").slideUp(300);
  $(".input-checkbox").prop("checked", false);
});

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

// Toggle Height Container
$("#toggleContact").on("click", function () {
  $("#toggleContactContainer").slideDown(500);
});
$("#closeContactContainer").on("click", function () {
  $("#toggleContactContainer").slideUp(500);
});

// On Scroll
$(window).on("resize", function () {
  // Menu
  menuBodyHandler();

  // Calc Nav Height
  calcNavHeight();
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

// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Selectz
$(".selected-title").on("click", function () {
  $(".selectz-list").slideUp();
  $(".icon-chevron-rotate").removeClass("active");
  if ($(this).next(".selectz-list").css("display") != "block") {
    $(this).next(".selectz-list").slideDown();
    $(this).find(".icon-chevron-rotate").addClass("active");
  } else {
    $(this).next(".selectz-list").slideUp();
    $(this).find(".icon-chevron-rotate").removeClass("active");
  }
});
$(document).click(function (e) {
  var container = $(".selectz-container");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".selectz-list").slideUp();
    container.find(".icon-chevron-rotate").removeClass("active");
  }
});
$(".selectz-row").on("click", function () {
  $(this)
    .parents(".selectz-content")
    .find(".selected-input")
    .val($(this).attr("data-value"));
  $(this)
    .parents(".selectz-content")
    .find(".selected-title .title")
    .text($(this).text());
  $(this).parent(".selectz-list").slideUp();
  $(this)
    .parents(".selectz-content")
    .find(".icon-chevron-rotate")
    .removeClass("active");
});

/* Slim Select */

// Modal
new SlimSelect({
  select: "#locations-modal",
  showSearch: false,
  onChange: (info) => {
    console.log(info.value);
  },
});

new SlimSelect({
  select: "#property-type-modal",
  showSearch: false,
  onChange: (info) => {
    console.log(info.value);
  },
});

// Contact Telephone Keys
new SlimSelect({
  select: "#tel-keys",
  showSearch: false,
  onChange: (info) => {
    console.log(info.value);
  },
});

/* Slim Select */
