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

$(function () {
  // Read More Function
  $(".read-more-btn").on("click", function () {
    var content = $(this)
      .parents(".read-more-parent")
      .find(".read-more-content");
    content.text(content.attr("data-text"));
    $(this).css("display", "none");
  });

  $(".read-more-content").each(function () {
    var length = $(this).attr("data-length");
    var strToInt = parseInt(length);
    $(this).attr("data-text", $(this).text());
    $(this).text($(this).text().substr(0, strToInt));
  });
});

// Hideen Preloader After Page Loadded
$(window).on('load', function() {
  $('body, html').css('overflow', 'visible');
  $('#preloader').fadeOut(1000);
});


var myImages = Array.from(document.querySelectorAll(".slider-for img"));
var lightBoxContainer = document.querySelector(".lightbox-contaner");
var prev = document.getElementById("preve");
var next = document.getElementById("nexte");
var close = document.getElementById("closee");
var currentImgInx = 0;

for (var i = 0; i < myImages.length; i++) {

    myImages[i].addEventListener("click", showLightBox)


}

function showLightBox(e) {

    lightBoxContainer.style.display = "flex";

    var imgScr = e.target.src;
    currentImgInx = myImages.indexOf(e.target);


    lightBoxContainer.firstElementChild.style.backgroundImage = "url(" + imgScr + ")";

    close.addEventListener("click", hideLightBox);
    next.addEventListener("click", goNext);
    prev.addEventListener("click", goPrev);

   

}

function goNext() {
    currentImgInx++;
    if (currentImgInx == myImages.length) {
        currentImgInx = 0;

    }

    lightBoxContainer.firstElementChild.style.backgroundImage = "url(" + myImages[currentImgInx].src + ")";

}

function goPrev() {


    currentImgInx--;
    if (currentImgInx < 0) {
        currentImgInx = myImages.length - 1;

    }
    lightBoxContainer.firstElementChild.style.backgroundImage = "url(" + myImages[currentImgInx].src + ")";

}
function hideLightBox() {

    lightBoxContainer.style.display = "none";


}


document.addEventListener("keydown", function (e) {

    if (e.keyCode == 39) {

        goNext();

    } else if (e.keyCode == 27) {

        hideLightBox();

    } else if (e.keyCode == 37) {


        goPrev();
    }



})



var myImages2 = Array.from(document.querySelectorAll(".slider-nav img"));
var lightBoxContainer = document.querySelector(".lightbox-contaner");
var prev = document.getElementById("preve");
var next = document.getElementById("nexte");
var close = document.getElementById("closee");
var currentImgInx = 0;
var tottal= myImages2.length;
document.getElementById("tottal").innerHTML= tottal;
for (var i = 0; i < myImages2.length; i++) {

    myImages2[i].addEventListener("click", showLightBox)
}


function showLightBox(e) {

    lightBoxContainer.style.display = "flex";

    var imgScr = e.target.src;
    currentImgInx = myImages2.indexOf(e.target)+1;
    document.getElementById("curentt").innerHTML= currentImgInx+1


    lightBoxContainer.firstElementChild.style.backgroundImage = "url(" + imgScr + ")";

    close.addEventListener("click", hideLightBox);
    next.addEventListener("click", goNext);
    prev.addEventListener("click", goPrev);

   

}

function goNext() {
    currentImgInx++;
    document.getElementById("curentt").innerHTML= currentImgInx
    if (currentImgInx == myImages2.length) {
        currentImgInx = 0;

    }

    lightBoxContainer.firstElementChild.style.backgroundImage = "url(" + myImages2[currentImgInx].src + ")";

}

function goPrev() {

  document.getElementById("curentt").innerHTML= currentImgInx

    currentImgInx--;
    if (currentImgInx < 1) {
        currentImgInx = myImages2.length - 1;

    }
    lightBoxContainer.firstElementChild.style.backgroundImage = "url(" + myImages2[currentImgInx].src + ")";

}
function hideLightBox() {

    lightBoxContainer.style.display = "none";


}


document.addEventListener("keydown", function (e) {

    if (e.keyCode == 39) {

        goNext();

    } else if (e.keyCode == 27) {

        hideLightBox();

    } else if (e.keyCode == 37) {


        goPrev();
    }



})


$(document).ready(function () {

  var dir = false,
      flag = $("html").attr("dir");
      dir = flag === "rtl";


  $(".regular").slick({
    dots: false,
    centerMode:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: true,
    
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
    arrows: false,

        
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 0.5,
    arrows: true,
    fade: true,
    rtl: dir,
    centerMode: true,


    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 2,
    arrows: false,
    rows:2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    rtl: dir,
    speed: 500,
    cssEase: 'linear',

    focusOnSelect: true,
    edgeFriction: 1
  });





  $('.fadee').slick({
    arrows: false,
    infinite: true,
    dots: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: dir
  });
  $('.advsear').slick({
    infinite: true,
    dots: true,
    speed: 400,
    cssEase: 'linear',
    autoplay: false,
    autoplaySpeed: 2000,
    rtl: dir
  });
});

