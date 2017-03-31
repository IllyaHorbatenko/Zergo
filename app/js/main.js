"use strict";

// подключение common.js

function accordion() {
	$(".accordion .accordion_title").click(function () {
		var $content = $(this).next();
		if ($content.is(":visible")) {
			//если нажали на title аккордеона,
			$content.slideUp(500, function () {//и если контент аккордеона видимый, то
			}); //убираем его
			$(this).children().removeClass("active"); //убираем активный класс у стрелки к примеру
			$(this).removeClass("active");
		} else {
			$(".accordion .accordion_content").slideUp("slow"); //если невидимый, прячем все скрытые
			$(".accordion .accordion_title").children() //убираем активный класс у стрелки к примеру
			.removeClass("active");
			$(".accordion_title").removeClass("active"); //убираем активный класс у стрелки к примеру
			$content.slideToggle("slow"); //открываем скрытый блок у того что нажали
			$(this).children().addClass("active"); //добавляем активный класс у стрекли к примеру
			$(this).addClass("active");
		}
	});
}
function Loading() {
	var level = 0;

	setInterval(function () {
		level += 0.1; // Скорость выполнения
		if (level > 100) {
			level = 0;
		} else {
			$('.level').css('width', level + '%');
		}
	}, 10); // Плавность
}

function fixedHeader() {

	var s_top = $("body").scrollTop(),
	    logo = $(".logo-container").outerHeight(),
	    panel = $(".top-panel").outerHeight(),
	    step = logo - panel;

	if (s_top > logo) {
		var status = $('.header').css('top');
		if (parseInt(status) * -1 < step) {

			$('.header').css('top', "-" + step + 'px');
		} else {
			$('.header').css('top', "-" + logo + 'px');
		}
	} else {
		$('.header').css('top', "-" + s_top + "px");
	}
}

$(document).scroll(function () {
	fixedHeader();
});

