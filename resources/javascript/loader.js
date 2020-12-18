const loader = document.querySelector(".loader")

window.addEventListener("load", () => {
    setTimeout(function () {loader.style.display = "none"}, 750)
})

window.addEventListener("unload", () => {
    loader.style.display = "block"
}) 