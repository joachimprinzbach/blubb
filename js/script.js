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
    reveal();

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

var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            w: 964,
            h: 1024
        },
        {
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            w: 1024,
            h: 683
        }
    ];

    // define options (if needed)
    var options = {
        // history & focus options are disabled on CodePen
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

openPhotoSwipe();

document.getElementById('psbtn').onclick = openPhotoSwipe;