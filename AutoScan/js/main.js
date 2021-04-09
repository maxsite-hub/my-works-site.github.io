$(function () {
    
    $(".slider-arrows").html("");

    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });

      return false;
    });
    
    now = new Date();
    var perem = (24 - now.getHours()) * 3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
      animation: "smooth",
      text_size: 0.065,
      bg_width: 0.902,
      fg_width: 0.042,
      use_background: 303036,
      time: {
        Days: {
          text: "Days",
          color: "#e81c2e",
          show: false,
        },
        Hours: {
          text: "часов",
          color: "#e81c2e",
          show: true,
        },
        Minutes: {
          text: "минут",
          color: "#e81c2e",
          show: true,
        },
        Seconds: {
          text: "секунд",
          color: "#e81c2e",
          show: true,
        },
      },
    });


    $(".s8__slider").slick({
      dots: true,
      dotsClass: "header-dots",
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      prevArrow:
        '<img class="slider-s8_left" <img src="img/icon-arrow-left.png" alt="">',
      nextArrow:
        '<img class="slider-s8_right" src="img/icon-arrow-right.png" alt="">',
    });
  });