$(function () {
  var header = $("#header"),
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
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smooth scroll*/
  jQuery(window).scroll(function () {
    var $sections = $("section");
    $sections.each(function (i, el) {
      let top = $(el).offset().top - 100,
        bottom = top + $(el).height(),
        scroll = $(window).scrollTop(),
        id = $(el).attr("id");
      if (scroll > top && scroll < bottom) {
        $("a.active").removeClass("active");
        $('a[href="#' + id + '"]').addClass("active");
      }
    });
  });

  $("[data-scroll]").on("click", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    // получем идентификатор блока из атрибута href
    var id = $(this).attr("href"),
      // находим высоту, на которой расположен блок
      top = $(id).offset().top;

    // анимируем переход к блоку, время: 800 мс
    $("body,html").animate(
      {
        scrollTop: top,
      },
      800
    );
    $("#nav").removeClass("active");
    $("#nav_toggle").removeClass("active");
  });

  /* Menu nav toggle*/
  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  /*
  var link = $('.nav__toggle');
  var link_active = $('.nav__toggle active');
  var menu = $('.nav');
  var nav_link = $('.nav a');

  link.click(function () {
    link.toggleClass('active');
    menu.toggleClass('active');
  });
  nav_link.click(function () {
    link.toggleClass('active');
    menu.toggleClass('active');
  });

  $("html, body").animate({
    scrollTop: blockOffset
  });
*/

  /*Slider_1*/
  $(".slider_img").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: ".slider-dots",
  });

  $(".slider-dots").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    asNavFor: ".slider_img",
  });

  /*Slider_2
  =============================*/
  $(".reviews__slide").slick({
    speed: 300,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dotsClass: ".slick-arrow",
    /*autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,*/
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* Filter
    =====================*/
  let filter = $("[data-filter]");

  filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data("cat");

        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  /*/ Выпадающий текст */
  /* Показываем FAQ */

  $(".faq__btn").click(function () {
    var box = $(this).parent();
   

    if (!box.hasClass("faq__item_active")) {
      box.addClass("faq__item_active");
      box.children(".faq__answer").slideDown();
    

    } else {
      box.removeClass("faq__item_active");
      box.children(".faq__answer").slideUp();
    }
  });


});
