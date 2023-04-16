let menu_hamburger = document.querySelector("#menu_hamburger")
let navbar = document.querySelector(".navbar")

// برجر toggle
menu_hamburger.onclick = () => {
    menu_hamburger.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}

// (login_btn(onclick = (opacity)("login_form_container")))
document.querySelector("#login_btn").onclick = () => {
    document.querySelector(".login_form_container").classList.toggle("active")
}

// (span(fa-times) => (remove("active")))
document.querySelector("#close_login_form").onclick = () => {
    document.querySelector(".login_form_container").classList.remove("active")
}

// (container(toggle("active"))) == شادو
window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector(".header .container").classList.add("active")
    } else {
        document.querySelector(".header .container").classList.remove("active")
    }

    menu_hamburger.classList.remove("fa-times")
    navbar.classList.remove("active")
}


// (home(onmousemove => (move)))
document.querySelector(".home").onmousemove = (e) => {
    document.querySelectorAll(".home_parallax").forEach(elm => {
        let speed = elm.getAttribute("data-speed")
        let x = (window.innerWidth - e.pageX * speed) / 90
        let y = (window.innerWidth - e.pageY * speed) / 90

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`
    });
}

// (home(onmousemove => (leave)))
document.querySelector(".home").onmouseleave = () => {
    document.querySelectorAll(".home_parallax").forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`
    });
}

// vehicles
var swiper = new Swiper(".vehicles .container_slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
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
        1024: {
            slidesPerView: 3,
        },
    },
});

// featured
var swiper = new Swiper(".featured .container_slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
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
        1024: {
            slidesPerView: 3,
        },
    },
});

//reviews
var swiper = new Swiper(".reviews .container_slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
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
        1024: {
            slidesPerView: 3,
        },
    },
});
