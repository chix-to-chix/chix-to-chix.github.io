const flavors = [
  { 
    name: "Classic", 
    category: "Unli Wings",
    description: "Original fried chicken flavor",
    rating: 4
  },
  { 
    name: "Cheese", 
    category: "Unli Wings",
    description: "Creamy cheese flavor",
    rating: 4.5 
  },
  { 
    name: "Garlic Parmesan", 
    category: "Unli Wings",
    description: "Savory garlic with parmesan",
    rating: 5 
  },
  { 
    name: "Lemon Glazed", 
    category: "Unli Wings",
    description: "Tangy lemon glaze",
    rating: 4.5 
  },
  { 
    name: "Salted Egg", 
    category: "Unli Wings",
    description: "Rich salted egg flavor",
    rating: 4 
  },
  { 
    name: "Spice Maple", 
    category: "Unli Wings",
    description: "Sweet and spicy maple",
    rating: 4 
  },
  { 
    name: "Sweet and Sour", 
    category: "Unli Wings",
    description: "Classic sweet & sour",
    rating: 4 
  },
  { 
    name: "Gravy", 
    category: "Unli Wings",
    description: "Creamy gravy flavor",
    rating: 3.5 
  },
  { 
    name: "Mango Habanero", 
    category: "Unli Wings",
    description: "Sweet mango with habanero heat",
    rating: 4.5 
  },
  { 
    name: "Spicy Salted Egg", 
    category: "Unli Wings",
    description: "Salted egg with a spicy kick",
    rating: 4,
    spice: 1 
  },
  { 
    name: "Spicy Korean", 
    category: "Unli Wings",
    description: "Korean-style spicy glaze",
    rating: 4.5,
    spice: 2 
  },
  { 
    name: "Sriracha", 
    category: "Unli Wings",
    description: "Classic sriracha flavor",
    rating: 3.5,
    spice: 1 
  },
  { 
    name: "Spicy Buffalo", 
    category: "Unli Wings",
    description: "Classic buffalo wings",
    rating: 4.5,
    spice: 2 
  },
  { 
    name: "Sweet Chili", 
    category: "Unli Wings",
    description: "Thai-style sweet chili",
    rating: 4,
    spice: 2 
  },
  { 
    name: "Hickory Barbeque", 
    category: "Unli Wings",
    description: "Smoky barbeque flavor",
    rating: 4 
  },
  { 
    name: "Soy Garlic", 
    category: "Unli Wings",
    description: "Savory soy garlic",
    rating: 4 
  }
];

const menuItems = [
  { 
    name: "Sulit Meal", 
    category: "Solo & Bilao",
    price: "₱119.00",
    description: "3pcs + Java Rice"
  },
  { 
    name: "Busog Meal", 
    category: "Solo & Bilao",
    price: "₱199.00",
    description: "6pcs + Java Rice"
  },
  { 
    name: "Small Bilao", 
    category: "Solo & Bilao",
    price: "₱449.00",
    description: "12-15pcs"
  },
  { 
    name: "Medium Bilao", 
    category: "Solo & Bilao",
    price: "₱549.00",
    description: "18-22pcs"
  },
  { 
    name: "Large Bilao", 
    category: "Solo & Bilao",
    price: "₱999.00",
    description: "35-40pcs"
  },
  { 
    name: "Big Pitcher Iced Tea", 
    category: "Beverages",
    price: "₱99.00",
    description: "Refreshing iced tea"
  },
  { 
    name: "Small Pitcher Iced Tea", 
    category: "Beverages",
    price: "₱69.00",
    description: "Refreshing iced tea"
  },
  { 
    name: "Softdrinks Mismo", 
    category: "Beverages",
    price: "₱30.00",
    description: "Your choice of soda"
  },
  { 
    name: "Bottled Water", 
    category: "Beverages",
    price: "₱15.00",
    description: "Purified water"
  },
  { 
    name: "Extra Rice", 
    category: "Extras",
    price: "₱20.00",
    description: "Steamed rice"
  },
  { 
    name: "Extra Java", 
    category: "Extras",
    price: "₱30.00",
    description: "Java rice"
  },
  { 
    name: "Buttered Corn", 
    category: "Extras",
    price: "₱25.00",
    description: "Sweet buttered corn"
  },
  { 
    name: "Cheese Fries", 
    category: "Extras",
    price: "₱59.00",
    description: "Crispy fries with cheese"
  },
  { 
    name: "Extra Sauce", 
    category: "Extras",
    price: "₱25.00",
    description: "Special chicken sauce"
  }
];

const allItems = [...menuItems, ...flavors];
const menuList = document.getElementById("menuList");
const searchBar = document.getElementById("searchBar");
const categoryButtons = document.querySelectorAll(".category-tabs button");

function renderMenu(items) {
  menuList.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    
    const priceOrRating = item.category === "Unli Wings" 
      ? `<div class="rating">${"★".repeat(Math.floor(item.rating))}${item.rating % 1 >= 0.5 ? "½" : ""}</div>`
      : `<span class="price">${item.price}</span>`;
    
    card.innerHTML = `
      <img src="img/sample.jpg" alt="${item.name}" />
      <div class="content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="details">
          ${priceOrRating}
        </div>
      </div>
    `;
    
    menuList.appendChild(card);
  });
}

// Initial render
renderMenu(allItems);

// Search functionality
searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = allItems.filter(item => 
    item.name.toLowerCase().includes(value) || 
    item.description.toLowerCase().includes(value)
  );
  renderMenu(filtered);
});

// Category filter
categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    
    const category = button.textContent;
    if (category === "All") {
      renderMenu(allItems);
    } else {
      const filtered = allItems.filter(item => item.category === category);
      renderMenu(filtered);
    }
  });
});
