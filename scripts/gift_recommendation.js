console.log('.')

var mySwiper = new Swiper('.swiper-container', { 
    direction:'horizontal',
    // autoplay:{
    //     delay:1000,
    //     disableOnInteraction:false,
    // },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination'
    },
    slidesPerView:2,
    spaceBetween:30,
})