AOS.init();
/* ------slider----- */
$('.repair__items-slider1').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	// centerMode: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 961,
			settings: {
				infinite: false,
				// arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 721,
			settings: {
				infinite: false,
				// arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},

	]
});

$('.repair__items-slider2').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 961,
			settings: {
				infinite: false,
				// arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 721,
			settings: {
				infinite: false,
				// arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},

	]
});

$('.repair__items-slider3').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 961,
			settings: {
				infinite: false,
				// arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 721,
			settings: {
				infinite: false,
				// arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},

	]
});

$('.cert__slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 1281,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
			}
		},
		{
			breakpoint: 721,
			settings: {
				infinite: false,
				// arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		
	]
});
/* ---------- */

/* fixed-top */
$(document).ready(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.header__top').addClass('fixed-top');
		} else {
			$('.header__top').removeClass('fixed-top');
		}
	});
});
/* ------------ */
/* запрет скролла google maps */
$(document).ready(function () {
	$('#map1').addClass('scrolloff');
	$('#overlay').on('click', function () {
		$('#map1').removeClass('scrolloff');
	});
	$("#map1").mouseleave(function () {
		$('#map1').addClass('scrolloff');
	});
});
/* запрет скролла google maps */
$(document).ready(function () {
	$('#map2').addClass('scrolloff');
	$('#overlay').on('click', function () {
		$('#map2').removeClass('scrolloff');
	});
	$("#map2").mouseleave(function () {
		$('#map2').addClass('scrolloff');
	});
});
/* -------------------------- */
/* -------------- */
function setup_for_width(mql) {
	/* добавление класса к определеному диву */
	let phone = document.querySelectorAll('.phone');
	for (let i = 0; phone.length > i; i++) {
		phone[i].classList.add('phone__reverse');
	}
	let phoneFooter = document.querySelectorAll('.footer-phone');
	for (let i = 0; phoneFooter.length > i; i++) {
		phoneFooter[i].classList.add('phone__reverse');
	}
	/* ------------------ */
	if (mql.matches) {
		let phoneR = document.querySelectorAll('.phone__reverse');
		for (let i = 0; phoneR.length > i; i++) {
			phoneR[i].href = 'javascript:;';
			phoneR[i].dataset.src = '#hidden-content';
			phoneR[i].dataset.fancybox = '';
		}
	}
}
let mql = window.matchMedia("screen and (min-width: 800px)");
mql.addListener(setup_for_width);
setup_for_width(mql);
/* --------------- */
/* mask */
window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll('.tel'), function (input) {
		var keyCode;

		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = ""
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false);

	});

});
/* ----------- */
/* ------send form------ */
$('button[type="submit"]').click(function () {
	// console.log('hi')
	/*Валидация полей формы*/
	let formSend = document.querySelectorAll('form');
	for (let i = 0; formSend.length > i; i++) {
		let nameId = $('#' + formSend[i].attributes.id.value);

		nameId.validate({
			//Правила валидации
			rules: {
				phone: {
					required: true,
					minlength: 18,
				},
			},
			messages: {
				phone: {
					required: "Укажите номер телефона",
					minlength: "Введите корректный номер",
				},
			},
			/*Отправка формы в случае успеха валидации*/
			submitHandler: function () {
				$.ajax({
					url: 'send.php',
					type: 'POST',
					data: nameId.serialize(),
					beforeSend: function () {},
					success: function (result) {
						console.log('ok');
						window.location.href = 'thanks.html';
					},
					error: function () {
						// console.log('none');
					}
				});
				return false;
			}
		});
	}
});
/* ------------------- */
/* смещение инпута при фокусе и клике */
let formInput = document.querySelectorAll('.form__input');
for (let i = 0; formInput.length > i; i++) {
	let formInputFunction = function() {
		if (!formInput[i].value == '') {
			formInput[i].classList.add('input-left');
		} else {
			formInput[i].classList.remove('input-left');
		}
	};
	formInputFunction();
	
	let formInputFunctionAll = function() {
		if ((!formInput[i].value == '') && (formInput[i].value != '+7 ')) {
			formInput[i].classList.add('input-left');
		} else {
			formInput[i].classList.remove('input-left');
		}
	};

	formInput[i].addEventListener('focus', formInputFunctionAll);
	formInput[i].addEventListener('blur', formInputFunctionAll);
	formInput[i].addEventListener('click', formInputFunction);
	formInput[i].addEventListener('keyup', formInputFunctionAll);
} 


let formInputPhone = document.getElementById('phone1');
	let formInputPhoneFunction = function () {
		if (!formInputPhone.value == '') {
			formInputPhone.classList.add('input-left__modal');
		} else {
			formInputPhone.classList.remove('input-left__modal');
		}
	}
	formInputPhoneFunction();

	let formInputPhoneFunctionAll = function() {
		if ((!formInputPhone.value == '') && (formInputPhone.value != '+7 ')) {
			formInputPhone.classList.add('input-left__modal');
		} else {
			formInputPhone.classList.remove('input-left__modal');
		}
	};

	formInputPhone.addEventListener('focus', formInputPhoneFunctionAll);
	formInputPhone.addEventListener('blur', formInputPhoneFunctionAll);
	formInputPhone.addEventListener('click', formInputPhoneFunction);
	formInputPhone.addEventListener('keyup', formInputPhoneFunctionAll);

/* ------------------- */
/* phone link whatsapp viber */
// let whatsappPhone = '777777777'
