const flavors = [
  { 
    name: "Classic", 
    category: "Unli Wings",
    description: "Original fried chicken flavor",
    rating: 4,
    image: "sample.jpg"
  },
  { 
    name: "Cheese", 
    category: "Unli Wings",
    description: "Creamy cheese flavor",
    rating: 4.5,
    image: "sample.jpg"
  },
  { 
    name: "Garlic Parmesan", 
    category: "Unli Wings",
    description: "Savory garlic with parmesan",
    rating: 5,
    image: "sample.jpg"
  },
  { 
    name: "Lemon Glazed", 
    category: "Unli Wings",
    description: "Tangy lemon glaze",
    rating: 4.5,
    image: "sample.jpg"
  },
  { 
    name: "Salted Egg", 
    category: "Unli Wings",
    description: "Rich salted egg flavor",
    rating: 4,
    image: "sample.jpg"
  },
  { 
    name: "Spice Maple", 
    category: "Unli Wings",
    description: "Sweet and spicy maple",
    rating: 4,
    image: "sample.jpg"
  },
  { 
    name: "Sweet and Sour", 
    category: "Unli Wings",
    description: "Classic sweet & sour",
    rating: 4,
    image: "sample.jpg"
  },
  { 
    name: "Gravy", 
    category: "Unli Wings",
    description: "Creamy gravy flavor",
    rating: 3.5,
    image: "sample.jpg"
  },
  { 
    name: "Mango Habanero", 
    category: "Unli Wings",
    description: "Sweet mango with habanero heat",
    rating: 4.5,
    image: "sample.jpg"
  },
  { 
    name: "Spicy Salted Egg", 
    category: "Unli Wings",
    description: "Salted egg with a spicy kick",
    rating: 4,
    image: "sample.jpg"
  },
  { 
    name: "Spicy Korean", 
    category: "Unli Wings",
    description: "Korean-style spicy glaze",
    rating: 4.5,
    image: "sample.jpg"
  },
  { 
    name: "Sriracha", 
    category: "Unli Wings",
    description: "Classic sriracha flavor",
    rating: 3.5,
    image: "sample.jpg"
  },
  { 
    name: "Spicy Buffalo", 
    category: "Unli Wings",
    description: "Classic buffalo wings",
    rating: 4.5,
    image: "sample.jpg"
  },
  { 
    name: "Sweet Chili", 
    category: "Unli Wings",
    description: "Thai-style sweet chili",
    rating: 4,
    image: "sample.jpg"
  },
  { 
    name: "Hickory Barbeque", 
    category: "Unli Wings",
    description: "Smoky barbeque flavor",
    rating: 4,
    image: "sample.jpg"
  },
  { 
    name: "Soy Garlic", 
    category: "Unli Wings",
    description: "Savory soy garlic",
    rating: 4,
    image: "sample.jpg"
  },
  { 
    name: "Teriyaki", 
    category: "Unli Wings",
    description: "Japanese-style teriyaki glaze",
    rating: 4,
    image: "sample.jpg"
  }
];

const menuItems = [
  { 
    name: "Sulit Meal", 
    category: "Solo & Bilao",
    price: "₱119.00",
    description: "3pcs + Java Rice",
    image: "sample.jpg"
  },
  { 
    name: "Busog Meal", 
    category: "Solo & Bilao",
    price: "₱199.00",
    description: "6pcs + Java Rice",
    image: "sample.jpg"
  },
  { 
    name: "Small Bilao", 
    category: "Solo & Bilao",
    price: "₱449.00",
    description: "12-15pcs",
    image: "sample.jpg"
  },
  { 
    name: "Medium Bilao", 
    category: "Solo & Bilao",
    price: "₱549.00",
    description: "18-22pcs",
    image: "sample.jpg"
  },
  { 
    name: "Large Bilao", 
    category: "Solo & Bilao",
    price: "₱999.00",
    description: "35-40pcs",
    image: "sample.jpg"
  },
  { 
    name: "Big Pitcher Iced Tea", 
    category: "Beverages",
    price: "₱99.00",
    description: "Refreshing iced tea",
    image: "sample.jpg"
  },
  { 
    name: "Small Pitcher Iced Tea", 
    category: "Beverages",
    price: "₱69.00",
    description: "Refreshing iced tea",
    image: "sample.jpg"
  },
  { 
    name: "Softdrinks Mismo", 
    category: "Beverages",
    price: "₱30.00",
    description: "Your choice of soda",
    image: "sample.jpg"
  },
  { 
    name: "Softdrinks 1.5L", 
    category: "Beverages",
    price: "₱99.00",
    description: "1.5 liter bottle",
    image: "sample.jpg"
  },
  { 
    name: "Bottled Water", 
    category: "Beverages",
    price: "₱15.00",
    description: "Purified water",
    image: "sample.jpg"
  },
  { 
    name: "Extra Rice", 
    category: "Extras",
    price: "₱20.00",
    description: "Steamed rice",
    image: "sample.jpg"
  },
  { 
    name: "Extra Java", 
    category: "Extras",
    price: "₱30.00",
    description: "Java rice",
    image: "sample.jpg"
  },
  { 
    name: "Buttered Corn", 
    category: "Extras",
    price: "₱25.00",
    description: "Sweet buttered corn",
    image: "sample.jpg"
  },
  { 
    name: "Cheese Fries", 
    category: "Extras",
    price: "₱59.00",
    description: "Crispy fries with cheese",
    image: "sample.jpg"
  },
  { 
    name: "Extra Sauce", 
    category: "Extras",
    price: "₱25.00",
    description: "Special chicken sauce",
    image: "sample.jpg"
  }
];

