// Creo un arrey e linko le immagini
const images = [
    '../assets/img/01.webp',
    '../assets/img/02.webp',
    '../assets/img/03.webp',
    '../assets/img/04.webp',
    '../assets/img/05.webp'
]

// Seleziono l'immagine attiva 
let activeImage = 0

//Seleziono l'elemento della DOM immagine in cui posizionare tutte le immagini
const imagesElement = document.querySelector('.slider > .images')
console.log(imagesElement);

//Loop sulle le immagini e aggiungo un nuovo elemento nella dom img
for (let i = 0; i < images.length; i++) {
    const imgSrc = images[i];
    const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`
    console.log(imgElement);
    // InsertAjacentHTML
    imagesElement.insertAdjacentHTML('beforeend', imgElement)
}

// Seleziono slider
const slideImagesElements = document.querySelectorAll('.slider > .images > img')
// clic sul button Prev
const nextEl = document.querySelector('.prev')
nextEl.addEventListener('click', function () {
    console.log('cliccato prev');
    console.log(slideImagesElements); 



})

// clic sul button Next
const prevEl = document.querySelector('.next')
prevEl.addEventListener('click', function () {
    console.log('cliccato next');
    console.log(slideImagesElements); 

})




