
  const button = document.querySelector('.surfboard-box__circle');
  const buttonSecond = document.querySelector('.surfboard-box__circle--2');
  const buttonThird = document.querySelector('.surfboard-box__circle--3');
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });


  button.addEventListener('click', () => {
  button.classList.toggle('active');
  });

  buttonSecond.addEventListener('click', () => {
  buttonSecond.classList.toggle('active');
  }); 
  
  buttonThird.addEventListener('click', () => {
  buttonThird.classList.toggle('active');
  });





$(function(){

    $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="">',
    asNavFor: '.slider-dotshead',
    }); 

    $('.slider-dotshead').slick({
        asNavFor: '.header__slider',
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
          {
            breakpoint: 961,
            settings: "unslick"
          },
        ]
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="">',
        asNavFor: '.slider-map',
        responsive: [
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows:false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,

        responsive: [
          {
            breakpoint: 1103,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              centerMode: true,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          },
        ]

        });
   

    $('.holders__slider, .shop__slider').slick ({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="">',
    });

  });

    


$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });


  //калькулятор 
  $('.quantity-button').on('click', function(){
    let parents = $(this).parents('.holders-slider__info');
     let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
     $('.summ', parents).html('$' + summ);
    });
    
    $('.quantity').each(function() {
    let parents = $(this).parents('.holders-slider__info');
    let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
     $('.summ', parents).html('$' + summ);
    });

    /*wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,       // default
      live:         true        // default
    }
    );*/

    new WOW().init(); // инициализируем библиотеку wow.js

    /*$("#callme").click(function() { // ID откуда кливаем
      $('html, body').animate({
          scrollTop: $(".surf__subtitle").offset().top  // класс объекта к которому приезжаем
      }, 600); // Скорость прокрутки
  });*/
});

