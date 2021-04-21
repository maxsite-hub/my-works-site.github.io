$(document).ready(function(){
    $(window).scroll(function(){
	    if ($(this).scrollTop() > 200) {
	    $('#totop').fadeIn();
	    } else {
	    $('#totop').fadeOut();
	    }
    });
    $('#totop').hide().click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    bg = $(".DarkBg");
	popup = $(".Popup");
    var block = $(".PopupBlock",popup);
    // Форма заказа звонка
    $(".button.call,.needhelp").click(function(){
    	hideFlash();
    	var msg = $(this).attr('rel');
    	block.load('call',{},function(){
    	    initOrderForm(block);
        	block.find("textarea[name='message']").val(msg);
            bg.fadeIn(300);
            popup.css({'top':(getBodyScrollTop()+50)+'px'});
            popup.show();
            $(".CloseButton",popup).add(bg).unbind().click(function(){
                bg.fadeOut(300);
                popup.hide();
            	showFlash();
            });
    	});
    });
    // Форма заказа
    $(".button.order").click(function(){
    	hideFlash();
    	var msg = $(this).attr('rel');
    	block.load('order/'+$(this).attr('id'),{},function(){
    	    initOrderForm(block);
        	block.find("textarea[name='message']").val(msg);
            bg.fadeIn(300);
            popup.css({'top':(getBodyScrollTop()+50)+'px'});
            popup.show();
            $(".CloseButton",popup).add(bg).unbind().click(function(){
                bg.fadeOut(300);
                popup.hide();
            	showFlash();
            });
    	});
    });
    // Форма отзыва
    $(".button.write").click(function(){
    	hideFlash();
    	block.load('testimonial',{},function(){
    	    initOrderForm(block);
            bg.fadeIn(300);
            popup.css({'top':(getBodyScrollTop()+50)+'px'});
            popup.show();
            $(".CloseButton",popup).add(bg).unbind().click(function(){
                bg.fadeOut(300);
                popup.hide();
            	showFlash();
            });
    	});
    });
    var hideFlash = function(){
    	$("iframe,object,embed").hide();
    }
    var showFlash = function(){
    	$("iframe,object,embed").show();
    }
    // Fancybox
    $("a.fancybox").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600,
		'speedOut'		:	200,
		'overlayShow'	:	false,
		'hideOnOverlayClick':	true
	});
    // Cycle
    $(".cycle").cycle({
		fx: 'fade',
	    pause: 1
	});
    // Подсветка пунктов меню
    $(".menu a,.menu2 a,.cats2 a").each(function(i,item){
        var url = $(item).attr('href');
        var re = new RegExp(url+'$','i');
        if (re.test(location.href) || (url=='./' && !location.href.replace("http://","").split("/")[1])){
            $(item).parents('li').addClass('active');
        }
    });
    // Сертификаты
    var certblock = $(".cert");
    var certs = $(".items",certblock);
    $(".arrow.R",certblock).click(function(){
    	$(".item:first",certs).appendTo(certs);
    });
    $(".arrow.L",certblock).click(function(){
    	$(".item:last",certs).prependTo(certs);
    });
    // Читать далее, отзывы
    $(".testimonials .text>a.go-on").click(function(){
    	$(this).parent().find(".bullshit").show();
    	$(this).prev().remove();
    	$(this).remove();
    });
    // Корзина
    cart = new Cart('cart');
    var cartButton = $(".topbutton.cart");
    $(".button.cart").click(function(){
    	cart.add($(this).attr('id'),1);
    	var img = $(this).parents(".item").find(".img img:eq(0)");
    	var imgOffset = img.offset();
    	var cartOffset = cartButton.offset();
		//alert("top"+cartOffset.top+"left"+cartOffset.left);
    	img = img.clone().addClass('toCart').css({
    		'top': imgOffset.top+'px',
    		'left':imgOffset.left+'px',
			'width':'400px',
			'height':'400px'
    	}).appendTo("body").animate({
    		'top': (cartOffset.top+5)+'px',
    		'left':(cartOffset.left+10)+'px',
			'width':'25px',
    		'height':'25px'
    	},600,function(){
    		img.remove();
        	cartButton.addClass('active').unbind('hover').hover(function(){
        		$(this).removeClass('active');
        	});
        	cartButton.click();
    	});
    });
    cartButton.click(function(){
		console.log('adding');
    	hideFlash();
    	block.load('cart',{},function(){
    	    initCart(block);
            bg.fadeIn(300);
            popup.css({'top':(getBodyScrollTop()+50)+'px'});
            popup.show();
            $(".CloseButton",popup).add(bg).unbind().click(function(){
                bg.fadeOut(300);
                popup.hide();
            	showFlash();
            });
    	});
    });
    // Параметры товара
    $(".param select").change(function(){
    	var option = $("option:selected",this);
    	var item = $(this).parents('.item');
    	var price = option.attr('rel');
    	var oldprice = option.attr('rel2');
    	if (price) {
    		item.find(".price").show().find("span").text(price);
    	} else {
    		item.find(".price").hide().find("span").text(price);
    	}
    	if (oldprice) {
    		item.find(".oldprice").show().find("span").text(oldprice);
    	} else {
    		item.find(".oldprice").hide().find("span").text(oldprice);
    	}
    	item.find(".param select").val($(this).val());
    	item.find(".button.cart,.button.order").attr('id',$(this).val());
    });
    // Фильтр
    var filterBlock = $(".filter");
    var filter = new Filter('filter');
    filterBlock.find("input").change(function(){
    	var blockOffset = filterBlock.offset();
    	var boxOffset = $(this).offset();
    	$(".notice",filterBlock).show().animate({
    		'top':(-blockOffset.top+boxOffset.top)+'px'
    	});
    	//if ($(":checked",filterBlock).length<1) { $(".notice",filterBlock).hide(); }
        filter.save();
    });
    if (filterBlock.length>0) {
        var priceRange = $('.slider',filterBlock).slider({
    		range:true,
    		step:100,
    		min:$("#price_from").attr('rel'),
    		max:$("#price_to").attr('rel'),
    		values:[ parseInt($("#price_from").val()), parseInt($("#price_to").val()) ],
    		create:function(e,ui){
    			$(e.target).wrapInner('<div class="in"></div>');
    		},
    		slide: function(event,ui) {
    			$("#price_from").val(ui.values[0]);
    			$("#price_to").val(ui.values[1]);
    		},
    		change: function(event,ui) {
    			$("#price_from").change();
    		}
    	});
        $(".reset",filterBlock).click(function(){
        	$("input:checked",filterBlock).attr('checked','');
        	$("#price_from").val($("#price_from").attr('rel'));
        	$("#price_to").val($("#price_to").attr('rel'));
        	priceRange.slider( "values" , [ parseInt($("#price_from").val()), parseInt($("#price_to").val()) ] )
        	filter.clear();
        });
    }
    // Выравнивание каталога
    var trioBrief,trioHeader,Hbrief=0,Hheader=0;
    $(".catalog .items.fix>.item").each(function(i,item){

/*    	Hbrief = Math.max(Hbrief,$(".brief",item).height()+$(".oldprice",item).height());
    	Hheader = Math.max(Hheader,$("h3",item).height());
    	if (i % 3 == 0 ) {
    		trioBrief = $(".brief",item);
    		trioHeader = $("h3",item);
    	} else if(i % 3 == 1) {
    		trioBrief = trioBrief.add($(".brief",item));
    		trioHeader = trioHeader.add($("h3",item));
    	} else if(i % 3 == 2) {
    		trioBrief = trioBrief.add($(".brief",item));
    		trioHeader = trioHeader.add($("h3",item));
    		trioBrief.each(function(j,brief){
    			$(brief).height(Hbrief-6+($(".oldprice",$(brief).parent()).length>0 ? -16 : 0));
    		});
    		trioHeader.each(function(j,header){
    			$(header).height(Hheader-5);
    		});
    		Hbrief = 0;
    		Hheader = 0;
    	}*/
    });

    // Ночная акция
    /*var hours = new Date().getHours();
    if ((hours>=22 || hours<=8) && !$.cookie('night_discount')){
    	setTimeout(function(){
        	block.load('popup',{},function(){
            	bg.fadeIn(300);
                popup.css({'top':(getBodyScrollTop()+100)+'px'});
                popup.show();
                $(".CloseButton",popup).add(bg).unbind().click(function(){
                	$.cookie('night_discount', 1, {expires:7,path:'/'});
                    bg.fadeOut(300);
                    popup.hide();
                });
                $("input[type='submit']",popup).click(function(){
                	$.cookie('night_discount', 1, {expires:180,path:'/'});
                    return true;
                });
        	});
    	},5000);
    }*/

    // Всплывающее окно
    if($("body").attr('rel')=='popup' && !$.cookie('no_exit')){
    	var exitsplashmessage = $("body").attr('name');
        function addLoadEvent(func) {
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
                window.onload = func;
            } else {
                window.onload = function() {
                    if (oldonload) {
                        oldonload();
                    }
                    func();
                }
            }
        }
        function addClickEvent(a,i,func) {
            if (typeof a[i].onclick != 'function') {
                a[i].onclick = func;
            }
        }
        var PreventExitSplash = false;
        function DisplayExitSplash(){
            if(PreventExitSplash == false){
				//$.cookie('no_exit', 1, {expires: 1,path: "/"});//ставим куки
                //$(".button.call:eq(0)").click();
                return exitsplashmessage;
            }
        }
        var a = document.getElementsByTagName('A');
        for (var i = 0; i < a.length; i++) {
            if(a[i].target !== '_blank') {
                addClickEvent(a,i, function(){
                    PreventExitSplash=true;
                });
            } else{
                addClickEvent(a,i, function(){
                    PreventExitSplash=false;
                });
            }
        }
        disablelinksfunc = function(){
            var a = document.getElementsByTagName('A');
            for (var i = 0; i < a.length; i++) {
                if(a[i].target !== '_blank') {
                    addClickEvent(a,i, function(){
                        PreventExitSplash=true;
                    });
                } else{
                    addClickEvent(a,i, function(){
                        PreventExitSplash=false;
                    });
                }
            }
        }
        addLoadEvent(disablelinksfunc);
        disableformsfunc = function(){
            var f = document.getElementsByTagName('FORM');
            for (var i=0;i<f.length;i++){
                if (!f[i].onclick){
                    f[i].onclick=function(){
                        PreventExitSplash=true;
                    }
                }else if (!f[i].onsubmit){
                    f[i].onsubmit=function(){
                        PreventExitSplash=true;
                    }
                }
            }
        }
        addLoadEvent(disableformsfunc);
        window.onbeforeunload = DisplayExitSplash;
    }

    var img1 = new Image();img1.src = 'images/Popup1.png';
    var img2 = new Image();img2.src = 'images/Popup2.png';

    // Всплывающая информация
    $(".popinfo").click(function(){
    	hideFlash();
    	block.load($(this).attr('href'),{},function(){
            bg.fadeIn(300);
            popup.css({'top':(getBodyScrollTop()+50)+'px'});
            popup.show();
            $(".CloseButton",popup).add(bg).unbind().click(function(){
                bg.fadeOut(300);
                popup.hide();
            	showFlash();
            });
    	});
    	return false;
    });
});
var bg,popup,cart,filter;
function Filter(name) {
	this.name = name;
	var block = $(".filter");
	var counter = $("#found_count",block);

	this._init = function(){
		var cookie = $.cookie(this.name);
		this.items = cookie ? $.parseJSON(cookie) : [];
		if (!this.items) {
			$.cookie(this.name, null);
		}
		//counter.text(this.count());
	}

	this.count = function(){
		$.post('filter/total',{},function(data){
			counter.text(data);
			if (data>0) {
				counter.parent().find("a").show();
			} else {
				counter.parent().find("a").hide();
			}
		});
	}

	this.save = function() {
		var items = [];
		block.find("input:checked").each(function(i,item){
			items[i] = $(item).val();
		});
        $.cookie(this.name, $.toJSON(items), {expires:30,path:'/'});
        $.cookie(this.name+'_price_from', $("#price_from",block).val(), {expires:30,path:'/'});
        $.cookie(this.name+'_price_to', $("#price_to",block).val(), {expires:30,path:'/'});
        this.count();
    }

	this.clear = function() {
		this.items = [];
        $.cookie(this.name, null);
        $.cookie(this.name+'_price_from', null);
        $.cookie(this.name+'_price_to', null);
        counter.text(0);
    }

	this._init();
}
function Cart(name) {
	this.name = name;
	var counter = $("#cartCounter");

	this._init = function(){
		var cookie = $.cookie(this.name);
		this.items = cookie ? $.parseJSON(cookie) : {};
		if (!this.items) {
			$.cookie(this.name, null);
		}
		counter.text(this.count());
	}

	this.count = function(){
		var i = 0;
		$.each(this.items,function(j,item){ i++; });
		return i;
	}

	this.add = function(val,count) {
        this.items[val] = this.items[val] ? parseInt(this.items[val])+parseInt(count) : count;
        this._refresh();
    }

	this.edit = function(val,count) {
        this.items[val] = count;
        this._refresh();
    }

	this.del = function(val) {
        delete this.items[val];
        this._refresh();
    }

	this._refresh = function() {
        $.cookie(this.name, $.toJSON(this.items), {expires:30,path:'/'});
        counter.text(this.count());
    }

	this.clear = function() {
		this.items = {};
        $.cookie(this.name, null, {expires:30,path:'/'});
        counter.text(0);
    }

	this._init();
}
var initCart = function(block){
	// Сохранение
    $("form .Buttons .send",block).click(function(){
        $(this).unbind();
        $("form",block).submit(function(){
            $(this).ajaxSubmit({
                success: function(data) {
                    if (data=='ok') {
                        $(".successHide",block).hide();
                        $(".successShow",block).show();
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
    $("form .Buttons .cancel",block).click(function(){
        bg.click();
        return false;
    });
    // Очистить
    $("form .Buttons .clear",block).click(function(){
    	bg.click();
    	cart.clear();
        return false;
    });
    // Удалить
    $("form .button.delete",block).click(function(){
        cart.del($(this).parents("tr").attr('rel'));
        $(this).parents("tr").remove();
        if (cart.count()==0) {
        	$("tr[rel='shipping']",block).remove();
        }
        $("#cartTotalPrice").load('cart/total');
        return false;
    });
    // Кол-во
    $("form input[name^='count']",block).change(function(){
        cart.edit($(this).parents("tr").attr('rel'),$(this).val());
        $("#cartTotalPrice").load('cart/total',{},function(){
        	total = intval(+$("#cartTotalPrice").text());
        	if (total>freeShipping && freeShipping) {
        		$("tr[rel='shipping']",block).hide();
        	} else {
        		$("#cartTotalPrice").text(total+shipping);
        		$("tr[rel='shipping']",block).show();
        	}
        });
    });
    // Free shipping check
	var total = intval($("#cartTotalPrice").text());
	var freeShipping = intval($("#freeShippingPrice").text());
	var shipping = intval($("#shippingPrice").text());
	if (total>freeShipping && freeShipping) {
		$("tr[rel='shipping']",block).hide();
	} else {
		$("#cartTotalPrice").text(total+shipping);
		$("tr[rel='shipping']",block).show();
	}
    // Смежные товары
    $(".catalog .button.cart",block).click(function(){
    	cart.add($(this).attr('id'),1);
		$(".topbutton.cart").click();
    });
}
var initOrderForm = function(block){
    // Сохранение
    $("form .Buttons .send",block).click(function(){
        $(this).unbind();
        if ($(this).attr('rel')) {
            $("form",block).attr('action',$("form",block).attr('action')+'/'+$(this).attr('rel'));
        }
        $("form",block).submit(function(){
            $(this).ajaxSubmit({
                success: function(data) {
                    if (data == 'ok') {
                        //dataLayer.push({data});
                        $(".successHide",block).hide();
                        $(".successShow",block).show();
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
    $("form .Buttons .cancel",block).click(function(){
        $(".DarkBg").click();
        block.load($("form",block).attr('action'),{},function(data){
            block.html(data);
            initOrderForm(block);
        });
        return false;
    });
    // Оплата
    $("form .Buttons .pay",block).click(function(){
        //$(this).unbind();
        $("form",block).attr('action',$("form",block).attr('action')+'/pay');
        $("form .Buttons .send",block).click();
        return false;
    });
    // mask
    if (!$.browser.msie && !parseInt($.browser.version)<7) {
    	$('.phone_number',block).each(function(i,item){
    		var mask = $(item).attr('rel');
    		if (mask) {
    			$(item).mask(mask);
    		}
    	});
    }
}
function getBodyScrollTop(){
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}
function intval( mixed_var, base ) {	// Get the integer value of a variable
	var tmp;
	if( typeof( mixed_var ) == 'string' ){
		tmp = parseInt(mixed_var);
		if(isNaN(tmp)){
			return 0;
		} else{
			return tmp;
		}
	} else if( typeof( mixed_var ) == 'number' ){
		return Math.floor(mixed_var);
	} else{
		return 0;
	}
}