const body = document.querySelector("body")
const hamburger = document.querySelector(".hamburger")
const header = document.querySelector("header")
const title = document.querySelector(".title h1")
const description = document.querySelector(".title p")
const animation = document.querySelector(".animation")

hamburger.addEventListener("click", () => {
    body.classList.toggle("active")
})

window.addEventListener("scroll", () => {
    const scrollDistance = Math.floor(window.scrollY)
    const opacity = 1 / ((scrollDistance / 500) + 1)

    title.style.right =  `${scrollDistance/3}px`
    description.style.left = `${scrollDistance/3}px`

    title.style.opacity = `${opacity}`
    description.style.opacity = `${opacity}`
})

animation.addEventListener("mouseenter", () => {
    animation.classList.toggle("hover")
})
animation.addEventListener("mouseleave", () => {
    animation.classList.toggle("hover")
})
