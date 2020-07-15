$(function () {

  let header = $("#header"),
  topbtn = $("#topbtn"),
  introH = $("#nav").innerHeight(),
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


  $('.offer__slider').slick({
   
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,

    prevArrow: '<img class="slider-studio_left" <img src="img/Arrow_next.svg" alt="">',
    nextArrow: '<img class="slider-studio_right" src="img/Arrow_back.svg" alt="">',
    
  });

   /* Modal
    =====================*/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

        
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });


});