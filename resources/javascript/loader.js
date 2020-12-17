const loader = document.querySelector(".loader")

window.addEventListener("load", () => {
    setTimeout(function () {loader.style.display = "none"}, 1000)
})

window.addEventListener("unload", () => {
    loader.style.display = "block"
}) 