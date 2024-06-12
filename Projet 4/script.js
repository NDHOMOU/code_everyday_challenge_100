const divButton =document.querySelector('div');

const hiddenButton = document.querySelector('.hidden');
const inputButton = document.querySelector('input');

hiddenButton.addEventListener('click', () => {
    hiddenButton.classList.add('div');
    divButton.style.backgroundColor = "blue";
    hiddenButton.style.marginLeft ="-25px"

    inputButton.style.display ='block'
})

hiddenButton.addEventListener('dblclick', () => {
   hiddenButton.classList.remove('div')
   divButton.style.backgroundColor = "white";
    inputButton.style.display ='none'
     hiddenButton.style.marginLeft ="0"
})