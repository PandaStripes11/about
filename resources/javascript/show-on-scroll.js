const elementsToScroll = document.querySelectorAll(".show-on-scroll")

const scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return ((rect.top <= 0 && rect.bottom >= 0)||(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))||(rect.top > 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)));
  }

function loop(elements) {

    elements.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
  
    scroll(loop);
}

loop(elements)