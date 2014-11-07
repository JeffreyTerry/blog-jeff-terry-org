$(document).ready(function() {
    var transitionTime = 250;
    $('.banner-post-link').mouseenter(function(event) {
        $(this).find('.cover')[0].style.visibility = 'visible';
    });
    $('.banner-box-title').mouseenter(function(event) {
        $(this).find('.cover')[0].style.visibility = 'visible';
    });
    $('.banner-post-link').mouseleave(function(event) {
        $(this).find('.cover')[0].style.visibility = 'hidden';
    });
    $('.banner-box-title').mouseleave(function(event) {
        $(this).find('.cover')[0].style.visibility = 'hidden';
    });
});