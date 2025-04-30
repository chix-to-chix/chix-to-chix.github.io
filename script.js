const menuItems = [
  { 
    name: "Sulit Meal", 
    category: "Main Course",
    price: "₱119.00",
    description: "3pcs + Java Rice"
  },
  { 
    name: "Busog Meal", 
    category: "Main Course",
    price: "₱199.00",
    description: "6pcs + Java Rice"
  },
  { 
    name: "Small Bilao", 
    category: "Main Course",
    price: "₱449.00",
    description: "12-15pcs"
  },
  { 
    name: "Medium Bilao", 
    category: "Main Course",
    price: "₱549.00",
    description: "18-22pcs"
  },
  { 
    name: "Large Bilao", 
    category: "Main Course",
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

const menuList = document.getElementById("menuList");
const searchBar = document.getElementById("searchBar");
const categoryButtons = document.querySelectorAll(".category-tabs button");

function renderMenu(items) {
  menuList.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    
    card.innerHTML = `
      <img src="img/sample.jpg" alt="${item.name}" />
      <div class="content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="details">
          <span>${item.time}</span>
          <span class="price">${item.price}</span>
        </div>
      </div>
    `;
    
    menuList.appendChild(card);
  });
}

// Initial render
renderMenu(menuItems);

// Search functionality
searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = menuItems.filter(item => 
    item.name.toLowerCase().includes(value) || 
    item.description.toLowerCase().includes(value)
  );
  renderMenu(filtered);
  document.querySelector(".results-count").textContent = `${filtered.length} items`;
});

// Category filter
categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    
    const category = button.textContent;
    if (category === "All") {
      renderMenu(menuItems);
      document.querySelector(".results-count").textContent = `${menuItems.length} items`;
    } else {
      const filtered = menuItems.filter(item => item.category === category);
      renderMenu(filtered);
      document.querySelector(".results-count").textContent = `${filtered.length} items`;
    }
  });
});
