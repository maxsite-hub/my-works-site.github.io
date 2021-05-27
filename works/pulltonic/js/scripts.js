$(document).ready(function() {

    /* lazy load */
    var blazy = new Blazy();

    /* scroll */

    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        if (_href == "#order_form") {
            var product = $(this).parent().find("h4").text();
            $("#order_form select[name='comment'] option[value='" + product + "']").prop("selected", true);
        }
        return false;
    });

      
    $(".slider").slick({
           
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    
        prevArrow:
          '<img class="slider-icon_left"  src="img/BTN_arrow_back.png" alt="">',
        nextArrow:
          '<img class="slider-icon_right" src="img/BTN_arrow_next.png" alt="">',
      });

 
      $(function () {
        $(".rev-block-v3 .container").slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,

          prevArrow:
            '<img class="slick-prev" src="img/BTN_arrow_back.png" alt="">',
          nextArrow:
            '<img class="slick-next" src="img/BTN_arrow_next.png" alt="">',
          responsive: [
            {
              breakpoint: 959,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 639,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
              },
            },
          ],
        });

        $(".slick-slider").click(function () {
          $(this).slick("slickNext");
        });
      });
  

    //product_item open form
    $(".product_item .content .button").click(function() {
        $(".product_item").removeClass("active");
        $(this).parent().parent(".product_item").addClass("active");
    });
    $(".product_item .close").click(function() {
        $(".product_item").removeClass("active");
    });

    //модель в форму
    $('.product_item .content .button').on('click', function() {
        var prodName = $(this).parent().parent().find('.hidden .name').text();
        var prodName2 = $(this).parent().parent().find('.hidden .vendor_code').text();
        $("input[name='comment']").val(prodName + " " + prodName2);
    });

    $("img.panorama").panorama();


});


