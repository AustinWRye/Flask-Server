$(document).ready(function() {

    // change navbar when page is scrolled
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 99) {
            $('#main-nav').addClass('scrolled-nav');
        } else {
            $('#main-nav').removeClass('scrolled-nav');
        }
    });

});