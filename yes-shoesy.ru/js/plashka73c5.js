$(document).ready(function(){
    $(".yandex_close").click(function(){
        $(".yandex").hide();
        $(".main").css("margin-top","0px");
        $(".topbutton.cart").css('top','0');

        document.cookie = "plashka_shown=yes";
    });
});