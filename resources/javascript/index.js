const body = document.querySelector("body")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () => {
    body.classList.toggle("active")
})