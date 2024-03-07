const nav_tap = document.querySelectorAll('.nav_tap')
const nav_content = document.querySelectorAll('.gnb')
const nav_name = document.querySelectorAll('.gnb p')
const contents_wrap = document.querySelector('.contents_wrap')
const price_btn = document.querySelectorAll('.price_btn button')
const type_btn = document.querySelectorAll('.type_btn')
const type_all = document.querySelector('#type_all')
const photo = document.querySelectorAll('.photo')
const cart = document.querySelectorAll('.cart')
const cart_filled = document.querySelectorAll('.cart_filled')
const cart_filled_over = document.querySelectorAll('.cart_filled_over')
const number = document.querySelectorAll('.number')
console.log(nav_tap,nav_content,nav_name,price_btn)
console.log(type_btn,type_all,photo,cart)

hide = (name)=>{
    for(let i of name){
        i.classList.remove('active')
    }
}

hide_content = (name)=>{
    for(let i of name){
        i.style.display = 'none'
    }
}

hide_content(nav_content)

// nav
nav_tap.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide(nav_tap)
        nav_tap[i].classList.add('active')
    })
    t.addEventListener('mouseover',()=>{
        hide_content(nav_content)
        nav_content[i].style.display = 'block'
    })
})

contents_wrap.addEventListener('mouseover',()=>{
    hide_content(nav_content)
})

for(let i of nav_name){
    i.addEventListener('mouseover',()=>{
        hide(nav_name)
        i.classList.add('active')
    })
}

// 필터
price_btn[0].classList.add('active')
for(let i of price_btn){
    i.addEventListener('click',()=>{
        hide(price_btn)
        i.classList.add('active')
    })
}



type_all.classList.add('active')
type_all.addEventListener('click',()=>{
    hide(type_btn)
    type_all.classList.add('active')
})

all_btn = [type_leafTea,type_pyramid,type_teaBag,type_powder]
// 전체버튼...
for(let i of type_btn){
    i.addEventListener('click',()=>{
        type_all.classList.remove('active')
        i.classList.add('active')
    })
}

hide_content(cart)
hide_content(cart_filled_over)
console.log(cart_filled,cart_filled_over)

photo.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        hide_content(cart)
        cart[i].style.display = 'block'
    })
    t.addEventListener('mouseout',()=>{
        hide_content(cart)
    })
})

cart_filled.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        cart_filled[i].style.display = 'none'
        cart_filled_over[i].style.display = 'block'
    })
    t.addEventListener('mouseout',()=>{
        cart_filled[i].style.display = 'block'
        cart_filled_over[i].style.display = 'none'
    })
})

number[0].classList.add('active')
for(let i of number){
    i.addEventListener('click',()=>{
        hide(number)
        i.classList.add('active')
    })
}