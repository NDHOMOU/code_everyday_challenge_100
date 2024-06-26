

 const labels = document.querySelectorAll('.champ label')

 labels.forEach(label => {
     label.innerHTML = label.innerText
    .split('')
     .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
 });

// let inputAnimated = document.querySelector('input');

// inputAnimated.onclick = function() {
//     animateWithcss(inputAnimated,'slide-in-right');
// };

// function animatewithcss(input,champ) {
//     let duration;

//     duration = getComputedStyle(input).getPropertyValue('--animation-dur');
//     duration = parseseFloat(duration);

//     setTimeout(() => {
//         element.classList.remove(input);
//     }, duration + 10);
// }