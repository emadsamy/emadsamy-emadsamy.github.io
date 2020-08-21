$(document).ready(function () {
    $("#toggleSearch").on('click', function () {
        if ($(this).hasClass('opend')) {
          $("#searchContainer").removeClass('active');
          $(this).removeClass('opend');
          $(this).find('span').attr('class', 'icon-search icon');
          $("body").css('overflow', 'visible');
        } else {
          $("#searchContainer").addClass('active');
          $(this).addClass('opend');
          $(this).find('span').attr('class', 'icon-close icon');
          $("body").css('overflow', 'hidden');
        }
    });
});
