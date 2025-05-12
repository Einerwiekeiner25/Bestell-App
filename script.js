function addToCart(name) {
    for (let category in menu) {
        let dishes = menu[category];
        for (let dish of dishes) {
            if (dish.name === name) {
                dish.amount++;
                renderCart()
                updateCartCount();
                return;
            }
        }
    }
}

function increaseDish(name) {
    for (let category in menu) {
        let dishes = menu[category];
        for (let dish of dishes) {
            if (dish.name === name) {
                dish.amount++;
                renderCart();
                updateCartCount();
                return;
            }
        }
    }
}

function reduceDish(name) {
    for (let category in menu) {
        let dishes = menu[category];
        for (let dish of dishes) {
            if (dish.name === name) {
                dish.amount--;
                renderCart();
                updateCartCount();
                return;
            }
        }
    }
}

function updateCartCount() {
    let total = 0;
    for (let category in menu) {
        let dishes = menu[category];
        for (let dish of dishes) {
            total += dish.amount;
        }
    }
    document.getElementById('counts-cart').innerText = total;
}


function toogleCartResponsiv() {
    let shoppingCartResponsivMenuSection = document.getElementById("shopping-cart-responsiv-menu-section")
    shoppingCartResponsivMenuSection.classList.toggle("d-none")
}

function Eventbubbling() {
    
}

function countDishesCartResponsiv() {
    
}