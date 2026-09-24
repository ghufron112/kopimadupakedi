/* ==================== MENU DATA ==================== */
const menuData = [
  // MILK BASED
  {
    id: 1,
    name: "Kopi Madu",
    category: "Milk Based",
    description: "Kopi signature dengan madu asli.",
    price: "13K",
    image: "images/kopi-madu.jpg",
    isBestSeller: true
  },
    {
    id: 2,
    name: "Kopi Aren",
    category: "Milk Based",
    description: "Kopi susu dengan gula aren pilihan.",
    price: "11K",
    image: "images/kopi-aren.jpg",
    isBestSeller: true
  },
  {
    id: 3,
    name: "Hazelnut Latte",
    category: "Milk Based",
    description: "Kopi susu dengan sirup hazelnut.",
    price: "11K",
    image: "images/hazelnut-latte.jpg",
    isBestSeller: false
  },
  {
    id: 4,
    name: "Vanilla Latte",
    category: "Milk Based",
    description: "Kopi susu creamy dengan vanilla.",
    price: "8K",
    image: "images/vanilla-latte.jpg",
    isBestSeller: false
  },
  {
    id: 5,
    name: "Royal Buttercream",
    category: "Milk Based",
    description: "Minuman creamy dengan buttercream lezat.",
    price: "8K",
    image: "images/royal-buttercream.jpg",
    isBestSeller: false
  },
  // CLASSIC COFFEE
  {
    id: 6,
    name: "Americano",
    category: "Classic Coffee",
    description: "Espresso klasik dengan air.",
    price: "10K",
    image: "images/americano.jpg",
    isBestSeller: false
  },
  {
    id: 7,
    name: "Espresso",
    category: "Classic Coffee",
    description: "Kopi pekat murni.",
    price: "10K",
    image: "images/espresso.jpg",
    isBestSeller: false
  },
  {
    id: 8,
    name: "Kopi Kobesa",
    category: "Classic Coffee",
    description: "Racikan kopi spesial kami.",
    price: "8K",
    image: "images/kopi-kobesa.jpg",
    isBestSeller: false
  },
  {
    id: 9,
    name: "Butterscotch Latte",
    category: "Classic Coffee",
    description: "Kopi susu dengan saus butterscotch.",
    price: "15K",
    image: "images/butterscotch-latte.jpg",
    isBestSeller: false
  },
  // ICED COFFEE
  {
    id: 10,
    name: "Salted Caramel",
    category: "Iced Coffee",
    description: "Kopi dingin dengan caramel dan sentuhan garam.",
    price: "12K",
    image: "images/salted-caramel.jpg",
    isBestSeller: false
  },
  {
    id: 11,
    name: "French Press",
    category: "Iced Coffee",
    description: "Kopi saring gaya prancis dingin.",
    price: "18K",
    image: "images/french-press.jpg",
    isBestSeller: false
  },
  {
    id: 12,
    name: "Cold Brew",
    category: "Iced Coffee",
    description: "Kopi seduh dingin menyegarkan.",
    price: "12K",
    image: "images/cold-brew.jpg",
    isBestSeller: false
  },
  // NON COFFEE
  {
    id: 13,
    name: "Matcha Latte",
    category: "Non-Coffee",
    description: "Paduan susu creamy dan matcha premium.",
    price: "12K",
    image: "images/matcha-latte.jpg",
    isBestSeller: false
  },
  {
    id: 14,
    name: "Iced Chocolate",
    category: "Non-Coffee",
    description: "Minuman coklat dingin spesial.",
    price: "10K",
    image: "images/iced-chocolate.jpg",
    isBestSeller: false
  },
  {
    id: 15,
    name: "Honey Lychee Milkshake",
    category: "Non-Coffee",
    description: "Milkshake leci segar dengan madu.",
    price: "8K",
    image: "images/honey-lychee.jpg",
    isBestSeller: true
  }
];

