$(document).ready(function () {
    $("#menuBtn").on('click', function () {
        $('.nav-links').toggleClass('active');
        $(this).toggleClass('active');
    });

    if ($(window).scrollTop() > 0) {
        $('#navigationBar').addClass('active');
    } 
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('#navigationBar').addClass('active');
    } else {
        $('#navigationBar').removeClass('active');
    }
});
