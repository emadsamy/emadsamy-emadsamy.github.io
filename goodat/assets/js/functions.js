$(document).ready(function () {
    

  // International Telephone Validation
  $(function () {
    var input = document.querySelector("#phoneNumber");
    window.intlTelInput(input, {
      separateDialCode: true,
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.0.3/js/utils.js",
      initialCountry: "ie",
    });

    data.forEach((el, i) => {
      $(`.iti__flag.iti__${el.code}`).attr('style', `background-image: url(assets/img/flags/${el.code}.svg); background-position: center;
      background-size: cover;`);
    });

    $(".iti__country").on('click', function () {
      var dial = $(this).attr('data-dial-code');
      var key = $(this).attr('data-country-code');
      $(".iti__selected-dial-code").text('+' + dial);
      $(".iti__selected-flag .iti__flag").attr('style', `background-image: url(assets/img/flags/${key}.svg); background-position: center;background-size: cover;`);
      
    });
  });

  // Favourite Cart (Like & Unlike) System
  $(function () {
    $(".ns-like").on('click', function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  }); 

  // Tabs Inside Tabs
  $(function () {
    $(function () {
      $(".tt-btn").on('click', function () {
        var id = $(this).attr("id");
        $(this).addClass('active').siblings().removeClass("active");
        $(`div[data-tab-target="#${id}"]`).addClass("active").siblings().removeClass("active");
        // $(`div[data-tab-target="#${id}"]`)
      });
    });

    $(function () {
      $(".stc-btn").on('click', function () {
        var id = $(this).attr("id");
        $(this).addClass('active').siblings().removeClass("active");
        // $(`div[data-tab-target="#${id}"]`).addClass("active").siblings().removeClass("active");
      });
    });
  });

  // Show (+ , -) in Accordion
  $(function () {
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

  // Range Slider Search
  $(function () {
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

  });

  // Read More
  $(function () {
    $(".read-more-btn").on("click", function () {
      var content = $(this)
        .parents(".read-more-parent")
        .find(".read-more-content");
      content.text(content.attr("data-text"));
      $(this).css("display", "none");
    });
  
    $(".read-more-content").each(function () {
      var length = $(this).attr("data-length");
      var len = $(this).text().length;
      if (length > len) {
        $(this).next('.read-more-btn').css("display", "none");
      }
      var strToInt = parseInt(length);
      $(this).attr("data-text", $(this).text());
      $(this).text($(this).text().substr(0, strToInt));
    });
  });

  // Calculate Cards
  $(function () {
    // The number of comments you want to show in start
    var counter = 0;
    if ($(window).width() < 576) {
      counter = 5;
    } else {
      counter = 5;
    }

    // The number of comments you want to generate
    $("#viewMoreBtn").on("click", function () {
      
      if ($(window).width() < 576) {
        counter = counter + 1;
      } else {
        counter += 1;
      }
      generateMore(counter);
    });

    function generateMore(counter) {
      $(`.vpr-comment-row`).attr("style", "display: none");
      for (let x = 0; x <= counter; x++) {
        $(`.vpr-comment-row:nth-of-type(${x})`).attr(
          "style",
          "display: block"
        );
      }
      checkElementsShowen();
    }
    generateMore(counter);

    function checkElementsShowen() {
      if ($(".vpr-comment-row").last().css('display') == 'block') {
        $("#viewMoreBtn").css('display', ' none');  
      }
    }
  });

  // All Countries
  $(function () {
    var $select = $('#country-selectize').selectize({
      maxItems: 1,
      labelField: 'name',
      valueField: 'code',
      searchField: false, // ['name', 'code']
      options: data,
      preload: true,
      persist: false,
      render: {
          item: function(item, escape) {
              return "<div><img class='img-selected-flag' src='assets/img/flags/" + escape(item.code) + ".svg' /> &nbsp;" + escape(item.name) + "</div>";
          },
          option: function(item, escape) {
            return "<div><img class='img-option-flag' src='assets/img/flags/" + escape(item.code) + ".svg' /> &nbsp;" + escape(item.name) + "</div>";
          }
      },
    });
    $select[0].selectize.setValue("ie");

  });

});


// $(window).scroll(function () {
//   if ($(window).scrollTop() > 0) {
//     $("#navigationBar").addClass("active");
//   } else {
//     $("#navigationBar").removeClass("active");
//   }
// });

// // Header Scroller
// $(window).on("scroll", function () {
//   if ($(window).scrollTop() > 0 && $("#headerScroller")[0]) {
//     $(".transition-title").addClass("active");
//     headerBottomScrollerChecker();
//   } else {
//     $(".transition-title").removeClass("active");
//     $("#nav").removeClass("active");
//   }
// });
// $(window).on("load", function () {
//   if ($(window).scrollTop() > 0) {
//     // && $(window).scrollTop() >= mainHeaderBottom
//     setTimeout(function () {
//       $(".transition-title").removeClass("active");
//     }, 200);
//     $("#nav").addClass("active");
//   }
// });

// // Callback IF Condition Header Bottom
// function headerBottomScrollerChecker() {
//   var mainHeaderBottom =
//     $("#headerScroller").position().top +
//     $("#headerScroller").outerHeight(true);
//   if ($(window).scrollTop() >= mainHeaderBottom) {
//     $("#nav").addClass("active");
//     $(".transition-title").removeClass("active");
//   } else {
//     $("#nav").removeClass("active");
//   }
// }

// // Flexable Menu Body
// function menuBodyHandler() {
//   var top = $("#menuTop").innerHeight();
//   var bottom = $("#menuBottom").innerHeight();
//   $("#menuBody").css("height", `calc(100vh - ${top + bottom}px)`);
// }

// $(function () {
//   $("#openMenu").on("click", function () {
//     $("#menuContainer").fadeIn(600);
//     menuBodyHandler();
//   });

//   $("#closeMenu").on("click", function () {
//     $("#menuContainer").fadeOut(600);
//   });
// });

// Calc Nav height to set padding to body
// function calcNavHeight() {
//   if ($("body").find("#headerScroller").length == 0) {
//     $("body").css("paddingTop", $("#nav").innerHeight() + "px");
//     $("#nav").addClass("active-page");
//   }
// }
// calcNavHeight();

// Selectbox
// $(function () {
//   $("select").selectric({
//     maxHeight: 110,
//     arrowButtonMarkup:
//       '<div class="select-chevron-div"><span class="icon-chevron-down select-chevron icon"></span></div>',
//     onOpen: function () {
//       $(".selectric-focus").find(".select-chevron").addClass("active");
//     },
//     onClose: function () {
//       $(".selectric-focus").find(".select-chevron").removeClass("active");
//     },
//   });
// });

// $(".js-range-slider-price").ionRangeSlider({
//   onStart: function (data) {
//     $("#mfgdInputValPrice-1").text(data.from);
//     $("#mfgdInputValPrice-2").text(data.to);
//   },
//   onChange: function (data) {
//     $("#mfgdInputValPrice-1").text(data.from);
//     $("#mfgdInputValPrice-2").text(data.to);
//   },
//   onUpdate: function (data) {
//     $("#mfgdInputValPrice-1").text(data.from);
//     $("#mfgdInputValPrice-2").text(data.to);
//   },
// });

// $(".js-range-slider-meter").ionRangeSlider({
//   onStart: function (data) {
//     $("#mfgdInputValArea-1").text(data.from);
//     $("#mfgdInputValArea-2").text(data.to);
//   },
//   onChange: function (data) {
//     $("#mfgdInputValArea-1").text(data.from);
//     $("#mfgdInputValArea-2").text(data.to);
//   },
//   onUpdate: function (data) {
//     $("#mfgdInputValArea-1").text(data.from);
//     $("#mfgdInputValArea-2").text(data.to);
//   },
// });

// $("#clearAll").on("click", function () {
//   let rangePrice = $(".js-range-slider-price").data("ionRangeSlider");
//   let rangeMeter = $(".js-range-slider-meter").data("ionRangeSlider");
//   rangePrice.reset();
//   rangeMeter.reset();
//   $("#modalCheckboxContainer").slideUp(300);
//   $(".multiple-checkbox-container").slideUp(300);
//   $(".input-checkbox").prop("checked", false);
// });

// // Open Multiple Checkbox Container In Modal
// $(".checkbox-toggle-btn").on("click", function () {
//   $(this)
//     .parents(".checkbox-toggle-header")
//     .next(".multiple-checkbox-container")
//     .slideToggle(300);
// });

// // Check All Inputs
// $(".checkAll").click(function () {
//   if ($(this).find(".input-checkbox").prop("checked")) {
//     $(this)
//       .parents(".modal-checkbox-row")
//       .find(".multiple-checkbox-container input")
//       .prop("checked", true);
//     // $('#checkboxContainerAprtment input').prop('checked', true);
//   } else {
//     // $('#checkboxContainerAprtment input').prop('checked', false);
//     $(this)
//       .parents(".modal-checkbox-row")
//       .find(".multiple-checkbox-container input")
//       .prop("checked", false);
//   }
// });

// $(document).ready(function () {
//   // Add minus icon for collapse element which is open by default
//   $(".collapse.show").each(function () {
//     $(this)
//       .parent()
//       .find(".icon-minus")
//       .removeClass("icon-minus")
//       .addClass("icon-plus");
//   });

//   // Toggle plus minus icon on show hide of collapse element
//   $(".collapse")
//     .on("show.bs.collapse", function () {
//       $(this)
//         .parent()
//         .find(".icon-plus")
//         .removeClass("icon-plus")
//         .addClass("icon-minus");
//     })
//     .on("hide.bs.collapse", function () {
//       $(this)
//         .parent()
//         .find(".icon-minus")
//         .removeClass("icon-minus")
//         .addClass("icon-plus");
//     });
// });

// // Toggle Height Container
// $("#toggleContact").on("click", function () {
//   $("#toggleContactContainer").slideDown(500);
// });
// $("#closeContactContainer").on("click", function () {
//   $("#toggleContactContainer").slideUp(500);
// });

// // On Scroll
// $(window).on("resize", function () {
//   // Menu
//   menuBodyHandler();

//   // Calc Nav Height
//   calcNavHeight();
// });
