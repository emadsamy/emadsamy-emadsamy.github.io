/*global $, jQuery, console */

// Start Functions
$(document).ready(function () {
    
    'use strict';
    
    // Start Accordion
    $('#list-links').on('click', function () {
        
        if ($(".navbar").hasClass("height-down")) {
            
            $('#navbar-links').slideDown(100);
        
            $(".navbar").animate({height: "260px"}, 700);
            
            $(".navbar").removeClass('height-down');
            
            $(".navbar").addClass('height-up');
            
        } else if ($(".navbar").hasClass('height-up')) {
            
            $(".navbar").animate({height: "50px"}, 700);
            
            $(".navbar").addClass("height-down");
            
            $(".navbar").removeClass('height-up');
            
        }
    });
    // End Accordion
    
    
    // Start Plugin Nice Scroll
    $('html').niceScroll({
        
        cursorborder: 'none',
        cursorwidth: '7px'
        
    });
    
    
    // Start Make Tab Gallery
    $('.gallery-pages .gallery-pages-overley .gallery-ul ul li').on('click', function () {
        
        var myList = $(this).attr('id'),
            
            myThis = $(this);
        
        // Start Make Background Colour To List Items
        if (myThis.addClass('active-gallery')) {
            
            myThis.siblings(myThis).removeClass('active-gallery');
            
        }
        
        $('#' + myList + '-img').fadeIn(1000).siblings('.photos-tab').hide();
        
    });
    
    
    // Start Scroll To Top
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 1709) {
            
            $('#scroll-top').fadeIn(1000);
            
        } else {
            
            $('#scroll-top').fadeOut(500);
            
        }
        
    });
    
    $('#scroll-top').on('click', function () {
        
        $('html').animate({
            
            scrollTop: 0
            
        }, 1600);
        
    });
    
});