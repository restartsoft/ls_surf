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

    const sliderBtn = $(".slider__link");
    const slider = $(".slider__list");
    const sliderItems = $(".slider__item");
    const maxIndex = sliderItems.length - 1;

    sliderBtn.on("click", function (e) {

        let sliderWidth = slider.width();
        let curSlide = sliderItems.filter("#currentSlide");
        let curIndex = sliderItems.index(curSlide);

        e.preventDefault();
        curSlide.removeAttr("id");

        if ($(this).is("#slider-leftBtn")) {
            if (curIndex > 0) {
                slider.css("right", `${sliderWidth * (curIndex - 1)}px`);
                $(sliderItems[curIndex - 1]).attr("id", "currentSlide");
            }
            else {
                slider.css("right", `${sliderWidth * (maxIndex)}px`);
                $(sliderItems[maxIndex]).attr("id", "currentSlide");
            }
        }
        else {
            if (curIndex < maxIndex) {
                slider.css("right", `${sliderWidth * (curIndex + 1)}px`);
                $(sliderItems[curIndex + 1]).attr("id", "currentSlide");
            }
            else {
                slider.css("right", "0px");
                $(sliderItems[0]).attr("id", "currentSlide");
            }
        }
    });

    $(window).on("resize", function () {

        let sliderWidth = slider.width();
        let curSlide = sliderItems.filter("#currentSlide");
        let curIndex = sliderItems.index(curSlide);

        slider.css("right", `${sliderWidth * curIndex}px`);
    });

});

//team accordion
$(document).ready(() => {
    const titleList = $(".human__title-text");
    const wrapperList = $(".human__wrapper");
    const descrList = $(".human__descr");

    titleList.on("click", e => {

        let curTitle = e.target;
        let curIndex = titleList.index(curTitle);

        if ($(curTitle).is("#curTitle")) {
            CloseWrap(curTitle, curIndex);
        }
        else {
            let filterTitle = titleList.filter("#curTitle");
            if (filterTitle.length != 0)
            {
                let filterIndex = titleList.index(filterTitle);
                CloseWrap(filterTitle, filterIndex);   
            }

            OpenWrap(curTitle, curIndex);
        }
    });

    function OpenWrap(curTitle, curIndex) {
        let curWrap = wrapperList[curIndex];
        let curDescr = descrList[curIndex];
        let curDescrHeight = $(curDescr).height();

        $(curTitle).next().toggleClass("rotate-icon");
        $(curTitle).attr("id", "curTitle");
        $(curWrap).css({
            "height": `${curDescrHeight}px`,
        })
    }

    function CloseWrap(curTitle, curIndex) {
        let curWrap = wrapperList[curIndex];
        
        $(curTitle).next().removeClass("rotate-icon");
        $(curTitle).removeAttr("id");
        $(curWrap).css({
            "height": "0px",
        })
    }


});