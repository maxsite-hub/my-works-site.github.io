var POPULAR = function (id, count) {
    $.ajax({
        type: "POST",
        url: '/cart/addtocart',
        data: {id: id, q: count},
    });
}
// правка на el-postel

$(document).ready(function () {


	
			
//	$('[name="phone"]').mask('+9 (999) 999-99-99');	
	
    document.mobile = false;

    bg = $(".DarkBg");
    popup = $(".Popup");
    var block = $(".PopupBlock", popup);
    // info size
    $(".btnsize").click(function () {
        hideFlash();
        var msg = $(this).attr('rel');
        var linkpage = $(this).attr('href');
        block.load(linkpage, {}, function () {
            //initOrderForm(block);
            //block.find("textarea[name='message']").val(msg);
            bg.fadeIn(300);
            popup.css({'top': (getBodyScrollTop() + 50) + 'px'});
            popup.show();
            $(".CloseButton", popup).add(bg).unbind().click(function () {
                bg.fadeOut(300);
                popup.hide();
                showFlash();
            });
        });
        return false;
    });
    // Форма заказа звонка
    // Форма заказа
 
    // Форма отзыва

    var hideFlash = function () {
        $("iframe,object,embed").not("#vk_groups iframe, #ok_group_widget iframe").hide();
    }
    var showFlash = function () {
        $("iframe,object,embed").not("#vk_groups iframe, #ok_group_widget iframe").show();
    }
    // Fancybox
    $("a.fancybox").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false,
        'hideOnOverlayClick': true
    });

    // Корзина
    cart = new Cart('cart');
    var cartButton = $(".top_button");
    // добавляем  товар в корзину
    $(".add_to_cart").click(function () {
		
		
        var price = $(this).parents('.main').find('.product_price').text();
        var price_old = $(this).parents('.main').find('.price_old').text();
		var name = $(this).parents('.main').find('h3').text();
		var _src = $(this).parents('li').find('.image').find('img').attr('src');
		var code = $(this).parents('li').find('.image').find('[name="code"]').val();
		
		$('.order_modal .image img').attr('src', _src);
		$('.order_modal .price_span_old').text(price_old);
		$('.order_modal .p-price .price_span').text(price);
		$('.order_modal form [name="price"]').val(price);
		$('.order_modal form [name="article"]').val(code);
		$('.order_modal form [name="product"]').val(name);
		
		$('.shadow_site, .modal_contain').fadeIn();
		
        return false;
    });
	
	$(".order-form").on('submit', function(e){
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: '/send_lead.php',
			data: $(this).serialize(),
		}).done(function(response) {
			if(response == 1){
				$('.modal_contain').hide();
				$('.order_success p').text('Ваш заказ успешно оформлен. Наш менеджер перезвонит вам в ближайшее время!');
				$('.modal_contain_success').show();
				window.location.replace('/thanks.html'); 
			}else{
				alert('Заказ не был отправлен из за технической ошибки. Пожалуйста, позвоните по номеру телефону указанному в шапке сайта, для подтверждения заказа');
			}
		});
	});
	
	$(".callback-form").on('submit', function(e){
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: '/send.php',
			data: $(this).serialize(),
		}).done(function(response) {
			if(response == 1){
				$('.modal_contain_clbk').hide();
				$('.order_success p').text('Ваша заявка принята! Наш менеджер перезвонит вам в ближайшее время');
				$('.modal_contain_success').show();
			}else{
				alert('Заказ не был отправлен из за технической ошибки. Пожалуйста, позвоните по номеру телефону указанному в шапке сайта, для подтверждения заказа');
			}
		});
	});
	
	$(".contacts a").click(function () {
		
		/*
        price=$(this).parents('.main').find('.product_price').text();
        price_old=$(this).parents('.main').find('.price_old').text();
        position=$(this).parents('.main').find('.active_button').data('pos');


        cart.add($(this).data('id')+':'+position, 1);
        cartButton.click();
		*/
		
		$('.shadow_site, .modal_contain_clbk').fadeIn();
		
        return false;
    });

    // Всплывающее окно
    if ($("body").attr('rel') == 'popup' && !$.cookie('no_exit')) {
        var exitsplashmessage = $("body").attr('name');

        function addLoadEvent(func) {
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
                window.onload = func;
            } else {
                window.onload = function () {
                    if (oldonload) {
                        oldonload();
                    }
                    func();
                }
            }
        }

        function addClickEvent(a, i, func) {
            if (typeof a[i].onclick != 'function') {
                a[i].onclick = func;
            }
        }

        var PreventExitSplash = false;

        function DisplayExitSplash() {
            if (PreventExitSplash == false) {
                //$.cookie('no_exit', 1, {expires: 1,path: "/"});//ставим куки
                //$(".button.call:eq(0)").click();
                return exitsplashmessage;
            }
        }

        var a = document.getElementsByTagName('A');
        for (var i = 0; i < a.length; i++) {
            if (a[i].target !== '_blank') {
                addClickEvent(a, i, function () {
                    PreventExitSplash = true;
                });
            } else {
                addClickEvent(a, i, function () {
                    PreventExitSplash = false;
                });
            }
        }
        disablelinksfunc = function () {
            var a = document.getElementsByTagName('A');
            for (var i = 0; i < a.length; i++) {
                if (a[i].target !== '_blank') {
                    addClickEvent(a, i, function () {
                        PreventExitSplash = true;
                    });
                } else {
                    addClickEvent(a, i, function () {
                        PreventExitSplash = false;
                    });
                }
            }
        }

        addLoadEvent(disablelinksfunc);
        disableformsfunc = function () {
            var f = document.getElementsByTagName('FORM');
            for (var i = 0; i < f.length; i++) {
                if (!f[i].onclick) {
                    f[i].onclick = function () {
                        PreventExitSplash = true;
                    }
                } else if (!f[i].onsubmit) {
                    f[i].onsubmit = function () {
                        PreventExitSplash = true;
                    }
                }
            }
        }
        addLoadEvent(disableformsfunc);
        window.onbeforeunload = DisplayExitSplash;
    }
});

