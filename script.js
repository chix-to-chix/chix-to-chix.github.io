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

const grid = document.getElementById('flavorGrid');
const search = document.getElementById('searchBar');

function renderFlavors(list) {
  grid.innerHTML = '';          
  list.forEach(item => {
    const full = '★'.repeat(Math.floor(item.rating));
    const half = item.rating % 1 ? '½' : '';
    const chili = item.spice ? `<span class="spice-icons">${'🌶️'.repeat(item.spice)}</span>` : '';
    grid.innerHTML += `
      <div class="flavor-card">
        <h3>${item.name}${chili}</h3>
        <div class="star-icons">${full}${half}</div>
      </div>
    `;
  });
}

search.addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  renderFlavors(menu.filter(f => f.name.toLowerCase().includes(term)));
});

renderFlavors(menu);
