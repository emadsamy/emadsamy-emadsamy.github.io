$(document).ready(function () {
    "use strict";

    // Products
    $('#offers').owlCarousel({
        rtl:true,
        loop:false,
        nav:true,
        responsiveClass:true,
        touchDrag: false,
        mouseDrag: false,
        margin: 60,
        navText:[
            "<span class='icon-back carousel-icon rotate-back'></span>",
            "<span class='icon-back carousel-icon'></span>"
        ],
        responsive : {
          // breakpoint from 0 up
          0: {
              items: 1
          },
          // breakpoint from 550 up
          550: {
              items: 1
          },
          // breakpoint from 800 up
          768: {
              items: 2,
              margin: 30
          },
          990: {
            items: 3,
            margin: 30
          },
          // breakpoint from 768 up
          1110: {
              items: 3
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
    $("#menuBar").on('click', function () {
      if ($(this).hasClass('active')) {
        $("#toggleNavbar").removeClass('active');
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
        $("#toggleNavbar").addClass('active');
      }


    });
    $("#menuBar.active").on('click', function () {
      $(this).removeClass('active');
      $("#toggleNavbar").removeClass('active');
    });

    // Payment Switch
    $(".switch").on('click', function () {
      if ($(this).parents(".payment-switch-multi").hasClass('active')) {
        $(this).parents(".payment-switch-multi").removeClass('active');
        $(this).parents(".payment-switch-multi").siblings().removeClass("active");
        $(this).parents(".payment-switch-multi").find('.payment-box-data').slideUp(500);
      } else {
        $(this).parents(".payment-switch-multi").addClass('active');
        $(this).parents(".payment-switch-multi").siblings().removeClass("active");
        $(this).parents(".payment-switch-multi").find('.payment-box-data').slideDown(500);
        $(this).parents(".payment-switch-multi").prev(".payment-switch-multi").find('.payment-box-data').slideUp(500);
        $(this).parents(".payment-switch-multi").next(".payment-switch-multi").find('.payment-box-data').slideUp(500);
      }
    });

    $(".switch-payment-method > div").on("click", function () {
      $(this).addClass('active').siblings(this).removeClass('active');
      var paymentType = $(this).data('payment-type');
      console.log(paymentType);
    });

    $(".btn-link").on("click", function () {
      $(this).next(".down").toggleClass("active");
    });

    $('#collapseOne').collapse({
      toggle: false
    });
});

// Hideen Preloader After Page Loadded
$(window).on('load', function() {
  $('body, html').css('overflow', 'visible');
  // $('#preloader').fadeOut(1000);
  $('#preloader').css('display', 'none');
});
