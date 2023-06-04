const openMenuBtn = document.querySelector("header>div>button");
const closeMenuBtn = document.querySelector("header>nav>button");
const nav = document.querySelector("header>nav");
const navItems = document.querySelectorAll("header>nav>ul>li>a");

openMenuBtn.addEventListener("click", function() {
  nav.classList.add("openMenu");
});

closeMenuBtn.addEventListener("click", function() {
  closeMenu();
});

// Attach the event listener to each navItem
navItems.forEach(function(navItem) {
  navItem.addEventListener("click", function() {
    closeMenu();
  });
});

function closeMenu() {
  nav.classList.remove("openMenu");
  nav.classList.add("closeMenu");
}