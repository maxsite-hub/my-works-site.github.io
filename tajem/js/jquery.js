(function($, undefined){


const setHumburgerMenu = function(){
  let humburgerMove = 38;

  $('.hamburger--arrow-r').click(function(){
    $('.hamburger--arrow-r').css('right', humburgerMove + '%');
    $('.hamburger').toggleClass('is-active');
    $('.blackout').css('display', 'block');
    setTimeout(() => $('.blackout').css('opacity', '1'))
    $('.sidebar_main-menu').css('right', '0');
  })

  $('.blackout').click(function(){
    $('.hamburger--arrow-r').css('right', '0');
    $('.hamburger').toggleClass('is-active');
    $('.blackout').css({
      display: 'none',
      opacity: '0',
    });
    $('.sidebar_main-menu').css('right', '-' + humburgerMove + '%');
  })
}
setHumburgerMenu();


const setScrollUntilAnchor = function(){
  $('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });
}
setScrollUntilAnchor();


const setScrollToTop = function(){
  setInterval(function(){
    if($('.scrollTop').offset().top > 1200){
      $('.scrollTop').css('right', '2%')
    } else {
      $('.scrollTop').css('right', '-30%');
    }
  }, 300);
}
setScrollToTop();



const popup_gallery = (function(){
  let
    $li = $('.popup-gallery__list-item'),
    $links = $li.find(' > a'),
    $lightbox = $('.lightbox'),
    $overlay = $('.lightbox__overlay'),
    $prev = $('.lightbox__prev'),
    $next = $('.lightbox__next'),
    $lightbox__figure = $('.lightbox__figure'),
    targetImg,
    liIndex,
    images =[];


  // @media image - Start
  if( $(window).width() > $(window).height()){
    $lightbox__figure.addClass('lightbox__figure-width');
    $lightbox__figure.removeClass('lightbox__figure-height');
  } else {
    $lightbox__figure.removeClass('lightbox__figure-width');
    $lightbox__figure.addClass('lightbox__figure-height');
  }
  // @media image - End


  // Preload image - Start
  for(let i = 0; i < $links.length; i++){
    images[i] = new Image();
    images[i].src = 'img-popup/' + ++i + '-lg.jpg';
  };
  // Preload image - End

  let setImg = function(src){
    $lightbox.find('img').attr('src', src);
  };

  let getImg = function(index){
    return $li.eq(index).find('> a').attr('href');
  };

  $links.click(function(e){
    e.preventDefault();
    liIndex = $(this).parent().index();
    targetImg = $(this).attr('href');
    setImg(targetImg);
    $lightbox.fadeIn(150);
  });

  $overlay.click(function(){
    $lightbox.fadeOut(150);
  });

  $next.click(function(){
    if((liIndex) < $links.length - 1){
      targetImg = getImg(++liIndex);
      setImg(targetImg);
    } else {
      targetImg = getImg(0);
      liIndex = 0;
      setImg(targetImg);
    }
  });

  $prev.click(function(){
    if((liIndex) > 0){
      targetImg = getImg(--liIndex);
      setImg(targetImg);
    } else {
      targetImg = getImg($links.length - 1);
      liIndex = $links.length - 1;
      setImg(targetImg);
    }
  });

  }()); // popup_gallery - End;


})(jQuery);
