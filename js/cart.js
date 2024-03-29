// let cart = {
//     'test' : 1,
//     'test-2' : 2,
// }

// document.onclick = event => {
//     if (event.target.classList.contains('plus')) {
//         plusFunction(event.target.dataset.id);
//     }
//     if (event.target.classList.contains('minus')) {
//         minusFunction(event.target.dataset.id);
//     }
// }

// const plusFunction = id => {
//     cart[id]++;
//     renderCart();
// }

// const minusFunction = id => {
//     if (cart[id] - 1 == 0) {
//         deleteFunction();
//         return true;
//     }
//     cart[id]--;
//     renderCart();
// }

// const deleteFunction = id => {
//     delete cart[id];
//     renderCart();
// }

// const renderCart = () => {
//     console.log(cart)
// }

// renderCart();



let cart = {}

document.onclick = event => {
    if (event.target.classList.contains('add')) {
        addFunction(event.target.dataset.id);
    }
}

let num_pp = 0;



const addFunction = id => {
    if (cart[id]) {
        cart[id] = 1;
    }
    else {
        cart[id] = 1;
        renderCart();
        num_pp++;
        let num = document.getElementById("num");
        num.innerHTML = num_pp;
        if (num_pp != 0) {
            document.getElementsByClassName('p')[0].style= "background-color: red";
        }
    }
}



const renderCart = () => {
    let cart_goods = document.querySelector('#cart-goods');
    let li = document.createElement('li');
    li.textContent = event.target.dataset.id;
    cart_goods.append(li);
    console.log(cart);

    let cart_goods_name = document.getElementById('name');
    cart_goods_name.innerHTML = event.target.dataset.id



    let card_background = document.querySelector('#cart-goods');
    let goods_card = document.createElement('div');
    goods_card.className = 'goods-card';
    card_background.append(goods_card);
   
}



// console.log (num_pp);
// num_pp++;
// console.log (num_pp);
// let num = document.getElementById("num");
// num.innerHTML = num_pp;