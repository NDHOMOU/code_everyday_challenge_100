const progress = document.getElementById('progress')
const precedent = document.getElementById('precedent')
const suivant = document.getElementById('suivant')
const cercles = document.querySelectorAll('.cercle')

let currentActive = 1
console.log(suivant)
suivant.addEventListener('click',() => {
        currentActive++

        if(currentActive > cercles.length) {
            currentActive = cercles.length
        }

        update()
        console.log('suivant')
})

precedent.addEventListener('click',() => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    cercles.forEach((cercle, idx) => {
        if(idx < currentActive) {
            cercle.classList.add('actif')
        } else {
            cercle.classList.remove('actif')
        }
    })

    const actives = document.querySelectorAll('.actif')
    progress.style.width = (actives.length -1) / (cercles.length -
     1) * 100 + '%'
   
     if(currentActive === 1) {
        precedent.disabled = true
     } else if(currentActive ===cercles.length) {
        suivant.disabled = true
     } else {
        precedent.disabled = false
        suivant.disabled = false
     }

}