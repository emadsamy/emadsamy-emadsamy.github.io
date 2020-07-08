$(document).ready(function () {
    "use strict";

    // Products
    $('#productsSlider').owlCarousel({
        rtl:true,
        loop:false,
        nav:true,
        responsiveClass:true,
        touchDrag: false,
        mouseDrag: false,
        navText:[
            "<span class='icon-back carousel-icon rotate-back'></span>",
            "<span class='icon-back carousel-icon'></span>"
        ],
        responsive : {
          // breakpoint from 0 up
          0: {
              items: 3
          },
          // breakpoint from 550 up
          550: {
              items: 3
          },
          // breakpoint from 800 up
          790: {
              items: 3
          },
          990: {
            items: 5
          },
          // breakpoint from 768 up
          1110: {
              items: 6
          }
      }
    });

    // Counter View Product
    $(function () {
      var counter = 1;
      $("#increment").click(function () {
          counter++;
          $("#counter").text(counter);
      });
      $("#decrement").click(function (e) {
          if (counter === 1) {
            e.preventDefault();
          } else {
            counter--;
            $("#counter").text(counter);
          }
      });
    });

    // Open Produts
    $("#openProductsBtn").on('click', function () {
      $("#tableProducts").addClass("active");
    });
    $("#exitProductsBtn").on('click', function () {
      $("#tableProducts").removeClass("active");
    });
});

// Hideen Preloader After Page Loadded
$(window).on('load', function() {
  $('body, html').css('overflow', 'visible');
  // $('#preloader').fadeOut(1000);
  $('#preloader').css('display', 'none');
});
