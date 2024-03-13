const show_h2 = document.querySelectorAll('.show h2')
const show_p = document.querySelectorAll('.show p')
console.log(show_h2,show_p)

// 슬라이드
var mySwiper = new Swiper('.swiper-container', { 
    loop:true,
    slidesPerView:2,
    spaceBetween: 100, 
    centeredSlides: true,
    initialSlide:1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// 내용이 나타나기
for(let i of show_h2){
    gsap.fromTo(i,{
        opacity:0,
        translateY:100,
    },{
        scrollTrigger:i.parentNode,
        opacity:1,
        duration:1,
        translateY:0,
    })
}
for(let i of show_p){
    gsap.fromTo(i,{
        opacity:0,
        translateY:100,
    },{
        scrollTrigger:i.parentNode,
        opacity:1,
        duration:1,
        translateY:0,
        delay:1,
    })
}

