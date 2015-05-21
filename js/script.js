$('body').scrollspy({
	target: '.navbar',
	offset: 75
});

$('.nav a').on('click', function () {
	$(".navbar-toggle").click();
});

$(document).on('scroll', function () {
	if ($(document).scrollTop() > 5) {
		$('.navbar').addClass('nav-open').removeClass('nav-close');
	} else {
		$('.navbar').removeClass('nav-open').addClass('nav-close');
		$('.navbar-collapse').removeClass('in');
	}
});

$(function () {
	$('a[href*=#]:not([href=#])').click(function () {

		var offset_value = 70;
		if ($(document).width() < 768) {
			offset_value = 50;
		}

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - offset_value
				}, 400);
				return false;
			}
		}
	});
});