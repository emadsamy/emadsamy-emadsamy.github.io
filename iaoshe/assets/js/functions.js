$(document).ready(function () {
    $("#menuBtn").on('click', function () {
        $('.nav-content').toggleClass('active');
    });
    $("#closeNavbar").on('click', function () {
        $('.nav-content').removeClass('active');
    });
});