// Open the modal when clicking the "Donate Now" button
document.getElementById("donateButton").addEventListener("click", openModal);

// Close the modal
function closeModal() {
  document.getElementById("donationModal").style.display = "none";
}

// Open the modal
function openModal() {
  document.getElementById("donationModal").style.display = "block";
}

// Add food items to the donation cart
function addToCart() {
  // You can add your logic here to update the donation cart
  // For example, append new items to the donation cart section
  const donationCart = document.querySelector(".donation-cart");
  const newItem = document.createElement("p");
  newItem.textContent = "New Food Item"; // Replace with actual item details
  donationCart.appendChild(newItem);

  // Close the modal after adding items
  closeModal();
}


// Your existing JavaScript code

function addToCart() {
    // Retrieve selected quantities and update donation cart
    const tofuQuantity = parseInt(document.getElementById("tofuQuantity").value);
    const vegetablePackQuantity = parseInt(document.getElementById("vegetablePackQuantity").value);
    const filletFishQuantity = parseInt(document.getElementById("filletFishQuantity").value);
    const greenCapsicumQuantity = parseInt(document.getElementById("greenCapsicumQuantity").value);
  
    // Calculate prices based on quantities
    const tofuPrice = tofuQuantity * 5.00;
    const vegetablePackPrice = vegetablePackQuantity * 10.00;
    const filletFishPrice = filletFishQuantity * 8.00;
    const greenCapsicumPrice = greenCapsicumQuantity * 3.50;
  
    // Update donation cart with selected items
    const donationCart = document.querySelector(".donation-cart");
    donationCart.innerHTML = ""; // Clear previous items
  
    let donationTotal = 0;
  
    if (tofuQuantity > 0) {
      donationTotal += tofuPrice;
      addItemToCart(donationCart, "Tofu", tofuQuantity, tofuPrice);
    }
  
    if (vegetablePackQuantity > 0) {
      donationTotal += vegetablePackPrice;
      addItemToCart(donationCart, "Vegetable Pack", vegetablePackQuantity, vegetablePackPrice);
    }

    if (filletFishQuantity > 0) {
      donationTotal += filletFishPrice;
      addItemToCart(donationCart, "Fillet Fish", filletFishQuantity, filletFishPrice);
    }

    if (greenCapsicumPrice > 0) {
      donationTotal += greenCapsicumPrice;
      addItemToCart(donationCart, "Green Capsicum", greenCapsicumQuantity, greenCapsicumPrice);
    }
  
    // Add more items as needed
  
    // Update the donation total in the cart total section
    updateDonationTotal(donationTotal);
  
    // Close the modal after adding items
    closeModal();
  }
  
  // Helper function to add items to the cart
  function addItemToCart(cart, itemName, quantity, price) {
    const newItem = document.createElement("div");
    newItem.innerHTML = `<p>${itemName} x ${quantity}</p><p>Price: $${price.toFixed(2)}</p>`;
    cart.appendChild(newItem);
  }
  
  // Helper function to update donation total in the cart total section
  function updateDonationTotal(total) {
    const donationTotalElement = document.querySelector(".donation-total");
    donationTotalElement.textContent = `Donation Total: $${total.toFixed(2)}`;
  }
  
  function openLearnMore() {
    // Add your logic to handle the "Learn More" button click event
    // For example, you can open a new window, redirect to a learn more page, or display additional information.
    alert("Learn more functionality coming soon!");
  }