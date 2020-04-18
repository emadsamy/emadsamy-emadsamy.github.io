$(document).ready(function () {
    
    // Dropdown Menu
    $(function () {
        $('.normal-dropdown').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).toggleClass('active');
            $(this).find('.dropdown-menu-ul').slideToggle(300);
        });
        $('.normal-dropdown').focusout(function () {
            $(this).removeClass('active');
            $(this).find('.dropdown-menu-ul').slideUp(300);
        });
        $('.normal-dropdown .dropdown-menu-ul li').click(function () {
            $(this).parents('.normal-dropdown').find('span').text($(this).text());
            $(this).parents('.normal-dropdown').find('input').attr('value', $(this).attr('class'));
        });
        
        $('.dropdown-menu-ul li').click(function () {
          var input = '<strong>' + $(this).parents('.normal-dropdown').find('input').val() + '</strong>',
              msg = '<span class="msg">Hidden input value: ';
            $('.msg').html(msg + input + '</span>');
        }); 
    });
    
    $("#openDropdownBar").on("click", function () {
        $('#dropdownNavbar').fadeIn();
    });
    
    $("#closeDropdownBar").on("click", function () {
        $('#dropdownNavbar').fadeOut();
    });
    
});