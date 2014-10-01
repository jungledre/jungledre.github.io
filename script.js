$(document).ready(function() {
    $('.floated_img').mouseenter(function() {
        $(this).fadeTo('fast', 0.1 );
    });
    $('.floated_img').mouseleave(function() {
        $(this).fadeTo('fast', 0.8 );
    });
});


