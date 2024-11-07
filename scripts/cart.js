const product_btn = document.querySelectorAll('.product_btn_wrap button')
const cart_wrap = document.querySelectorAll('.cart_wrap')
const popup_btn = document.querySelectorAll('.item_removal')
const popup_bg = document.querySelectorAll('.popup_bg')
const popup_close_btn = document.querySelectorAll('.popup_close_btn')
const item_close_btn = document.querySelector('.item_close_btn')
const product = document.querySelectorAll('.product')
const item_close_num = document.querySelector('.item_close_num')
const all_check = document.querySelector('#all_check')
const item1 = document.querySelector('#item1')
const item2 = document.querySelector('#item2')
const item3 = document.querySelector('#item3')

const minus = document.querySelectorAll('.minus')
const num_count = document.querySelectorAll('.num_count')
const plus = document.querySelectorAll('.plus')
const origin_price = document.querySelectorAll('.origin_price')
const order_price = document.querySelectorAll('.order_price')
const all_price_num = document.querySelector('.all_price_num')
const sale_price_num = document.querySelector('.sale_price_num')

console.log(minus,num_count,plus,order_price,origin_price)
console.log(all_price_num,sale_price_num)

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

// popup
popup_btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        popup_bg[i].style.display = 'flex'
    })
})

popup_close_btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        popup_bg[i].style.display = 'none'
    })
})

// 체크박스 상태가 변경될 때마다 호출되는 함수
function updateCheckedCount() {
    let checkedCount = 0; // 체크된 체크박스의 개수를 저장할 변수

    // 각 product 요소를 순회하며 체크된 체크박스의 개수를 세기
    product.forEach(product => {
        const checkbox = product.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    // 선택된 체크박스의 개수를 HTML 요소에 표시
    item_close_num.innerHTML = checkedCount.toString();
}

// 각 체크박스의 상태가 변경될 때 updateCheckedCount 함수 호출
product.forEach(product => {
    const checkbox = product.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', updateCheckedCount);
});

// all_check 체크박스의 상태가 변경될 때 updateCheckedCount 함수 호출
all_check.addEventListener('change', updateCheckedCount);


// 초기화 시에도 체크된 체크박스의 개수를 표시하기 위해 한 번 호출
updateCheckedCount();

// 물건 선택 삭제
item_close_btn.addEventListener('click', function() {
    product.forEach(product => {
        if (product.querySelector('input[type="checkbox"]').checked) {
            product.style.display = 'none';
        }
        popup_bg[0].style.display = 'none'
    });
});

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

// 수량 더하기 빼기 버튼
const item_prices = [8400, 38000, 21000];
let price = 12000
let total = 0
let item_nums = [0, 1, 1];
let item_total = [0, 0, 0];

plus.forEach((t, i) => {
    t.addEventListener('click', () => {
        item_nums[i]++;
        num_count[i].value = item_nums[i];
        item_total[i] = item_nums[i] * item_prices[i];
        total = item_nums[i] * price;
        origin_price[0].innerHTML = total.toLocaleString('ko-KR') + '원';
        order_price[i].innerHTML = item_total[i].toLocaleString('ko-KR') + '원';
    });
});

// 아이템1에 대한 빼기 버튼에 대한 이벤트 리스너
minus.forEach((t, i) => {
    t.addEventListener('click', () => {
        if (item_nums[i] > 1) {
            item_nums[i]--;
            num_count[i].value = item_nums[i];
            item_total[i] = item_nums[i] * item_prices[i];
            total = item_nums[i] * price;
            origin_price[0].innerHTML = total.toLocaleString('ko-KR') + '원';
            order_price[i].innerHTML = item_total[i].toLocaleString('ko-KR') + '원';
        }
    });
});