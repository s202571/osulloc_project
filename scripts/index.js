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