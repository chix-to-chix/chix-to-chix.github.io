document.getElementById('search').addEventListener('input', function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const items = document.querySelectorAll('li, .flavors-grid span');

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(searchTerm)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});
