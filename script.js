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


function toggleCartResponsiv() {
    let cartRef = document.getElementById("shopping-cart-responsiv")
    cartRef.classList.toggle("d-none")
}

document.getElementById("cart-header-responsiv-section").addEventListener("click", function(event) {
    event.stopPropagation();
  });
  