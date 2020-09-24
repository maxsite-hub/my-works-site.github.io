$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    })
  
$('.gallery, .reviews').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 976,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        autoplay: true  
      }
    },
    {
      breakpoint: 659,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          dots: true,
        autoplay: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});   
$("img.panorama").panorama();

    $('.button-m').click(function() {
  var data = $(this).attr('data-item');
  console.log(data);
  $('.item-name').val('Товар: ' + data);
  });
    
});

