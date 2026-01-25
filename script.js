/* ================= CART LOGIC ================= */

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart buttons (home page and games page)
document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
        let name, price;
        
        // Check if button has data attributes (for games)
        if (button.hasAttribute("data-price") && button.hasAttribute("data-name")) {
            name = button.getAttribute("data-name");
            price = parseInt(button.getAttribute("data-price"));
        } else {
            // Fallback for product cards (home page)
            const card = button.closest(".card");
            name = card.querySelector("h5").innerText;
            
            // Get the last p tag which contains price
            const pTags = card.querySelectorAll("p");
            const lastP = pTags[pTags.length - 1];
            price = parseInt(lastP.innerText.replace("₹", ""));
        }

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

// LOGIN SYSTEM (FAKE) - EMAIL LOGIN
function loginWithEmail(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;

    if (email === "demo@example.com" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userName", email);
        alert("Login successful!");
        const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
        if (loginModal) loginModal.hide();
        document.getElementById("loginEmail").value = "";
        document.getElementById("loginPass").value = "";
    } else {
        alert("Invalid credentials! Use demo@example.com / 1234");
    }
}

// LOGIN SYSTEM (FAKE) - PHONE LOGIN
function loginWithPhone(event) {
    event.preventDefault();
    const phone = document.getElementById("loginPhone").value;
    const otp = document.getElementById("loginOTP").value;

    if (phone === "9876543210" && otp === "123456") {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userName", phone);
        alert("Login successful!");
        const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
        if (loginModal) loginModal.hide();
        document.getElementById("loginPhone").value = "";
        document.getElementById("loginOTP").value = "";
    } else {
        alert("Invalid credentials! Use 9876543210 / 123456");
    }
}

// LOGIN SYSTEM (FAKE) - BACKWARD COMPATIBLE
function loginUser(event) {
    event.preventDefault();
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    if (user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userName", user);
        alert("Login successful!");
        const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
        if (loginModal) loginModal.hide();
        document.getElementById("loginUser").value = "";
        document.getElementById("loginPass").value = "";
    } else {
        alert("Invalid credentials!");
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
