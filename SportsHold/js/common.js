
// menuToggle

$('.menu-toggle').click(function () {
    $(this).toggleClass('active');
    $('.main-menu').slideToggle(400);
});

//Tabs

$('.tabs a').click(function () {
    $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
    $(this).parent().siblings().removeClass('active');
    var id = $(this).attr('href');
    $(id).removeClass('hide');
    $(this).parent().addClass('active');
    return false
});

//slider

$(document).ready(function () {
    $("#comments-slider").owlCarousel({
        navigation: false,
        slideSpeed: 100,
        paginationSpeed: 800,
        singleItem: true,
        autoPlay: false //змінити по закінченню на true
    });
});