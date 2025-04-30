const menu = [
  { name: "Classic", rating: 4 },
  { name: "Cheese", rating: 4.5 },
  { name: "Garlic Parmesan", rating: 5 },
  { name: "Lemon Glazed", rating: 4.5 },
  { name: "Salted Egg", rating: 4 },
  { name: "Spice Maple", rating: 4 },
  { name: "Sweet and Sour", rating: 4 },
  { name: "Gravy", rating: 3.5 },
  { name: "Mango Habanero", rating: 4.5 },
  { name: "Spicy Salted Egg", rating: 4, spice: 1 },
  { name: "Spicy Korean", rating: 4.5, spice: 2 },
  { name: "Sriracha", rating: 3.5, spice: 1 },
  { name: "Spicy Buffalo", rating: 4.5, spice: 2 },
  { name: "Sweet Chili", rating: 4, spice: 2 },
  { name: "Hickory Barbeque", rating: 4 },
  { name: "Soy Garlic", rating: 4 }
];

const menuList = document.getElementById("menuList");

function renderMenu(items) {
  menuList.innerHTML = "";
  items.forEach(item => {
    const fullStars = "★".repeat(Math.floor(item.rating));
    const halfStar = item.rating % 1 >= 0.5 ? "½" : "";
    const chili = item.spice ? `<span class="spice-icons">${"🌶️".repeat(item.spice)}</span>` : "";

    const html = `
      <div class="menu-item">
        <h3>${item.name} ${chili}</h3>
        <div class="star-icons">${fullStars}${halfStar}</div>
      </div>
    `;
    menuList.innerHTML += html;
  });
}

document.getElementById("searchBar").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = menu.filter(item => item.name.toLowerCase().includes(value));
  renderMenu(filtered);
});

renderMenu(menu);
