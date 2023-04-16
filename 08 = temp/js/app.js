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

// ==============
// ((slider_container) => (add("active")))
let slider_container = document.querySelectorAll(".slider_container")
let index = 0;

function next() {
    slider_container[index].classList.remove("active")
    index = (index + 1) % slider_container.length

    slider_container[index].classList.add("active")
}

function prev() {
    slider_container[index].classList.remove("active")
    index = (index - 1 + slider_container.length) % slider_container.length

    slider_container[index].classList.add("active")
}

// ==============
// ((featured_image_1) => (addEventListener("big_image_01")))
document.querySelectorAll(".featured_image_1").forEach(item_image => {
    item_image.addEventListener("click", () => {

        var src_00 = item_image.getAttribute("src")

        document.querySelector(".big_image_01").src = src_00
    })
});

document.querySelectorAll(".featured_image_2").forEach(item_image => {
    item_image.addEventListener("click", () => {

        var src_00 = item_image.getAttribute("src")

        document.querySelector(".big_image_02").src = src_00
    })
});

document.querySelectorAll(".featured_image_3").forEach(item_image => {
    item_image.addEventListener("click", () => {

        var src_00 = item_image.getAttribute("src")

        document.querySelector(".big_image_03").src = src_00
    })
});


