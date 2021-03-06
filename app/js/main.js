$(function () {
    $('.feedback__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
    $('.header__menu-btn').on('click', function () {
        $('ul.menu__list').slideToggle();
    });
    new WOW().init();
    
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });
    });

    var Animation = function () {
        var hFrom = $(window).scrollTop();
        var hTo = $(window).scrollTop() + ($(window).height() / 2);
        if ($(".progress__inner").offset().top > hFrom && $(".progress__inner").offset().top < hTo) {
            $('.number').delay(500).spincrement({
                thousandSeparator: "",
                duration: 4000
            });
        }
    };
    $(window).scroll(function () {
        Animation();
    });
    Animation();

});

