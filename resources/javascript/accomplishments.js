/* Menu Items */
const body = document.querySelector("body")
const hamburger = document.querySelector(".hamburger")
const header = document.querySelector("header")

/* Banner Items */
const bg = document.getElementById("bg")
const mountain = document.getElementById("mountain")
const moon = document.getElementById("moon")

const quote = document.querySelector(".title h1")
const author = document.querySelector(".title .author")
const description = document.querySelector(".title p")

/* Card Items */
const card = document.querySelector(".card")
const cardTitle = document.querySelector(".card h2")
const cardDesc = document.querySelector(".card p")

/* Programming Carousel Items */

//Programming
const programmingCarousel = document.querySelector(".programming .carousel-slide")
const programmingImages = document.querySelectorAll(".programming .carousel-slide img")

const programmingTitle = document.querySelector(".programming h4")
const programmingDescription = document.querySelector(".programming p")

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

//Programming Carousel
let programmingCounter = 4;
let programmingWidth = 150;

const carouselend = new Event("carouselend", {bubbles: true, cancelable: false})

programmingCarousel.style.transition = "all 1ms linear"
programmingCarousel.style.transform = `translateX(${-programmingWidth * programmingCounter}px)`;
programmingCounter++;

programmingCarousel.addEventListener("transitionend", () => {
    if (programmingCounter === 6) {
        programmingTitle.innerHTML = "CSS"
        programmingDescription.innerHTML = "Cascading Style Sheets used to style web pages"
    } else if (programmingCounter === 7) {
        programmingTitle.innerHTML = "Javascript"
        programmingDescription.innerHTML = "Versatile language used for creating dynamic pages"
    } else if (programmingCounter === 8) {
        programmingTitle.innerHTML = "Python"
        programmingDescription.innerHTML = "User friendly language for algorithms and data"
    } else if (programmingCounter === 9) {
        programmingTitle.innerHTML = "Git"
        programmingDescription.innerHTML = "Version control system for collaboration and backups"
    } else if (programmingCounter === 10) {
        programmingTitle.innerHTML = "Github"
        programmingDescription.innerHTML = "Remote repository, open source, and collaboration system"
    } else if (programmingCounter === 11) {
        programmingTitle.innerHTML = "NodeJS"
        programmingDescription.innerHTML = "Javascript runtime for code out of the browser and the backend"
    } else if (programmingCounter === 12) {
        programmingTitle.innerHTML = "React"
        programmingDescription.innerHTML = "JS framework for design components"
    } else {
        programmingTitle.innerHTML = "HTML"
        programmingDescription.innerHTML = "Hypertext Markup Language used for structuring web pages"
    }

    if (programmingImages[programmingCounter].id === "last") {
        programmingCarousel.style.transition = "none"
        programmingCounter = 4
        programmingCarousel.style.transform = `translateX(${-programmingWidth * programmingCounter}px)`
        programmingTitle.innerHTML = "HTML"
        programmingDescription.innerHTML = "Hypertext Markup Language used for structuring web pages"
        setTimeout(function(){programmingCarousel.dispatchEvent(carouselend)}, 0)
    } else {
        programmingCarousel.style.transform = `translateX(${-programmingWidth * programmingCounter}px)`
    }
    programmingCounter++;
})

programmingCarousel.addEventListener("carouselend", () => {
    programmingCarousel.style.transition = "all 2s linear"
    programmingCarousel.style.transform =`translateX(-750px)`
    programmingCounter++;
})






