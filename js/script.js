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
    if (!Array.prototype.indexOf){
        Array.prototype.indexOf = function(elt /*, from*/){
            var len = this.length >>> 0;

            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++){
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }

    var bgImg = [], img = [], count=0, percentage = 0;

    $('<div id="loaderMask"><span>0%</span></div>').css({
        position:"fixed",
        top:0,
        bottom:0,
        left:0,
        right:0,
        color:'#ffffff',
        background:'#6fae7f'
    }).appendTo('body');

    $('*').filter(function() {

        var val = $(this).css('background-image').replace(/url\(/g,'').replace(/\)/,'').replace(/"/g,'');
        var imgVal = $(this).not('script, iframe').attr('src');
        if(val !== 'none' && !/linear-gradient/g.test(val) && bgImg.indexOf(val) === -1){
            bgImg.push(val)
        }

        if(imgVal !== undefined && img.indexOf(imgVal) === -1){
            img.push(imgVal)
        }

    });

    var imgArray = bgImg.concat(img);

    $.each(imgArray, function(i,val){ //Adding load and error event
        $("<img />").attr("src", val).bind("load", function () {
            completeImageLoading();
        });

        $("<img />").attr("src", val).bind("error", function () {
            imgError(this);
        });
    });

    function completeImageLoading(){
        count++;
        percentage = Math.floor(count / imgArray.length * 100);
        $('#loaderMask').html('<span>'+percentage + '%'+'</span>');
        if(percentage === 100){
            $('#loaderMask').html('<span>100%</span>')
            reveal();
            $('#loaderMask').fadeOut(function(){
                $('#loaderMask').remove();
            })
        }
    }

    function imgError (arg) {
        console.log(arg);
        $('#loaderMask').html("Image failed to load.. Loader quitting..").delay(3000).fadeOut(1000, function(){
            $('#loaderMask').remove();
        })
    }


});

$(document).ready(function () {
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