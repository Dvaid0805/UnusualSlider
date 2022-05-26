$(document).ready(function() {
    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        infobar: false,
    });
    $(".owl-carousel").owlCarousel({
        items: 2,
        margin: 30,
        dots: true,
        dotsEach: true,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
    });

})