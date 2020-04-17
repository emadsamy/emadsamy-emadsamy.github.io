// Start UL List To Extra Small Screen
$(document).ready(function () {
    
    'use strict';
    
    $('#icon-navigation').on('click', function () {
        
        if ($('#navigation').height() === 45) {
            
            $('#navigation').animate({
                
               height: '235px' 
                
            });
            
        } else {
            
            $('#navigation').animate({
                
               height: '45px' 
                
            });
            
        }
        
    });
    
    // Start Nice Scroll
    $('html').niceScroll({
        
        cursorcolor: '#000',
        cursorborder: 'none'
        
    });
    
});