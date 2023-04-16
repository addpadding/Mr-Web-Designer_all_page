let menu_hamburger = document.querySelector("header #menu_hamburger")
let navbar = document.querySelector("header .navbar")

// ((menu_hamburger برجر) => (onclick("navbar")))
menu_hamburger.onclick = () => {

    // (toggle close(x))
    menu_hamburger.classList.toggle("fa-times")

    // ((navbar) => (toggle("active")))
    navbar.classList.toggle("active")
}

window.onscroll = () => {
    menu_hamburger.classList.remove("fa-times")
    navbar.classList.remove("active")
}

var swiper = new Swiper(".home .home_slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".review .review_slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper(".blogs .slider_container", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});







