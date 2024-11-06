function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No items in cart.</p>';
        return;
    }

    cart.forEach(user => {
        const cartCard = document.createElement('div');
        cartCard.classList.add('cart-card');
        cartCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <button onclick="deleteFromCart(${user.id})">Delete</button>
        `;
        cartContainer.appendChild(cartCard);
    });
}

function deleteFromCart(userId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(user => user.id !== userId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

displayCart();
