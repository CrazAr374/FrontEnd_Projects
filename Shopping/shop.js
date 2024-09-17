// Cart and wishlist arrays
let cart = [];
let wishlist = [];

// Generate product cards
const productGrid = document.querySelector('.product-grid');

for (let i = 1; i <= 50; i++) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.innerHTML = `
    <img src="https://via.placeholder.com/300x200" alt="Product ${i}">
    <h3>Product ${i}</h3>
    <p>Price: $${(i * 10).toFixed(2)}</p>
    <div class="actions">
      <button class="add-to-cart">Add to Cart</button>
      <button class="buy-now">Buy Later</button>
    </div>
  `;

  // Add event listeners to buttons
  const addToCartBtn = productCard.querySelector('.add-to-cart');
  const buyNowBtn = productCard.querySelector('.buy-now');

  addToCartBtn.addEventListener('click', () => {
    const product = {
      name: `Product ${i}`,
      price: i * 10,
    };
    cart.push(product);
    alert(`${product.name} added to cart!`);
    updateCartCount();
  });

  buyNowBtn.addEventListener('click', () => {
    const product = {
      name: `Product ${i}`,
      price: i * 10,
    };
    wishlist.push(product);
    alert(`${product.name} added to wishlist!`);
    updateWishlistCount();
  });

  productGrid.appendChild(productCard);
}

// Theme toggle
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Update cart count
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = cart.length;
  } else {
    const cartLink = document.createElement('a');
    cartLink.id = 'cart-link';
    cartLink.href = '#';
    cartLink.textContent = 'Cart ';

    const cartCount = document.createElement('span');
    cartCount.id = 'cart-count';
    cartCount.textContent = cart.length;

    cartLink.appendChild(cartCount);
    const cartSection = document.querySelector('.cart-section');
    cartSection.appendChild(cartLink);
  }
}

// Update wishlist count
function updateWishlistCount() {
  const wishlistCount = document.getElementById('wishlist-count');
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
  } else {
    const wishlistLink = document.createElement('a');
    wishlistLink.id = 'wishlist-link';
    wishlistLink.href = '#';
    wishlistLink.textContent = 'Wishlist ';

    const wishlistCount = document.createElement('span');
    wishlistCount.id = 'wishlist-count';
    wishlistCount.textContent = wishlist.length;

    wishlistLink.appendChild(wishlistCount);
    const wishlistSection = document.querySelector('.wishlist-section');
    wishlistSection.appendChild(wishlistLink);
  }
}

// Get modal elements
const cartModal = document.getElementById('cart-modal');
const wishlistModal = document.getElementById('wishlist-modal');
const cartItems = document.getElementByI