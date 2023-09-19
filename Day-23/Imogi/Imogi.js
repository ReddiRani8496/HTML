let button = document.querySelector('button');
let image = document.querySelector('img');
button.addEventListener('click',getImogi);
let url = "";
async function getImogi() {
    let response = await fetch(url);
    let im = await response.json();
    image.src = im.url;   
}