
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


// Carousel Auto-Cycle

$(document).ready(function() {
    $('.carousel').carousel({
        interval: 6000
    })
});

$(document).ready(function(){
    $('body').append('<a href="#" id="go-top"><i class="fa fa-arrow-up"></i></a>');
});

//Arrow Up

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "750") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "750") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function() {
    $("#go-top").scrollToTop();
});