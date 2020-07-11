$(function () {

  //Slider
  $('.testimonials__blocks').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    dotsClass: 'slider-dots'
  });

   /* Smooth scroll*/
   $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 700);
    $("#nav").removeClass("active");
    $("#nav_toggle").removeClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Check to see if the navbar change padding
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('active');
      $('.logo>img').addClass('logo-active');
    } else {
      $('.header').removeClass('active');
      $('.logo>img').removeClass('logo-active');
    }
  });

  let filter = $("[data-filter]");

  filter.on("click", function(event) {
    event.preventDefault(); //убирает стандартное поведение ссылки
    let cat = $(this).data('filter');

    $("[data-cat]").each(function() {

      let workCat = $(this).data('cat');

    if(workCat == cat) {
      $(this).addClass('show');
    } else {
      $(this).removeClass('show');
    }

    });
  });

});