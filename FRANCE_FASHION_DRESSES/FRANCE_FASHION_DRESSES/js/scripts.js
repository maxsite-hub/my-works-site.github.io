
    $(document).ready(function() {
        $("img.panorama").panorama();
        $(".owl-stage").owlCarousel({
            items: 1,
            smartSpeed: 300,
            mouseDrag: false,
            pullDrag: false,
            dots: false,
            nav: true,
            navText: "",
            loop : true,
            navigation: true
            
        });
        
        $(".slider").slick({
           
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        
            prevArrow:
              '<img class="slider-icon_left"  src="images/BTN_arrow_back.png" alt="">',
            nextArrow:
              '<img class="slider-icon_right" src="images/BTN_arrow_next.png" alt="">',
          });
          $(".slider-2").slick({
          
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        
            prevArrow:
              '<img class="slider-icon_left-2"  src="images/BTN_arrow_back.png" alt="">',
            nextArrow:
              '<img class="slider-icon_right-2" src="images/BTN_arrow_next.png" alt="">',
          });
        
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
        
        
        //product_item open form
        $(".product_item .content .button").click(function() {
            $(".product_item").removeClass("active");
            $(this).parent().parent(".product_item").addClass("active");
        });
        $(".product_item .close").click(function() {
            $(".product_item").removeClass("active");
        });
        
        //РјРѕРґРµР»СЊ РІ С„РѕСЂРјСѓ
        $('.product_item .content .button ').on('click', function() {
            var prodName = $(this).parent().parent().find('.hidden .vendor_code ').text();
            $("input[name='comment']").val(prodName);
        });
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
                $(modalId).find(".modal__content").css({
                   opacity: "1"
                });
            }, 200);
        
            // worksSlider.slick('setPosition');
        });
        
        
        modalClose.on("click", function(event) {
            event.preventDefault();
        
            let $this = $(this);
            let modalParent = $this.parents('.modal');
        
            modalParent.find(".modal__content").css({
               opacity: "0"
            });
        
            setTimeout(function() {
                modalParent.removeClass('show');
                $("body").removeClass('no-scroll');
            }, 200);
        });
        
        
        $(".modal").on("click", function(event) {
            let $this = $(this);
        
            $this.find(".modal__content").css({
               opacity: "0"
            });
        
            setTimeout(function() {
                $this.removeClass('show');
                $("body").removeClass('no-scroll');
            }, 200);
        });
        
        $(".modal__content").on("click", function(event) {
            event.stopPropagation();
        });
        
        $(window).on("load", function() {
        
        /* sliders */
        $(".reviews_list").owlCarousel({
            smartSpeed: 300,
            mouseDrag: false,
            pullDrag: false,
            dots: false,
            autoHeight: true,
            navText: "",
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    nav: true,
                    loop: true
                },
                660: {
                    items: 2,
                    margin: 20,
                    nav: true,
                    loop: true
                },
                1170: {
                    items: 3,
                    margin: 20,
                    nav: true,
                    loop: true
                }
            }
        });
        
        });