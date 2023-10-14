// Navbar
$(".navbar-burger-btn").on("click", function () {
  $(this).removeClass("active");
  $(".navbar-links-content").addClass("active");
  $(".navbar-close-btn").addClass("active");
});

$(".navbar-close-btn").on("click", function () {
  $(this).removeClass("active");
  $(".navbar-links-content").removeClass("active");
  $(".navbar-burger-btn").addClass("active");
  $(".nlb-item").removeClass('active');
});

// Responsive Navbar
$(".nlb-item").on('click', function () {
  if ($(window).width() < 768) {
    if ($(this).find('.nav-dropdown-list').length) {
      $(this).addClass('active');
    }
  }
});

// Back In Responsive Navbar
$(".btn-dropdown-back").on('click', function () {
  // $(".nlb-item").removeClass('active');
  $(this).parents('.nlb-item').addClass('active');
  // console.log("test");
});

// Responsive Navbar
$(".category-row-title").on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(".category-row-title").removeClass('active');
    $(this).addClass('active');
  }
});

// Customers Tab View
$(".customer-card-btn").on("click", function () {
  let text = $(this).attr("data-text");
  let img = $(this).find("img").attr("src");
  $("#tabViewText").text(text);
  $("#tabViewImg").attr("src", img);
  $(".customer-card-btn").removeClass("active");
  $(this).addClass("active");
  $("#customersViewTab").addClass("active");
});

// Close Customers Tab View
$(".close-tab-view-btn").on("click", function () {
  $(".customer-card-btn").removeClass("active");
  $("#customersViewTab").removeClass("active");
  $("#tabViewText").text("");
  $("#tabViewImg").attr("src", "");
});

$(document).ready(function () {
  // Copyrights Year
  $('.full_year').text(new Date().getFullYear())
});

$(function () {
  $("#toggleSearchContainer").on('click', function () {
    if ($('#searchContainer').hasClass('active')) {
      $("#searchContainer").removeClass('active');
      $(this).removeClass('active');
    } else {
      $("#searchContainer").addClass('active');
      $(this).addClass('active');
      $(".search-backdrop").addClass('active');
    }
  });

  $(".btn-close-search-res, .search-backdrop").on('click', function () {
    $("#searchContainer").removeClass('active');
    $("#toggleSearchContainer").removeClass('active');
    $(".search-backdrop").removeClass('active');
  });
});
