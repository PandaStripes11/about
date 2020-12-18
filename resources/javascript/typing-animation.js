const description = document.querySelector(".description")

let j = 1
let i = 0;
const stringArr = ['Welcome to my website', 'Going over my middle school projects', '5 time PSIA District Winner', '2 Time Mathfax National Champion', 'Programmed and coded by Donte Truong']

function typing() {
    if (i === 0) {
        descriptionChanger()
    }
    setTimeout(function() {   
        descriptionChanger()
        i++;
        j = 1;
        if (i > -1) {           
          typing();             
        }                      
    }, 6000)
}

function descriptionChanger() {
    setTimeout(() => {
        const index = i % 5
        const counter = j % (stringArr[index].length + 1)
        if (counter != 0) {
            description.innerHTML = stringArr[index].substring(0, counter)
            j++
        }
        if (counter != 0) {
            descriptionChanger()
        }
    }, 100)
}


window.addEventListener("load", setTimeout(typing, 750))