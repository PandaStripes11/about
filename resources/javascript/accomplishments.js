const body = document.querySelector("body")
const hamburger = document.querySelector(".hamburger")
const header = document.querySelector("header")

const bg = document.getElementById("bg")
const mountain = document.getElementById("mountain")
const moon = document.getElementById("moon")

const quote = document.querySelector(".title h1")
const author = document.querySelector(".title .author")
const description = document.querySelector(".title p")

hamburger.addEventListener("click", () => {
    body.classList.toggle("active")
})

window.addEventListener("scroll", (event) => {
    if (window.scrollY >  0) {
        header.style.backgroundColor = "transparent"
        header.style.boxShadow = "none"
    } else {
        header.style.backgroundColor = "#16213e"
        header.style.boxShadow = "0px 5px 10px 3px rgba(30, 30, 30, 0.5)"
    }

    const value = window.scrollY
    
    moon.style.top = `${value * 0.8}px`
    moon.style.left = `${value * 0.5}px`

    quote.style.top = `${value * 0.5}px`
    author.style.left = `${value * 0.4}px`
    description.style.top = `${100 + (value * 0.2)}px`
})