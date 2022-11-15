// Navbar
$('.navbar-burger-btn').on('click', function () {
  $(this).removeClass('active');
  $(".navbar-links-content").addClass("active");
  $('.navbar-close-btn').addClass('active');
});

$('.navbar-close-btn').on('click', function () {
  $(this).removeClass('active');
  $(".navbar-links-content").removeClass("active");
  $('.navbar-burger-btn').addClass('active');
});