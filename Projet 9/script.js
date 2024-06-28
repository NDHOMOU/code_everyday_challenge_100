const figures = document.querySelectorAll('figure');


figures.forEach(figure => {
    figure.addEventListener('click', ()=> {
        figures.forEach(figure => {
            figure.children[0].children[1].pause();
        });

        figure.children[0].children[1].play();
        
    })
});


