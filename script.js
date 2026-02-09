let cart = [];
let cartCount = document.getElementById("cartCount");
let cartItemsList = document.getElementById("cartItemsList");
let subtotalEl = document.getElementById("subtotal");
let totalEl = document.getElementById("modalTotal");

// Sample products
const products = [
    { id: 1, name: "Espresso", price: 120, category: "coffee" },
    { id: 2, name: "Cappuccino", price: 150, category: "coffee" },
    { id: 3, name: "Croissant", price: 90, category: "pastries" },
    { id: 4, name: "Chocolate Cake", price: 180, category: "cakes" }
];

// Load products
function loadProducts(filter = "all") {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    const filtered = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    filtered.forEach(p => {
        productList.innerHTML += `
            <div class="product-card">
                <h3>${p.name}</h3>
                <p>₱${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

// Filter buttons
function filterCategory(cat) {
    document.querySelectorAll(".category-btn")
        .forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
    loadProducts(cat);
}

// Cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.length;
    cartItemsList.innerHTML = "";

    let total = 0;
    cart.forEach(item => {
        total += item.price;
        cartItemsList.innerHTML += `<li>${item.name} - ₱${item.price}</li>`;
    });

    subtotalEl.textContent = total;
    totalEl.textContent = total;
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

// Load on start
loadProducts();
