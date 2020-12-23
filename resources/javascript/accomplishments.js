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
    if (programmingCounter === 5) {
        document.querySelector(".programming h4").innerHTML = "CSS"
        programmingDescription.innerHTML = "Cascading Style Sheets used to style web pages"
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






