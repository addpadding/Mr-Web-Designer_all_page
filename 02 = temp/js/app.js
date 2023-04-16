let menu_hamburger = document.querySelector("#menu_hamburger")
let navbar = document.querySelector(".navbar")

// برجر toggle
menu_hamburger.onclick = () => {
    menu_hamburger.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}

window.onscroll = () => {
    menu_hamburger.classList.remove("fa-times")
    navbar.classList.remove("active")
}

// Scroll Top
window.onscroll = () => {
    if (window.scrollY > 60) {
        document.querySelector("#scroll_top").classList.add("active")
    } else {
        document.querySelector("#scroll_top").classList.remove("active")
    }
}
