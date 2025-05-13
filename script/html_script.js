let mainRef = document.getElementById("main");
let cartContentRef = document.getElementById("cart-content");
let cartContentResponsivRef = document.getElementById("cart-content-responsiv")
let countsCartRef = document.getElementById("counts-cart")
const deliverFee = 3.50;

function renderMain() {
    let html = '';

    html += restaurantDetailsHtml()
    for (let category in menu) {
        html += categorySectionHtml(category)

        let dishes = menu[category];
        for (let dish of dishes) {
            html += menuItemsHtml(dish)
        }

        html += divForMainHtml()
    }

    html += backgroundShoppingCartHtml()            
    mainRef.innerHTML = html;
}

function renderCart() {
    let {cartContentHTML, subTotal} = buildCartContent();

    cartContentRef.innerHTML = cartContentHTML;
    cartContentResponsivRef.innerHTML = cartContentHTML;
    document.getElementById('result').textContent = subTotal.toFixed(2) + ' €';
    document.getElementById('total').textContent = (subTotal + deliverFee).toFixed(2) + ' €';
    document.getElementById('result-responsiv').textContent = subTotal.toFixed(2) + ' €';
    document.getElementById('total-responsiv').textContent = (subTotal + deliverFee).toFixed(2) + ' €';
}

function pressCheckout() {
    if (!filledShoppingCart()) return;
    
    let cartContentHTML = '';

    cartContentHTML += testCheckoutHtml()
    
    for (let category in menu) {
        for (let dish of menu[category]) {
            dish.amount = 0;
        }
    }
    renderCart();
    updateCartCount();
    cartContentRef.innerHTML = cartContentHTML;
    cartContentResponsivRef.innerHTML = cartContentHTML;
} 