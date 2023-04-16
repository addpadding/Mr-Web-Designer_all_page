
// (header_02(add("active")))
window.onscroll = () => {

    search_form.classList.remove("active")

    if (window.scrollY > 80) {
        document.querySelector("header .header_02").classList.add("active")
    } else {
        document.querySelector("header .header_02").classList.remove("active")
    }

}

// (search_form(toggle("active")))
let search_form = document.querySelector(".search_form")

document.querySelector("#search_btn").onclick = () => {
    search_form.classList.toggle("active")
}

// (sigin_in(toggle("active")))
let sigin_in = document.querySelector(".sigin_in")

document.querySelector("#login_btn").onclick = () => {
    sigin_in.classList.toggle("active")

    search_form.classList.remove("active")
}

// remove
document.querySelector("#close_btn").onclick = () => {
    sigin_in.classList.remove("active")
}

// ========== home ================
var swiper = new Swiper(".box_slider", {
    loop: true,
    centeredSlides: true,

    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});

// ========== featured ================
var swiper = new Swiper(".featured_slider", {
    spaceBetween: 10,

    loop: true,
    centeredSlides: true,

    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },

});

// ========== arrivals ================
var swiper = new Swiper(".arrivals_slider", {
    spaceBetween: 10,

    loop: true,
    centeredSlides: true,

    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});

// ========== reviews ================
var swiper = new Swiper(".reviews_slider", {
    spaceBetween: 10,

    grabCursor: true,

    loop: true,
    centeredSlides: true,

    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});

// ========== blogs ================
var swiper = new Swiper(".blogs_slider", {
    spaceBetween: 10,

    grabCursor: true,

    loop: true,
    centeredSlides: true,

    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});
