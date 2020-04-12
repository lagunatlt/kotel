
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