'use strict';


const multiItemSlider = (function () {
  return function (selector) {

  let
    slider = document.querySelector(selector),
    sliderItem = document.querySelectorAll('.ps_slider_item'),
    control = document.querySelectorAll('.ps_slider_control'),
    wrapper = document.querySelector('.ps_slider_wrapper'),
    itemWidth = parseFloat(getComputedStyle(sliderItem[0]).width),
    slider_name = document.querySelector('.slider-name'),
    quote = document.querySelector('.quote q'),
    quote_list = document.querySelectorAll('.quote-list ul li'),
    transform = 0,
    items = [],
    positionLeftItem = 0,
    middle = 2,
    interval = 0,
    config = {
      isCycling: true,
      direction: 'left',
      interval: 4000,
      pause: true,
    };


    let cycle = function(direction) {
      if (!config.isCycling) {
        return;
      }
      interval = setInterval(function() {
        sliderMainFunk(direction);
      }, config.interval);
    };

    sliderItem.forEach(function(item, index){
      items.push({
        item: item,
        position: index,
        transform: transform,
        name: sliderItem[index].getAttribute('name'),
        post: sliderItem[index].getAttribute('post'),
        quote: quote_list[index].innerHTML,
      });
    })

    let position = {
      getMinItem() {
        let indexItem = 0;
        items.forEach(function(item, index){
          if(item.position < items[indexItem].position){
            indexItem = index;
          }
        })
        return indexItem;
      },
      getMaxItem() {
        let indexItem = items.length - 1;
        items.forEach(function(item, index){
          if(item.position > items[indexItem].position){
            indexItem = index;
          }
        })
        return indexItem;
      },
      getMiddleItem(){
        if(middle > 5){
          return middle = 0;
        }
        if(middle < 0) {
          return middle = 5;
        }
        return middle
      },
      getMin(){
        return items[position.getMinItem()].position;
      },
      getMax(){
        return items[position.getMaxItem()].position;
      }
    };

  sliderItem[position.getMiddleItem()].classList.toggle('ps_slider_item_center');


  let sliderMainFunk = function(direction){
    sliderItem[position.getMiddleItem()].classList.toggle('ps_slider_item_center');

    if(direction === 'right'){
      positionLeftItem--;
      middle--;
      let index = position.getMaxItem();
      if(positionLeftItem < position.getMin()){
        items[index].position = position.getMin() - 1;
        items[index].transform -= (itemWidth) * items.length;
        sliderItem[index].style.transform = 'translateX(' +  items[index].transform + 'px)';
      }
      sliderItem[position.getMiddleItem()].classList.toggle('ps_slider_item_center');

      transform += itemWidth;

      setItemName(
        items[position.getMiddleItem()].name,
        items[position.getMiddleItem()].post,
        items[position.getMiddleItem()].quote
      )
    }

    if(direction === 'left'){
      positionLeftItem++;
      middle++;
      if(positionLeftItem + 4 > position.getMaxItem()){
        let index = position.getMinItem();
        items[index].position = position.getMax() + 1;
        items[index].transform += (itemWidth) * items.length;
        sliderItem[index].style.transform = 'translateX(' +  items[index].transform + 'px)';
      }
      sliderItem[position.getMiddleItem()].classList.toggle('ps_slider_item_center');

      transform -= itemWidth;

      setItemName(
        items[position.getMiddleItem()].name,
        items[position.getMiddleItem()].post,
        items[position.getMiddleItem()].quote
      )
    }
      wrapper.style.transform = 'translateX(' +  transform + 'px)';
  }


// changing quote and name from slider_name
  let setItemName = function(itemName, itemPost, itemQuote){
    slider_name.style.opacity = '0';
    quote.style.opacity = '0';
    setTimeout(() => {
      quote.innerHTML = itemQuote;
      slider_name.children[0].innerHTML = itemName;
      slider_name.children[1].innerHTML = itemPost;
    }, 400);
    setTimeout(() => {
      slider_name.style.opacity = '1';
      quote.style.opacity = '1';
    }, 400);
  }
  setItemName(
    items[position.getMiddleItem()].name,
    items[position.getMiddleItem()].post,
    quote_list[0].innerHTML
  );


  let clickFunk = function(){
    let direction = this.classList.contains('ps_slider_control_right') ? 'right' : 'left';
    sliderMainFunk(direction);
    clearInterval(interval);
    cycle(config.direction);
  }

  let setListener = function(){
    control.forEach(function(item){
      item.addEventListener('click', clickFunk);
      item.addEventListener('mousedown', function(e){
        e.preventDefault();
      });
    });
    if (config.pause && config.isCycling) {
      slider.addEventListener('mouseenter', function () {
        clearInterval(interval);
      });
      slider.addEventListener('mouseleave', function () {
        clearInterval(interval);
        cycle(config.direction);
      });
  }

  }

  // инициализация
  setListener();
  cycle(config.direction);


  }
}());

const slider = multiItemSlider('.ps_slider');
