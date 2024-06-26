const contener = document.querySelector('.container');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');


openButton.addEventListener('click', () =>{
    contener.classList.add('show-nav')
    closeButton.style.display = 'block'
    openButton.style.display = 'none'

})
closeButton.addEventListener('click', () =>{
    contener.classList.remove('show-nav')
    openButton.style.display = 'block'
    closeButton.style.display ='none'
})


