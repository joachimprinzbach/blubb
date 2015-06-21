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

$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',

        helpers: {
            title: {
                type: 'inside'
            }
        }
    });
    $.stellar({
        horizontalScrolling: false,
        responsive: true
    });
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function (event) {
        var that = $(this);

        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    };

    var onMapClickHandler = function (event) {
        var that = $(this);

        // Disable the click handler until the user leaves the map area
        that.off('click', onMapClickHandler);

        // Enable scrolling zoom
        that.find('iframe').css("pointer-events", "auto");

        // Handle the mouse leave event
        that.on('mouseleave', onMapMouseleaveHandler);
    };

    // Enable map zooming with mouse scroll when the user clicks the map
    $('.maps').on('click', onMapClickHandler);
});

function reveal() {
    var config = {
        reset: false,
        mobile: false,
        scale: {direction: 'up', power: '0%'},
        move: '0px',
        vFactor: 0.40
    };
    window.sr = new scrollReveal(config);
}