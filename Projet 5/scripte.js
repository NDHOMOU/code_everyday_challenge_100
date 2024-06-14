const loadText = document.querySelector('.loading-Text em')
const control = document.querySelector('.control')
const result = document.querySelector('.loading-Text')

let timer = 0
loadText.innerHTML = 0

function incremantator() {
    loadText.innerHTML = timer
    result.style.opacity = `${100 - timer}%`
    control.style.filter= `blur(${100 - timer}px)`

    if (timer == 100) {
        clearInterval(indentificator)
    }
    timer++
}

let indentificator = setInterval(incremantator, 25);


