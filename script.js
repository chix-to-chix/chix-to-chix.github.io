export const flavors = [
  { name: "Classic", category: "Unli Wings", description: "Original fried chicken flavor", rating: 4, image: "classic.png" },
  { name: "Cheese", category: "Unli Wings", description: "Creamy cheese flavor", rating: 5, image: "cheese.png" },
  { name: "Garlic Parmesan", category: "Unli Wings", description: "Savory garlic with parmesan", rating: 5, image: "garlicparmesan.png" },
  { name: "Lemon Glazed", category: "Unli Wings", description: "Tangy lemon glaze", rating: 4.5, image: "lemonglazed.png" },
  { name: "Salted Egg", category: "Unli Wings", description: "Rich salted egg flavor", rating: 5, image: "saltedegg.png" },
  { name: "Spice Maple", category: "Unli Wings", description: "Sweet and spicy maple", rating: 4, image: "spicemaple.png" },
  { name: "Sweet and Sour", category: "Unli Wings", description: "Classic sweet & sour", rating: 4, image: "sweetandsour.png" },
  { name: "Gravy", category: "Unli Wings", description: "Creamy gravy flavor", rating: 4.5, image: "gravy.png" },
  { name: "Mango Habanero", category: "Unli Wings", description: "Sweet mango with habanero heat", rating: 4, image: "mangohabanero.png" },
  { name: "Spicy Salted Egg", category: "Unli Wings", description: "Salted egg with a spicy kick", rating: 5, image: "spicysaltedegg.png" },
  { name: "Spicy Korean", category: "Unli Wings", description: "Korean-style spicy glaze", rating: 4, image: "spicykorean.png" },
  { name: "Sriracha", category: "Unli Wings", description: "Classic sriracha flavor", rating: 4, image: "sriracha.png" },
  { name: "Spicy Buffalo", category: "Unli Wings", description: "Classic buffalo wings", rating: 4.5, image: "buffalo.png" },
  { name: "Sweet Chili", category: "Unli Wings", description: "Thai-style sweet chili", rating: 4, image: "sweetchili.png" },
  { name: "Hickory Barbeque", category: "Unli Wings", description: "Smoky barbeque flavor", rating: 4.5, image: "hickorybbq.png" },
  { name: "Soy Garlic", category: "Unli Wings", description: "Savory soy garlic", rating: 5, image: "soygarlic.png" },
  { name: "Honey Butter", category: "Unli Wings", description: "Sweet honey butter", rating: 5, image: "honeybutter.png" },
  { name: "Teriyaki", category: "Unli Wings", description: "Japanese-style teriyaki glaze", rating: 4, image: "teriyaki.png" }
];

export const menuItems = [
  { name: "Sulit Meal", category: "Solo & Bilao", price: "₱119.00", description: "3pcs + Java Rice (1 flavor)", image: "sulit.png" },
  { name: "Busog Meal", category: "Solo & Bilao", price: "₱199.00", description: "6pcs + Java Rice (2 flavors)", image: "busog.png" },
  { name: "Chix Sakto", category: "Solo & Bilao", price: "₱169.00", description: "5pcs wings (1 flavor)", image: "sakto.png" },
  { name: "Small Bilao", category: "Solo & Bilao", price: "₱429.00", description: "12-15pcs (3 flavors)", image: "smallbilao.png" },
  { name: "Medium Bilao", category: "Solo & Bilao", price: "₱529.00", description: "18-22pcs (5 flavors)", image: "mediumbilao.png" },
  { name: "Large Bilao", category: "Solo & Bilao", price: "₱969.00", description: "35-40pcs (8 flavors)", image: "largebilao.png" },
  { name: "Big Pitcher Iced Tea", category: "Beverages", price: "₱89.00", description: "Refreshing iced tea", image: "bigpitcher.png" },
  { name: "Small Pitcher Iced Tea", category: "Beverages", price: "₱59.00", description: "Refreshing iced tea", image: "smallpitcher.png" },
  { name: "Softdrinks Mismo", category: "Beverages", price: "₱30.00", description: "Coke mismo 300ml", image: "mismo.png" },
  { name: "Softdrinks 1.5L", category: "Beverages", price: "₱99.00", description: "Coke 1.5 liter", image: "coke.png" },
  { name: "Bottled Water", category: "Beverages", price: "₱20.00", description: "Purified water", image: "water.png" },
  { name: "Extra Java", category: "Extras", price: "₱25.00", description: "Java rice", image: "java.png" },
  { name: "Cheesy Overload Fries", category: "Extras", price: "₱65.00", description: "Overload cheese fries", image: "fries.png" },
  { name: "Extra Sauce", category: "Extras", price: "₱25.00", description: "Special chicken sauce", image: "sauces.png" },
  { name: "Garlic Mayo Dip", category: "Extras", price: "₱30.00", description: "Garlic Mayo dipping sauce", image: "mayo.png" }
];