const allItems = [...menuItems];
const menuList = document.getElementById("menuList");
const searchBar = document.getElementById("searchBar");
const categoryButtons = document.querySelectorAll(".category-tabs button");
const unliPrice = "₱299.00";
const priceHeader = document.querySelector(".unli-price-header");

function renderMenu(items, category = "all") {
  menuList.innerHTML = "";
  
  if (category === "Unli Wings") {
    priceHeader.style.display = "block";
  } else {
    priceHeader.style.display = "none";
  }

  if (category === "all") {
    // Add Unli Wings card
    const unliCard = document.createElement("div");
    unliCard.className = "menu-card";
    unliCard.innerHTML = `
      <img src="img/sample.jpg" alt="Unli Wings" />
      <div class="content">
        <h3>Unli Wings</h3>
        <p>All-you-can-eat chicken wings</p>
        <div class="details">
          <span class="price">${unliPrice}</span>
        </div>
      </div>
    `;
    menuList.appendChild(unliCard);
    
    // Group items by category
    const categories = {};
    items.forEach(item => {
      if (!categories[item.category]) {
        categories[item.category] = [];
      }
      categories[item.category].push(item);
    });
    
    // Render items by category
    Object.entries(categories).forEach(([cat, catItems]) => {
      catItems.forEach(item => {
        const card = createCard(item);
        menuList.appendChild(card);
      });
    });
  } 
  else if (category === "Unli Wings") {
    // Render all wing flavors
    items.forEach(item => {
      const card = createCard(item);
      menuList.appendChild(card);
    });
  }
  else {
    // Render items for specific category
    items.forEach(item => {
      const card = createCard(item);
      menuList.appendChild(card);
    });
  }
}

function createCard(item) {
  const card = document.createElement("div");
  card.className = "menu-card";
  
  const priceOrRating = item.rating 
    ? `<div class="rating">${"★".repeat(Math.floor(item.rating))}${item.rating % 1 >= 0.5 ? "½" : ""}</div>`
    : `<span class="price">${item.price}</span>`;
  
  card.innerHTML = `
    <img src="img/${item.image}" alt="${item.name}" />
    <div class="content">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="details">
        ${priceOrRating}
      </div>
    </div>
  `;
  
  return card;
}

// Initial render - show all menu items (excluding flavors)
renderMenu(allItems);

// Search functionality
searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const currentCategory = document.querySelector(".category-tabs button.active").dataset.category;
  
  if (currentCategory === "all") {
    const filtered = allItems.filter(item => 
      item.name.toLowerCase().includes(value) || 
      item.description.toLowerCase().includes(value)
    );
    renderMenu(filtered);
  } else if (currentCategory === "Unli Wings") {
    const filtered = flavors.filter(item => 
      item.name.toLowerCase().includes(value) || 
      item.description.toLowerCase().includes(value)
    );
    renderMenu(filtered, "Unli Wings");
  } else {
    const filtered = allItems.filter(item => 
      item.category === currentCategory && 
      (item.name.toLowerCase().includes(value) || 
       item.description.toLowerCase().includes(value))
    );
    renderMenu(filtered, currentCategory);
  }
});

// Category filter
categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    
    const category = button.dataset.category;
    if (category === "all") {
      renderMenu(allItems);
    } else if (category === "Unli Wings") {
      renderMenu(flavors, "Unli Wings");
    } else {
      const filtered = allItems.filter(item => item.category === category);
      renderMenu(filtered, category);
    }
  });
});
