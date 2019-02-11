$(function () {

// slick slider

    $(document).ready(function () {
        $(".slideshow").slick({
            dots: false,
            arrows: false
        });
        $(".menu-slider a").click(function (e) {
            e.preventDefault();
            slideIndex = $(this).index();
            $('.slideshow').slickGoTo(parseInt(slideIndex));
        });
    });

// counter

    function catalogItemCounter(field) {
        var fieldCount = function (el) {
            var min = el.data('min') || false,
                max = el.data('max') || false,
                dec = el.next('.dec'),
                inc = el.prev('.inc');

            function init(el) {
                if (!el.attr('disabled')) {
                    dec.on('click', decrement);
                    inc.on('click', increment);
                }

                function decrement() {
                    var value = parseInt(el[0].value);
                    value--;

                    if (!min || value >= min) {
                        el[0].value = value;
                    }
                }

                function increment() {
                    var value = parseInt(el[0].value);
                    value++;
                    if (!max || value <= max) {
                        el[0].value = value++;
                    }
                }
            }

            el.each(function () {
                init($(this));
            });
        };

        $(field).each(function () {
            fieldCount($(this));
        });
    }

    catalogItemCounter('.fieldCount');

// menuToggle

    $('.menuToggle').on('click', function () {
        $('.menu').slideToggle(300, function () {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
    });
});
