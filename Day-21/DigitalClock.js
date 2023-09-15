let h1 = document.querySelector('h1');
function getTime() {
    let date = new Date();
    let time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    h1.innerText = time;
}
setInterval(getTime,1000);