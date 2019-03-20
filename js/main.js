$(document).ready(function(){
    (function($) {
        "use strict";
        var $header = $(".header"),
            y_pos = $header.offset().top,
            height = $header.height();
    
        $(window).scroll(function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop > 0) {
                $header.addClass("header-fix");
            } else {
                $header.removeClass("header-fix");  
            }
        });
    
    })(jQuery, undefined);
    
});