function setCursorPos(elem, pos) {
	if (elem.setSelectionRange) {
		elem.focus();
		elem.setSelectionRange(pos, pos);
	} else if (elem.createTextRange) {
		var range = elem.createTextRange();

		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}

$(document).ready(function () {
	Loading();
	fixedHeader();

	accordion();
	$('.select-2').hover(function () {
		$(this).find('.active').toggleClass("color");
		$(this).find('.login').toggleClass("color");
		$(this).find('.select-list').toggle("drop", { direction: "up" }, 200);
	});

	$(".input-mask").mask("+38(999) 999-99-99");
	$(".whis-contry").mask("(9) 99 999 99 99");

	$(".back-lote-input").click(function () {
		var arr = $(this).val().split(' '),
		    arrMain = $(this).val().split(" " + arr[arr.length - 1]);
		if (arr[0] == "0") {
			$(this).val(" " + arr[1]);

			setCursorPos(this, arrMain[0].length - 1);
		} else {
			setCursorPos(this, arrMain[0].length);
		}
	});

	var lf1 = new TimelineMax();
	var lf2 = new TimelineMax();

	lf1.to('#anim-form-main-1', 1.5, { y: -100, opacity: 0, ease: Power4.easeOut });
	lf2.set('#anim-form-main-2', { y: -100, opacity: 0 }).to('#anim-form-main-2', 1, { y: 0, opacity: 1, ease: Power4.easeOut });

	lf1.pause();
	lf2.pause();

	$('#find-game-or-server').click(function (e) {
		e.preventDefault();
		lf1.play();
		lf2.play();
	});

	var lg1 = new TimelineMax();
	var lg2 = new TimelineMax();
	lg1.to('.login1', 1.5, { y: 1000, opacity: 0, ease: Power4.easeOut });
	lg2.set('.login2', { y: -500, opacity: 0 }).to('.login2', 1, { y: 0, opacity: 1, ease: Elastic.easeOut.config(0.6, 0.4) });
	lg1.pause();
	lg2.pause();
	$(".main_content .main_conten_form_wrap input[type = submit]").click(function (e) {
		e.preventDefault();
		lg1.play();
		lg2.play();
	});

	$(".tabs-item").on('click', function (event) {
		//ссылки которые будут переключать табы
		event.preventDefault();

		$(".tabs-item").removeClass('active'); //убираем активные состояния у ссылок

		$(this).addClass('active'); //Добавляем активное состояние у той что нажали

		var data = $(this).data('tab'); //создаём переменную с датой
		$('.tabs-wrap').removeClass("active"); //убираем активные состояния у табов
		$('.tabs-wrap[data-tab=' + data + ']').addClass('active'); //если таб соответствует тому, какой data
		//атрибут в ссылке то делаем его активным
	});
	$(".commets-links a").on('click', function (event) {
		//ссылки которые будут переключать табы
		event.preventDefault();

		$(".commets-links a").removeClass('active'); //убираем активные состояния у ссылок

		$(this).addClass('active'); //Добавляем активное состояние у той что нажали

		var data = $(this).data('tab'); //создаём переменную с датой
		$('.comments-item').removeClass("active"); //убираем активные состояния у табов
		$('.comments-item[data-tab=' + data + ']').addClass('active'); //если таб соответствует тому, какой data
		//атрибут в ссылке то делаем его активным
	});
	$('.chat').scrollbar();

	// для инициализации tooltips
	// $( document ).tooltip({
	//   track: true
	// });

	// скролл по ссылке с атрибутом href
	// $(".header_nav a[href*='#']").on("click", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $(anchor.attr('href')).offset().top
	//     }, 500);
	//     return false;
	// });

	// Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
	// $(".scroll_to").on("clcik", function(e) {
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

	// Кастомные кнопки управления слайдером
	// var owl = $('.owl-carousel');
	// owl.owlCarousel();
	// // Go to the next item
	// $('.customNextBtn').click(function() {
	//     owl.trigger('next.owl.carousel', [700]);
	// });
	// // Go to the previous item
	// $('.customPrevBtn').click(function() {
	//     // With optional speed parameter
	//     // Parameters has to be in square bracket '[]'
	//     owl.trigger('prev.owl.carousel', [700]);
	// });

});

$(window).resize(function () {});

$(window).scroll(function () {});
"use strict";

// подключение animate.js

$(document).ready(function () {
    // анимации - animate.css
    if (window.matchMedia("(min-width: 768px)").matches) {}
});
$(window).scroll(function () {});
'use strict';

// подключение functions.js

$(function () {
    //SVG Fallback
    // if(!Modernizr.svg) {
    //  $("img[src*='svg']").attr("src", function() {
    //      return $(this).attr("src").replace(".svg", ".png");
    //  });
    // };
});
//изменяется - для плавной обратной анимации animate.css*/
$(window).scroll(function () {
    // для правильной рабоы надо прописать в блок которому присваивается анимация атрибут data-anim="fadeInLeft" с названием анимации
    $('.animated').each(function () {
        var imagePos = $(this).offset().top;
        var imageHght = $(this).outerHeight();
        var topOfWindow = $(window).scrollTop() + 40;
        var heightOfWindow = $(window).height();
        var animName = $(this).data('anim');
        if (!$(this).data('atop')) {
            var animTop = 0.9;
        } else {
            var animTop = $(this).data('atop');
        }
        if (imagePos < topOfWindow + heightOfWindow * animTop && imagePos + imageHght > topOfWindow) {
            $(this).css('visibility', 'visible').addClass(animName);
        } else if (imagePos + imageHght < topOfWindow || imagePos > topOfWindow + heightOfWindow) {
            $(this).css('visibility', 'hidden').removeClass(animName);
        }
    });
});
/**
 * FastClick
 */

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

$(document).ready(function () {

    $('.checkboxes').find('.check').click(function () {
        $(this).parent().siblings('.radio-button-container').toggle('fade');
        // Пишем условие: если вложенный в див чекбокс отмечен
        if ($(this).hasClass('active')) {
            // то снимаем активность с дива
            $(this).removeClass('active');
            //$(this).find.('i').removeClass('active');
            // и удаляем атрибут checked (делаем чекбокс не отмеченным)
            $(this).find('input').removeAttr('checked');
            $(this).find('.fa').removeClass('fa-check');

            // если же чекбокс не отмечен, то
        } else {

            // добавляем класс активности диву
            $(this).addClass('active');
            $(this).find('.fa').addClass('fa-check');
            // добавляем атрибут checked чекбоксу
            $(this).find('input').attr('checked', true);
        }
    });

    var md = new MobileDetect(window.navigator.userAgent);

    if (md.userAgent() == "Safari" && md.mobile() == "iPhone" || md.mobile() == "iPad") {
        $("html,body").css("overflow", "hidden !important");
    }

    // Select в модальном окне
    $(document).click(function () {
        $('.slct').removeClass('active');
        $('.slct_arrow').removeClass('active');
        $('.slct').parent().find('.drop').slideUp("fast");
    });
    $('.slct').click(function () {
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
            $('.drop').find('li').click(function () {

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
    // Открываем модальное окно  
    $(".modal").click(function (e) {
        e.preventDefault();
        var id = $(this).data('modal');
        var txt = $(this).data('info');
        // var title =  $(this).data('title'); // для изменения title в модалке
        $(".popup[data-modal=" + id + "]").toggle("fade", 200).find("form").css('display', 'block');
        $(".popup[data-modal=" + id + "] input[name=form_name]").val(txt);
        // $(".popup[data-modal="+id+"] h2").html(title); // прописать в ссылку data-title="нужный title"

        if (window.matchMedia("(min-width: 992px)").matches) {
            $("body").css({ "overflow": "hidden", "padding-right": "17px" });
        }
        if (window.matchMedia("(max-width: 992px)").matches) {

            $("body").css({ "overflow": "hidden", "padding-right": "0px" });
        }
    });
    // overlay для закрытия
    $(".overlay").click(function () {
        $(this).parent().toggle("drop", { direction: "up" }, 200);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    // закрываем модальное окно на крестик
    $(".popup .close-btn").click(function (e) {
        e.preventDefault();
        $(this).parents(".popup").hide("drop", { direction: "up" }, 200);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    $(".popup .close").click(function (e) {
        e.preventDefault();
        $(this).parents(".popup").hide("drop", { direction: "up" }, 200);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
    });
    //обработчик кнопки на нажатие btn_mnu
    $("#nav-button-label").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('nav-on'); // добавляет класс для анимации самой кнопки
        $(this).next().slideToggle(); // открывает меню main_nav_block, которое было скрыто
        $(this).find('.nav-line').toggleClass('active');
        $(".mnu_dropdown").toggleClass("active");
    });
    // Скрыть элемент при клике за его пределами бутерброд и его выпадающее меню
    $(document).click(function (event) {
        if ($(event.target).closest("#nav-button-label").length) return;
        if ($(event.target).closest("[off-canvas]").length) return;
        $("#nav-button-label").removeClass("nav-on");
        $("#nav-button-label .nav-line").removeClass("active");

        event.stopPropagation();
    });
    //  Отправка форм
    $("form:not('#form3')").submit(function () {
        // перехватываем все при событии отправки
        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = [];
        form.find('.modal_form_input').each(function () {
            // пробежим по каждому полю в форме

            if ($(this).val() == '') {
                // если находим пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
            } else if ($(this).val() !== '') {
                // если находим не пустое
                $(this).siblings().hide("fade", 500);
                error.push(false); // нет ошибки
            }
            $(this).focus(function () {
                $(this).siblings().hide("fade", 500);
            });
        });
        form.find('.modal_form_phone').each(function () {
            // пробежим по каждому полю в форме
            var pattern = /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/;
            if ($(this).val() == '') {
                // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка 
                if ($(this).siblings().hasClass('input_error_phone')) {
                    $(this).siblings().removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }
            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500);
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_phone').text("").prepend("Введите правильный телефон<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function () {
                $(this).siblings().hide("fade", 500);
            });
        });
        form.find('.modal_form_email').each(function () {
            // пробежим по каждому полю в форме
            var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9\-]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
            if ($(this).val() == '') {
                // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
                if ($(this).siblings().hasClass('input_error_email')) {
                    $(this).siblings().removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }
            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500).removeClass('input_error_email');
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function () {
                $(this).siblings().hide("fade", 500);
            });
        });
        var erorr_finish = 0;
        for (var i = 0; i < error.length; i++) {
            if (error[i] == false) {
                erorr_finish = erorr_finish + 1;
            };
            // console.log(error[i]);
        }
        //console.log(erorr_finish);
        var size = error.length - 1;
        if (erorr_finish > size) {
            // в зависимости от полей которые проверяются (в нашем случае 3 поля)
            var data = form.serialize(); // подготавливаем данные
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mail.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function beforeSend(data) {
                    // событие до отправки
                    form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                success: function success(data) {
                    // событие после удачного обращения к серверу и получения ответа
                    if (data['error']) {
                        // если обработчик вернул ошибку
                        alert(data['error']); // покажем её текст
                    } else {
                        // если все прошло ок

                        if (data['form_type'] == 'modal') {
                            $('.dm-modal form').hide();
                            $('.dm-modal .close').hide();
                            form.trigger('reset');
                            $('.dm-modal .success_mail').addClass('active'); //пишем что всё ок
                            setTimeout(function () {
                                form.parents('.popup').hide("fade", 500);
                                $('.dm-modal .success_mail').removeClass('active');
                                $('.dm-modal .close').show("fade", 2000);
                                //$("body").css({ "overflow": "inherit", "padding-right": "0" });
                            }, 3000);
                        }
                        if (data['form_type'] == 'normal') {
                            //надо писать в обычных формах <input type="hidden" name="form_type" value="normal"> 
                            form.trigger('reset');
                            $('.dm-modal .success_mail').addClass('active');
                            $('.popup[data-modal=modal-res]').toggle("fade", 500);
                            //$("body").css({ "overflow": "hidden", "padding-right": "17px" });
                            setTimeout(function () {
                                $('.popup[data-modal=modal-res]').hide("fade", 500);
                                $('.dm-modal .success_mail').removeClass('active', 500);
                                //$("body").css({ "overflow": "inherit", "padding-right": "0" });
                            }, 3000);
                        }
                    }
                },
                error: function error(xhr, ajaxOptions, thrownError) {
                    // в случае неудачного завершения запроса к серверу
                    alert(xhr.status); // покажем ответ сервера
                    alert(thrownError); // и текст ошибки
                },
                complete: function complete(data) {
                    // событие после любого исхода
                    form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
    });

    //  Отправка форм с файлом вносим input[type=file]
    var files;
    $('input[type=file]').change(function () {
        files = this.files;
        //alert(files);
    });

    //  Отправка форм с файлом submit
    $("#form3").on('submit', function (e) {
        // перехватываем все при событии отправки
        e.preventDefault();
        var $data = new FormData();
        var form = $(this);
        var error = [];
        $.each(files, function (key, value) {
            if (!this.type.match(/(.png)|(.jpeg)|(.jpg)|(.gif)$/i) || (this.size / 1024).toFixed(0) > 1524) {
                alert("Неправильный формат графического файла. Или слишком большой размер. Размер не должен превышать 1 мегабайт!");
                return false;
            } else {}
            $data.append(key, value);
        });

        $inputs = $("#form3").find('input[type=hidden]');
        $textarea = $("#form3").find('textarea');
        $.each($inputs, function (key, value) {
            $data.append($(this).attr('name'), $(this).val());
        });

        $data.append($textarea.attr('name'), $textarea.val());

        form.find('.modal_form_input').each(function () {
            // пробежим по каждому полю в форме

            if ($(this).val() == '') {
                // если находим пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
            } else if ($(this).val() !== '') {
                // если находим не пустое
                $(this).siblings().hide("fade", 500);
                error.push(false); // нет ошибки
            }
            $(this).focus(function () {
                $(this).siblings().hide("fade", 500);
            });
        });
        form.find('.modal_form_phone').each(function () {
            // пробежим по каждому полю в форме
            var pattern = /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/;
            if ($(this).val() == '') {
                // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка 
                if ($(this).siblings().hasClass('input_error_phone')) {
                    $(this).siblings().removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }
            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500);
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_phone').text("").prepend("Введите правильный телефон<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function () {
                $(this).siblings().hide("fade", 500);
            });
        });
        form.find('.modal_form_email').each(function () {
            // пробежим по каждому полю в форме
            var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
            if ($(this).val() == '') {
                // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
                if ($(this).siblings().hasClass('input_error_email')) {
                    $(this).siblings().removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }
            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500).removeClass('input_error_email');
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function () {
                $(this).siblings().hide("fade", 500);
            });
        });

        if (files === undefined) {
            $('.fileLoad input').val('Файл не выбран!');
            $('.file-load-block input[type=text]').css('border', '1px solid red');
            error.push(true); // ошибка  
        }

        var erorr_finish = 0;

        for (var i = 0; i < error.length; i++) {
            if (error[i] == false) {
                erorr_finish = erorr_finish + 1;
            }

            //console.log(error[i]);
        }
        //console.log(erorr_finish);
        var size = error.length - 1;
        if (erorr_finish > size) {
            $.ajax({
                url: 'mail.php',
                type: 'POST',
                contentType: false,
                processData: false,
                dataType: 'json',
                data: $data,
                beforeSend: function beforeSend(loading) {
                    $('.fileLoad input').val('Файл загружается');
                },
                success: function success(data) {
                    $('.dm-modal .sucess_mail').show('fade', 500);
                    $('.popup2 .close').hide();
                    $('.fileLoad input').val('Файл загружен!');
                    $('.file-load-block input[type=text]').css('color', '#b2d04e');
                    $('.popup2').show().delay(2000).fadeOut(function () {
                        $('.popup2').removeClass('active');
                        form.trigger('reset');
                        $('.dm-modal .sucess_mail').addClass('active');
                        $("#win2 .close").trigger('click');
                        $('.popup2 .close').show();
                        $('.fileLoad input').val('Выберите файл');
                        files = undefined;
                        $('.file-load-block input[type=text]').css('color', '#fff)');
                        $('.file-load-block input[type=text]').css('border', '1px solid #fff');
                    });
                }
            });
        }
    });
});

$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");