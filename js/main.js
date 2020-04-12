AOS.init();
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