/* ==================== GLOBAL VARIABLES ==================== */
const WA_NUMBER = "6285791437530";

/* ==================== SHOW MENU ==================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Remove menu mobile
const navLink = document.querySelectorAll('.nav-link');
const linkAction = () => {
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* ==================== CHANGE BACKGROUND HEADER ==================== */
const scrollHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(window.scrollY >= 50) {
      document.querySelector('.header').classList.add('scroll-header');
  } else {
      document.querySelector('.header').classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/* ==================== SHOW SCROLL UP ==================== */ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class
  if(window.scrollY >= 350) {
      scrollUp.classList.add('show-scroll');
  } else {
      scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

/* ==================== SEARCH TOGGLE ==================== */
const searchToggle = document.getElementById('search-toggle');
const searchClose = document.getElementById('search-close');
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');

if (searchToggle) {
  searchToggle.addEventListener('click', () => {
    searchOverlay.classList.add('show-search');
    searchInput.focus();
  });
}

if (searchClose) {
  searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('show-search');
    searchInput.value = '';
    renderMenu(menuData); // reset menu
  });
}

// Handle Search Input
searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  
  // Also switch filter buttons visually to "All" when searching
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('.filter-btn[data-filter="All"]').classList.add('active');

  if(term === '') {
    renderMenu(menuData);
    return;
  }
  
  const filtered = menuData.filter(item => 
    item.name.toLowerCase().includes(term) || 
    item.category.toLowerCase().includes(term)
  );
  
  renderMenu(filtered);
  
  // Auto scroll to menu if searching
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});


/* ==================== RENDER MENU ==================== */
const menuContainer = document.getElementById('menu-container');
const noResult = document.getElementById('no-result');

const renderMenu = (data) => {
  menuContainer.innerHTML = '';
  
  if (data.length === 0) {
    noResult.classList.remove('hidden');
    return;
  }
  
  noResult.classList.add('hidden');
  
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('menu-card');
    
    // Badge logic
    const badgeHTML = item.isBestSeller ? `<span class="badge" style="position:absolute; top:10px; left:10px; z-index:1;">Best Seller</span>` : '';
    
    card.innerHTML = `
      <div style="position:relative;">
        ${badgeHTML}
        <img src="${item.image}" alt="${item.name}" class="menu-img">
      </div>
      <span class="menu-category">${item.category}</span>
      <h3 class="menu-title">${item.name}</h3>
      <p class="menu-price">Cup ${item.price}</p>
      <div class="menu-sizes">Tersedia juga: 250ml, 500ml, 1L</div>
      <button class="btn btn-outline btn-sm" onclick="orderNow('${item.name}', '${item.price}')">
        <i class="fa-brands fa-whatsapp"></i> Pesan
      </button>
    `;
    menuContainer.appendChild(card);
  });
};

/* ==================== FILTER MENU ==================== */
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filterValue = btn.getAttribute('data-filter');
    
    if (filterValue === 'All') {
      renderMenu(menuData);
    } else {
      const filtered = menuData.filter(item => item.category === filterValue);
      renderMenu(filtered);
    }
  });
});

// Function to call from categories section
window.filterMenu = (category) => {
  const btn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
  if (btn) {
    btn.click(); // Trigger click event on the corresponding filter button
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  }
};

/* ==================== WHATSAPP ORDER ==================== */
window.orderNow = (productName, price) => {
  const message = `Halo Kopi Madu, saya ingin memesan:\n\n*${productName}*\nHarga: ${price}\n\nApakah masih tersedia?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

/* ==================== NEWSLETTER ==================== */
const newsletterForm = document.getElementById('newsletter-form');
const notification = document.getElementById('newsletter-notification');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    // Show notification
    notification.classList.remove('hidden');
    newsletterForm.querySelector('input').value = '';
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 3000);
  });
}

/* ==================== INITIALIZE ==================== */
document.addEventListener('DOMContentLoaded', () => {
  renderMenu(menuData);
});
