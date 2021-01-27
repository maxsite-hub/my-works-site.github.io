
$(function () {

    let header = $("#header"),
        topbtn = $("#topbtn"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass("fixed"),
            topbtn.addClass("fixed");
        } else {
            header.removeClass("fixed"),
            topbtn.removeClass("fixed");
        }
    }

    /* Smooth scroll*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
            

        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);
        $("#nav").removeClass("active");
        $(".menu-link").removeClass("menu-link__active");
    });

  

    /* Menu nav toggle*/
    $(".menu-link").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("menu-link__active");
        $("#nav").toggleClass("active");
    });

    /* Modal
    /////////////////////////// */
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]")

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
    });

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal").on("click", function (event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });

    /*$(document).ready(function() {
        var link = $('.menu-link');
        var link_active = $('.menu-link__active');
        var nav = $('.nav');
        var nav_link = $('.nav a');
       

        link.click(function() {
            link.toggleClass('menu-link__active');
            nav.toggleClass('active');
        });
        nav_link.click(function() {
            link.toggleClass('menu-link__active');
            nav.toggleClass('active');
        });
    });*/

    $('.header__slider').slick({
        dots: false,
        dotsClass: 'slider_img-dots',
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
       
        asNavFor: '.slider-dots',
    });

    $('.slider-dots').slick({
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        asNavFor: '.header__slider',
    });

    $('.slider__studio').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<img class="slider-studio_left" <img src="img/BTN_arrow_back.svg" alt="">',
        nextArrow: '<img class="slider-studio_right" src="img/BTN_arrow_forward.svg" alt="">',
    });

    $('.reviews__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,

        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<img class="slider-reviews" src="img/other/BTN_arrow_back.svg" alt=""></img>',
        nextArrow: '<img class="slider-reviews" src="img/other/BTN_arrow_forward.svg" alt="">',
        responsive: [
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
              }
        ]
    });

    $('.marquee').marquee({
        //duration in milliseconds of the marquee
        duration: 15000,
        //gap in pixels between the tickers
        
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
      });

    $('.work').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<img class="slider-work_left" <img src="img/instagram/BTN_arrow_back.svg" alt="">',
        nextArrow: '<img class="slier-work_right" src="img/instagram/BTN_arrow_forward.svg" alt="">',
    });

    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function () {
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A92129f50b1cd10763a8cf0c08080a76500473fcfc1be9aac6cc5b9156ecb7ec9&amp;width=716&amp;height=460&amp;lang=ru_RU&amp;scroll=false"></script>');
            $(window).unbind('scroll');
        }
    });

    //phone number
    $('input[type="tel"]').mask("+7 (999) 999-99-99");

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Ваша заявка успешно отправлена!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});


$(window).on('load', function(){
    $('.preloader').delay(300).fadeOut('slow');
});
