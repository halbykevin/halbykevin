document.addEventListener('DOMContentLoaded', function() {
    let searchBar = document.getElementById('searchBar');
    
    searchBar.addEventListener('keyup', function() {
        let query = searchBar.value.toLowerCase();
        let containers = document.querySelectorAll('.container');
        
        containers.forEach(function(container) {
            let caption = container.querySelector('.image-caption').textContent.toLowerCase();
            if (caption.includes(query)) {
                container.style.display = '';
            } else {
                container.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let cartCount = document.getElementById('cartCount');
    let addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            let currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;
        });
    });
});

let cart = [];

function toggleCart() {
    const cartMenu = document.getElementById('cartSideMenu');
    if (cartMenu.style.right === '0px') {
        cartMenu.style.right = '-300px';
    } else {
        cartMenu.style.right = '0px';
    }
}

document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        const item = {
            name: `T-shirt ${index + 1}`,
            price: 29.99
        };
        addToCart(item);
    });
});

