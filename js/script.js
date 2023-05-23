
let navList = document.getElementById('nav-list')
console.log(navList)

// Show menu links on burger click
document.getElementById('menu-btn').addEventListener('click', () => {
  navList.classList.add('active')
});

// Hide navbar on click function
document.getElementById('menu-close').addEventListener('click', () => {
  navList.classList.remove('active')
});