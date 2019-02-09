// меню
var main = function() {
    $('.menu-icon').click(function() {
        $('.menu').animate({
            left: '0px'
        }, 200);

        $('body').animate({
            left: '285px'
        }, 200);
    });

    $('.icon-close').click(function() {
        $('.menu').animate({
            left: '-285px'
        }, 200);

        $('body').animate({
            left: '0px'
        }, 200);
    });
};

$(document).ready(main);


// обрізання тексту в блоках
$('.comments p').each(function () {
    var textArray = $(this).text().split(' ');
    while ($(this).prop('scrollHeight') > $(this).prop('offsetHeight')) {
        textArray.pop();
        $(this).text(textArray.join(' ') + '...');
    }
});

// міняємо колір блока
$(function(){
    var el = $('.comments > div');

    el.click(function (e) {
        $(this).toggleClass('selected');
    });
});