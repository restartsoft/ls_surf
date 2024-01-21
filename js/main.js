const hamburgerBtn = document.querySelector("#hamburgerBtn");
const body = document.querySelector("body");
const fullscreenMenu = document.querySelector(".fullscreen-menu");
const fullscreenMenuClose = document.querySelector(".fullscreen-menu__close");

hamburgerBtn.addEventListener("click", e => {
    e.preventDefault();
    
    fullscreenMenu.classList.add("fullscreen-menu-active");
    body.classList.add("body-noscroll");
});

fullscreenMenuClose.addEventListener("click", e => {
    e.preventDefault();

    fullscreenMenu.classList.remove("fullscreen-menu-active");
    body.classList.remove("body-noscroll");
});