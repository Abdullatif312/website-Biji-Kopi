// Data produk biji kopi (Dilengkapi menjadi 30 produk)
const coffeeProducts = [
    {
        id: 1,
        name: "Kopi Aceh Gayo",
        origin: "Aceh",
        description: "Biji kopi dengan aroma khas dan rasa yang kompleks, sedikit asam dengan aftertaste yang panjang.",
        price: 125000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Kopi Toraja",
        origin: "Sulawesi",
        description: "Kopi dengan rasa earthy, full body, dan sedikit rasa rempah dengan aftertaste yang manis.",
        price: 135000,
        roast: "Dark",
        image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Kopi Kintamani",
        origin: "Bali",
        description: "Kopi dengan rasa citrus yang khas, acidity yang seimbang, dan aroma floral yang menyegarkan.",
        price: 115000,
        roast: "Light",
        image: "https://images.unsplash.com/photo-1510707577715-73764d573d99?fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Kopi Mandailing",
        origin: "Sumatera",
        description: "Kopi dengan body yang kuat, rasa earthy, dan sedikit rasa coklat dengan aroma yang khas.",
        price: 120000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Kopi Flores Bajawa",
        origin: "Flores",
        description: "Kopi dengan rasa yang kompleks, kombinasi antara fruity, spicy, dan chocolate dengan acidity yang seimbang.",
        price: 130000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "Kopi Java Preanger",
        origin: "Jawa",
        description: "Kopi klasik dengan body yang medium, rasa earthy, dan sedikit sweetness dengan aroma yang kuat.",
        price: 110000,
        roast: "Dark",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?fit=crop&w=500&q=60"
    },
    {
        id: 7,
        name: "Kopi Papua Wamena",
        origin: "Papua",
        description: "Kopi dengan rasa yang clean, acidity yang cerah, dan aroma floral dengan aftertaste yang panjang.",
        price: 140000,
        roast: "Light",
        image: "https://images.unsplash.com/photo-1510707577715-73764d573d99?fit=crop&w=500&q=60"
    },
    {
        id: 8,
        name: "Kopi Sidikalang",
        origin: "Sumatera",
        description: "Kopi dengan body yang full, rasa spicy, dan sedikit rasa coklat dengan aroma yang kompleks.",
        price: 125000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?fit=crop&w=500&q=60"
    },
    {
        id: 9,
        name: "Kopi Bali Kintamani",
        origin: "Bali",
        description: "Kopi dengan rasa citrus yang khas, acidity yang seimbang, dan aroma floral yang menyegarkan.",
        price: 115000,
        roast: "Light",
        image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?fit=crop&w=500&q=60"
    },
    {
        id: 10,
        name: "Kopi Lampung Robusta",
        origin: "Sumatera",
        description: "Kopi dengan body yang kuat, rasa earthy, dan sedikit rasa coklat dengan aroma yang khas.",
        price: 120000,
        roast: "Dark",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?fit=crop&w=500&q=60"
    },
    {
        id: 11,
        name: "Kopi Temanggung",
        origin: "Jawa",
        description: "Kopi dengan rasa yang kompleks, kombinasi antara fruity, spicy, dan chocolate dengan acidity yang seimbang.",
        price: 110000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?fit=crop&w=500&q=60"
    },
    {
        id: 12,
        name: "Kopi Malang Arjuno",
        origin: "Jawa",
        description: "Kopi klasik dengan body yang medium, rasa earthy, dan sedikit sweetness dengan aroma yang kuat.",
        price: 105000,
        roast: "Dark",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?fit=crop&w=500&q=60"
    },
    {
        id: 13,
        name: "Kopi Takengon Arabika",
        origin: "Aceh",
        description: "Varietas Gayo yang populer, menawarkan keseimbangan sempurna antara rasa manis, body yang lembut, dan aroma herbal.",
        price: 135000,
        roast: "Light",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?fit=crop&w=500&q=60"
    },
    {
        id: 14,
        name: "Kopi Luwak",
        origin: "Jawa",
        description: "Kopi paling langka, cita rasa yang sangat halus, low acidity, dengan notes karamel dan cokelat yang unik.",
        price: 350000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1541097652749-012b1cc1694f?fit=crop&w=500&q=60"
    },
    // --- Produk Baru Ditambahkan di bawah (ID 15 - 30) ---
    {
        id: 15,
        name: "Kopi Sipirok",
        origin: "Sumatera",
        description: "Rasa buah-buahan tropis dengan aftertaste sedikit pedas dan body medium.",
        price: 118000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?fit=crop&w=500&q=60"
    },
    {
        id: 16,
        name: "Kopi Tambora",
        origin: "Sumbawa",
        description: "Aroma cokelat gelap yang kuat, body tebal, dan low acidity.",
        price: 128000,
        roast: "Dark",
        image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?fit=crop&w=500&q=60"
    },
    {
        id: 17,
        name: "Kopi Kerinci",
        origin: "Sumatera",
        description: "Cita rasa floral dan gula merah, acidity tinggi yang bersih.",
        price: 132000,
        roast: "Light",
        image: "https://images.unsplash.com/photo-1510707577715-73764d573d99?fit=crop&w=500&q=60"
    },
    {
        id: 18,
        name: "Kopi Balak",
        origin: "Bengkulu",
        description: "Kopi Robusta dengan body sangat kuat dan rasa kacang yang menonjol.",
        price: 108000,
        roast: "Dark",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?fit=crop&w=500&q=60"
    },
    {
        id: 19,
        name: "Kopi Wamena Arabika",
        origin: "Papua",
        description: "Keseimbangan rasa manis dan nutty yang lembut, aroma karamel.",
        price: 145000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?fit=crop&w=500&q=60"
    },
    {
        id: 20,
        name: "Kopi Malabar",
        origin: "Jawa",
        description: "Acidity cerah seperti apel hijau, body ringan, cocok untuk pour-over.",
        price: 117000,
        roast: "Light",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?fit=crop&w=500&q=60"
    },
    {
        id: 21,
        name: "Kopi Kolaka",
        origin: "Sulawesi",
        description: "Karakter rasa rempah-rempah yang hangat dan sentuhan cokelat.",
        price: 122000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1510707577715-73764d573d99?fit=crop&w=500&q=60"
    },
    {
        id: 22,
        name: "Kopi Manggarai",
        origin: "Flores",
        description: "Rasa kuat, earthy, dengan aftertaste sedikit smoky dan pahit.",
        price: 138000,
        roast: "Dark",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?fit=crop&w=500&q=60"
    },
    {
        id: 23,
        name: "Kopi Java Ijen",
        origin: "Jawa",
        description: "Rasa madu dan vanila, body penuh, dengan aroma kopi tradisional yang kuat.",
        price: 129000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?fit=crop&w=500&q=60"
    },
    {
        id: 24,
        name: "Kopi Pegunungan Jayawijaya",
        origin: "Papua",
        description: "Kopi spesial dengan rasa wine, sangat kompleks dan unik.",
        price: 155000,
        roast: "Light",
        image: "https://images.unsplash.com/photo-1510707577715-73764d573d99?fit=crop&w=500&q=60"
    },
    {
        id: 25,
        name: "Kopi Lombok",
        origin: "Lombok",
        description: "Body tebal dan rasa cokelat pahit yang kaya, sangat cocok untuk espresso.",
        price: 112000,
        roast: "Dark",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?fit=crop&w=500&q=60"
    },
    {
        id: 26,
        name: "Kopi Lintong",
        origin: "Sumatera",
        description: "Rasa herbal yang khas, acidity rendah, dan body yang mantap.",
        price: 134000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?fit=crop&w=500&q=60"
    },
    {
        id: 27,
        name: "Kopi Yellow Caturra",
        origin: "Jawa",
        description: "Kopi single origin varietas langka dengan rasa manis dan aroma jeruk.",
        price: 142000,
        roast: "Light",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?fit=crop&w=500&q=60"
    },
    {
        id: 28,
        name: "Kopi Spesial Blend 1",
        origin: "Campuran",
        description: "Campuran Arabika premium, menghasilkan keseimbangan rasa dan body yang kompleks.",
        price: 150000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1510707577715-73764d573d99?fit=crop&w=500&q=60"
    },
    {
        id: 29,
        name: "Kopi Spesial Blend 2",
        origin: "Campuran",
        description: "Campuran Robusta dan Arabika, memberikan tendangan kafein yang kuat dengan rasa yang gelap dan tebal.",
        price: 140000,
        roast: "Dark",
        image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?fit=crop&w=500&q=60"
    },
    {
        id: 30,
        name: "Kopi Blue Batak",
        origin: "Sumatera",
        description: "Profil rasa unik dengan sentuhan licorice dan kayu manis, body penuh.",
        price: 136000,
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?fit=crop&w=500&q=60"
    }
];

