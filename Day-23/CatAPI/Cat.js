let cat = document.querySelector('img');
let caturl = "https://api.thecatapi.com/v1/images/search?api_key=live_qPj1unk1yyTI5jGMvTpVRvIa8d6JvZtSpyXDgRHArYRl5lazNvhNKgiKyTonGSF2";
let button = document.querySelector('button');
button.addEventListener('click',getCat);
async function getCat() {
    let response = await fetch(caturl);
    let catImage = await response.json();
    cat.src = catImage[0].url;
}