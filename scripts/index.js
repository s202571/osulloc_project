
var mySwiper = new Swiper('.swiper-container', { 
    effect:'fade',
    autoplay:{delay:5000,},
    loop: true,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})



var verticalSwiper = new Swiper('.swiper-container-vertical', {
    direction: 'vertical',
    loop: true, 
    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },
    slidesPerView:1,
    spaceBetween:50,
});
// 선물추천 제외 없음

var mySwiper = new Swiper('.swiper-container-horizontal', {
    direction: 'horizontal', // 수평 방향으로 슬라이딩
    slidesPerView: 'auto', // 부모 요소의 너비에 맞게 슬라이드를 조정
    spaceBetween: 0, // 슬라이드 사이의 간격
    loop: true, // 슬라이드가 무한 루프로 이동하도록 설정
    autoplay: {
      delay: 3000, // 3초마다 자동으로 슬라이드 이동
      disableOnInteraction: false, // 사용자와의 상호 작용 후에도 자동 슬라이딩 유지
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
});

// 베스트
const product_btn = document.querySelectorAll('.product_btn button')
const tea_best_content = document.querySelectorAll('.swiper-container-horizontal') 
console.log(product_btn,tea_best_content)

hide_content = (name)=>{
    for(let i of name){
        i.style.display = 'none'
    }
}

hide_content(tea_best_content)
tea_best_content[1].style.display = 'flex'
product_btn[1].classList.add('active')

product_btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide_content(tea_best_content)
        tea_best_content[i].style.display = 'flex'
        hide(product_btn)
        product_btn[i].classList.add('active')
    })
})


// 다다
var mySwiper = new Swiper('.swiper-container-silde', {
    direction: 'horizontal',
    slidesPerView: 'auto', 
    spaceBetween: 0, 
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
});

// 매장소개
const swiper = new Swiper('.visual',{
    loop: true,
    slidesPerView: 3, // slidesPerView 값을 'auto'로 설정하여 슬라이드의 너비를 자동으로 조정합니다.
    centeredSlides: true, // 슬라이드를 가운데 정렬합니다.
    spaceBetween: 30, // 슬라이드 사이의 간격
    initialSlide: 1,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
})

const shop_introduction = document.querySelectorAll('.shop_introduction')
console.log(shop_introduction)