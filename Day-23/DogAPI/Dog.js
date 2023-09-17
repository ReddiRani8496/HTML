let dog = document.querySelector('img');
let dogurl ="https://random.dog/woof.json";

let button = document.querySelector('button');
button.addEventListener('click',getDog);

async function getDog() {
    let response = await fetch(dogurl);
    let dogImage = await response.json();
    dog.src = dogImage.url;
}