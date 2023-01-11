const myButton = document.querySelector('button');
const image = document.querySelector ('img');
const images = ["cat1.jpg", "cat2.jpeg", "cat3.jpg", "cat4.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage () {

    console.log(image);

    let randomImage = Math.floor(Math.random() * images.length);
    console.log(randomImage);
    image.src = "images/" + images[randomImage];
    
}