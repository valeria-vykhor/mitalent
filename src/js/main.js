//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/bootstrap/dist/js/bootstrap.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js

$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        dotsEach: true,
        autoplay:true,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        responsive:{
            0:{
                items:1
            },
            768:{
                margin: 10,
                items:1
            }
        }
    });

    if ($('.owl-item:nth-of-type(3)').hasClass('active')) {
        $('.owl-carousel').closest('section.slider').addClass('first-slide');
    } else if ($('.owl-item:nth-of-type(4)').hasClass('active')) {
        $('.owl-carousel').closest('section.slider').addClass('second-slide').removeClass('first-slide');
    }
});