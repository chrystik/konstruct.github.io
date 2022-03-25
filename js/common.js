$(document).ready(function() {
    
    $('.nav-items a').on('click', function(){
        $(this).addClass('active')
        $('.nav-items a').not(this).removeClass('active')
    })

    $('.scroll-link a').on('click', function(){
        $('.nav-items a:nth-child(2)').addClass('active')
        $('.nav-items a').not('.nav-items a:nth-child(2)').removeClass('active')
    })

})
jQuery(function($) {

    var $nav = $('.navbar');
    var $win = $(window);
    var winH = $win.height();   // Get the window height.

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH ) {
            $nav.addClass("shadow");
        } else {
            $nav.removeClass("shadow");
        }
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });

});