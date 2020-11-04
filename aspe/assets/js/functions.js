$(document).ready(function () {
    $("#menuBtn").on('click', function () {
        $('.nav-content').toggleClass('active');
        $(this).toggleClass('active');
    });
    $("#closeNavbar").on('click', function () {
        $('.nav-content').removeClass('active');
        $("#menuBtn").removeClass('active');
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
