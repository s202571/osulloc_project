// 데스크버전 검색 창
// 1. 검색창이 평소에는 닫혀있게 만들어준다
// 2. 검색 버튼을 눌렀을 때 데스크 창, 검색창이 열린다.
// 3. X를 누르면 지워진다
// 4. header 색 hover 색으로 고정 

// 데스크 검색
const main = document.querySelector('main')
const search_nav_bg = document.querySelector('.search_nav_bg')
const search_desk = search_nav_bg.querySelector('.search')
const search_btn = document.querySelectorAll('.search_btn')
const search_text = document.querySelectorAll('.text')
const search_bg = document.querySelectorAll('.search_bg')
const search_nav = search_nav_bg.querySelector('.search_nav')
const search_close = document.querySelectorAll('.search_closer')
const header_nav_bg = document.querySelector('.nav_bg')
const header = document.querySelector('header')
const nav_btn = document.querySelectorAll('.nav_btn')
const not_btn = document.querySelector('.not_btn')
const lnb = document.querySelectorAll('.lnb')
const nav_wrap = document.querySelectorAll('.left dl')
const nav_content = document.querySelectorAll('.left dl dt')
// 모바일 검색
const m_search_nav = document.querySelector('.m_search_nav')
const m_search = document.querySelector('.m_search')
const m_search_last = document.querySelector('.m_search_last') 
console.log(search_nav_bg,search_desk ,search_btn,search_text)
console.log(search_bg,search_nav, search_close,header_nav_bg,header)
console.log(m_search_nav,m_search,m_search_last)
console.log(nav_btn,lnb,not_btn,main)
console.log(nav_content,nav_wrap)

// header nav
hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

hide_nav = ()=>{
    for(let i of lnb){
        i.style.display = 'none'
    }
}

hide_nav()
nav_btn.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        hide_nav()
        hide(nav_btn)
        lnb[i].style.display = 'block'
        t.classList.add('active')
    })
})

not_btn.addEventListener('mouseover',()=>{
    for(let i of lnb){
        i.style.display = 'none'
    }
    hide(nav_btn)
})

main.addEventListener('mouseout',()=>{
    hide_nav()
    hide(nav_btn)
})

nav_wrap.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        hide(nav_content)
        nav_content[i].classList.add('active')
    })
})

nav_wrap.forEach((t,i)=>{
    t.addEventListener('mouseout',()=>{
        hide(nav_content)
    })
})

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



for(let i of m_gnb){
    i.classList.add('active')
}

m_list_nav.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        m_gnb[i].classList.toggle('active');
    })
})
