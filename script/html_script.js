

let mainRef = document.getElementById("main");
let cartContentRef = document.getElementById("cart-content");
let cartContentResponsivRef = document.getElementById("cart-content-responsiv")
let countsCartRef = document.getElementById("counts-cart")
const deliverFee = 3.50;

function renderMain() {
    let mainHtml = '';

    mainHtml += `        
    <div class="restaurant-details">
            <div class="restaurant-info">
                <img src="assets/Restaurant_logo/Ristorante Bella Italia.png" alt="Ristorante Bella Italia">
                <h1>Ristorante Bella Italia</h1>
                <div class="restaurant-info-details">
                    <div>
                        <span class="star">★ 4.7</span>
                        <span>(324)</span>
                        <span>Italienisch</span>
                    </div>
                    <div>
                        <span>🚚</span>
                        <span>Lieferung: 3,50 €</span>
                    </div>
                    <div>
                        <span>⏱️</span>
                        <span>25-35 Min.</span>
                    </div>
                </div>   
            </div>
            <div class="about-us">
                <a href="'"><img src="assets/icon/icons8-info-50.png" alt="">
                <span>Über uns</span></a>
            </div>
        </div> 
        <div class="opening-hours">
            <span>Dieses Restaurant hat 24 Stunden geöffnet.</span>
        </div>

        <div class="categories" id="categories">
            <h3>Kategorien</h3>
            <div class="category-list">
                <a href="#Angebote">Angebote</a>
                <a href="#Vorspeisen">Vorspeisen</a>
                <a href="#Pizza">Pizza</a>
                <a href="#Pasta">Pasta</a>
                <a href="#Salate">Salate</a>
                <a href="#Desserts">Desserts</a>
                <a href="#Getränke">Getränke</a>
            </div>
        </div>`;

    for (let category in menu) {
        mainHtml += `
                <div class="category-section" id="${category}">
                    <h2 class="category-title">${category}</h2>
                    <div class="items-grid">
            `;

        let dishes = menu[category];
        for (let dish of dishes) {
            mainHtml += `
                    <div class="menu-item">
                        <div class="item-image">
                            <img src="${dish.pictures}" alt="${dish.name}">
                        </div>
                        <div class="item-details">
                            <div class="item-name">${dish.name}</div>
                            <div class="item-description">${dish.description}</div>
                            <div class="item-price">
                                <span>${dish.price}</span>
                                <button onclick="addToCart('${dish.name}','${dish.price}')" class="add-button">+</button>
                            </div>
                        </div>
                    </div>
                `;
        }

        mainHtml += `
                    </div>
                </div>
                `;
    }

    mainHtml += `
            <div class="background-shopping-cart">          
                <div class="cart-button" id="cart-button" onclick="toggleCartResponsiv()">
                    <span>Warenkorb</span>
                    <span id="counts-cart" onload="renderResponsivCart()"> 0 </span>
                </div>
            </div>`
                

    mainRef.innerHTML = mainHtml;
}

function renderCart() {
    let cartContentHTML = '';
    let subTotal = 0;


    for (let category in menu) {
        for (let dish of menu[category]) {
            if (dish.amount) {
                let priceNumber = parseFloat(dish.price.replace(',', '.').replace('€', ''));
                let dishTotal = dish.amount * priceNumber;
                subTotal += dishTotal;

                cartContentHTML += `
                <div class="shopping-cart-item">
                    <div class="dish-quantity">${dish.amount}x</div>
                    <div class="dish-info">
                        <div>${dish.name}</div>
                        <div>${dishTotal.toFixed(2)} €</div>
                    </div>
                    <div class="shopping-cart-button">
                        <button class="quantity-button" onclick="reduceDish('${dish.name}')">-</button>
                        <button class="quantity-button" onclick="increaseDish('${dish.name}')">+</button>
                    </div>
                </div>
                `;
            }
        }
    }

    cartContentRef.innerHTML = cartContentHTML;
    cartContentResponsivRef.innerHTML = cartContentHTML;
    document.getElementById('result').textContent = subTotal.toFixed(2) + ' €';
    document.getElementById('total').textContent = (subTotal + deliverFee).toFixed(2) + ' €';
    document.getElementById('result-responsiv').textContent = subTotal.toFixed(2) + ' €';
    document.getElementById('total-responsiv').textContent = (subTotal + deliverFee).toFixed(2) + ' €';
}

function pressCheckout() {
    let filledShoppingCart = false;
    for (let category in menu) {
        for (let dish of menu[category]) {
            if (dish.amount > 0) {
                filledShoppingCart = true;
                break;
            }
        }
        if (filledShoppingCart) break;
    }

    if (filledShoppingCart === false) return;

    let cartContentHTML = '';

    cartContentHTML += `
                <div
                <p class="test-checkout">Testbestellung wurde vorgenommen!</p>
                </div>`
    
    for (let category in menu) {
        for (let dish of menu[category]) {
            dish.amount = 0;
        }
    }
    renderCart();
    cartContentRef.innerHTML = cartContentHTML;
    cartContentResponsivRef.innerHTML = cartContentHTML;

    setTimeout(() => {
        renderCart();
    }, 10000);
} 