document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {id: 1, name: "Product 1", price: 29.99},
        {id: 2, name: "Product 1", price: 9.99},
        {id: 3, name: "Product 1", price: 59.99},
    ]

    const cart = [];

    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart');
    const cartTotal = document.getElementById('cart-total');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}
        <button class="add-cart" data-id="${product.id}">Add to cart</button>
        `
        productList.appendChild(productDiv); 
    })
})