$(function() {
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1.5
            },
            400:{
                items:2.5
            },
            800:{
                items:3.5
            },
            1200:{
                items:4
            },
            1420:{
                items:4
            },
        }
    });
});

$(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.gallery-button-right').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('.gallery-button-left').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });
});