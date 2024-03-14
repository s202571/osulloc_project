const body = document.querySelector('body, html')
const show_h2 = document.querySelectorAll('.show h2')
const show_p = document.querySelectorAll('.show p')
const popup_btn = document.querySelectorAll('.popup_btn')
const popup_bg = document.querySelectorAll('.popup_bg')
const popup_content = document.querySelectorAll('.popup_content')
const close_btn = document.querySelectorAll('.close_btn')
const content_btn = document.querySelectorAll('.content_btn button')
const content_box = document.querySelectorAll('.content_box')
const content_box_p = document.querySelectorAll('.content_box p')
console.log(show_h2,show_p)
console.log(popup_bg,popup_content,close_btn)
console.log(content_btn,content_box)

let hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

let hide_content = (name)=>{
    for(let i of name){
        i.style.display = 'none'
    }
}


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

var mySwiper = new Swiper('.swiper-container-slide', { 
    slidesPerView: 'auto', 
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

var mySwiper = new Swiper('.swiper-container-photo', { 
    loop:true,
    slidesPerView:'auto',
    spaceBetween: 100, 
    centeredSlides:true,
    initialSlide:1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
})

var secondPrevButton = document.querySelectorAll('.swiper-button-prev')[1];
secondPrevButton.addEventListener('mouseover', function() {
    var prevSlide = document.querySelectorAll('.swiper-slide-prev')[1];
    prevSlide.style.opacity = '1'; // 두 번째 이전 슬라이드의 투명도 변경
});
secondPrevButton.addEventListener('mouseout', function() {
    var prevSlide = document.querySelectorAll('.swiper-slide-prev')[1];
    prevSlide.style.opacity = '0.3'; // 두 번째 이전 슬라이드의 투명도 변경
});
secondPrevButton.addEventListener('click', function() {
    var prevSlide = document.querySelectorAll('.swiper-slide-prev')[1];
    prevSlide.style.opacity = '0.3'; // 두 번째 이전 슬라이드의 투명도 변경
});

var secondNextButton = document.querySelectorAll('.swiper-button-next')[1];
secondNextButton.addEventListener('mouseover', function() {
    var nextSlide = document.querySelectorAll('.swiper-slide-next')[2];
    console.log(nextSlide)
    nextSlide.style.opacity = '1'; // 두 번째 이전 슬라이드의 투명도 변경
});
secondNextButton.addEventListener('mouseout', function() {
    var nextSlide = document.querySelectorAll('.swiper-slide-next')[2];
    nextSlide.style.opacity = '0.3'; // 두 번째 이전 슬라이드의 투명도 변경
});
secondNextButton.addEventListener('click', function() {
    var nextSlide = document.querySelectorAll('.swiper-slide-next')[2];
    nextSlide.style.opacity = '0.3'; // 두 번째 이전 슬라이드의 투명도 변경
});

// 내용이 나타나기 
for(let i of show_h2){
    gsap.fromTo(i,{
        opacity:0,
        translateY:100,
    },{
        scrollTrigger:{
            trigger: i.parentNode,
            toggleActions: "restart none none none", /* 스크롤할 때마다 내용 나타나기 필요! */
            start: "top bottom", // 요소가 트리거 되는 위치 설정
            end: "top top" // 스크롤이 다시 올라올 때 요소가 트리거되도록 설정
        },
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
        scrollTrigger:{
            trigger: i.parentNode,
            toggleActions: "restart none none none",
            start: "top bottom", 
            end: "top top" 
        },
        opacity:1,
        duration:1,
        translateY:0,
        delay:1,
    })
} 


// 팝업
hide_content(popup_bg)

popup_btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        popup_bg[i].style.display = 'flex'
        body.style.overflow = 'hidden'
    })
})

// 팝업 닫기
close_btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        popup_bg[i].style.display = 'none'
        body.style.overflow = 'auto'
    })
})

// 다른 곳 클릭 시 팝업 닫기
for(let i of popup_bg){
    i.addEventListener('click', function(event) {
        if (event.target === this) {
            console.log('.')
            i.style.display = 'none';
            body.style.overflow = 'auto'
        }
    })
}

// 버튼 클릭 시 내용나오기 및 이미지 바뀌기
content_btn[0].classList.add('active')
content_box_p[0].classList.add('active')
content_box[0].style.zIndex = '2'
content_box[2].style.zIndex = '2'
content_box[4].style.zIndex = '2'
content_box[6].style.zIndex = '2'

content_box_hide = ()=>{
    for(let i of content_box){
        i.style.zIndex = '1'
    }
}

content_btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide(content_btn)
        hide(content_box_p)
        content_box_hide()
        content_btn[i].classList.add('active')
        content_box_p[i].classList.add('active')
        content_box[i].style.zIndex = '2'
    })
})