// Inisialisasi Keranjang
let cart = [];

// Elemen DOM
const productsContainer = document.getElementById('products-container');
const cartCountElement = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const checkoutModal = document.getElementById('checkout-modal');
const successModal = document.getElementById('success-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPriceElement = document.getElementById('cart-total-price');
const checkoutBtn = document.getElementById('checkout-btn');

// Elemen Filter
const searchInput = document.getElementById('search-input');
const originFilter = document.getElementById('origin-filter');
const roastFilter = document.getElementById('roast-filter');
const sortBy = document.getElementById('sort-by');

// Helper Function
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
};

// --- Fungsi Produk ---

// Fungsi untuk membuat kartu produk
const createProductCard = (product) => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.setAttribute('data-id', product.id);

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-origin">Asal: ${product.origin} | Sangrai: ${product.roast}</p>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${formatRupiah(product.price)}</p>
            <div class="product-actions">
                <button class="add-to-cart" data-id="${product.id}">Tambah ke Keranjang</button>
            </div>
        </div>
    `;
    return card;
};

// Fungsi untuk memuat dan menampilkan produk
const renderProducts = (products) => {
    productsContainer.innerHTML = '';
    if (products.length === 0) {
        productsContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Tidak ada produk yang cocok dengan kriteria pencarian.</p>';
        return;
    }
    products.forEach(product => {
        productsContainer.appendChild(createProductCard(product));
    });
};

// Fungsi untuk memfilter dan mengurutkan produk
const filterAndSortProducts = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedOrigin = originFilter.value;
    const selectedRoast = roastFilter.value;
    const sortValue = sortBy.value;

    let filteredProducts = coffeeProducts.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        const originMatch = selectedOrigin === '' || product.origin === selectedOrigin;
        const roastMatch = selectedRoast === '' || product.roast === selectedRoast;
        return nameMatch && originMatch && roastMatch;
    });

    filteredProducts.sort((a, b) => {
        if (sortValue === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortValue === 'price-low') {
            return a.price - b.price;
        } else if (sortValue === 'price-high') {
            return b.price - a.price;
        }
        return 0;
    });

    renderProducts(filteredProducts);
};

// Event listener untuk filter dan sort
searchInput.addEventListener('input', filterAndSortProducts);
originFilter.addEventListener('change', filterAndSortProducts);
roastFilter.addEventListener('change', filterAndSortProducts);
sortBy.addEventListener('change', filterAndSortProducts);

// --- Fungsi Keranjang ---

// Fungsi untuk memperbarui tampilan jumlah item di keranjang (ikon)
const updateCartCount = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    checkoutBtn.disabled = totalItems === 0; // Disable checkout jika keranjang kosong
};

// Fungsi untuk menghitung total harga keranjang
const calculateCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Fungsi untuk membuat item di modal keranjang
const createCartItemElement = (item) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.setAttribute('data-id', item.id);
    
    itemDiv.innerHTML = `
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${formatRupiah(item.price)}</div>
        </div>
        <div class="cart-item-quantity">
            <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
        </div>
        <div class="cart-item-total">
            ${formatRupiah(item.price * item.quantity)}
        </div>
        <button class="remove-item" data-id="${item.id}">&times;</button>
    `;

    return itemDiv;
};

// Fungsi untuk merender item di modal keranjang
const renderCart = () => {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center;">Keranjang belanja Anda kosong.</p>';
    } else {
        cart.forEach(item => {
            cartItemsContainer.appendChild(createCartItemElement(item));
        });
    }
    
    cartTotalPriceElement.textContent = formatRupiah(calculateCartTotal());
    updateCartCount();
};

// Fungsi untuk menambahkan produk ke keranjang
const addToCart = (productId) => {
    const product = coffeeProducts.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else if (product) {
        cart.push({ ...product, quantity: 1 });
    }
    
    renderCart();
};

// Fungsi untuk mengubah kuantitas item di keranjang
const changeQuantity = (productId, change) => {
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1); // Hapus jika kuantitas menjadi 0 atau kurang
        }
        renderCart();
    }
};

// Fungsi untuk menghapus item dari keranjang
const removeItem = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
};

// Event Delegation untuk tombol Add to Cart, Quantity, dan Remove
productsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.dataset.id);
        addToCart(productId);
    }
});

cartItemsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('increase-quantity')) {
        const productId = parseInt(target.dataset.id);
        changeQuantity(productId, 1);
    } else if (target.classList.contains('decrease-quantity')) {
        const productId = parseInt(target.dataset.id);
        changeQuantity(productId, -1);
    } else if (target.classList.contains('remove-item')) {
        const productId = parseInt(target.dataset.id);
        removeItem(productId);
    }
});


// --- Fungsi Modal ---

// Buka/Tutup Cart Modal
document.getElementById('open-cart-btn').addEventListener('click', () => {
    cartModal.classList.add('active');
    renderCart(); // Render ulang keranjang setiap kali dibuka
});
document.getElementById('close-cart-btn').addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// Buka/Tutup Checkout Modal
checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        cartModal.classList.remove('active');
        checkoutModal.classList.add('active');
        updateCheckoutSummary(); // Panggil fungsi untuk mengisi ringkasan checkout
    }
});
document.getElementById('close-checkout-btn').addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

// Tutup Success Modal
document.getElementById('success-close').addEventListener('click', () => {
    successModal.classList.remove('active');
    // Reload halaman atau navigasi ke beranda
    window.location.reload(); 
});

// Tutup modal jika klik di luar konten
[cartModal, checkoutModal, successModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            if (modal === successModal) {
                // Bersihkan state jika modal sukses ditutup dengan klik luar
                window.location.reload(); 
            }
        }
    });
});


// --- Fungsi Checkout ---

const checkoutItemsContainer = document.getElementById('checkout-items');
const checkoutSubtotalElement = document.getElementById('checkout-subtotal');
const checkoutShippingCostElement = document.getElementById('checkout-shipping-cost');
const checkoutTotalPriceElement = document.getElementById('checkout-total-price');
const shippingSelect = document.getElementById('shipping');
const paymentOptions = document.getElementById('payment-options');
const selectedPaymentInput = document.getElementById('selected-payment');
const paymentError = document.getElementById('payment-error');

let shippingCost = 0;
let finalTotal = 0;

// Fungsi untuk memperbarui ringkasan checkout
const updateCheckoutSummary = () => {
    const subtotal = calculateCartTotal();
    const selectedOption = shippingSelect.options[shippingSelect.selectedIndex];
    shippingCost = selectedOption.dataset.cost ? parseInt(selectedOption.dataset.cost) : 0;
    finalTotal = subtotal + shippingCost;

    checkoutItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('checkout-summary-item');
        itemDiv.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>${formatRupiah(item.price * item.quantity)}</span>
        `;
        checkoutItemsContainer.appendChild(itemDiv);
    });

    checkoutSubtotalElement.textContent = formatRupiah(subtotal);
    checkoutShippingCostElement.textContent = formatRupiah(shippingCost);
    checkoutTotalPriceElement.textContent = formatRupiah(finalTotal);
};

