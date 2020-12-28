const body = document.querySelector("body")
const hamburger = document.querySelector(".hamburger")
const header = document.querySelector("header")

hamburger.addEventListener("click", () => {
    body.classList.toggle("active")
})

window.addEventListener("scroll", (event) => {
    if (window.scrollY <  40) {
        header.style.backgroundColor = "transparent"
        header.style.boxShadow = "none"
    } else {
        header.style.backgroundColor = "#16213e"
        header.style.boxShadow = "0px 5px 10px 3px rgba(30, 30, 30, 0.5)"
    }
})

window.addEventListener("load", () => {
    header.style.backgroundColor = "transparent"
    header.style.boxShadow = "none"
})