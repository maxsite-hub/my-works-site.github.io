$(document).ready(function(){


    function addZero(n, needLength) {
        needLength = needLength || 2;
        n = String(n);
        while (n.length < needLength) {
            n = "0" + n;
        }
        return n
    }
    setInterval(function(){
        var timerId = countdown( new Date(2019,9,10,0,0));
        //$('.sale_box .timer_box ul .TimerDays').html(addZero(timerId.days))
        $('.sale_box .timer_box ul .TimerDays').html(0)
        $('.sale_box .timer_box ul .TimerHours').html(addZero(timerId.hours))
        $('.sale_box .timer_box ul .TimerMinutes').html(addZero(timerId.minutes))
        $('.sale_box .timer_box ul .TimerSeconds').html(addZero(timerId.seconds))
        ;}, 1000);

    $('.modal_contain .modal_window .close, .modal_contain_clbk .close, .modal_contain_success .close').on('click',function(){
        $('.shadow_site, .modal_contain, .modal_contain_clbk, .modal_contain_success').fadeOut();
        $('body').removeClass('disable_scroll');
    })

    $(".button_size").click(function(){
        $(this).parent('div').find('.button_size').removeClass('active_button');
        $(this).addClass('active_button');
        $(this).parents('.main').find('.price_old').text($(this).data('price_old'));
        $(this).parents('.main').find('.product_price').text($(this).data('price'));

    });


});