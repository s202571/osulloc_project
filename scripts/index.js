// 데스크버전 검색 창
// 1. 검색창이 평소에는 닫혀있게 만들어준다
// 2. 검색 버튼을 눌렀을 때 데스크 창, 검색창이 열린다.
// 3. X를 누르면 지워진다
// 4. header 색 hover 색으로 고정 
const search_nav_bg = document.querySelector('.search_nav_bg')
const search_desk = search_nav_bg.querySelector('.search')
const search_btn = search_nav_bg.querySelector('.search_btn')
const search_text = search_nav_bg.querySelector('.text')
const search_bg = search_nav_bg.querySelector('.search_bg')
const search_nav = search_nav_bg.querySelector('.search_nav')
const search_close = search_nav_bg.querySelector('.search_closer')
const header_nav_bg = document.querySelector('.nav_bg')
const header = document.querySelector('header')
console.log(search_nav_bg,search_desk ,search_btn,search_text)
console.log(search_bg,search_nav, search_close,header_nav_bg,header)

search_text.style.display = 'none';
search_desk.style = 'background:none;'
search_nav.style = 'display:none;'
search_bg.style = 'display:none;'
header_nav_bg.style = 'display:none; z-index:0;'

search_btn.addEventListener('click',function(){
    search_text.style = 'display:bolck'
    search_desk.style = 'backgroud:#ECECEC;'
    search_nav.style = 'display:flex;'
    search_bg.style = 'display:bolck;'
    header_nav_bg.style ='display:bolck;'
})

search_close.addEventListener('click', function(){
    console.log('.')
    search_text.style.display = 'none';
    search_desk.style = 'background:none;'
    search_nav.style = 'display:none;'
    search_bg.style = 'display:none;'
    header_nav_bg.style ='display:none;'
})