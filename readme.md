* osulloc_project 12/19 ~
* 12/22 index header, footer 완성 
* 12/23 footer 수정 
* 12/26 header 수정 및 main 작성 
* 12/27 main 완성 및 header,main,footer 수정
* 12/27 ~ css 시작 header 시작
* 01/04 main 시작, header 모바일 버전
* 01/05 ~ header 검색기록 css 작성 01/08 데스크 버전 완성
* 01/08 Js 검색 지우기
## index HTML
### header 수정
1. nav부분 ul,li로 변경 , 순서 변경 , 홀리데이 -> 선물 추천 변경
2. 검색 주석 이름 알아보기 쉽게 바꾸기 -> ex) 검색 버튼 눌렀을 때 데스크
3. 검색 a태그 깔고 버튼으로 바꾸기
4. ul li를 div로 변경 및 span에 class 만들기
5. 검색 창 div를 a로 변경 및 right부분 제거
* 23.12.26
1. nav에 class 주지 않기!
2. nav에 ul 하나에 li를 나누기
3. lnb하나로 이름 통일
4. 검색에 ranking으로 통일
5. 검색기록 삭제를 페이지 나가기뒤로 옮기기
* 23.12.27
1. a안에 버튼이 아니라 그냥 버튼에 클래스 주기!
2. 검색과 검색 눌렀을 때 div를 한번더 div로 묶어주기
* 23.12.28
1. 버튼 안에 i 주고 클래스 만들기
* 23.12.29
1. a안에 a안됨
### main 수정
1. 올라가는 버튼 눌렀을 때 main으로 가게 만들고 
* 올라가는 버튼은 a href="#go_top" 가는 곳은 main id="go_top" (아이디만들기)
2. 이미지 중에 background-image 인것은 주석으로 만들기
3. 이미지 p태그로 감싸기
4. br은 여러번 연속으로 누르지않기
* 23.12.28
1. slide a bg_control 형재 만들기
2. class주기
### footer 수정
1. 데스크 버전 kcp 안만들어져 있는거 만듬

### 기존 사이트와 다른것 
* 다다일상 구독 데스크버전 삭제하고 모바일 버전과 똑같이 만듬
1. 굳이 디자인을 다르게 만들어야 할 필요성을 못 
2. 달라서 여러개를 만들어야해서 번거로워짐

# CSS
* 23.12.30 header css 작성
* 23.12.31 header css
* 크기를 키우면 너비를 줬는데도 안먹힌다
1. max-width 때문에
2. header에 배경색을 줄 div가 필요함 
* hint요청
* js 연동 -> 먼저 피드백

# 기능
1. header 검색 버튼 누르면 검색 데스크 버전이 나옴
2. 태블릿, 모바일 버전이 있음
3. 베스트 상품 에서 상품 올리면 장바구니가 보이고 그 장바구니에 올리면 색이 바뀐다
4. 상품이 5초마다 움직임
* 검색 배경색 지우기
* 화면 밖으로 나갔을 때 header가 변함 (고정 시켜야함)