// Event listener untuk perubahan metode pengiriman
shippingSelect.addEventListener('change', updateCheckoutSummary);

// Event listener untuk memilih metode pembayaran
paymentOptions.addEventListener('click', (e) => {
    const option = e.target.closest('.payment-option');
    if (option) {
        // Hapus kelas 'selected' dari semua opsi
        document.querySelectorAll('.payment-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Tambahkan kelas 'selected' ke opsi yang dipilih
        option.classList.add('selected');
        selectedPaymentInput.value = option.dataset.payment;
        paymentError.style.display = 'none'; // Sembunyikan pesan error
    }
});

// Event listener untuk form checkout
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();

    if (!document.getElementById('shipping').value) {
        alert("Mohon pilih metode pengiriman.");
        return;
    }

    if (!selectedPaymentInput.value) {
        paymentError.style.display = 'block';
        return;
    }

    // Simulasi Proses Pemesanan
    console.log("Pesanan dikirim:", {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        shipping: shippingSelect.value,
        paymentMethod: selectedPaymentInput.value,
        items: cart,
        subtotal: calculateCartTotal(),
        shippingCost: shippingCost,
        total: finalTotal
    });

    // Reset dan tampilkan modal sukses
    cart = [];
    updateCartCount();
    
    checkoutModal.classList.remove('active');
    successModal.classList.add('active');
    
    // Reset form checkout
    document.getElementById('checkout-form').reset();
    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
    selectedPaymentInput.value = '';
    paymentError.style.display = 'none';
});


// --- Inisialisasi Aplikasi ---

// Panggil fungsi inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    filterAndSortProducts(); // Tampilkan semua produk saat pertama kali
    updateCartCount(); // Pastikan cart count 0 saat pertama kali
});