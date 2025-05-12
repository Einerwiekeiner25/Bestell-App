let menu = {
    "Angebote": [
        {
            "name": "Pizza & Getränk Kombi",
            "description": "Eine mittlere Pizza nach Wahl und ein 0,5l Getränk nach Wahl",
            "price": "12,90 €",
            "amount": 0,
            "pictures": "assets/food/pizza_getränk_kombi.jpg"
        },
        {
            "name": "Family Special",
            "description": "2 große Pizzen, 1 Salat und 2 Getränke nach Wahl",
            "price": "24,90 €",
            "amount": 0,
            "pictures": "assets/food/family_pizza.jpg"
        }
    ],
    "Vorspeisen": [
        {
            "name": "Bruschetta",
            "description": "Geröstetes Brot mit frischen Tomaten, Knoblauch und Basilikum",
            "price": "5,90 €",
            "amount": 0,
            "pictures": "assets/food/bruschetta.jpg"
        },
        {
            "name": "Caprese",
            "description": "Mozzarella mit Tomaten, Basilikum und Olivenöl",
            "price": "7,50 €",
            "amount": 0,
            "pictures": "assets/food/caprese.jpg"
        },
        {
            "name": "Carpaccio",
            "description": "Hauchdünne Scheiben vom Rinderfilet mit Rucola, Parmesan und Avocado",
            "price": "9,90 €",
            "amount": 0,
            "pictures": "assets/food/carpaccio.jpg"
        }
    ],
    "Pizza": [
        {
            "name": "Pizza Margherita",
            "description": "Tomatensauce, Mozzarella, Basilikum",
            "price": "8,90 €",
            "amount": 0,
            "pictures": "assets/food/pizza_margherita.jpg"
        },
        {
            "name": "Pizza Salami",
            "description": "Tomatensauce, Mozzarella, Salami",
            "price": "9,90 €",
            "amount": 0,
            "pictures": "assets/food/pizza_salami.jpg"
        },
        {
            "name": "Pizza Prosciutto",
            "description": "Tomatensauce, Mozzarella, Schinken",
            "price": "10,50 €",
            "amount": 0,
            "pictures": "assets/food/pizza_prosciutto.jpg"
        },
        {
            "name": "Pizza Funghi",
            "description": "Tomatensauce, Mozzarella, Pilze",
            "price": "11,90 €",
            "amount": 0,
            "pictures": "assets/food/pizza_funghi.jpg"
        }
    ],
    "Pasta": [
        {
            "name": "Spaghetti Bolognese",
            "description": "Spaghetti mit hausgemachter Bolognese-Sauce",
            "price": "9,90 €",
            "amount": 0,
            "pictures": "assets/food/spaghetti_bolognese.jpg"
        },
        {
            "name": "Lasagne al Forno",
            "description": "Geschichtete Nudeln mit Bolognese, Bechamel und Käse",
            "price": "11,50 €",
            "amount": 0,
            "pictures": "assets/food/lasagne_al_forno.jpg"
        },
        {
            "name": "Penne Arrabbiata",
            "description": "Penne mit scharfer Tomatensauce, Knoblauch und Peperoni",
            "price": "9,50 €",
            "amount": 0,
            "pictures": "assets/food/penne_all_arrabbiata.jpg"
        }
    ],
    "Salate": [
        {
            "name": "Insalata Mista",
            "description": "Gemischter Salat mit Tomaten, Gurken, Zwiebeln und Balsamico-Dressing",
            "price": "6,90 €",
            "amount": 0,
            "pictures": "assets/food/insalata_mista.jpg"
        },
        {
            "name": "Insalata di Pollo",
            "description": "Gemischter Salat mit gegrillten Hähnchenbrust-Streifen",
            "price": "9,90 €",
            "amount": 0,
            "pictures": "assets/food/insalata_di_pollo.jpg"
        },
        {
            "name": "Rucola mit Parmigiano",
            "description": "Rucolasalat mit Parmesanspänen und Balsamico-Dressing",
            "price": "8,50 €",
            "amount": 0,
            "pictures": "assets/food/rucolasalat_with_parmigiano.jpg"
        }
    ],
    "Desserts": [
        {
            "name": "Tiramisu",
            "description": "Klassisches italienisches Dessert mit Mascarpone und Kaffee",
            "price": "5,90 €",
            "amount": 0,
            "pictures": "assets/food/tiramisu.jpg"
        },
        {
            "name": "Panna Cotta",
            "description": "Cremiges Dessert mit Vanille und Beerensoße",
            "price": "4,90 €",
            "amount": 0,
            "pictures": "assets/food/panna_cotta.jpg"
        },
        {
            "name": "Cannoli",
            "description": "Frittierte Teigröllchen, gefüllt mit gesüßter Ricottacreme",
            "price": "6,50 €",
            "amount": 0,
            "pictures": "assets/food/cannoli.jpg"
        }
    ],
    "Getränke": [
        {
            "name": "Cola",
            "description": "0,5l Flasche",
            "price": "2,90 €",
            "amount": 0,
            "pictures": "assets/food/cola.jpg"
        },
        {
            "name": "Mineralwasser",
            "description": "0,5l Flasche, mit/ohne Kohlensäure",
            "price": "2,50 €",
                        "amount": 0,
            "pictures": "assets/food/mineralwasser.jpg"
        },
        {
            "name": "Wein Rot/Weiß",
            "description": "0,25l Glas",
            "price": "4,90 €",
                        "amount": 0,
            "pictures": "assets/food/wein.jpg"
        },
        {
            "name": "Bier vom Fass",
            "description": "0,3l Glas",
            "price": "3,50 €",
                        "amount": 0,
            "pictures": "assets/food/bier.jpg"
        }
    ]
};

window.onload = () => {
    renderMain();
};

