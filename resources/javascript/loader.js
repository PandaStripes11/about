const loader = document.querySelector(".loader")

window.addEventListener("load", () => {
    loader.style.display = "none"
})

window.addEventListener("unload", () => {
    loader.style.display = "block"
}) 