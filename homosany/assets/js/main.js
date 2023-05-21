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
  $('#full_year').text(new Date().getFullYear())
});
