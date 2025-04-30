const allItems = [
  // == Flavors ==
  { name:"Classic",      rating:4,   spice:0,   cat:"flavor", img:"https://picsum.photos/seed/1/200/120" },
  { name:"Cheese",       rating:4.5, spice:0,   cat:"flavor", img:"https://picsum.photos/seed/2/200/120" },
  { name:"Garlic Parmesan", rating:5, spice:0,   cat:"flavor", img:"https://picsum.photos/seed/3/200/120" },
  { name:"Lemon Glazed", rating:4.5, spice:0,   cat:"flavor", img:"https://picsum.photos/seed/4/200/120" },
  { name:"Salted Egg",   rating:4,   spice:0,   cat:"flavor", img:"https://picsum.photos/seed/5/200/120" },
  { name:"Spice Maple",  rating:4,   spice:0,   cat:"flavor", img:"https://picsum.photos/seed/6/200/120" },
  { name:"Sweet and Sour", rating:4, spice:0,   cat:"flavor", img:"https://picsum.photos/seed/7/200/120" },
  { name:"Gravy",        rating:3.5, spice:0,   cat:"flavor", img:"https://picsum.photos/seed/8/200/120" },
  { name:"Mango Habanero",rating:4.5, spice:0,   cat:"flavor", img:"https://picsum.photos/seed/9/200/120" },
  { name:"Spicy Salted Egg", rating:4, spice:1, cat:"flavor", img:"https://picsum.photos/seed/10/200/120" },
  { name:"Spicy Korean", rating:4.5, spice:2, cat:"flavor", img:"https://picsum.photos/seed/11/200/120" },
  { name:"Sriracha",     rating:3.5, spice:1, cat:"flavor", img:"https://picsum.photos/seed/12/200/120" },
  { name:"Spicy Buffalo",rating:4.5, spice:2, cat:"flavor", img:"https://picsum.photos/seed/13/200/120" },
  { name:"Sweet Chili",  rating:4,   spice:2, cat:"flavor", img:"https://picsum.photos/seed/14/200/120" },
  { name:"Hickory Barbeque",rating:4,spice:0,cat:"flavor", img:"https://picsum.photos/seed/15/200/120" },
  { name:"Soy Garlic",   rating:4,   spice:0,   cat:"flavor", img:"https://picsum.photos/seed/16/200/120" },

  // == Meals ==
  { name:"Sulit Meal (3pcs + Java Rice)", cat:"meal", price:"₱119" },
  { name:"Busog Meal (6pcs + Java Rice)", cat:"meal", price:"₱199" },
  { name:"Small Bilao (12–15pcs)", cat:"meal", price:"₱449" },
  { name:"Medium Bilao (18–22pcs)",cat:"meal", price:"₱549" },
  { name:"Large Bilao (35–40pcs)", cat:"meal", price:"₱999" },

  // == Extras ==
  { name:"Big Pitcher Iced Tea",       cat:"extra", price:"₱99" },
  { name:"Small Pitcher Iced Tea",     cat:"extra", price:"₱69" },
  { name:"Softdrinks Mismo",           cat:"extra", price:"₱30" },
  { name:"Softdrinks 1.5L",            cat:"extra", price:"₱99" },
  { name:"Bottled Water",              cat:"extra", price:"₱15" },
  { name:"Extra Rice",                 cat:"extra", price:"₱20" },
  { name:"Extra Java",                 cat:"extra", price:"₱30" },
  { name:"Buttered Corn",              cat:"extra", price:"₱25" },
  { name:"Cheese Fries",               cat:"extra", price:"₱59" },
  { name:"Extra Sauce",                cat:"extra", price:"₱25" },
];

const cardsContainer = document.getElementById('cardsContainer');
const mealList       = document.getElementById('mealList');
const extraList      = document.getElementById('extraList');
const searchBar      = document.getElementById('searchBar');
const tabs           = document.querySelectorAll('.tabs button');

function drawCards(items) {
  cardsContainer.innerHTML = '';
  items.forEach(({name,rating,spice,img}) => {
    const full = '★'.repeat(Math.floor(rating||0));
    const half = (rating%1? '½':'' );
    const ch   = spice? `<span class="spice-icons">${'🌶️'.repeat(spice)}</span>`:'';
    cardsContainer.innerHTML += `
      <div class="card">
        <img src="${img}" alt="">
        <div class="card-content">
          <h3>${name}${ch}</h3>
          <div class="star-icons">${full}${half}</div>
        </div>
      </div>
    `;
  });
}

function drawList(cat, container) {
  container.innerHTML = '';
  allItems.filter(i=>i.cat===cat)
          .forEach(i=>{
    container.innerHTML += `
      <li><span class="item-name">${i.name}</span>
          <span class="price">${i.price}</span>
      </li>`;
  });
}

// initial draw
drawCards(allItems.filter(i=>i.cat==='flavor'));
drawList('meal', mealList);
drawList('extra', extraList);

// search & tab logic
function refresh() {
  const term = searchBar.value.toLowerCase();
  const activeCat = document.querySelector('.tabs button.active').dataset.cat;
  let filtered = allItems.filter(i=> i.name.toLowerCase().includes(term));
  if(activeCat!=='all') filtered = filtered.filter(i=> i.cat===activeCat);
  // only flavors go to cards
  drawCards(filtered.filter(i=>i.cat==='flavor'));
  // meals & extras lists always full (or you could filter them too)
}

searchBar.addEventListener('input', refresh);

tabs.forEach(btn=>{
  btn.addEventListener('click',()=>{
    tabs.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    refresh();
  });
});
