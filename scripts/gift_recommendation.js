const body = document.querySelector('html,body')
const link_contents = document.querySelectorAll('section')
const nav_btn = document.querySelectorAll('nav button')
const nav = document.querySelector('nav')
const bg = document.querySelector('.bg')

console.log(link_contents,nav_btn,nav)

hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

var mySwiper = new Swiper('.swiper-container', { 
    direction:'horizontal',
    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination'
    },
    slidesPerView:2,
    spaceBetween:30,
})

// 버튼을 누르면 스크롤 이동
window.addEventListener('scroll', () => {
    nav_btn.forEach((obj, idx) => {
        if (body.scrollTop >= link_contents[idx].offsetTop - 100) {
            hide(nav_btn)
            obj.classList.add('active');
            nav.style.position = 'fixed'
        }else if (body.scrollTop >= bg.offsetTop && body.scrollTop < bg.offsetTop + bg.offsetHeight) {
            obj.classList.remove('active');
            nav.style.position = 'relative';
        }
    });
});

nav_btn.forEach((t, i) => {
    t.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, link_contents[i].offsetTop - 100);
    });
});