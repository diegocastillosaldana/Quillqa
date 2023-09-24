var swiper = new Swiper(".mybannerHome", {
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".swipercategorias", {
    spaceBetween: 25,
    slidesPerView: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".ListaCategorias .swiper-button-next",
        prevEl: ".ListaCategorias .swiper-button-prev",
    },
});


document.addEventListener("click", function (e) {
    if (e.target.closest("header .part2 ul li .btnBuscador")) {
        document.querySelector("section.buscador").classList.toggle("open");
        document.querySelector("body").classList.toggle("scrollHidden");
    } 
    if (e.target.closest(".itemAutor")) {
        document.querySelector("section.popupAutor").classList.add("open");
        document.querySelector("body").classList.add("scrollHidden");
    }else if (e.target.closest("section.popupAutor .close")) {
        document.querySelector("section.popupAutor").classList.toggle("open");
        document.querySelector("body").classList.toggle("scrollHidden");
        if (document.querySelector("section.buscador.open")) {
            document.querySelector("body").classList.toggle("scrollHidden");
        }
    }
})