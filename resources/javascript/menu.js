const projects = document.querySelectorAll(".projects")
const project = document.getElementById("project")
const ham = document.querySelector(".hamburger")
const bod = document.querySelector("body")

ham.addEventListener("click", () => {
    setTimeout(() => {
        if (bod.classList.contains("active")) {
            return
        } else {
            projects.forEach(project => {
                project.classList.remove("selected")
            })
        } 
    }, 250)
})

projects.forEach((project) => {
    project.addEventListener("click", () => {
        project.classList.add("selected")
    })
})