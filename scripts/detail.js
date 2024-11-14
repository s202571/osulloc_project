const body = document.querySelector('html,body')
const link_contents = document.querySelectorAll('.section')
const detail_nav_btn = document.querySelectorAll('.detail_nav_btn')
const nav = document.querySelector('nav')
const top_contents = document.querySelector('.top_contents')

const url = document.querySelector('.url')
const facebook = document.querySelector('.facebook')
const like = document.querySelector('.like')
const minus = document.querySelector('.minus')
const num_count = document.querySelector('#num_count')
const plus = document.querySelector('.plus')
const origin_price = document.querySelector('.origin_price')
const order_price = document.querySelector('.order_price')
const not_product = document.querySelector('.not_product')
const not_product_img = document.querySelector('.not_product img')
const not_product_p = document.querySelector('.not_product p')
const review_btn = document.querySelectorAll('.review_btn button')
const review_box = document.querySelectorAll('.review_box')


console.log(url,facebook,like)
console.log(minus,num_count,plus,order_price)
console.log(nav,top_contents)
console.log(not_product_p)

hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}
hide_contents = (name)=>{
    for(let i of name){
        i.style.display = 'none'
    }
}


url.addEventListener('click',()=>{
    url.classList.toggle('active')
})
facebook.addEventListener('click',()=>{
    facebook.classList.toggle('active')
})
like.addEventListener('click',()=>{
    like.classList.toggle('active')
})

// 가격
let num = 1
let total = 0
let price = 38000;

plus.addEventListener('click',()=>{
    console.log(typeof price)
    num++
    num_count.value = num;
    total = num*price;
    order_price.innerHTML = total.toLocaleString('ko-kr')+'원'
})
minus.addEventListener('click',()=>{
    if(num > 1){
        num--
        num_count.value = num;
        total = num*price;
        order_price.innerHTML = total.toLocaleString('ko-kr')+'원'
    }
})

// 버튼 누르면 스크롤 이동
window.addEventListener('scroll', () => {
    detail_nav_btn.forEach((obj, idx) => {
        if (body.scrollTop >= link_contents[idx].offsetTop - 100) {
            hide(detail_nav_btn)
            obj.classList.add('active');
            nav.style.position = 'fixed'
            nav.style.top = '0'
        }else if (body.scrollTop >= top_contents.offsetTop && body.scrollTop < top_contents.offsetTop + top_contents.offsetHeight) {
            obj.classList.remove('active');
            nav.style.position = 'relative';
        }
    });
});

detail_nav_btn.forEach((t, i) => {
    t.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, link_contents[i].offsetTop - 50);
    });
});

var mySwiper = new Swiper('.swiper-container', {
})

// 접기
not_product.addEventListener('click',()=>{
    link_contents[0].classList.toggle('active')
    not_product_img.classList.toggle('rotate')
    isExpanded = !isExpanded;

    if (isExpanded) {
        not_product_p.textContent = '상품 상세 펼쳐보기';
    } else {
        not_product_p.textContent = '상품 상세 접어보기';
    }
})

// 리뷰
hide(review_btn)
hide_contents(review_box)
review_btn[0].classList.add('active')
review_box[0].style.display = 'block'

review_btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide(review_btn)
        review_btn[i].classList.add('active')
        hide_contents(review_box)
        review_box[i].style.display = 'block'
    })
})