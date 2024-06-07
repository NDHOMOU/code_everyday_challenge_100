
let images = document.querySelectorAll('.photo');
let titres = document.querySelectorAll('h3');


images.forEach(image => {
    image.addEventListener('click', (event) => {
        console.log(image)
        affichage()
        image.style.width = '500%';
        titres.forEach(titre =>{
            titre.style.display = 'block';
        })
        
    });
    
})





function affichage() {
        images.forEach(image =>{
            image.style.width = '40%';
        })

        titres.forEach(titre =>{
            titre.style.display = 'none';
        })
}

 

/*


 profil.appendChild(iframe);
 iframe.style.display = 'none';

liens.forEach(lien => {
    lien.addEventListener('click', (event) => {
        const element = event.target;
        console.log(element.id);
        iframe.src = element.id;
        profilInfo.style.display = 'none';
        iframe.style.display = 'block'

    });
})

affichage = function() {
    const classe =document.querySelector('.images');
    const desImages = document.querySelector('.images img')

}
const iframe = document.createElement('iframe');
profil.appendChild(iframe);



let liens = document.querySelectorAll('li');
 let profil = document.querySelector('.profil');*/