var img1 = new Image();
img1.src = 'images/Popup1.png';
var img2 = new Image();
img2.src = 'images/Popup2.png';

// Всплывающая информация
$(".popinfo").click(function () {
    hideFlash();
    block.load($(this).attr('href'), {}, function () {
        bg.fadeIn(300);
        popup.css({'top': (getBodyScrollTop() + 50) + 'px'});
        popup.show();
        $(".CloseButton", popup).add(bg).unbind().click(function () {
            bg.fadeOut(300);
            popup.hide();
            showFlash();
        });
    });
    return false;
});

var bg, popup, cart, filter;

// объект корзина
function Cart(name) {
    this.name = name;
    var counter = $("#cartCounter");

    this._init = function () {
        var cookie = $.cookie(this.name);
        this.items = cookie ? $.parseJSON(cookie) : {};
        if (!this.items) {
            $.cookie(this.name, null);
        }
        counter.text(this.count());
    };

    this.count = function () {
        var i = 0;
        $.each(this.items, function (j, item) {
            i++;
        });
        return i;
    };

    this.add = function (val, count) {
        this.items[val] = this.items[val] ? parseInt(this.items[val]) + parseInt(count) : count;
        this._refresh();
    };

    this.edit = function (val, count) {
        this.items[val] = count;
        this._refresh();
    };

    this.del = function (val) {
        delete this.items[val];
        this._refresh();
    };

    this._refresh = function () {
        $.cookie(this.name, $.toJSON(this.items), {expires: 30, path: '/'});
        counter.text(this.count());
    };

    this.clear = function () {
        this.items = {};
        $.cookie(this.name, null, {expires: 30, path: '/'});
        counter.text(0);
    };

    this._init();
}

