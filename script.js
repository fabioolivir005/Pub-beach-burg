/* ========================================
   CART MANAGEMENT
   ======================================== */

let cart = [];
const WHATSAPP_PHONE = '5591991009087';

/**
 * Add item to cart
 */
function addCart(itemName, itemPrice) {
  const existingItem = cart.find(item => item.name === itemName);
  
  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({
      name: itemName,
      price: itemPrice,
      qty: 1
    });
  }
  
  renderCart();
  openCart();
  
  // Visual feedback
  showNotification(`${itemName} adicionado ao pedido! ✓`);
}

/**
 * Remove item from cart
 */
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
  
  if (cart.length === 0) {
    closeCart();
  }
}

/**
 * Update item quantity
 */
function updateQty(index, change) {
  cart[index].qty += change;
  
  if (cart[index].qty <= 0) {
    removeFromCart(index);
  } else {
    renderCart();
  }
}

/**
 * Render cart items and total
 */
function renderCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const cartCountElement = document.getElementById('cartCount');
  const totalPriceElement = document.getElementById('totalPrice');
  
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountElement.textContent = totalItems;
  
  // Clear container
  cartItemsContainer.innerHTML = '';
  
  if (cart.length === 0) {
    // Show empty state
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <p>Seu pedido está vazio</p>
        <p class="empty-subtitle">Escolha um burger para começar 🍔</p>
      </div>
    `;
    checkoutBtn.style.display = 'none';
    totalPriceElement.textContent = 'R$ 0,00';
    return;
  }
  
  // Show checkout button
  checkoutBtn.style.display = 'block';
  
  // Render items
  let total = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    
    const cartItemHTML = `
      <div class="cart-item">
        <div class="cart-item-info">
          <p class="cart-item-name">${item.qty}x ${item.name}</p>
          <p class="cart-item-price">R$ ${formatPrice(itemTotal)}</p>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQty(${index}, -1)">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
        </div>
      </div>
    `;
    
    cartItemsContainer.innerHTML += cartItemHTML;
  });
  
  // Update total
  totalPriceElement.textContent = `R$ ${formatPrice(total)}`;
}

/**
 * Format price to Brazilian format
 */
function formatPrice(price) {
  return price.toFixed(2).replace('.', ',');
}

/**
 * Open cart drawer
 */
function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  
  drawer.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Close cart drawer
 */
function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Generate WhatsApp message
 */
function generateWhatsAppMessage() {
  if (cart.length === 0) {
    alert('Seu pedido está vazio!');
    return '';
  }
  
  let message = '🍔 *PEDIDO — PUB BEACH BURG*\n\n';
  let total = 0;
  
  // Add items
  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    message += `${item.qty}x ${item.name} — R$ ${formatPrice(itemTotal)}\n`;
  });
  
  // Add total and fields for delivery
  message += `\n*Total: R$ ${formatPrice(total)}*\n\n`;
  message += '📍 *Endereço:* ________________\n';
  message += '💳 *Forma de pagamento:* ________________\n';
  message += '\n_Pedido realizado via cardápio digital_';
  
  return message;
}

/**
 * Checkout - send to WhatsApp
 */
function checkout() {
  if (cart.length === 0) {
    alert('Seu pedido está vazio!');
    return;
  }
  
  const message = generateWhatsAppMessage();
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
  
  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank');
  
  // Clear cart after sending
  setTimeout(() => {
    cart = [];
    renderCart();
    closeCart();
    showNotification('Pedido enviado! 🎉\nPreencha o endereço e forma de pagamento no WhatsApp.');
  }, 500);
}

/* ========================================
   TAB NAVIGATION
   ======================================== */

/**
 * Switch between menu sections
 */
function switchTab(tabName, buttonElement) {
  // Hide all sections
  const sections = document.querySelectorAll('.menu-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Show selected section
  const selectedSection = document.getElementById(tabName);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }
  
  // Update active button
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });
  buttonElement.classList.add('active');
  
  // Smooth scroll to content
  window.scrollTo({
    top: document.querySelector('.nav-tabs').offsetTop,
    behavior: 'smooth'
  });
}

/* ========================================
   NOTIFICATIONS
   ======================================== */

/**
 * Show temporary notification
 */
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--orange);
    color: #111;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 600;
    z-index: 1000;
    animation: slideIn 0.3s ease;
    max-width: 300px;
    text-align: center;
    font-size: 13px;
    box-shadow: 0 4px 12px rgba(242, 138, 18, 0.3);
  `;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

/* ========================================
   KEYBOARD SHORTCUTS
   ======================================== */

document.addEventListener('keydown', (e) => {
  // ESC key to close cart
  if (e.key === 'Escape') {
    closeCart();
  }
});

/* ========================================
   INITIALIZATION
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize cart display
  renderCart();
  
  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Close cart when clicking overlay
  const overlay = document.getElementById('cartOverlay');
  overlay.addEventListener('click', closeCart);
  
  // Prevent body scroll when cart is open
  const drawer = document.getElementById('cartDrawer');
  const observer = new MutationObserver(() => {
    if (drawer.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  observer.observe(drawer, { attributes: true, attributeFilter: ['class'] });
});

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

/**
 * Get cart summary
 */
function getCartSummary() {
  if (cart.length === 0) return null;
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  
  return {
    items: cart,
    itemCount: itemCount,
    total: total
  };
}

/**
 * Clear cart
 */
function clearCart() {
  if (confirm('Tem certeza que deseja limpar o pedido?')) {
    cart = [];
    renderCart();
  }
}

/**
 * Smooth scroll helper
 */
function smoothScroll(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ========================================
   MOBILE OPTIMIZATION
   ======================================== */

// Detect if device is mobile
const isMobile = () => window.innerWidth <= 768;

// Handle mobile-specific behaviors
window.addEventListener('resize', () => {
  if (!isMobile() && document.getElementById('cartDrawer').classList.contains('open')) {
    // Keep drawer open on larger screens
  }
});

// Close cart when user rotates device
window.addEventListener('orientationchange', () => {
  if (isMobile()) {
    closeCart();
  }
});
