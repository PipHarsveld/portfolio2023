const openMenuBtn  = document.querySelector("header>div>button");
const closeMenuBtn  = document.querySelector("header>nav>button");
const nav = document.querySelector("header>nav");

openMenuBtn.addEventListener("click", function(){  
    nav.classList.add("openMenu");
});

closeMenuBtn.addEventListener("click", function(){  
    nav.classList.remove("openMenu");
    nav.classList.add("closeMenu");
});