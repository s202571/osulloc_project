// 데스크버전 검색 창
// 1. 검색창이 평소에는 닫혀있게 만들어준다
// 2. 검색 버튼을 눌렀을 때 데스크 창, 검색창이 열린다.
// 3. X를 누르면 지워진다
// 4. style 흰 배경에 검은 컬러로 바꿔준다 
const search_desk = document.querySelector('.search_nav_bg')
const search_btn = search_desk.querySelector('.search_btn')
const search_text = search_desk.querySelector('.text')
const search_bg = search_desk.querySelector('.search_bg')
const search_nav = search_desk.querySelector('.search_nav')
console.log(search_desk,search_btn,search_text)
console.log(search_bg,search_nav)

search_text.style.display = 'none';
search_desk.style = 'background-color:transparent;'
search_nav.style = 'display:none;'
search_bg.style = 'display:none;'