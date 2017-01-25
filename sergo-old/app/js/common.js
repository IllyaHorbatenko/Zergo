$(function() {

    //SVG Fallback
    // if(!Modernizr.svg) {
    // 	$("img[src*='svg']").attr("src", function() {
    // 		return $(this).attr("src").replace(".svg", ".png");
    // 	});
    // };
});

$(document).ready(function() {    
    // скролл по ссылке с атрибутом href 
    // $(".header_nav a[href*=#]").on("click", function(e) {
    //     e.preventDefault();
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $(anchor.attr('href')).offset().top
    //     }, 500);
    //     return false;
    // });
    // Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
    // $(".scroll_to").on("click", function(e) {
    //     e.preventDefault();
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $("#" + anchor.data('scroll')).offset().top
    //     }, 500);
    //     return false;
    // });
    //  Активация слайдера

    // $(".owl-carousel").owlCarousel({
    //     loop: true,
    //     items: 1,
    //     dots: true
    // });
    // нажатие на кнопку input:[submit]
    $(".main_content .form_reg input[type = submit]").click(function(e) {
        e.preventDefault();  
        $('.main_content').addClass('reg');   
        $('.main_content_wrap').addClass('form_reg_in');   
    });
    // анимация 
    $(".form_reg_in").animated("flipInX");
    $(".hidden_txt_block").animated("fadeInUp");
    // Select в модальном окне
    $(document).click(function() {
        $('.slct').removeClass('active');
        $('.slct').parent().find('.drop').slideUp("fast");
    }); 
    $('.slct').click(function() {
        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.drop');
        //  закрываем все открытые
        $('.slct').removeClass('active').parent().find('.drop').slideUp("fast");

        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if (dropBlock.is(':hidden')) {
            dropBlock.slideDown();

            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');
            $(this).siblings(".slct_arrow").addClass('active');


            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop').find('li').click(function() {

                /* Заносим в переменную HTML код элемента 
                списка по которому кликнули */
                var selectResult = $(this).html();

                /* Находим наш скрытый инпут и передаем в него 
                значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);

                /* Передаем значение переменной selectResult в ссылку которая 
                открывает наш выпадающий список и удаляем активность */
                $(this).parent().parent().find(".slct").removeClass('active').html(selectResult);
                $(".slct_arrow").removeClass('active');

                /* Скрываем выпадающий блок */
                dropBlock.slideUp();
            });

            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            $(".slct_arrow").removeClass('active');
            dropBlock.slideUp();
        }

        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });
       

});

$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");
