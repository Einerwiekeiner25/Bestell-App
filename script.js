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

function changeDishAmount(name, plusorminus) {
    for (let category in menu) {
        let dishes = menu[category];
        for (let dish of dishes) {
            if (dish.name === name) {
                dish.amount += plusorminus;
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

function toggleCartResponsiv() {
    let cartRef = document.getElementById("shopping-cart-responsiv")
    cartRef.classList.toggle("d-none")
}

function buildCartContent() {
    let cartContentHTML = '';
    let subTotal = 0;

    for (let category in menu) {
        for (let dish of menu[category]) {
            if (dish.amount) {
                let priceNumber = parseFloat(dish.price.replace(',', '.').replace('€', ''));
                let dishTotal = dish.amount * priceNumber;
                subTotal += dishTotal;

                cartContentHTML += shoppingCartItem(dish, dishTotal);
            }
        }
    }
    return {cartContentHTML, subTotal};
}

function filledShoppingCart(){
    for (let category in menu) {
        for (let dish of menu[category]) {
            if (dish.amount > 0) {
                return true;
            }
        }
    }
    testCheckoutHtml();
}

document.getElementById("cart-header-responsiv-section").addEventListener("click", function(event) {
    event.stopPropagation();
  });
  