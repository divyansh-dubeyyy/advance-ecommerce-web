/* ================= CART LOGIC ================= */

// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Add to cart
document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const name = card.querySelector("h5").innerText;
        const price = parseInt(card.querySelector(".text-success").innerText.replace("₹",""));

        let cart = getCart();
        cart.push({ name, price });
        saveCart(cart);

        alert("Added to cart!");
    });
});

// Update cart count badge
function updateCartCount() {
    const cart = getCart();
    const badge = document.querySelector(".cart-badge");
    if (badge) badge.innerText = cart.length;
}

// Load cart on cart page
function loadCartPage() {
    const cart = getCart();
    const cartDiv = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");

    if (!cartDiv) return;

    cartDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartDiv.innerHTML += `
        <div class="d-flex justify-content-between align-items-center bg-black p-3 mb-2 rounded">
          <div>
            <strong>${item.name}</strong><br>
            ₹${item.price}
          </div>
          <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
        </div>
        `;
    });

    totalEl.innerText = total;
}

// Remove item
function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    loadCartPage();
}

// Clear cart
function clearCart() {
    localStorage.removeItem("cart");
    loadCartPage();
    updateCartCount();
}

// Auto load
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    loadCartPage();
});
