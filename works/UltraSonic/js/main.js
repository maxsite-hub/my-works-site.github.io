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
      bg_width: 1,
      fg_width: 0.032,
      circle_bg_color: "#ebf0f7",
      time: {
        Days: {
          text: "Days",
          color: "#ffc000",
          show: false,
        },
        Hours: {
          text: "часов",
          color: "#ffc000",
          show: true,
        },
        Minutes: {
          text: "минут",
          color: "#ffc000",
          show: true,
        },
        Seconds: {
          text: "секунд",
          color: "#ffc000",
          show: true,
        },
      },
    });


    $(".s7__slider").slick({
      dots: true,
      dotsClass: "header-dots",
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      prevArrow:
        '<img class="slider-s7_left" <img src="img/icon-arrow-left.png" alt="">',
      nextArrow:
        '<img class="slider-s7_right" src="img/icon-arrow-right.png" alt="">',
    });

    $(".modal").each( function(){
      $(this).wrap('<div class="overlay"></div>')
    });
    
    $(".open-modal").on('click', function(e){
     
      e.preventDefault();
      e.stopImmediatePropagation;
      
      var $this = $(this),
          modal = $($this).data("modal");
         
      
      $(modal).parents(".overlay").addClass("open");
      setTimeout( function(){
        $(modal).addClass("open");
      
      }, 350);
      
      $(document).on('click', function(e){
        var target = $(e.target);
        
        if ($(target).hasClass("overlay")){
          $(target).find(".modal").each( function(){
            $(this).removeClass("open");
          });
          setTimeout( function(){
            $(target).removeClass("open");
          }, 350);
        }
        
      });
      
    });
    
    $(".close-modal").on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation;
      
      var $this = $(this),
          modal = $($this).data("modal");
      
      $(modal).removeClass("open");
      setTimeout( function(){	
        $(modal).parents(".overlay").removeClass("open");
      }, 350);
      
    });
  });