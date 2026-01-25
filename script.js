/* ================= CART LOGIC ================= */

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart buttons (home page)
document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");

        const name = card.querySelector("h5").innerText;
        const price = parseInt(
            card.querySelector("p").innerText.replace("₹", "")
        );

        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartBadge();
        alert("Added to cart!");
    });
});

// Update cart badge (navbar)
function updateCartBadge() {
    const badge = document.querySelector(".cart-badge");
    if (badge) {
        badge.innerText = cart.length;
    }
}

// Load cart page items
function loadCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems) return;

    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        if (cartTotal) cartTotal.innerText = "0";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <div class="d-flex justify-content-between border-bottom py-2">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
            </div>
        `;
    });

    if (cartTotal) cartTotal.innerText = total;
}

// Clear cart
function clearCart() {
    if (confirm("Clear all items from cart?")) {
        cart = [];
        localStorage.removeItem("cart");
        loadCart();
        updateCartBadge();
    }
}

// LOGIN SYSTEM (FAKE)
function loginUser(event) {
    event.preventDefault();
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    if (user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        // Close the modal
        const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
        if (loginModal) loginModal.hide();
        // Clear form
        document.getElementById("loginUser").value = "";
        document.getElementById("loginPass").value = "";
        // Redirect to checkout after successful login
        setTimeout(() => {
            window.location.href = "checkout.html";
        }, 500);
    } else {
        alert("Invalid credentials! Use admin/1234");
    }
}

// Check login
function isLoggedIn() {
    return localStorage.getItem("loggedIn") === "true";
}

/* ================= SEARCH FUNCTION ================= */
function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.querySelector("h5").innerText.toLowerCase();

        if (title.includes(input)) {
            card.parentElement.style.display = "block";
        } else {
            card.parentElement.style.display = "none";
        }
    });
}

/* ================= CUSTOMIZE PRICE CALCULATION ================= */
function calculatePrice() {
    const cpu = parseInt(document.getElementById("cpu").value) || 0;
    const ram = parseInt(document.getElementById("ram").value) || 0;
    const gpu = parseInt(document.getElementById("gpu").value) || 0;
    const cooler = parseInt(document.getElementById("cooler").value) || 0;
    const motherboard = parseInt(document.getElementById("motherboard").value) || 0;
    const ssd = parseInt(document.getElementById("ssd").value) || 0;
    const satassd = parseInt(document.getElementById("satassd").value) || 0;
    const hdd = parseInt(document.getElementById("hdd").value) || 0;
    const psu = parseInt(document.getElementById("psu").value) || 0;
    const cabinet = parseInt(document.getElementById("cabinet").value) || 0;
    const monitor = parseInt(document.getElementById("monitor").value) || 0;
    const keyboard = parseInt(document.getElementById("keyboard").value) || 0;
    const mouse = parseInt(document.getElementById("mouse").value) || 0;
    const mousepad = parseInt(document.getElementById("mousepad").value) || 0;
    const headset = parseInt(document.getElementById("headset").value) || 0;
    
    const total = cpu + ram + gpu + cooler + motherboard + ssd + satassd + hdd + psu + cabinet + monitor + keyboard + mouse + mousepad + headset;
    
    document.getElementById("totalPrice").innerText = `Total: ₹${total}`;
}

/* ================= CHECKOUT PAGE LOAD ================= */
function loadCheckoutSummary() {
    const summary = document.getElementById("summary");
    const checkoutTotal = document.getElementById("checkoutTotal");
    
    if (!summary) return;
    
    let total = 0;
    summary.innerHTML = "<h5 class='mb-3'>Items in Your Order:</h5>";
    
    if (cart.length === 0) {
        summary.innerHTML += "<p class='text-warning'>No items in cart</p>";
        return;
    }
    
    cart.forEach(item => {
        total += item.price;
        summary.innerHTML += `<div class="d-flex justify-content-between py-2 border-bottom">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        </div>`;
    });
    
    if (checkoutTotal) {
        checkoutTotal.innerText = total;
    }
}

/* ================= PAYMENT PAGE LOAD ================= */
function loadPaymentTotal() {
    const paymentTotal = document.getElementById("paymentTotal");
    if (paymentTotal) {
        let total = 0;
        cart.forEach(item => {
            total += item.price;
        });
        paymentTotal.innerText = total;
    }
}

/* ================= ON PAGE LOAD ================= */
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    loadCart();
    loadCheckoutSummary();
    loadPaymentTotal();
});
