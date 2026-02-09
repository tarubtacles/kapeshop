let cart = [];

const products = [
    {
        id: 1,
        name: "Espresso",
        price: 120,
        category: "coffee",
        img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a"
    },
    {
        id: 2,
        name: "Cappuccino",
        price: 150,
        category: "coffee",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
        id: 3,
        name: "Latte",
        price: 160,
        category: "coffee",
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
        id: 4,
        name: "Croissant",
        price: 90,
        category: "pastries",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a"
    },
    {
        id: 5,
        name: "Donut",
        price: 70,
        category: "pastries",
        img: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
    },
    {
        id: 6,
        name: "Chocolate Cake",
        price: 180,
        category: "cakes",
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },
    {
        id: 7,
        name: "Red Velvet Cake",
        price: 200,
        category: "cakes",
        img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7"
    }
];

function loadProducts(filter = "all") {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    const filtered = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    filtered.forEach(p => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>₱${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

function filterCategory(cat) {
    document.querySelectorAll(".category-btn")
        .forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    loadProducts(cat);
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    document.getElementById("cartCount").textContent = cart.length;
    const list = document.getElementById("cartItemsList");
    list.innerHTML = "";

    let total = 0;
    cart.forEach(item => {
        total += item.price;
        list.innerHTML += `<li>${item.name} - ₱${item.price}</li>`;
    });

    document.getElementById("subtotal").textContent = total;
    document.getElementById("modalTotal").textContent = total;
}

function showCart() {
    document.getElementById("cartModal").style.display = "block";
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for your order!");
    cart = [];
    updateCart();
    closeCart();
}

loadProducts();
