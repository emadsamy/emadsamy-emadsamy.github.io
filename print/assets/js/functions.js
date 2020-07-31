$(document).ready(function () {
    "use strict";

    // Products
    var carouselEl = $('#products').owlCarousel({
        rtl:true,
        loop:false,
        nav:true,
        // responsiveClass:true,
        touchDrag: false,
        mouseDrag: false,
        margin: 0,
        navText:[
            "<span class='icon-back carousel-icon rotate-back'></span>",
            "<span class='icon-back carousel-icon'></span>"
        ],
        navClass: ["icon-chevron_right", "icon-chevron_left"],
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
              items: 1,
              margin: 0
          },
          990: {
            items: 1,
            margin: 0
          },
          // breakpoint from 768 up
          1110: {
              items: 1
          }
      }
    });

    $("#prevContainer").click(function() {
        carouselEl.trigger('next.owl.carousel');
        // Change Slider Title
        if ($(".owl-item:nth-of-type(2)").hasClass("active")) {
          $("#slider-title").html("المعارض");
        }
    });
    $("#nextContainer").click(function() {
        carouselEl.trigger('prev.owl.carousel');
        // Change Slider Title
        if ($(".owl-item:nth-of-type(1)").hasClass("active")) {
          $("#slider-title").html("الشركات");
        }
    });

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
      $(".incrementBtn").click(function () {
          var counterElement = $(this).parents('.product-counter').find(".counter-product").text();
          var counterParse = parseInt(counterElement);
          counterParse++;
          $(this).parents('.product-counter').find(".counter-product").text(counterParse);
      });
      $(".decrementBtn").click(function (e) {
          var counterElement = $(this).parents('.product-counter').find(".counter-product").text();
          var counterParse = parseInt(counterElement);
          if (counterParse === 1) {
            e.preventDefault();
          } else {
            counterParse--;
            $(this).parents('.product-counter').find(".counter-product").text(counterParse);
          }
      });
    });

    // Open Produts
    $("#menuBar").on('click', function () {
      if ($(this).hasClass('active')) {
        $("#toggleNavbar").removeClass('active');
        $(this).removeClass('active');
        $("#searchBar").fadeOut(200);
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

    // Choose Payment Method
    $(".switch-payment-method > div").on("click", function () {
      $(this).addClass('active').siblings(this).removeClass('active');
      var paymentType = $(this).data('payment-type');
      var paymentText = $(this).text();
      $("#payUpdated").show();
      $("#choosePaymentMethod").addClass("active");
      $("#choosePaymentMethodText").text(paymentText);
      $("#publishBtn").attr("disabled", false);
    });

    // Choose Payment Method
    $("#editPaymentMethod").on("click", function () {
      $("#payUpdated").hide();
      $("#choosePaymentMethod").removeClass("active");
    });

    $(".btn-link").on("click", function () {
      $(this).next(".down").toggleClass("active");
    });

    $('#collapseOne').collapse({
      toggle: false
    });

    // Toggle Slider Search
    $(".openSearch").on('click', function () {
      $("#search-slider-content").fadeIn(30);
    });
    $(".closeSearch").on('click', function () {
      $("#search-slider-content").fadeOut(30);
    });

    // Resize Bar Search
    $("#searchBar").width($("#toggleNavbar").width());

    // Click To Open Search Bar
    $("#openSearchBar").on('click', function () {
      $("#searchBar").fadeIn(200);
    });

    // Close Search
    $("#closeSearch").on('click', function () {
      $("#searchBar").fadeOut(200);
    });

    // SavePayment
    $("#savePayment").on('click', function () {
      $("#paymentAddress").addClass("active");
      $("#paymentAddressUpdated").show();
    });

    // SavePayment
    $("#editPaymentAddress").on('click', function () {
      $("#paymentAddress").removeClass("active");
      $("#paymentAddressUpdated").hide();
    });

});

// Hideen Preloader After Page Loadded
$('#preloader').css('display', 'none');
$(window).on('load', function() {
  $('body, html').css('overflow', 'visible');
  // $('#preloader').fadeOut(1000);
  $('#preloader').css('display', 'none');
});
