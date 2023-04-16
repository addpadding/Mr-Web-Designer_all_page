
// (navbar(toggle("active")))
let navbar = document.querySelector(".navbar")

// (menu_hamburger برجر => (onclick("navbar")))
document.querySelector("#menu_hamburger").onclick = () => {
    navbar.classList.toggle("active")

    cart_item_container.classList.remove("active")
    search_form.classList.remove("active")
}



// (cart_item_container(toggle("active")))
let cart_item_container = document.querySelector(".cart_item_container")

// (cart_btn(onclick("cart_item_container")))
document.querySelector("#cart_btn").onclick = () => {
    cart_item_container.classList.toggle("active")

    navbar.classList.remove("active")
    search_form.classList.remove("active")

}

// (search_form(toggle("active")))
let search_form = document.querySelector(".search_form")

// (search_btn(onclick("search_form")))
document.querySelector("#search_btn").onclick = () => {
    search_form.classList.toggle("active")

    navbar.classList.remove("active")
    cart_item_container.classList.remove("active")
}

// remove
window.onscroll = () => {
    navbar.classList.remove("active")
    cart_item_container.classList.remove("active")
    search_form.classList.remove("active")
}