//Preloader jQuery starts
$(window).on('load', function() { // makes sure the whole site is loaded 
        $('.preloader .content').delay(50).fadeOut('slow');
        $('body').delay(1000).css({'overflow':'hidden'});
        // $('.preloader').delay(300).fadeOut('slow'); 
        // will fade out the white DIV that covers the website. 
        // $('body').delay(1000).css({'overflow':'visible'});
        setTimeout(function() {
            $(".curtails_effect").addClass("active");
            $('.preloader').delay(300).fadeOut('slow');
        $('body').delay(1000).css({'overflow-x':'hidden'});
        $('body').delay(1000).css({'overflow-y':'visible'});
        }, 1000);
    });
    //Preloader jQuery ends

    // AOS animation
$(document).ready(function() {
    AOS.init({
        duration: 1200,
        mirror: false,
        once: true,
        disable: function() {
            var maxWidth = 992;
            return window.innerWidth < maxWidth;
        }

    });
});