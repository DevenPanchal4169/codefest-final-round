$('#product-slider').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    items: 3,
    //nav: true,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})