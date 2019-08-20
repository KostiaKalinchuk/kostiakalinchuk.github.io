// menuToggle
$(document).ready(function () {
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


    $('body').append('<a href="#" id="go-top"><img src="../img/arrow_up.svg"></a>');


//Arrow Up

    $(function () {
        $.fn.scrollToTop = function () {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "750") $(this).fadeIn("slow")
            var scrollDiv = $(this);
            $(window).scroll(function () {
                if ($(window).scrollTop() <= "750") $(scrollDiv).fadeOut("slow")
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function () {
                $("html, body").animate({scrollTop: 0}, "slow")
            })
        }
    });

    $(function () {
        $("#go-top").scrollToTop();
    });


    //Slider

    $('.slider-carousel').slick({
        // centerMode: true,
        slidesToShow: 5,
        dots: false,
        prevArrow: ".arrow-left",
        nextArrow: ".arrow-right",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });


    var accordionsMenu = $('.cd-accordion-menu');

    if (accordionsMenu.length > 0) {

        accordionsMenu.each(function () {
            var accordion = $(this);
            accordion.on('change', 'input[type="checkbox"]', function () {
                var checkbox = $(this);
                // console.log(checkbox.prop('checked'));
                ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
            });
        });
    }

});