document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            navigateToPage(link.getAttribute("href"));
        });
    });
});

function navigateToPage(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const product = button.parentElement;
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.querySelector(".price").textContent;

            alert(`Added ${productName} to the cart. Price: ${productPrice}`);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
    removeFromCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const cartItem = button.parentElement;
            const productName = cartItem.querySelector("h3").textContent;

            alert(`Removed ${productName} from the cart.`);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.querySelector(".subscribe-button");
    const emailInput = document.querySelector(".email-input");

    subscribeButton.addEventListener("click", function () {
        const email = emailInput.value;

        alert(`Subscribed with email: ${email}`);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const paymentMethodSelect = document.getElementById("payment-method");
    const creditCardDetails = document.getElementById("credit-card-details");

    paymentMethodSelect.addEventListener("change", function () {
        const selectedPaymentMethod = paymentMethodSelect.value;

        if (selectedPaymentMethod === "credit-card") {
            creditCardDetails.style.display = "block";
        } else {
            creditCardDetails.style.display = "none";
        }
    });

    const paymentForm = document.getElementById("payment-form");

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const selectedPaymentMethod = paymentMethodSelect.value;

        if (selectedPaymentMethod === "credit-card") {
        } else if (selectedPaymentMethod === "upi") {
        } else if (selectedPaymentMethod === "net-banking") {
        } else if (selectedPaymentMethod === "cod") {
        }
    });
});
