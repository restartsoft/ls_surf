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

//slider scroll

$(document).ready(() => {
    let sliderBtn = $(".slider__link");

    sliderBtn.on("click", function(e)
    {
        let slider = $(".slider__list");
        console.log(slider.width());

        e.preventDefault();

        if ($(this).is("#slider-leftBtn"))
        {
            slider.css("right", "0px");
            console.log("left");
        }
        else
        {
            console.log("right");
            slider.css("right", `${slider.width()}px`);
        }
    });
});