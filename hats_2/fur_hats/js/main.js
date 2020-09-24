$(document).ready(function() {
    
    $("a").click(function() {
        $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
        duration: 500,
        easing: "swing"
        });
        return false;
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoHeight:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});