var initCart = function (block) {
    // Сохранение
    $("form .Buttons .send", block).click(function () {
        $(this).unbind();
        $("form", block).submit(function () {
            $(this).ajaxSubmit({
                success: function (data) {
                    if (data == 'ok') {
                        $(".successHide", block).hide();
                        $(".successShow", block).show();
                        cart.clear();
                    } else {
                        block.html(data);
                        initOrderForm(block);
                    }
                }
            });
            return false;
        }).submit();
        return false;
    });
    // Отмена
    $("form .Buttons .cancel", block).click(function () {
        bg.click();
        return false;
    });
    // Очистить
    $("form .Buttons .clear", block).click(function () {
        bg.click();
        cart.clear();
        return false;
    });
    // Удалить
    $("form .button.delete", block).click(function () {
        var id;
        var value;

        if ($(this).parents('tr').find("input[name^='count']").val()) {
            value = $(this).parents('tr').find("input[name^='count']").val();
        } else {
            value = $(this).parent().prev().find("input[name^='count']").val();
        }

        if ($(this).parents("tr").attr('rel')) {
            id = $(this).parents("tr").attr('rel');
            cart.del(id);
        } else {
            id = $(this).parent().attr('rel');
            cart.del(id);
        }



        POPULAR(
            id.split(':')[0],
            -value
        );


        //cart.del($(this).parents("tr").attr('rel'));
        //$(this).parents("tr").remove();

        var cart_item = $('*[data-product-id="' + id + '"]');
        $(cart_item).remove();


        if (cart.count() == 0) {
            $("tr[rel='shipping']", block).remove();
        }
        $("#cartTotalPrice, #cartTotalPrice2").load('cart/total');
        return false;
    });


    // Кол-во

    $("form input[name^='count'], .cart-product-count input[name^='count']", block).change(function () {

        var id = $(this).data('product-id');
        var price = $(this).data('product-price');


        cart.edit(id, $(this).val());

        $("#cartTotalPrice, #cartTotalPrice2").load('cart/total', {}, function () {
            total = intval(+$("#cartTotalPrice").text());
            if (total > freeShipping && freeShipping) {
                $("tr[rel='shipping']", block).hide();
            } else {
                $("#cartTotalPrice, #cartTotalPrice2").text(total + shipping);
                $("tr[rel='shipping']", block).show();
            }
        });
    })
    ;
    // Free shipping check
    var total = intval($("#cartTotalPrice").text());
    var freeShipping = intval($("#freeShippingPrice").text());
    var shipping = intval($("#shippingPrice").text());
    if (total > freeShipping && freeShipping) {
        $("tr[rel='shipping']", block).hide();
    } else {
        $("#cartTotalPrice, #cartTotalPrice2").text(total + shipping);
        $("tr[rel='shipping']", block).show();
    }
    // Смежные товары
    $(".catalog .button.cart", block).click(function () {
        cart.add($(this).attr('id'), 1);
        $(".topbutton.cart").click();
    });
}
var initOrderForm = function (block) {
    // Сохранение
    $("form .Buttons .send", block).click(function () {
        $(this).unbind();
        if ($(this).attr('rel')) {
            $("form", block).attr('action', $("form", block).attr('action') + '/' + $(this).attr('rel'));
        }
        $("form", block).submit(function () {
            $(this).ajaxSubmit({
                success: function (data) {

                    //Гдето то тут запускаем транзакцию

                    /*  setTimeout(function () {
                          window.b_criteo_data = window.b_criteo_data || [];
                          window.b_criteo_id = window.b_criteo_id || false;

                          if (window.b_criteo_id !== false) {
                              console.log(window.b_criteo_data);
                              console.log(window.b_criteo_id);

                              window.criteo_q = window.criteo_q || [];
                              window.criteo_q.push(
                                  {event: "setAccount", account: 43530},
                                  {event: "setSiteType", type: "d"},
                                  {event: "trackTransaction", id: window.b_criteo_id, item: window.b_criteo_data}
                              );

                              window.b_criteo_id = false;

                              console.log('trackTransaction');
                          }


                      }, 1000);
  */

                    if (data == 'ok') {
                        //eval('dataLayer.push({'+ data+'});');
                        $(".successHide", block).hide();
                        $(".successShow", block).show();
                        cart.clear();
                    } else {
                        block.html(data);
                        initOrderForm(block);
                    }
                }
            });
            return false;
        }).submit();
        return false;
    });
    // Отмена
    $("form .Buttons .cancel", block).click(function () {
        $(".DarkBg").click();
        block.load($("form", block).attr('action'), {}, function (data) {
            block.html(data);
            initOrderForm(block);
        });

        return false;
    });
    // Оплата
    $("form .Buttons .pay", block).click(function () {
        //$(this).unbind();
        $("form", block).attr('action', $("form", block).attr('action') + '/pay');
        $("form .Buttons .send", block).click();
        return false;
    });
    // mask

        $('.phone_number', block).each(function (i, item) {
            var mask = $(item).attr('rel');
            $(this).mask("+7(999)999-99-99");
        });

}

function getBodyScrollTop() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

function intval(mixed_var, base) {    // Get the integer value of a variable
    var tmp;
    if (typeof(mixed_var) == 'string') {
        tmp = parseInt(mixed_var);
        if (isNaN(tmp)) {
            return 0;
        } else {
            return tmp;
        }
    } else if (typeof(mixed_var) == 'number') {
        return Math.floor(mixed_var);
    } else {
        return 0;
    }
}
