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
    const cartTotalMessage = document.getElementById('cart-total');
    const totalPriceDisplay = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button class="add-cart" data-id="${product.id}">Add to cart</button>
        `
        productList.appendChild(productDiv); 
    });

    productList.addEventListener("click", (e) => {
        if(e.target.tagName === 'BUTTON'){
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    })

    function addToCart(product){
        cart.push(product);
        renderCart();
    }

    // cart.addEventListener("click", (e) => {
    //     if(e.target.tagName === 'BUTTON'){
    //         const removeProductId = parseInt(e.target.getAttribute('remove-data-id'));
    //         const removeProduct = products.find(p => p.id === removeProductId);
    //         removeFromCart(removeProduct);
    //     }
    // })
    
    // function removeFromCart(removeProduct){
    //     cart.remove();
    // }

    function renderCart(){
        cartItems.innerText = "";
        let totalPrice = 0;

        if(cart.length > 0){
            emptyCartMessage.classList.add('hidden');
            cartTotalMessage.classList.remove('hidden');
            cart.forEach((item, index) => {
                totalPrice += item.price;
                const cartItem = document.createElement('div');
                cartItem.innerHTML = `  
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <button id='remove-item-btn' remove-item-id = ${item.id} class='remove-item'>Remove item</button>
                `
                cartItems.appendChild(cartItem);
                totalPriceDisplay.textContent = `$${totalPrice}`;
            })
        }
        else{
            emptyCartMessage.classList.remove('hidden');
            totalPriceDisplay.textContent = '$0';
        }
    }

    checkoutBtn.addEventListener("click", () => {
        cart.length = 0;
        alert("Checkout successfully");
        renderCart();
    })
})