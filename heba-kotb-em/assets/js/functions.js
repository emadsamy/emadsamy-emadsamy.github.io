// $(document).ready(function () {
//     $("#menuBtn").on('click', function () {
//         $('.navbar-container').addClass('active');
//         $('.navbar-backdrop').addClass('active');
//     });
//     $("#closeNavbar").on('click', function () {
//         $('.navbar-container').removeClass('active');
//         $('.navbar-backdrop').removeClass('active');
//     });

//     if ($(window).scrollTop() > 0) {
//         $('#navigationBar').addClass('active');
//     }
// });

// $(window).scroll(function () {
//     if ($(window).scrollTop() > 0) {
//         $('#navigationBar').addClass('active');
//     } else {
//         $('#navigationBar').removeClass('active');
//     }
// });
$(document).ready(() => {
  $("#wrapperContainer").css("paddingTop", $("#nav").innerHeight() + 40 + "px");

  var tabs = [
    {
      id: 1,
      month: "ديسمبر",
      day: 25,
      bgColor: "#53CEE3",
    },
  ];

  // Home Tabs
  $(".schedule-card-btn").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".sd-view-tab").addClass("active");
    $(".main-sd-view").removeClass("active");
  });

  $("#closeTabBtn").on("click", function () {
    $(".sd-view-tab").removeClass("active");
    $(".schedule-card-btn").removeClass("active");
    $(".main-sd-view").addClass("active");
  });
});
