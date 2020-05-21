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
    
    // Menu Bar
    $("#toggle_bar").click(function () {
        $('#bar_links').toggleClass("active");
    });
    
    // Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('nav').addClass('scroll_background');
        } else {
            $('nav').removeClass('scroll_background');
        }
    });
    
    if ($(window).scrollTop() > 0) {
        $('nav').addClass('scroll_background');
    }
    
    // Toggle Bar Dashboard
    $('#toggle_bar_dashboard').click(function () {
        $('.sidebar').toggleClass('active');
        $('.backdrop').toggleClass('active');
    });
    
    $('.backdrop').click(function () {
        $('.sidebar').removeClass('active');
        $('.backdrop').removeClass('active');
    });
    
    // Toggle Sidebar
//    $('#toggle_sidebar').click(function () {
//        $('.sidebar').toggleClass('active');
//        $('.backdrop-sidebar').toggleClass('active');
//    });
//    $('.backdrop-sidebar').click(function () {
//        $('.sidebar').removeClass('active');
//        $('.backdrop-sidebar').removeClass('active');
//    });
    
});

// Dragabble Board
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});