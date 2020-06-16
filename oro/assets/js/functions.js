$(document).ready(function () {
    "use strict";
    // Products Slider Carousel
    $('#productsSlider').owlCarousel({
        rtl:true,
        loop:false,
        margin:10,
        nav:true,
        responsiveClass:true,
        navText:[
            "<img src='assets/img/icons/chevron_right.svg' class='carousel-arrow carousel-next img-fluid' />",
            "<img src='assets/img/icons/chevron_left.svg' class='carousel-arrow carousel-prev img-fluid' />"
        ],
        responsive : {
          // breakpoint from 0 up
          0: {
              items: 1
          },
          // breakpoint from 550 up
          550: {
              items: 2
          },
          // breakpoint from 800 up
          790: {
              items: 3
          },
          // breakpoint from 768 up
          1110: {
              items: 4
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

    // Menu Navbar
    $('.navbar-menu').on('click', function () {
      if ($(this).hasClass('active')) {
        console.log("has Class");
        $(this).removeClass('active');
        // $("nav").animate({marginTop: "-38px"}, 300);
        $("nav").removeClass('active');
      } else {
        console.log("Dont Have Class");
        $(this).addClass('active');
        // $("nav").animate({marginTop: "0"}, 300);
        $("nav").addClass('active');
      }
    });
});

// Hideen Preloader After Page Loadded
$(window).on('load', function() {
  $('body, html').css('overflow', 'visible');
  $('#preloader').fadeOut(1000);
});
