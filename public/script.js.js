
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const total = document.getElementById("total");
  cartItems.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - RM ${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    sum += item.price;
  });
  total.textContent = sum.toFixed(2);
}
