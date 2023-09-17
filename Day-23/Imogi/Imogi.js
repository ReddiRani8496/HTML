let button = document.querySelector('button');
let image = document.querySelector('img');
button.addEventListener('click',getImogi);
let url = "https://api.api-ninjas.com/v1/emoji?name=slightlysmilingface/apikey=2yNYsi9tYt6xBcBa67Xsfw==euKWXn0OnUHpBnqf";
async function getImogi() {
    let response = await fetch(url);
    let im = await response.json();
    image.src = im.url;   
}