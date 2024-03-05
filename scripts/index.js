// 데스크버전 검색 창
// 1. 검색창이 평소에는 닫혀있게 만들어준다
// 2. 검색 버튼을 눌렀을 때 데스크 창, 검색창이 열린다.
// 3. X를 누르면 지워진다
// 4. header 색 hover 색으로 고정 
// 데스크 검색
const search_nav_bg = document.querySelector('.search_nav_bg')
const search_desk = search_nav_bg.querySelector('.search')
const search_btn = document.querySelectorAll('.search_btn')
const search_text = document.querySelectorAll('.text')
const search_bg = document.querySelectorAll('.search_bg')
const search_nav = search_nav_bg.querySelector('.search_nav')
const search_close = document.querySelectorAll('.search_closer')
const header_nav_bg = document.querySelector('.nav_bg')
const header = document.querySelector('header')
// 모바일 검색
const m_search_nav = document.querySelector('.m_search_nav')
const m_search = document.querySelector('.m_search')
const m_search_last = document.querySelector('.m_search_last') 
console.log(search_nav_bg,search_desk ,search_btn,search_text)
console.log(search_bg,search_nav, search_close,header_nav_bg,header)
console.log(m_search_nav,m_search,m_search_last)

// 모바일 목록
const m_list = document.querySelector('.m_list')
const m_lnb = document.querySelector('.m_lnb')
const m_list_closer = document.querySelector('.closer')
// 목록 네비
const m_list_nav = document.querySelectorAll('.nav_tap')
const m_gnb = document.querySelectorAll('.m_gnb')
console.log(m_list,m_lnb, m_list_closer)
console.log(m_list_nav, m_gnb)

search_text[0].style.display = 'none';
search_desk.style = 'background:none;'
search_nav.style = 'display:none;'
search_bg[0].style = 'display:none;'
header_nav_bg.style = 'display:none; z-index:0;'

search_btn[0].addEventListener('click',function(){
    search_text[0].style = 'display:bolck'
    search_desk.style = 'backgroud:#ECECEC;'
    search_nav.style = 'display:flex;'
    search_bg[0].style = 'display:bolck;'
    header_nav_bg.style ='display:bolck;'
})

search_close[0].addEventListener('click', function(){
    search_text[0].style.display = 'none';
    search_desk.style = 'background:none;'
    search_nav.style = 'display:none;'
    search_bg[0].style = 'display:none;'
    header_nav_bg.style ='display:none;'
})

// 모바일 버전 검색 창
search_text[1].style.display = 'none';
search_close[1].style.display = 'none';
m_search.style.display = 'none';
m_search_last.style.display = 'none';

search_btn[1].addEventListener('click',function(){
    m_search_nav.classList.add('active')
    search_text[1].style.display = 'block'
    search_close[1].style.display = 'block';
    m_search.style.display = 'block';
    m_search_last.style.display = 'block';
})

search_close[1].addEventListener('click', ()=>{
    m_search_nav.classList.remove('active')
    search_text[1].style.display = 'none';
    search_close[1].style.display = 'none';
    m_search.style.display = 'none';
    m_search_last.style.display = 'none';
})

// 모바일 목록 나오기 들어가기
m_lnb.style.display = 'none';

m_list.addEventListener('click', ()=>{
    m_lnb.style.display = 'block'
})

m_list_closer.addEventListener('click', ()=>{
    m_lnb.style.display = 'none'
})
// 모바일 목록 네비

hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

for(let i of m_gnb){
    i.classList.add('active')
}

m_list_nav.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        m_gnb[i].classList.toggle('active');
    })
})

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

var mySwiper = new Swiper('.swiper-container-silde', {
    direction: 'horizontal',
    slidesPerView: 'auto', 
    spaceBetween: 0, 
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
});
