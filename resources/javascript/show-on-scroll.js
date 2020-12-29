const upElements = document.querySelectorAll(".up")
const downElements = document.querySelectorAll(".down")
const rightElements = document.querySelectorAll(".right")
const leftElements = document.querySelectorAll(".left")
const stillElements = document.querySelectorAll(".still")

const oneTimeDownElements = document.querySelectorAll(".once-down")
const oneTimeUpElements = document.querySelectorAll(".once-up")
const oneTimeLeftElements = document.querySelectorAll(".once-left")
const oneTimeRightElements = document.querySelectorAll(".once-right")
const oneTimeStillElements = document.querySelectorAll(".once-still")

const scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return ((rect.top <= 0 && rect.bottom >= 0)||(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))||(rect.top > 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)));
  }

function loop(elements, appendClass) {

    elements.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add(appendClass);
      } else {
        element.classList.remove(appendClass)
      }
    });
}

function oneLoop(elements, appendClass) {
  elements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add(appendClass);
    }
  });
}

window.addEventListener("load", () => {
  setTimeout(function () {
    loop(upElements, "float-up")
    loop(downElements, "float-down")
    loop(rightElements, "from-right")
    loop(leftElements, "from-left")
    loop(stillElements, "still-appear")

    oneLoop(oneTimeDownElements, "float-down")
    oneLoop(oneTimeUpElements, "float-up")
    oneLoop(oneTimeLeftElements, "from-left")
    oneLoop(oneTimeRightElements, "from-right")
    oneLoop(oneTimeStillElements, "still-appear")
  }, 750)
  
})
window.addEventListener("scroll", () => {
  loop(upElements, "float-up")
  loop(downElements, "float-down")
  loop(rightElements, "from-right")
  loop(leftElements, "from-left")
  loop(stillElements, "still-appear")
  
  oneLoop(oneTimeDownElements, "float-down")
  oneLoop(oneTimeUpElements, "float-up")
  oneLoop(oneTimeLeftElements, "from-left")
  oneLoop(oneTimeRightElements, "from-right")
  oneLoop(oneTimeStillElements, "still-appear")
})