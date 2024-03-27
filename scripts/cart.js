const product_btn = document.querySelectorAll('.product_btn_wrap button')
const cart_wrap = document.querySelectorAll('.cart_wrap')
const all_check = document.querySelector('#all_check')
const item1 = document.querySelector('#item1')
const item2 = document.querySelector('#item2')
const item3 = document.querySelector('#item3')

console.log(product_btn,cart_wrap)
console.log(all_check,item1,item2,item3)

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

hide_contents(cart_wrap)
product_btn[0].classList.add('active')
cart_wrap[0].style.display = 'block'

product_btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        hide(product_btn)
        product_btn[i].classList.add('active')
        hide_contents(cart_wrap)
        cart_wrap[i].style.display = 'block'
    })
})

// 전체버튼
all_check.addEventListener('click',()=>{
    // 전체버튼이 체크되면 버튼2와 버튼3도 체크됩니다.
    if (all_check.checked) {
        item1.checked = true;
        item2.checked = true;
        item3.checked = true;
    } else {
        // 전체버튼이 체크 해제되면 버튼2와 버튼3도 체크 해제됩니다.
        item1.checked = false;
        item2.checked = false;
        item3.checked = false;
    }
})

document.addEventListener("DOMContentLoaded", function() {
    // 개별 체크박스 클릭 이벤트 처리
    [item1, item2, item3].forEach(function(item) {
        item.addEventListener('click', function() {
            // 모든 개별 체크박스(item1, item2, item3)가 체크되지 않은 경우
            if (!item1.checked || !item2.checked || !item3.checked) {
                all_check.checked = false; // 전체버튼 체크박스의 체크 해제
            } else {
                all_check.checked = true; // 하나라도 개별 체크박스(item1, item2, item3)가 체크되면 전체버튼 체크박스를 체크
            }
        });
    });

    // 전체버튼 체크박스 클릭 이벤트 처리
    all_check.addEventListener('click', function() {
        // 전체버튼 체크박스가 체크되면 개별 체크박스들(item1, item2, item3) 모두 체크
        [item1, item2, item3].forEach(function(item) {
            item.checked = all_check.checked;
        });
    });
});
