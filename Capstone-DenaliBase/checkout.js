document.addEventListener("DOMContentLoaded", function() {
    const checkoutForm = document.getElementById("checkoutForm");

    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        console.log("Order Submitted:");
        console.log("Name: " + checkoutForm.name.value);
        console.log("Email: " + checkoutForm.email.value);
        console.log("Phone Number: " + checkoutForm.phonenum.value);
        console.log("Shipping Address: " + checkoutForm.saddress.value);
        console.log("Billing Address: " + checkoutForm.baddress.value);
        console.log("Card Number: " + checkoutForm.cardNumber.value);
        console.log("Expiration Date: " + checkoutForm.expiry.value);
        console.log("CVV: " + checkoutForm.cvv.value);

 const orderNumber = Math.floor(Math.random() * 1000000) + 1;

 const alertDiv = document.createElement("div");
 alertDiv.className = "alert";
 alertDiv.innerText = "Your order #" + orderNumber + " has been submitted! Please give us 3-5 business days to get your order shipped out! Contact us with any questions at DenaliBase_customersupport@gmail.com. Thank you!";
 
 checkoutForm.parentNode.insertBefore(alertDiv, checkoutForm.nextSibling);

 $(alertDiv).slideDown();


    });
});
