let url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=034576bb06cc892c279eb2eec83e5ead";

let cityName = 'hyderabad';
let btn = document.querySelector('button');
btn.addEventListener('click',getWeather);

async function getWeather() {
    let city = document.querySelector('input');
    cityName = city.value;
    let url1 =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=034576bb06cc892c279eb2eec83e5ead`;
    let response = await fetch(url1);
    let weather = await response.json();
    console.log(weather);
}