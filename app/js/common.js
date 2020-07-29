$(document).ready(function () {
	$('.nav__link').click(() => {
		$('.submenu').fadeToggle(500)
	});
	$('.icon-search').click(() => {
		$('.search-form').toggle(500)
	});
});


