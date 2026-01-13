let isLoggedIn = false;

document.getElementById("loginBtn")?.addEventListener("click", () => {
    isLoggedIn = true;
    alert("Login successful!");
});

document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        if (!isLoggedIn) {
            const modal = new bootstrap.Modal(
                document.getElementById("loginModal")
            );
            modal.show();
        } else {
            alert("Added to cart!");
        }
    });
});

function calculatePrice() {
    let cpu = parseInt(document.getElementById("cpu").value);
    let ram = parseInt(document.getElementById("ram").value);
    let gpu = parseInt(document.getElementById("gpu").value);

    document.getElementById("totalPrice").innerText =
        "Total: ₹" + (cpu + ram + gpu);
}
// Enable hover dropdown without breaking mobile
document.querySelectorAll('.dropdown-hover').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function () {
        if (window.innerWidth >= 992) {
            bootstrap.Dropdown.getOrCreateInstance(
                this.querySelector('.dropdown-toggle')
            ).show();
        }
    });

    dropdown.addEventListener('mouseleave', function () {
        if (window.innerWidth >= 992) {
            bootstrap.Dropdown.getOrCreateInstance(
                this.querySelector('.dropdown-toggle')
            ).hide();
        }
    });
});
// Desktop hover dropdown support
document.querySelectorAll('.dropdown-hover').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 992) {
            bootstrap.Dropdown.getOrCreateInstance(
                item.querySelector('.dropdown-toggle')
            ).show();
        }
    });

    item.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 992) {
            bootstrap.Dropdown.getOrCreateInstance(
                item.querySelector('.dropdown-toggle')
            ).hide();
        }
    });
});
