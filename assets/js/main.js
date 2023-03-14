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
    const imagesElement = ` <img class="img-fluid${i === activeImage ? 'active' : ''} "src="${imgSrc}" alt="">`
    console.log(imagesElement);
    // InsertAjancetHTML
    imagesElement.insertAdjacentElement('beforeend', imagesElement)
}