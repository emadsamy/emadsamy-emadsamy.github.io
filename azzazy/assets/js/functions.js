$(document).ready(function () {
    "use strict";
    // Products Slider Carousel
    $('#productsSlider').owlCarousel({
        rtl:true,
        loop:false,
        nav:true,
        responsiveClass:true,
        navText:[
            "<img src='assets/img/icons/chevron_right.svg' class='carousel-arrow carousel-next img-fluid' />",
            "<img src='assets/img/icons/chevron_left.svg' class='carousel-arrow carousel-prev img-fluid' />"
        ],
        responsive : {
          // breakpoint from 0 up
          0: {
              items: 2
          },
          // breakpoint from 550 up
          550: {
              items: 2
          },
          // breakpoint from 800 up
          768: {
              items: 3
          },
          // breakpoint from 768 up
          992: {
              items: 5
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
});

// Hideen Preloader After Page Loadded
$(window).on('load', function() {
  $('body, html').css('overflow', 'visible');
  // $('#preloader').fadeOut(1000);
  $('#preloader').css('display', 'none');
});