export const unliPrice = 299.00;

export function initializeCustomerMenu() {
  const allItems = [...menuItems];
  const menuList = document.getElementById("menuList");
  const searchBar = document.getElementById("searchBar");
  const categoryButtons = document.querySelectorAll(".category-tabs button");
  const priceHeader = document.querySelector(".unli-price-header");

  // Track current search term and category
  let currentSearchTerm = "";
  let currentCategory = "all";

  function renderMenu(items, category = "all") {
    menuList.innerHTML = "";
    
    if (category === "Unli Wings") {
      priceHeader.style.display = "block";
      priceHeader.textContent = `Unlimited Wings - ₱${unliPrice.toFixed(2)}`;
      
      // Filter flavors based on search term
      const filteredFlavors = currentSearchTerm 
        ? flavors.filter(flavor => 
            flavor.name.toLowerCase().includes(currentSearchTerm) || 
            flavor.description.toLowerCase().includes(currentSearchTerm)
          )
        : flavors;
      
      filteredFlavors.forEach(flavor => {
        const card = createCard(flavor);
        menuList.appendChild(card);
      });
      return;
    } else {
      priceHeader.style.display = "none";
    }

    if (category === "all") {
      // Show the Unli Wings summary card first (if not searching or matches search)
      if (!currentSearchTerm || 
          "Unli Wings".toLowerCase().includes(currentSearchTerm) || 
          "All-you-can-eat chicken wings".toLowerCase().includes(currentSearchTerm)) {
        const unliCard = document.createElement("div");
        unliCard.className = "menu-card";
        unliCard.innerHTML = `
          <img src="img/unli.png" alt="Unli Wings" />
          <div class="content">
            <h3>Unli Wings</h3>
            <p>All-you-can-eat chicken wings</p>
            <div class="details">
              <span class="price">₱${unliPrice.toFixed(2)}</span>
            </div>
          </div>
        `;
        menuList.appendChild(unliCard);
      }
      
      // Then show all other menu items grouped by category
      const categories = {};
      const filteredItems = currentSearchTerm 
        ? allItems.filter(item => 
            item.name.toLowerCase().includes(currentSearchTerm) || 
            item.description.toLowerCase().includes(currentSearchTerm)
          )
        : allItems;
      
      filteredItems.forEach(item => {
        if (!categories[item.category]) {
          categories[item.category] = [];
        }
        categories[item.category].push(item);
      });
      
      // Add a section for each category that has matching items
      Object.entries(categories).forEach(([categoryName, categoryItems]) => {
        if (categoryItems.length > 0) {
          // Add category header
          const categoryHeader = document.createElement("h2");
          categoryHeader.className = "category-header";
          categoryHeader.textContent = `${categoryName}`;
          menuList.appendChild(categoryHeader);
          
          // Add items for this category
          categoryItems.forEach(item => {
            const card = createCard(item);
            menuList.appendChild(card);
          });
        }
      });
    } else {
      // Show only items from the selected category
      const filteredItems = allItems.filter(item => 
        item.category === category && 
        (!currentSearchTerm || 
         item.name.toLowerCase().includes(currentSearchTerm) || 
         item.description.toLowerCase().includes(currentSearchTerm))
      );
      filteredItems.forEach(item => {
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
      <img src="img/${item.image || 'sample.jpg'}" alt="${item.name}" />
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

  // Initialize with all items
  renderMenu(allItems);

  // Search event listener
  searchBar.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value.toLowerCase();
    renderMenu(allItems, currentCategory);
  });

  // Category button event listeners
  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      categoryButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      
      currentCategory = button.dataset.category;
      renderMenu(allItems, currentCategory);
    });
  });
}
