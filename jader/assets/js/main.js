// (function () {
//   var burger1, burger2, burger3;

//   burger2 = document.querySelector(".nav-burger");

//   burger2.addEventListener("click", function () {
//     burger2.classList.toggle("active");
//   });
// }.call(this));

$(function () {
  $(".nav-burger").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".nav-center").removeClass("active");
    } else {
      $(this).addClass("active");
      $(".nav-center").addClass("active");
    }
  });
});
