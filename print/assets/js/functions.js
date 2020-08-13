$(document).ready(function () {
    "use strict";

    // View Product Counter
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
        $("#dropdownNavbar").fadeOut();
        $(this).removeClass('active');
        $("#searchBar").fadeOut(200);
        $("#toggleNavbar").removeClass('active');
        $("html, body").prop("style", "overflow: visible !important");
      } else {
        $(this).addClass('active');
        $("#dropdownNavbar").fadeIn();
        $("#toggleNavbar").addClass('active');
        $("html, body").prop("style", "overflow: hidden !important");
      }
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

    // Payment Accordion
    if ($(".accordion-card").first()) {
      $(".accordion-card").first().find('.toggle-accordion').addClass("active");
      $("#recevingTarget").css('display', 'block');
    }
    $('.toggle-accordion').on('click', function () {
      var target = $(this).data('target-card');
      $('' + target + '').slideToggle();
      $(this).next('.down').toggleClass('active');
      $(this).toggleClass('active');
    });

    // Switch Options
    $('.switch-product-option').on('click', function () {
      if ($(this).parents('.description-row').hasClass("paddingTop")) {
        $(this).parents('.description-row').css('paddingTop', '30px');
      }
      var switchText = $(this).find('.switch-product-option-val').text();
      var title = $(this).parents('.description-row').find('.description-title');
      var showSelectedBox = $(this).parents('.choose-description-product').find('.product-option-value');
      var selectedValue = $(this).parents('.choose-description-product').find('.product-option-selected');
      var intrested = $(this).parents('.choose-description-product').find('.interested-text');
      showSelectedBox.addClass('active');
      intrested.addClass('active');
      selectedValue.text(switchText);
      title.prop("style", "display: none !important");
    });

    // Edit Value
    $(".product-option-edit").on('click', function () {
      if ($(this).parents('.description-row').hasClass("paddingTop")) {
        $(this).parents('.description-row').css('paddingTop', '0');
      }
      $(this).parents('.product-option-value').removeClass('active');
      var title = $(this).parents('.description-row').find('.description-title');
      var intrested = $(this).parents('.choose-description-product').find('.interested-text');
      intrested.removeClass('active');
      title.prop("style", "display: flex !important");
    });

    // View Product Big Size
    $('.dotBtn').on('click', function () {
      var slider = $(this).data('product-slider');
      $(slider).fadeIn(0).siblings('.product-slider-view-item').fadeOut(0);
      $(this).addClass('active').siblings().removeClass('active');
    });

    $(function(){
        var hash = window.location.hash;
        hash && $('.profile-links a[href="' + hash + '"]').tab('show');
        if (hash) {
          var titleHash = $('a[href="' + hash + '"]').find('.profile-link-text').text();
          $("#tabTitle").text(titleHash);
        }

        $('.nav-tabs a').click(function (e) {
            var title = $(this).find('.profile-link-text').text();
            $(this).tab('show');
            $("#tabTitle").text(title);
            var scrollmem = $('body').scrollTop();
            window.location.hash = this.hash;
            $('html,body').scrollTop(scrollmem);
        });
    });

});

// Hideen Preloader After Page Loadded
$(window).on('load', function() {
  $('body, html').css('overflow', 'visible');
  $('#preloader').fadeOut(1000);
  // $('#preloader').css('display', 'none');
});
