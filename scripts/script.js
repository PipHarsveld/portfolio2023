const openMenuBtn = document.querySelector(".menuBtn");
const closeMenuBtn = document.querySelector(".closeBtn");
const nav = document.querySelector(".navbar>nav>div");
const navItems = document.querySelectorAll(".navbar>nav>div>ul>li>a");

openMenuBtn.addEventListener("click", function () {
    openMenu();
});

closeMenuBtn.addEventListener("click", function () {
    closeMenu();
});

// Attach the event listener to each navItem
navItems.forEach(function (navItem) {
    navItem.addEventListener("click", function () {
        closeMenu();
    });
});


function openMenu() {
    nav.classList.remove("closeMenu");
    nav.classList.add("openMenu");
}

function closeMenu() {
    nav.classList.remove("openMenu");
    nav.classList.add("closeMenu");
}
