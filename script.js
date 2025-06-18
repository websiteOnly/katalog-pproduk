document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    let count = 0;

    const buttons = document.querySelectorAll('.btn-add-cart');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            count++;
            cartCount.textContent = count;
            const productCard = button.closest('.product-card');
            const productName = productCard.dataset.name;
            const productPrice = productCard.dataset.price;
            alert(`"${productName}" berhasil ditambahkan ke keranjang dengan harga Rp ${productPrice}`);
        });
    });
});