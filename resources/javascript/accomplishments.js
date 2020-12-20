const body = document.querySelector("body")
const hamburger = document.querySelector(".hamburger")
const header = document.querySelector("header")

const bg = document.getElementById("bg")
const mountain = document.getElementById("mountain")
const moon = document.getElementById("moon")

const quote = document.querySelector(".title h1")
const author = document.querySelector(".title .author")
const description = document.querySelector(".title p")

const carouselSlideOne = document.querySelector(".carousel-slide-one")
const carouselImagesOne = document.querySelectorAll(".carousel-slide-one img")

hamburger.addEventListener("click", () => {
    body.classList.toggle("active")
})

window.addEventListener("scroll", () => {

    const value = window.scrollY
    
    moon.style.top = `${value * 0.8}px`
    moon.style.left = `${value * 0.5}px`

    quote.style.top = `${value * 0.5}px`
    author.style.left = `${value * 0.4}px`
    description.style.top = `${100 + (value * 0.2)}px`
})

let counter = 1

setTimeout(() => {
    let size = carouselImagesOne[counter].clientWidth

    carouselSlideOne.style.transform = `translateX(${-size * counter}px)`
}, 50)
