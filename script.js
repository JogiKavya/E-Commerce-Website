let cartCount = 0;
let cartItems = [];
const cartCountElement = document.getElementById("cart-count");
const cartItemsElement = document.getElementById("cart-items");

const addToCartButtons = document.querySelectorAll("button");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const itemName = button.getAttribute("data-item"); 
    if (itemName) {
      cartItems.push(itemName);
      cartCount++;
      cartCountElement.textContent = cartCount;
      updateCartList();
    }
  });
});

function updateCartList() {
  cartItemsElement.innerHTML = "";

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item + " ";
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.color = "red";
    removeBtn.style.cursor = "pointer";

    removeBtn.addEventListener("click", () => {
      cartItems.splice(index, 1); 
      cartCount--;
      cartCountElement.textContent = cartCount;
      updateCartList();
    });

    li.appendChild(removeBtn);
    cartItemsElement.appendChild(li);
  });
}

